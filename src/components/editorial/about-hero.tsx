"use client";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { useSiteLocale } from "@/contexts/site-locale-context";

const copy = {
  en: {
    eyebrow: "About",
    statement:
      "Creative direction for fashion work that needs a sharper emotional temperature.",
    body:
      "3liksir develops image systems for fashion labels, editorials, and culturally attuned collaborators looking for more presence, more mystery, and more visual memory. The output sits between campaign, exhibition, and identity design.",
  },
  de: {
    eyebrow: "About",
    statement:
      "Creative Direction für Fashion-Projekte mit Bedarf nach einer schärferen emotionalen Temperatur.",
    body:
      "3liksir entwickelt Bildsysteme für Fashion-Labels, Editorials und kulturell bewusst arbeitende Kollaborationspartner — für mehr Präsenz, mehr Geheimnis und höheren Wiedererkennungswert. Die Arbeit bewegt sich zwischen Campaign, Exhibition und Identity Design.",
  },
  ru: {
    eyebrow: "О проекте",
    statement:
      "Creative direction для fashion-проектов, которым нужна более острая эмоциональная температура.",
    body:
      "3liksir разрабатывает визуальные системы для fashion-брендов, editorials и коллабораций с культурной осознанностью — когда важны присутствие, загадка и устойчивый визуальный код. Работа существует между campaign, exhibition и identity design.",
  },
} as const;

export function AboutHero() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="py-20 sm:py-28 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
        <Reveal>
          <Eyebrow>{text.eyebrow}</Eyebrow>
          <Statement className="mt-6 max-w-md">{text.statement}</Statement>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="max-w-3xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46">
            {text.body}
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
