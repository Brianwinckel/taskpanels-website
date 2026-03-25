"use client";

import { SectionWrapper } from "./section-wrapper";
import { User, Briefcase, Users } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Individual Contributors",
    description:
      "For professionals who need cleaner updates, better visibility, and less status-reporting overhead.",
    color: "border-t-blue-500",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Freelancers & Consultants",
    description:
      "For client-facing professionals who need to show what was done, what's in motion, and what changed.",
    color: "border-t-emerald-500",
    iconBg: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Managers & Team Leads",
    description:
      "For leaders who want better visibility without chasing or micromanaging.",
    color: "border-t-purple-500",
    iconBg: "bg-purple-50 text-purple-600",
  },
];

export function AudienceSection() {
  return (
    <SectionWrapper background="muted">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Built for professionals who need their work to be visible
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
        {audiences.map((item) => (
          <div
            key={item.title}
            className={`rounded-2xl border border-slate-200/80 border-t-4 ${item.color} bg-white p-6 shadow-sm transition-shadow hover:shadow-md`}
          >
            <div className={`mb-4 flex size-11 items-center justify-center rounded-xl ${item.iconBg}`}>
              <item.icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
