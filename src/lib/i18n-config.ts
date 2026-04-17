/**
 * Language strategy: English is the primary site language (copy, SEO, `html lang`).
 * German and Russian are optional follow-ups — wire routing (e.g. `app/[locale]/…`)
 * and message files when you translate; Cyrillic may need font subset checks.
 */
export const defaultLocale = "en" as const;

/** Locales to add later; not wired into routing yet. */
export const plannedLocales = ["de", "ru"] as const;

export type PlannedLocale = (typeof plannedLocales)[number];

export type SiteLocale = typeof defaultLocale | PlannedLocale;

/** Locales available in the header language control (order matches UI). */
export const siteLocales = [defaultLocale, ...plannedLocales] as const;

export type UISiteLocale = (typeof siteLocales)[number];

/** Open Graph / metadata locale string (not identical to `html lang`). */
export const openGraphLocale = "en_GB" as const;
