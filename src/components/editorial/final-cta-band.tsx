import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";

export function FinalCtaBand() {
  return (
    <SectionShell className="py-32 sm:py-40 lg:py-44">
      <Reveal className="border-y border-white/[0.08] px-2 py-20 sm:px-4 sm:py-24 lg:py-28">
        <Eyebrow>Collaborations</Eyebrow>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <Statement className="max-w-3xl">
              Open to campaigns, editorials, and brand worlds that need a
              sharper cultural presence.
            </Statement>
            <p className="mt-8 max-w-2xl text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/46">
              For commissions, creative partnerships, and visual identity work,
              inquiries are handled personally.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
            <Link href="/contact" className="link-editorial link-editorial-strong">
              Get in touch
            </Link>
            <Link href="/projects" className="link-editorial">
              Browse archive
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
