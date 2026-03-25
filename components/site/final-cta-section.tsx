"use client";

import { CTA_LINKS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";

export function FinalCtaSection() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Your work deserves a better record than memory.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
          Start tracking your day and generate your first work summary in
          minutes.
        </p>
        <div className="mt-8">
          <a
            href={CTA_LINKS.primary}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 text-base font-medium text-white transition-colors hover:bg-slate-800"
          >
            Try TaskPanels Free
            <ArrowRight className="size-4" />
          </a>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          No credit card required. Set up in minutes.
        </p>
      </div>

      {/* Decorative panel grid */}
      <div className="absolute left-1/2 -bottom-16 -translate-x-1/2 opacity-[0.04]">
        <div className="grid grid-cols-8 gap-3">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className="size-12 rounded-lg bg-slate-900"
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
