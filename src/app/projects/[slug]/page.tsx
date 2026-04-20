import { permanentRedirect } from "next/navigation";

import { visibleProjectSlugs } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return visibleProjectSlugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  permanentRedirect(`/en/projects/${slug}`);
}
