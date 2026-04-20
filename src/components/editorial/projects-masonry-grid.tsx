"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { ProjectCardEditorial } from "@/components/editorial/project-card-editorial";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getVisibleProjects } from "@/data/projects";

const copy = {
  en: {
    eyebrow: "Archive",
    statement: "An image-first project index curated like a magazine edit.",
    body:
      "The overview favors rhythm, scale variation, and quiet metadata so the work retains a sense of discovery.",
  },
  de: {
    eyebrow: "Archiv",
    statement: "Ein bildzentrierter Projektindex, kuratiert wie ein Magazin-Edit.",
    body:
      "Die Übersicht setzt auf Rhythmus, Maßstabswechsel und ruhige Metadaten, damit die Arbeiten ein Gefühl von Entdeckung behalten.",
  },
  ru: {
    eyebrow: "Архив",
    statement: "Индекс проектов, выстроенный вокруг образа и собранный как журнальный edit.",
    body:
      "Обзор держится на ритме, смене масштаба и сдержанных метаданных, чтобы работы сохраняли ощущение открытия.",
  },
} as const;

export function ProjectsMasonryGrid() {
  const { locale } = useSiteLocale();
  const text = copy[locale];
  const projects = [...getVisibleProjects(locale)].sort((a, b) => {
    if (a.slug === "lookbook") return -1;
    if (b.slug === "lookbook") return 1;
    return 0;
  });

  return (
    <SectionShell className="py-24 sm:py-32 lg:py-36">
      <Reveal className="mb-20 grid gap-10 lg:mb-24 lg:grid-cols-[0.65fr_1fr] lg:items-end lg:gap-16">
        <div>
          <Eyebrow>{text.eyebrow}</Eyebrow>
          <Statement className="mt-6 max-w-md">{text.statement}</Statement>
        </div>
        <p className="max-w-2xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46">
          {text.body}
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCardEditorial
            key={project.slug}
            project={project}
            priority={index === 0}
            className="h-full"
          />
        ))}
      </div>
    </SectionShell>
  );
}
