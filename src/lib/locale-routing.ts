import {
  defaultLocale,
  siteLocales,
  type UISiteLocale,
} from "@/lib/i18n-config";

export function isSiteLocale(value: string | null | undefined): value is UISiteLocale {
  return Boolean(value && siteLocales.includes(value as UISiteLocale));
}

export function getLocaleFromPathname(pathname: string | null | undefined): UISiteLocale | null {
  if (!pathname) return null;
  const segment = pathname.split("/").filter(Boolean)[0];
  return isSiteLocale(segment) ? segment : null;
}

export function stripLocaleFromPathname(pathname: string | null | undefined): string {
  if (!pathname) return "/";
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return "/";
  if (isSiteLocale(segments[0])) {
    const remainder = segments.slice(1).join("/");
    return remainder ? `/${remainder}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

function splitPathSuffix(path: string): { pathOnly: string; suffix: string } {
  const match = path.match(/^([^?#]*)(.*)$/);
  if (!match) {
    return { pathOnly: path, suffix: "" };
  }
  return {
    pathOnly: match[1] || "/",
    suffix: match[2] || "",
  };
}

export function localizePath(path: string, locale: UISiteLocale): string {
  if (!path.startsWith("/")) return path;

  const { pathOnly, suffix } = splitPathSuffix(path);
  const normalized = stripLocaleFromPathname(pathOnly);
  const localizedPath = normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;

  return `${localizedPath}${suffix}`;
}

export function getDefaultLocalizedPath(path: string): string {
  return localizePath(path, defaultLocale);
}
