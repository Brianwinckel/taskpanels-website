"use client";

import { SectionWrapper } from "./section-wrapper";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FolderKanban,
  Lightbulb,
  Trophy,
} from "lucide-react";

const outcomes = [
  {
    icon: Send,
    title: "Send better updates in less time",
    description: "No more rebuilding your day from memory.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: CheckCircle2,
    title: "Show what got done",
    description: "Capture completed work, progress, and pass-offs clearly.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: AlertCircle,
    title: "Make blockers visible",
    description: "Show what's waiting on review, approval, or someone else.",
    color: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    icon: FolderKanban,
    title: "Track work across projects",
    description: "Know where your time actually went.",
    color: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    icon: Lightbulb,
    title: "Get credit for unrealized effort",
    description: "Shelved and scrapped work still took real thought and effort.",
    color: "bg-teal-50 text-teal-600 border-teal-100",
  },
  {
    icon: Trophy,
    title: "Build a record of your impact",
    description: "Useful for 1:1s, reviews, promotions, and client updates.",
    color: "bg-rose-50 text-rose-600 border-rose-100",
  },
];

export function OutcomesSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          What TaskPanels actually helps you do
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div className={`mb-4 flex size-11 items-center justify-center rounded-xl border ${item.color}`}>
              <item.icon className="size-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
