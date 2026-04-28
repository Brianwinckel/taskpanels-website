import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  MessageSquare,
  Clock,
  Eye,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  FileText,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "Async Daily Updates for Remote Teams",
  description:
    "TaskPanels helps remote and distributed teams share daily work summaries asynchronously — so managers know what their team accomplished, what's blocked, and what's coming next, without a daily video call.",
  alternates: {
    canonical: "/for/remote-teams",
  },
  openGraph: {
    title: "Async Daily Updates for Remote Teams | TaskPanels",
    description:
      "Log your day. Share your summary. No meeting required. TaskPanels gives remote teams a simple way to stay aligned across time zones.",
    url: `${MARKETING_URL}/for/remote-teams`,
    images: [
      {
        url: "/og/for-remote-teams.png",
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
    q: "Does this replace our daily standup?",
    a: "It can. Many remote teams use TaskPanels summaries instead of a synchronous standup — each person shares their update asynchronously, the manager reads it when their day starts, and the meeting time goes back to everyone's calendar. Others use it to make standups shorter and more useful since everyone already knows what happened.",
  },
  {
    q: "How does it work across time zones?",
    a: "Each person generates their summary at the end of their workday and shares it — via email, Slack, or export. The manager or team reads it whenever their day begins. There's no synchronous dependency. The information transfers across time zones without anyone having to be online at the same time.",
  },
  {
    q: "Can my whole team use TaskPanels together?",
    a: "Yes. The Team plan gives every member their own workspace to track their day, plus shared visibility so managers can see summaries across the team. Each person logs independently; the visibility is collective.",
  },
  {
    q: "Is there a team dashboard where I can see everyone at once?",
    a: "The Team plan includes a manager dashboard with team-level visibility — completed work, active blockers, and summaries across the team in one place.",
  },
  {
    q: "What if someone on the team works irregular or flexible hours?",
    a: "TaskPanels works on your schedule, not a fixed clock. Log when you work, generate your summary when your day ends — whether that's at 3pm or midnight. There's no required cadence beyond what your team decides together.",
  },
];

const painPoints = [
  {
    icon: Eye,
    color: "bg-blue-50 text-blue-600",
    title: "Progress is invisible by default",
    description:
      "No one walks by your desk. No one sees you in a meeting room. Remote work is heads-down by nature — but that means output is invisible unless someone documents it.",
  },
  {
    icon: Globe,
    color: "bg-emerald-50 text-emerald-600",
    title: "Time zones break synchronous updates",
    description:
      "A daily standup that works for New York doesn't work for Berlin. Async updates shouldn't require a video call to be useful.",
  },
  {
    icon: MessageSquare,
    color: "bg-orange-50 text-orange-600",
    title: "\"What did you work on?\" shouldn't be a daily message",
    description:
      "When managers have to ask, it signals a lack of trust — even when that's not the intent. A shared summary system makes the update automatic.",
  },
];

const updateItems = [
  {
    icon: CheckCircle2,
    color: "text-emerald-600",
    label: "Completed work for the day, grouped by project",
  },
  {
    icon: AlertCircle,
    color: "text-orange-500",
    label: "Blockers — what's stuck and what would unblock it",
  },
  {
    icon: Clock,
    color: "text-blue-600",
    label: "Time per project — no estimation, logged as it happened",
  },
  {
    icon: RefreshCw,
    color: "text-slate-500",
    label: "Context switches and unplanned work absorbed during the day",
  },
  {
    icon: FileText,
    color: "text-purple-600",
    label: "Next steps — what's coming tomorrow or waiting on input",
  },
  {
    icon: Globe,
    color: "text-teal-600",
    label: "Weekly rollups for team retrospectives and async syncs",
  },
];

export default function RemoteTeamsPage() {
  return (
    <>

      {/* ── Hero ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              For Remote Teams
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Daily updates your remote team will actually send.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels helps remote and distributed teams share daily work
              summaries asynchronously — so managers know what their team
              accomplished, what&apos;s blocked, and what&apos;s coming next,
              without scheduling another video call.
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
                See team pricing
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
              Remote work made progress invisible by default.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                In an office, progress is ambient. People see each other working,
                hear about blockers in passing, and absorb team context just by
                being in the same room. Remote work strips all of that away. The
                work is still happening — but unless someone documents it,
                nobody knows.
              </p>
              <p>
                Most remote teams try to solve this with more meetings. A daily
                standup. A weekly sync. An end-of-day Slack check-in. Each one
                adds overhead without actually solving the problem — because the
                real issue isn't communication frequency, it's that there's no
                structured record of what happened.
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
              Log your day. Share your summary. No meeting required.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Each team member tracks their day in TaskPanels — one panel per
                project, clicking in and out as they switch between work. They
                tag blockers when they hit them, not at the end of the day when
                context has faded. When their workday ends, they generate a
                summary and share it.
              </p>
              <p>
                The manager reads it when their day begins — even if that's
                eight time zones later. No scheduling required. No one has to be
                online at the same time. The information travels asynchronously
                and arrives structured: completed work, blocked items, what's
                next.
              </p>
              <p>
                For teams that still want a standup, TaskPanels makes it
                shorter. Everyone already knows what happened before the call
                starts. The meeting becomes a conversation about decisions, not
                a status recitation.
              </p>
              <p>
                Weekly rollups compile each person&apos;s daily summaries into a
                single document — useful for retrospectives, project updates, and
                any stakeholder who wants a running record of team progress
                without attending another meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's in an async update ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Globe className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What every async update covers
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              TaskPanels summaries give your team and manager everything they
              need to stay aligned — whether they&apos;re reading at 8am or 8pm,
              in the same city or a different continent.
            </p>
            <ul className="space-y-4">
              {updateItems.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <item.icon
                    className={`mt-0.5 size-5 shrink-0 ${item.color}`}
                  />
                  <span className="text-base text-slate-700">{item.label}</span>
                </li>
              ))}
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
            Fewer meetings. Better visibility.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get your remote team on TaskPanels. Everyone logs their own day.
            Everyone stays aligned — without adding another call to the calendar.
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
              See team pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
