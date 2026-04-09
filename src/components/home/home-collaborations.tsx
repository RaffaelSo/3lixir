import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";

import { EditorialCreditsList } from "@/components/home/editorial-credits-list";
import { HomeSectionHeading } from "@/components/home/home-section-heading";

import type { HomeContent } from "@/types/home";

type HomeCollaborationsProps = {
  content: HomeContent["collaborations"];
};

export function HomeCollaborations({ content }: HomeCollaborationsProps) {
  return (
    <SectionShell
      as="section"
      className="py-28 sm:py-36 lg:py-44"
      aria-labelledby="credits-heading"
    >
      <HomeSectionHeading
        id="credits-heading"
        eyebrow={content.eyebrow}
        title={content.title}
        align="left"
      />
      <Reveal>
        <EditorialCreditsList blocks={content.blocks} />
      </Reveal>
    </SectionShell>
  );
}
