import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { ProjectBlock } from "@/types/project";

type ProjectGallerySequenceProps = {
  blocks: ProjectBlock[];
};

const aspectMap = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  cinema: "aspect-[21/9]",
  square: "aspect-square",
};

export function ProjectGallerySequence({
  blocks,
}: ProjectGallerySequenceProps) {
  return (
    <SectionShell className="py-6 sm:py-10 lg:py-14">
      <div className="space-y-20 sm:space-y-24 lg:space-y-32">
        {blocks.map((block, index) => {
          if (block.type === "statement") {
            return (
              <Reveal
                key={`${block.type}-${index}`}
                className="py-12 sm:py-16 lg:py-24"
              >
                <div
                  className={cn(
                    "mx-auto max-w-4xl",
                    block.align === "center" && "text-center",
                  )}
                >
                  {block.note ? (
                    <p className="font-[family-name:var(--font-mono)] mb-6 text-[0.6rem] font-medium uppercase tracking-[0.38em] text-[var(--accent-dim)]">
                      {block.note}
                    </p>
                  ) : null}
                  <p className="font-display-editorial text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] tracking-[-0.045em] text-white">
                    {block.text}
                  </p>
                </div>
              </Reveal>
            );
          }

          if (block.type === "pair") {
            return (
              <Reveal key={`${block.type}-${index}`}>
                <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                  {block.images.map((image) => (
                    <figure
                      key={image.image}
                      className="ambient-frame editorial-crop image-vignette-cold relative aspect-[4/5] overflow-hidden"
                    >
                      <Image
                        src={image.image}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover object-[center_25%] saturate-[0.92]"
                      />
                    </figure>
                  ))}
                </div>
                {block.caption ? (
                  <figcaption className="font-[family-name:var(--font-mono)] mt-5 max-w-2xl text-[0.62rem] font-medium uppercase leading-relaxed tracking-[0.28em] text-white/35">
                    {block.caption}
                  </figcaption>
                ) : null}
              </Reveal>
            );
          }

          return (
            <Reveal key={`${block.type}-${index}`}>
              <figure
                className={cn(
                  "ambient-frame editorial-crop image-vignette-cold relative overflow-hidden",
                  aspectMap[block.aspect ?? "landscape"],
                )}
              >
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-[center_24%] saturate-[0.92]"
                />
              </figure>
              {block.caption ? (
                <figcaption className="font-[family-name:var(--font-mono)] mt-5 max-w-2xl text-[0.62rem] font-medium uppercase leading-relaxed tracking-[0.28em] text-white/35">
                  {block.caption}
                </figcaption>
              ) : null}
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
