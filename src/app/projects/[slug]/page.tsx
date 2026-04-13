import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCredits } from "@/components/editorial/project-credits";
import { ProjectFolderGallery } from "@/components/editorial/project-folder-gallery";
import { ProjectGallerySequence } from "@/components/editorial/project-gallery-sequence";
import { ProjectHero } from "@/components/editorial/project-hero";
import { RelatedProjectsStrip } from "@/components/editorial/related-projects-strip";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { projectImagesBySlug } from "@/data/project-images";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.excerpt,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectImagesMap: Record<string, readonly string[]> = projectImagesBySlug;
  const projectImages = projectImagesMap[project.slug] ?? [];
  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <>
      <ProjectHero project={project} />
      <ProjectGallerySequence blocks={project.blocks} />
      <ProjectFolderGallery slug={project.slug} imagePaths={projectImages} />
      <ProjectCredits project={project} />
      <RelatedProjectsStrip projects={relatedProjects} />
    </>
  );
}
