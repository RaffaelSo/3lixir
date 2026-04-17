import { siteConfig } from "@/lib/seo-config";
import { toOptimizedProjectPublicPath } from "@/lib/optimized-project-image";
import type { HomeContent } from "@/types/home";

/** Same lookbook frame as the homepage hero — local asset, no remote stock. */
const worldImageSrc = toOptimizedProjectPublicPath(
  "/images/projects/lookbook/COVERShin Jeong Hoon, @sh1nfoto (16).JPEG",
);

export const homeContent: HomeContent = {
  manifesto: {
    eyebrow: "Brand",
    statement:
      "Couture as sculpture — garments as bodies of light, shadow, and tension.",
    paragraphs: [
      "3liksir is a Berlin studio for couture fashion and experimental design. Work moves between precision tailoring, cyber-informed silhouette, and materials that refuse the ordinary.",
      "The language is sculptural, severe when needed, and always image-first: fewer words, more atmosphere.",
    ],
  },
  world: {
    eyebrow: "World",
    headline: "Cyber stillness. Sculptural heat.",
    lines: [
      "A universe built from chrome dusk, ritual posture, and clothes that behave like architecture.",
      "Not nostalgia — a forward grammar for bodies, cameras, and the spaces between them.",
    ],
    image: {
      src: worldImageSrc,
      alt: "Lookbook — sculptural silhouette.",
    },
  },
  contact: {
    eyebrow: "Inquiries",
    headline: "Custom work & collaborations",
    services: [
      "Couture and experimental pieces",
      "Styling for editorials and campaigns",
      "Creative direction & image",
      "Brand-aligned collaborations",
    ],
    email: "3liksirdesigns@gmail.com",
    instagramLabel: "@3liksir",
    instagramHref: siteConfig.instagramUrl,
  },
};
