"use client";

import { SectionWrapper } from "./section-wrapper";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "This is the first time I've ever had a clean summary of my day without writing one from scratch.",
    color: "border-l-blue-400",
  },
  {
    quote:
      "It helped me explain blocked work without sounding like I was making excuses.",
    color: "border-l-emerald-400",
  },
  {
    quote: "I finally had something useful to send in my 1:1.",
    color: "border-l-purple-400",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Why early users love TaskPanels
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl border border-slate-200/80 border-l-4 ${item.color} bg-white p-6 shadow-sm`}
          >
            <Quote className="mb-3 size-5 text-slate-300" />
            <p className="text-sm leading-relaxed text-slate-600 italic">
              &ldquo;{item.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
