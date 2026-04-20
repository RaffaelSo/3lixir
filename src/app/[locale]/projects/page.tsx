import type { Metadata } from "next";

import { ProjectsMasonryGrid } from "@/components/editorial/projects-masonry-grid";
import type { UISiteLocale } from "@/lib/i18n-config";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const metadataCopy: Record<UISiteLocale, { title: string; description: string }> = {
  en: {
    title: "Projects",
    description: "A curated archive of campaigns, editorials, and fashion image worlds.",
  },
  de: {
    title: "Projekte",
    description: "Ein kuratiertes Archiv aus Kampagnen, Editorials und Mode-Bildwelten.",
  },
  ru: {
    title: "Проекты",
    description: "Кураторский архив кампаний, эдиториалов и fashion-образов.",
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
    pathname: "/projects",
    title: copy.title,
    description: copy.description,
  });
}

export default function LocalizedProjectsPage() {
  return <ProjectsMasonryGrid />;
}
