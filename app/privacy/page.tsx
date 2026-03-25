import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "TaskPanels privacy policy — how we handle and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-400">Last updated: March 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
            <p className="mt-2">
              TaskPanels (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
              respects your privacy. This Privacy Policy explains how we collect,
              use, and protect information when you use our service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Information We Collect
            </h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <strong>Account information:</strong> Email address and name when
                you create an account.
              </li>
              <li>
                <strong>Work tracking data:</strong> Task panels, time entries,
                tags, and summaries you create within the app.
              </li>
              <li>
                <strong>Usage data:</strong> Basic analytics to improve the
                product experience.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information solely to provide and improve the
              TaskPanels service. We do not sell your data to third parties. Your
              work tracking data belongs to you.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Data Security
            </h2>
            <p className="mt-2">
              We use industry-standard security measures to protect your data,
              including encryption in transit and at rest.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Your Rights
            </h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Not Surveillance Software
            </h2>
            <p className="mt-2">
              TaskPanels is built for the worker, not the watcher. We do not
              monitor screens, track keystrokes, or capture screenshots. You
              control what you track and what you share.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              Questions about this policy? Contact us at{" "}
              <span className="font-medium text-slate-900">
                privacy@taskpanels.app
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
