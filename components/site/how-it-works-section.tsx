"use client";

import { SectionWrapper } from "./section-wrapper";
import { MousePointerClick, Tags, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MousePointerClick,
    title: "Click what you're working on",
    description: "Use large color panels to track your day as it happens.",
    color: "bg-blue-500",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    number: "2",
    icon: Tags,
    title: "Add context as needed",
    description:
      "Tag work by project, value, status, revisions, blockers, approvals, or unrealized effort.",
    color: "bg-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    number: "3",
    icon: FileText,
    title: "Generate your summary",
    description:
      "At the end of the day, TaskPanels turns everything into a polished update you can copy, email, or export.",
    color: "bg-purple-500",
    iconBg: "bg-purple-50 text-purple-600",
  },
];

export function HowItWorksSection() {
  return (
    <SectionWrapper background="muted">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          From work to summary in 3 simple steps
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.number} className="relative text-center">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-slate-200 sm:block" />
            )}
            <div className="relative mx-auto mb-5 flex size-16 items-center justify-center">
              <div className={`absolute inset-0 rounded-2xl ${step.iconBg} opacity-50`} />
              <div className={`relative flex size-10 items-center justify-center rounded-xl ${step.iconBg}`}>
                <step.icon className="size-5" />
              </div>
            </div>
            <div className={`mx-auto mb-3 flex size-7 items-center justify-center rounded-full ${step.color} text-xs font-bold text-white`}>
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
