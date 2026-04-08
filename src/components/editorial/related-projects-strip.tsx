import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { ProjectCardEditorial } from "@/components/editorial/project-card-editorial";
import { Project } from "@/types/project";

type RelatedProjectsStripProps = {
  projects: Project[];
};

export function RelatedProjectsStrip({
  projects,
}: RelatedProjectsStripProps) {
  return (
    <SectionShell className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-36">
      <Reveal className="mb-16 lg:mb-20">
        <Eyebrow>Related projects</Eyebrow>
        <Statement className="mt-6 max-w-lg">
          Further worlds from the archive.
        </Statement>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {projects.map((project) => (
          <ProjectCardEditorial key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
