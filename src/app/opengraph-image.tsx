import { ImageResponse } from "next/og";

export const alt = "Accident Claims Scotland — clear Scottish claims information";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
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
        <div style={{ display: "flex", fontSize: 30, color: "#fde047" }}>ACCIDENT CLAIMS SCOTLAND</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
            Clear Scottish claims information
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#d1d5db" }}>
            Evidence, time limits, compensation and legal process
          </div>
        </div>
        <div style={{ display: "flex", width: 170, height: 8, background: "#b91c1c" }} />
      </div>
    ),
    size,
  );
}
