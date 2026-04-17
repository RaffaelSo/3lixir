import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { Project } from "@/types/project";

type ProjectCardEditorialProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function ProjectCardEditorial({
  project,
  className,
  priority = false,
}: ProjectCardEditorialProps) {
  return (
    <Reveal className={cn("group relative h-full", className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="ambient-frame editorial-crop image-vignette-cold group relative flex h-full min-h-[26rem] overflow-hidden md:min-h-[28rem]"
      >
        <Image
          src={project.heroImage}
          alt={project.heroAlt}
          fill
          priority={priority}
          sizes="(min-width: 1720px) 557px, (min-width: 1280px) calc((100vw - 10rem - 3rem) / 3), (min-width: 768px) calc((100vw - 5rem - 1.5rem) / 2), calc(100vw - 3rem)"
          className="relative z-0 object-cover object-[center_20%] transition duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035] group-hover:saturate-100"
        />

        <div className="relative z-10 mt-auto flex w-full flex-col gap-5 p-7 sm:gap-6 sm:p-9">
          <div className="flex items-center justify-between gap-4 font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/38">
            <span>{project.category}</span>
            <span className="tabular-nums text-white/32">{project.year}</span>
          </div>

          <div className="max-w-md">
            <h3 className="font-display-editorial text-4xl leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed tracking-[0.02em] text-white/48 transition duration-700 group-hover:text-white/68">
              {project.excerpt}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-white/[0.08] pt-5 font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.32em] text-white/40">
            <span className="max-w-[60%] truncate">{project.role}</span>
            <span className="text-white/28 transition duration-700 group-hover:text-[var(--accent)]">
              View
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
