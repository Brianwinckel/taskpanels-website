import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TaskPanels collects, uses, and protects your data — including the cookies and analytics tools running on taskpanels.app.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          Last updated: April 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
            <p className="mt-2">
              TaskPanels (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              respects your privacy. This Privacy Policy explains what data we
              collect, how we use it, the cookies and third-party tools running
              on taskpanels.app, and the choices you have. The marketing site
              (taskpanels.app) and the application (app.taskpanels.app) are
              both covered.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Information We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Account information:</strong> email address and name
                when you create an account in the app.
              </li>
              <li>
                <strong>Work tracking data:</strong> the task panels, time
                entries, tags, blockers, approvals, and summaries you create
                inside the app. This data belongs to you.
              </li>
              <li>
                <strong>Marketing-site usage data:</strong> aggregated and
                anonymized analytics about how visitors interact with
                taskpanels.app, collected via Google Analytics 4 only after
                you grant consent through the cookie banner. Details below.
              </li>
              <li>
                <strong>Technical data:</strong> standard server logs (IP
                address, user agent, request path, timestamp) retained for a
                short period for security and operational purposes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Cookies &amp; Tracking Technologies
            </h2>
            <p className="mt-2">
              taskpanels.app uses the following third-party tools. None of
              them are loaded with personal-data collection enabled until you
              grant consent through the CookieYes banner.
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Google Tag Manager</strong> (container{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  GTM-MMVK7FPJ
                </code>
                ) &mdash; a tag-management platform that loads measurement
                scripts conditionally based on your consent state. GTM itself
                does not set tracking cookies.
              </li>
              <li>
                <strong>Google Analytics 4</strong> (measurement ID{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  G-G00NB917QJ
                </code>
                ) &mdash; provides aggregated usage statistics about how the
                marketing site is used. Configured to respect Google Consent
                Mode v2: before you grant consent, GA4 sends only anonymous,
                cookieless pings (no <code>_ga</code> cookie is set, no
                personal identifiers are collected). After you grant consent,
                GA4 sets the cookies described below to measure return visits
                and aggregate behavior.
              </li>
              <li>
                <strong>CookieYes</strong> &mdash; the consent management
                platform that displays the cookie banner, records your
                consent choice, and signals it to GA4 via Consent Mode v2.
              </li>
            </ul>
            <p className="mt-3">
              Cookies that may be set on your browser:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  cookieyes-consent
                </code>{" "}
                &mdash; stores your consent choices so the banner doesn&rsquo;t
                reappear on every visit. Set by CookieYes. Expires after ~1
                year.
              </li>
              <li>
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  _ga
                </code>{" "}
                &mdash; distinguishes unique visitors. Set by Google Analytics
                only after you grant consent. Expires after ~2 years.
              </li>
              <li>
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  _ga_G00NB917QJ
                </code>{" "}
                &mdash; tracks session state for the GA4 property. Set by
                Google Analytics only after you grant consent. Expires after
                ~2 years.
              </li>
            </ul>
            <p className="mt-3">
              The application at app.taskpanels.app uses session and
              authentication cookies necessary to keep you logged in. Those
              are strictly necessary and not subject to consent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Consent &amp; Your Choices
            </h2>
            <p className="mt-2">
              On your first visit to taskpanels.app, every analytics,
              advertising, and personalization storage type is denied by
              default. The CookieYes banner asks you to choose:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Accept All</strong> &mdash; grants consent for
                analytics; GA4 begins measuring return visits.
              </li>
              <li>
                <strong>Reject All</strong> &mdash; declines all non-essential
                cookies; GA4 continues to send only anonymous, cookieless
                pings.
              </li>
              <li>
                <strong>Customise</strong> &mdash; lets you grant consent for
                some categories and not others.
              </li>
            </ul>
            <p className="mt-3">
              You can change your choice at any time by clicking the floating
              &ldquo;Manage Preferences&rdquo; icon at the bottom-left of any
              page on taskpanels.app. Withdrawing consent stops GA4 from
              setting analytics cookies and reverts to cookieless mode going
              forward.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use account and work-tracking data solely to provide and
              improve the TaskPanels service. We use marketing-site analytics
              (when consented) only to understand which pages and content
              help visitors and to diagnose technical problems. We do not
              sell or share your data with advertisers or data brokers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Data Sharing &amp; Third Parties
            </h2>
            <p className="mt-2">
              We share data only with the operational service providers
              listed in the Cookies section above (Google Tag Manager, Google
              Analytics, CookieYes), each acting as a processor under our
              instructions. We do not sell personal information to third
              parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              International Data Transfers
            </h2>
            <p className="mt-2">
              Google Analytics and CookieYes process data on servers that may
              be located outside your country, including in the United
              States. Both providers participate in the EU&ndash;US Data
              Privacy Framework and rely on Standard Contractual Clauses
              where applicable to provide an adequate level of protection
              for personal data transferred from the EEA, UK, and
              Switzerland.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Data Retention
            </h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Account &amp; work-tracking data:</strong> retained
                for as long as your account is active. Deleted within a
                reasonable backup-rotation window after account deletion.
              </li>
              <li>
                <strong>GA4 analytics data:</strong> retained for 14 months
                in Google Analytics, then automatically deleted.
              </li>
              <li>
                <strong>Server logs:</strong> retained for up to 30 days for
                security and operational purposes.
              </li>
              <li>
                <strong>Consent records:</strong> stored client-side in the{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
                  cookieyes-consent
                </code>{" "}
                cookie for ~1 year, or until you clear it.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Data Security
            </h2>
            <p className="mt-2">
              We use industry-standard security measures to protect your data,
              including encryption in transit (HTTPS / HSTS enforced) and at
              rest. No system can guarantee absolute security; we work to
              minimize risk and respond quickly to incidents.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Your Rights</h2>
            <p className="mt-2">
              Depending on where you live, you may have the following rights
              under laws like the GDPR (EU/EEA/UK), CCPA/CPRA (California),
              and similar regulations:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Access</strong> the personal data we hold about you.
              </li>
              <li>
                <strong>Correct</strong> inaccurate or incomplete data.
              </li>
              <li>
                <strong>Delete</strong> your data (subject to limited legal
                retention requirements).
              </li>
              <li>
                <strong>Withdraw consent</strong> at any time via the Manage
                Preferences icon, with no penalty.
              </li>
              <li>
                <strong>Port your data</strong> &mdash; request an export of
                your work-tracking data.
              </li>
              <li>
                <strong>Opt out of &ldquo;sale&rdquo; or
                &ldquo;sharing&rdquo;</strong> (CCPA): TaskPanels does not
                sell or share personal information for cross-context
                behavioral advertising. The CookieYes Reject-All button is
                also our opt-out of any future analytics or advertising
                cookies.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a
                href="mailto:privacy@taskpanels.app"
                className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-700"
              >
                privacy@taskpanels.app
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Not Surveillance Software
            </h2>
            <p className="mt-2">
              TaskPanels is built for the worker, not the watcher. We do not
              monitor screens, track keystrokes, capture screenshots, or
              expose what you track to your employer without your action.
              You control what you record and what you share.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy as the product, the tools we
              use, or applicable law evolve. The &ldquo;Last updated&rdquo;
              date at the top of this page reflects the most recent change.
              Material changes will be flagged in-product or by email where
              appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              Questions about this policy, our use of cookies, or your data?
              Contact us at{" "}
              <a
                href="mailto:privacy@taskpanels.app"
                className="font-medium text-slate-900 underline underline-offset-2 hover:text-slate-700"
              >
                privacy@taskpanels.app
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
