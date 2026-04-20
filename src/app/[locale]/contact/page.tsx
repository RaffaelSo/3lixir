import type { Metadata } from "next";

import { ContactFormShell } from "@/components/editorial/contact-form-shell";
import { ContactLinks } from "@/components/editorial/contact-links";
import type { UISiteLocale } from "@/lib/i18n-config";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const metadataCopy: Record<UISiteLocale, { title: string; description: string }> = {
  en: {
    title: "Contact",
    description: "Contact 3liksir for updates, visibility, and general project communication.",
  },
  de: {
    title: "Kontakt",
    description: "Kontakt zu 3liksir für Updates, Sichtbarkeit und allgemeine Projektkommunikation.",
  },
  ru: {
    title: "Контакт",
    description: "Контакт с 3liksir по вопросам обновлений, видимости и общей коммуникации по проекту.",
  },
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isSiteLocale(locale)) return {};

  const copy = metadataCopy[locale];

  return buildLocalizedMetadata({
    locale,
    pathname: "/contact",
    title: copy.title,
    description: copy.description,
  });
}

export default function LocalizedContactPage() {
  return (
    <>
      <ContactLinks />
      <ContactFormShell />
    </>
  );
}
