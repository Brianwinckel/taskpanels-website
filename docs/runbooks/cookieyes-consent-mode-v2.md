# CookieYes + Google Consent Mode v2 + GA4 via GTM — Setup Runbook

**Status:** Working configuration as deployed on `taskpanels.app`, 2026-04-26.
**Stack:** Next.js 16 App Router, React 19, Vercel, Google Tag Manager, Google Analytics 4, CookieYes (free tier).
**Audience:** A future Claude session (or human) replicating this setup on another Next.js site, or debugging the same site.

---

## What this runbook delivers

A consent-compliant analytics setup that:

- Loads **only** Google Tag Manager from the page (no direct GA4 script).
- Registers Consent Mode v2 defaults to **denied** for all storage types **before** GTM loads, so the gtag consent system has explicit defaults at parse time.
- Renders the CookieYes banner on first visit; respects user choice.
- Pre-consent: GA4 sends only **cookieless pings** (`gcs=G100`, no `_ga` cookie, no PII).
- Post-Accept: GA4 sends **full pings** (`gcs=G111`, `_ga` cookie set, full payload).
- Reload-with-consent: GA4 fires immediately on page load with `gcs=G111`.
- One Next.js code change deploys the whole client-side stack; everything else is configured in the GTM workspace.

If the live `google_tag_data.ics.entries.analytics_storage` shows `{ default: false, implicit: true }` you have **not** broken anything — see "Pitfall: implicit:true is not a bug" below.

---

## Architecture (and why)

```
┌─ HTML <head> ───────────────────────────────────────────┐
│  Single inline <script>:                                │
│    1. window.dataLayer = window.dataLayer || []         │
│    2. function gtag(){dataLayer.push(arguments);}       │
│    3. gtag('consent', 'default', { all denied })   ←──┐ │
│    4. gtag('set', 'ads_data_redaction', true)         │ │
│    5. gtag('set', 'url_passthrough', true)            │ │
│    6. (function GTM IIFE)(window, ..., 'GTM-XXXXX')   │ │
│       inserts <script src="...gtm.js?id=GTM-XXXXX">   │ │
│                                                       │ │
│  ALL FIVE STEPS RUN IN ONE EXECUTION CONTEXT, IN ORDER ┘
│  Defaults register BEFORE gtm.js downloads.              │
└──────────────────────────────────────────────────────────┘

┌─ HTML <body> ───────────────────────────────────────────┐
│  <noscript>                                             │
│    <iframe src="...ns.html?id=GTM-XXXXX">               │
│  </noscript>                                            │
└──────────────────────────────────────────────────────────┘

┌─ GTM workspace ─────────────────────────────────────────┐
│  Tag 1: CookieYes - Consent Banner                      │
│    Type: Custom HTML                                    │
│    Body: <script src="...cdn-cookieyes.com/.../script.js">
│    Trigger: Consent Initialization - All Pages          │
│    Consent settings: No additional consent required     │
│                                                         │
│  Tag 2: GA4 - Configuration                             │
│    Type: Google Tag (template)                          │
│    Tag ID: G-XXXXXXXX                                   │
│    Trigger: All Pages (Page View)                       │
│    Built-in Consent Checks: ON (template default)       │
│    Additional Consent Check: NO additional consent      │
│                                                         │
│  No "Consent Mode v2 Defaults" Custom HTML tag —        │
│  defaults are set in <head>, not in GTM.                │
└──────────────────────────────────────────────────────────┘
```

### Why this shape (the trade-offs)

1. **GTM as the single tag controller, not direct `<GoogleAnalytics>`.** Adding the next tag (Microsoft Clarity, ad pixels, experiment platforms) becomes a no-deploy change in GTM. Consent Mode v2 signaling lives in one place.

2. **Consent defaults inline in `<head>`, NOT in a Custom HTML GTM tag.** This is the load-bearing decision. `gtag.js` initializes its `google_tag_data.ics` table from the dataLayer queue **at the moment gtm.js parses your dataLayer**. If your `gtag('consent','default',...)` call is in a Custom HTML tag inside GTM, it fires *after* gtm.js has already initialized ICS in implicit-default mode. Subsequent calls are then treated as updates, not defaults.

3. **The full GTM IIFE is colocated in the same inline `<script>` as the consent defaults.** This is what `@next/third-parties` `<GoogleTagManager>` does NOT do — it splits the bootstrap into two `next/script` Script components with `afterInteractive` strategy, which puts the consent default and the GTM IIFE in *different* execution contexts and gives Satori, hydration, and async scripts a chance to race. Don't use it for this; use the canonical Google snippet inline.

4. **GA4 fires with Built-in Consent Checks only, NOT the Additional Consent gate.** "Require additional consent for tag to fire / analytics_storage" *blocks the tag entirely* at the GTM trigger level. It doesn't degrade to cookieless — it just doesn't fire. Built-in Consent Checks at the gtag.js layer are what shape the request payload (`gcs=G100` cookieless pre-consent, `gcs=G111` full post-consent) — that's what Consent Mode v2 was designed for.

5. **Consent Mode v2 defaults to denied for all 7 storage types.** `security_storage` is the only one set to `granted` (it covers fraud prevention which has legitimate-interest basis under GDPR). `wait_for_update: 500` gives CookieYes 500ms to issue an update before tags evaluate.

---

## Prerequisites

- Vercel-deployed Next.js 16 App Router site (or comparable).
- A GTM container (web target). Note the container ID (`GTM-XXXXXXX`).
- A CookieYes account. Note the site key (the long hex in the script URL — e.g. `ad67a7b0b33c9a7fcf490a1e5df0ce61`).
- A GA4 property. Note the measurement ID (`G-XXXXXXXX`).
- A privacy policy and terms of service page already live (cookie consent without a privacy policy is a GA4 ToS violation).

If you currently have GA4 loading directly via `@next/third-parties/google` `<GoogleAnalytics gaId>`, **remove that** before proceeding. Two GA4 loaders on the same page double-count events.

---

## Step 1 — Next.js code change

Replace the entire analytics block in `app/layout.tsx` with this. The script is byte-identical to what TaskPanels ships in production; substitute your own GTM container ID.

```tsx
// app/layout.tsx — relevant fragment

const GTM_ID = "GTM-XXXXXXX"; // ← your container ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/*
          Consent Mode v2 defaults + GTM bootstrap colocated in ONE
          synchronous inline script. Don't split. Don't use
          @next/third-parties <GoogleTagManager> for this.
        */}
        <script
          id="gtm-and-consent-defaults"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
`,
          }}
        />
      </head>
      <body>
        {/* GTM noscript iframe — for users with JS disabled */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* …rest of your layout… */}
        {children}
      </body>
    </html>
  );
}
```

**Things to watch**:

- The `dangerouslySetInnerHTML` body must be a plain string. Don't template-interpolate object literals into it; the JSON inside `gtag(...)` calls must be valid JS, not a `JSON.stringify()` blob.
- `function gtag(){dataLayer.push(arguments);}` is the canonical Google pattern. Do not rewrite it as `dataLayer.push(['consent', ...])` (plain array) — gtag's consent system specifically detects the `Arguments` object pushed by a real `gtag()` call.
- Don't add a Content Security Policy `script-src` that blocks `'unsafe-inline'` without an accompanying nonce on this script — it has to execute synchronously at parse.
- If you also want to remove the now-dead OG image reference (which usually accompanies an old `<GoogleAnalytics>` install), use Next.js's `app/opengraph-image.tsx` file convention instead.

Build, deploy, then verify the live page contains the snippet:

```bash
curl -sL https://YOUR-DOMAIN/ | grep -E 'function gtag|GTM-' | head -5
```

You should see `function gtag(){dataLayer.push(arguments);}` and the GTM container ID.

---

## Step 2 — GTM workspace setup

In `tagmanager.google.com`, in the workspace for your container:

### Tag 1 — CookieYes Consent Banner

| Field | Value |
|---|---|
| Tag name | `CookieYes - Consent Banner` |
| Tag type | **Custom HTML** |
| HTML body | `<script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/YOUR_SITE_KEY/script.js"></script>` |
| Tag firing options | Once per page |
| Consent settings → Built-in | (not applicable — Custom HTML) |
| Consent settings → Additional | **No additional consent required** |
| Trigger | **Consent Initialization - All Pages** (built-in trigger) |

The trigger is critical. Use the *Consent Initialization* trigger, not "All Pages - Page View." Consent Initialization fires before every other trigger type, which is the slot a CMP needs.

### Tag 2 — GA4 Configuration

| Field | Value |
|---|---|
| Tag name | `GA4 - Configuration` |
| Tag type | **Google Tag** (the template, not Custom HTML) |
| Tag ID | `G-XXXXXXXX` (your GA4 measurement ID) |
| Trigger | **All Pages** (built-in Page View trigger) |
| Consent settings → Built-in | **ON** (the template default — checks `ad_storage`, `ad_personalization`, `ad_user_data`, `analytics_storage`) |
| Consent settings → Additional | **No additional consent required** |

The Additional Consent setting is the bit teams get wrong. **Do not** set it to "Require additional consent for tag to fire / `analytics_storage`." That blocks the tag entirely at the GTM trigger level — even after consent is granted, the tag won't fire on that page-load because the trigger already evaluated. Built-in Consent Checks at the gtag.js layer handle the cookieless-vs-full payload distinction natively.

### What NOT to add

There is **no Custom HTML "Consent Mode v2 - Defaults (Denied)" tag** in this workspace. Defaults are set in the page `<head>` (Step 1). A Custom HTML tag firing on Consent Initialization runs after gtm.js has already initialized ICS, so its `gtag('consent','default',...)` call gets recorded as an update rather than a default. This is the bug we hit; don't repeat it.

### Save, preview, publish

- **Save** each tag.
- Run **Preview** (Tag Assistant) against your live URL. See verification below.
- When all states green: **Submit → Version Name `Initial CookieYes + Consent Mode v2 setup` → Publish**.

---

## Step 3 — Verification (Tag Assistant)

Open the published GTM container in Tag Assistant Preview, with cookies cleared and a hard reload of your URL.

### State 1 — Pre-consent (no banner action yet)

| Check | Expected |
|---|---|
| Container Loaded → Tags Fired | `CookieYes - Consent Banner` |
| Container Loaded → Tags Blocked by Consent Settings | `GA4 - Configuration` |
| Banner | Visible on the page |
| Network: request to `google-analytics.com/g/collect` | **Yes — but with `gcs=G100`** (cookieless ping; npa=1; pscdl=denied) |
| `_ga` cookie | Not set |
| Tag Assistant Consent panel → analytics_storage | "On-page Default: Denied" / "Current State: Denied" |

If GA4 is in **Tags Not Fired** (rather than Blocked by Consent Settings), the Built-in Consent Checks aren't enabled on the GA4 tag — fix in workspace.

If `/collect` doesn't fire at all pre-consent, the Additional Consent gate is still set on the GA4 tag — fix in workspace.

### State 2 — Click Accept All

| Check | Expected |
|---|---|
| dataLayer | `['consent','update', { all 7 types: 'granted' }]` frame appears |
| Banner | Hidden (a small "Manage Preferences" floating icon takes over, bottom-left) |
| Network: next `/collect` request | `gcs=G111`, `npa=0`, `_ga` cookie set |
| Tag Assistant Consent panel | analytics_storage now Granted |

### State 3 — Reload with consent stored

| Check | Expected |
|---|---|
| Banner | Stays hidden (CookieYes reads `cookieyes-consent` cookie) |
| GA4 fires immediately on Container Loaded | Yes |
| Network | `/collect` with `gcs=G111` fires on first paint |
| `cid` (client ID) | Same as State 2 — preserved across consent transition |

### State 4 — Click "Manage Preferences" → Reject All

| Check | Expected |
|---|---|
| dataLayer | `['consent','update', { ... 'analytics_storage':'denied' }]` |
| Subsequent `/collect` requests | Revert to `gcs=G100` cookieless |

If all four states behave as expected, you're done. Publish and move on.

---

## Pitfall: `implicit: true` is not a bug

`google_tag_data.ics.entries.analytics_storage` will show `{ default: false, implicit: true, quiet: false }` even when everything is configured correctly. This is **not** a sign that your `gtag('consent','default',...)` call was ignored.

In Consent Mode v2, the four advertising/analytics-tied storage types (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`) carry an `implicit: true` marker that means *"awaiting an explicit user-interaction `consent.update` event before this counts as user-affirmed."* Setting a `denied` default does not flip that flag to `false`. The non-v2-enforced types (`functionality_storage`, `personalization_storage`, `security_storage`) don't carry the `implicit` field at all when set explicitly.

The success criterion is **observable behavior**, not the ICS shape. Verify via Tag Assistant + Network, not via console-poking `google_tag_data.ics`.

The TaskPanels session burned several iterations chasing this. Don't.

---

## Pitfall: `@next/third-parties/google <GoogleTagManager>` doesn't work for this

The component splits the GTM bootstrap into two `next/script` Script components with `afterInteractive` strategy. That puts the GTM IIFE in a different execution context than your inline consent defaults, with hydration timing and async-script ordering in between. The consent defaults race the GTM bootstrap, and on some loads the defaults don't register as explicit.

Use the canonical Google inline snippet instead (Step 1 above). If you have an existing `<GoogleTagManager>` import, remove it.

---

## Pitfall: "Require additional consent for tag to fire" is a trap on Google tags

Setting the GA4 tag's Additional Consent gate to require `analytics_storage` means the tag is **blocked by trigger evaluation** when analytics_storage is denied. Consent Mode v2's whole point is that Google's own tags handle consent natively at the gtag.js layer — they send cookieless pings when consent is denied and full pings when granted. Blocking the tag entirely defeats that.

Use this gate for **non-Google vendor tags** that don't have native Consent Mode support (Facebook Pixel, LinkedIn Insight, HubSpot, etc.). For GA4, Google Ads, Floodlight — leave it as "No additional consent required" and rely on Built-in Consent Checks.

---

## Privacy policy disclosures

Required content for `/privacy` (or equivalent) when this stack is live. TaskPanels' `app/privacy/page.tsx` is the working example.

- **Cookies & Tracking Technologies** section that names Google Tag Manager (with container ID), Google Analytics 4 (with measurement ID), and CookieYes by name.
- Cookie inventory with names, purposes, and expiration windows:
  - `cookieyes-consent` — stores user's consent choices, ~1 year, set by CookieYes.
  - `_ga` — distinguishes unique visitors, ~2 years, set by Google Analytics, only after consent.
  - `_ga_<MEASUREMENT_ID>` — tracks session state for the GA4 property, ~2 years, only after consent.
- **Consent & Your Choices** section explaining default-denied state, the three banner buttons, and how to revisit consent via the Manage Preferences icon.
- **Data Sharing & Third Parties** clarifying that Google and CookieYes act as processors.
- **International Data Transfers** mentioning EU–US Data Privacy Framework + Standard Contractual Clauses if you have EU traffic.
- **Data Retention** with per-source retention windows (GA4 default is 14 months; consent records ~1 year).
- **Your Rights** — GDPR, CCPA/CPRA, withdraw consent, opt-out of sale/sharing.

Cross-reference from `/terms` so both documents agree.

---

## Reference: TaskPanels production values (2026-04-26)

For the next session debugging this exact site:

| Field | Value |
|---|---|
| Domain | `taskpanels.app` |
| GTM Container ID | `GTM-MMVK7FPJ` |
| GA4 Measurement ID | `G-G00NB917QJ` |
| CookieYes site key | `ad67a7b0b33c9a7fcf490a1e5df0ce61` |
| Implementation file | `app/layout.tsx` (single inline script in `<head>`) |
| Privacy policy | `app/privacy/page.tsx` |
| GTM workspace description | `cookieyes-consent-mode-v2-setup` |
| Live as of | GTM Container Version 2, 2026-04-26 |
| Verification artifacts | Tag Assistant screenshots from 2026-04-26 (state 1–4 all green) |

Live `/collect` URLs observed during verification:

```
Pre-consent  : .../g/collect?v=2&tid=G-G00NB917QJ&gcs=G100&npa=1&pscdl=denied&...
Post-Accept  : .../g/collect?v=2&tid=G-G00NB917QJ&gcs=G111&gcu=1&npa=0&pscdl=...&_s=2&en=user_engagement&gcut=3
On reload    : .../g/collect?v=2&tid=G-G00NB917QJ&gcs=G111&npa=0&pscdl=noapi&...&en=page_view&seg=1&sct=1
```

`gcs=G100` = consent system on, ad_storage denied, analytics_storage denied (cookieless ping).
`gcs=G111` = consent system on, ad_storage granted, analytics_storage granted (full ping).
`gcu=1` = consent was just updated this hit.

---

## Related Next.js considerations

- This setup uses **dynamic OG images** via `app/opengraph-image.tsx` and `app/twitter-image.tsx`. If you also remove a stale static OG reference, point any `Organization.logo` JSON-LD field at the dynamic route until a proper square brand mark exists.
- **Cache busting on Vercel**: GTM container changes in the workspace publish independently of the Next.js deploy. The page snippet doesn't change — only the tags inside the container do. So you don't need to redeploy the site to push GTM changes.
- **Strict CSP**: this setup uses inline scripts, which conflicts with strict `script-src 'self'` policies. If you adopt CSP, generate a per-request nonce, attach it to the inline script tag, and add `'nonce-...'` to the policy.

---

## When to revisit

- If `gcs=G100` ever stops appearing in pre-consent `/collect` requests, GTM has somehow ended up loading GA4 without consent gating — re-check the Built-in Consent Checks on the GA4 tag.
- If `_ga` cookie is being set pre-consent, you've reverted to the `<GoogleAnalytics>` direct install accidentally — check `app/layout.tsx` imports.
- If the banner doesn't render but `cookieyes-consent` cookie isn't set yet, the CookieYes Custom HTML tag isn't firing — check the trigger is *Consent Initialization*, not All Pages.
- If `google_tag_data.ics` shows `implicit: true` on the v2-enforced types, that's normal (see Pitfall 1 above). Verify behavior, not ICS shape.

---

*Last updated: 2026-04-26. If you change this setup, update this document in the same commit.*
