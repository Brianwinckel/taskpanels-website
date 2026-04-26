import { ImageResponse } from "next/og";

// Image metadata — Next.js auto-injects these into <head> as og:image:type,
// og:image:width, og:image:height, og:image:alt.
export const alt =
  "TaskPanels — Track your day. Prove your impact.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Default Open Graph card for the homepage.
 *
 * File convention: any spoke directory (e.g. app/for-engineers/) can drop its
 * own opengraph-image.tsx to override this with a page-specific card. Next.js
 * auto-discovers and statically renders each at build time.
 *
 * Design notes:
 * - Off-white surface with subtle slate-50 wash, matching the marketing site.
 * - Top accent strip in blue-600 — the marketing site's primary accent.
 * - Brand wordmark top-left; H1 + tagline center; four colored panels along
 *   the bottom (blue / emerald / orange / purple) evoking the task-panel
 *   metaphor that's the product's namesake.
 * - Default ImageResponse sans-serif font for v1; Inter can be bundled in
 *   public/fonts/ and loaded via readFile() in a follow-up if/when brand
 *   consistency requires it.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8fafc", // slate-50
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent strip — blue-600 */}
        <div
          style={{
            width: "100%",
            height: "12px",
            backgroundColor: "#2563eb",
          }}
        />

        {/* Wordmark row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "48px 64px 0 64px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#0f172a", // slate-900
              letterSpacing: "-0.02em",
            }}
          >
            TaskPanels
          </div>
          <div
            style={{
              marginLeft: 16,
              padding: "4px 12px",
              borderRadius: 999,
              backgroundColor: "#dbeafe", // blue-100
              color: "#1d4ed8", // blue-700
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            Daily work tracker
          </div>
        </div>

        {/* Main composition: H1 + tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            padding: "0 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 80,
              fontWeight: 800,
              color: "#0f172a", // slate-900
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            <div>Track your day.</div>
            <div>Prove your impact.</div>
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: "#475569", // slate-600
              lineHeight: 1.3,
              maxWidth: 900,
            }}
          >
            Turn your workday into a clean, manager-ready summary —
            completed work, blockers, approvals, next steps.
          </div>
        </div>

        {/* Bottom: four task panels evoking the product metaphor */}
        <div
          style={{
            display: "flex",
            gap: 16,
            padding: "0 64px 64px 64px",
          }}
        >
          {[
            { bg: "#dbeafe", border: "#3b82f6", label: "Shipped" },      // blue
            { bg: "#d1fae5", border: "#10b981", label: "In review" },    // emerald
            { bg: "#ffedd5", border: "#f97316", label: "Blocked" },      // orange
            { bg: "#ede9fe", border: "#8b5cf6", label: "Shelved" },      // purple
          ].map((p) => (
            <div
              key={p.label}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                backgroundColor: p.bg,
                borderLeft: `4px solid ${p.border}`,
                borderRadius: 8,
                padding: "16px 20px",
                fontSize: 18,
                fontWeight: 600,
                color: "#0f172a",
              }}
            >
              {p.label}
            </div>
          ))}
        </div>

        {/* Bottom-right domain stamp */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 64,
            fontSize: 18,
            color: "#94a3b8", // slate-400
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          taskpanels.app
        </div>
      </div>
    ),
    { ...size },
  );
}
