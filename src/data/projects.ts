import { Project } from "@/types/project";
import { toOptimizedProjectPublicPath } from "@/lib/optimized-project-image";

const asset = (slug: string, file: string) =>
  toOptimizedProjectPublicPath(`/images/projects/${slug}/${file}`);

export const projects: Project[] = [
  {
    slug: "cyber-forest",
    title: "Cyber Forest",
    year: "2024",
    season: "Collection",
    role: "Creative Direction",
    category: "Campaign",
    location: "Digital Studio",
    excerpt:
      "A synthetic nature study with high-contrast silhouettes, liquid textures, and speculative styling.",
    statement:
      "A forest imagined through code, armor, and organic distortion.",
    description:
      "Cyber Forest explores a hybrid environment where natural references are re-rendered with digital materiality and editorial pacing.",
    heroImage: asset("cyber-forest", "COVER032.JPEG"),
    heroAlt: "Cyber Forest cover image.",
    mood: "Synthetic nature, polished darkness, future organic",
    tags: ["Campaign", "Direction", "Editorial"],
    featured: true,
    gridClass: "md:col-span-7 md:row-span-2",
    credits: [{ label: "Project", value: "Cyber Forest" }],
    blocks: [
      {
        type: "statement",
        text: "Visual language shaped by speculative ecology and cinematic restraint.",
        note: "Concept",
        align: "center",
      },
      {
        type: "image",
        image: asset("cyber-forest", "001.JPEG"),
        alt: "Cyber Forest still 01.",
        caption: "Opening frame.",
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: asset("cyber-forest", "015.JPEG"),
            alt: "Cyber Forest still 15.",
          },
          {
            image: asset("cyber-forest", "IMG_7190.JPG"),
            alt: "Cyber Forest still IMG_7190.",
          },
        ],
        caption: "Material and silhouette studies.",
      },
    ],
  },
  {
    slug: "cyber-wasteland",
    title: "Cyber Wasteland",
    year: "2025",
    season: "Collection",
    role: "Image Direction",
    category: "Editorial",
    location: "Digital Studio",
    excerpt:
      "A dystopian image world built from metallic light, ash tones, and post-human silhouettes.",
    statement:
      "Fashion as survival language in a synthetic ruin.",
    description:
      "Cyber Wasteland frames darkness and industrial texture as a polished editorial sequence with cinematic depth.",
    heroImage: asset("cyber-wasteland", "COVER791135893.683925public.JPEG"),
    heroAlt: "Cyber Wasteland cover image.",
    mood: "Industrial haze, metallic dusk, controlled decay",
    tags: ["Editorial", "Direction", "Campaign"],
    featured: true,
    gridClass: "md:col-span-5 md:row-span-1",
    credits: [{ label: "Project", value: "Cyber Wasteland" }],
    blocks: [
      {
        type: "image",
        image: asset("cyber-wasteland", "791135891.077076public.JPEG"),
        alt: "Cyber Wasteland still 01.",
        caption: "Opening spread.",
        aspect: "cinema",
      },
      {
        type: "statement",
        text: "Austere frames with high tension and minimal ornament.",
        note: "Creative thesis",
        align: "left",
      },
      {
        type: "pair",
        images: [
          {
            image: asset("cyber-wasteland", "791135892.280560public.JPEG"),
            alt: "Cyber Wasteland still 02.",
          },
          {
            image: asset("cyber-wasteland", "791135893.986964public.JPEG"),
            alt: "Cyber Wasteland still 03.",
          },
        ],
        caption: "Light and texture sequence.",
      },
    ],
  },
  {
    slug: "arctica-3d",
    title: "Arctica 3D",
    year: "2025",
    season: "Concept",
    role: "3D Art Direction",
    category: "Digital Fashion",
    location: "Virtual Set",
    excerpt:
      "A fully synthetic image language combining digital garment forms, scene design, and high-gloss rendering.",
    statement:
      "Rendered worlds can carry couture tension when paced editorially.",
    description:
      "Arctica 3D builds a cinematic world through CGI silhouettes, experimental materials, and frozen atmospheres.",
    heroImage: asset("arctica-3d", "cover.png"),
    heroAlt: "Arctica 3D cover image.",
    mood: "Cryo light, digital fur, reflective void",
    tags: ["3D", "Digital Fashion", "Worldbuilding"],
    featured: true,
    gridClass: "md:col-span-5 md:row-span-2",
    credits: [{ label: "Project", value: "Arctica 3D" }],
    blocks: [
      {
        type: "statement",
        text: "Digital couture with museum-like framing and cold precision.",
        note: "World concept",
        align: "center",
      },
      {
        type: "image",
        image: asset("arctica-3d", "scene-1.png"),
        alt: "Arctica 3D still DEsign 4 final.",
        caption: "Hero scene.",
        aspect: "portrait",
      },
      {
        type: "image",
        image: asset("arctica-3d", "scene-2.png"),
        alt: "Arctica 3D still Furr dress scene.",
        caption: "Material and silhouette study.",
        aspect: "cinema",
      },
    ],
  },
  {
    slug: "artica",
    title: "Artica",
    year: "2025",
    season: "Collection",
    role: "Creative Direction",
    category: "Editorial",
    location: "Studio",
    excerpt:
      "A high-volume editorial narrative balancing stark composition with tactile fashion framing.",
    statement:
      "Precision and repetition shape a coherent visual code.",
    description:
      "Artica explores editorial rhythm at scale, combining structured portrait logic with movement and surface detail.",
    heroImage: asset("artica", "COVER003 2.JPEG"),
    heroAlt: "Artica cover image.",
    mood: "Sharp monochrome, polished edge, architectural posture",
    tags: ["Editorial", "Campaign", "Direction"],
    featured: false,
    gridClass: "md:col-span-7 md:row-span-1",
    credits: [{ label: "Project", value: "Artica" }],
    blocks: [
      {
        type: "image",
        image: asset("artica", "001.JPEG"),
        alt: "Artica still 01.",
        caption: "Opening frame.",
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: asset("artica", "P000.JPEG"),
            alt: "Artica still P000.",
          },
          {
            image: asset("artica", "024.JPEG"),
            alt: "Artica still 024.",
          },
        ],
        caption: "Contrast and silhouette study.",
      },
      {
        type: "statement",
        text: "Discipline in framing creates impact without visual noise.",
        note: "Editorial principle",
        align: "left",
      },
    ],
  },
  {
    slug: "lookbook",
    title: "Lookbook",
    year: "2025",
    season: "Selection",
    role: "Styling & Curation",
    category: "Lookbook",
    location: "Studio",
    excerpt:
      "A curated sequence of looks focused on silhouette, texture, and movement.",
    statement:
      "Each frame is selected for cohesion, pace, and visual clarity.",
    description:
      "The Lookbook distills key images into a clean editorial run designed for quick overview and campaign context.",
    heroImage: asset("lookbook", "COVERShin Jeong Hoon, @sh1nfoto (16).JPEG"),
    heroAlt: "Lookbook cover image.",
    mood: "Editorial sequence, precision styling, visual rhythm",
    tags: ["Lookbook", "Styling", "Selection"],
    featured: false,
    gridClass: "md:col-span-4 md:row-span-1",
    credits: [{ label: "Project", value: "Lookbook" }],
    blocks: [
      {
        type: "statement",
        text: "A compact visual archive with a clean, cinematic reading flow.",
        note: "Selection logic",
        align: "center",
      },
      {
        type: "image",
        image: asset("lookbook", "Shin Jeong Hoon, @sh1nfoto (1).JPEG"),
        alt: "Lookbook still 1.",
        caption: "Opening look.",
        aspect: "portrait",
      },
      {
        type: "image",
        image: asset("lookbook", "Shin Jeong Hoon, @sh1nfoto (12).JPEG"),
        alt: "Lookbook still 12.",
        caption: "Detail frame.",
        aspect: "square",
      },
    ],
  },
];

const visibleProjects = projects.filter(
  (project) => !project.slug.toUpperCase().startsWith("IGNORE"),
);

export const featuredProjects = visibleProjects.filter(
  (project) => project.featured,
);

export function getProjectBySlug(slug: string) {
  return visibleProjects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2) {
  return visibleProjects
    .filter((project) => project.slug !== slug)
    .slice(0, limit);
}
