"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

export type FaqItem = { q: string; a: string };

export function FaqAccordion({
  items,
  className,
}: {
  items: FaqItem[];
  className?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className={className ?? "mx-auto max-w-2xl"}>
        <Accordion className="space-y-3">
          {items.map((item) => (
            <AccordionItem
              key={item.q}
              className="rounded-xl border border-slate-200/80 bg-white px-6 shadow-sm transition-shadow data-open:shadow-md"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="group/faq-trigger flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 rounded-md">
                  <span>{item.q}</span>
                  <Plus
                    aria-hidden="true"
                    className="size-4 shrink-0 text-slate-400 transition-transform duration-200 [&>path:last-child]:origin-center [&>path:last-child]:transition-all [&>path:last-child]:duration-200 group-aria-expanded/faq-trigger:rotate-180 group-aria-expanded/faq-trigger:[&>path:last-child]:rotate-90 group-aria-expanded/faq-trigger:[&>path:last-child]:opacity-0"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-500">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
