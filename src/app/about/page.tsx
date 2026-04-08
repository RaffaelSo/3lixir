import type { Metadata } from "next";

import { AboutHero } from "@/components/editorial/about-hero";
import { FinalCtaBand } from "@/components/editorial/final-cta-band";
import { PortraitPanel } from "@/components/editorial/portrait-panel";
import { VisionStatement } from "@/components/editorial/vision-statement";

export const metadata: Metadata = {
  title: "About",
  description:
    "Creative positioning, artistic direction, and fashion-world perspective behind 3LIXIR.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionStatement />
      <PortraitPanel />
      <FinalCtaBand />
    </>
  );
}
