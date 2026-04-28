import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — same four-circle brand mark, scaled to 180x180. iOS masks
// the corners on home-screen install, so the rounded tile is for non-iOS PWA
// installs (Android, desktop). Proportions match the master app-icon.svg
// (rx 96 on 512 → ~34 on 180).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ffffff",
          borderRadius: 34,
          padding: 28,
          gap: 11,
        }}
      >
        <div style={{ display: "flex", flex: 1, gap: 11 }}>
          <div style={{ flex: 1, backgroundColor: "#3b82f6", borderRadius: "50%" }} />
          <div style={{ flex: 1, backgroundColor: "#10b981", borderRadius: "50%" }} />
        </div>
        <div style={{ display: "flex", flex: 1, gap: 11 }}>
          <div style={{ flex: 1, backgroundColor: "#f97316", borderRadius: "50%" }} />
          <div style={{ flex: 1, backgroundColor: "#8b5cf6", borderRadius: "50%" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
