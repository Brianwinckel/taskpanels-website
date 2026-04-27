import { HeroV2 } from "@/components/site/hero-v2";
import { ProblemSection } from "@/components/site/problem-section";
import { ComparisonSection } from "@/components/site/comparison-section";
import { HowItWorksSection } from "@/components/site/how-it-works-section";
import { OutcomesSection } from "@/components/site/outcomes-section";
import { SummaryPreviewSection } from "@/components/site/summary-preview-section";
import { AiCapturePromiseSection } from "@/components/site/ai-capture-promise-section";
import { UnrealizedEffortSection } from "@/components/site/unrealized-effort-section";
import { AudienceSection } from "@/components/site/audience-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { PricingSection } from "@/components/site/pricing-section";
import { FaqSection } from "@/components/site/faq-section";
import { FinalCtaSection } from "@/components/site/final-cta-section";

export default function HomePage() {
  return (
    <>
      <HeroV2 />
      <ProblemSection />
      <ComparisonSection />
      <HowItWorksSection />
      <OutcomesSection />
      <SummaryPreviewSection />
      <AiCapturePromiseSection />
      <UnrealizedEffortSection />
      <AudienceSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
