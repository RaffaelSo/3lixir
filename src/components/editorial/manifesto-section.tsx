import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";

const pillars = [
  {
    title: "Atmosphere first",
    copy: "Every project begins with tone, image rhythm, and a world that can be felt before it is explained.",
  },
  {
    title: "Controlled experimentation",
    copy: "The work stretches toward the unexpected, but always with precision and intentional restraint.",
  },
  {
    title: "Fashion-native storytelling",
    copy: "Built for agencies, photographers, brands, and the wider creative scene that reads visual nuance instantly.",
  },
];

export function ManifestoSection() {
  return (
    <SectionShell className="py-32 sm:py-40 lg:py-44">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <Reveal>
          <Eyebrow>Positioning</Eyebrow>
          <Statement className="mt-6 max-w-lg">
            A premium editorial space for visual identities that need more than
            a gallery and a bio.
          </Statement>
        </Reveal>

        <div className="space-y-0">
          {pillars.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 0.08}
              className="border-t border-white/[0.07] py-10 first:pt-0 first:border-t-0 sm:py-12"
            >
              <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-12 lg:gap-16">
                <span className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium tabular-nums tracking-[0.28em] text-white/18">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                  <h3 className="font-display-editorial max-w-[14ch] text-3xl tracking-[-0.04em] text-white sm:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="max-w-xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/46">
                    {pillar.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
