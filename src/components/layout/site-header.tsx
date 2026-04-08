"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-700 ease-out",
        (isScrolled || isOpen) &&
          "border-b border-white/[0.07] bg-[#040508d9] backdrop-blur-2xl backdrop-saturate-150",
      )}
    >
      <div className="mx-auto flex max-w-[1720px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16 xl:px-20">
        <Link
          href="/"
          className="font-[family-name:var(--font-mono)] text-[0.68rem] font-medium uppercase tracking-[0.48em] text-[var(--foreground)]"
        >
          3LIXIR
        </Link>

        <nav className="hidden items-center gap-10 md:flex lg:gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-[family-name:var(--font-mono)] relative pb-1 text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/46 transition-colors duration-500 hover:text-white/88",
                isActive(link.href) &&
                  "text-white after:absolute after:inset-x-0 after:-bottom-0 after:h-px after:bg-[var(--accent)]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="link-editorial link-editorial-strong hidden md:inline-flex"
          >
            Inquire
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="font-[family-name:var(--font-mono)] inline-flex text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/55 md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/[0.07] px-6 py-8 sm:px-10 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-2xl tracking-[-0.03em] text-white/58 transition-colors duration-500 hover:text-white",
                  isActive(link.href) && "text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
