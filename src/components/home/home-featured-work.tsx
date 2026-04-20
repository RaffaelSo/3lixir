"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { FeaturedProjectCard } from "@/components/home/featured-project-card";
import { HomeSectionHeading } from "@/components/home/home-section-heading";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getFeaturedProjects } from "@/data/projects";

const copy = {
  en: {
    eyebrow: "Work",
    title: "Featured",
    description:
      "Selected sequences — image-led, paced like a lookbook, not a template grid.",
  },
  de: {
    eyebrow: "Arbeit",
    title: "Featured",
    description:
      "Ausgewählte Sequenzen — bildgeführt, im Rhythmus eines Lookbooks statt eines Template-Grids.",
  },
  ru: {
    eyebrow: "Работы",
    title: "Избранное",
    description:
      "Выбранные последовательности — с ритмом lookbook, а не шаблонной сетки.",
  },
} as const;

export function HomeFeaturedWork() {
  const { locale } = useSiteLocale();
  const projects = getFeaturedProjects(locale);
  const text = copy[locale];

  return (
    <SectionShell
      as="section"
      className="py-20 sm:py-28 lg:py-32"
      aria-labelledby="featured-heading"
    >
      <HomeSectionHeading
        id="featured-heading"
        eyebrow={text.eyebrow}
        title={text.title}
        description={text.description}
        align="split"
      />

      <div className="space-y-14 sm:space-y-20 lg:space-y-28">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <FeaturedProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
