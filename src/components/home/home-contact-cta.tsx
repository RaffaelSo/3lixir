"use client";

import Link from "next/link";

import { LocaleLink } from "@/components/layout/locale-link";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getHomeContent } from "@/data/home";

export function HomeContactCta() {
  const { locale } = useSiteLocale();
  const content = getHomeContent(locale).contact;

  return (
    <SectionShell
      as="section"
      id="contact"
      className="scroll-mt-[5.5rem] border-t border-white/[0.07] pb-24 pt-14 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2
            id="contact-heading"
            className="font-display-editorial mt-8 max-w-[18ch] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
          >
            {content.headline}
          </h2>
          <ul className="mt-12 space-y-4">
            {content.services.map((item) => (
              <li
                key={item}
                className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.26em] text-white/38"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="flex flex-col justify-end gap-10">
          <div className="surface-quiet grid gap-8 p-8 sm:p-10">
            <div className="flex flex-col gap-3 border-b border-white/[0.07] pb-8">
              <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.34em] text-white/28">
                {content.emailLabel}
              </p>
              <Link
                href={`mailto:${content.email}`}
                className="font-display-editorial text-2xl tracking-[-0.03em] text-white transition duration-500 hover:text-[var(--accent)] sm:text-3xl"
              >
                {content.email}
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.34em] text-white/28">
                {content.instagramHeading}
              </p>
              <Link
                href={content.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="font-display-editorial text-2xl tracking-[-0.03em] text-white transition duration-500 hover:text-[var(--accent)] sm:text-3xl"
              >
                {content.instagramLabel}
              </Link>
            </div>
          </div>
          <LocaleLink href="/contact" className="link-editorial link-editorial-strong w-fit">
            {content.fullContactLabel}
          </LocaleLink>
        </Reveal>
      </div>
    </SectionShell>
  );
}
