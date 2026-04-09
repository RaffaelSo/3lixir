import Image from "next/image";

import { cn } from "@/lib/utils";

import type { ProcessFrame } from "@/types/home";

type EditorialImageGridProps = {
  frames: ProcessFrame[];
};

function frameClass(layout: ProcessFrame["layout"]) {
  switch (layout) {
    case "tall":
      return "aspect-[3/5] min-h-[240px] sm:min-h-[320px] lg:row-span-2";
    case "wide":
      return "aspect-[16/9] min-h-[200px] sm:col-span-2 sm:min-h-[240px]";
    default:
      return "aspect-[4/5] min-h-[200px]";
  }
}

export function EditorialImageGrid({ frames }: EditorialImageGridProps) {
  return (
    <div className="grid auto-rows-auto grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-4">
      {frames.map((frame, i) => (
        <figure
          key={`${frame.src}-${i}`}
          className={cn(
            "group relative overflow-hidden bg-white/[0.02]",
            frameClass(frame.layout),
          )}
        >
          <Image
            src={frame.src}
            alt={frame.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(2,3,6,0.75)_100%)]"
            aria-hidden
          />
          {frame.caption ? (
            <figcaption className="absolute bottom-0 left-0 right-0 z-[1] p-4 font-[family-name:var(--font-mono)] text-[0.55rem] font-medium uppercase tracking-[0.32em] text-white/55">
              {frame.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
