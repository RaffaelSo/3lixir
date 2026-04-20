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
      "Couture как скульптура — одежда как тело из света, тени и напряжения.",
    ),
    paragraphs: localized(
      [
        "3liksir is a Berlin studio for couture fashion and experimental design. Work moves between precision tailoring, cyber-informed silhouette, and materials that refuse the ordinary.",
        "The language is sculptural, severe when needed, and always image-first: fewer words, more atmosphere.",
      ],
      [
        "3liksir ist ein Berliner Studio für Couture Fashion und experimentelles Design. Die Arbeit bewegt sich zwischen präzisem Tailoring, cyber-geprägten Silhouetten und Materialien abseits des Gewöhnlichen.",
        "Die Sprache ist skulptural, dort streng, wo es nötig ist, und immer bildzentriert: weniger Worte, mehr Atmosphäre.",
      ],
      [
        "3liksir — берлинская студия couture-моды и экспериментального дизайна. Работа строится на точном tailoring, кибер-силуэтах и материалах, выходящих за рамки привычного.",
        "Язык скульптурный, строгий там, где это нужно, и всегда выстроен вокруг образа: меньше слов, больше атмосферы.",
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
        "Keine Nostalgie, sondern eine zukunftsgewandte Grammatik für Körper, Kameras und die Räume dazwischen.",
      ],
      [
        "Вселенная из хромовых сумерек, ритуальной позы и одежды, которая ведёт себя как архитектура.",
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
