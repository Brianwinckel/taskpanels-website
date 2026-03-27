"use client";

import { SectionWrapper } from "./section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this employee surveillance?",
    answer:
      "No. TaskPanels is built for the worker, not the watcher. It does not monitor screens, keystrokes, or take screenshots. You control what you track and share.",
  },
  {
    question: "Do I need to track every minute?",
    answer:
      "No. The goal is useful visibility, not obsessive logging. Track what matters — projects, blockers, approvals — and let TaskPanels generate the summary.",
  },
  {
    question: "Is this just another time tracker?",
    answer:
      "No. Time trackers log hours. TaskPanels helps you show progress, blockers, approvals, and value — not just hours. It turns your workday into a clear, manager-ready update.",
  },
  {
    question: "Can I use this for client work?",
    answer:
      "Yes. TaskPanels is especially useful for showing work in progress, revisions, and unrealized effort to clients. Export summaries or email them directly.",
  },
  {
    question: "What if I already use Asana / Jira / Notion?",
    answer:
      "Great — those tools track projects. TaskPanels tracks your actual day. It complements project management tools by capturing the work that happens between tasks.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <SectionWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              className="rounded-xl border border-slate-200/80 bg-white px-6 shadow-sm data-[open]:shadow-md"
            >
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
