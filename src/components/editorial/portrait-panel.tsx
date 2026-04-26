"use client";

import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { toOptimizedProjectPublicPath } from "@/lib/optimized-project-image";

const portraitImage = toOptimizedProjectPublicPath(
  "/images/projects/lookbook/Shin Jeong Hoon, @sh1nfoto (17).JPEG",
);

const copy = {
  en: {
    alt: "3liksir portrait detail - fashion creative direction.",
    eyebrow: "Identity",
    title: "About the designer",
    intro:
      "A controlled image language for garments that behave like architecture.",
    notes: [
      "Couture and experimental garment forms",
      "Editorial image direction",
      "Digital fashion and worldbuilding",
    ],
    toneLabel: "Working tone",
    toneBody:
      "3liksir works between couture, image direction, and sculptural styling. The visual language is mysterious, controlled, and built to feel singular rather than trend-compliant.",
    audienceLabel: "Practice",
    audienceBody:
      "Experimental garment forms, editorial worlds, digital fashion, and image-led visual systems.",
    priorityLabel: "Signature",
    priorityBody:
      "Dark elegance, cyber-informed silhouettes, severe atmosphere, and high-contrast visual memory.",
  },
  de: {
    alt: "3liksir Portrait-Detail - Fashion Creative Direction.",
    eyebrow: "Identität",
    title: "About the designer",
    intro:
      "Eine kontrollierte Bildsprache für Kleidung, die sich wie Architektur verhält.",
    notes: [
      "Couture und experimentelle Garment-Formen",
      "Editorielle Bildregie",
      "Digital Fashion und Worldbuilding",
    ],
    toneLabel: "Haltung",
    toneBody:
      "3liksir arbeitet zwischen Couture, Bildregie und skulpturalem Styling. Die visuelle Sprache ist mysteriös, kontrolliert und darauf ausgelegt, eigenständig statt trendkonform zu wirken.",
    audienceLabel: "Praxis",
    audienceBody:
      "Experimentelle Garment-Formen, editorielle Welten, Digital Fashion und bildgeführte visuelle Systeme.",
    priorityLabel: "Signatur",
    priorityBody:
      "Dunkle Eleganz, cyber-informierte Silhouetten, strenge Atmosphäre und kontrastreiche visuelle Erinnerung.",
  },
  ru: {
    alt: "Портретная деталь 3liksir - fashion creative direction.",
    eyebrow: "Идентичность",
    title: "About the designer",
    intro:
      "Контролируемый визуальный язык для одежды, которая ведёт себя как архитектура.",
    notes: [
      "Couture и экспериментальные формы одежды",
      "Editorial image direction",
      "Digital fashion и worldbuilding",
    ],
    toneLabel: "Тональность",
    toneBody:
      "3liksir работает на стыке couture, визуальной режиссуры и скульптурного styling. Визуальный язык загадочный, контролируемый и созданный ощущаться самостоятельным, а не трендовым.",
    audienceLabel: "Практика",
    audienceBody:
      "Экспериментальные формы одежды, эдиториальные миры, digital fashion и визуальные системы, построенные вокруг образа.",
    priorityLabel: "Сигнатура",
    priorityBody:
      "Тёмная элегантность, cyber-силуэты, строгая атмосфера и контрастная визуальная память.",
  },
} as const;

export function PortraitPanel() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="py-14 sm:py-20 lg:py-24">
      <Reveal className="mb-10 grid gap-7 border-t border-white/[0.055] pt-10 sm:mb-12 lg:mb-14 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.42em] text-white/30">
            {text.eyebrow}
          </p>
          <h2 className="font-display-editorial mt-7 text-[clamp(2.35rem,5vw,4.75rem)] leading-[0.94] tracking-[-0.055em] text-white">
            {text.title}
          </h2>
        </div>
        <p className="max-w-2xl text-[0.95rem] leading-[1.8] tracking-[0.04em] text-white/42 lg:ml-auto lg:max-w-lg lg:text-right">
          {text.intro}
        </p>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <Reveal>
          <div className="ambient-frame editorial-crop image-vignette-cold relative aspect-[4/3] min-h-[min(44svh,20rem)] overflow-hidden lg:min-h-[25rem]">
            <Image
              src={portraitImage}
              alt={text.alt}
              fill
              sizes="(min-width: 1720px) 828px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_34%] saturate-[0.9]"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          className="surface-quiet flex flex-col justify-between gap-9 px-6 py-8 sm:px-9 sm:py-10"
        >
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/30">
              {text.toneLabel}
            </p>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/52">
              {text.toneBody}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {text.notes.map((note) => (
                <p
                  key={note}
                  className="border-t border-white/[0.07] pt-3 font-[family-name:var(--font-mono)] text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-white/34"
                >
                  {note}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-7 border-t border-white/[0.07] pt-7 sm:grid-cols-2 sm:gap-9">
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
