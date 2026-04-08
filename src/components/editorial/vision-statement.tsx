import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/editorial/typography";

const items = [
  "Campaign direction and seasonal image worlds",
  "Editorial concepts for magazines and fashion platforms",
  "Brand atmosphere, launch language, and digital identity tone",
];

export function VisionStatement() {
  return (
    <SectionShell className="border-t border-white/[0.06] py-20 sm:py-28 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
        <Reveal>
          <Eyebrow>Vision</Eyebrow>
          <p className="font-display-editorial mt-6 text-4xl leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            A visual language grounded in restraint, image intelligence, and
            fashion-world sensitivity.
          </p>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/46">
              The approach is editorial in rhythm and strategic in intent:
              building distinct visual worlds that feel immediate to agencies,
              photographers, stylists, and brands operating inside culture.
            </p>
          </Reveal>

          <div className="space-y-0">
            {items.map((item, index) => (
              <Reveal
                key={item}
                delay={0.12 + index * 0.06}
                className="border-t border-white/[0.07] py-6 first:border-t-0 first:pt-0 sm:py-7"
              >
                <p className="text-[0.9375rem] leading-[1.65] tracking-[0.015em] text-white/62">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
