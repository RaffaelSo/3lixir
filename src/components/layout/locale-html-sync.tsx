"use client";

import { useEffect } from "react";

import { useSiteLocale } from "@/contexts/site-locale-context";

export function LocaleHtmlSync() {
  const { locale } = useSiteLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
