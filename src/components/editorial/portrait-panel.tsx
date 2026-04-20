"use client";

import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { toOptimizedProjectPublicPath } from "@/lib/optimized-project-image";

const portraitImage = toOptimizedProjectPublicPath(
  "/images/projects/lookbook/COVERShin Jeong Hoon, @sh1nfoto (16).JPEG",
);

const copy = {
  en: {
    alt: "3liksir lookbook cover — fashion creative direction.",
    toneLabel: "Working tone",
    toneBody:
      "Mysterious, image-led, and highly controlled. Each project is structured to feel singular rather than trend-compliant.",
    audienceLabel: "Audience",
    audienceBody:
      "Agencies, brands, stylists, photographers, and the wider creative scene.",
    priorityLabel: "Priority",
    priorityBody:
      "Strong visual identity that prompts contact and conversation.",
  },
  de: {
    alt: "3liksir Lookbook-Cover — Fashion Creative Direction.",
    toneLabel: "Haltung",
    toneBody:
      "Mysteriös, bildzentriert und präzise kontrolliert. Jedes Projekt ist so gebaut, dass es eigenständig wirkt, nicht trendkonform.",
    audienceLabel: "Audience",
    audienceBody:
      "Agenturen, Marken, Stylist:innen, Fotograf:innen und die erweiterte kreative Szene.",
    priorityLabel: "Priorität",
    priorityBody:
      "Eine starke visuelle Identität, die Kontakt und Gespräch auslöst.",
  },
  ru: {
    alt: "Обложка lookbook 3liksir — fashion creative direction.",
    toneLabel: "Тональность",
    toneBody:
      "Загадочный, выстроенный вокруг образа, чётко контролируемый. Каждый проект собран так, чтобы ощущаться самостоятельным, а не трендово-унифицированным.",
    audienceLabel: "Аудитория",
    audienceBody:
      "Агентства, бренды, стилисты, фотографы и расширенная creative-среда.",
    priorityLabel: "Приоритет",
    priorityBody:
      "Сильная визуальная идентичность, которая запускает контакт и разговор.",
  },
} as const;

export function PortraitPanel() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="py-20 sm:py-28 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <Reveal>
          <div className="ambient-frame editorial-crop image-vignette-cold relative aspect-[4/3] min-h-[min(52svh,22rem)] overflow-hidden lg:min-h-[28rem]">
            <Image
              src={portraitImage}
              alt={text.alt}
              fill
              sizes="(min-width: 1720px) 828px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_22%] saturate-[0.9]"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          className="surface-quiet flex flex-col justify-between gap-14 px-6 py-9 sm:px-9 sm:py-11"
        >
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/30">
              {text.toneLabel}
            </p>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48">
              {text.toneBody}
            </p>
          </div>

          <div className="grid gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.32em] text-white/26">
                {text.audienceLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed tracking-[0.02em] text-white/68">
                {text.audienceBody}
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.32em] text-white/26">
                {text.priorityLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed tracking-[0.02em] text-white/68">
                {text.priorityBody}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
