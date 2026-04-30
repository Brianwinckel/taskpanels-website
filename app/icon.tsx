import { ImageResponse } from "next/og";

// 192x192 — a multiple of 48 (Google Search's favicon spec minimum:
// developers.google.com/search/docs/appearance/favicon-in-search). Browsers
// downscale cleanly to 32x32 and 16x16 for tabs; Google indexes it for
// Search and Search Console without falling back to a cached old favicon.
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

// Four-circle TaskPanels brand mark — blue/emerald on top, orange/purple on
// bottom — sitting on a rounded white tile so it stays legible on any tab
// background. Mirrors the canonical SVG in the product app's public/favicon.svg
// (proportions scaled 6x from the 32x32 source: padding 5→30, gap 2→12,
// borderRadius 6→36).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRadius: 36,
          padding: 30,
          gap: 12,
        }}
      >
        <div style={{ display: "flex", flex: 1, gap: 12 }}>
          <div style={{ flex: 1, backgroundColor: "#3b82f6", borderRadius: "50%" }} />
          <div style={{ flex: 1, backgroundColor: "#10b981", borderRadius: "50%" }} />
        </div>
        <div style={{ display: "flex", flex: 1, gap: 12 }}>
          <div style={{ flex: 1, backgroundColor: "#f97316", borderRadius: "50%" }} />
          <div style={{ flex: 1, backgroundColor: "#8b5cf6", borderRadius: "50%" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
