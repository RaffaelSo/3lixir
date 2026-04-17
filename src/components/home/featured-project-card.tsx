import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { Project } from "@/types/project";

type FeaturedProjectCardProps = {
  project: Project;
  index: number;
};

export function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const flip = index % 2 === 1;

  return (
    <article>
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group grid min-h-0 grid-cols-1 gap-0 lg:items-stretch",
          flip
            ? "lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
            : "lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)]",
        )}
      >
        <div
          className={cn(
            "relative isolate aspect-[3/4] w-full min-h-[min(68svh,26rem)] overflow-hidden sm:aspect-[4/5] sm:min-h-[min(72svh,30rem)]",
            "lg:aspect-auto lg:min-h-[min(78svh,44rem)] lg:h-full",
            flip && "lg:order-2",
          )}
        >
          <div className="editorial-crop image-vignette-cold absolute inset-0">
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              sizes="(min-width: 1720px) 920px, (min-width: 1024px) 62vw, 100vw"
              className="object-cover object-[center_22%] transition duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.018]"
            />
          </div>
        </div>

        <div
          className={cn(
            "flex min-h-0 flex-col justify-between gap-10 border border-white/[0.05] bg-[rgba(3,4,8,0.72)] px-7 py-10 sm:px-9 sm:py-12 lg:min-h-[min(78svh,44rem)] lg:gap-9 lg:px-10 lg:py-14",
            flip && "lg:order-1",
          )}
        >
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.36em] text-white/32">
              {project.category} · {project.year}
            </p>
            <h3 className="font-display-editorial mt-5 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-[-0.045em] text-white">
              {project.title}
            </h3>
            <p className="mt-6 max-w-[26ch] text-[0.9375rem] leading-[1.72] tracking-[0.02em] text-white/52">
              {project.excerpt}
            </p>
          </div>

          <div className="space-y-7 border-t border-white/[0.06] pt-7">
            {project.credits.length > 0 ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.credits.slice(0, 4).map((c) => (
                  <li
                    key={`${project.slug}-${c.label}`}
                    className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.28em] text-white/28"
                  >
                    <span className="text-white/40">{c.label}</span>
                    <span className="mx-2 text-white/15">—</span>
                    <span className="text-white/55">{c.value}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.34em] text-[var(--accent-dim)] transition duration-700 group-hover:text-[var(--accent)]">
              View project
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
