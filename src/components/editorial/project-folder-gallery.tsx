"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { SectionShell } from "@/components/layout/section-shell";

type ProjectFolderGalleryProps = {
  slug: string;
  imagePaths: readonly string[];
};

const PAGE_SIZE = 4;

export function ProjectFolderGallery({
  slug,
  imagePaths,
}: ProjectFolderGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleImages = useMemo(
    () => imagePaths.slice(0, visibleCount),
    [imagePaths, visibleCount],
  );
  const hasMore = visibleCount < imagePaths.length;

  if (imagePaths.length === 0) {
    return null;
  }

  return (
    <SectionShell className="pb-20 sm:pb-24 lg:pb-28">
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {visibleImages.map((src, index) => (
          <figure
            key={src}
            className="ambient-frame editorial-crop image-vignette-cold relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={src}
              alt={`${slug} image ${index + 1}`}
              fill
              sizes="(min-width: 1720px) 740px, (min-width: 768px) 46vw, 100vw"
              className="object-cover object-center"
            />
          </figure>
        ))}
      </div>

      {hasMore ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + PAGE_SIZE)}
            className="inline-flex items-center border border-white/[0.14] bg-white/[0.03] px-8 py-3.5 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.3em] text-white/75 transition-[background,border-color] duration-300 hover:border-white/26 hover:bg-white/[0.08]"
          >
            Load more
          </button>
        </div>
      ) : null}
    </SectionShell>
  );
}
