"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { ProjectCardEditorial } from "@/components/editorial/project-card-editorial";
import { Project } from "@/types/project";
import { useSiteLocale } from "@/contexts/site-locale-context";

type RelatedProjectsStripProps = {
  projects: Project[];
};

const copy = {
  en: { eyebrow: "Related projects", statement: "Further worlds from the archive." },
  de: { eyebrow: "Verwandte Projekte", statement: "Weitere Welten aus dem Archiv." },
  ru: { eyebrow: "Связанные проекты", statement: "Другие миры из архива." },
} as const;

export function RelatedProjectsStrip({
  projects,
}: RelatedProjectsStripProps) {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="border-t border-white/[0.06] py-24 sm:py-32 lg:py-36">
      <Reveal className="mb-16 lg:mb-20">
        <Eyebrow>{text.eyebrow}</Eyebrow>
        <Statement className="mt-6 max-w-lg">{text.statement}</Statement>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        {projects.map((project) => (
          <ProjectCardEditorial key={project.slug} project={project} />
        ))}
      </div>
    </SectionShell>
  );
}
