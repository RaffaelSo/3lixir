"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { defaultLocale, plannedLocales } from "@/lib/i18n-config";

const options = [defaultLocale, ...plannedLocales] as const;

type LocaleCode = (typeof options)[number];

const labels: Record<LocaleCode, string> = {
  en: "EN",
  de: "DE",
  ru: "RU",
};

type LocaleSwitchMockProps = {
  /** Compact = header bar; full = optional subtitle for “preview” hint */
  variant?: "compact" | "full";
  className?: string;
};

/**
 * Visual-only language control for UI review. Highlights are local state;
 * the site does not switch locale or content yet.
 */
export function LocaleSwitchMock({
  variant = "compact",
  className,
}: LocaleSwitchMockProps) {
  const [active, setActive] = useState<LocaleCode>(defaultLocale);

  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      role="radiogroup"
      aria-label="Language (UI preview — English content only)"
    >
      <div
        className={cn(
          "inline-flex rounded-sm border border-white/[0.1] bg-white/[0.03] p-0.5",
          variant === "full" && "self-start",
        )}
      >
        {options.map((code) => {
          const isOn = active === code;
          return (
            <button
              key={code}
              type="button"
              role="radio"
              aria-checked={isOn}
              onClick={() => setActive(code)}
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
          Preview only — translations not connected
        </p>
      ) : null}
    </div>
  );
}
