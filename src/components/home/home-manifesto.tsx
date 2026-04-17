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
      className="py-16 sm:py-20 lg:py-24"
      aria-labelledby="manifesto-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <p
            id="manifesto-heading"
            className="font-display-editorial mt-5 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12] tracking-[-0.035em] text-[var(--foreground)]"
          >
            {content.statement}
          </p>
        </Reveal>
        <div className="space-y-7 lg:space-y-8">
          {content.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
