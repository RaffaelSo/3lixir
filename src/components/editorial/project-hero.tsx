import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, MetaList } from "@/components/editorial/typography";
import { Project } from "@/types/project";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <SectionShell className="py-14 sm:py-20 lg:py-24">
      <div className="grid gap-12 lg:gap-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,0.42fr)] lg:items-end lg:gap-20">
          <Reveal className="min-w-0">
            <Eyebrow>{`${project.category} · ${project.season} ${project.year}`}</Eyebrow>
            <h1 className="font-display-editorial mt-6 max-w-[14ch] text-[clamp(3.25rem,8vw,6.5rem)] leading-[0.88] tracking-[-0.055em] text-white">
              {project.title}
            </h1>
            <p className="mt-8 max-w-xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48">
              {project.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:text-right">
            <p className="text-left text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/42 lg:ml-auto lg:max-w-sm lg:text-right">
              {project.description}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="ambient-frame editorial-crop image-vignette-cold relative aspect-[21/11] min-h-[min(58svh,36rem)] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[21/9]">
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              priority
              sizes="(min-width: 1720px) 1720px, (min-width: 1280px) calc(100vw - 10rem), (min-width: 1024px) calc(100vw - 8rem), (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)"
              className="object-cover object-[center_22%] saturate-[0.9]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <MetaList
            className="mt-4"
            items={[
              { label: "Role", value: project.role },
              { label: "Location", value: project.location },
              { label: "Mood", value: project.mood },
              { label: "Season", value: `${project.season} ${project.year}` },
            ]}
          />
        </Reveal>
      </div>
    </SectionShell>
  );
}
