import { ImageResponse } from "next/og";

export const alt = "Accident Claims Scotland — Scottish claims guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function GuidesOpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0f2044",
          color: "white",
          padding: "72px 80px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#fde047" }}>ACCIDENT CLAIMS SCOTLAND</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 60, fontWeight: 700, lineHeight: 1.1 }}>
            Claims Guide Library
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#d1d5db" }}>
            Expert guides on Scottish personal injury law and compensation
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", width: 170, height: 8, background: "#b91c1c" }} />
          <div style={{ display: "flex", fontSize: 22, color: "#9ca3af" }}>accident-claims-scotland.com/guides</div>
        </div>
      </div>
    ),
    size,
  );
}
