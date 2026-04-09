import { cn } from "@/lib/utils";

import type { CreditBlock } from "@/types/home";

type EditorialCreditsListProps = {
  blocks: CreditBlock[];
  className?: string;
};

export function EditorialCreditsList({
  blocks,
  className,
}: EditorialCreditsListProps) {
  return (
    <div className={cn("space-y-16 sm:space-y-20", className)}>
      {blocks.map((block) => (
        <div
          key={block.campaign}
          className="border-t border-white/[0.07] pt-12 first:border-t-0 first:pt-0 sm:pt-16"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="font-display-editorial text-2xl tracking-[-0.04em] text-white sm:text-3xl">
              {block.campaign}
            </h3>
            <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.34em] text-white/28">
              {block.year}
            </p>
          </div>
          <dl className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {block.entries.map((entry) => (
              <div key={`${block.campaign}-${entry.role}`}>
                <dt className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.32em] text-white/30">
                  {entry.role}
                </dt>
                <dd className="mt-2 text-[0.9375rem] tracking-[0.02em] text-white/72">
                  {entry.name}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}
