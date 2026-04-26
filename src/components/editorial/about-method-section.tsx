"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";
import { useSiteLocale } from "@/contexts/site-locale-context";

const copy = {
  en: {
    eyebrow: "Method",
    headline: "The work is built like a visual system, not a styling moodboard.",
    body:
      "Every project starts from atmosphere, silhouette, material tension, and the way an image should remain in memory. The goal is not more decoration; it is a sharper world.",
    principles: [
      {
        label: "Image first",
        text: "Composition, light, pose, and garment shape are treated as one system.",
      },
      {
        label: "Controlled emotion",
        text: "The work stays restrained, but never neutral: cold, severe, sensual, strange.",
      },
      {
        label: "Worldbuilding",
        text: "A project should feel like it belongs to a larger visual universe.",
      },
      {
        label: "Fashion memory",
        text: "The final image should be recognizable after the scroll, not only during it.",
      },
    ],
  },
  de: {
    eyebrow: "Methode",
    headline: "Die Arbeit entsteht wie ein visuelles System, nicht wie ein Styling-Moodboard.",
    body:
      "Jedes Projekt beginnt mit Atmosphäre, Silhouette, Materialspannung und der Frage, wie ein Bild im Gedächtnis bleiben soll. Es geht nicht um mehr Dekoration, sondern um eine schärfere Welt.",
    principles: [
      {
        label: "Image first",
        text: "Komposition, Licht, Pose und Garment-Form werden als ein System behandelt.",
      },
      {
        label: "Kontrollierte Emotion",
        text: "Die Arbeit bleibt reduziert, aber nie neutral: kalt, streng, sinnlich, fremd.",
      },
      {
        label: "Worldbuilding",
        text: "Ein Projekt soll wirken, als gehöre es zu einem größeren visuellen Universum.",
      },
      {
        label: "Fashion Memory",
        text: "Das finale Bild soll nach dem Scrollen wiedererkennbar bleiben, nicht nur währenddessen.",
      },
    ],
  },
  ru: {
    eyebrow: "Метод",
    headline: "Работа строится как визуальная система, а не как styling moodboard.",
    body:
      "Каждый проект начинается с атмосферы, силуэта, напряжения материала и вопроса, как образ должен остаться в памяти. Цель не в большем декоре, а в более остром мире.",
    principles: [
      {
        label: "Image first",
        text: "Композиция, свет, поза и форма одежды рассматриваются как единая система.",
      },
      {
        label: "Контролируемая эмоция",
        text: "Работа остаётся сдержанной, но не нейтральной: холодной, строгой, чувственной, странной.",
      },
      {
        label: "Worldbuilding",
        text: "Проект должен ощущаться как часть более крупной визуальной вселенной.",
      },
      {
        label: "Fashion memory",
        text: "Финальный образ должен запоминаться после скролла, а не только во время него.",
      },
    ],
  },
} as const;

export function AboutMethodSection() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.46fr_1fr] lg:gap-24">
        <Reveal>
          <Eyebrow>{text.eyebrow}</Eyebrow>
          <h2 className="font-display-editorial mt-7 max-w-lg text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.93] tracking-[-0.055em] text-white">
            {text.headline}
          </h2>
          <p className="mt-9 max-w-md text-[0.9375rem] leading-[1.85] tracking-[0.035em] text-white/42">
            {text.body}
          </p>
        </Reveal>

        <div className="grid gap-0 border-y border-white/[0.06]">
          {text.principles.map((principle, index) => (
            <Reveal
              key={principle.label}
              delay={index * 0.05}
              className="grid gap-5 border-t border-white/[0.06] py-8 first:border-t-0 sm:grid-cols-[0.34fr_1fr] sm:gap-10 sm:py-10"
            >
              <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.38em] text-white/28">
                {principle.label}
              </p>
              <p className="max-w-2xl text-[0.98rem] leading-[1.8] tracking-[0.025em] text-white/55">
                {principle.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
