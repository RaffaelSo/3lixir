import type { Metadata } from "next";

import { ImprintPageContent } from "@/components/legal/imprint-page-content";
import type { UISiteLocale } from "@/lib/i18n-config";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const metadataCopy: Record<UISiteLocale, { title: string; description: string }> = {
  en: {
    title: "Imprint",
    description: "Legal disclosure and provider information for the 3liksir website.",
  },
  de: {
    title: "Impressum",
    description: "Impressum und Anbieterkennzeichnung für die Website von 3liksir.",
  },
  ru: {
    title: "Правовая информация",
    description: "Правовая информация и сведения об операторе сайта 3liksir.",
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
    pathname: "/imprint",
    title: copy.title,
    description: copy.description,
  });
}

export default function LocalizedImprintPage() {
  return <ImprintPageContent />;
}
