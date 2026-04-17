import { HomeContactCta } from "@/components/home/home-contact-cta";
import { HomeFeaturedWork } from "@/components/home/home-featured-work";
import { HomeHero } from "@/components/home/home-hero";
import { HomeManifesto } from "@/components/home/home-manifesto";
import { HomeWorldCyber } from "@/components/home/home-world-cyber";
import { InstagramSection } from "@/components/home/instagram-section";
import { homeContent } from "@/data/home";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeManifesto content={homeContent.manifesto} />
      <HomeFeaturedWork projects={featuredProjects} />
      <HomeWorldCyber content={homeContent.world} />
      <InstagramSection />
      <HomeContactCta content={homeContent.contact} />
    </>
  );
}
