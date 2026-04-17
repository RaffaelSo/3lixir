import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { getSiteUrl } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf der Website von 3liksir.",
};

export default function DatenschutzPage() {
  const siteUrl = getSiteUrl();

  return (
    <SectionShell
      as="div"
      className="pb-28 pt-16 sm:pb-36 sm:pt-20 lg:pb-44 lg:pt-24"
    >
      <article aria-labelledby="datenschutz-heading">
      <h1
        id="datenschutz-heading"
        className="font-display-editorial text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
      >
        Datenschutz
      </h1>

      <div className="mt-14 max-w-2xl space-y-10 text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/52">
        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Verantwortliche Stelle
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
            Hosting und technische Bereitstellung
          </h2>
          <p>
            Diese Website wird über die Plattform Vercel Inc. (USA) bereitgestellt.
            Beim Aufruf der Seiten werden technisch notwendige Daten verarbeitet
            (z. B. IP-Adresse, Zeitpunkt des Zugriffs, angeforderte Datei). Die
            Verarbeitung erfolgt zur Bereitstellung der Website und zur
            Gewährleistung der Sicherheit (berechtigtes Interesse). Weitere
            Angaben finden Sie in der Datenschutzerklärung von Vercel:{" "}
            <Link
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline decoration-white/15 underline-offset-[0.25em] transition duration-500 hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
            >
              vercel.com/legal/privacy-policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Web Analytics und Performance
          </h2>
          <p>
            Zur Reichweitenmessung und zur Verbesserung der technischen
            Performance nutzen wir die Dienste{" "}
            <strong className="font-medium text-white/62">Vercel Web Analytics</strong> und{" "}
            <strong className="font-medium text-white/62">Vercel Speed Insights</strong>. Es
            werden keine zusätzlichen Marketing- oder Social-Media-Tracker von uns
            eingebunden. Details zu Zweck und Umfang der Verarbeitung ergeben sich
            aus der Dokumentation von Vercel (siehe Link oben).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Kontaktaufnahme
          </h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen
            mitgeteilten Daten zur Bearbeitung der Anfrage.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
            Ihre Rechte
          </h2>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Vorgaben Rechte auf
            Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit sowie Widerspruch gegen bestimmte
            Verarbeitungen. Außerdem steht Ihnen ein Beschwerderecht bei einer
            Datenschutzaufsichtsbehörde zu.
          </p>
        </section>

        <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.24em] text-white/28">
          Stand: April 2026 · Website: {siteUrl}
        </p>
      </div>
      </article>
    </SectionShell>
  );
}
