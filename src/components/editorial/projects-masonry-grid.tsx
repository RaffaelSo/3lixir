import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { ProjectCardEditorial } from "@/components/editorial/project-card-editorial";
import { Project } from "@/types/project";

type ProjectsMasonryGridProps = {
  projects: Project[];
};

export function ProjectsMasonryGrid({ projects }: ProjectsMasonryGridProps) {
  return (
    <SectionShell className="py-24 sm:py-32 lg:py-36">
      <Reveal className="mb-20 grid gap-10 lg:mb-24 lg:grid-cols-[0.65fr_1fr] lg:items-end lg:gap-16">
        <div>
          <Eyebrow>Archive</Eyebrow>
          <Statement className="mt-6 max-w-md">
            An image-first project index curated like a magazine edit.
          </Statement>
        </div>
        <p className="max-w-2xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46">
          The overview favors rhythm, scale variation, and quiet metadata so the
          work retains a sense of discovery.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-12 md:auto-rows-[15rem] md:gap-6">
        {projects.map((project, index) => (
          <ProjectCardEditorial
            key={project.slug}
            project={project}
            priority={index < 2}
            className={project.gridClass}
          />
        ))}
      </div>
    </SectionShell>
  );
}
