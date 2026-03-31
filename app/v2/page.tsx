import type { Metadata } from "next";
import "./hero-v2.css";
import { ProblemSection } from "@/components/site/problem-section";
import { ComparisonSection } from "@/components/site/comparison-section";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { SummaryPreviewSection } from "@/components/site/summary-preview-section";
import { UnrealizedEffortSection } from "@/components/site/unrealized-effort-section";
import { AudienceSection } from "@/components/site/audience-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { PricingSection } from "@/components/site/pricing-section";
import { FaqSection } from "@/components/site/faq-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";
import { HeroV2 } from "@/components/site/hero-v2";

export const metadata: Metadata = {
  title: "TaskPanels V2",
  description:
    "TaskPanels helps professionals track their day and automatically turn it into a clean, manager-ready work summary.",
  robots: { index: false, follow: false },
};

export default function V2Page() {
  return (
    <>
      <HeroV2 />
      <ProblemSection />
      <ComparisonSection />
      <HowItWorksSection />
      <OutcomesSection />
      <SummaryPreviewSection />
      <UnrealizedEffortSection />
      <AudienceSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
