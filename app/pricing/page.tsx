import type { Metadata } from "next";
import { PricingSection } from "@/components/site/pricing-section";
import { FaqSection } from "@/components/site/faq-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for TaskPanels. Pick the plan that fits how you work.",
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
