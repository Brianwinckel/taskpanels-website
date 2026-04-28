import { SectionWrapper } from "./section-wrapper";
import { FaqAccordion, type FaqItem } from "./faq-accordion";

const faqs: FaqItem[] = [
  {
    q: "Is this employee surveillance?",
    a: "No. TaskPanels is built for the worker, not the watcher. It does not monitor screens, keystrokes, or take screenshots. You control what you track and share.",
  },
  {
    q: "Do I need to track every minute?",
    a: "No. The goal is useful visibility, not obsessive logging. Track what matters — projects, blockers, approvals — and let TaskPanels generate the summary.",
  },
  {
    q: "Is this just another time tracker?",
    a: "No. Time trackers log hours. TaskPanels helps you show progress, blockers, approvals, and value — not just hours. It turns your workday into a clear, manager-ready update.",
  },
  {
    q: "Can I use this for client work?",
    a: "Yes. TaskPanels is especially useful for showing work in progress, revisions, and unrealized effort to clients. Export summaries or email them directly.",
  },
  {
    q: "What if I already use Asana / Jira / Notion?",
    a: "Great — those tools track projects. TaskPanels tracks your actual day. It complements project management tools by capturing the work that happens between tasks.",
  },
];

export function FaqSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="mt-12">
        <FaqAccordion items={faqs} />
      </div>
    </SectionWrapper>
  );
}
