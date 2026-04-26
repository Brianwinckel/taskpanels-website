import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SEO, SITE_NAME, MARKETING_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(MARKETING_URL),
  title: {
    default: SEO.title,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: MARKETING_URL,
    images: [{ url: SEO.ogImage, width: 1200, height: 630 }],
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TaskPanels",
  url: MARKETING_URL,
  logo: `${MARKETING_URL}/og/taskpanels-og.png`,
  description: SEO.description,
  foundingDate: "2026",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TaskPanels",
  url: MARKETING_URL,
  description: SEO.description,
  publisher: {
    "@type": "Organization",
    name: "TaskPanels",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TaskPanels",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: MARKETING_URL,
  description:
    "TaskPanels helps professionals track their day and automatically turn it into a clean, manager-ready work summary with completed work, blockers, approvals, and next steps.",
  offers: [
    {
      "@type": "Offer",
      name: "Individual",
      price: "12",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "12",
        priceCurrency: "USD",
        unitText: "MONTH",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      description:
        "Unlimited panels, full summary generation, blockers, unrealized effort tracking, weekly reporting, and export tools",
    },
    {
      "@type": "Offer",
      name: "Team",
      price: "9",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "9",
        priceCurrency: "USD",
        unitText: "MONTH",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "1",
          unitCode: "MON",
        },
      },
      description:
        "Manager dashboard, team visibility, shared rollups, and admin controls",
    },
  ],
  featureList: [
    "Color-coded task panels",
    "Rich context tagging",
    "Automatic summary generation",
    "Time by project breakdowns",
    "Blocker & follow-up tracking",
    "Unrealized effort tracking",
    "Export & email tools",
    "Weekly rollups",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/*
          Google Consent Mode v2 — defaults MUST be registered before gtm.js
          loads, otherwise GA4 tags evaluate against an empty consent state and
          fire pre-consent. This inline script runs ahead of <GoogleTagManager>
          (which renders below) so dataLayer + gtag are wired and all storage
          types default to 'denied' before any tag has a chance to evaluate.
          CookieYes issues gtag('consent','update',...) when the user accepts.
        */}
        <script
          id="consent-mode-defaults"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 500
});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-MMVK7FPJ" />
    </html>
  );
}
