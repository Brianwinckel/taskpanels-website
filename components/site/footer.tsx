"use client";

import Link from "next/link";
import { SITE_NAME, NAV_LINKS, CTA_LINKS } from "@/lib/constants";
import { openCookieSettings } from "@/lib/consent";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-slate-50/50">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="size-2.5 rounded-sm bg-blue-500" />
                <div className="size-2.5 rounded-sm bg-emerald-500" />
                <div className="size-2.5 rounded-sm bg-orange-400" />
                <div className="size-2.5 rounded-sm bg-purple-500" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Turn your work into proof. Track your day and generate clean,
              manager-ready summaries automatically.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Product</h4>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link
                  href={NAV_LINKS.features}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href={NAV_LINKS.pricing}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href={NAV_LINKS.about}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href={CTA_LINKS.primary}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Compare</h4>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link
                  href="/vs/toggl"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  vs. Toggl
                </Link>
              </li>
              <li>
                <Link
                  href="/vs/clockify"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  vs. Clockify
                </Link>
              </li>
              <li>
                <Link
                  href="/vs/time-doctor"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  vs. Time Doctor
                </Link>
              </li>
            </ul>
            <h4 className="mt-6 text-sm font-semibold text-slate-900">Legal</h4>
            <ul className="mt-3 space-y-2.5">
              <li>
                <Link
                  href={NAV_LINKS.privacy}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={NAV_LINKS.terms}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Get Started</h4>
            <p className="mt-3 text-sm text-slate-500">
              Start tracking your day and generate your first summary in minutes.
            </p>
            <a
              href={CTA_LINKS.primary}
              className="mt-3 inline-flex h-9 items-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800"
            >
              Try TaskPanels
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} TaskPanels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href={NAV_LINKS.privacy}
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
            >
              Privacy
            </Link>
            <Link
              href={NAV_LINKS.terms}
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
            >
              Terms
            </Link>
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-sm text-slate-400 transition-colors hover:text-slate-600"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
