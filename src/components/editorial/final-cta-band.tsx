"use client";

import { LocaleLink } from "@/components/layout/locale-link";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { useSiteLocale } from "@/contexts/site-locale-context";

const copy = {
  en: {
    eyebrow: "Collaborations",
    statement:
      "Open to campaigns, editorials, and brand worlds that need a sharper cultural presence.",
    body:
      "For commissions, creative partnerships, and visual identity work, inquiries are handled personally.",
    contact: "Get in touch",
    archive: "Browse archive",
  },
  de: {
    eyebrow: "Kollaborationen",
    statement:
      "Offen für Kampagnen, Editorials und Markenwelten, die eine schärfere kulturelle Präsenz brauchen.",
    body:
      "Für Aufträge, kreative Partnerschaften und visuelle Identitätsarbeit werden Anfragen persönlich betreut.",
    contact: "Kontakt aufnehmen",
    archive: "Archiv ansehen",
  },
  ru: {
    eyebrow: "Коллаборации",
    statement:
      "Открыто для кампаний, эдиториалов и бренд-миров, которым нужна более острая культурная плотность.",
    body:
      "Запросы по заказам, креативным партнёрствам и визуальной идентичности обрабатываются лично.",
    contact: "Связаться",
    archive: "Смотреть архив",
  },
} as const;

export function FinalCtaBand() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="py-32 sm:py-40 lg:py-44">
      <Reveal className="border-y border-white/[0.08] px-2 py-20 sm:px-4 sm:py-24 lg:py-28">
        <Eyebrow>{text.eyebrow}</Eyebrow>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <Statement className="max-w-3xl">{text.statement}</Statement>
            <p className="mt-8 max-w-2xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/46">
              {text.body}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
            <LocaleLink href="/contact" className="link-editorial link-editorial-strong">
              {text.contact}
            </LocaleLink>
            <LocaleLink href="/projects" className="link-editorial">
              {text.archive}
            </LocaleLink>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
