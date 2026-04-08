import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-14 sm:py-16">
      <SectionShell className="flex flex-col gap-12 text-sm text-white/40 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md space-y-4">
          <p className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.4em] text-white/28">
            3LIXIR
          </p>
          <p className="text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48">
            Editorial image direction for fashion, identity, and culturally
            relevant visual worlds.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="mailto:studio@3lixir.com"
            className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
          >
            studio@3lixir.com
          </Link>
          <Link
            href="https://instagram.com"
            className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
          >
            Instagram
          </Link>
          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.3em] text-white/22">
            Paris / London / Worldwide
          </p>
        </div>
      </SectionShell>
    </footer>
  );
}
