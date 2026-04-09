import type { Metadata } from "next";

import { openGraphLocale } from "@/lib/i18n-config";
import { getSiteUrl, siteConfig } from "@/lib/seo-config";

const siteUrl = getSiteUrl();

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.brandShort}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: openGraphLocale,
    url: siteUrl,
    siteName: siteConfig.brandShort,
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [
      {
        url: siteConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.ogTitle,
    description: siteConfig.ogDescription,
    images: [siteConfig.ogImagePath],
  },
};
