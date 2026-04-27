import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export function AiCapturePromiseSection() {
  return (
    <section className="border-t border-slate-200/60 bg-gradient-to-b from-purple-50/40 via-white to-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-600">
            <Sparkles className="size-3" />
            Coming next
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            Half your day is in Claude and ChatGPT.
            <br />
            TaskPanels is the only tracker that knows it.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A Chrome extension is in active development that captures the work
            you do in Claude Desktop, ChatGPT, and other browser-based AI
            tools — so AI-assisted work flows into your daily summary
            automatically. No more manually tagging the hours you spent
            pair-programming with an assistant or drafting through a chat.
          </p>
          <div className="mt-8">
            <Link
              href="/features/work-summaries"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 text-base font-medium text-white transition-colors hover:bg-slate-800"
            >
              See the AI work summaries roadmap
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
