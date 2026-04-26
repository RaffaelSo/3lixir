/**
 * Central SEO / brand copy for metadata and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production if the canonical domain changes.
 */

const trimTrailingSlash = (url: string) => url.replace(/\/$/, "");
const DEFAULT_SITE_URL = "https://3liksir.site";

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return trimTrailingSlash(fromEnv);
  return DEFAULT_SITE_URL;
}

/**
 * Public-facing domain for legal text and any copy shown on the page.
 * Keep this aligned with metadata/canonical URLs.
 */
export function getPublicSiteUrl(): string {
  return getSiteUrl();
}

export const siteConfig = {
  brandShort: "3liksir",
  /** Default `<title>` for the homepage (child routes use template). */
  title: "3liksir – Couture Fashion Designer Berlin",
  description:
    "3liksir is a Berlin-based couture fashion designer and model brand: experimental design, sculptural silhouettes, and editorial image. Discover work and contact for collaborations.",
  keywords: [
    "3liksir",
    "Neksira",
    "couture fashion designer",
    "Berlin fashion designer",
    "experimental fashion",
    "couture Berlin",
    "fashion editorial",
    "3liksir Instagram",
  ],
  /** Open Graph title can match or tighten for sharing. */
  ogTitle: "3liksir – Couture Fashion Designer Berlin",
  ogDescription:
    "Berlin couture & experimental fashion - sculptural silhouettes, editorial worlds, and collaborations. Official site.",
  /** Path served by `src/app/opengraph-image.tsx` (absolute URL resolved via `metadataBase`). */
  ogImagePath: "/opengraph-image" as const,
  ogImageAlt:
    "3liksir - couture fashion designer based in Berlin, editorial portrait.",
  instagramUrl: "https://www.instagram.com/3liksir/",
  /** Secondary social; list in UI only once (homepage social section). */
  tiktokUrl: "https://www.tiktok.com/@3liksir",
  /** JSON-LD */
  person: {
    name: "3liksir",
    alternateName: "Neksira",
    jobTitle: "Couture Fashion Designer",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
} as const;

export function getCanonicalPath(pathname: string): string {
  const base = getSiteUrl();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (path === "/") return `${base}/`;
  return `${base}${path.replace(/\/$/, "") || "/"}`;
}
