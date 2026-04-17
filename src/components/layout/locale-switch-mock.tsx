"use client";

import { cn } from "@/lib/utils";

import { useSiteLocale } from "@/contexts/site-locale-context";
import { siteLocales, type UISiteLocale } from "@/lib/i18n-config";

const labels: Record<UISiteLocale, string> = {
  en: "EN",
  de: "DE",
  ru: "RU",
};

const ariaLabels: Record<UISiteLocale, string> = {
  en: "Language",
  de: "Sprache",
  ru: "Language",
};

type LocaleSwitchMockProps = {
  /** Compact = header bar; full = optional subtitle for “preview” hint */
  variant?: "compact" | "full";
  className?: string;
};

/**
 * Switches UI language for shared chrome (footer legal links, `html lang`).
 * Page copy remains English-first; German legal pages stay available under /impressum and /datenschutz.
 */
export function LocaleSwitchMock({
  variant = "compact",
  className,
}: LocaleSwitchMockProps) {
  const { locale: active, setLocale } = useSiteLocale();

  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      role="radiogroup"
      aria-label={ariaLabels[active]}
    >
      <div
        className={cn(
          "inline-flex rounded-sm border border-white/[0.1] bg-white/[0.03] p-0.5",
          variant === "full" && "self-start",
        )}
      >
        {siteLocales.map((code) => {
          const isOn = active === code;
          return (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={isOn}
              onClick={() => setLocale(code)}
              className={cn(
                "min-w-[2.25rem] px-2 py-1.5 font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.22em] transition-[color,background] duration-300",
                isOn
                  ? "bg-white/[0.09] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "text-white/38 hover:text-white/55",
              )}
            >
              {labels[code]}
            </button>
          );
        })}
      </div>
      {variant === "full" ? (
        <p className="font-[family-name:var(--font-mono)] text-[0.52rem] uppercase tracking-[0.2em] text-white/28">
          {active === "de"
            ? "Rechtstexte: DE unter Impressum / Datenschutz"
            : "Legal (EN): Imprint / Privacy — DE versions linked on those pages"}
        </p>
      ) : null}
    </div>
  );
}
