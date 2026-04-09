import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";

import type { HomeContent } from "@/types/home";

type HomeManifestoProps = {
  content: HomeContent["manifesto"];
};

export function HomeManifesto({ content }: HomeManifestoProps) {
  return (
    <SectionShell
      as="section"
      className="py-28 sm:py-36 lg:py-44"
      aria-labelledby="manifesto-heading"
    >
      <div className="grid gap-16 lg:grid-cols-[0.35fr_1fr] lg:gap-24 xl:gap-32">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <p
            id="manifesto-heading"
            className="font-display-editorial mt-8 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12] tracking-[-0.035em] text-[var(--foreground)]"
          >
            {content.statement}
          </p>
        </Reveal>
        <div className="space-y-10 lg:pt-2">
          {content.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-2xl text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/46">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
