"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { readConsent, writeConsent } from "@/lib/consent";
import { NAV_LINKS } from "@/lib/constants";

type Visibility = "hidden" | "banner" | "customize";

export function CookieBanner() {
  const [view, setView] = useState<Visibility>("hidden");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setView("banner");
    } else {
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
    }

    function onOpenSettings() {
      const c = readConsent();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setView("customize");
    }
    window.addEventListener("opencookiesettings", onOpenSettings);
    return () => window.removeEventListener("opencookiesettings", onOpenSettings);
  }, []);

  if (view === "hidden") return null;

  const acceptAll = () => {
    writeConsent({ analytics: true, marketing: true });
    setView("hidden");
  };
  const rejectAll = () => {
    writeConsent({ analytics: false, marketing: false });
    setView("hidden");
  };
  const saveCustom = () => {
    writeConsent({ analytics, marketing });
    setView("hidden");
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6"
    >
      <div className="pointer-events-auto mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-7">
        {view === "banner" ? (
          <>
            <h2
              id="cookie-banner-title"
              className="text-base font-semibold text-slate-900"
            >
              Cookies — your call.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              We use a small number of cookies for analytics and to keep
              things working. None of it leaves TaskPanels&apos; hands and you
              can change your mind any time. See our{" "}
              <Link
                href={NAV_LINKS.privacy}
                className="text-slate-900 underline underline-offset-2 hover:text-slate-700"
              >
                privacy policy
              </Link>{" "}
              for details.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:flex-nowrap sm:gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:flex-none"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex-none"
              >
                Reject all
              </button>
              <button
                type="button"
                onClick={() => setView("customize")}
                className="inline-flex flex-1 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 transition hover:text-slate-900 sm:flex-none"
              >
                Customize
              </button>
            </div>
          </>
        ) : (
          <>
            <h2
              id="cookie-banner-title"
              className="text-base font-semibold text-slate-900"
            >
              Cookie settings
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Choose what&apos;s switched on. You can revisit this any time from
              the footer.
            </p>
            <div className="mt-5 space-y-3">
              <Category
                title="Necessary"
                body="Required for the site to work — including remembering this preference. Always on."
                disabled
                checked
              />
              <Category
                title="Analytics"
                body="Anonymous usage data (Google Analytics) so we can see what's working. No identifying detail."
                checked={analytics}
                onChange={setAnalytics}
              />
              <Category
                title="Marketing"
                body="None active today. Reserved for future ad-platform pixels if we ever add them."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-2 sm:flex-nowrap sm:gap-3">
              <button
                type="button"
                onClick={saveCustom}
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 sm:flex-none"
              >
                Save preferences
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:flex-none"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="inline-flex flex-1 items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 transition hover:text-slate-900 sm:flex-none"
              >
                Reject all
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Category({
  title,
  body,
  checked,
  onChange,
  disabled = false,
}: {
  title: string;
  body: string;
  checked: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <label
      className={`flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50/50 p-4 ${
        disabled ? "opacity-60" : "cursor-pointer hover:border-slate-300 hover:bg-slate-50"
      }`}
    >
      <span className="relative mt-0.5 inline-flex h-5 w-9 flex-shrink-0">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => !disabled && onChange?.(e.target.checked)}
          className="peer absolute inset-0 cursor-pointer opacity-0 disabled:cursor-not-allowed"
          aria-label={title}
        />
        <span
          aria-hidden
          className={`absolute inset-0 rounded-full transition ${
            checked ? "bg-slate-900" : "bg-slate-200"
          }`}
        />
        <span
          aria-hidden
          className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white shadow transition ${
            checked ? "translate-x-4" : ""
          }`}
        />
      </span>
      <span className="leading-snug">
        <span className="block text-sm font-semibold text-slate-900">{title}</span>
        <span className="mt-0.5 block text-xs text-slate-500">{body}</span>
      </span>
    </label>
  );
}
