export type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  version: number;
  decidedAt: string;
};

export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "taskpanels.consent";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(partial: Partial<ConsentState>): ConsentState {
  const next: ConsentState = {
    necessary: true,
    analytics: partial.analytics ?? false,
    marketing: partial.marketing ?? false,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore quota / private mode errors
    }
    window.dispatchEvent(new CustomEvent("consentchange", { detail: next }));
  }
  return next;
}

export function clearConsent() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
  window.dispatchEvent(new CustomEvent("consentchange", { detail: null }));
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("opencookiesettings"));
}
