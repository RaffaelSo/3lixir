import Link from "next/link";

import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow, Statement } from "@/components/editorial/typography";
import { siteConfig } from "@/lib/seo-config";

const links = [
  {
    label: "Email",
    value: "studio@3liksir.com",
    href: "mailto:studio@3liksir.com",
  },
  {
    label: "Instagram",
    value: "@3liksir",
    href: siteConfig.instagramUrl,
  },
  { label: "Base", value: "Berlin", href: "#" },
];

export function ContactLinks() {
  return (
    <SectionShell className="py-20 sm:py-28 lg:py-32">
      <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <Statement className="mt-6 max-w-md">
            For commissions, editorial collaborations, and culturally aligned
            partnerships.
          </Statement>
        </Reveal>

        <div className="space-y-0">
          {links.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.08}
              className="border-t border-white/[0.07] py-8 first:border-t-0 first:pt-0 sm:py-10"
            >
              {item.href === "#" ? (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/28">
                    {item.label}
                  </p>
                  <p className="font-display-editorial text-3xl tracking-[-0.04em] text-white sm:text-4xl">
                    {item.value}
                  </p>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
                >
                  <p className="font-[family-name:var(--font-mono)] text-[0.6rem] font-medium uppercase tracking-[0.34em] text-white/28">
                    {item.label}
                  </p>
                  <p className="font-display-editorial text-3xl tracking-[-0.04em] text-white transition duration-500 sm:text-4xl hover:text-[var(--accent)]">
                    {item.value}
                  </p>
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
