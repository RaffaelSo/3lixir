import { FinalCtaBand } from "@/components/editorial/final-cta-band";
import { FeaturedProjectsRail } from "@/components/editorial/featured-projects-rail";
import { HeroEditorial } from "@/components/editorial/hero-editorial";
import { ImageStatementSplit } from "@/components/editorial/image-statement-split";
import { ManifestoSection } from "@/components/editorial/manifesto-section";
import { featuredProjects, projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <HeroEditorial project={featuredProjects[0]} />
      <FeaturedProjectsRail projects={featuredProjects} />
      <ManifestoSection />
      <ImageStatementSplit project={projects[3]} />
      <FinalCtaBand />
    </>
  );
}
