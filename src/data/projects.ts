import { Project } from "@/types/project";

const image = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const projects: Project[] = [
  {
    slug: "nocturne-index",
    title: "Nocturne Index",
    year: "2026",
    season: "AW",
    role: "Creative Direction",
    category: "Campaign",
    location: "Paris",
    excerpt:
      "A cold after-hours campaign built around lacquered silhouettes, reflective surfaces, and controlled tension.",
    statement:
      "The frame moves like a whisper: distant, severe, and impossible to ignore.",
    description:
      "Nocturne Index imagines the campaign as an urban ritual of shadow, shine, and calibrated restraint. The imagery is paced like a magazine sequence rather than an ecommerce presentation.",
    heroImage: image("photo-1496747611176-843222e1e57c"),
    heroAlt: "Fashion portrait with dark dramatic styling.",
    mood: "Lacquer, shadow, midnight chrome",
    tags: ["Campaign", "Casting", "Styling", "Direction"],
    featured: true,
    gridClass: "md:col-span-7 md:row-span-2",
    credits: [
      { label: "Client", value: "Maison Oblique" },
      { label: "Photography", value: "Lena Voss" },
      { label: "Styling", value: "Iris Vale" },
      { label: "Beauty", value: "Studio Nera" },
    ],
    blocks: [
      {
        type: "statement",
        text: "A campaign language built from silence, impact, and severe light.",
        note: "Editorial note",
        align: "center",
      },
      {
        type: "image",
        image: image("photo-1496747611176-843222e1e57c", 1800),
        alt: "Model in dark textured outerwear.",
        caption: "Lead silhouette study.",
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: image("photo-1483985988355-763728e1935b", 1200),
            alt: "Fashion pose in urban light.",
          },
          {
            image: image("photo-1515886657613-9f3515b0c78f", 1200),
            alt: "Editorial portrait in cool studio lighting.",
          },
        ],
        caption: "Texture, attitude, and reflective styling studies.",
      },
      {
        type: "image",
        image: image("photo-1529139574466-a303027c1d8b", 1800),
        alt: "Portrait with metallic styling and dark background.",
        caption: "Closing frame for print and motion cover usage.",
        aspect: "portrait",
      },
    ],
  },
  {
    slug: "glass-ritual",
    title: "Glass Ritual",
    year: "2025",
    season: "Resort",
    role: "Visual Identity",
    category: "Editorial",
    location: "Milan",
    excerpt:
      "A crystalline editorial sequence where transparency, pale steel, and sculptural movement become the narrative.",
    statement:
      "The body is treated as architecture: translucent, sharpened, and lit from within.",
    description:
      "Glass Ritual turns minimal garments and reflective set pieces into an exhibition-like image story. Each composition privileges negative space and icy light.",
    heroImage: image("photo-1500917293891-ef795e70e1f6"),
    heroAlt: "Model in pale fashion styling with elegant pose.",
    mood: "Frost, glass, pale steel",
    tags: ["Editorial", "Art Direction", "Identity"],
    featured: true,
    gridClass: "md:col-span-5 md:row-span-1",
    credits: [
      { label: "Publication", value: "Atelier Notes" },
      { label: "Photography", value: "Mara Etienne" },
      { label: "Set Design", value: "Cold Geometry" },
      { label: "Casting", value: "Frame Bureau" },
    ],
    blocks: [
      {
        type: "image",
        image: image("photo-1500917293891-ef795e70e1f6", 1800),
        alt: "Fashion portrait with cool tones and modern silhouette.",
        caption: "Opening spread.",
        aspect: "cinema",
      },
      {
        type: "statement",
        text: "Luxury can feel glacial without losing intimacy.",
        note: "Creative thesis",
        align: "left",
      },
      {
        type: "pair",
        images: [
          {
            image: image("photo-1487412720507-e7ab37603c6f", 1200),
            alt: "Portrait in soft architectural light.",
          },
          {
            image: image("photo-1512436991641-6745cdb1723f", 1200),
            alt: "Editorial close-up with directional styling.",
          },
        ],
        caption: "A study in cool surfaces and softened glamour.",
      },
    ],
  },
  {
    slug: "cold-bloom",
    title: "Cold Bloom",
    year: "2024",
    season: "SS",
    role: "Image Direction",
    category: "Campaign",
    location: "Copenhagen",
    excerpt:
      "Organic forms translated into a restrained spring campaign, balancing fragility with engineered precision.",
    statement:
      "Softness is edited until it feels intelligent.",
    description:
      "Cold Bloom frames spring dressing through mineral palettes, sparse floral references, and elegant distance. The result is atmospheric rather than romantic.",
    heroImage: image("photo-1483985988355-763728e1935b"),
    heroAlt: "Model wearing editorial fashion in urban environment.",
    mood: "Mineral petals, pale concrete, cool bloom",
    tags: ["Campaign", "Lookbook", "Direction"],
    featured: true,
    gridClass: "md:col-span-5 md:row-span-2",
    credits: [
      { label: "Client", value: "Atelier Fracture" },
      { label: "Photography", value: "Soren Vale" },
      { label: "Styling", value: "Mina Roe" },
      { label: "Production", value: "North Unit" },
    ],
    blocks: [
      {
        type: "statement",
        text: "Floral language stripped of sweetness and rebuilt as structure.",
        note: "Season concept",
        align: "center",
      },
      {
        type: "image",
        image: image("photo-1483985988355-763728e1935b", 1800),
        alt: "Full-body fashion image with modern styling.",
        caption: "Campaign opener.",
        aspect: "portrait",
      },
      {
        type: "image",
        image: image("photo-1529139574466-a303027c1d8b", 1800),
        alt: "Woman in refined editorial pose.",
        caption: "Detail of silhouette and mood.",
        aspect: "cinema",
      },
    ],
  },
  {
    slug: "static-saint",
    title: "Static Saint",
    year: "2023",
    season: "FW",
    role: "Styling & Concept",
    category: "Editorial",
    location: "Berlin",
    excerpt:
      "A monochrome editorial exploring sanctity, distortion, and club-light minimalism through a couture lens.",
    statement:
      "The image should feel ceremonial, but never nostalgic.",
    description:
      "Static Saint creates a coded visual language of devotion and disruption. High-contrast portraits sit beside void-like spaces and sharp material studies.",
    heroImage: image("photo-1512436991641-6745cdb1723f"),
    heroAlt: "High-fashion portrait with dark styling.",
    mood: "Monochrome static, ritual black, cobalt ash",
    tags: ["Editorial", "Styling", "Concept"],
    featured: false,
    gridClass: "md:col-span-7 md:row-span-1",
    credits: [
      { label: "Publication", value: "Signal Review" },
      { label: "Photography", value: "Noe Klein" },
      { label: "Hair", value: "Vel Studio" },
      { label: "Makeup", value: "Aster Lab" },
    ],
    blocks: [
      {
        type: "image",
        image: image("photo-1512436991641-6745cdb1723f", 1800),
        alt: "Dark editorial portrait with tailored styling.",
        caption: "Cover treatment.",
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: image("photo-1487412720507-e7ab37603c6f", 1200),
            alt: "Portrait study in grayscale fashion mood.",
          },
          {
            image: image("photo-1496747611176-843222e1e57c", 1200),
            alt: "Model in evening look with dramatic lighting.",
          },
        ],
        caption: "Austere symmetry offset by subtle motion blur.",
      },
      {
        type: "statement",
        text: "Precision is more seductive than excess.",
        note: "Styling principle",
        align: "left",
      },
    ],
  },
  {
    slug: "velvet-circuit",
    title: "Velvet Circuit",
    year: "2022",
    season: "Capsule",
    role: "Creative Lead",
    category: "Brand World",
    location: "London",
    excerpt:
      "A capsule identity built around tactile darkness, polished metal, and a nightlife-adjacent visual language.",
    statement:
      "An atmosphere designed to feel expensive before a logo is even seen.",
    description:
      "Velvet Circuit extends beyond campaign imagery into tone, pacing, and branded environments. The work bridges fashion launch materials with art-direction-led digital presence.",
    heroImage: image("photo-1515886657613-9f3515b0c78f"),
    heroAlt: "Stylish portrait with modern fashion pose.",
    mood: "Velvet black, electric silver, late-night gloss",
    tags: ["Brand World", "Launch", "Campaign"],
    featured: false,
    gridClass: "md:col-span-4 md:row-span-1",
    credits: [
      { label: "Client", value: "Circuit House" },
      { label: "Photography", value: "Vera Nox" },
      { label: "Motion", value: "Frame / Unit" },
      { label: "Digital", value: "Studio 3LIXIR" },
    ],
    blocks: [
      {
        type: "statement",
        text: "The launch environment was conceived like a sequence of stills suspended in motion.",
        note: "Launch framing",
        align: "center",
      },
      {
        type: "image",
        image: image("photo-1515886657613-9f3515b0c78f", 1800),
        alt: "Cinematic fashion portrait.",
        caption: "Primary launch key visual.",
        aspect: "portrait",
      },
      {
        type: "image",
        image: image("photo-1500917293891-ef795e70e1f6", 1800),
        alt: "Cool toned editorial close-up.",
        caption: "Digital identity crop study.",
        aspect: "square",
      },
    ],
  },
  {
    slug: "future-relic",
    title: "Future Relic",
    year: "2021",
    season: "Pre-Collection",
    role: "Concept Development",
    category: "Exhibition",
    location: "Antwerp",
    excerpt:
      "An exhibition-minded presentation where garments are treated as artefacts from a colder future.",
    statement:
      "The styling language treats history as a material, not a reference board.",
    description:
      "Future Relic blends installation logic with editorial sequencing. Objects, garments, and bodies are arranged as though excavated from a speculative archive.",
    heroImage: image("photo-1529139574466-a303027c1d8b"),
    heroAlt: "Minimal fashion portrait with cool background.",
    mood: "Archive silver, museum air, speculative tailoring",
    tags: ["Exhibition", "Installation", "Concept"],
    featured: false,
    gridClass: "md:col-span-8 md:row-span-1",
    credits: [
      { label: "Institution", value: "North Gallery" },
      { label: "Photography", value: "Rhea Cole" },
      { label: "Set Design", value: "Archive Forms" },
      { label: "Producer", value: "M. Delaire" },
    ],
    blocks: [
      {
        type: "image",
        image: image("photo-1529139574466-a303027c1d8b", 1800),
        alt: "Portrait with austere fashion styling.",
        caption: "Exhibition campaign image.",
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: image("photo-1500917293891-ef795e70e1f6", 1200),
            alt: "Pale fashion portrait.",
          },
          {
            image: image("photo-1483985988355-763728e1935b", 1200),
            alt: "Fashion movement study.",
          },
        ],
        caption: "Installation views translated into editorial rhythm.",
      },
      {
        type: "statement",
        text: "A future archive should feel tactile, not digital.",
        note: "Exhibition text",
        align: "left",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(slug: string, limit = 2) {
  return projects.filter((project) => project.slug !== slug).slice(0, limit);
}
