import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Legal disclosure and provider information for the 3liksir website.",
};

export default function ImprintPage() {
  return (
    <SectionShell
      as="div"
      className="pb-28 pt-16 sm:pb-36 sm:pt-20 lg:pb-44 lg:pt-24"
    >
      <article aria-labelledby="imprint-heading">
        <h1
          id="imprint-heading"
          className="font-display-editorial text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
        >
          Imprint
        </h1>

        <div className="mt-14 max-w-2xl space-y-10 text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/52">
          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Contact
            </h2>
            <p>
              3liksir
              <br />
              Berlin, Germany
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:3liksirdesigns@gmail.com"
                className="text-white/70 underline decoration-white/15 underline-offset-[0.25em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                3liksirdesigns@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Liability for content
            </h2>
            <p>
              This site’s content is prepared with care. We do not guarantee
              completeness, accuracy, or that it is up to date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Liability for links
            </h2>
            <p>
              This website may contain links to external sites. The respective
              operators are solely responsible for their content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Copyright
            </h2>
            <p>
              Text, images, and layout are protected by copyright and related
              rights unless otherwise stated.
            </p>
          </section>

          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.24em] text-white/28">
            German-language version:{" "}
            <Link
              href="/impressum"
              className="text-white/40 underline decoration-white/12 underline-offset-[0.2em] transition duration-500 hover:text-[var(--accent)]"
            >
              Impressum
            </Link>
          </p>
        </div>
      </article>
    </SectionShell>
  );
}
