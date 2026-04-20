import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { isSiteLocale } from "@/lib/locale-routing";
import { siteLocales } from "@/lib/i18n-config";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return siteLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isSiteLocale(locale)) {
    notFound();
  }

  return children;
}
