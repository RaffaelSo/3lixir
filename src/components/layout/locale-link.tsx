"use client";

import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { useSiteLocale } from "@/contexts/site-locale-context";
import type { UISiteLocale } from "@/lib/i18n-config";

type LocaleLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: LinkProps["href"];
  locale?: UISiteLocale;
};

export function LocaleLink({
  href,
  locale,
  ...props
}: LocaleLinkProps) {
  const { locale: activeLocale, localizeHref } = useSiteLocale();

  const resolvedHref =
    typeof href === "string" && href.startsWith("/")
      ? localizeHref(href, locale ?? activeLocale)
      : href;

  return <Link href={resolvedHref} {...props} />;
}
