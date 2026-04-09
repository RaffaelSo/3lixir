import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";

import { FeaturedProjectCard } from "@/components/home/featured-project-card";
import { HomeSectionHeading } from "@/components/home/home-section-heading";

import type { Project } from "@/types/project";

type HomeFeaturedWorkProps = {
  projects: Project[];
};

export function HomeFeaturedWork({ projects }: HomeFeaturedWorkProps) {
  return (
    <SectionShell
      as="section"
      className="py-28 sm:py-36 lg:py-44"
      aria-labelledby="featured-heading"
    >
      <HomeSectionHeading
        id="featured-heading"
        eyebrow="Work"
        title="Featured"
        description="Selected sequences — image-led, paced like a lookbook, not a template grid."
        align="split"
      />

      <div className="space-y-20 sm:space-y-28 lg:space-y-36">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <FeaturedProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
