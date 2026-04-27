import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Eye,
  Shield,
  FileText,
  Users,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "TaskPanels vs. Time Doctor — A Time Doctor Alternative Without Surveillance",
  description:
    "Looking for a Time Doctor alternative? TaskPanels tracks time and generates work summaries without screenshots, idle detection, or productivity scoring. Built for the worker, not the watcher.",
  alternates: {
    canonical: "/vs/time-doctor",
  },
  openGraph: {
    title: "TaskPanels vs. Time Doctor | TaskPanels",
    description:
      "Two opposite philosophies of work tracking. Time Doctor monitors your team. TaskPanels documents your team's work — with no screenshots, no idle detection, no productivity scores.",
    url: `${MARKETING_URL}/vs/time-doctor`,
    images: [
      {
        url: "/og/vs-time-doctor.png",
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
    q: "Why doesn't TaskPanels include screenshots like Time Doctor?",
    a: "It's a deliberate philosophical choice. Screenshots, idle detection, and app monitoring frame the worker as someone to be watched. TaskPanels frames the worker as someone documenting and communicating their own value. The two approaches lead to very different team cultures — and very different relationships between employees and employers.",
  },
  {
    q: "Can TaskPanels enforce work hours or detect idle time?",
    a: "No. TaskPanels has no idle detection, no enforced clock-in periods, no app or website monitoring. Tracking is fully manual and worker-controlled. If you need enforcement features for hourly compliance, Time Doctor or similar tools are designed for that use case; TaskPanels is not.",
  },
  {
    q: "Is TaskPanels cheaper than Time Doctor?",
    a: "Pricing differs by feature set. TaskPanels Individual is $12/month and Team is $9/user/month. Time Doctor's pricing scales with monitoring features (screenshots, payroll integrations, productivity reports). Compare based on what you actually need — TaskPanels is significantly less expensive if you don't need monitoring features.",
  },
  {
    q: "Can I switch from Time Doctor to TaskPanels?",
    a: "Yes. The setup is much lighter — TaskPanels has no agent to install, no screenshots to configure, and no monitoring policies to define. Most teams are productive on TaskPanels within a day. Historical Time Doctor data doesn't import (different data model), but going forward your team logs work in TaskPanels and generates summaries from there.",
  },
  {
    q: "Does TaskPanels work for remote teams the way Time Doctor does?",
    a: "Yes — but it solves the remote-work visibility problem differently. Time Doctor uses surveillance to verify that remote workers are working. TaskPanels uses async daily summaries so remote workers can show what they accomplished. Same problem, opposite philosophy. See our remote teams page for more.",
  },
  {
    q: "Who is Time Doctor a better fit for?",
    a: "Companies with hourly contractor compliance requirements, teams where employee monitoring is a genuine business need (e.g. some BPOs, regulated industries), or organizations that have already built workflows around screenshot-based proof of work. If you need those features, Time Doctor is purpose-built for them. TaskPanels is purpose-built for the opposite.",
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
  timeDoctor: boolean | string;
  note?: string;
};

const comparison: ComparisonRow[] = [
  { feature: "Time tracking by project", taskpanels: true, timeDoctor: true },
  { feature: "Manual start/stop timers", taskpanels: true, timeDoctor: true },
  { feature: "Daily work summary generation", taskpanels: true, timeDoctor: "Limited" },
  { feature: "Blockers & approvals tracking", taskpanels: true, timeDoctor: false },
  { feature: "Unrealized effort tracking", taskpanels: true, timeDoctor: false },
  { feature: "Worker controls what's shared", taskpanels: true, timeDoctor: false },
  { feature: "Screenshots of activity", taskpanels: false, timeDoctor: true },
  { feature: "Idle time detection", taskpanels: false, timeDoctor: true },
  { feature: "Website & app tracking", taskpanels: false, timeDoctor: true },
  { feature: "Productivity scoring", taskpanels: false, timeDoctor: true },
  { feature: "Manager dashboard", taskpanels: "Team plan", timeDoctor: true },
  { feature: "Payroll integration", taskpanels: false, timeDoctor: true },
  { feature: "Performance review export", taskpanels: true, timeDoctor: "Limited" },
  { feature: "AI work summary composition", taskpanels: "Roadmap", timeDoctor: false },
];

export default function VsTimeDoctorPage() {
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
              TaskPanels vs. Time Doctor
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              The Time Doctor alternative without the surveillance.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Time Doctor monitors your team. TaskPanels documents your
              team&apos;s work. Both track time — but the philosophy, the data
              collected, and the relationship to the worker are completely
              different.
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

      {/* ── The core difference ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The core difference: who&apos;s the user?
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Time Doctor is built for managers who want verification that
                remote or hourly workers are working. Its core features —
                screenshots at intervals, idle time detection, app and website
                tracking, productivity scoring — exist to give the employer a
                record of activity, not to give the worker a record of output.
              </p>
              <p>
                TaskPanels is built for the worker. Its core features — panel
                tracking, context tags, structured summaries — exist to help
                the person doing the work document and communicate what they
                accomplished. Managers benefit from that documentation, but
                they get it because the worker generated and shared it, not
                because it was extracted from monitoring.
              </p>
              <p>
                Both approaches are valid for different problems. If you need
                proof-of-presence for hourly compliance, Time Doctor is built
                for that. If you want a healthier signal — what people
                actually shipped, what blocked them, what they need — without
                the surveillance overhead, TaskPanels is built for that.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <Eye className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  Time Doctor
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Built for verification.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Screenshots, idle detection, app monitoring, productivity
                  scoring. The employer gets visibility through observation.
                  Designed to answer &quot;is this person working?&quot;
                </p>
              </div>
              <div className="rounded-2xl border border-blue-200/80 bg-white p-6 shadow-sm">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Shield className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  TaskPanels
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Built for documentation.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Panels, tags, daily summaries. The employer gets visibility
                  through what the worker shares. Designed to answer
                  &quot;what did this person accomplish?&quot;
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
              Side-by-side at a feature level. Both tools handle time tracking
              well; the differences come down to what data is collected and
              who controls it.
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
                      Time Doctor
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
                        <Cell value={row.timeDoctor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Comparison based on publicly available product information as of
              2026. Time Doctor features and pricing may have changed; verify
              current capabilities at timedoctor.com.
            </p>
          </div>
        </div>
      </section>

      {/* ── When TaskPanels fits ── */}
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
                  You want visibility into what your team accomplished without
                  monitoring how they spent every minute.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  Your team is salaried knowledge workers, consultants, or
                  freelancers — not hourly workers requiring compliance proof.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You care about culture and trust, and surveillance tools
                  feel misaligned with your values.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You need outputs (work summaries, performance review
                  documentation, client invoice context) more than activity
                  reports.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You want async-friendly daily updates instead of synchronous
                  standups or check-in messages.
                </span>
              </li>
            </ul>

            <div className="mt-10 flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Users className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                When Time Doctor might fit better
              </h2>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  You manage hourly contractors and need verifiable
                  proof-of-work for compliance or billing disputes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  You operate in a regulated industry where activity logging is
                  required.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  Your existing workflows depend on screenshots, payroll
                  integration, or productivity scoring.
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
            See what tracking without surveillance looks like.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No screenshots. No idle detection. No productivity scores. Just a
            clean record of what your team accomplished — generated by them,
            shared with you.
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
