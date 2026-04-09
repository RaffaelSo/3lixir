import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";

import { EditorialImageGrid } from "@/components/home/editorial-image-grid";
import { HomeSectionHeading } from "@/components/home/home-section-heading";

import type { HomeContent } from "@/types/home";

type HomeProcessSectionProps = {
  content: HomeContent["process"];
};

export function HomeProcessSection({ content }: HomeProcessSectionProps) {
  return (
    <SectionShell
      as="section"
      className="border-y border-white/[0.06] py-28 sm:py-36 lg:py-44"
      aria-labelledby="process-heading"
    >
      <HomeSectionHeading
        id="process-heading"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        align="split"
      />
      <Reveal>
        <EditorialImageGrid frames={content.frames} />
      </Reveal>
    </SectionShell>
  );
}
