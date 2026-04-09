import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";

import type { HomeContent } from "@/types/home";

type HomeWorldCyberProps = {
  content: HomeContent["world"];
};

export function HomeWorldCyber({ content }: HomeWorldCyberProps) {
  return (
    <SectionShell
      as="section"
      className="relative py-28 sm:py-36 lg:py-44"
      aria-labelledby="world-heading"
    >
      <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 xl:gap-28">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2
            id="world-heading"
            className="font-display-editorial mt-8 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.96] tracking-[-0.045em] text-[var(--foreground)]"
          >
            {content.headline}
          </h2>
          <div className="mt-12 space-y-8">
            {content.lines.map((line, i) => (
              <p
                key={i}
                className="max-w-xl text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/44"
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[3/4] overflow-hidden lg:aspect-[4/5]">
            <div className="editorial-crop image-vignette-cold absolute inset-0">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_15%] saturate-[0.9]"
              />
            </div>
            <div
              className="pointer-events-none absolute -right-8 top-1/4 hidden w-32 border-t border-[var(--line-cold)] lg:block"
              aria-hidden
            />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
