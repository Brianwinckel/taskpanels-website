import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Four-circle TaskPanels brand mark — blue/emerald on top, orange/purple on
// bottom — sitting on a rounded white tile so it stays legible on any tab
// background. Mirrors the canonical SVG in the product app's public/favicon.svg.
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
          borderRadius: 6,
          padding: 5,
          gap: 2,
        }}
      >
        <div style={{ display: "flex", flex: 1, gap: 2 }}>
          <div style={{ flex: 1, backgroundColor: "#3b82f6", borderRadius: "50%" }} />
          <div style={{ flex: 1, backgroundColor: "#10b981", borderRadius: "50%" }} />
        </div>
        <div style={{ display: "flex", flex: 1, gap: 2 }}>
          <div style={{ flex: 1, backgroundColor: "#f97316", borderRadius: "50%" }} />
          <div style={{ flex: 1, backgroundColor: "#8b5cf6", borderRadius: "50%" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
