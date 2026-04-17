"use client";

import Link from "next/link";

import { useSiteLocale } from "@/contexts/site-locale-context";

const pairs = {
  en: [
    { href: "/imprint" as const, label: "Imprint" },
    { href: "/privacy" as const, label: "Privacy" },
  ],
  de: [
    { href: "/impressum" as const, label: "Impressum" },
    { href: "/datenschutz" as const, label: "Datenschutz" },
  ],
  ru: [
    { href: "/imprint" as const, label: "Imprint" },
    { href: "/privacy" as const, label: "Privacy" },
  ],
} as const;

export function FooterLegalLinks() {
  const { locale } = useSiteLocale();
  const items = pairs[locale];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
