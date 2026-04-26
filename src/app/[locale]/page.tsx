import type { Metadata } from "next";

import { HomeContactCta } from "@/components/home/home-contact-cta";
import { HomeFeaturedWork } from "@/components/home/home-featured-work";
import { HomeHero } from "@/components/home/home-hero";
import { HomeManifesto } from "@/components/home/home-manifesto";
import { HomeWorldCyber } from "@/components/home/home-world-cyber";
import { InstagramSection } from "@/components/home/instagram-section";
import { PortraitPanel } from "@/components/editorial/portrait-panel";
import { buildLocalizedMetadata } from "@/lib/localized-metadata";
import { isSiteLocale } from "@/lib/locale-routing";
import type { UISiteLocale } from "@/lib/i18n-config";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const descriptions: Record<UISiteLocale, string> = {
  en: "3liksir is a Berlin-based couture fashion designer and model brand: experimental design, sculptural silhouettes, and editorial image. Discover work and contact for collaborations.",
  de: "3liksir ist ein Berliner Couture- und Experimental-Fashion-Label mit skulpturalen Silhouetten, editorieller Bildsprache und Kollaborationen.",
  ru: "3liksir — берлинский couture- и experimental-fashion-проект со скульптурными силуэтами, эдиториальной визуальностью и коллаборациями.",
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isSiteLocale(locale)) return {};

  return buildLocalizedMetadata({
    locale,
    pathname: "/",
    title: "3liksir – Couture Fashion Designer Berlin",
    description: descriptions[locale],
    isHome: true,
  });
}

export default function LocalizedHomePage() {
  return (
    <>
      <HomeHero />
      <HomeManifesto />
      <PortraitPanel />
      <HomeFeaturedWork />
      <HomeWorldCyber />
      <InstagramSection />
      <HomeContactCta />
    </>
  );
}
