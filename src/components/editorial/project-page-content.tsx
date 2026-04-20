"use client";

import { ProjectCredits } from "@/components/editorial/project-credits";
import { ProjectFolderGallery } from "@/components/editorial/project-folder-gallery";
import { ProjectGallerySequence } from "@/components/editorial/project-gallery-sequence";
import { ProjectHero } from "@/components/editorial/project-hero";
import { RelatedProjectsStrip } from "@/components/editorial/related-projects-strip";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getProjectBySlug, getRelatedProjects } from "@/data/projects";

type ProjectPageContentProps = {
  slug: string;
  imagePaths: readonly string[];
};

export function ProjectPageContent({
  slug,
  imagePaths,
}: ProjectPageContentProps) {
  const { locale } = useSiteLocale();
  const project = getProjectBySlug(slug, locale);

  if (!project) {
    return null;
  }

  const relatedProjects = getRelatedProjects(project.slug, locale);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectGallerySequence blocks={project.blocks} />
      <ProjectFolderGallery slug={project.slug} imagePaths={imagePaths} />
      <ProjectCredits project={project} />
      <RelatedProjectsStrip projects={relatedProjects} />
    </>
  );
}
