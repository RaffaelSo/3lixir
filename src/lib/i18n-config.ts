/**
 * Current language strategy:
 * - `en` remains the canonical/SEO default
 * - `de` and `ru` are live in the client-side UI switcher
 * - locale-prefixed routes are canonical (`/[locale]/...`)
 * - legacy unprefixed routes exist only as redirects for compatibility
 */
export const defaultLocale = "en" as const;

/** Non-default UI locales available in the language switcher. */
export const plannedLocales = ["de", "ru"] as const;

export type PlannedLocale = (typeof plannedLocales)[number];

export type SiteLocale = typeof defaultLocale | PlannedLocale;

/** Locales available in the header language control (order matches UI). */
export const siteLocales = [defaultLocale, ...plannedLocales] as const;

export type UISiteLocale = (typeof siteLocales)[number];

/** Open Graph / metadata locale string (not identical to `html lang`). */
export const openGraphLocaleByLocale: Record<UISiteLocale, string> = {
  en: "en_GB",
  de: "de_DE",
  ru: "ru_RU",
};
