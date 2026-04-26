import type { MetadataRoute } from "next";

import { visibleProjectSlugs } from "@/data/projects";
import { defaultLocale, siteLocales } from "@/lib/i18n-config";
import { localizePath } from "@/lib/locale-routing";
import { getCanonicalPath } from "@/lib/seo-config";

const staticPaths = [
  "/",
  "/about",
  "/contact",
  "/imprint",
  "/privacy",
  "/projects",
] as const;

function sitemapEntry(pathname: string): MetadataRoute.Sitemap[number] {
  const alternates = Object.fromEntries(
    siteLocales.map((locale) => [locale, getCanonicalPath(localizePath(pathname, locale))]),
  );

  return {
    url: getCanonicalPath(localizePath(pathname, defaultLocale)),
    alternates: {
      languages: {
        ...alternates,
        "x-default": getCanonicalPath(localizePath(pathname, defaultLocale)),
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPaths = visibleProjectSlugs.map((slug) => `/projects/${slug}`);

  return [...staticPaths, ...projectPaths].map(sitemapEntry);
}
