"use client";

import { CTA_LINKS } from "@/lib/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════
   Panel 1 — Daily Summary (Left)
   A polished PDF-style work summary with
   project breakdown chart and status list
   ═══════════════════════════════════════════ */
function DailySummaryPanel() {
  return (
    <div className="panel-body">
      {/* Date header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
          March 28, 2026
        </span>
        <span className="text-[9px] font-medium bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-200">
          Sent
        </span>
      </div>

      {/* Mini bar chart — project time breakdown */}
      <div className="mb-4 rounded-xl bg-slate-50 border border-slate-100 p-3">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
          Time by Project
        </p>
        <div className="flex items-end gap-1.5" style={{ height: 56 }}>
          {[
            { h: 45, color: "bg-blue-500", label: "Web" },
            { h: 31, color: "bg-emerald-500", label: "Launch" },
            { h: 20, color: "bg-orange-400", label: "Ops" },
            { h: 12, color: "bg-purple-500", label: "Review" },
            { h: 7, color: "bg-teal-400", label: "Admin" },
          ].map((bar) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center justify-end h-full">
              <div
                className={`w-full ${bar.color} rounded-t-sm opacity-80`}
                style={{ height: bar.h }}
              />
              <span className="text-[7px] font-medium text-slate-400 mt-1">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Completed work */}
      <div className="mb-3">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
          Completed
        </p>
        <div className="space-y-1">
          {[
            "Finished homepage wireframe v3",
            "Delivered revised video assets",
            "Shipped API auth refactor",
          ].map((item) => (
            <div key={item} className="flex items-start gap-1.5">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-600 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Blockers */}
      <div className="mb-3">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
          Blockers
        </p>
        <div className="space-y-1">
          {[
            "Waiting on design sign-off from Sara",
            "Need API keys for staging env",
          ].map((item) => (
            <div key={item} className="flex items-start gap-1.5">
              <span className="mt-1 block size-1.5 shrink-0 rounded-full bg-orange-400" />
              <span className="text-[10px] text-slate-600 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="mt-3 rounded-lg bg-blue-50 border border-blue-100 p-2.5 flex items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          Total Focus Time
        </span>
        <span className="text-sm font-bold text-blue-600">6h 55m</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Panel 2 — Today's Panels (Center)
   The actual app interface — colorful task
   panels with timers and status
   ═══════════════════════════════════════════ */
function TodaysPanelsPanel() {
  const panels = [
    { label: "Website Refresh", color: "bg-blue-500", border: "border-blue-200", bg: "bg-blue-50", time: "2:40:12", tasks: 3, active: true },
    { label: "Launch Assets", color: "bg-emerald-500", border: "border-emerald-200", bg: "bg-emerald-50", time: "1:55:00", tasks: 2, active: false },
    { label: "Internal Ops", color: "bg-orange-400", border: "border-orange-200", bg: "bg-orange-50", time: "1:10:30", tasks: 2, active: false },
    { label: "Client Review", color: "bg-purple-500", border: "border-purple-200", bg: "bg-purple-50", time: "0:45:18", tasks: 1, active: false },
  ];

  return (
    <div className="panel-body">
      {/* Tab bar */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-[10px] font-semibold bg-slate-900 text-white px-2.5 py-1 rounded-md">Today</span>
        <span className="text-[10px] font-medium text-slate-400 px-2 py-1">This Week</span>
        <span className="text-[10px] font-medium text-slate-400 px-2 py-1">Archive</span>
      </div>

      {/* Panels */}
      <div className="space-y-2">
        {panels.map((panel) => (
          <div
            key={panel.label}
            className={`rounded-xl border ${panel.border} ${panel.bg} p-2.5 transition-all ${
              panel.active ? "ring-1 ring-blue-300 shadow-sm" : ""
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`h-8 w-1.5 rounded-full ${panel.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-semibold text-slate-800 truncate">{panel.label}</p>
                <p className="text-[9px] text-slate-400">{panel.tasks} tasks</p>
              </div>
              <div className="text-right">
                <span className={`text-xs font-mono font-semibold tabular-nums ${
                  panel.active ? "text-blue-600" : "text-slate-500"
                }`}>
                  {panel.time}
                </span>
                {panel.active && (
                  <div className="flex items-center gap-1 mt-0.5 justify-end">
                    <span className="block size-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[8px] font-medium text-blue-500">Active</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mt-3 flex items-center gap-2">
        <button className="flex-1 flex items-center justify-center gap-1 rounded-lg bg-slate-900 text-white text-[10px] font-semibold py-2 px-3">
          <svg className="size-3" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="6" /></svg>
          Start Panel
        </button>
        <button className="flex-1 flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white text-slate-600 text-[10px] font-semibold py-2 px-3">
          Generate Summary
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Panel 3 — Performance Review Proof (Right)
   A PDF-style performance proof doc with
   donut chart, weekly trends, and metrics
   ═══════════════════════════════════════════ */
function PerformanceReviewPanel() {
  return (
    <div className="panel-body">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
          Q1 2026 Performance
        </span>
        <span className="text-[9px] font-medium bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full border border-purple-200">
          PDF Export
        </span>
      </div>

      {/* Donut chart + stats row */}
      <div className="flex items-center gap-3 mb-4 rounded-xl bg-slate-50 border border-slate-100 p-3">
        {/* SVG donut */}
        <svg width="58" height="58" viewBox="0 0 58 58" className="shrink-0">
          <circle cx="29" cy="29" r="22" fill="none" stroke="#e2e8f0" strokeWidth="5" />
          <circle cx="29" cy="29" r="22" fill="none" stroke="#3b82f6" strokeWidth="5"
            strokeDasharray="96 42" strokeDashoffset="0" strokeLinecap="round"
            transform="rotate(-90 29 29)" />
          <circle cx="29" cy="29" r="22" fill="none" stroke="#10b981" strokeWidth="5"
            strokeDasharray="28 110" strokeDashoffset="-96" strokeLinecap="round"
            transform="rotate(-90 29 29)" />
          <circle cx="29" cy="29" r="22" fill="none" stroke="#f59e0b" strokeWidth="5"
            strokeDasharray="14 124" strokeDashoffset="-124" strokeLinecap="round"
            transform="rotate(-90 29 29)" />
          <text x="29" y="31" textAnchor="middle" className="text-[10px] font-bold fill-slate-700">87%</text>
        </svg>
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="block size-1.5 rounded-full bg-blue-500" />
            <span className="text-[9px] text-slate-500">Projects — 69%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="block size-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] text-slate-500">Completed — 20%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="block size-1.5 rounded-full bg-amber-500" />
            <span className="text-[9px] text-slate-500">Blocked — 11%</span>
          </div>
        </div>
      </div>

      {/* Weekly trend sparkline */}
      <div className="mb-3">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Weekly Output Trend
        </p>
        <svg viewBox="0 0 200 40" className="w-full h-10">
          <defs>
            <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,32 L20,28 L40,22 L60,26 L80,18 L100,14 L120,16 L140,10 L160,12 L180,6 L200,8"
            fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          <path d="M0,32 L20,28 L40,22 L60,26 L80,18 L100,14 L120,16 L140,10 L160,12 L180,6 L200,8 L200,40 L0,40 Z"
            fill="url(#trendGrad)" />
        </svg>
        <div className="flex justify-between text-[7px] text-slate-400 mt-0.5">
          <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
          <span>W6</span><span>W7</span><span>W8</span><span>W9</span><span>W10</span>
          <span>W11</span>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Tasks Done", value: "142", color: "text-emerald-600" },
          { label: "Avg / Day", value: "6.5h", color: "text-blue-600" },
          { label: "Summaries", value: "58", color: "text-purple-600" },
        ].map((m) => (
          <div key={m.label} className="rounded-lg bg-slate-50 border border-slate-100 p-2 text-center">
            <p className={`text-sm font-bold ${m.color}`}>{m.value}</p>
            <p className="text-[7px] font-medium text-slate-400 uppercase tracking-wider mt-0.5">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Hero V2 Component
   ═══════════════════════════════════════════ */
export function HeroV2() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState<number | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setFocused(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const panelConfigs = [
    { label: "Daily Summary", badge: "Ready", badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { label: "Today's Panels", badge: "Live", badgeColor: "bg-blue-50 text-blue-600 border-blue-200" },
    { label: "Performance Review Proof", badge: "Export", badgeColor: "bg-purple-50 text-purple-600 border-purple-200" },
  ];

  const stageLabels = [
    "Track your work",
    "See it all in real time",
    "Prove your impact",
  ];

  return (
    <section className="hero-v2">
      {/* Background orbs — subtle colored glows */}
      <div className="hero-v2-orb-left" />
      <div className="hero-v2-orb-right" />

      {/* Headline */}
      <p className="hero-v2-eyebrow">Work Tracking → Work Proof</p>

      <h1 className="hero-v2-headline">
        Track your day.{" "}
        <span className="hero-v2-accent">Prove your impact.</span>
      </h1>

      <p className="hero-v2-sub">
        TaskPanels helps you track what you worked on and automatically turns it
        into a clean daily summary with completed work, blockers, approvals, and
        next steps.
      </p>

      {/* CTAs */}
      <div className="hero-v2-ctas">
        <a href={CTA_LINKS.primary} className="hero-v2-btn-primary">
          Try TaskPanels
          <ArrowRight className="size-4" />
        </a>
        <a href={CTA_LINKS.sampleSummary} className="hero-v2-btn-ghost">
          See a Sample Summary
          <ChevronRight className="size-4" />
        </a>
      </div>

      {/* ─── 3D Stage ─── */}
      <div
        ref={stageRef}
        className={`hero-v2-stage ${focused !== null ? "has-focus" : ""}`}
      >
        <div className="hero-v2-stage-glow" />

        {/* Stage labels */}
        <div className="hero-v2-stage-labels">
          {stageLabels.map((label, i) => (
            <span
              key={label}
              className={`hero-v2-stage-label ${focused === i || focused === null ? "active" : ""}`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Panels */}
        {panelConfigs.map((config, i) => {
          const posClass = i === 0 ? "panel-left" : i === 1 ? "panel-center" : "panel-right";
          const isFocused = focused === i;

          return (
            <div
              key={config.label}
              className={`hero-v2-panel ${posClass} ${isFocused ? "focused" : ""}`}
              onClick={() => {
                if (!isFocused) setFocused(i);
              }}
            >
              {/* Close button */}
              {isFocused && (
                <button
                  className="hero-v2-panel-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFocused(null);
                  }}
                >
                  ✕
                </button>
              )}

              {/* Panel header */}
              <div className="hero-v2-panel-header">
                <div className="flex gap-1">
                  <div className="size-2 rounded-full bg-slate-200" />
                  <div className="size-2 rounded-full bg-slate-200" />
                  <div className="size-2 rounded-full bg-slate-200" />
                </div>
                <span className="text-[12px] font-semibold text-slate-800">{config.label}</span>
                <span className={`text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border ${config.badgeColor}`}>
                  {config.badge}
                </span>
              </div>

              {/* Panel content */}
              {i === 0 && <DailySummaryPanel />}
              {i === 1 && <TodaysPanelsPanel />}
              {i === 2 && <PerformanceReviewPanel />}
            </div>
          );
        })}
      </div>

      {/* Trust strip */}
      <div className="hero-v2-trust">
        <span><span className="hero-v2-trust-dot" />Set up in minutes</span>
        <div className="hero-v2-trust-divider" />
        <span><span className="hero-v2-trust-dot" />Cancel anytime</span>
      </div>
    </section>
  );
}
