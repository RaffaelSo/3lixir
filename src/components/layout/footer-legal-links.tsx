"use client";

import { LocaleLink } from "@/components/layout/locale-link";
import { useSiteLocale } from "@/contexts/site-locale-context";

const pairs = {
  en: [
    { href: "/imprint" as const, label: "Imprint" },
    { href: "/privacy" as const, label: "Privacy" },
  ],
  de: [
    { href: "/imprint" as const, label: "Impressum" },
    { href: "/privacy" as const, label: "Datenschutz" },
  ],
  ru: [
    { href: "/imprint" as const, label: "Правовая информация" },
    { href: "/privacy" as const, label: "Конфиденциальность" },
  ],
} as const;

export function FooterLegalLinks() {
  const { locale } = useSiteLocale();
  const items = pairs[locale];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em]">
      {items.map((item) => (
        <LocaleLink
          key={item.href}
          href={item.href}
          className="text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
        >
          {item.label}
        </LocaleLink>
      ))}
    </div>
  );
}
