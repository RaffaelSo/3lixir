"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import {
  defaultLocale,
  siteLocales,
  type UISiteLocale,
} from "@/lib/i18n-config";

const STORAGE_KEY = "3liksir-site-locale";

function readStoredLocale(): UISiteLocale | null {
  if (typeof window === "undefined") return null;
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s && (siteLocales as readonly string[]).includes(s)) {
      return s as UISiteLocale;
    }
  } catch {
    /* ignore */
  }
  return null;
}

type SiteLocaleContextValue = {
  locale: UISiteLocale;
  setLocale: (locale: UISiteLocale) => void;
};

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

export function SiteLocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<UISiteLocale>(defaultLocale);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
  }, []);

  const setLocale = (next: UISiteLocale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

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
