"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "gradient";
}

export function SectionWrapper({
  children,
  className,
  id,
  background = "white",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "py-20 md:py-28 lg:py-32",
        background === "muted" && "bg-slate-50/70",
        background === "gradient" &&
          "bg-gradient-to-b from-slate-50/50 to-white",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
