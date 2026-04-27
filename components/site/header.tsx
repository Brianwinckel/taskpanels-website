"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { SITE_NAME, NAV_LINKS, CTA_LINKS } from "@/lib/constants";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const forLinks = [
  { label: "Individual Contributors", href: "/for/individual-contributors" },
  { label: "Consultants", href: "/for/consultants" },
  { label: "Managers", href: "/for/managers" },
  { label: "Remote Teams", href: "/for/remote-teams" },
];

const navItems = [
  { label: "Features", href: NAV_LINKS.features },
  { label: "Pricing", href: NAV_LINKS.pricing },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileForOpen, setMobileForOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
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

        <nav className="hidden items-center gap-1 md:flex">
          {/* Who it's for dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((o) => !o)}
              className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              Who it&apos;s for
              <ChevronDown className={`size-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 top-full mt-1 w-52 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg"
                >
                  {forLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CTA_LINKS.app}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            Log in
          </a>
          <a
            href={CTA_LINKS.primary}
            className="inline-flex h-9 items-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Try TaskPanels
          </a>
        </div>

        <button
          className="md:hidden rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-200/60 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}

              {/* Who it's for group */}
              <button
                onClick={() => setMobileForOpen((o) => !o)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Who it&apos;s for
                <ChevronDown className={`size-3.5 transition-transform ${mobileForOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileForOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.15 }}
                    className="overflow-hidden pl-3"
                  >
                    {forLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setMobileOpen(false); setMobileForOpen(false); }}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <hr className="my-2 border-slate-200" />
              <a
                href={CTA_LINKS.app}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
              >
                Log in
              </a>
              <a
                href={CTA_LINKS.primary}
                className="mt-1 inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Try TaskPanels
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
