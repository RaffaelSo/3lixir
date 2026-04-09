import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";

import { siteConfig } from "@/lib/seo-config";

/**
 * Visible, crawlable Instagram callout (text + link in the DOM — no hidden SEO tricks).
 */
export function InstagramSection() {
  return (
    <section
      className="border-y border-white/[0.06] py-16 sm:py-20"
      aria-labelledby="instagram-heading"
    >
      <SectionShell className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-12">
        <div className="max-w-xl">
          <h2
            id="instagram-heading"
            className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.42em] text-[var(--accent-dim)]"
          >
            Instagram
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/48">
            Follow {siteConfig.brandShort} for campaigns, process, and new work —
            the same visual world as this site, updated in real time.
          </p>
        </div>
        <p className="shrink-0">
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer me"
            className="font-display-editorial text-2xl tracking-[-0.03em] text-white underline decoration-white/20 underline-offset-[0.35em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)] sm:text-3xl"
          >
            @3liksir on Instagram
          </Link>
        </p>
      </SectionShell>
    </section>
  );
}
