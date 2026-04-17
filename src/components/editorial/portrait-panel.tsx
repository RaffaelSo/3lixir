import Image from "next/image";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";

const portraitImage =
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80";

export function PortraitPanel() {
  return (
    <SectionShell className="py-20 sm:py-28 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12">
        <Reveal>
          <div className="ambient-frame editorial-crop image-vignette-cold relative aspect-[4/3] min-h-[min(52svh,22rem)] overflow-hidden lg:min-h-[28rem]">
            <Image
              src={portraitImage}
              alt="Portrait placeholder for fashion creative direction."
              fill
              sizes="(min-width: 1720px) 828px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_22%] saturate-[0.9]"
            />
          </div>
        </Reveal>

        <Reveal
          delay={0.12}
          className="surface-quiet flex flex-col justify-between gap-14 px-6 py-9 sm:px-9 sm:py-11"
        >
          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/30">
              Working tone
            </p>
            <p className="mt-6 max-w-md text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48">
              Mysterious, image-led, and highly controlled. Each project is
              structured to feel singular rather than trend-compliant.
            </p>
          </div>

          <div className="grid gap-8 border-t border-white/[0.07] pt-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.32em] text-white/26">
                Audience
              </p>
              <p className="mt-3 text-sm leading-relaxed tracking-[0.02em] text-white/68">
                Agencies, brands, stylists, photographers, and the wider
                creative scene.
              </p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.32em] text-white/26">
                Priority
              </p>
              <p className="mt-3 text-sm leading-relaxed tracking-[0.02em] text-white/68">
                Strong visual identity that prompts contact and conversation.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
