import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  FileText,
  Layers,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "TaskPanels vs. Toggl — A Toggl Alternative That Captures Context",
  description:
    "Looking for a Toggl alternative? TaskPanels tracks time like Toggl does — and adds the context that makes hours useful: blockers, approvals, completed work, and a structured daily summary your manager or clients can actually read.",
  alternates: {
    canonical: "/vs/toggl",
  },
  openGraph: {
    title: "TaskPanels vs. Toggl | TaskPanels",
    description:
      "Toggl tracks hours. TaskPanels tracks hours plus everything that explains them. See the side-by-side comparison.",
    url: `${MARKETING_URL}/vs/toggl`,
    images: [
      {
        url: "/og/vs-toggl.png",
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
    q: "Why use TaskPanels if Toggl already tracks time well?",
    a: "Toggl is excellent at tracking hours. TaskPanels is excellent at tracking what those hours meant. If your output is a timesheet, Toggl is enough. If your output is a daily summary, a 1:1 update, a performance review document, or a client invoice that explains the work — TaskPanels gives you the context Toggl doesn't capture.",
  },
  {
    q: "Does TaskPanels have a free tier like Toggl?",
    a: "Toggl offers a free plan for up to 5 users with basic time tracking. TaskPanels is currently paid only ($12/month Individual, $9/user/month Team) but includes unlimited panels, full summary generation, blockers, unrealized effort tracking, weekly reporting, and exports. A free tier is on the roadmap.",
  },
  {
    q: "Can I use both Toggl and TaskPanels?",
    a: "Yes — they overlap on time tracking but solve different problems. Some teams use Toggl for billable invoicing and TaskPanels for daily summaries and 1:1s. Most teams find that TaskPanels covers both jobs once they've adopted it.",
  },
  {
    q: "Can I export my Toggl data into TaskPanels?",
    a: "Not directly — the data models are different (Toggl is hours-per-project; TaskPanels adds tagged context). Most teams switch by starting fresh with TaskPanels going forward, exporting historical Toggl reports as needed for archival.",
  },
  {
    q: "How do TaskPanels reports compare to Toggl reports?",
    a: "Toggl reports show hours by project, client, tag, or user — useful for invoicing and time auditing. TaskPanels reports are structured work summaries: completed work grouped by project with time logged, blockers called out, approvals waiting, and unrealized effort documented. Different audience, different output.",
  },
  {
    q: "Does TaskPanels integrate with calendars or project tools like Toggl does?",
    a: "Toggl has mature integrations with calendars, Jira, Asana, and dozens of other tools. TaskPanels integrations are on the roadmap — currently the workflow is manual panel tracking with structured tags. A Chrome extension on the roadmap will auto-capture web-based AI tools like ChatGPT and Claude.ai, and a TaskPanels skills.md file will plug into desktop and CLI tools like Claude Desktop and Codex.",
  },
];

type ComparisonRow = {
  feature: string;
  taskpanels: boolean | string;
  toggl: boolean | string;
};

const comparison: ComparisonRow[] = [
  { feature: "Time tracking by project", taskpanels: true, toggl: true },
  { feature: "Manual start/stop timers", taskpanels: true, toggl: true },
  { feature: "No screenshots / no surveillance", taskpanels: true, toggl: true },
  { feature: "Free tier", taskpanels: "Roadmap", toggl: "Up to 5 users" },
  { feature: "Blockers & approvals tracking", taskpanels: true, toggl: false },
  { feature: "Unrealized effort tracking", taskpanels: true, toggl: false },
  { feature: "Daily structured work summary", taskpanels: true, toggl: "Hours reports only" },
  { feature: "Weekly rollups for reviews", taskpanels: true, toggl: false },
  { feature: "Performance review export", taskpanels: true, toggl: false },
  { feature: "Manager / team dashboard", taskpanels: "Team plan", toggl: true },
  { feature: "Project budgets & billable rates", taskpanels: false, toggl: true },
  { feature: "Calendar / Jira / Asana integrations", taskpanels: "Roadmap", toggl: true },
  { feature: "Browser extension", taskpanels: "Roadmap", toggl: true },
  { feature: "Mobile app (iOS + Android)", taskpanels: "PWA", toggl: true },
  { feature: "Pomodoro timer", taskpanels: false, toggl: true },
  { feature: "AI work summary composition", taskpanels: "Roadmap", toggl: false },
];

export default function VsTogglPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              TaskPanels vs. Toggl
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              When &quot;how many hours&quot; isn&apos;t a complete answer.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Toggl is a clean, well-built time tracker. TaskPanels is what you
              reach for when you need more than a number — when your output
              also has to capture blockers, approvals, scope changes, and
              what you actually shipped.
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

      {/* ── Same job, different output ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Same job at the start. Different output at the end.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Both tools start the same way: you open them, click a project,
                start a timer. Both are worker-friendly — neither takes
                screenshots, monitors apps, or scores your productivity. If you
                stopped at the timer, the two are largely interchangeable
                (Toggl with a more polished free tier; TaskPanels with a
                slightly different UI).
              </p>
              <p>
                The divergence happens at the end of the day. Toggl gives you
                a report — hours by project, client, tag, or user. Useful for
                invoicing, useful for time audits. But it doesn&apos;t answer
                &quot;what did you accomplish?&quot;, &quot;what are you blocked
                on?&quot;, or &quot;what got pivoted or scrapped along the
                way?&quot; Those questions are the ones a manager, a client, or
                your future-self at performance review time will actually ask.
              </p>
              <p>
                TaskPanels treats the daily summary as the primary artifact.
                Time tracking is one input. The output is structured prose:
                completed work, blockers, approvals waiting, unrealized effort,
                next steps. That&apos;s the bridge from &quot;hours logged&quot;
                to &quot;work explained.&quot;
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">Toggl</h3>
                <p className="mt-2 text-sm font-medium text-slate-700">
                  Built for hours.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  A clean, minimal time tracker with mature reporting,
                  integrations, and a generous free tier. Best when your
                  output is a timesheet or hours-based invoice.
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
                  Built for summaries.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Time tracking plus structured tags for blockers, approvals,
                  and unrealized effort. Best when your output is a daily
                  summary, 1:1 update, or performance review document.
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
              Toggl is more mature on integrations and platform breadth.
              TaskPanels is built around a different output. Here&apos;s where
              each leads.
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
                      Toggl
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
                        <Cell value={row.toggl} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Comparison based on publicly available product information as of
              2026. Toggl features and pricing may have changed; verify current
              capabilities at toggl.com.
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
                  You need to communicate work, not just log hours — daily
                  summaries for managers, 1:1s, or weekly reports.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You&apos;re a knowledge worker dealing with blockers,
                  approvals, scope changes, or unrealized effort that hours
                  alone can&apos;t capture.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You&apos;re a consultant whose invoices need narrative
                  context, not just hour totals.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-emerald-600" />
                <span>
                  You want a record of your output for performance reviews
                  rather than reconstructing from memory.
                </span>
              </li>
            </ul>

            <div className="mt-10 flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Layers className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                When Toggl might fit better
              </h2>
            </div>
            <ul className="space-y-3 text-base leading-relaxed text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  You only need pure time tracking and your output is a
                  timesheet or hourly invoice.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  You need a free tier for a small team (up to 5 users).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  You depend heavily on calendar, Jira, Asana, or other
                  third-party integrations TaskPanels hasn&apos;t shipped yet.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-orange-500" />
                <span>
                  You need project budgets, billable rate management, or
                  Pomodoro features.
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
            <div className="mt-10">
              <FaqAccordion items={faqs} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Track your time. Then say what it meant.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Set up in minutes. Get a structured daily summary your manager,
            clients, or future-self at review time can actually use.
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
