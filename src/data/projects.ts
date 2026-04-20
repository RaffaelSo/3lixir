import type { UISiteLocale } from "@/lib/i18n-config";
import { toOptimizedProjectPublicPath } from "@/lib/optimized-project-image";
import { Project } from "@/types/project";

type LocalizedValue<T> = Record<UISiteLocale, T>;

type LocalizedProjectImage = {
  image: string;
  alt: LocalizedValue<string>;
};

type LocalizedProjectBlock =
  | {
      type: "image";
      image: string;
      alt: LocalizedValue<string>;
      caption?: LocalizedValue<string>;
      aspect?: "portrait" | "landscape" | "cinema" | "square";
    }
  | {
      type: "pair";
      images: [LocalizedProjectImage, LocalizedProjectImage];
      caption?: LocalizedValue<string>;
    }
  | {
      type: "statement";
      text: LocalizedValue<string>;
      note?: LocalizedValue<string>;
      align?: "left" | "center";
    };

type LocalizedProjectRecord = {
  slug: string;
  year: string;
  featured: boolean;
  gridClass: string;
  heroImage: string;
  heroAlt: LocalizedValue<string>;
  title: LocalizedValue<string>;
  season: LocalizedValue<string>;
  role: LocalizedValue<string>;
  category: LocalizedValue<string>;
  location: LocalizedValue<string>;
  excerpt: LocalizedValue<string>;
  statement: LocalizedValue<string>;
  description: LocalizedValue<string>;
  mood: LocalizedValue<string>;
  tags: LocalizedValue<string[]>;
  creditsLabel: LocalizedValue<string>;
  blocks: LocalizedProjectBlock[];
};

const localized = <T>(en: T, de: T, ru: T): LocalizedValue<T> => ({
  en,
  de,
  ru,
});

const pick = <T>(value: LocalizedValue<T>, locale: UISiteLocale): T =>
  value[locale];

const asset = (slug: string, file: string) =>
  toOptimizedProjectPublicPath(`/images/projects/${slug}/${file}`);

const projectRecords: LocalizedProjectRecord[] = [
  {
    slug: "cyber-forest",
    year: "2024",
    featured: true,
    gridClass: "md:col-span-7 md:row-span-2",
    heroImage: asset("cyber-forest", "COVER032.JPEG"),
    heroAlt: localized(
      "Cyber Forest cover image.",
      "Cyber-Forest-Coverbild.",
      "Обложка проекта Cyber Forest.",
    ),
    title: localized("Cyber Forest", "Cyber Forest", "Cyber Forest"),
    season: localized("Collection", "Kollektion", "Коллекция"),
    role: localized(
      "Creative Direction",
      "Creative Direction",
      "Creative direction",
    ),
    category: localized("Campaign", "Kampagne", "Campaign"),
    location: localized("Digital Studio", "Digital Studio", "Digital Studio"),
    excerpt: localized(
      "A synthetic nature study with high-contrast silhouettes, liquid textures, and speculative styling.",
      "Eine synthetische Naturstudie mit kontrastreichen Silhouetten, flüssigen Texturen und spekulativem Styling.",
      "Синтетическое исследование природы с контрастными силуэтами, текучими текстурами и спекулятивным стайлингом.",
    ),
    statement: localized(
      "A forest imagined through code, armor, and organic distortion.",
      "Ein Wald, gedacht durch Code, Rüstung und organische Verzerrung.",
      "Лес, собранный из кода, брони и органической деформации.",
    ),
    description: localized(
      "Cyber Forest explores a hybrid environment where natural references are re-rendered with digital materiality and editorial pacing.",
      "Cyber Forest untersucht eine hybride Umgebung, in der natürliche Referenzen mit digitaler Materialität und Editorial-Rhythmus neu gerendert werden.",
      "Cyber Forest исследует гибридную среду, где природные отсылки пересобраны через цифровую материальность и editorial-ритм.",
    ),
    mood: localized(
      "Synthetic nature, polished darkness, future organic",
      "Synthetische Natur, polierte Dunkelheit, organische Zukunft",
      "Синтетическая природа, отполированная тьма, органическое будущее",
    ),
    tags: localized(
      ["Campaign", "Direction", "Editorial"],
      ["Campaign", "Direction", "Editorial"],
      ["Campaign", "Direction", "Editorial"],
    ),
    creditsLabel: localized("Project", "Projekt", "Проект"),
    blocks: [
      {
        type: "statement",
        text: localized(
          "Visual language shaped by speculative ecology and cinematic restraint.",
          "Eine visuelle Sprache, geformt durch spekulative Ökologie und filmische Zurückhaltung.",
          "Визуальный язык, сформированный спекулятивной экологией и кинематографической сдержанностью.",
        ),
        note: localized("Concept", "Konzept", "Концепт"),
        align: "center",
      },
      {
        type: "image",
        image: asset("cyber-forest", "001.JPEG"),
        alt: localized(
          "Cyber Forest still 01.",
          "Cyber Forest Still 01.",
          "Кадр Cyber Forest 01.",
        ),
        caption: localized("Opening frame.", "Eröffnungsbild.", "Открывающий кадр."),
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: asset("cyber-forest", "015.JPEG"),
            alt: localized(
              "Cyber Forest still 15.",
              "Cyber Forest Still 15.",
              "Кадр Cyber Forest 15.",
            ),
          },
          {
            image: asset("cyber-forest", "IMG_7190.JPG"),
            alt: localized(
              "Cyber Forest still IMG_7190.",
              "Cyber Forest Still IMG_7190.",
              "Кадр Cyber Forest IMG_7190.",
            ),
          },
        ],
        caption: localized(
          "Material and silhouette studies.",
          "Material- und Silhouettenstudien.",
          "Исследования материала и силуэта.",
        ),
      },
    ],
  },
  {
    slug: "cyber-wasteland",
    year: "2025",
    featured: true,
    gridClass: "md:col-span-5 md:row-span-1",
    heroImage: asset("cyber-wasteland", "COVER791135893.683925public.JPEG"),
    heroAlt: localized(
      "Cyber Wasteland cover image.",
      "Cyber-Wasteland-Coverbild.",
      "Обложка проекта Cyber Wasteland.",
    ),
    title: localized("Cyber Wasteland", "Cyber Wasteland", "Cyber Wasteland"),
    season: localized("Collection", "Kollektion", "Коллекция"),
    role: localized("Image Direction", "Image Direction", "Image direction"),
    category: localized("Editorial", "Editorial", "Editorial"),
    location: localized("Digital Studio", "Digital Studio", "Digital Studio"),
    excerpt: localized(
      "A dystopian image world built from metallic light, ash tones, and post-human silhouettes.",
      "Eine dystopische Bildwelt aus metallischem Licht, Aschetönen und posthumanen Silhouetten.",
      "Дистопический визуальный мир из металлического света, пепельных тонов и постчеловеческих силуэтов.",
    ),
    statement: localized(
      "Fashion as survival language in a synthetic ruin.",
      "Mode als Sprache des Überlebens in einer synthetischen Ruine.",
      "Мода как язык выживания в синтетических руинах.",
    ),
    description: localized(
      "Cyber Wasteland frames darkness and industrial texture as a polished editorial sequence with cinematic depth.",
      "Cyber Wasteland inszeniert Dunkelheit und industrielle Textur als polierte Editorial-Sequenz mit filmischer Tiefe.",
      "Cyber Wasteland подаёт тьму и индустриальную фактуру как выстроенную editorial-последовательность с кинематографической глубиной.",
    ),
    mood: localized(
      "Industrial haze, metallic dusk, controlled decay",
      "Industrieller Dunst, metallische Dämmerung, kontrollierter Verfall",
      "Индустриальная дымка, металлические сумерки, контролируемый распад",
    ),
    tags: localized(
      ["Editorial", "Direction", "Campaign"],
      ["Editorial", "Direction", "Campaign"],
      ["Editorial", "Direction", "Campaign"],
    ),
    creditsLabel: localized("Project", "Projekt", "Проект"),
    blocks: [
      {
        type: "image",
        image: asset("cyber-wasteland", "791135891.077076public.JPEG"),
        alt: localized(
          "Cyber Wasteland still 01.",
          "Cyber Wasteland Still 01.",
          "Кадр Cyber Wasteland 01.",
        ),
        caption: localized("Opening spread.", "Auftakt-Doppelseite.", "Открывающий разворот."),
        aspect: "cinema",
      },
      {
        type: "statement",
        text: localized(
          "Austere frames with high tension and minimal ornament.",
          "Strenge Bilder mit hoher Spannung und minimalem Ornament.",
          "Суровые кадры с высоким напряжением и минимумом декора.",
        ),
        note: localized("Creative thesis", "Kreative These", "Креативный тезис"),
        align: "left",
      },
      {
        type: "pair",
        images: [
          {
            image: asset("cyber-wasteland", "791135892.280560public.JPEG"),
            alt: localized(
              "Cyber Wasteland still 02.",
              "Cyber Wasteland Still 02.",
              "Кадр Cyber Wasteland 02.",
            ),
          },
          {
            image: asset("cyber-wasteland", "791135893.986964public.JPEG"),
            alt: localized(
              "Cyber Wasteland still 03.",
              "Cyber Wasteland Still 03.",
              "Кадр Cyber Wasteland 03.",
            ),
          },
        ],
        caption: localized(
          "Light and texture sequence.",
          "Licht- und Textursequenz.",
          "Последовательность света и фактуры.",
        ),
      },
    ],
  },
  {
    slug: "arctica-3d",
    year: "2025",
    featured: true,
    gridClass: "md:col-span-5 md:row-span-2",
    heroImage: asset("arctica-3d", "cover.png"),
    heroAlt: localized(
      "Arctica 3D cover image.",
      "Arctica-3D-Coverbild.",
      "Обложка проекта Arctica 3D.",
    ),
    title: localized("Arctica 3D", "Arctica 3D", "Arctica 3D"),
    season: localized("Concept", "Konzept", "Концепт"),
    role: localized("3D Art Direction", "3D Art Direction", "3D art direction"),
    category: localized("Digital Fashion", "Digital Fashion", "Digital fashion"),
    location: localized("Virtual Set", "Virtuelles Set", "Виртуальная сцена"),
    excerpt: localized(
      "A fully synthetic image language combining digital garment forms, scene design, and high-gloss rendering.",
      "Eine vollständig synthetische Bildsprache aus digitalen Kleidungsformen, Szenendesign und hochglänzendem Rendering.",
      "Полностью синтетический визуальный язык из цифровой формы одежды, сценографии и глянцевого рендера.",
    ),
    statement: localized(
      "Rendered worlds can carry couture tension when paced editorially.",
      "Gerenderte Welten können Couture-Spannung tragen, wenn sie editorial inszeniert werden.",
      "Рендер-миры способны нести couture-напряжение, если выстроены в editorial-ритме.",
    ),
    description: localized(
      "Arctica 3D builds a cinematic world through CGI silhouettes, experimental materials, and frozen atmospheres.",
      "Arctica 3D baut eine filmische Welt aus CGI-Silhouetten, experimentellen Materialien und eingefrorenen Atmosphären.",
      "Arctica 3D строит кинематографичный мир через CGI-силуэты, экспериментальные материалы и замороженные атмосферы.",
    ),
    mood: localized(
      "Cryo light, digital fur, reflective void",
      "Kryolicht, digitales Fell, reflektierende Leere",
      "Крио-свет, цифровой мех, отражающая пустота",
    ),
    tags: localized(
      ["3D", "Digital Fashion", "Worldbuilding"],
      ["3D", "Digital Fashion", "Worldbuilding"],
      ["3D", "Digital fashion", "Worldbuilding"],
    ),
    creditsLabel: localized("Project", "Projekt", "Проект"),
    blocks: [
      {
        type: "statement",
        text: localized(
          "Digital couture with museum-like framing and cold precision.",
          "Digitale Couture mit musealer Rahmung und kalter Präzision.",
          "Цифровой кутюр с музейной рамкой и холодной точностью.",
        ),
        note: localized("World concept", "Weltkonzept", "Концепция мира"),
        align: "center",
      },
      {
        type: "image",
        image: asset("arctica-3d", "scene-1.png"),
        alt: localized(
          "Arctica 3D still scene 1.",
          "Arctica-3D-Still Szene 1.",
          "Кадр Arctica 3D сцена 1.",
        ),
        caption: localized("Hero scene.", "Hero-Szene.", "Главная сцена."),
        aspect: "portrait",
      },
      {
        type: "image",
        image: asset("arctica-3d", "scene-2.png"),
        alt: localized(
          "Arctica 3D still scene 2.",
          "Arctica-3D-Still Szene 2.",
          "Кадр Arctica 3D сцена 2.",
        ),
        caption: localized(
          "Material and silhouette study.",
          "Material- und Silhouettenstudie.",
          "Исследование материала и силуэта.",
        ),
        aspect: "cinema",
      },
    ],
  },
  {
    slug: "artica",
    year: "2025",
    featured: false,
    gridClass: "md:col-span-7 md:row-span-1",
    heroImage: asset("artica", "COVER003 2.JPEG"),
    heroAlt: localized(
      "Artica cover image.",
      "Artica-Coverbild.",
      "Обложка проекта Artica.",
    ),
    title: localized("Artica", "Artica", "Artica"),
    season: localized("Collection", "Kollektion", "Коллекция"),
    role: localized(
      "Creative Direction",
      "Creative Direction",
      "Creative direction",
    ),
    category: localized("Editorial", "Editorial", "Editorial"),
    location: localized("Studio", "Studio", "Студия"),
    excerpt: localized(
      "A high-volume editorial narrative balancing stark composition with tactile fashion framing.",
      "Ein umfangreiches Editorial-Narrativ, das strenge Komposition mit sinnlichem Fashion-Styling ausbalanciert.",
      "Масштабный editorial-нарратив, балансирующий строгую композицию и тактильную fashion-подачу.",
    ),
    statement: localized(
      "Precision and repetition shape a coherent visual code.",
      "Präzision und Wiederholung formen einen kohärenten visuellen Code.",
      "Точность и повторение формируют цельный визуальный код.",
    ),
    description: localized(
      "Artica explores editorial rhythm at scale, combining structured portrait logic with movement and surface detail.",
      "Artica untersucht Editorial-Rhythmus im großen Maßstab und verbindet strukturierte Porträtlogik mit Bewegung und Oberflächendetail.",
      "Artica исследует editorial-ритм в крупном масштабе, соединяя портретную структуру с движением и деталью поверхности.",
    ),
    mood: localized(
      "Sharp monochrome, polished edge, architectural posture",
      "Scharfes Monochrom, polierte Kante, architektonische Haltung",
      "Резкий монохром, отполированный край, архитектурная поза",
    ),
    tags: localized(
      ["Editorial", "Campaign", "Direction"],
      ["Editorial", "Campaign", "Direction"],
      ["Editorial", "Campaign", "Direction"],
    ),
    creditsLabel: localized("Project", "Projekt", "Проект"),
    blocks: [
      {
        type: "image",
        image: asset("artica", "001.JPEG"),
        alt: localized("Artica still 01.", "Artica Still 01.", "Кадр Artica 01."),
        caption: localized("Opening frame.", "Eröffnungsbild.", "Открывающий кадр."),
        aspect: "cinema",
      },
      {
        type: "pair",
        images: [
          {
            image: asset("artica", "P000.JPEG"),
            alt: localized("Artica still P000.", "Artica Still P000.", "Кадр Artica P000."),
          },
          {
            image: asset("artica", "024.JPEG"),
            alt: localized("Artica still 024.", "Artica Still 024.", "Кадр Artica 024."),
          },
        ],
        caption: localized(
          "Contrast and silhouette study.",
          "Kontrast- und Silhouettenstudie.",
          "Исследование контраста и силуэта.",
        ),
      },
      {
        type: "statement",
        text: localized(
          "Discipline in framing creates impact without visual noise.",
          "Disziplin im Bildausschnitt erzeugt Wirkung ohne visuelles Rauschen.",
          "Дисциплина в кадрировании создаёт эффект без визуального шума.",
        ),
        note: localized(
          "Editorial principle",
          "Editorial-Prinzip",
          "Редакционный принцип",
        ),
        align: "left",
      },
    ],
  },
  {
    slug: "lookbook",
    year: "2025",
    featured: false,
    gridClass: "md:col-span-4 md:row-span-1",
    heroImage: asset("lookbook", "COVERShin Jeong Hoon, @sh1nfoto (16).JPEG"),
    heroAlt: localized(
      "Lookbook cover image.",
      "Lookbook-Coverbild.",
      "Обложка лукбука.",
    ),
    title: localized("Lookbook", "Lookbook", "Lookbook"),
    season: localized("Selection", "Selection", "Selection"),
    role: localized("Styling & Curation", "Styling & Kuration", "Styling & curation"),
    category: localized("Lookbook", "Lookbook", "Lookbook"),
    location: localized("Studio", "Studio", "Studio"),
    excerpt: localized(
      "A curated sequence of looks focused on silhouette, texture, and movement.",
      "Eine kuratierte Sequenz von Looks mit Fokus auf Silhouette, Textur und Bewegung.",
      "Кураторская последовательность looks с фокусом на силуэт, фактуру и движение.",
    ),
    statement: localized(
      "Each frame is selected for cohesion, pace, and visual clarity.",
      "Jedes Bild ist nach Kohärenz, Rhythmus und visueller Klarheit ausgewählt.",
      "Каждый кадр отобран по цельности, темпу и визуальной ясности.",
    ),
    description: localized(
      "The Lookbook distills key images into a clean editorial run designed for quick overview and campaign context.",
      "Das Lookbook verdichtet Schlüsselmotive zu einer klaren Editorial-Sequenz für schnellen Überblick und Kampagnenkontext.",
      "Lookbook собирает ключевые изображения в чистую editorial-последовательность для быстрого обзора и контекста кампании.",
    ),
    mood: localized(
      "Editorial sequence, precision styling, visual rhythm",
      "Editorial-Sequenz, präzises Styling, visueller Rhythmus",
      "Editorial-последовательность, точный styling, визуальный ритм",
    ),
    tags: localized(
      ["Lookbook", "Styling", "Selection"],
      ["Lookbook", "Styling", "Selection"],
      ["Lookbook", "Styling", "Selection"],
    ),
    creditsLabel: localized("Project", "Projekt", "Проект"),
    blocks: [
      {
        type: "statement",
        text: localized(
          "A compact visual archive with a clean, cinematic reading flow.",
          "Ein kompaktes visuelles Archiv mit sauberem, filmischem Lesefluss.",
          "Компактный визуальный архив с чистым кинематографичным ритмом просмотра.",
        ),
        note: localized("Selection logic", "Auswahllogik", "Логика отбора"),
        align: "center",
      },
      {
        type: "image",
        image: asset("lookbook", "Shin Jeong Hoon, @sh1nfoto (1).JPEG"),
        alt: localized("Lookbook still 1.", "Lookbook Still 1.", "Кадр лукбука 1."),
        caption: localized("Opening look.", "Erster Look.", "Открывающий образ."),
        aspect: "portrait",
      },
      {
        type: "image",
        image: asset("lookbook", "Shin Jeong Hoon, @sh1nfoto (12).JPEG"),
        alt: localized("Lookbook still 12.", "Lookbook Still 12.", "Кадр лукбука 12."),
        caption: localized("Detail frame.", "Detailbild.", "Кадр с деталью."),
        aspect: "square",
      },
    ],
  },
];

const visibleProjectRecords = projectRecords.filter(
  (project) => !project.slug.toUpperCase().startsWith("IGNORE"),
);

function resolveProject(
  record: LocalizedProjectRecord,
  locale: UISiteLocale,
): Project {
  return {
    slug: record.slug,
    title: pick(record.title, locale),
    year: record.year,
    season: pick(record.season, locale),
    role: pick(record.role, locale),
    category: pick(record.category, locale),
    location: pick(record.location, locale),
    excerpt: pick(record.excerpt, locale),
    statement: pick(record.statement, locale),
    description: pick(record.description, locale),
    heroImage: record.heroImage,
    heroAlt: pick(record.heroAlt, locale),
    mood: pick(record.mood, locale),
    tags: pick(record.tags, locale),
    featured: record.featured,
    gridClass: record.gridClass,
    credits: [
      {
        label: pick(record.creditsLabel, locale),
        value: pick(record.title, locale),
      },
    ],
    blocks: record.blocks.map((block) => {
      if (block.type === "statement") {
        return {
          type: "statement",
          text: pick(block.text, locale),
          note: block.note ? pick(block.note, locale) : undefined,
          align: block.align,
        };
      }

      if (block.type === "pair") {
        return {
          type: "pair",
          images: block.images.map((image) => ({
            image: image.image,
            alt: pick(image.alt, locale),
          })) as [
            { image: string; alt: string },
            { image: string; alt: string },
          ],
          caption: block.caption ? pick(block.caption, locale) : undefined,
        };
      }

      return {
        type: "image",
        image: block.image,
        alt: pick(block.alt, locale),
        caption: block.caption ? pick(block.caption, locale) : undefined,
        aspect: block.aspect,
      };
    }),
  };
}

export const visibleProjectSlugs = visibleProjectRecords.map(
  (project) => project.slug,
);

export function getVisibleProjects(locale: UISiteLocale): Project[] {
  return visibleProjectRecords.map((project) => resolveProject(project, locale));
}

export function getFeaturedProjects(locale: UISiteLocale): Project[] {
  return getVisibleProjects(locale).filter((project) => project.featured);
}

export function getProjectBySlug(
  slug: string,
  locale: UISiteLocale,
): Project | undefined {
  const record = visibleProjectRecords.find((project) => project.slug === slug);
  return record ? resolveProject(record, locale) : undefined;
}

export function getRelatedProjects(
  slug: string,
  locale: UISiteLocale,
  limit = 2,
): Project[] {
  return getVisibleProjects(locale)
    .filter((project) => project.slug !== slug)
    .slice(0, limit);
}
