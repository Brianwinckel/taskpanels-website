"use client";

import { SectionWrapper } from "./section-wrapper";
import { CTA_LINKS } from "@/lib/constants";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "For trying the workflow",
    features: [
      "Basic daily tracking",
      "Limited history",
      "Sample summaries",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    description: "For professionals who want full work visibility",
    features: [
      "Unlimited panels",
      "Full summary generation",
      "Blockers + pass-offs",
      "Unrealized effort tracking",
      "Weekly reporting",
      "Export & email tools",
    ],
    cta: "Start Pro Free",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$9",
    period: "/user/mo",
    description: "For teams that want better updates without more meetings",
    features: [
      "Manager dashboard",
      "Team visibility",
      "Shared rollups",
      "Admin controls",
    ],
    cta: "Start Team Trial",
    highlighted: false,
  },
];

export function PricingSection() {
  return (
    <SectionWrapper background="muted" id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Simple pricing for clearer workdays
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative rounded-2xl border bg-white p-7 shadow-sm transition-shadow hover:shadow-md ${
              tier.highlighted
                ? "border-slate-900 ring-1 ring-slate-900 shadow-md"
                : "border-slate-200/80"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </span>
              </div>
            )}

            <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                {tier.price}
              </span>
              {tier.period && (
                <span className="text-sm text-slate-500">{tier.period}</span>
              )}
            </div>
            <p className="mt-2 text-sm text-slate-500">{tier.description}</p>

            <ul className="mt-6 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={CTA_LINKS.primary}
              className={`mt-8 flex h-11 w-full items-center justify-center rounded-xl text-sm font-medium transition-colors ${
                tier.highlighted
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
