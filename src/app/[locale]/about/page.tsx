import type { Metadata } from "next";

import { AboutHero } from "@/components/editorial/about-hero";
import { AboutMethodSection } from "@/components/editorial/about-method-section";
import { FinalCtaBand } from "@/components/editorial/final-cta-band";
import { VisionStatement } from "@/components/editorial/vision-statement";
import type { UISiteLocale } from "@/lib/i18n-config";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const metadataCopy: Record<UISiteLocale, { title: string; description: string }> = {
  en: {
    title: "About",
    description:
      "Creative positioning, artistic direction, and fashion-world perspective behind 3liksir.",
  },
  de: {
    title: "About",
    description:
      "Kreative Positionierung, künstlerische Haltung und Perspektive hinter 3liksir.",
  },
  ru: {
    title: "About",
    description:
      "Creative direction, художественная позиция и взгляд проекта 3liksir.",
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
    pathname: "/about",
    title: copy.title,
    description: copy.description,
  });
}

export default function LocalizedAboutPage() {
  return (
    <>
      <AboutHero />
      <VisionStatement />
      <AboutMethodSection />
      <FinalCtaBand />
    </>
  );
}
