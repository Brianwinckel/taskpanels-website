"use client";

import { SectionWrapper } from "./section-wrapper";

export function UnrealizedEffortSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-8 flex size-14 items-center justify-center rounded-2xl bg-purple-50">
          <div className="grid grid-cols-2 gap-1">
            <div className="size-2.5 rounded-sm bg-purple-300" />
            <div className="size-2.5 rounded-sm bg-purple-200" />
            <div className="size-2.5 rounded-sm bg-purple-400" />
            <div className="size-2.5 rounded-sm bg-purple-100" />
          </div>
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Some of your most important work
          <br />
          never becomes a final deliverable.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Research. Revisions. Iterations. Reviews.
          <br />
          Blocked work. Shelved work. Work that changed direction.
        </p>
        <p className="mt-6 text-lg font-medium text-slate-800">
          That effort still mattered.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
          TaskPanels helps you track the work that usually disappears — so it
          doesn&apos;t disappear from your record too.
        </p>
      </div>
    </SectionWrapper>
  );
}
