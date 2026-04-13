import { siteConfig } from "@/lib/seo-config";
import type { HomeContent } from "@/types/home";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;

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
  process: {
    eyebrow: "Archive",
    title: "Process & development",
    intro:
      "Sketches, drape studies, and material tests — a private sequence before the final frame.",
    frames: [
      {
        src: u("photo-1483985988355-763728e1935b", 1200),
        alt: "Full-body silhouette study in urban light.",
        caption: "Drape study",
        layout: "tall",
      },
      {
        src: u("photo-1512436991641-6745cdb1723f", 1200),
        alt: "Dark editorial portrait — tailored line.",
        caption: "Line & volume",
        layout: "square",
      },
      {
        src: u("photo-1487412720507-e7ab37603c6f", 1400),
        alt: "Portrait study in soft architectural light.",
        caption: "Silhouette",
        layout: "wide",
      },
      {
        src: u("photo-1500917293891-ef795e70e1f6", 1200),
        alt: "Pale steel tones and sculptural pose.",
        caption: "Material",
        layout: "square",
      },
      {
        src: u("photo-1529139574466-a303027c1d8b", 1200),
        alt: "Metallic styling and austere frame.",
        caption: "Atelier",
        layout: "tall",
      },
      {
        src: u("photo-1515886657613-9f3515b0c78f", 1200),
        alt: "Cinematic fashion portrait.",
        caption: "Reference",
        layout: "square",
      },
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
      src: u("photo-1496747611176-843222e1e57c", 1800),
      alt: "High-fashion portrait with sculptural styling.",
    },
  },
  collaborations: {
    eyebrow: "Credits",
    title: "Campaign & production",
    blocks: [
      {
        campaign: "Nocturne Index",
        year: "2026",
        entries: [
          { role: "Art direction", name: "3liksir" },
          { role: "Photography", name: "Lena Voss" },
          { role: "Styling", name: "Iris Vale" },
          { role: "Makeup", name: "Studio Nera" },
          { role: "Model", name: "Frame Bureau" },
          { role: "Production", name: "North Unit" },
        ],
      },
      {
        campaign: "Glass Ritual",
        year: "2025",
        entries: [
          { role: "Photography", name: "Mara Etienne" },
          { role: "Stylist", name: "Atelier Notes" },
          { role: "Set design", name: "Cold Geometry" },
          { role: "Casting", name: "Frame Bureau" },
        ],
      },
    ],
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
