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
  const first = index === 0;
  const imagePosition = index === 1 ? "object-[center_42%]" : "object-[center_30%]";
  const imageSizes =
    "(min-width: 1720px) 1560px, (min-width: 1280px) calc(100vw - 10rem), (min-width: 1024px) calc(100vw - 8rem), (min-width: 640px) calc(100vw - 5rem), calc(100vw - 3rem)";

  return (
    <article className="relative">
      <LocaleLink
        href={`/projects/${project.slug}`}
        className="group block"
      >
        <div
          className={cn(
            "relative isolate w-full overflow-hidden border-y border-white/[0.055] bg-[#06080c]",
            first
              ? "aspect-[5/4] min-h-[22rem] sm:min-h-[28rem] lg:aspect-[16/11] lg:min-h-[min(70svh,43rem)]"
              : "aspect-[4/5] min-h-[22rem] sm:min-h-[26rem] lg:aspect-[16/10] lg:min-h-[min(62svh,38rem)]",
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

          <div
            className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(2,3,6,0.04)_0%,rgba(2,3,6,0.18)_42%,rgba(2,3,6,0.82)_100%)]"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 lg:p-12">
            <div className="max-w-xl">
              <p className="font-[family-name:var(--font-mono)] text-[0.56rem] font-medium uppercase tracking-[0.44em] text-white/45">
                {project.category} · {project.year}
              </p>
              <h3 className="font-display-editorial mt-5 text-[clamp(3rem,6.4vw,6.5rem)] leading-[0.86] tracking-[-0.065em] text-white">
                {project.title}
              </h3>
              <p className="mt-6 max-w-[30ch] text-[0.95rem] leading-[1.75] tracking-[0.035em] text-white/62 sm:text-[1rem]">
                {project.excerpt}
              </p>
              <p className="mt-8 border-t border-white/[0.12] pt-5 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.38em] text-[var(--accent-dim)] transition duration-700 group-hover:text-[var(--accent)]">
                {viewCopy[locale]}
              </p>
            </div>
          </div>
        </div>
      </LocaleLink>
    </article>
  );
}
