"use client";

import { SectionWrapper } from "./section-wrapper";
import { Clock, Kanban, Eye } from "lucide-react";

const comparisons = [
  {
    icon: Clock,
    title: "Time Trackers",
    good: "Hours",
    bad: "Context, blockers, approvals, value",
    borderColor: "border-t-blue-500",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: Kanban,
    title: "Project Tools",
    good: "Assignments",
    bad: "What actually happened today",
    borderColor: "border-t-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Eye,
    title: "Monitoring Software",
    good: "Distrust",
    bad: "Literally everything else",
    borderColor: "border-t-orange-400",
    iconBg: "bg-orange-50 text-orange-600",
  },
];

export function ComparisonSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Time trackers log hours.
          <br />
          Project tools track tasks.
          <br />
          TaskPanels shows your actual work.
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
        {comparisons.map((card) => (
          <div
            key={card.title}
            className={`rounded-2xl border border-slate-200/80 border-t-4 ${card.borderColor} bg-white p-6 shadow-sm transition-shadow hover:shadow-md`}
          >
            <div className={`mb-4 flex size-11 items-center justify-center rounded-xl ${card.iconBg}`}>
              <card.icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                <span className="font-medium text-emerald-600">Good for: </span>
                <span className="text-slate-600">{card.good}</span>
              </p>
              <p className="text-sm">
                <span className="font-medium text-rose-500">Bad for: </span>
                <span className="text-slate-600">{card.bad}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-lg font-semibold text-slate-900">
        TaskPanels is built for the worker, not the watcher.
      </p>
    </SectionWrapper>
  );
}
