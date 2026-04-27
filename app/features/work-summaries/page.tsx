import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Layers,
  Puzzle,
  Bot,
  CheckCircle2,
  AlertCircle,
  Archive,
  RefreshCw,
  Clock,
  Send,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Work Summaries — Daily Updates Across Every Tool You Use",
  description:
    "TaskPanels generates AI work summaries that consolidate everything you accomplished — across project tools, code, docs, and AI assistants like Claude and ChatGPT — into a single manager-ready daily brief.",
  alternates: {
    canonical: "/features/work-summaries",
  },
  openGraph: {
    title: "AI Work Summaries | TaskPanels",
    description:
      "One daily brief that captures your full workday — including AI-assisted work in Claude and ChatGPT — with completed deliverables, blockers, approvals, and next steps.",
    url: `${MARKETING_URL}/features/work-summaries`,
    images: [
      {
        url: "/og/features-work-summaries.png",
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
    q: "What goes into an AI work summary today?",
    a: "Today, summaries are generated from the work you log in TaskPanels — projects, tasks, time spent, blockers, approvals waiting, and unrealized effort. The output is a structured, manager-ready daily brief with completed work grouped by project, blockers called out by name, and what's coming next.",
  },
  {
    q: "How is AI involved in the summary?",
    a: "An AI composition layer is in development. It will take your structured TaskPanels data and produce a polished, prose-ready update written in your voice — turning bullet points into something you'd actually paste into a Slack message or email without editing. The structured summary you get today is the foundation the AI layer is being built on.",
  },
  {
    q: "Will it pull data from Claude, ChatGPT, or other AI tools?",
    a: "Yes. A Chrome extension is on the roadmap that will capture work happening in Claude Desktop, ChatGPT, and other AI assistants — so the time you spend pair-programming with an AI, drafting with one, or researching through one shows up in your summary automatically. Today, you can log AI-assisted work as its own panel manually.",
  },
  {
    q: "What other tools will the AI layer eventually pull from?",
    a: "The vision is a work intelligence layer that reads from the tools you already use — GitHub, Linear, Jira, Notion, Slack, Google Docs — and composes a single daily summary across all of them. The AI's job is reconciliation and writing; your tagged TaskPanels data stays the source of truth for what mattered.",
  },
  {
    q: "Can I customize the format of my summary?",
    a: "Yes. Choose the sections you want included, the level of detail, and the tone (concise standup vs. detailed weekly recap). Save formats per audience — one for your manager, one for clients, one for your own records.",
  },
  {
    q: "When is the AI composition layer launching?",
    a: "The AI composition layer and Chrome extension are on the near-term roadmap — both in active development. We'll announce availability to TaskPanels users first. The structured summary generation that powers everything is available today on every plan.",
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

const sourcePoints = [
  {
    icon: Layers,
    color: "bg-blue-50 text-blue-600",
    title: "Your project tools",
    description:
      "What you shipped lives in GitHub, Linear, Jira, Notion. The summary brings it together so you don't have to.",
  },
  {
    icon: Bot,
    color: "bg-purple-50 text-purple-600",
    title: "Your AI assistants",
    description:
      "Pair programming in Claude Desktop. Research in ChatGPT. Drafts in Gemini. AI-assisted work counts — and it should show up.",
  },
  {
    icon: Puzzle,
    color: "bg-emerald-50 text-emerald-600",
    title: "Your browser activity",
    description:
      "A Chrome extension captures the tools you use throughout the day so AI-assisted and web-based work flows into your summary automatically.",
  },
];

const summaryItems = [
  {
    icon: CheckCircle2,
    color: "text-emerald-600",
    label: "Completed deliverables grouped by project with time logged",
  },
  {
    icon: Bot,
    color: "text-purple-600",
    label: "AI-assisted work — what you built with Claude, ChatGPT, or other assistants",
  },
  {
    icon: AlertCircle,
    color: "text-orange-500",
    label: "Blockers — what slowed you and what would unblock it",
  },
  {
    icon: Clock,
    color: "text-blue-600",
    label: "Approvals and dependencies still in flight",
  },
  {
    icon: RefreshCw,
    color: "text-slate-500",
    label: "Context switches — the unplanned work you absorbed",
  },
  {
    icon: Archive,
    color: "text-amber-600",
    label: "Unrealized effort — work that happened but didn't ship",
  },
  {
    icon: Send,
    color: "text-teal-600",
    label: "Next steps — what's coming tomorrow or waiting on input",
  },
];

export default function WorkSummariesPage() {
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
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              <Sparkles className="size-3.5 text-purple-600" />
              AI Work Summaries
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Your day, every tool, one brief.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels generates AI work summaries that consolidate everything
              you accomplished — across project tools, code, docs, and AI
              assistants like Claude and ChatGPT — into a single manager-ready
              daily brief with completed work, blockers, approvals, and next
              steps.
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
              Your work happens in 12 tools. Your summary shouldn&apos;t.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                A modern workday is fragmented across GitHub, Linear, Notion,
                Slack, Google Docs, design tools, video calls — and now,
                increasingly, AI assistants like Claude and ChatGPT. Each tool
                has its own activity log. None of them tells the whole story of
                what you actually did today.
              </p>
              <p>
                Reconstructing the day means combing through tabs at 5pm,
                copy-pasting between tools, and writing the same summary three
                different ways for your manager, your standup, and your weekly
                rollup. The result is either a watered-down version of your
                output or no summary at all — and the work that doesn&apos;t make
                it into the record might as well not have happened.
              </p>
              <p>
                AI work summaries fix this by treating the summary as the
                primary artifact: one place where everything you did flows in,
                and one polished update flows out — ready to send.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works today ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How it works today
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Every TaskPanels summary starts with structured data you log in
                real time: projects you worked on, tasks you completed, blockers
                you hit, approvals waiting, scope changes, and unrealized
                effort. You don&apos;t write anything — the structure is built
                into the panels and tags.
              </p>
              <p>
                When you&apos;re ready, click{" "}
                <strong className="font-semibold text-slate-900">
                  Generate Summary
                </strong>
                . You get a clean, structured daily brief: completed work
                grouped by project with time logged, blockers called out by
                name, approvals in progress, and next steps. Copy it to your
                clipboard, paste it into Slack, email it to your manager, or
                export it as a PDF for performance reviews.
              </p>
              <p>
                Nothing is inferred or fabricated. Every line in the summary
                traces back to something you tagged. It&apos;s a clean,
                accurate record of what actually happened — your tags, your
                voice, your record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Roadmap: AI layer ── */}
      <section className="border-t border-slate-200/60 bg-gradient-to-b from-purple-50/30 via-white to-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
              <Sparkles className="size-3" />
              Coming next
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The AI layer: every tool, including the AI ones.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                The AI composition layer takes your structured TaskPanels data
                and writes it up — turning tags and time logs into prose-ready
                updates in your voice. A Chrome extension on the roadmap will
                also capture work happening in Claude Desktop, ChatGPT, and
                other browser-based tools, so AI-assisted work flows into your
                summary automatically.
              </p>
              <p>
                The end state is a work intelligence layer: TaskPanels reads
                from the tools you already use — your project tracker, your
                code repo, your AI assistants — and composes a single daily
                summary across all of them. Your tagged data stays the source of
                truth for what mattered. The AI handles reconciliation and
                writing.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {sourcePoints.map((p) => (
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

      {/* ── What's in a summary ── */}
      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText className="size-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                What ends up in your AI work summary
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              Every summary gives you and your audience the full picture — not
              just the tasks you completed, but the work that flowed across
              tools, the friction that slowed you down, and what&apos;s still in
              motion.
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
              — useful for performance reviews, retrospectives, client billing
              cycles, or any time you need to defend your output with actual
              data instead of memory.
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
            Stop reconstructing your day. Start sending it.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Set up in minutes. Generate your first summary today. Get on the
            list for the AI layer when it ships.
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
