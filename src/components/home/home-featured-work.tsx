"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { FeaturedProjectCard } from "@/components/home/featured-project-card";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getFeaturedProjects } from "@/data/projects";

const copy = {
  en: {
    eyebrow: "Work",
    title: "Featured",
    description:
      "Selected sequences - image-led, paced like a lookbook, not a template grid.",
  },
  de: {
    eyebrow: "Arbeit",
    title: "Featured",
    description:
      "Ausgewählte Sequenzen - bildzentriert, im Rhythmus eines Lookbooks statt eines Template-Grids.",
  },
  ru: {
    eyebrow: "Работы",
    title: "Избранное",
    description:
      "Избранные серии - выстроенные вокруг образа, в ритме lookbook, а не шаблонной сетки.",
  },
} as const;

export function HomeFeaturedWork() {
  const { locale } = useSiteLocale();
  const projects = [...getFeaturedProjects(locale)].sort(
    (a, b) => Number(b.year) - Number(a.year),
  );
  const text = copy[locale];

  return (
    <SectionShell
      as="section"
      className="py-14 sm:py-20 lg:py-24"
      aria-labelledby="featured-heading"
    >
      <Reveal className="mb-12 grid gap-8 border-t border-white/[0.055] pt-10 sm:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,0.46fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.42em] text-white/30">
            {text.eyebrow}
          </p>
          <h2
            id="featured-heading"
            className="font-display-editorial mt-7 text-[clamp(2.5rem,6vw,5.25rem)] leading-[0.92] tracking-[-0.055em] text-white"
          >
            {text.title}
          </h2>
        </div>
        <p className="max-w-xl text-[0.95rem] leading-[1.85] tracking-[0.04em] text-white/42 lg:ml-auto lg:max-w-md lg:pt-10 lg:text-right">
          {text.description}
        </p>
      </Reveal>

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
