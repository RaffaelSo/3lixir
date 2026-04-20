"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

import {
  defaultLocale,
  type UISiteLocale,
} from "@/lib/i18n-config";
import {
  getLocaleFromPathname,
  localizePath,
} from "@/lib/locale-routing";

const STORAGE_KEY = "3liksir-site-locale";

type SiteLocaleContextValue = {
  locale: UISiteLocale;
  setLocalePreference: (locale: UISiteLocale) => void;
  localizeHref: (href: string, locale?: UISiteLocale) => string;
};

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

export function SiteLocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname) ?? defaultLocale;

  const setLocalePreference = (next: UISiteLocale) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo(
    () => ({
      locale,
      setLocalePreference,
      localizeHref: (href: string, targetLocale = locale) => localizePath(href, targetLocale),
    }),
    [locale],
  );

  return (
    <SiteLocaleContext.Provider value={value}>
      {children}
    </SiteLocaleContext.Provider>
  );
}

export function useSiteLocale(): SiteLocaleContextValue {
  const ctx = useContext(SiteLocaleContext);
  if (!ctx) {
    throw new Error("useSiteLocale must be used within SiteLocaleProvider");
  }
  return ctx;
}
