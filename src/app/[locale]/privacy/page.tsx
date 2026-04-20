import type { Metadata } from "next";

import { PrivacyPageContent } from "@/components/legal/privacy-page-content";
import type { UISiteLocale } from "@/lib/i18n-config";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const metadataCopy: Record<UISiteLocale, { title: string; description: string }> = {
  en: {
    title: "Privacy",
    description: "How 3liksir processes personal data when you use this website.",
  },
  de: {
    title: "Datenschutz",
    description: "Informationen zur Verarbeitung personenbezogener Daten auf der Website von 3liksir.",
  },
  ru: {
    title: "Конфиденциальность",
    description: "Как 3liksir обрабатывает персональные данные при использовании сайта.",
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
    pathname: "/privacy",
    title: copy.title,
    description: copy.description,
  });
}

export default function LocalizedPrivacyPage() {
  return <PrivacyPageContent />;
}
