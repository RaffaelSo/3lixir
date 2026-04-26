"use client";

import Image from "next/image";

import { LocaleLink } from "@/components/layout/locale-link";
import { cn } from "@/lib/utils";

import type { Project } from "@/types/project";
import { useSiteLocale } from "@/contexts/site-locale-context";

type FeaturedProjectCardProps = {
  project: Project;
  index: number;
};

const viewCopy = {
  en: "View project",
  de: "Projekt ansehen",
  ru: "Смотреть проект",
} as const;

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const { locale } = useSiteLocale();
  const flip = index % 2 === 1;
  const first = index === 0;
  const imagePosition = index === 1 ? "object-[center_42%]" : "object-[center_30%]";
  const imageSizes = flip
    ? "(min-width: 1720px) 650px, (min-width: 1024px) 42vw, 100vw"
    : "(min-width: 1720px) 980px, (min-width: 1024px) 63vw, 100vw";

  return (
    <article className="relative">
      <LocaleLink
        href={`/projects/${project.slug}`}
        className={cn(
          "group grid min-h-0 grid-cols-1 gap-10 lg:items-stretch",
          flip
            ? "lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-14 xl:gap-20"
            : "lg:grid-cols-[minmax(0,0.63fr)_minmax(0,0.37fr)] lg:gap-14 xl:gap-20",
        )}
      >
        <div
          className={cn(
            "relative isolate w-full overflow-hidden bg-[#06080c]",
            first
              ? "aspect-[5/4] min-h-[22rem] sm:min-h-[28rem] lg:aspect-[16/11] lg:min-h-[min(70svh,43rem)]"
              : "aspect-[4/5] min-h-[22rem] sm:min-h-[26rem] lg:aspect-[16/10] lg:min-h-[min(62svh,38rem)]",
            flip && "lg:order-2",
          )}
        >
          <div
            className={cn(
              "featured-image-frame editorial-crop image-vignette-soft relative h-full w-full",
              first
                ? "min-h-[22rem] sm:min-h-[28rem] lg:min-h-[min(70svh,43rem)]"
                : "min-h-[22rem] sm:min-h-[26rem] lg:min-h-[min(62svh,38rem)]",
            )}
          >
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              sizes={imageSizes}
              className={cn(
                "z-0 object-cover transition duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]",
                imagePosition,
              )}
            />
          </div>
        </div>

        <div
          className={cn(
            "flex min-h-0 flex-col justify-center gap-10 border-t border-white/[0.055] px-1 py-8 sm:px-2 lg:min-h-[min(62svh,38rem)] lg:border-y lg:border-l-0 lg:border-r-0 lg:px-0 lg:py-12",
            flip && "lg:order-1",
          )}
        >
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.56rem] font-medium uppercase tracking-[0.44em] text-white/28">
              {project.category} · {project.year}
            </p>
            <h3 className="font-display-editorial mt-7 text-[clamp(3rem,5.8vw,5.5rem)] leading-[0.9] tracking-[-0.06em] text-white">
              {project.title}
            </h3>
            <p className="mt-8 max-w-[28ch] text-[1rem] leading-[1.85] tracking-[0.035em] text-white/45">
              {project.excerpt}
            </p>
          </div>

          <div className="border-t border-white/[0.04] pt-7">
            <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.38em] text-[var(--accent-dim)] transition duration-700 group-hover:text-[var(--accent)]">
              {viewCopy[locale]}
            </p>
          </div>
        </div>
      </LocaleLink>
    </article>
  );
}
