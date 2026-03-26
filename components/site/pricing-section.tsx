"use client";

import { useState } from "react";
import { SectionWrapper } from "./section-wrapper";
import { CTA_LINKS } from "@/lib/constants";
import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tiers = [
  {
    name: "Free",
    monthlyPrice: 0,
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
    monthlyPrice: 12,
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
    monthlyPrice: 9,
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

function getPrice(monthlyPrice: number, yearly: boolean) {
  if (monthlyPrice === 0) return "$0";
  if (yearly) {
    const discounted = Math.round(monthlyPrice * 0.8);
    return `$${discounted}`;
  }
  return `$${monthlyPrice}`;
}

function getPeriod(period: string, yearly: boolean) {
  if (!period) return "";
  if (yearly) {
    return period.replace("/mo", "/mo, billed yearly");
  }
  return period;
}

export function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <SectionWrapper background="muted" id="pricing">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          Simple pricing for clearer workdays
        </h2>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-1.5 py-1.5 shadow-sm">
          <button
            onClick={() => setYearly(false)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              !yearly
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setYearly(true)}
            className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
              yearly
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Yearly
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              Save 20%
            </span>
          </button>
        </div>
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
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${tier.name}-${yearly}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="text-4xl font-bold tracking-tight text-slate-900"
                >
                  {getPrice(tier.monthlyPrice, yearly)}
                </motion.span>
              </AnimatePresence>
              {tier.period && (
                <span className="text-sm text-slate-500">
                  {getPeriod(tier.period, yearly)}
                </span>
              )}
            </div>
            {yearly && tier.monthlyPrice > 0 && (
              <p className="mt-1 text-xs text-slate-400 line-through">
                ${tier.monthlyPrice}/mo
              </p>
            )}
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
