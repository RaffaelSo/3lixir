import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";
import { Project } from "@/types/project";

type ProjectCreditsProps = {
  project: Project;
};

export function ProjectCredits({ project }: ProjectCreditsProps) {
  return (
    <SectionShell className="py-24 sm:py-32 lg:py-36">
      <Reveal className="grid gap-12 border-t border-white/[0.07] pt-14 lg:grid-cols-[0.5fr_1fr] lg:gap-20 lg:pt-16">
        <div>
          <Eyebrow>Credits</Eyebrow>
          <p className="mt-6 max-w-sm text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/44">
            A concise record of collaborators and production context, kept quiet
            so the imagery remains primary.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
          {project.credits.map((credit) => (
            <div key={credit.label} className="border-t border-white/[0.06] pt-5">
              <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/28">
                {credit.label}
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed tracking-[0.02em] text-white/78">
                {credit.value}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16 flex flex-wrap gap-x-10 gap-y-4 sm:mt-20">
        <Link href="/projects" className="link-editorial link-editorial-strong">
          Back to archive
        </Link>
        <Link href="/contact" className="link-editorial">
          Discuss a commission
        </Link>
      </Reveal>
    </SectionShell>
  );
}
