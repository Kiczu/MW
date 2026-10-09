import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const runtime = "nodejs";
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpenGraphImage = async () => {
  const logo = await readFile(
    join(process.cwd(), "public/assets/logo/knk-logo-bord.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 48,
        background: "#F5F2EB",
        color: "#2F2F2F",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logoSrc} width={320} height={320} alt="" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, fontWeight: 700, color: "#792B2D" }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 40, color: "#5A4633", marginTop: 12 }}>
          Ręcznie robiona ceramika
        </div>
      </div>
    </div>,
    size,
  );
};

export default OpenGraphImage;
