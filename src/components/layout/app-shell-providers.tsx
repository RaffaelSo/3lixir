"use client";

import type { ReactNode } from "react";

import { LocaleHtmlSync } from "@/components/layout/locale-html-sync";
import { SiteLocaleProvider } from "@/contexts/site-locale-context";

export function AppShellProviders({ children }: { children: ReactNode }) {
  return (
    <SiteLocaleProvider>
      <LocaleHtmlSync />
      {children}
    </SiteLocaleProvider>
  );
}
