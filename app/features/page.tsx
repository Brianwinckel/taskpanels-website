import type { Metadata } from "next";
import { SITE_NAME, CTA_LINKS } from "@/lib/constants";
import {
  MousePointerClick,
  Tags,
  FileText,
  BarChart3,
  AlertCircle,
  Archive,
  Send,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: `${SITE_NAME} helps you track your day and generate clean work summaries with completed work, blockers, approvals, and next steps.`,
  alternates: {
    canonical: "/features",
  },
};

const features = [
  {
    icon: MousePointerClick,
    title: "Color-coded task panels",
    description:
      "Track your day with large, visual panels. Click to start, click to stop. No complicated setup.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Tags,
    title: "Rich context tagging",
    description:
      "Tag work by project, value, status, revisions, blockers, approvals, or unrealized effort.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: FileText,
    title: "Automatic summary generation",
    description:
      "At the end of the day, generate a polished update you can copy, email, or export.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Time by project breakdowns",
    description:
      "See exactly where your time went across projects with clear visual breakdowns.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: AlertCircle,
    title: "Blocker & follow-up tracking",
    description:
      "Make blocked work visible. Show what's waiting on review, approval, or someone else.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Archive,
    title: "Unrealized effort tracking",
    description:
      "Track shelved, scrapped, and pivoted work — effort that usually disappears from the record.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Send,
    title: "Export & email tools",
    description:
      "Copy your summary to clipboard, email it directly, or export it for reports and 1:1s.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: FolderKanban,
    title: "Weekly rollups",
    description:
      "Get weekly summaries of your work across all projects for reviews and standups.",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Everything you need to show your work
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              TaskPanels gives you a simple, visual way to track your day and
              turn it into a clean summary — without the overhead of complex
              project tools.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`mb-4 flex size-11 items-center justify-center rounded-xl ${feature.color}`}
                >
                  <feature.icon className="size-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-slate-50/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for the worker, not the watcher
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            TaskPanels is not employee surveillance. It&apos;s a tool that helps
            you document and communicate your work clearly.
          </p>
          <div className="mt-8">
            <a
              href={CTA_LINKS.primary}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-base font-medium text-white transition-colors hover:bg-slate-800"
            >
              Try TaskPanels
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
