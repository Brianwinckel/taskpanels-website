"use client";

import { CTA_LINKS } from "@/lib/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

function PanelMockup() {
  const panels = [
    { label: "Website Refresh", color: "bg-blue-500", time: "2h 40m", tasks: 3 },
    { label: "Launch Assets", color: "bg-emerald-500", time: "1h 55m", tasks: 2 },
    { label: "Internal Ops", color: "bg-orange-400", time: "1h 10m", tasks: 2 },
    { label: "Client Review", color: "bg-purple-500", time: "0h 45m", tasks: 1 },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50">
      <div className="mb-3 flex items-center gap-2">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="size-1.5 rounded-[2px] bg-blue-500" />
          <div className="size-1.5 rounded-[2px] bg-emerald-500" />
          <div className="size-1.5 rounded-[2px] bg-orange-400" />
          <div className="size-1.5 rounded-[2px] bg-purple-500" />
        </div>
        <span className="text-xs font-medium text-slate-500">Today&apos;s Panels</span>
      </div>
      <div className="space-y-2">
        {panels.map((panel, i) => (
          <motion.div
            key={panel.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/50 p-3"
          >
            <div className={`h-9 w-1.5 rounded-full ${panel.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 truncate">{panel.label}</p>
              <p className="text-xs text-slate-400">{panel.tasks} tasks</p>
            </div>
            <span className="text-xs font-medium text-slate-500 tabular-nums">{panel.time}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SummaryMockup() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-200/50">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">Daily Summary — March 24</span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-600">
          Ready
        </span>
      </div>
      <div className="space-y-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Completed</p>
          <ul className="mt-1 space-y-0.5">
            <li className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-emerald-500" />
              Finished homepage wireframe
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-emerald-500" />
              Delivered revised video assets
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">In Progress</p>
          <ul className="mt-1">
            <li className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-blue-500" />
              Landing page copy updates
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Needs Follow-up</p>
          <ul className="mt-1 space-y-0.5">
            <li className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-orange-400" />
              Waiting for design approval
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-600">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-orange-400" />
              Need review on CTA options
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      {/* Subtle background dots */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Track your day.
              <br />
              Generate your update.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Done.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              TaskPanels helps you track what you worked on and automatically
              turns it into a clean daily summary with completed work, blockers,
              approvals, and next steps.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={CTA_LINKS.primary}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-base font-medium text-white transition-colors hover:bg-slate-800"
              >
                Try TaskPanels Free
                <ArrowRight className="size-4" />
              </a>
              <a
                href={CTA_LINKS.sampleSummary}
                className="inline-flex h-12 items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-6 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50"
              >
                See a Sample Summary
                <ChevronRight className="size-4" />
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              No credit card required. Set up in minutes.
            </p>
          </motion.div>

          {/* Right: Product Visual — panels → summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="relative">
                <PanelMockup />
              </div>
              <div className="relative">
                {/* Arrow connecting panels to summary */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10">
                  <div className="flex size-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg">
                    <ArrowRight className="size-3.5" />
                  </div>
                </div>
                <SummaryMockup />
              </div>
            </div>
            {/* Floating accent */}
            <div className="absolute -right-4 -bottom-4 -z-10 size-64 rounded-full bg-blue-100/40 blur-3xl" />
            <div className="absolute -left-8 -top-8 -z-10 size-48 rounded-full bg-purple-100/30 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
