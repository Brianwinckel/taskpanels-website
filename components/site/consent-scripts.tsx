"use client";

import { useEffect } from "react";
import { readConsent, type ConsentState } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function ConsentScripts() {
  useEffect(() => {
    const current = readConsent();
    if (current && typeof window.gtag === "function") {
      window.gtag("consent", "update", consentToGoogle(current));
    }

    function onConsentChange(e: Event) {
      const next = (e as CustomEvent<ConsentState | null>).detail;
      if (typeof window.gtag !== "function") return;
      window.gtag(
        "consent",
        "update",
        next
          ? consentToGoogle(next)
          : {
              analytics_storage: "denied",
              ad_storage: "denied",
              ad_user_data: "denied",
              ad_personalization: "denied",
            }
      );
    }
    window.addEventListener("consentchange", onConsentChange);
    return () => window.removeEventListener("consentchange", onConsentChange);
  }, []);

  return null;
}

function consentToGoogle(c: ConsentState) {
  return {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
  };
}
