"use client";

import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { useSiteLocale } from "@/contexts/site-locale-context";

const fieldClass =
  "border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-[0.9375rem] text-white outline-none transition-[border-color,box-shadow] duration-500 placeholder:text-white/22 focus:border-[var(--line-cold)] focus:shadow-[0_0_0_1px_rgba(158,182,217,0.12)]";

const copy = {
  en: {
    eyebrow: "Brief intake",
    intro:
      "The contact form is temporarily disabled. For current inquiries, please write directly by email.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "name@studio.com",
    outline: "Project outline",
    outlinePlaceholder:
      "Campaign, editorial, launch, timing, mood, references...",
    note:
      "Replies are handled personally by email. Include timing, format, and any visual references that matter.",
    disabledNotice:
      "Form submissions are currently disabled. Please use the direct email contact below.",
    cta: "Write an email",
  },
  de: {
    eyebrow: "Briefing",
    intro:
      "Das Kontaktformular ist aktuell deaktiviert. Anfragen laufen direkt per E-Mail.",
    name: "Name",
    namePlaceholder: "Name",
    email: "E-Mail",
    emailPlaceholder: "name@studio.com",
    outline: "Projektüberblick",
    outlinePlaceholder:
      "Campaign, Editorial, Launch, Timing, Mood, Referenzen …",
    note:
      "Antworten werden persönlich per E-Mail bearbeitet. Timing, Format und visuelle Referenzen helfen beim Einordnen.",
    disabledNotice:
      "Formularübermittlungen sind derzeit deaktiviert — bitte den direkten E-Mail-Kontakt unten nutzen.",
    cta: "E-Mail schreiben",
  },
  ru: {
    eyebrow: "Бриф",
    intro:
      "Форма обратной связи сейчас отключена. Запросы — напрямую по email.",
    name: "Имя",
    namePlaceholder: "Имя",
    email: "Email",
    emailPlaceholder: "name@studio.com",
    outline: "Описание проекта",
    outlinePlaceholder:
      "Campaign, editorial, launch, сроки, mood, референсы …",
    note:
      "Ответы обрабатываются лично по email. Сроки, формат и визуальные референсы помогают быстрее разобраться.",
    disabledNotice:
      "Отправка через форму сейчас отключена — пожалуйста, используйте прямой email ниже.",
    cta: "Написать email",
  },
} as const;

export function ContactFormShell() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <SectionShell className="pb-24 sm:pb-32 lg:pb-40">
      <Reveal className="surface-quiet grid gap-10 px-6 py-10 sm:gap-12 sm:px-9 sm:py-12 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/30">
            {text.eyebrow}
          </p>
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/44">
            {text.intro}
          </p>
        </div>

        <form className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/34">
              {text.name}
              <input
                name="name"
                type="text"
                placeholder={text.namePlaceholder}
                className={`${fieldClass} cursor-not-allowed opacity-60`}
                autoComplete="name"
                disabled
                readOnly
              />
            </label>
            <label className="grid gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/34">
              {text.email}
              <input
                name="email"
                type="email"
                placeholder={text.emailPlaceholder}
                className={`${fieldClass} cursor-not-allowed opacity-60`}
                autoComplete="email"
                disabled
                readOnly
              />
            </label>
          </div>

          <label className="grid gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/34">
            {text.outline}
            <textarea
              name="outline"
              rows={6}
              placeholder={text.outlinePlaceholder}
              className={`${fieldClass} resize-none cursor-not-allowed opacity-60`}
              disabled
              readOnly
            />
          </label>

          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/[0.07] pt-6">
            <p className="max-w-md text-sm leading-relaxed tracking-[0.02em] text-white/36">
              {text.note}
            </p>
            <Link
              href="mailto:3liksirdesigns@gmail.com"
              className="link-editorial link-editorial-strong"
            >
              {text.cta}
            </Link>
          </div>

          <p className="text-sm leading-relaxed tracking-[0.02em] text-[#f1a9a9]">
            {text.disabledNotice}
          </p>
        </form>
      </Reveal>
    </SectionShell>
  );
}
