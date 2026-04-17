import type { Metadata } from "next";
import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { getPublicSiteUrl } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How 3liksir processes personal data when you use this website.",
};

export default function PrivacyPage() {
  const siteUrl = getPublicSiteUrl();

  return (
    <SectionShell
      as="div"
      className="pb-28 pt-16 sm:pb-36 sm:pt-20 lg:pb-44 lg:pt-24"
    >
      <article aria-labelledby="privacy-heading">
        <h1
          id="privacy-heading"
          className="font-display-editorial text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] tracking-[-0.04em] text-[var(--foreground)]"
        >
          Privacy
        </h1>

        <div className="mt-14 max-w-2xl space-y-10 text-[0.9375rem] leading-[1.85] tracking-[0.02em] text-white/52">
          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Data controller
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
              Hosting
            </h2>
            <p>
              This site is hosted on Vercel Inc. (United States). When you
              visit pages, technically necessary data is processed (for example
              IP address, time of access, requested file) to deliver the site
              and maintain security (legitimate interests). See Vercel’s privacy
              policy:{" "}
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
              Web analytics and performance
            </h2>
            <p>
              We use{" "}
              <strong className="font-medium text-white/62">Vercel Web Analytics</strong>{" "}
              and{" "}
              <strong className="font-medium text-white/62">Vercel Speed Insights</strong>{" "}
              for reach and performance insight. We do not add additional
              marketing or social trackers. Details are described in Vercel’s
              documentation (see link above).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Contact by email
            </h2>
            <p>
              If you email us, we process the data you send to handle your
              request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/32">
              Your rights
            </h2>
            <p>
              Where applicable law provides, you may have rights of access,
              rectification, erasure, restriction, portability, and objection,
              as well as the right to lodge a complaint with a supervisory
              authority.
            </p>
          </section>

          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.24em] text-white/28">
            Last updated: April 2026 · Website: {siteUrl}
          </p>

          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] uppercase tracking-[0.24em] text-white/28">
            German-language version:{" "}
            <Link
              href="/datenschutz"
              className="text-white/40 underline decoration-white/12 underline-offset-[0.2em] transition duration-500 hover:text-[var(--accent)]"
            >
              Datenschutz
            </Link>
          </p>
        </div>
      </article>
    </SectionShell>
  );
}
