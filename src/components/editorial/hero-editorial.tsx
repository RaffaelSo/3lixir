import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";
import { Project } from "@/types/project";

type HeroEditorialProps = {
  project: Project;
};

export function HeroEditorial({ project }: HeroEditorialProps) {
  return (
    <SectionShell
      as="header"
      className="flex min-h-[calc(100svh-4.75rem)] flex-col justify-end pb-16 pt-10 sm:min-h-[calc(100svh-5.25rem)] sm:pb-24 sm:pt-14 lg:pb-28"
    >
      <div className="grid min-h-0 flex-1 items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-24">
        <Reveal className="relative z-10 flex flex-col justify-end lg:pb-2">
          <div className="mb-10 flex items-start gap-6 sm:mb-14 sm:gap-8">
            <span
              aria-hidden
              className="font-[family-name:var(--font-mono)] mt-1 shrink-0 text-[0.62rem] font-medium tabular-nums tracking-[0.32em] text-white/22"
            >
              00
            </span>
            <div className="min-w-0 border-l border-[var(--line-cold)] pl-6 sm:pl-8">
              <Eyebrow>Image direction — campaigns & editorials</Eyebrow>
              <h1 className="font-display-editorial mt-8 max-w-[18ch] text-[clamp(2.75rem,7.2vw,6.75rem)] leading-[0.9] tracking-[-0.055em] text-balance text-[var(--foreground)]">
                <span className="block">Atmosphere,</span>
                <span className="mt-1 block text-white/88 sm:mt-2">
                  silhouette, cinematic restraint.
                </span>
              </h1>
              <p className="mt-10 max-w-md text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48 sm:mt-12">
                3liksir is a digital editorial space for avant-garde fashion
                image systems — built for agencies, brands, and collaborators
                who read visual nuance the way others read copy.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 sm:mt-16">
                <Link
                  href="/projects"
                  className="link-editorial link-editorial-strong"
                >
                  View projects
                </Link>
                <Link href="/contact" className="link-editorial">
                  Inquire
                </Link>
              </div>

              <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-10 sm:mt-20 sm:grid-cols-2 sm:gap-12 sm:pt-12">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/28">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-relaxed tracking-[0.02em] text-white/62">
                    Campaigns · Editorials · Brand worlds · Casting-adjacent
                    image direction
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/28">
                    In sequence
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/72">
                    <span className="text-white/42">{project.year}</span>
                    <span className="mx-2 text-white/20">/</span>
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative lg:min-h-[min(78svh,52rem)]">
          <div className="ambient-frame editorial-crop image-vignette-cold relative h-full min-h-[min(52svh,28rem)] w-full lg:absolute lg:inset-0 lg:min-h-0">
            <div className="absolute inset-0 cinematic-gradient opacity-90" />
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              priority
              sizes="(min-width: 1720px) 704px, (min-width: 1024px) 44vw, 100vw"
              className="object-cover object-[center_18%] opacity-[0.82] saturate-[0.92]"
            />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-end justify-between gap-6 border-t border-white/10 pt-6">
                <div className="min-w-0">
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/38">
                    Selected sequence
                  </p>
                  <h2 className="font-display-editorial mt-3 truncate text-3xl tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]">
                    {project.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-white/52">
                    {project.excerpt}
                  </p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="link-editorial shrink-0 self-end text-white/55"
                >
                  Open
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
