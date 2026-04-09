import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "header";
  narrow?: boolean;
  id?: string;
};

export function SectionShell({
  children,
  className,
  as: Tag = "section",
  narrow = false,
  id,
}: SectionShellProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full px-6 sm:px-10 lg:px-16 xl:px-20",
        narrow ? "max-w-5xl" : "max-w-[1720px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
