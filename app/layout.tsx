import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SEO, SITE_NAME, MARKETING_URL } from "@/lib/constants";

const GTM_ID = "GTM-MMVK7FPJ";

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
    // og:image is auto-injected by Next.js from app/opengraph-image.tsx
    // (file convention). Don't set images here or the explicit value would
    // shadow the auto-generated one.
    title: SEO.title,
    description: SEO.description,
    url: MARKETING_URL,
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
  },
  twitter: {
    // twitter:image is auto-injected from app/twitter-image.tsx.
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
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
          Consent Mode v2 defaults + Google Tag Manager bootstrap, colocated in
          a single synchronous inline <script> so they share an execution
          context. This is the canonical pattern from
          developers.google.com/tag-platform/security/guides/consent and is the
          ONLY ordering that reliably registers explicit defaults — splitting
          the consent default into a separate <script> from the GTM IIFE
          (e.g. via @next/third-parties) leaves a timing gap during which gtm.js
          can initialize its ICS table in implicit-default mode, after which
          gtag('consent','default',...) updates are treated as updates rather
          than defaults. CookieYes issues gtag('consent','update',...) on
          accept.
        */}
        <script
          id="gtm-and-consent-defaults"
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
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
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
        {/* GTM noscript iframe — lets Google Tag Manager fire pageview-style
            tags for users with JavaScript disabled. Standard pattern from
            tagmanager.google.com install snippet. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
