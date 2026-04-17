"use client";

import { useEffect } from "react";

import { useSiteLocale } from "@/contexts/site-locale-context";
import type { UISiteLocale } from "@/lib/i18n-config";

const htmlLang: Record<UISiteLocale, string> = {
  en: "en",
  de: "de",
  ru: "ru",
};

/**
 * Keeps `<html lang>` aligned with the UI locale (client-side).
 */
export function LocaleHtmlSync() {
  const { locale } = useSiteLocale();

  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  return null;
}
