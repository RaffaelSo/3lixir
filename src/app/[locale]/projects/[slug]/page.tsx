import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectPageContent } from "@/components/editorial/project-page-content";
import { projectImagesBySlug } from "@/data/project-images";
import {
  getProjectBySlug,
  visibleProjectSlugs,
} from "@/data/projects";
import { siteLocales } from "@/lib/i18n-config";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return siteLocales.flatMap((locale) =>
    visibleProjectSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isSiteLocale(locale)) return {};

  const project = getProjectBySlug(slug, locale);

  if (!project) {
    return {};
  }

  return buildLocalizedMetadata({
    locale,
    pathname: `/projects/${slug}`,
    title: project.title,
    description: project.excerpt,
  });
}

export default async function LocalizedProjectPage({
  params,
}: ProjectPageProps) {
  const { locale, slug } = await params;

  if (!isSiteLocale(locale)) {
    notFound();
  }

  const project = getProjectBySlug(slug, locale);

  if (!project) {
    notFound();
  }

  const projectImagesMap: Record<string, readonly string[]> = projectImagesBySlug;
  const projectImages = projectImagesMap[project.slug] ?? [];

  return <ProjectPageContent slug={project.slug} imagePaths={projectImages} />;
}
