import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo-config";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: "linear-gradient(165deg, #0a0c12 0%, #030407 52%, #06080f 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 70% 20%, rgba(158,182,217,0.12), transparent 55%)",
          }}
        />
        <p
          style={{
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(244,240,234,0.45)",
            margin: 0,
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          }}
        >
          Berlin · Couture
        </p>
        <p
          style={{
            fontSize: 96,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "#f4f0ea",
            margin: "24px 0 0 0",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontWeight: 400,
          }}
        >
          {siteConfig.brandShort}
        </p>
      </div>
    ),
    { ...size },
  );
}
