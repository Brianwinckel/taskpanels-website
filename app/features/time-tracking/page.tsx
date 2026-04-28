import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Tag,
  AlertCircle,
  Receipt,
  CheckCircle2,
  Archive,
  RefreshCw,
  FileText,
  Eye,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "Time Tracking Software with Context — Not Just Hours",
  description:
    "TaskPanels is time tracking software that captures context — completed work, blockers, approvals, and unrealized effort — alongside the hours. Get a structured work summary at the end of every day, not just a timesheet.",
  alternates: {
    canonical: "/features/time-tracking",
  },
  openGraph: {
    title: "Time Tracking Software That Captures Context | TaskPanels",
    description:
      "Track time the way modern knowledge work actually happens — with blockers, approvals, scope changes, and the unplanned work you absorb. Output is a daily work summary, not a timesheet.",
    url: `${MARKETING_URL}/features/time-tracking`,
    images: [
      {
        url: "/og/features-time-tracking.png",
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
    q: "How is this different from Toggl, Clockify, or Harvest?",
    a: "Those tools log hours. TaskPanels logs context — what you completed, what blocked you, what's waiting on approval, what got pivoted or scrapped. The output isn't a timesheet; it's a structured daily work summary that explains what your hours actually meant.",
  },
  {
    q: "Does TaskPanels track idle time or take screenshots?",
    a: "No. TaskPanels never tracks keystrokes, takes screenshots, or monitors which apps you have open. Tracking is fully manual — you click in and out of panels as you work. Built for the worker, not the watcher.",
  },
  {
    q: "Can I edit time entries after the fact?",
    a: "Yes. Adjust start and end times, reassign work to a different panel, add or change tags, or delete an entry. The clean version of your day is the one that goes into your summary — fix it before you generate.",
  },
  {
    q: "Does it work for billable hours and invoicing?",
    a: "Yes. Track time per client or project, tag work as billable, and export the day or week as a structured report you can attach to invoices. For consultants, the summary documents revisions, scope changes, and unrealized effort — context that makes invoices easier to defend.",
  },
  {
    q: "Can I export to my accounting or invoicing software?",
    a: "Yes. Export daily or weekly time logs as CSV or structured text. Native integrations with common invoicing tools are on the roadmap; today, the export format is designed to paste cleanly into invoices, project tools, or spreadsheets.",
  },
  {
    q: "Will it autostart timers based on what I'm doing?",
    a: "No — and intentionally. Auto-tracking is on the roadmap as opt-in: a Chrome extension for web-based AI tools like ChatGPT and Claude.ai, and a TaskPanels skills.md file for desktop and CLI tools like Claude Desktop and Codex. The default will always be manual. You control what's tracked and what isn't.",
  },
];

const painPoints = [
  {
    icon: Clock,
    color: "bg-blue-50 text-blue-600",
    title: "A timesheet doesn't tell the story",
    description:
      "\"7.5 hours on Project X\" doesn't say what you shipped, what blocked you, or what got scrapped along the way.",
  },
  {
    icon: Eye,
    color: "bg-orange-50 text-orange-600",
    title: "Surveillance trackers feel hostile",
    description:
      "Screenshots, idle detection, productivity scores — the tools designed for managers usually feel terrible to use.",
  },
  {
    icon: Tag,
    color: "bg-purple-50 text-purple-600",
    title: "Pure timers miss what matters",
    description:
      "Hours alone can't capture revisions, blockers, scope creep, or the unplanned work that filled half your day.",
  },
];

const logItems = [
  {
    icon: Clock,
    color: "text-blue-600",
    label: "Time per project, tracked as you switch — no estimation after the fact",
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-600",
    label: "Completed work tagged at the task level",
  },
  {
    icon: AlertCircle,
    color: "text-orange-500",
    label: "Blockers — flagged in real time as they happen",
  },
  {
    icon: RefreshCw,
    color: "text-slate-500",
    label: "Revisions, rework, and scope additions tracked separately",
  },
  {
    icon: Archive,
    color: "text-purple-600",
    label: "Unrealized effort — work that happened but didn't ship",
  },
  {
    icon: Receipt,
    color: "text-amber-600",
    label: "Billable / non-billable distinction for consultant workflows",
  },
  {
    icon: FileText,
    color: "text-teal-600",
    label: "Daily summary export and weekly rollups for reporting",
  },
];

export default function TimeTrackingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              Time Tracking
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Time tracking that tells you what your hours meant.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels is time tracking software that captures context —
              completed work, blockers, approvals, and unrealized effort —
              alongside the hours. So at the end of the day you don&apos;t just
              have a timesheet. You have a record of what you actually did.
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
              Hours alone don&apos;t explain your day.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Most time tracking software assumes that the number of hours is
                the answer. Log hours per project, generate a report, send it
                up. But anyone who actually does knowledge work knows that
                hours without context are nearly useless. Six hours on a project
                could mean you shipped three deliverables — or it could mean you
                spent the whole afternoon waiting on someone&apos;s approval.
              </p>
              <p>
                The current market splits into two unhelpful categories: pure
                timers (Toggl, Clockify, Harvest) that capture hours but no
                context, and surveillance tools (
                <Link
                  href="/vs/time-doctor"
                  className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
                >
                  Time Doctor
                </Link>
                , Hubstaff, ActivTrak) that capture too much context —
                screenshots, app activity, productivity scores — in a way that
                feels hostile to the people using them. Neither approach gives
                you what you actually need: a clean record of what you did, why
                it took the time it did, and what got in the way.
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
              Click in. Click out. Tag what mattered.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                TaskPanels uses a panel-based interface — one panel per project,
                client, or type of work. Click a panel to start the timer for
                that work. Click another panel to switch — the previous timer
                pauses automatically. There&apos;s no setup beyond naming your
                panels.
              </p>
              <p>
                As you work, tag what matters. Mark a task as completed, blocked,
                in revision, waiting on approval, or shelved. Tags take a click
                each and live in your daily summary alongside the time logged.
                That&apos;s the entire workflow — no timesheet to fill out, no
                end-of-week reconstruction, no monitoring software running in
                the background.
              </p>
              <p>
                The output is what makes TaskPanels different from a pure timer.
                At the end of the day, click{" "}
                <strong className="font-semibold text-slate-900">
                  Generate Summary
                </strong>{" "}
                and you get a structured daily brief: time per project,
                completed work, blockers called out by name, approvals waiting,
                and any unrealized effort documented separately. That&apos;s
                what gets sent to your manager, attached to your invoice, or
                saved for your performance review.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's in your time log ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Clock className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What ends up in your time log
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              Every entry captures more than minutes — it captures the context
              that explains the minutes.
            </p>
            <ul className="space-y-4">
              {logItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon
                    className={`mt-0.5 size-5 shrink-0 ${item.color}`}
                  />
                  <span className="text-base text-slate-700">{item.label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-relaxed text-slate-600">
              For consultants and freelancers, the same data feeds invoices and
              client summaries. For employees, it feeds standups, 1:1s, and
              performance reviews. One time log; many audiences.
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
            Track time. Capture context. Send a summary that explains both.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Set up in minutes. No screenshots. No surveillance. Just a clean,
            useful record of what you did.
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
