"use client";

import { Fragment } from "react";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";
import { useSiteLocale } from "@/contexts/site-locale-context";
import { getHomeContent } from "@/data/home";

/** Hairline segment in `currentColor` to match the display serif’s light strokes; glyph hyphens in sans/serif at this size look too heavy. */
function StatementHairlineHyphen() {
  return (
    <span className="relative mx-[0.14em] inline-block w-[0.2em] min-w-[1px] [vertical-align:0.2em] [word-spacing:0]">
      <span className="sr-only">-</span>
      <span
        className="pointer-events-none absolute left-0 top-1/2 block h-px w-full max-w-full -translate-y-1/2 bg-[currentColor] opacity-75 [min-height:0.5px]"
        aria-hidden
      />
    </span>
  );
}

/** Splits on ` - `; visible separator is a thin rule, not a typewriter hyphen. */
function ManifestoStatementText({ text }: { text: string }) {
  const parts = text.split(" - ");
  if (parts.length < 2) {
    return <>{text}</>;
  }
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 ? (
            <>
              {" "}
              <StatementHairlineHyphen />{" "}
            </>
          ) : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}

/** Shared: same content box width, flush left, no default paragraph indent. */
const leftColClass = "min-w-0 w-full pl-0 text-left";

export function HomeManifesto() {
  const { locale } = useSiteLocale();
  const content = getHomeContent(locale).manifesto;

  return (
    <SectionShell
      as="section"
      className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24"
      aria-labelledby="manifesto-heading"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-16 lg:gap-y-6 xl:gap-x-20">
        <Reveal className={`${leftColClass} lg:col-start-1 lg:row-start-1`}>
          <Eyebrow className="m-0 w-full max-w-full">{content.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal
          className={`${leftColClass} lg:col-start-1 lg:row-start-2`}
          delay={0.04}
        >
          <p
            id="manifesto-heading"
            className="m-0 w-full max-w-full font-display-editorial text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.12] tracking-[-0.04em] text-[var(--foreground)] [text-rendering:optimizeLegibility]"
          >
            <ManifestoStatementText text={content.statement} />
          </p>
        </Reveal>
        <div
          className={`${leftColClass} space-y-7 lg:col-start-2 lg:row-start-2 lg:space-y-8`}
        >
          {content.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46 [text-rendering:optimizeLegibility]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
