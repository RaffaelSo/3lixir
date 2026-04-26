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

/** Distinct world frame to avoid repeating the homepage hero. */
const worldImageSrc = toOptimizedProjectPublicPath(
  "/images/projects/artica/P001.JPEG",
);

const homeContentByLocale = {
  manifesto: {
    eyebrow: localized("Design approach", "Designansatz", "Подход к дизайну"),
    statement: localized(
      "Couture as sculpture - garments as bodies of light, shadow, and movement.",
      "Couture als Skulptur - Kleidungsstücke als Körper aus Licht, Schatten und Bewegung.",
      "Couture как скульптура - одежда как тело из света, тени и движения.",
    ),
    paragraphs: localized(
      [
        "3liksir is a Berlin-based couture fashion designer who treats clothing as artwork - inspired by nature, technology, and futuristic pop culture.",
        "Work develops experimental textiles and silhouettes, combining traditional techniques with sustainable practice, upcycling, and innovative technology toward a bold, future-forward visual language.",
      ],
      [
        "3liksir arbeitet in Berlin an Couture Fashion und begreift Kleidung als künstlerisches Werk: mit Inspiration aus Natur, Technologie und futuristischer Popkultur.",
        "Im Fokus stehen experimentelle Textilien und Silhouetten: traditionelle Techniken, Nachhaltigkeit, Upcycling und innovative Technologien - in einer klar fokussierten, zukunftsgerichteten Bildsprache.",
      ],
      [
        "3liksir - берлинский дизайнер в сфере couture, для которого одежда - произведение искусства: вдохновение в природе, технологиях и футуристичной поп-культуре.",
        "В фокусе - экспериментальные текстили и силуэты: сочетание традиционных приёмов с устойчивыми практиками, upcycling и инновационными технологиями, с яркой, ориентированной на будущее визуальностью.",
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
        "Not nostalgia - a forward grammar for bodies, cameras, and the spaces between them.",
      ],
      [
        "Ein Universum aus Chromdämmerung, ritueller Haltung und Kleidung, die sich wie Architektur verhält.",
        "Keine Nostalgie, sondern eine zukunftsgewandte Grammatik für Körper, Kameras und die Räume dazwischen.",
      ],
      [
        "Вселенная из хромовых сумерек, ритуальной позы и одежды, которая ведёт себя как архитектура.",
        "Это не ностальгия, а новая грамматика для тел, камер и пространства между ними.",
      ],
    ),
    imageAlt: localized(
      "Artica - frozen sculptural world.",
      "Artica - gefrorene skulpturale Welt.",
      "Artica - замороженный скульптурный мир.",
    ),
  },
  contact: {
    eyebrow: localized("Inquiries", "Anfragen", "Запросы"),
    headline: localized(
      "Visibility & updates",
      "Sichtbarkeit & Updates",
      "Видимость и обновления",
    ),
    services: localized(
      [
        "Latest projects and visual updates",
        "Editorial references and process fragments",
        "Worldbuilding direction and image language",
        "Public channels for future announcements",
      ],
      [
        "Aktuelle Projekte und visuelle Updates",
        "Editorial-Referenzen und Prozessfragmente",
        "Worldbuilding-Richtung und Bildsprache",
        "Öffentliche Kanäle für spätere Ankündigungen",
      ],
      [
        "Новые проекты и визуальные обновления",
        "Editorial-референсы и фрагменты процесса",
        "Направление worldbuilding и визуальный язык",
        "Публичные каналы для будущих анонсов",
      ],
    ),
    emailLabel: localized("Email", "E-Mail", "Email"),
    instagramHeading: localized("Instagram", "Instagram", "Instagram"),
    fullContactLabel: localized("Full contact", "Alle Kontakte", "Все контакты"),
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
