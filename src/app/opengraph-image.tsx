import { ImageResponse } from "next/og";
export const alt = "Aeroost — practical technology, thoughtfully engineered.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview drawn from the same geometry as the mark: no screenshots, no
 * stock imagery, Latin text only so it renders identically everywhere.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#070a12",
          backgroundImage:
            "linear-gradient(90deg, rgba(151,176,216,0.07) 1px, transparent 1px), linear-gradient(180deg, rgba(151,176,216,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <svg width="52" height="52" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="7.5" fill="#0b1120" />
            <path d="M8.4 23.2 16 8.6l7.6 14.6" fill="none" stroke="#79acff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.9 19.6h8.2" stroke="#79acff" strokeWidth="2.1" strokeLinecap="round" opacity="0.55" />
            <circle cx="16" cy="5.7" r="1.5" fill="#79acff" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: "#e9eef8", letterSpacing: "-0.01em" }}>Aeroost</div>
            <div style={{ fontSize: 15, color: "#78859e", letterSpacing: "0.16em" }}>
              INDEPENDENT TECHNOLOGY INITIATIVE
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: 62, fontWeight: 700, color: "#e9eef8", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            Practical Technology.
          </div>
          <div style={{ fontSize: 62, fontWeight: 700, color: "#79acff", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            Thoughtfully Engineered.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(151,176,216,0.22)",
            paddingTop: "26px",
            fontSize: 19,
            color: "#a6b2c8",
          }}
        >
          <div style={{ display: "flex", gap: "26px" }}>
            <div>Software Engineering</div>
            <div>Artificial Intelligence</div>
            <div>Game Development</div>
            <div>Digital Tools</div>
          </div>
          <div style={{ color: "#78859e" }}>github.com/Aeroost</div>
        </div>
      </div>
    ),
    { ...size, headers: { "cache-control": "public, max-age=3600" } },
  );
}
