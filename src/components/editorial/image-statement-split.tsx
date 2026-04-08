import Image from "next/image";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { Project } from "@/types/project";

type ImageStatementSplitProps = {
  project: Project;
};

export function ImageStatementSplit({
  project,
}: ImageStatementSplitProps) {
  return (
    <SectionShell className="py-32 sm:py-40 lg:py-44">
      <div className="surface-quiet ambient-frame grid gap-8 overflow-hidden p-5 sm:gap-10 sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:p-10">
        <Reveal className="relative min-h-[min(48svh,24rem)] lg:min-h-full">
          <div className="editorial-crop image-vignette-cold absolute inset-0">
            <div className="absolute inset-0 cinematic-gradient opacity-80" />
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[center_22%] opacity-75 saturate-[0.9]"
            />
          </div>
        </Reveal>

        <Reveal
          className="flex flex-col justify-between gap-14 py-4 sm:py-6"
          delay={0.12}
        >
          <div>
            <Eyebrow>Visual world</Eyebrow>
            <Statement className="mt-6 max-w-2xl">
              Designed to land somewhere between campaign, exhibition, and
              cultural signal.
            </Statement>
            <p className="mt-8 max-w-xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/46">
              The site language favors deliberate pacing, severe whitespace, and
              image-led narrative so industry visitors can read the taste level
              immediately.
            </p>
          </div>

          <div className="border-t border-white/[0.08] pt-8">
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/30">
              Next immersion
            </p>
            <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-display-editorial text-4xl tracking-[-0.045em] text-white sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed tracking-[0.02em] text-white/44">
                  {project.statement}
                </p>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="link-editorial shrink-0"
              >
                View narrative
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
