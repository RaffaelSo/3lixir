import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";

const fieldClass =
  "border border-white/[0.08] bg-white/[0.025] px-4 py-3.5 text-[0.9375rem] text-white outline-none transition-[border-color,box-shadow] duration-500 placeholder:text-white/22 focus:border-[var(--line-cold)] focus:shadow-[0_0_0_1px_rgba(158,182,217,0.12)]";

export function ContactFormShell() {
  return (
    <SectionShell className="pb-24 sm:pb-32 lg:pb-40">
      <Reveal className="surface-quiet grid gap-10 px-6 py-10 sm:gap-12 sm:px-9 sm:py-12 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/30">
            Brief intake
          </p>
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/44">
            A minimal form shell is included here for future submission wiring.
            For now, project briefs can be sent directly by email.
          </p>
        </div>

        <form className="grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/34">
              Name
              <input
                type="text"
                placeholder="Your name"
                className={fieldClass}
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/34">
              Email
              <input
                type="email"
                placeholder="name@studio.com"
                className={fieldClass}
                autoComplete="email"
              />
            </label>
          </div>

          <label className="grid gap-2 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.28em] text-white/34">
            Project outline
            <textarea
              rows={6}
              placeholder="Campaign, editorial, launch, timing, mood, references..."
              className={`${fieldClass} resize-none`}
            />
          </label>

          <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/[0.07] pt-6">
            <p className="max-w-md text-sm leading-relaxed tracking-[0.02em] text-white/36">
              Live submission handling can be connected later to your preferred
              email or CMS workflow.
            </p>
            <Link
              href="mailto:3liksirdesigns@gmail.com"
              className="link-editorial link-editorial-strong"
            >
              Send by email
            </Link>
          </div>
        </form>
      </Reveal>
    </SectionShell>
  );
}
