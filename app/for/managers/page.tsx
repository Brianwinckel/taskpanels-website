import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  AlertCircle,
  MessageSquare,
  BarChart3,
  CheckCircle2,
  Users,
  FileText,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "Team Visibility Tool for Managers",
  description:
    "TaskPanels gives managers real-time visibility into what their team is working on — blockers, progress, and daily summaries — without surveillance, daily check-ins, or chasing status updates.",
  alternates: {
    canonical: "/for/managers",
  },
  openGraph: {
    title: "Team Visibility Tool for Managers | TaskPanels",
    description:
      "Know what your team accomplished before the 1:1. Each person logs their own work. You see blockers, progress, and summaries — without micromanaging.",
    url: `${MARKETING_URL}/for/managers`,
    images: [
      {
        url: "/og/for-managers.png",
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
    q: "Is this employee monitoring software?",
    a: "No. TaskPanels does not track screens, keystrokes, or take screenshots. Each team member controls what they log and what they share. The visibility you get comes from their own summaries — not from surveillance.",
  },
  {
    q: "Do team members choose what they share with me?",
    a: "Yes. Each person generates their own summary and shares it with you — via email, Slack, or direct export. You see what they decide to include. It's transparency built on trust, not monitoring.",
  },
  {
    q: "How is this different from Jira, Asana, or Linear?",
    a: "Project tools track the status of tickets and milestones. TaskPanels tracks what each person actually did in their workday — including the work that doesn't have a ticket: blockers, context switches, revision rounds, and unrealized effort. It captures what project tools miss.",
  },
  {
    q: "Can I see when someone on my team is blocked?",
    a: "Yes. Blockers show up explicitly in each team member's daily summary — tagged in real time as they happen, not reconstructed at the end of the day. You know who's stuck and why before it derails the sprint.",
  },
  {
    q: "How does this help with performance reviews?",
    a: "Weekly rollups and daily summaries give you an accurate record of each person's output over time — completed work, blockers they navigated, scope they absorbed. Reviews become conversations grounded in data, not impressions.",
  },
];

const painPoints = [
  {
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600",
    title: "Status updates are inconsistent",
    description:
      "Some people are great at communicating progress. Others go quiet. You're left guessing — or sending the same \"quick check-in\" message every week.",
  },
  {
    icon: AlertCircle,
    color: "bg-orange-50 text-orange-600",
    title: "Blockers surface too late",
    description:
      "By the time you hear about a blocker, it's already been a problem for two days. The people closest to the work often absorb it silently.",
  },
  {
    icon: BarChart3,
    color: "bg-purple-50 text-purple-600",
    title: "Performance reviews rely on memory",
    description:
      "Review season comes and you're working from impressions, not records. The people who communicate well look better than the people who just ship.",
  },
];

const managerItems = [
  {
    icon: CheckCircle2,
    color: "text-emerald-600",
    label: "Each team member's completed work for the day, grouped by project",
  },
  {
    icon: AlertCircle,
    color: "text-orange-500",
    label: "Blockers — who's stuck, what's blocking them, and since when",
  },
  {
    icon: Eye,
    color: "text-blue-600",
    label: "Approvals and dependencies waiting on you or others",
  },
  {
    icon: Users,
    color: "text-slate-500",
    label: "Unplanned work absorbed — context switches and urgent requests",
  },
  {
    icon: FileText,
    color: "text-purple-600",
    label: "Weekly rollups per person for 1:1s and performance cycles",
  },
  {
    icon: BarChart3,
    color: "text-teal-600",
    label: "Time by project across the team for workload visibility",
  },
];

export default function ManagersPage() {
  return (
    <>

      {/* ── Hero ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              For Managers
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Know what your team accomplished. Before the 1:1.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels gives managers real-time visibility into what their
              team is working on — blockers, progress, and daily summaries —
              without surveillance, without daily check-ins, and without chasing
              status updates.
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
              You can&apos;t manage what you can&apos;t see.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Managing a team means making decisions with incomplete
                information. Who's overloaded? Who's blocked on something you
                could fix in five minutes? Who's doing great work that no one is
                seeing? Most managers find out about these things too late —
                during a standup, at a retrospective, or when someone finally
                raises their hand.
              </p>
              <p>
                The alternative — constant check-ins, daily status messages,
                mandatory standup notes — creates overhead that slows everyone
                down and signals that you don't trust your team. There's a
                better way to stay informed without becoming a bottleneck.
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
              Each person logs their own work. You see the full picture.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                TaskPanels works because it's useful to the people using it —
                not just to the manager watching. Each team member tracks their
                own day: the projects they're on, the blockers they hit, the
                context switches they absorb. At the end of the day, they
                generate a summary and share it.
              </p>
              <p>
                You don't have to ask what happened. The summary tells you —
                completed work by project, blockers called out by name, approvals
                that are still waiting. If someone was stuck on a dependency all
                afternoon, it shows up. If they absorbed three unplanned requests
                that pushed back their main work, that's in the record too.
              </p>
              <p>
                For 1:1s, you walk in with actual data instead of trying to
                reconstruct the last two weeks from memory. For performance
                reviews, you have a running record of what each person shipped,
                what slowed them down, and what they handled quietly without
                escalating.
              </p>
              <p>
                This is visibility built on transparency, not tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What managers see ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Eye className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What you see across your team
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              Each team member's summary gives you the full picture of their
              workday — not just what they finished, but what got in the way and
              what's still waiting.
            </p>
            <ul className="space-y-4">
              {managerItems.map((item) => (
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
            Better 1:1s start with better information.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Get your team on TaskPanels. Walk into every conversation knowing
            what happened — without asking.
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
