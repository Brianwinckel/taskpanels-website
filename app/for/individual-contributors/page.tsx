import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  AlertCircle,
  RefreshCw,
  Archive,
  CheckCircle2,
  FileText,
  BarChart3,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Daily Work Tracker for Individual Contributors",
  description:
    "TaskPanels helps individual contributors log tasks in real time and generate a clean daily work summary — with blockers, approvals, and context switches — for standups, 1:1s, and performance reviews.",
  alternates: {
    canonical: "/for/individual-contributors",
  },
  openGraph: {
    title: "Daily Work Tracker for Individual Contributors | TaskPanels",
    description:
      "Log what you work on in real time. Generate a clean daily update for your manager — with completed work, blockers, approvals, and next steps.",
    url: `${MARKETING_URL}/for/individual-contributors`,
    images: [
      {
        url: "/og/for-individual-contributors.png",
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
    q: "How is this different from Toggl or Clockify?",
    a: "Time trackers record hours. TaskPanels records context — blockers, approvals, unrealized effort, and what you actually completed. The output isn't a time report; it's a structured work summary you can send to your manager or use in a performance review.",
  },
  {
    q: "Do I need to log every single minute?",
    a: "No. Log what matters — the projects you worked on, the blockers you hit, the context switches you absorbed. You don't need perfect granularity to get a useful, accurate summary at the end of the day.",
  },
  {
    q: "Can I use this alongside Jira, Asana, or Linear?",
    a: "Yes, and it's designed for that. Those tools track project status. TaskPanels tracks your actual workday — including the time you spent on things that don't have a ticket.",
  },
  {
    q: "What does the daily summary look like?",
    a: "A structured document with sections for completed work (grouped by project with time logged), blockers, approvals in progress, context switches, and next steps. Copy it to clipboard, paste it into Slack, email it directly, or export as a PDF.",
  },
  {
    q: "Is my data private?",
    a: "Your data belongs to you. TaskPanels does not share your summaries with your employer, manager, or anyone else unless you explicitly share or export them.",
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

const painPoints = [
  {
    icon: Clock,
    color: "bg-orange-50 text-orange-600",
    title: "Blocked time disappears",
    description:
      "You waited on design sign-off for half a day. No one recorded that. It just looks like slow progress.",
  },
  {
    icon: RefreshCw,
    color: "bg-blue-50 text-blue-600",
    title: "Context switches go unrecorded",
    description:
      "You picked up four urgent things that weren't on your plate. They got done. They don't show up anywhere.",
  },
  {
    icon: Archive,
    color: "bg-purple-50 text-purple-600",
    title: "Unrealized effort is invisible",
    description:
      "You researched and drafted something that got scrapped. That work happened — but it's completely invisible.",
  },
];

const summaryItems = [
  {
    icon: CheckCircle2,
    color: "text-emerald-600",
    label: "Completed work grouped by project with time logged",
  },
  {
    icon: AlertCircle,
    color: "text-orange-500",
    label: "Blockers — what slowed you and who or what was responsible",
  },
  {
    icon: Clock,
    color: "text-blue-600",
    label: "Approvals in progress — work that's waiting, not forgotten",
  },
  {
    icon: RefreshCw,
    color: "text-slate-500",
    label: "Context switches — the unplanned work you absorbed",
  },
  {
    icon: Archive,
    color: "text-purple-600",
    label: "Unrealized effort — work that happened but didn't ship",
  },
  {
    icon: BarChart3,
    color: "text-teal-600",
    label: "Total focused time and weekly rollup for performance reviews",
  },
];

export default function IndividualContributorsPage() {
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
              For Individual Contributors
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Your work deserves a paper trail.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels is a daily work tracker for individual contributors.
              Log tasks in real time, tag blockers and context switches, and
              generate a clean summary for standups, 1:1s, and performance
              reviews — automatically.
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

      {/* ── Problem ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Eight hours of work. Nothing to show for it.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                You built a wireframe, sat through three review cycles, wrote
                the integration test suite, unblocked two teammates, and helped
                debug a production issue. Then your manager asks "so what did
                you work on this week?" — and you're staring at a blank page.
              </p>
              <p>
                Knowledge workers don't lose their work. They lose the{" "}
                <em>record</em> of their work. Tasks live in Jira tickets you
                opened and closed, Slack threads that scrolled away, and
                calendar blocks you attended but never documented. By Friday you
                can reconstruct the big wins, but the hours you spent waiting on
                approvals, reworking a feature after feedback, or investigating a
                dead-end path? Gone.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {painPoints.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6"
                >
                  <div
                    className={`mb-4 flex size-10 items-center justify-center rounded-xl ${p.color}`}
                  >
                    <p.icon className="size-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A running log that writes your update for you.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                TaskPanels gives you a dashboard of color-coded panels — one per
                project, client, or type of work. Click a panel to start the
                timer. Click again to pause. That's the entire workflow.
              </p>
              <p>
                As you go, tag what matters. Mark a task as blocked and name the
                blocker. Flag work that's waiting on approval. Mark a pivot or a
                scrapped path as unrealized effort so it stays in the record.
                You don't need to write anything — the structure is built into
                the tags.
              </p>
              <p>
                At the end of the day, click{" "}
                <strong className="font-semibold text-slate-900">
                  Generate Summary
                </strong>
                . TaskPanels produces a structured update: completed work by
                project, time spent, blockers, approvals waiting, and anything
                noteworthy. Copy it to your clipboard, email it directly, or
                save it for your weekly rollup.
              </p>
              <p>
                Nothing is inferred. Nothing is fabricated. It's a clean,
                accurate record of what actually happened — in your own tags,
                not an AI reconstruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Summary contents ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What ends up in your summary
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              Every daily summary includes the full picture of your workday —
              not just the tasks you completed, but the friction that slowed you
              down and the work that usually goes unrecorded.
            </p>
            <ul className="space-y-4">
              {summaryItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon
                    className={`mt-0.5 size-5 shrink-0 ${item.color}`}
                  />
                  <span className="text-base text-slate-700">{item.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-relaxed text-slate-600">
              Weekly rollups compile your daily summaries into a single document
              — useful for quarterly reviews, performance self-assessments, and
              any time you need to defend your output with actual data rather
              than memory.
            </p>
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
            Start building your work record today.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Set up in minutes. No complicated configuration. Just open a panel
            and start your day.
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
