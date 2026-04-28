import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Receipt,
  AlertCircle,
  RefreshCw,
  Archive,
  CheckCircle2,
  FileText,
  Users,
} from "lucide-react";
import { SITE_NAME, CTA_LINKS, MARKETING_URL } from "@/lib/constants";
import { FaqAccordion } from "@/components/site/faq-accordion";

export const metadata: Metadata = {
  title: "Billable Hours Tracker for Consultants",
  description:
    "TaskPanels helps consultants log billable work in real time and generate client-ready summaries — with completed deliverables, revision rounds, scope changes, and unrealized effort — so every invoice is backed by proof.",
  alternates: {
    canonical: "/for/consultants",
  },
  openGraph: {
    title: "Billable Hours Tracker for Consultants | TaskPanels",
    description:
      "Log billable work as you do it. Generate client-ready summaries with completed deliverables, revision rounds, and scope changes — so every invoice tells the full story.",
    url: `${MARKETING_URL}/for/consultants`,
    images: [
      {
        url: "/og/for-consultants.png",
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
    q: "Can I track work across multiple clients at the same time?",
    a: "Yes. Each panel represents a client, project, or type of work. Switch between them throughout the day — TaskPanels tracks time separately for each and keeps them cleanly organized in your summary.",
  },
  {
    q: "What does a client-facing summary look like?",
    a: "A structured document with completed deliverables grouped by project, time logged per item, revision rounds and scope changes called out explicitly, and any work that was requested but ultimately not delivered. You can copy it to clipboard, email it directly, or export it as a PDF.",
  },
  {
    q: "How does TaskPanels handle scope creep?",
    a: "Tag any task as a revision, scope addition, or client-requested change as you work. Those tags show up explicitly in your summary — so scope creep is documented in real time, not reconstructed after the fact when a client questions an invoice.",
  },
  {
    q: "Can I use this for fixed-price projects, not just hourly work?",
    a: "Yes. Fixed-price work still benefits from a work record — it shows clients what they got for their budget and documents the effort behind it. It also protects you if scope disputes come up later.",
  },
  {
    q: "Do my clients need to create an account to see summaries?",
    a: "No. You generate the summary and share it however you want — paste it into an email, attach the export, or copy it into your project management tool. Clients never need to log in to anything.",
  },
];

const painPoints = [
  {
    icon: Receipt,
    color: "bg-orange-50 text-orange-600",
    title: "Clients dispute hours they can't picture",
    description:
      "\"12 hours for that?\" is a lot easier to say when all they see is a number. A detailed work record makes invoices self-explanatory.",
  },
  {
    icon: RefreshCw,
    color: "bg-blue-50 text-blue-600",
    title: "Revision rounds vanish from the record",
    description:
      "Three rounds of revisions after sign-off is real work. Without documentation, it looks like slow delivery — not expanded scope.",
  },
  {
    icon: Archive,
    color: "bg-purple-50 text-purple-600",
    title: "Scrapped work is work you still did",
    description:
      "You researched, drafted, and presented something the client decided not to use. That effort happened — and it should show up somewhere.",
  },
];

const summaryItems = [
  {
    icon: CheckCircle2,
    color: "text-emerald-600",
    label: "Completed deliverables grouped by client and project",
  },
  {
    icon: Receipt,
    color: "text-orange-500",
    label: "Billable time per task — logged as you work, not estimated after",
  },
  {
    icon: RefreshCw,
    color: "text-blue-600",
    label: "Revision rounds and scope additions called out explicitly",
  },
  {
    icon: AlertCircle,
    color: "text-amber-500",
    label: "Blockers and dependencies — what's waiting on the client",
  },
  {
    icon: Archive,
    color: "text-purple-600",
    label: "Unrealized effort — work that was requested but not used",
  },
  {
    icon: Users,
    color: "text-teal-600",
    label: "Multi-client breakdown for days split across engagements",
  },
];

export default function ConsultantsPage() {
  return (
    <>

      {/* ── Hero ── */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-600">
              For Consultants
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Every invoice deserves a story behind it.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels helps consultants log billable work in real time and
              generate client-ready summaries — with completed deliverables,
              revision rounds, scope changes, and unrealized effort — so every
              invoice is backed by proof, not just a number.
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
              Clients don&apos;t dispute invoices they understand.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                You spent 14 hours this week on a client project. Eight of those
                hours were the original scope. Two were a round of revisions they
                asked for after sign-off. Two more were a pivot when their
                stakeholder changed direction. And two were research for an
                approach they ultimately decided against.
              </p>
              <p>
                When your invoice arrives, all the client sees is 14 hours. The
                context — the revisions, the pivot, the scrapped research — is
                gone. "12 hours for that?" is a lot easier to say when there's
                nothing on the other side of the number.
              </p>
              <p>
                The work isn't the problem. The record is.
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
              Log it as you do it. Share it when you invoice.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Open a panel for each client or project. Click to start the
                timer when you switch in, click to pause when you switch out.
                For consultants working across multiple engagements in a day,
                the panel layout makes context-switching visible — you can see
                exactly where your time went across clients at a glance.
              </p>
              <p>
                As you work, tag what matters. Revision round? Tag it. Scope
                addition the client requested mid-project? Tag it. Research that
                went nowhere because they changed direction? Mark it as
                unrealized effort so it stays in the record. These tags take
                two seconds to apply and save hours of explanation later.
              </p>
              <p>
                When you're ready to invoice, click{" "}
                <strong className="font-semibold text-slate-900">
                  Generate Summary
                </strong>
                . You get a clean, structured document: deliverables completed,
                time per item, revision rounds called out by name, and any
                unrealized work documented separately. Copy it into your invoice
                email, paste it into your project tool, or export it as a PDF.
              </p>
              <p>
                Clients who can see exactly what happened rarely push back on
                what it cost.
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
                What ends up in your client summary
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 mb-8">
              Every summary gives clients the full picture — not just the total
              hours, but what those hours covered, what changed mid-project, and
              what was done on their behalf that didn't make it into the final
              deliverable.
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
              For longer engagements, weekly rollups compile your daily
              summaries into a single document — useful for monthly billing
              cycles, retainer check-ins, or any client who wants a running
              account of progress rather than a lump invoice at the end.
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
            Turn your work into invoices clients understand.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Set up in minutes. Track across clients. Generate summaries that
            speak for themselves.
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
