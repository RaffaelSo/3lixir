import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { siteConfig } from "@/lib/seo-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] py-14 sm:py-16">
      <SectionShell className="flex flex-col gap-12 text-sm text-white/40 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md space-y-4">
          <p className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.4em] text-white/28">
            3liksir
          </p>
          <p className="text-[0.9375rem] leading-[1.75] tracking-[0.02em] text-white/48">
            Berlin — couture fashion, experimental design, and image-led brand
            work.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="mailto:3liksirdesigns@gmail.com"
            className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
          >
            3liksirdesigns@gmail.com
          </Link>
          <Link
            href={siteConfig.instagramUrl}
            rel="me noopener noreferrer"
            className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em] text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
          >
            @3liksir
          </Link>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.24em]">
            <Link
              href="/impressum"
              className="text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/52 transition-colors duration-500 hover:text-[var(--accent)]"
            >
              Datenschutz
            </Link>
          </div>
          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.3em] text-white/22">
            Berlin / Worldwide
          </p>
        </div>
      </SectionShell>
    </footer>
  );
}
