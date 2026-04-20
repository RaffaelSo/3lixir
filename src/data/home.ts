import { siteConfig } from "@/lib/seo-config";
import { toOptimizedProjectPublicPath } from "@/lib/optimized-project-image";
import type { HomeContent } from "@/types/home";
import type { UISiteLocale } from "@/lib/i18n-config";

type LocalizedValue<T> = Record<UISiteLocale, T>;

const localized = <T>(en: T, de: T, ru: T): LocalizedValue<T> => ({
  en,
  de,
  ru,
});

const pick = <T>(value: LocalizedValue<T>, locale: UISiteLocale): T =>
  value[locale];

/** Same lookbook frame as the homepage hero — local asset, no remote stock. */
const worldImageSrc = toOptimizedProjectPublicPath(
  "/images/projects/lookbook/COVERShin Jeong Hoon, @sh1nfoto (16).JPEG",
);

const homeContentByLocale = {
  manifesto: {
    eyebrow: localized("Brand", "Brand", "Бренд"),
    statement: localized(
      "Couture as sculpture — garments as bodies of light, shadow, and tension.",
      "Couture als Skulptur — Kleidungsstücke als Körper aus Licht, Schatten und Spannung.",
      "Кутюр как скульптура — одежда как тело из света, тени и напряжения.",
    ),
    paragraphs: localized(
      [
        "3liksir is a Berlin studio for couture fashion and experimental design. Work moves between precision tailoring, cyber-informed silhouette, and materials that refuse the ordinary.",
        "The language is sculptural, severe when needed, and always image-first: fewer words, more atmosphere.",
      ],
      [
        "3liksir ist ein Berliner Studio für Couture Fashion und experimentelles Design. Die Arbeit bewegt sich zwischen präzisem Tailoring, cyber-informierter Silhouette und Materialien, die das Gewöhnliche verweigern.",
        "Die Sprache ist skulptural, im richtigen Moment streng und immer bildgeführt: weniger Worte, mehr Atmosphäre.",
      ],
      [
        "3liksir — берлинская студия кутюрной моды и экспериментального дизайна. Работа строится между точным тейлорингом, кибер-силуэтом и материалами, которые отказываются быть обычными.",
        "Этот язык скульптурен, при необходимости строг и всегда строится через образ: меньше слов, больше атмосферы.",
      ],
    ),
  },
  world: {
    eyebrow: localized("World", "Welt", "Мир"),
    headline: localized(
      "Cyber stillness. Sculptural heat.",
      "Cyber-Stille. Skulpturale Hitze.",
      "Кибер-тишина. Скульптурный жар.",
    ),
    lines: localized(
      [
        "A universe built from chrome dusk, ritual posture, and clothes that behave like architecture.",
        "Not nostalgia — a forward grammar for bodies, cameras, and the spaces between them.",
      ],
      [
        "Ein Universum aus Chromdämmerung, ritueller Haltung und Kleidung, die sich wie Architektur verhält.",
        "Keine Nostalgie — sondern eine Vorwärtsgrammatik für Körper, Kameras und die Räume dazwischen.",
      ],
      [
        "Вселенная, собранная из хромовых сумерек, ритуальной позы и одежды, которая ведёт себя как архитектура.",
        "Это не ностальгия, а новая грамматика для тел, камер и пространства между ними.",
      ],
    ),
    imageAlt: localized(
      "Lookbook — sculptural silhouette.",
      "Lookbook — skulpturale Silhouette.",
      "Лукбук — скульптурный силуэт.",
    ),
  },
  contact: {
    eyebrow: localized("Inquiries", "Anfragen", "Запросы"),
    headline: localized(
      "Custom work & collaborations",
      "Maßarbeiten & Kollaborationen",
      "Индивидуальные проекты и коллаборации",
    ),
    services: localized(
      [
        "Couture and experimental pieces",
        "Styling for editorials and campaigns",
        "Creative direction & image",
        "Brand-aligned collaborations",
      ],
      [
        "Couture und experimentelle Pieces",
        "Styling für Editorials und Kampagnen",
        "Creative Direction & Bildsprache",
        "Markengerechte Kollaborationen",
      ],
      [
        "Кутюр и экспериментальные изделия",
        "Стайлинг для эдиториалов и кампаний",
        "Креативное направление и визуальный язык",
        "Коллаборации, точно совпадающие с брендом",
      ],
    ),
    emailLabel: localized("Email", "E-Mail", "Почта"),
    instagramHeading: localized("Instagram", "Instagram", "Instagram"),
    fullContactLabel: localized("Full contact", "Kontakt komplett", "Полный контакт"),
  },
} as const;

export function getHomeContent(locale: UISiteLocale): HomeContent {
  return {
    manifesto: {
      eyebrow: pick(homeContentByLocale.manifesto.eyebrow, locale),
      statement: pick(homeContentByLocale.manifesto.statement, locale),
      paragraphs: pick(homeContentByLocale.manifesto.paragraphs, locale),
    },
    world: {
      eyebrow: pick(homeContentByLocale.world.eyebrow, locale),
      headline: pick(homeContentByLocale.world.headline, locale),
      lines: pick(homeContentByLocale.world.lines, locale),
      image: {
        src: worldImageSrc,
        alt: pick(homeContentByLocale.world.imageAlt, locale),
      },
    },
    contact: {
      eyebrow: pick(homeContentByLocale.contact.eyebrow, locale),
      headline: pick(homeContentByLocale.contact.headline, locale),
      services: pick(homeContentByLocale.contact.services, locale),
      emailLabel: pick(homeContentByLocale.contact.emailLabel, locale),
      instagramHeading: pick(
        homeContentByLocale.contact.instagramHeading,
        locale,
      ),
      fullContactLabel: pick(
        homeContentByLocale.contact.fullContactLabel,
        locale,
      ),
      email: "3liksirdesigns@gmail.com",
      instagramLabel: "@3liksir",
      instagramHref: siteConfig.instagramUrl,
    },
  };
}
