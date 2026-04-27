import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MARKETING_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Brian Winckel — Founder of TaskPanels",
  description:
    "Brian Winckel is the founder of TaskPanels — a multi-time founder and operator who built TaskPanels out of his own frustration with status reports that miss the work that matters.",
  alternates: {
    canonical: "/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brian Winckel",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: SITE_NAME,
    url: MARKETING_URL,
  },
  url: `${MARKETING_URL}/about`,
  image: `${MARKETING_URL}/about/brian-winckel.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/brianwinckel/",
    "https://x.com/brianwinckel",
    "https://brianwinckel.com",
  ],
  description:
    "Founder of TaskPanels. Multi-time founder and operator across creative and technical work — Avatier, Fresh Wedding Cinematography, Buddy Brewing Co., Ifrit's Hookah Lounge.",
};

const faqs = [
  {
    q: "Who is Brian Winckel?",
    a: "Brian Winckel is the founder of TaskPanels. He's a multi-time founder and operator based in Northern California. Most recently he led AI video production and social content at Avatier; previously founded Fresh Wedding Cinematography (200+ client projects), Buddy Brewing Co., and Ifrit's Hookah Lounge.",
  },
  {
    q: "What is TaskPanels and why was it built?",
    a: "TaskPanels is a daily work tracker that turns your workday into a clean, manager-ready summary — completed work, blockers, approvals, next steps, and the unrealized effort that doesn't ship but still happened. It was built out of Brian's frustration running cross-functional projects where the most important work was the hardest to communicate.",
  },
  {
    q: "What's TaskPanels' philosophy on employee monitoring?",
    a: "TaskPanels will never include screenshots, keystroke tracking, idle detection, or productivity scoring. Those features are designed to monitor workers, not to help them. TaskPanels is built for the worker, not the watcher — workers control what they document and what they share.",
  },
  {
    q: "How is TaskPanels different from Toggl, Clockify, or Time Doctor?",
    a: "Toggl and Clockify are pure time trackers — clean, worker-friendly, but limited to hours. Time Doctor is a surveillance tool with screenshots and activity monitoring. TaskPanels is the third option: time tracking plus structured context (blockers, approvals, unrealized effort) that produces a daily summary, with no surveillance features. See the side-by-side comparison pages for each.",
  },
  {
    q: "What's on the TaskPanels roadmap?",
    a: "Near-term: an AI composition layer that turns structured TaskPanels data into prose-ready daily updates, and a Chrome extension that captures work in browser-based tools and AI assistants like Claude and ChatGPT. Longer-term: a work intelligence layer that reads from the tools you already use and composes a single daily summary across all of them.",
  },
  {
    q: "How can I contact TaskPanels?",
    a: "Reach Brian directly through brianwinckel.com, LinkedIn, or X. For product support and partnership inquiries, the fastest path is through the contact options inside the app.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Hero — headshot, name, role */}
        <div className="flex flex-col items-center text-center">
          <div className="overflow-hidden rounded-full ring-4 ring-white shadow-xl">
            <Image
              src="/about/brian-winckel.jpg"
              alt="Brian Winckel, founder of TaskPanels"
              width={160}
              height={160}
              priority
              className="h-40 w-40 object-cover"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Brian Winckel
          </h1>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
            <span>Founder</span>
            <span className="text-blue-300">·</span>
            <span>TaskPanels</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
            Builder, operator, and chronic founder based in Northern
            California. TaskPanels is what happens when you spend a decade
            running cross-functional projects and finally get tired of
            explaining the same week of work to four different stakeholders
            in four different formats.
          </p>
        </div>

        {/* Body — career arc */}
        <div className="mt-16 space-y-6 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            What I&rsquo;ve built before this
          </h2>

          <p>
            I&rsquo;ve spent the last decade building brands, products, and
            content systems &mdash; mostly as a founder, sometimes as an
            operator inside someone else&rsquo;s company. Most recently I
            led AI video production and social content at{" "}
            <a
              href="https://www.avatier.com"
              className="font-medium text-slate-900 underline-offset-4 hover:underline"
            >
              Avatier
            </a>
            , where I built a scalable AI-ready video workflow that supports
            the product, AI, and marketing teams.
          </p>

          <p>
            Before Avatier, I founded{" "}
            <strong>Fresh Wedding Cinematography</strong> &mdash; 200+ client
            projects shipped, consistent five-star reviews, and a brand I
            still hear referrals from years later. I founded{" "}
            <strong>Buddy Brewing Co.</strong> as a brand and product
            venture, and earlier{" "}
            <strong>Ifrit&rsquo;s Hookah Lounge</strong>, an experiential
            brand I later exited via sale. Across all of them, the work was
            the same shape: clarify the story, design the structure, ship
            consistently.
          </p>
        </div>

        {/* Pull quote */}
        <figure className="my-16 rounded-2xl bg-slate-50 px-8 py-10 ring-1 ring-slate-200">
          <blockquote className="text-xl font-medium leading-relaxed text-slate-900">
            &ldquo;I&rsquo;m a creator with operator instincts. I build
            brands the same way I build content systems: clarify the story,
            design the structure, and ship consistently.&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-slate-500">
            &mdash; Brian, on{" "}
            <a
              href="https://brianwinckel.com"
              className="text-slate-700 underline-offset-4 hover:underline"
            >
              brianwinckel.com
            </a>
          </figcaption>
        </figure>

        {/* Why TaskPanels */}
        <div className="space-y-6 text-base leading-relaxed text-slate-700">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Why TaskPanels
          </h2>

          <p>
            TaskPanels exists because of a problem I kept hitting in every
            one of those roles. When you&rsquo;re moving between revisions,
            blockers, approvals, scope conversations, and ideas that get
            shelved before they ship &mdash; the most important work is the
            hardest to communicate. Time trackers log hours but miss
            context. Project tools track tasks but not the messy in-between.
            By the time someone asks &ldquo;what did you ship this
            week?&rdquo; the answer is half-remembered.
          </p>

          <p>
            TaskPanels is the daily record I wished I&rsquo;d had through
            every cross-functional project I&rsquo;ve run. It turns a
            workday into a clean, manager-ready summary &mdash; completed
            work, blockers, approvals, next steps, and the unrealized
            effort that doesn&rsquo;t make it to the final deliverable but
            still happened. The point isn&rsquo;t to track everything. The
            point is to prove the work.
          </p>
        </div>

        {/* Connect */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Connect
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li>
              <a
                href="https://www.linkedin.com/in/brianwinckel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:shadow"
              >
                <span>LinkedIn</span>
                <span className="text-slate-400">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/brianwinckel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:shadow"
              >
                <span>X / Twitter</span>
                <span className="text-slate-400">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://brianwinckel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 hover:shadow"
              >
                <span>brianwinckel.com</span>
                <span className="text-slate-400">↗</span>
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ — adds FAQPage schema for citability and reinforces brand entity */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Frequently asked
          </h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="text-base font-semibold text-slate-900">
                  {faq.q}
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-slate-600">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* About TaskPanels callout — Phase 1 internal-linking back to hub + siblings */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-8 py-10">
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            About TaskPanels
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            TaskPanels helps professionals track their day and automatically
            turn it into a clean, manager-ready work summary &mdash;
            completed work, blockers, approvals, and next steps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
            <Link
              href="/"
              className="rounded-lg bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-800"
            >
              See how it works
            </Link>
            <Link
              href="/features"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 transition hover:border-slate-300"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 transition hover:border-slate-300"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
