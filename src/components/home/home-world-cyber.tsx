"use client";

import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getHomeContent } from "@/data/home";

export function HomeWorldCyber() {
  const { locale } = useSiteLocale();
  const content = getHomeContent(locale).world;

  return (
    <SectionShell
      as="section"
      className="relative py-14 sm:py-20 lg:py-24"
      aria-labelledby="world-heading"
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 xl:gap-20">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2
            id="world-heading"
            className="font-display-editorial mt-8 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.96] tracking-[-0.045em] text-[var(--foreground)]"
          >
            {content.headline}
          </h2>
          <div className="mt-9 space-y-6">
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
            <div className="editorial-crop image-vignette-cold relative h-full min-h-[min(52svh,22rem)] w-full lg:min-h-[28rem]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1720px) 704px, (min-width: 1024px) 44vw, 100vw"
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
