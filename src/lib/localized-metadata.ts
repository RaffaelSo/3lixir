import type { Metadata } from "next";

import {
  openGraphLocaleByLocale,
  siteLocales,
  type UISiteLocale,
} from "@/lib/i18n-config";
import { localizePath } from "@/lib/locale-routing";
import { getCanonicalPath, siteConfig } from "@/lib/seo-config";

type LocalizedMetadataOptions = {
  locale: UISiteLocale;
  pathname: string;
  title: string;
  description: string;
  isHome?: boolean;
};

function buildLanguageAlternates(pathname: string) {
  return Object.fromEntries(
    siteLocales.map((locale) => [locale, getCanonicalPath(localizePath(pathname, locale))]),
  );
}

export function buildLocalizedMetadata({
  locale,
  pathname,
  title,
  description,
  isHome = false,
}: LocalizedMetadataOptions): Metadata {
  const canonicalUrl = getCanonicalPath(localizePath(pathname, locale));
  const resolvedTitle = isHome ? title : `${title} | ${siteConfig.brandShort}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: buildLanguageAlternates(pathname),
    },
    openGraph: {
      locale: openGraphLocaleByLocale[locale],
      url: canonicalUrl,
      title: resolvedTitle,
      description,
    },
    twitter: {
      title: resolvedTitle,
      description,
    },
  };
}
