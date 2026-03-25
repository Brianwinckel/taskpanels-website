"use client";

import { SectionWrapper } from "./section-wrapper";
import { Copy, Mail, Download, CheckCircle2, Clock, AlertCircle, Archive } from "lucide-react";

export function SummaryPreviewSection() {
  return (
    <SectionWrapper background="muted" id="summary-preview">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          This is the update your boss actually wants
        </h2>
        <p className="mt-4 text-lg text-slate-500">
          No formatting. No status-writing. No end-of-day brain drain.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          {/* Header bar */}
          <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-6 py-3.5">
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="size-1.5 rounded-[2px] bg-blue-500" />
                <div className="size-1.5 rounded-[2px] bg-emerald-500" />
                <div className="size-1.5 rounded-[2px] bg-orange-400" />
                <div className="size-1.5 rounded-[2px] bg-purple-500" />
              </div>
              <span className="text-sm font-semibold text-slate-700">
                Daily Work Summary
              </span>
              <span className="text-sm text-slate-400">— March 24</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
                <Copy className="size-3.5" />
              </button>
              <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
                <Mail className="size-3.5" />
              </button>
              <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
                <Download className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Summary content */}
          <div className="divide-y divide-slate-100 px-6 py-5">
            {/* Time by project */}
            <div className="pb-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Time by Project
              </h4>
              <div className="space-y-2.5">
                {[
                  { name: "Website Refresh", time: "2h 40m", color: "bg-blue-500", width: "w-[70%]" },
                  { name: "Launch Assets", time: "1h 55m", color: "bg-emerald-500", width: "w-[50%]" },
                  { name: "Internal Ops", time: "1h 10m", color: "bg-orange-400", width: "w-[30%]" },
                ].map((project) => (
                  <div key={project.name} className="flex items-center gap-3">
                    <div className="w-32 shrink-0">
                      <span className="text-sm text-slate-700">{project.name}</span>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-slate-100">
                        <div className={`h-2 rounded-full ${project.color} ${project.width}`} />
                      </div>
                    </div>
                    <span className="w-14 text-right text-sm font-medium tabular-nums text-slate-500">
                      {project.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed */}
            <div className="py-5">
              <div className="flex items-center gap-2 mb-2.5">
                <CheckCircle2 className="size-3.5 text-emerald-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Completed
                </h4>
              </div>
              <ul className="space-y-1.5 pl-5">
                <li className="text-sm text-slate-600">Finished homepage wireframe</li>
                <li className="text-sm text-slate-600">Delivered revised video assets</li>
              </ul>
            </div>

            {/* In Progress */}
            <div className="py-5">
              <div className="flex items-center gap-2 mb-2.5">
                <Clock className="size-3.5 text-blue-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  In Progress
                </h4>
              </div>
              <ul className="space-y-1.5 pl-5">
                <li className="text-sm text-slate-600">
                  Continued landing page copy updates
                </li>
              </ul>
            </div>

            {/* Needs Follow-up */}
            <div className="py-5">
              <div className="flex items-center gap-2 mb-2.5">
                <AlertCircle className="size-3.5 text-orange-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                  Needs Follow-up
                </h4>
              </div>
              <ul className="space-y-1.5 pl-5">
                <li className="text-sm text-slate-600">
                  Waiting for design approval on homepage layout
                </li>
                <li className="text-sm text-slate-600">
                  Need review on revised CTA options
                </li>
              </ul>
            </div>

            {/* Shelved / Unrealized */}
            <div className="pt-5">
              <div className="flex items-center gap-2 mb-2.5">
                <Archive className="size-3.5 text-purple-500" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-600">
                  Shelved / Unrealized Effort
                </h4>
              </div>
              <ul className="space-y-1.5 pl-5">
                <li className="text-sm text-slate-600">
                  Explored alternate onboarding flow before priorities shifted
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
