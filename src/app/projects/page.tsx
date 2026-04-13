import type { Metadata } from "next";

import { ProjectsMasonryGrid } from "@/components/editorial/projects-masonry-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A curated archive of campaigns, editorials, and fashion image worlds.",
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.slug === "lookbook") return -1;
    if (b.slug === "lookbook") return 1;
    return 0;
  });

  return <ProjectsMasonryGrid projects={sortedProjects} />;
}
