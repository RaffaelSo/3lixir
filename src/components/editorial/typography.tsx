import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: string;
  className?: string;
};

type StatementProps = {
  children: string;
  className?: string;
};

type MetaListProps = {
  items: Array<{ label: string; value: string }>;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.42em] text-[var(--accent-dim)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Statement({ children, className }: StatementProps) {
  return (
    <p
      className={cn(
        "font-display-editorial text-4xl leading-[0.94] tracking-[-0.045em] text-[var(--foreground)] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.02]",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function MetaList({ items, className }: MetaListProps) {
  return (
    <dl
      className={cn(
        "grid gap-x-10 gap-y-8 border-t border-white/[0.08] pt-10 text-sm text-white/58 sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt className="font-[family-name:var(--font-mono)] mb-2 text-[0.6rem] font-medium uppercase tracking-[0.36em] text-white/32">
            {item.label}
          </dt>
          <dd className="text-[0.95rem] leading-relaxed tracking-[0.01em] text-white/78">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
