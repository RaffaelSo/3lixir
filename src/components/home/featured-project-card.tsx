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
        className="group grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-0"
      >
        <div
          className={cn(
            "relative aspect-[4/5] min-h-[min(70svh,36rem)] overflow-hidden lg:aspect-auto lg:min-h-[min(85svh,44rem)]",
            flip && "lg:order-2",
          )}
        >
          <div className="editorial-crop image-vignette-cold absolute inset-0">
            <Image
              src={project.heroImage}
              alt={project.heroAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_25%] transition duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col justify-between gap-12 border border-white/[0.06] bg-[rgba(6,8,12,0.35)] px-8 py-12 sm:px-12 sm:py-16 lg:min-h-[min(85svh,44rem)]",
            flip && "lg:order-1",
          )}
        >
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.36em] text-white/32">
              {project.category} · {project.year}
            </p>
            <h3 className="font-display-editorial mt-6 text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] tracking-[-0.045em] text-white">
              {project.title}
            </h3>
            <p className="mt-8 max-w-md text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48">
              {project.excerpt}
            </p>
          </div>

          <div className="space-y-8 border-t border-white/[0.07] pt-8">
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
