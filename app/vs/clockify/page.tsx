import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  FileText,
  DollarSign,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "TaskPanels vs. Clockify — A Clockify Alternative That Outputs Summaries, Not Just Hours",
  description:
    "Looking for a Clockify alternative? TaskPanels tracks time and generates structured daily work summaries — completed work, blockers, approvals, unrealized effort — instead of just timesheets and reports.",
  alternates: {
    canonical: "/vs/clockify",
  },
  openGraph: {
    title: "TaskPanels vs. Clockify | TaskPanels",
    description:
      "Clockify is a popular free time tracker. TaskPanels turns your tracked time into a structured daily summary your manager or clients can actually use.",
    url: `${MARKETING_URL}/vs/clockify`,
    images: [
      {
        url: "/og/vs-clockify.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
    siteName: SITE_NAME,
  },
};

const faqs = [
  {
    q: "Why pay for TaskPanels when Clockify is free?",
    a: "Clockify's free tier covers pure time tracking well. TaskPanels is paid because it does more than track time — it generates structured daily work summaries with blockers, approvals, completed work, and unrealized effort. If you only need hours, Clockify's free plan is hard to beat. If you need a daily output that explains those hours, the $12/month is the difference between a timesheet and a manager-ready brief.",
  },
  {
    q: "Does TaskPanels include the monitoring features Clockify added in paid plans?",
    a: "No — and intentionally. Clockify's paid plans include screenshots, GPS tracking, and activity monitoring. TaskPanels does not include any of those features and won't add them. Built for the worker, not the watcher.",
  },
  {
    q: "Can I switch from Clockify to TaskPanels?",
    a: "Yes. The setup is similar — create panels for each project or client, click in and out as you switch context. Historical Clockify time data doesn't import directly (different data model that includes contextual tags), but going forward your team logs work in TaskPanels and generates summaries from there.",
  },
  {
    q: "How does TaskPanels' time tracking compare to Clockify's?",
    a: "Both use manual start/stop timers per project. Clockify offers more granular features for time auditing (kiosk mode, detailed reports, approval workflows). TaskPanels offers more on the output side — structured summaries, blockers tracking, unrealized effort, weekly rollups. Different feature emphasis based on different problems being solved.",
  },
  {
    q: "Does TaskPanels have invoice generation like Clockify?",
    a: "Not directly — but exports are designed to drop cleanly into invoices, project tools, or accounting software. Native invoice generation is on the roadmap. For consultants today, the daily summary is what makes invoices easier to defend; the time data feeds the invoice itself.",
  },
  {
    q: "What about team features — does TaskPanels have a manager dashboard?",
    a: "Yes, on the Team plan ($9/user/month). The Team plan includes a manager dashboard with team-level visibility, shared rollups, and admin controls. Clockify's free plan supports unlimited team members for time tracking; TaskPanels Team starts at 3 seats and adds the structured summary layer on top.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

type ComparisonRow = {
  feature: string;
  taskpanels: boolean | string;
  clockify: boolean | string;
};

const comparison: ComparisonRow[] = [
  { feature: "Time tracking by project", taskpanels: true, clockify: true },
  { feature: "Manual start/stop timers", taskpanels: true, clockify: true },
  { feature: "Free tier", taskpanels: "Roadmap", clockify: "Unlimited users" },
  { feature: "Daily structured work summary", taskpanels: true, clockify: "Hours reports only" },
  { feature: "Blockers & approvals tracking", taskpanels: true, clockify: false },
  { feature: "Unrealized effort tracking", taskpanels: true, clockify: false },
  { feature: "Weekly rollups for reviews", taskpanels: true, clockify: false },
  { feature: "Performance review export", taskpanels: true, clockify: false },
  { feature: "Manager dashboard", taskpanels: "Team plan", clockify: true },
  { feature: "Invoice generation", taskpanels: "Roadmap", clockify: true },
  { feature: "Project budgets & rates", taskpanels: false, clockify: true },
  { feature: "Calendar & project tool integrations", taskpanels: "Roadmap", clockify: true },
  { feature: "Browser extension", taskpanels: "Roadmap", clockify: true },
  { feature: "Mobile app (iOS + Android)", taskpanels: "PWA", clockify: true },
  { feature: "Screenshots / GPS / activity monitoring", taskpanels: false, clockify: "Paid plans" },
  { feature: "AI work summary composition", taskpanels: "Roadmap", clockify: false },
];

export default function VsClockifyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              TaskPanels vs. Clockify
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Free time tracking vs. useful summaries.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Clockify is a popular free time tracker. TaskPanels is paid — but
              the difference isn&apos;t pricing alone. TaskPanels turns your
              tracked time into a structured daily summary your manager or
              clients can actually use.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={CTA_LINKS.primary}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-base font-medium text-white transition-colors hover:bg-slate-800"
              >
                Try TaskPanels
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/features"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                See all features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Different jobs ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Two tools, two different jobs.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Clockify built its reputation on a generous free tier — unlimited
                users, unlimited projects, real time tracking with no cost. For
                teams that need to log hours and nothing more, that&apos;s
                genuinely hard to beat. The paid plans add features for time
                auditing, project budgeting, kiosk mode, and (in higher tiers)
                screenshots and activity monitoring.
              </p>
              <p>
                TaskPanels solves a different problem: taking the work you did
                and turning it into a clean, structured update someone else can
                read. Time tracking is one input. The output is a daily summary
                with completed work grouped by project, blockers called out by
                name, approvals waiting, and unrealized effort documented
                separately. That&apos;s the artifact your manager reads, your
                client receives, or your future-self uses at performance review
                time.
              </p>
              <p>
                The pricing difference reflects that — Clockify monetizes
                additional time-tracking depth and monitoring features.
                TaskPanels monetizes the structured summary layer. If you only
                need the timer, Clockify free is hard to argue with. If you
                need the summary, the $12/month is what you&apos;re paying for.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <DollarSign className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Clockify
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Built for free time logging.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Generous free tier with unlimited users and projects. Paid
                  plans add invoicing, budgeting, and (in higher tiers)
                  monitoring. Best when cost is the constraint and your output
                  is hours.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200/80 bg-white p-6 shadow-sm">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FileText className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  TaskPanels
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Built for structured summaries.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Time tracking plus tagged context for blockers, approvals,
                  and unrealized effort. Best when your output is a daily
                  summary, client update, or performance review document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Feature comparison
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Clockify wins on free-tier breadth and time-auditing depth.
              TaskPanels wins on structured output. Here&apos;s the side-by-side.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-900 sm:px-6">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900 sm:px-6">
                      TaskPanels
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-slate-900 sm:px-6">
                      Clockify
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map((row) => (
                    <tr key={row.feature}>
                      <td className="px-4 py-3.5 text-slate-700 sm:px-6">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3.5 text-center sm:px-6">
                        <Cell value={row.taskpanels} />
                      </td>
                      <td className="px-4 py-3.5 text-center sm:px-6">
                        <Cell value={row.clockify} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Comparison based on publicly available product information as of
              2026. Clockify features and pricing may have changed; verify
              current capabilities at clockify.me.
            </p>
          </div>
        </div>
      </section>

      {/* ── When each fits ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                When TaskPanels is the right call
              </h2>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  Your output needs to be a structured daily summary, not just
                  a list of hours.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You want to track context — blockers, approvals, scope
                  changes, unrealized effort — alongside the time.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You need weekly rollups for performance reviews, retros, or
                  client check-ins.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You want a tool that won&apos;t add monitoring features
                  (screenshots, activity tracking) at higher tiers.
                </span>
              </li>
            </ul>

            <div className="mt-10 flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <DollarSign className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                When Clockify might fit better
              </h2>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  Cost is the primary constraint and you only need pure time
                  tracking.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You&apos;re tracking time for a large team and need
                  unlimited users at zero cost.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You need built-in invoicing, project budgets, or kiosk-mode
                  features today.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  Your workflow already depends on the integrations Clockify
                  supports natively.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Questions, answered
            </h2>
            <dl className="mt-10 space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <dt className="text-base font-semibold text-slate-900">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-slate-600">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pay for the summary, not just the hours.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get a structured daily brief that explains your work — not a
            timesheet that just counts your hours.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={CTA_LINKS.primary}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-base font-medium text-white transition-colors hover:bg-slate-800"
            >
              Try TaskPanels
              <ArrowRight className="size-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="mx-auto size-5 text-emerald-600" aria-label="Yes" />;
  }
  if (value === false) {
    return <X className="mx-auto size-5 text-slate-300" aria-label="No" />;
  }
  return (
    <span className="text-xs font-medium text-slate-500">{value}</span>
  );
}
