import { ImageResponse } from "next/og";

export const alt = "About Brian Winckel — Founder of TaskPanels";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

/**
 * Per-page Open Graph card for /about. Distinct from the homepage card so
 * that LinkedIn / X / Slack / iMessage previews of /about render with
 * founder context rather than the generic product card.
 *
 * Text-only composition (no headshot embedded) — keeps the route under
 * next/og's 500KB bundle limit and avoids the Satori font/image-loading
 * surface area. The headshot is on the page itself.
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
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent stripe — blue-600, consistent with homepage card */}
        <div
          style={{
            width: "100%",
            height: "12px",
            backgroundColor: "#2563eb",
          }}
        />

        {/* Wordmark + breadcrumb pill */}
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
            About · Founder
          </div>
        </div>

        {/* Main composition: name + role + quote */}
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
              fontSize: 88,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              marginBottom: 16,
            }}
          >
            Brian Winckel
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#2563eb", // blue-600
              marginBottom: 32,
            }}
          >
            Founder, TaskPanels
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 24,
              fontStyle: "italic",
              fontWeight: 400,
              color: "#475569", // slate-600
              lineHeight: 1.4,
              maxWidth: 1000,
              borderLeft: "4px solid #2563eb",
              paddingLeft: 20,
            }}
          >
            <div>
              &ldquo;I&rsquo;m a creator with operator instincts. I build
              brands the same way I build content
            </div>
            <div>systems: clarify the story, design the structure, and ship consistently.&rdquo;</div>
          </div>
        </div>

        {/* Bottom-right domain stamp */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 64,
            fontSize: 18,
            color: "#94a3b8",
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          taskpanels.app/about
        </div>
      </div>
    ),
    { ...size },
  );
}
