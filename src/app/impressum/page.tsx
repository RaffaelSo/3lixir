import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung für die Website von 3liksir.",
};

export default function ImpressumPage() {
  return (
    <SectionShell
      as="div"
      className="pb-28 pt-16 sm:pb-36 sm:pt-20 lg:pb-44 lg:pt-24"
    >
      <article aria-labelledby="impressum-heading">
      <h1
        id="impressum-heading"
        className="font-display-editorial text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
      >
        Impressum
      </h1>

      <div className="mt-14 max-w-2xl space-y-10 text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/52">
        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Kontakt
          </h2>
          <p>
            3liksir
            <br />
            Berlin, Deutschland
          </p>
          <p>
            E-Mail:{" "}
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
            Haftung für Inhalte
          </h2>
          <p>
            Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch
            keine Gewähr.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Haftung für Links
          </h2>
          <p>
            Diese Website kann Verknüpfungen zu externen Websites enthalten. Für
            deren Inhalte ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Urheberrecht
          </h2>
          <p>
            Texte, Bilder und das Layout dieser Website unterliegen dem Schutz
            des Urheberrechts und verwandter Schutzrechte, soweit nichts anderes
            angegeben ist.
          </p>
        </section>

        <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.24em] text-white/28">
          Englische Fassung:{" "}
          <Link
            href="/imprint"
            className="text-white/40 underline decoration-white/12 underline-offset-[0.2em] transition duration-500 hover:text-[var(--accent)]"
          >
            Imprint
          </Link>
        </p>
      </div>
      </article>
    </SectionShell>
  );
}
