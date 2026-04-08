import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { Project } from "@/types/project";

type FeaturedProjectsRailProps = {
  projects: Project[];
};

export function FeaturedProjectsRail({
  projects,
}: FeaturedProjectsRailProps) {
  return (
    <SectionShell className="py-32 sm:py-40 lg:py-44">
      <Reveal className="mb-20 grid gap-10 lg:mb-28 lg:grid-cols-[0.62fr_1fr] lg:items-end lg:gap-16">
        <div>
          <Eyebrow>Selected works</Eyebrow>
          <Statement className="mt-6 max-w-md">
            Projects arranged with editorial pacing, not portfolio repetition.
          </Statement>
        </div>
        <p className="max-w-xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46">
          Each project is given room to breathe. The sequence privileges
          atmosphere, silhouette, and visual memory over exhaustive copy.
        </p>
      </Reveal>

      <div className="space-y-24 lg:space-y-32">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <Link
              href={`/projects/${project.slug}`}
              className="surface-quiet ambient-frame group grid gap-8 overflow-hidden p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
            >
              <div
                className={`relative min-h-[min(52svh,26rem)] overflow-hidden lg:min-h-[32rem] ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="editorial-crop image-vignette-cold absolute inset-0">
                  <Image
                    src={project.heroImage}
                    alt={project.heroAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover object-[center_20%] transition duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:saturate-100"
                  />
                </div>
              </div>

              <div
                className={`flex flex-col justify-between gap-12 py-2 sm:py-4 ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/34">
                    {project.category} / {project.year}
                  </p>
                  <h3 className="font-display-editorial mt-6 text-5xl leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                    {project.title}
                  </h3>
                  <p className="mt-8 max-w-md text-lg leading-[1.65] tracking-[0.01em] text-white/48">
                    {project.statement}
                  </p>
                </div>

                <div className="border-t border-white/[0.08] pt-8 text-sm leading-relaxed tracking-[0.02em] text-white/44">
                  <p>{project.description}</p>
                  <div className="mt-8 flex items-center justify-between gap-4 font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/32">
                    <span>{project.role}</span>
                    <span className="text-white/22 transition duration-700 group-hover:text-[var(--accent)]">
                      Enter sequence
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
