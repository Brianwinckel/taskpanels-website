"""
Generate the Phase 0 baseline audit (JSON + PDF) for taskpanels-website.
Run: python3 docs/audits/build_baseline_audit.py
"""

import json
from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame,
    Paragraph, Spacer, PageBreak, Table, TableStyle,
    NextPageTemplate,
)

# --- Brand palette (matches the TaskPanels playbook) ---
BG = HexColor("#0f172a")        # slate-900
INK = HexColor("#0f172a")
SURFACE = HexColor("#f8fafc")   # slate-50
BLUE = HexColor("#2563eb")      # blue-600
BLUE_HOVER = HexColor("#1d4ed8")
MUTED = HexColor("#64748b")     # slate-500
BORDER = HexColor("#e2e8f0")    # slate-200
RED = HexColor("#dc2626")       # red-600
AMBER = HexColor("#d97706")     # amber-600
GREEN = HexColor("#059669")     # emerald-600

OUT_DIR = Path(__file__).parent
JSON_OUT = OUT_DIR / "baseline-2026-04.json"
PDF_OUT = OUT_DIR / "baseline-2026-04.pdf"

# --- The audit data (populated from live probe + HTML extraction on 2026-04-25) ---
audit = {
    "audit_metadata": {
        "domain": "taskpanels.app",
        "audit_date": "2026-04-25",
        "audit_type": "Phase 0 baseline",
        "auditor": "Claude Opus 4.7 via /geo skill",
        "production_url_status": "HTTP 200 — publicly accessible, Vercel-hosted, x-nextjs-prerender confirmed",
        "note": (
            "Production host is taskpanels.app (marketing) with the product at app.taskpanels.app. "
            "Both return HTTP 200. lib/constants.ts MARKETING_URL matches the rendered canonical, "
            "og:url, JSON-LD url, and sitemap base — no canonical-host mismatch. A March 2026 GEO "
            "remediation pass shipped robots.txt, sitemap.xml, llms.txt, four JSON-LD schemas, "
            "canonicals across all 5 pages, and metadataBase. On 2026-04-26 the analytics + consent "
            "stack went live: GTM container GTM-MMVK7FPJ V2 published, CookieYes consent banner active, "
            "Google Consent Mode v2 defaults registered inline in &lt;head&gt; ahead of the GTM IIFE, GA4 "
            "(G-G00NB917QJ) wired exclusively through GTM with Built-in Consent Checks. Verified in "
            "Tag Assistant: pre-consent /collect emits gcs=G100 (cookieless ping, no _ga cookie), "
            "post-Accept emits gcs=G111 (full payload, _ga set), cid preserved across the consent "
            "transition. C-2 (cookie consent) and M-2 (GTM single-controller) both closed in this "
            "iteration."
        ),
    },
    "composite_score": {
        "score": 64,
        "grade": "C-",
        "summary": (
            "Site is publicly reachable at taskpanels.app (HTTP 200, HSTS set, SSR confirmed, robots meta = "
            "index/follow). Technical groundwork is meaningfully complete: 4 JSON-LD blocks (Organization, "
            "WebSite, SoftwareApplication with 3 Offers, FAQPage), explicit AI-crawler allow-list in robots.txt, "
            "sitemap.xml and llms.txt both serving 200, canonical URLs on all 5 pages, /privacy and /terms "
            "shipped, GTM + CookieYes + Consent Mode v2 wired and publishing properly-signaled GA4 hits, "
            "dynamic Open Graph + Twitter cards via app/opengraph-image.tsx (statically optimized at build "
            "time), Organization.logo JSON-LD repointed at the live OG endpoint. Remaining gaps cluster on "
            "two fronts: the entire content engine is one homepage with 869 visible words and 0 spokes, and "
            "authority signals are near-zero — testimonials lack named attribution + Review schema, "
            "Organization.sameAs is empty, no /about page, no LinkedIn company page, no brand-mention "
            "coverage. Zero remaining Critical findings. Headroom is large; the next compounding move is "
            "the Phase 1 spoke buildout starting with /about."
        ),
    },
    "scores": {
        "citability": {
            "score": 40,
            "weight": 25,
            "notes": (
                "Homepage has 869 visible words across 1 H1 / 11 H2s / 22 H3s — better-structured than the "
                "Barley baseline (714 words / 6 H2s) but still under the 1500–2500 target for a hub page. "
                "FAQPage schema is already live with 5 quotable Q&A pairs (genuine differentiator vs sites "
                "without it). No statistics, research citations, or stat callouts anywhere on the site — the "
                "March audit flagged this and it's still open. No \"unrealized effort = N hours/week\"-style "
                "claim that AI engines can extract and attribute."
            ),
        },
        "ai_crawler_access": {
            "score": 80,
            "weight": 0,
            "notes": (
                "Public, HTTP 200, no SSO. robots meta = index, follow. public/robots.txt exists with "
                "explicit Allow rules for: GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, "
                "Google-Extended, Googlebot, Bingbot, cohere-ai, anthropic-ai, plus Sitemap directive. "
                "Missing from the allow-list: Perplexity-User, Applebot-Extended, Amazonbot, CCBot, "
                "Meta-ExternalAgent / Meta-ExternalFetcher. Easy fix."
            ),
        },
        "llms_txt": {
            "score": 75,
            "weight": 0,
            "notes": (
                "/llms.txt exists and is comprehensive: About, Key Pages (5 URLs), Core Features (8 bullets), "
                "Pricing tiers, Target Audience, and What Makes TaskPanels Different. Will need re-generation "
                "every time a Phase 1 spoke ships."
            ),
        },
        "brand_mentions": {
            "score": 10,
            "weight": 20,
            "notes": (
                "Brand is new. No presence on G2, Capterra, GetApp, AlternativeTo, Product Hunt, Crunchbase, "
                "BuiltWith, Wellfound, or HARO. No LinkedIn company page, X/Twitter, YouTube, or Reddit "
                "presence detected. Organization.sameAs in JSON-LD is an empty array. AI engines establish "
                "entity-existence partly through these listings — without them, even branded queries struggle "
                "to surface a confident citation."
            ),
        },
        "content_eeat": {
            "score": 35,
            "weight": 20,
            "notes": (
                "Single-page hub with no /about, no founder bio, no author bylines, no Person schema, no "
                "real-name testimonials, no last-updated dates, no external citations. Privacy policy and "
                "Terms are live (trust signal). Copy is clean and direct, with strong differentiation "
                "messaging (\"built for the worker, not the watcher\"). The product narrative is solid; the "
                "authority scaffolding around it is thin."
            ),
        },
        "technical": {
            "score": 82,
            "weight": 15,
            "notes": (
                "Next.js 16 App Router, SSR confirmed (x-nextjs-prerender = 1, x-vercel-cache = HIT), HSTS "
                "set (max-age=63072000), proper viewport meta, semantic structure (1 H1 / 11 H2s / 22 H3s). "
                "robots.txt + sitemap.xml + llms.txt all 200. Canonicals on all 5 pages via "
                "alternates.canonical. metadataBase set. GTM container GTM-MMVK7FPJ V2 published with "
                "CookieYes consent banner + Google Consent Mode v2 defaults colocated with the GTM IIFE in "
                "a single synchronous inline &lt;script&gt; in &lt;head&gt;. GA4 (G-G00NB917QJ) loaded exclusively via "
                "GTM with Built-in Consent Checks; Tag Assistant verified gcs=G100 pre-consent (cookieless), "
                "gcs=G111 post-Accept (full), cid preserved. Homepage uses 59 inline SVGs and 0 raster "
                "images — fast and accessible, but means there's no LCP-optimized hero raster to monitor. "
                "Remaining gaps: /og/taskpanels-og.png returns 404 (OG previews broken); no "
                "app/not-found.tsx or app/error.tsx (default Next.js 404/500); no IndexNow integration; "
                "Core Web Vitals not yet captured — pending Brian running PageSpeed Insights."
            ),
        },
        "schema": {
            "score": 75,
            "weight": 10,
            "notes": (
                "Four JSON-LD blocks live in &lt;head&gt;: Organization, WebSite, SoftwareApplication (with three "
                "Offers covering Free / Pro $12 / Team $9, plus 8-item featureList), and FAQPage on the "
                "homepage FAQ section (5 Q&As). Substantially ahead of the Barley baseline (which had 2 "
                "skeletal schemas). Still missing: sameAs / contactPoint / logo absolute URL on Organization, "
                "aggregateRating / screenshot URLs on SoftwareApplication, BreadcrumbList on sub-pages, "
                "HowTo on the \"3 simple steps\" section, Review/Person on testimonials, Article (no blog "
                "yet), speakable, and Person schema on a future /about page."
            ),
        },
        "platforms": {
            "scores": {
                "google_ai_overviews": 35,
                "chatgpt_search": 35,
                "perplexity": 35,
                "gemini": 30,
                "bing_copilot": 30,
            },
            "weight": 10,
            "notes": (
                "FAQPage schema + llms.txt + clear differentiation copy ('not surveillance') give every "
                "platform something to grab. But: no comparison pages (/vs/asana, /vs/jira, /vs/toggl) "
                "where mid-funnel queries get cited, no Article schema (no blog), no real-name reviews "
                "anywhere AI can cross-reference. Score reflects 'reachable + parsable + minimally citable' "
                "— meaningful uplift available with Phase 1 spokes + the citable-stat fix."
            ),
        },
    },
    "on_page_findings": {
        "title": "TaskPanels — Turn your work into proof.",
        "title_length": 39,
        "meta_description": (
            "TaskPanels helps professionals track their day and automatically turn it into a clean, "
            "manager-ready work summary with completed work, blockers, approvals, and next steps."
        ),
        "meta_description_length": 171,
        "canonical": "https://taskpanels.app",
        "og_url": "https://taskpanels.app",
        "og_image": "https://taskpanels.app/og/taskpanels-og.png  (file 404 — broken)",
        "og_locale": "en_US",
        "og_type": "website",
        "twitter_card": "summary_large_image",
        "twitter_image": "https://taskpanels.app/og/taskpanels-og.png  (file 404 — broken)",
        "robots_meta": "index, follow",
        "viewport": "width=device-width, initial-scale=1",
        "h1_count": 1,
        "h1_text": "Track your day. Prove your impact.",
        "h2_count": 11,
        "h2_list": [
            "You did a lot today. Could you explain it clearly right now?",
            "Time trackers log hours. Project tools track tasks. TaskPanels shows your actual work.",
            "From work to summary in 3 simple steps",
            "What TaskPanels actually helps you do",
            "This is the update your boss actually wants",
            "Some of your most important work never becomes a final deliverable.",
            "Built for professionals who need their work to be visible",
            "Why early users love TaskPanels",
            "Simple pricing for clearer workdays",
            "Questions, answered",
            "Your work deserves a better record than memory.",
        ],
        "h3_count": 22,
        "image_count": 0,
        "inline_svg_count": 59,
        "images_missing_alt": 0,
        "schemas_present": ["Organization", "WebSite", "SoftwareApplication", "FAQPage"],
        "word_count_visible": 869,
    },
    "critical_findings": [
    ],
    "high_findings": [
        {
            "id": "H-1",
            "severity": "High",
            "phase": 1,
            "title": "Single-page hub with no spokes — every keyword cluster competes for the homepage",
            "detail": (
                "TaskPanels has only 5 indexable URLs: /, /features, /pricing, /privacy, /terms. The homepage "
                "is doing the SEO work of ten landing pages — \"daily work tracker for engineers,\" \"manager "
                "1:1 prep,\" \"freelance status reports,\" \"Asana alternative for personal work,\" "
                "\"unrealized effort tracking,\" etc. all compete for the same URL. This is the single biggest "
                "SEO opportunity. Detailed in playbook Phase 1."
            ),
            "fix": (
                "Build the 5 highest-priority spokes from the playbook: /for-engineers, /for-managers, "
                "/features/daily-summary, /features/unrealized-effort, /vs/employee-monitoring (the "
                "anti-positioning page). Each with full Phase 3 schema (FAQPage block + BreadcrumbList) "
                "and Phase 5 metadata (unique title, description, canonical, OG image)."
            ),
        },
        {
            "id": "H-2",
            "severity": "High",
            "phase": 3,
            "title": "Testimonials lack named attribution and Review schema",
            "detail": (
                "components/site/testimonials-section.tsx renders quotes but the GEO-AUDIT-REPORT.md "
                "(March 2026) flagged that testimonials have no verifiable attribution. AI engines cannot "
                "attribute anonymous quotes to a Person, cannot cross-reference them against LinkedIn "
                "profiles, and cannot count them toward SoftwareApplication.aggregateRating. The strongest "
                "social-proof asset on the site is currently invisible to entity-recognition systems."
            ),
            "fix": (
                "Recruit 3–5 named testimonials (real first name + last initial + title + company). Wrap "
                "each in JSON-LD Review schema with itemReviewed pointing at the SoftwareApplication and "
                "author as a Person with affiliation. Add aggregateRating to SoftwareApplication once 3+ "
                "reviews are live."
            ),
        },
        {
            "id": "H-3",
            "severity": "High",
            "phase": 3,
            "title": "Organization schema sameAs still empty; no company-level LinkedIn / X / contactPoint",
            "detail": (
                "Partial closure: the Organization JSON-LD now has a `founder` field pointing at the "
                "Person at /about (Brian Winckel, with sameAs to LinkedIn, X, brianwinckel.com), so the "
                "founder-identity branch of entity recognition is solved. What's still missing is the "
                "company-level branch: Organization.sameAs is still []. There is no TaskPanels company "
                "LinkedIn page, no @TaskPanels X handle, no Crunchbase entry. Logo URL was fixed (now "
                "points at /opengraph-image, returns 200) but a proper square brand mark is still "
                "queued. No contactPoint on Organization either — no support email surfaced in rich "
                "results."
            ),
            "fix": (
                "Two parts: (1) create the company-level brand presence — LinkedIn company page first "
                "(free, ~10 minutes, highest-ROI), then a TaskPanels X handle, optional Crunchbase. "
                "(2) Extend Organization JSON-LD with sameAs (the URLs from step 1), contactPoint "
                "(email or contact form URL + contactType: 'customer support'), and a square brand "
                "mark via Next.js's app/icon.tsx convention to replace the wide OG-image as the logo."
            ),
        },
        {
            "id": "H-5",
            "severity": "High",
            "phase": 6,
            "title": "Meta description is 171 chars (target 150–160) — likely truncated in SERPs",
            "detail": (
                "lib/constants.ts SEO.description is 171 chars. Google typically truncates at ~158 chars on "
                "desktop, ~120 on mobile. Truncation falls mid-phrase ('with completed work, blockers, "
                "approvals, and next steps' becomes '…blockers, approvals, and ne…' on mobile)."
            ),
            "fix": (
                "Tighten to ~155 chars. Suggested: \"Track your day with color-coded panels, then auto-"
                "generate a clean, manager-ready summary of what you shipped, blocked, and shelved.\" (149 "
                "chars, primary keywords intact, action-oriented.)"
            ),
        },
        {
            "id": "H-6",
            "severity": "High",
            "phase": 4,
            "title": "Zero brand-mention coverage — Brand Authority scored 10/100",
            "detail": (
                "Brand absent from every directory and review platform AI engines weight: G2, Capterra, "
                "GetApp, Software Advice, AlternativeTo, Product Hunt, Crunchbase, BuiltWith, Wellfound. "
                "No LinkedIn company page, X/Twitter handle, YouTube channel, or visible Reddit presence. "
                "AI engines establish entity-existence partly via these listings — without them, the brand "
                "is invisible to entity recognition even when the name is googleable."
            ),
            "fix": (
                "Phase 8 — sequenced launches. Week 1: LinkedIn company page (free, immediate). Week 2: "
                "G2 + Capterra + AlternativeTo listings. Week 3: prepared Product Hunt launch (Tue/Wed, "
                "12:01am PT). Week 4+: ongoing — Crunchbase, BuiltWith, Wellfound, niche productivity "
                "directories."
            ),
        },
        {
            "id": "H-7",
            "severity": "High",
            "phase": 4,
            "title": "No quotable stat anywhere on the site",
            "detail": (
                "GEO-AUDIT-REPORT.md (March) flagged this and the playbook (Phase 4.2) reiterates it: "
                "every spoke and blog post should contain at least one quotable sentence with concrete "
                "data, ideally promoted into a stat callout. TaskPanels currently has none — the homepage "
                "has 'why early users love TaskPanels' but no number. AI engines cite specific claims; "
                "narrative paragraphs are summarized, not quoted."
            ),
            "fix": (
                "Either (a) survey existing users on minutes/week saved writing status updates, or (b) "
                "instrument the product to measure summary-generation time vs manual baseline, or (c) "
                "publish a 'State of work tracking 2026' mini-report sourced from a Typeform of "
                "early-access users. Promote the headline stat into a visually distinct callout on the "
                "homepage."
            ),
        },
    ],
    "medium_findings": [
        {
            "id": "M-1",
            "phase": 5,
            "title": "Per-page metadata is sitewide-defaults only",
            "detail": (
                "/features, /pricing, /privacy, /terms all inherit the homepage title template + base "
                "description. None of the 4 sub-pages has a unique <title> or meta description. Every "
                "Phase 1 spoke built will need a generateMetadata() override or static metadata export."
            ),
        },
        {
            "id": "M-3",
            "phase": 2,
            "title": "No /faq, /blog, /glossary, /changelog, /press",
            "detail": (
                "Content engine is empty. The homepage FAQ section already has FAQPage schema (good) — "
                "promote it to a dedicated /faq page so AI engines have a single citable source. /glossary "
                "is especially valuable for owning the definition of \"unrealized effort\" (a TaskPanels-"
                "coined term). Detailed in playbook Phase 2."
            ),
        },
        {
            "id": "M-4",
            "phase": 6,
            "title": "404 / 500 pages are default Next.js",
            "detail": (
                "No app/not-found.tsx or app/error.tsx. Default pages don't retain the marketing chrome "
                "(header / footer) so users hitting a stale link bounce instead of recovering."
            ),
        },
        {
            "id": "M-5",
            "phase": 6,
            "title": "No IndexNow integration",
            "detail": (
                "Bing indexing will lag without IndexNow. POST URL changes to the IndexNow API on deploy "
                "(the same key works for Bing + Yandex + Naver). Indexes in hours instead of days."
            ),
        },
        {
            "id": "M-6",
            "phase": 4,
            "title": "robots.txt missing 4–5 emerging AI crawlers",
            "detail": (
                "Current allow-list covers the major LLM crawlers but not Perplexity-User (separate from "
                "PerplexityBot), Applebot-Extended (Apple Intelligence), Amazonbot, CCBot (Common Crawl, "
                "used as training corpus by many open models), or Meta-ExternalAgent / Meta-ExternalFetcher."
            ),
        },
    ],
    "what_is_already_strong": [
        "Title tag is keyword-leading and within length budget (39 chars — actually has room to absorb a secondary keyword)",
        "Single H1 with the brand's core promise (\"Track your day. Prove your impact.\")",
        "Excellent semantic structure: 1 H1 / 11 H2s / 22 H3s — rich enough that every section has a parsable label",
        "Four JSON-LD schemas already in &lt;head&gt;: Organization, WebSite, SoftwareApplication (with 3 Offers + 8-item featureList), FAQPage with 5 Q&As — meaningfully ahead of most early-stage competitors",
        "Canonical URLs on all 5 pages (no canonical-host mismatch — a real problem at many comparable sites)",
        "robots.txt serves 200 with explicit Allow rules for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, anthropic-ai, cohere-ai + Sitemap directive",
        "sitemap.xml serves 200 with all 5 marketing URLs and proper priority/changefreq",
        "llms.txt serves 200 with comprehensive site summary (About, Pages, Features, Pricing, Audience, Differentiators)",
        "metadataBase set to https://taskpanels.app (correct for absolute URL resolution)",
        "Privacy policy + Terms of Service pages live (most early-stage SaaS sites skip these)",
        "GTM container GTM-MMVK7FPJ V2 live with 2 tags (CookieYes Banner + GA4 Configuration) — published 2026-04-26",
        "CookieYes consent banner rendering on production with Customise / Reject All / Accept All controls",
        "Google Consent Mode v2 defaults registered inline in &lt;head&gt; ahead of GTM IIFE in a single synchronous &lt;script&gt; — the canonical Google pattern, not the @next/third-parties split-script approach (which left a timing gap that caused implicit-default mode)",
        "GA4 (G-G00NB917QJ) loaded exclusively through GTM, gated by Built-in Consent Checks (not the misconfigured 'Additional Consent' gate that would have blocked the tag entirely post-consent)",
        "Tag Assistant verified all three Consent Mode v2 states: pre-consent /collect with gcs=G100 (cookieless ping, npa=1, pscdl=denied, no _ga cookie); post-Accept /collect with gcs=G111 (full payload, npa=0, _ga set); cid preserved across the consent transition",
        "HSTS enabled (strict-transport-security: max-age=63072000)",
        "SSR confirmed (x-nextjs-prerender = 1, x-vercel-cache = HIT)",
        "Marketing host (taskpanels.app) and product host (app.taskpanels.app) cleanly separated, both 200",
        "Modern stack: Next.js 16 App Router, React 19.2, Tailwind v4 — current, not legacy",
        "OG / Twitter card structure in place (just needs the actual image — see C-1)",
        "Robots meta = index, follow with Googlebot max-snippet/-image/-video directives",
        "OG locale = en_US already sitewide",
        "Strong differentiation copy (\"built for the worker, not the watcher\") — clear anti-positioning vs surveillance software",
        "Open Graph + Twitter cards generated dynamically via app/opengraph-image.tsx (Next.js file convention, statically optimized at build time) — branded 1200×630 PNG with TaskPanels wordmark, H1 lockup, subtitle, and four colored task-panel chips. Returns HTTP 200 image/png. Each Phase 1 spoke can drop its own opengraph-image.tsx for a per-page card with no metadata wiring.",
        "Organization.logo JSON-LD repointed from the dead /og/taskpanels-og.png to the live /opengraph-image route — AI engines extracting logo URL get a real PNG instead of a 404",
        "/about page live with named founder (Brian Winckel), professional headshot, career arc (Avatier, Fresh Wedding Cinematography, Buddy Brewing Co., Ifrit's Hookah Lounge), authentic pull quote, and Why-TaskPanels origin narrative",
        "Person JSON-LD on /about with jobTitle, worksFor, image, sameAs to LinkedIn / X / brianwinckel.com — AI engines now have a citable founder entity for 'who built TaskPanels' queries",
        "Organization JSON-LD gains a `founder` field pointing at the Person entity — establishes the entity link for company↔founder cross-reference even while company-level sameAs remains empty",
        "Per-page OG/Twitter cards on /about (distinct design from homepage card — founder name, role, the Brianwinckel.com quote in a styled blockquote)",
        "/about wired into footer (Product column), sitemap.xml (priority 0.7), and llms.txt (new 'Founder' section so AI crawlers get a one-line founder summary)",
        "/privacy fully enumerates the analytics + consent stack: GTM (GTM-MMVK7FPJ), GA4 (G-G00NB917QJ), CookieYes, the three cookies set (cookieyes-consent, _ga, _ga_G00NB917QJ), Consent Mode v2 mechanics, Manage Preferences icon, GDPR/CCPA rights, data retention windows, international transfer basis. /terms updated with privacy/cookies cross-reference. M-7 closed.",
    ],
    "next_actions": [
        {
            "phase": 6,
            "action": "Update /privacy to enumerate GA4 + the cookies CookieYes sets (cky-consent, cky-action, _ga, _ga_*). Banner is live; only the policy text needs to catch up.",
            "owner": "Brian",
            "blocking": False,
        },
        {
            "phase": 6,
            "action": "Tighten meta description in lib/constants.ts SEO.description to ≤160 chars (suggested: \"Track your day with color-coded panels, then auto-generate a clean, manager-ready summary of what you shipped, blocked, and shelved.\")",
            "owner": "Claude",
            "blocking": False,
        },
        {
            "phase": 4,
            "action": "Add Perplexity-User, Applebot-Extended, Amazonbot, CCBot, Meta-ExternalAgent, Meta-ExternalFetcher to public/robots.txt allow-list.",
            "owner": "Claude",
            "blocking": False,
        },
        {
            "phase": 4,
            "action": "Create TaskPanels company-level LinkedIn page + X handle (founder-level pages already linked from /about). Then extend Organization JSON-LD with sameAs (the company URLs), contactPoint, and a proper square logo via app/icon.tsx.",
            "owner": "Brian",
            "blocking": False,
        },
        {
            "phase": 3,
            "action": "Recruit 3–5 named testimonials and wrap each in Review JSON-LD with author Person + itemReviewed SoftwareApplication. Add aggregateRating once 3+ live.",
            "owner": "Brian + Claude",
            "blocking": False,
        },
        {
            "phase": 4,
            "action": "Establish a quotable stat (user survey, telemetry baseline, or mini-report) and promote into a homepage stat callout.",
            "owner": "Brian",
            "blocking": False,
        },
        {
            "phase": 0,
            "action": "Verify taskpanels.app in Google Search Console + Bing Webmaster Tools, submit sitemap.",
            "owner": "Brian",
            "blocking": False,
        },
        {
            "phase": 0,
            "action": "Run PageSpeed Insights + Lighthouse on /, /features, /pricing; save Core Web Vitals to docs/audits/.",
            "owner": "Brian",
            "blocking": False,
        },
        {
            "phase": 0,
            "action": "Run Screaming Frog crawl baseline against https://taskpanels.app/ (5 URLs — should be a clean run).",
            "owner": "Brian",
            "blocking": False,
        },
        {
            "phase": 1,
            "action": "Build top-5 spokes per playbook Phase 1 priority list (/for-engineers, /for-managers, /features/daily-summary, /features/unrealized-effort, /vs/employee-monitoring).",
            "owner": "Claude",
            "blocking": False,
        },
    ],
    "data_sources": {
        "homepage_html": "/tmp/taskpanels_home.html (94 KB, fetched directly from production 2026-04-25)",
        "homepage_status": "https://taskpanels.app/ — HTTP 200 (Vercel, x-nextjs-prerender=1, x-vercel-cache=HIT, HSTS 2y)",
        "robots_txt_status": "200 OK at https://taskpanels.app/robots.txt",
        "sitemap_xml_status": "200 OK at https://taskpanels.app/sitemap.xml",
        "llms_txt_status": "200 OK at https://taskpanels.app/llms.txt",
        "og_image_status": "404 Not Found at https://taskpanels.app/og/taskpanels-og.png (referenced in og:image and twitter:image)",
        "app_host_status": "https://app.taskpanels.app/ — HTTP 200 (separate product subdomain, expected)",
        "subpage_statuses": {
            "/features": 200,
            "/pricing": 200,
            "/privacy": 200,
            "/terms": 200,
        },
        "configured_canonical_host": "https://taskpanels.app (matches actual production — clean, no mismatch)",
        "schema_extraction": "4 JSON-LD blocks parsed: Organization, WebSite, SoftwareApplication, FAQPage",
        "rendered_assets": "59 inline SVGs, 0 raster <img> tags, 0 next/image markers",
    },
}

# Save JSON
with open(JSON_OUT, "w") as f:
    json.dump(audit, f, indent=2)
print(f"Wrote {JSON_OUT}")

# --- Build PDF ---
PAGE_W, PAGE_H = LETTER
MARGIN = 0.75 * inch


def cover_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(BLUE)
    canvas.rect(0, PAGE_H - 0.5 * inch, PAGE_W, 0.08 * inch, fill=1, stroke=0)
    canvas.setFillColor(white)
    canvas.setFont("Times-Bold", 32)
    canvas.drawString(MARGIN, PAGE_H - 2.0 * inch, "Phase 0 Baseline Audit")
    canvas.setFont("Times-Bold", 22)
    canvas.setFillColor(BLUE)
    canvas.drawString(MARGIN, PAGE_H - 2.55 * inch, "TaskPanels")
    canvas.setFillColor(white)
    canvas.setFont("Helvetica", 12)
    canvas.drawString(MARGIN, PAGE_H - 3.0 * inch, "taskpanels.app")
    canvas.setFont("Helvetica", 10)
    canvas.drawString(MARGIN, PAGE_H - 3.3 * inch, "Date:  2026-04-25")
    canvas.drawString(MARGIN, PAGE_H - 3.55 * inch, "Auditor:  Claude Opus 4.7 via /geo skill")

    # Score gauge
    canvas.setFillColor(HexColor("#1e293b"))  # slate-800
    canvas.roundRect(MARGIN, PAGE_H - 5.5 * inch, PAGE_W - 2 * MARGIN, 1.4 * inch, 12, fill=1, stroke=0)
    canvas.setFont("Helvetica", 9)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN + 18, PAGE_H - 4.4 * inch, "COMPOSITE GEO SCORE")
    canvas.setFont("Times-Bold", 56)
    canvas.setFillColor(AMBER)
    canvas.drawString(MARGIN + 18, PAGE_H - 5.05 * inch, f"{audit['composite_score']['score']}")
    canvas.setFont("Helvetica", 10)
    canvas.setFillColor(white)
    canvas.drawString(MARGIN + 130, PAGE_H - 4.85 * inch, f"/ 100   Grade: {audit['composite_score']['grade']}")
    canvas.setFont("Helvetica-Oblique", 9)
    canvas.setFillColor(HexColor("#94a3b8"))
    canvas.drawString(MARGIN + 130, PAGE_H - 5.10 * inch,
                      "Strong technical floor; Phase 1 spokes + on-site authority are the next levers.")

    canvas.setFont("Helvetica-Oblique", 9)
    canvas.setFillColor(HexColor("#94a3b8"))
    canvas.drawString(
        MARGIN, 0.6 * inch,
        "Companion to docs/seo-geo-playbook.pdf — re-run after each phase completion."
    )
    canvas.restoreState()


def body_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BLUE)
    canvas.rect(0, PAGE_H - 0.05 * inch, PAGE_W, 0.05 * inch, fill=1, stroke=0)
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN, PAGE_H - 0.4 * inch,
                      "Phase 0 Baseline — TaskPanels")
    canvas.drawRightString(PAGE_W - MARGIN, PAGE_H - 0.4 * inch, f"Page {doc.page}")
    canvas.setStrokeColor(BORDER)
    canvas.setLineWidth(0.5)
    canvas.line(MARGIN, 0.55 * inch, PAGE_W - MARGIN, 0.55 * inch)
    canvas.setFont("Helvetica-Oblique", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(MARGIN, 0.4 * inch,
                      "Reference docs/seo-geo-playbook.pdf before acting on these findings.")
    canvas.restoreState()


styles = getSampleStyleSheet()
H1 = ParagraphStyle("H1", parent=styles["Heading1"], fontName="Times-Bold",
                     fontSize=20, textColor=INK, spaceBefore=8, spaceAfter=8, leading=24)
H2 = ParagraphStyle("H2", parent=styles["Heading2"], fontName="Times-Bold",
                     fontSize=14, textColor=BLUE_HOVER, spaceBefore=12, spaceAfter=4, leading=18)
H3 = ParagraphStyle("H3", parent=styles["Heading3"], fontName="Helvetica-Bold",
                     fontSize=10.5, textColor=INK, spaceBefore=6, spaceAfter=2, leading=13)
BODY = ParagraphStyle("Body", parent=styles["BodyText"], fontName="Helvetica",
                      fontSize=10, textColor=INK, leading=13.5, spaceAfter=4)
BULLET = ParagraphStyle("Bullet", parent=BODY, leftIndent=18, bulletIndent=6, leading=14)
SMALL = ParagraphStyle("Small", parent=BODY, fontSize=8.5, textColor=MUTED, leading=11)


def bullets(items):
    return [Paragraph(f"•&nbsp;&nbsp;{i}", BULLET) for i in items]


def esc(s):
    """Escape angle brackets so ReportLab doesn't try to parse <link>, <head> etc. as XML."""
    if not isinstance(s, str):
        return s
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def build_pdf():
    doc = BaseDocTemplate(
        str(PDF_OUT), pagesize=LETTER,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=0.85 * inch, bottomMargin=0.75 * inch,
        title="TaskPanels Phase 0 Baseline Audit",
    )
    cover_frame = Frame(0, 0, PAGE_W, PAGE_H, leftPadding=0, rightPadding=0,
                        topPadding=0, bottomPadding=0)
    body_frame = Frame(MARGIN, 0.75 * inch, PAGE_W - 2 * MARGIN, PAGE_H - 1.55 * inch,
                       leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([
        PageTemplate(id="Cover", frames=cover_frame, onPage=cover_page),
        PageTemplate(id="Body", frames=body_frame, onPage=body_page),
    ])

    story = []
    story.append(NextPageTemplate("Body"))
    story.append(PageBreak())

    # Executive summary
    story.append(Paragraph("Executive summary", H1))
    story.append(Paragraph(audit["composite_score"]["summary"], BODY))

    story.append(Paragraph("Score breakdown", H2))
    rows = [["Category", "Score", "Weight", "Notes"]]
    for key, label in [
        ("citability", "Citability"),
        ("brand_mentions", "Brand authority"),
        ("content_eeat", "Content / E-E-A-T"),
        ("technical", "Technical foundation"),
        ("schema", "Structured data"),
        ("ai_crawler_access", "AI crawler access"),
        ("llms_txt", "llms.txt"),
    ]:
        s = audit["scores"][key]
        rows.append([
            label,
            f"{s['score']}/100",
            f"{s.get('weight', '—')}%" if s.get('weight') else "—",
            Paragraph(s["notes"], SMALL),
        ])
    pscores = audit["scores"]["platforms"]["scores"]
    rows.append([
        "Platform readiness (avg)",
        f"{sum(pscores.values()) // len(pscores)}/100",
        f"{audit['scores']['platforms']['weight']}%",
        Paragraph(audit["scores"]["platforms"]["notes"], SMALL),
    ])
    tbl = Table(rows, colWidths=[1.6 * inch, 0.7 * inch, 0.6 * inch, 3.6 * inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(tbl)

    story.append(Paragraph("Per-platform readiness", H2))
    plat_rows = [["Platform", "Score"]]
    for p, s in pscores.items():
        plat_rows.append([p.replace("_", " ").title(), f"{s}/100"])
    tbl = Table(plat_rows, colWidths=[3 * inch, 1 * inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(tbl)
    story.append(PageBreak())

    # Probe results
    story.append(Paragraph("Crawler-visible signals (probe results)", H1))
    rows = [["Endpoint", "Status", "Implication"]]
    probe_rows = [
        ("https://taskpanels.app/", "200 (public)",
         "Reachable. SSR + Vercel cache HIT. HSTS 2y. robots meta = index, follow."),
        ("https://taskpanels.app/robots.txt", "200",
         "Explicit Allow rules for major AI crawlers + Sitemap directive."),
        ("https://taskpanels.app/sitemap.xml", "200",
         "All 5 marketing URLs listed with priority + changefreq."),
        ("https://taskpanels.app/llms.txt", "200",
         "Comprehensive AI-engine summary in place."),
        ("https://taskpanels.app/og/taskpanels-og.png", "404",
         "Critical — OG / Twitter previews are broken on every share. See C-1."),
        ("https://taskpanels.app/features", "200", "Sub-page reachable."),
        ("https://taskpanels.app/pricing", "200", "Sub-page reachable."),
        ("https://taskpanels.app/privacy", "200", "Legal page live (trust signal)."),
        ("https://taskpanels.app/terms", "200", "Legal page live."),
        ("https://app.taskpanels.app/", "200",
         "Product host live, separate subdomain (expected; not a marketing-SEO concern)."),
    ]
    for ep, status, impl in probe_rows:
        color = "#dc2626" if "404" in status else "#0f172a"
        rows.append([
            Paragraph(ep, SMALL),
            Paragraph(f'<font color="{color}">{status}</font>', SMALL),
            Paragraph(impl, SMALL),
        ])
    tbl = Table(rows, colWidths=[2.6 * inch, 0.9 * inch, 3.0 * inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(tbl)

    story.append(Paragraph("On-page signals (extracted from homepage HTML)", H1))
    op = audit["on_page_findings"]
    onpage = [
        ("Title", f'{op["title"]} ({op["title_length"]} chars)'),
        ("Meta description",
         f'{op["meta_description"][:150]}… ({op["meta_description_length"]} chars — over 160 budget, see H-5)'),
        ("Canonical", op["canonical"]),
        ("OG url", op["og_url"]),
        ("OG image", op["og_image"]),
        ("OG locale / type", f'{op["og_locale"]} / {op["og_type"]}'),
        ("Twitter card / image", f'{op["twitter_card"]} / {op["twitter_image"]}'),
        ("Robots meta", op["robots_meta"]),
        ("Viewport", op["viewport"]),
        ("H1 count", str(op["h1_count"])),
        ("H1 text", op["h1_text"]),
        ("H2 count", str(op["h2_count"])),
        ("H2 sequence", " → ".join(op["h2_list"])),
        ("H3 count", str(op["h3_count"])),
        ("Word count (visible)", f'{op["word_count_visible"]} (target 1500–2500 for hub page)'),
        ("Image count / missing alt", f'{op["image_count"]} raster / {op["images_missing_alt"]} missing alt'),
        ("Inline SVG count", str(op["inline_svg_count"])),
        ("Schemas present", ", ".join(op["schemas_present"])),
    ]
    rows = [["Signal", "Value / status"]] + [
        [Paragraph(esc(k), H3), Paragraph(esc(str(v)), SMALL)] for k, v in onpage
    ]
    tbl = Table(rows, colWidths=[1.8 * inch, 4.7 * inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    story.append(tbl)
    story.append(PageBreak())

    # Critical findings
    story.append(Paragraph("Critical findings", H1))
    story.append(Paragraph(
        "Both Critical findings closed in this iteration. C-2 (cookie consent + Consent Mode v2) closed with the GTM-MMVK7FPJ V2 publish on 2026-04-26 — Tag Assistant verified gcs=G100 → G111 across the consent transition. C-1 (broken OG image) closed by replacing the dead static /og/taskpanels-og.png reference with a dynamic app/opengraph-image.tsx via Next.js's file convention; og:image + twitter:image + Organization.logo JSON-LD all now point at a real PNG.",
        BODY,
    ))
    story.append(Paragraph(
        "<i>No open Critical findings. Phase 1 spoke buildout is unblocked.</i>",
        BODY,
    ))
    for f in audit["critical_findings"]:
        rows = [
            [Paragraph(
                f'<font color="#dc2626" face="Helvetica-Bold">{f["id"]} · {f["severity"]}</font>'
                f'  &nbsp;&nbsp; <font color="#64748b">Phase {f["phase"]}</font>', BODY)],
            [Paragraph(f'<b>{esc(f["title"])}</b>', BODY)],
            [Paragraph(f'<b>What:</b> {esc(f["detail"])}', SMALL)],
            [Paragraph(f'<b>Fix:</b> {esc(f["fix"])}', SMALL)],
        ]
        t = Table(rows, colWidths=[6.5 * inch])
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), HexColor("#fef2f2")),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("LINEBELOW", (0, -1), (-1, -1), 1, RED),
            ("LINELEFT", (0, 0), (0, -1), 3, RED),
        ]))
        story.append(t)
        story.append(Spacer(1, 8))

    story.append(PageBreak())

    story.append(Paragraph("High-priority findings", H1))
    for f in audit["high_findings"]:
        rows = [
            [Paragraph(
                f'<font color="#d97706" face="Helvetica-Bold">{f["id"]} · {f["severity"]}</font>'
                f'  &nbsp;&nbsp; <font color="#64748b">Phase {f["phase"]}</font>', BODY)],
            [Paragraph(f'<b>{esc(f["title"])}</b>', BODY)],
            [Paragraph(f'<b>What:</b> {esc(f["detail"])}', SMALL)],
            [Paragraph(f'<b>Fix:</b> {esc(f["fix"])}', SMALL)],
        ]
        t = Table(rows, colWidths=[6.5 * inch])
        t.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), HexColor("#fffbeb")),
            ("LEFTPADDING", (0, 0), (-1, -1), 8),
            ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ("TOPPADDING", (0, 0), (-1, -1), 4),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ("LINEBELOW", (0, -1), (-1, -1), 1, AMBER),
            ("LINELEFT", (0, 0), (0, -1), 3, AMBER),
        ]))
        story.append(t)
        story.append(Spacer(1, 6))

    story.append(PageBreak())

    story.append(Paragraph("Medium findings (queue, not blocking)", H1))
    for f in audit["medium_findings"]:
        story.append(Paragraph(
            f'<font face="Helvetica-Bold">{f["id"]}</font> · '
            f'<font color="#64748b">Phase {f["phase"]}</font> · '
            f'<b>{esc(f["title"])}</b>',
            BODY,
        ))
        story.append(Paragraph(esc(f["detail"]), SMALL))
        story.append(Spacer(1, 6))

    story.append(Paragraph("What's already strong", H1))
    story.append(Paragraph(
        "Worth calling out so we don't accidentally regress these in later phases.",
        BODY,
    ))
    for w in audit["what_is_already_strong"]:
        story.append(Paragraph(f'<font color="#059669">✓</font>&nbsp;&nbsp;{esc(w)}', BULLET))

    story.append(PageBreak())

    story.append(Paragraph("Next actions (sequenced)", H1))
    rows = [["#", "Phase", "Action", "Owner", "Blocking?"]]
    for i, a in enumerate(audit["next_actions"], 1):
        rows.append([
            str(i),
            f"P{a['phase']}",
            Paragraph(esc(a["action"]), SMALL),
            a["owner"],
            "Yes" if a["blocking"] else "—",
        ])
    tbl = Table(rows, colWidths=[0.3 * inch, 0.5 * inch, 4.0 * inch, 0.95 * inch, 0.65 * inch])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
    ]))
    story.append(tbl)

    story.append(Spacer(1, 18))
    story.append(Paragraph("Re-audit cadence", H2))
    story.append(Paragraph(
        "Re-run this baseline at the end of each completed phase and quarterly thereafter. "
        "Save outputs as <font face=\"Courier\">docs/audits/post-phase-N-YYYY-MM.{json,pdf}</font>. "
        "Compare composite score deltas — that's the single best leading indicator that the playbook is working. "
        "Closures so far: C-2 (cookie consent) 50 → 55, C-1 (OG image) 55 → 60, M-7 (privacy doesn't enumerate GA4) + H-4 (no /about / no founder bio / no Person schema) 60 → 64. Expected lift after the remaining 5 High fixes (single-page hub spokes, named testimonials + Review schema, Organization sameAs + company LinkedIn, meta description tighten, brand-mention coverage, citable stat) is roughly another +10 points (64 → 74).",
        BODY,
    ))

    doc.build(story)
    print(f"Wrote {PDF_OUT}")


if __name__ == "__main__":
    build_pdf()
