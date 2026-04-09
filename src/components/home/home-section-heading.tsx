import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Eyebrow } from "@/components/editorial/typography";

type HomeSectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "split";
  className?: string;
  aside?: ReactNode;
};

export function HomeSectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  aside,
}: HomeSectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 grid gap-10 sm:mb-20 lg:mb-24",
        align === "split" && "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end lg:gap-20",
        className,
      )}
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2
          id={id}
          className="font-display-editorial mt-6 max-w-[22ch] text-[clamp(2rem,5vw,3.75rem)] leading-[0.98] tracking-[-0.04em] text-[var(--foreground)]"
        >
          {title}
        </h2>
      </div>
      {(description || aside) && (
        <div className="flex flex-col gap-8 lg:items-end">
          {description ? (
            <p className="max-w-md text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-white/44 lg:text-right">
              {description}
            </p>
          ) : null}
          {aside}
        </div>
      )}
    </div>
  );
}
