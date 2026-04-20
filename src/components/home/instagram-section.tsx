"use client";

import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { siteConfig } from "@/lib/seo-config";

const copy = {
  en: {
    heading: "Instagram",
    body:
      "Follow 3liksir on Instagram for campaigns, process, and new work — the same visual world as this site, updated in real time. Instagram is the primary channel.",
    aside: "Also on",
    tail: "short clips; Instagram remains the main channel.",
    linkLabel: "@3liksir on Instagram",
  },
  de: {
    heading: "Instagram",
    body:
      "Folge 3liksir auf Instagram für Kampagnen, Prozess und neue Arbeiten — dieselbe visuelle Welt wie auf dieser Site, in Echtzeit aktualisiert. Instagram ist der Hauptkanal.",
    aside: "Außerdem auf",
    tail: "Kurzclips; Instagram bleibt der Hauptkanal.",
    linkLabel: "@3liksir auf Instagram",
  },
  ru: {
    heading: "Instagram",
    body:
      "Следите за 3liksir в Instagram: кампании, процесс и новые работы — тот же визуальный мир, что и на сайте, но в реальном времени. Instagram — основной канал.",
    aside: "Также в",
    tail: "короткие клипы; Instagram остаётся главным каналом.",
    linkLabel: "@3liksir в Instagram",
  },
} as const;

/**
 * Visible, crawlable Instagram callout (text + link in the DOM — no hidden SEO tricks).
 */
export function InstagramSection() {
  const { locale } = useSiteLocale();
  const text = copy[locale];

  return (
    <section
      className="border-y border-white/[0.06] py-16 sm:py-20"
      aria-labelledby="instagram-heading"
    >
      <SectionShell className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="max-w-xl">
          <h2
            id="instagram-heading"
            className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.42em] text-[var(--accent-dim)]"
          >
            {text.heading}
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/48">
            {text.body}
          </p>
          <p className="mt-6 text-[0.8125rem] leading-[1.75] tracking-[0.02em] text-white/34">
            {text.aside}{" "}
            <Link
              href={siteConfig.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/48 underline decoration-white/15 underline-offset-[0.25em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              TikTok @3liksir
            </Link>{" "}
            — {text.tail}
          </p>
        </div>
        <p className="shrink-0">
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer me"
            className="font-display-editorial text-2xl tracking-[-0.03em] text-white underline decoration-white/20 underline-offset-[0.35em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)] sm:text-3xl"
          >
            {text.linkLabel}
          </Link>
        </p>
      </SectionShell>
    </section>
  );
}
