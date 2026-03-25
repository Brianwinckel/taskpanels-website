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
      "No. TaskPanels is built for the worker, not the watcher.",
  },
  {
    question: "Do I need to track every minute?",
    answer:
      "No. The goal is useful visibility, not obsessive logging.",
  },
  {
    question: "Is this just another time tracker?",
    answer:
      "No. TaskPanels helps you show progress, blockers, approvals, and value — not just hours.",
  },
  {
    question: "Can I use this for client work?",
    answer:
      "Yes. It's especially useful for showing work in progress, revisions, and unrealized effort.",
  },
  {
    question: "What if I already use Asana / Jira / Notion?",
    answer:
      "Great. Those tools track projects. TaskPanels tracks your actual day.",
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
