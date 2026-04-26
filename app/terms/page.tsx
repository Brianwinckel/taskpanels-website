import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "TaskPanels terms of service — the rules for using our platform.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-400">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing or using TaskPanels, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use the
              service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Description of Service
            </h2>
            <p className="mt-2">
              TaskPanels is a work tracking and summary generation tool that
              helps professionals document their daily work and communicate it
              clearly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Your Account
            </h2>
            <p className="mt-2">
              You are responsible for maintaining the security of your account
              and all activities that occur under it. You must provide accurate
              information when creating an account.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Your Data
            </h2>
            <p className="mt-2">
              You retain ownership of all work tracking data, summaries, and
              content you create using TaskPanels. We do not claim any
              intellectual property rights over your content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Acceptable Use
            </h2>
            <p className="mt-2">
              You agree to use TaskPanels only for lawful purposes and in
              accordance with these terms. You may not misuse the service or
              interfere with its operation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Privacy &amp; Cookies
            </h2>
            <p className="mt-2">
              Your use of TaskPanels is also governed by our{" "}
              <a
                href="/privacy"
                className="font-medium text-slate-900 underline-offset-4 hover:underline"
              >
                Privacy Policy
              </a>
              , which describes the data we collect, the cookies set on
              taskpanels.app, the analytics tools we use (Google Tag Manager,
              Google Analytics 4, and CookieYes for consent management), and
              the choices you have under GDPR, CCPA, and similar laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Subscription & Billing
            </h2>
            <p className="mt-2">
              Paid plans are billed monthly or annually as selected. You may
              cancel at any time. Refunds are handled on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Limitation of Liability
            </h2>
            <p className="mt-2">
              TaskPanels is provided &ldquo;as is&rdquo; without warranties of
              any kind. We are not liable for any indirect, incidental, or
              consequential damages arising from your use of the service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Changes to Terms
            </h2>
            <p className="mt-2">
              We may update these terms from time to time. We will notify you of
              significant changes. Continued use of the service constitutes
              acceptance of updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              Questions about these terms? Contact us at{" "}
              <span className="font-medium text-slate-900">
                legal@taskpanels.app
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
