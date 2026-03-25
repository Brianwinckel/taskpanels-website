"use client";

import { SectionWrapper } from "./section-wrapper";
import { MessageSquare, Brain, Mail, Calendar, Globe, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const chaosItems = [
  { icon: MessageSquare, label: "Slack", color: "bg-purple-100 text-purple-600" },
  { icon: Brain, label: "Memory", color: "bg-blue-100 text-blue-600" },
  { icon: Mail, label: "Email", color: "bg-emerald-100 text-emerald-600" },
  { icon: Calendar, label: "Meetings", color: "bg-orange-100 text-orange-600" },
  { icon: Globe, label: "Random tabs", color: "bg-teal-100 text-teal-600" },
  { icon: Zap, label: "Pure chaos", color: "bg-rose-100 text-rose-600" },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper background="muted">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          You did a lot today.
          <br />
          Could you explain it clearly right now?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Most professionals don&apos;t need help doing the work. They need help
          documenting it, communicating it, and proving it without wasting time
          at the end of the day.
        </p>
        <p className="mt-6 text-base leading-relaxed text-slate-500">
          By the time your manager asks for an update, you&apos;re reconstructing
          your day from:
        </p>
      </div>

      <div ref={ref} className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
        {chaosItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3.5 shadow-sm"
          >
            <div className={`flex size-9 items-center justify-center rounded-lg ${item.color}`}>
              <item.icon className="size-4" />
            </div>
            <span className="text-sm font-medium text-slate-700">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-lg font-semibold text-slate-900">
        TaskPanels fixes that.
      </p>
    </SectionWrapper>
  );
}
