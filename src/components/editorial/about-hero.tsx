import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";

export function AboutHero() {
  return (
    <SectionShell className="py-20 sm:py-28 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
        <Reveal>
          <Eyebrow>About</Eyebrow>
          <Statement className="mt-6 max-w-md">
            Creative direction for fashion work that needs a sharper emotional
            temperature.
          </Statement>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="max-w-3xl text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/46">
            3liksir develops image systems for fashion labels, editorials, and
            culturally attuned collaborators looking for more presence, more
            mystery, and more visual memory. The output sits between campaign,
            exhibition, and identity design.
          </p>
        </Reveal>
      </div>
    </SectionShell>
  );
}
