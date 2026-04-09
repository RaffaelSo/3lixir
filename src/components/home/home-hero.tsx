import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/motion/reveal";

const tagline =
  "Berlin-based couture fashion / experimental design / styling";

export function HomeHero() {
  return (
    <header
      className="relative -mt-[4.75rem] min-h-[100svh] pt-[4.75rem] sm:-mt-[5.25rem] sm:pt-[5.25rem]"
      aria-label="3liksir — introduction"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=2000&q=82"
          alt="Editorial fashion portrait with dramatic light and sculptural silhouette."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_22%] saturate-[0.88]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,6,0.5)_0%,rgba(4,5,10,0.72)_45%,rgba(3,4,8,0.94)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_100%,rgba(0,0,0,0.55),transparent_55%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-[1720px] flex-col justify-end px-6 pb-14 pt-24 sm:min-h-[calc(100svh-5.25rem)] sm:px-10 sm:pb-20 lg:px-16 xl:px-20">
        <Reveal className="max-w-[min(100%,56rem)]">
          <p className="font-[family-name:var(--font-mono)] text-[0.58rem] font-medium uppercase tracking-[0.48em] text-white/38">
            Couture · Berlin
          </p>
          <h1 className="font-display-editorial mt-8 text-[clamp(3.25rem,14vw,9.5rem)] leading-[0.88] tracking-[-0.055em] text-white">
            3liksir
          </h1>
          <p className="mt-10 max-w-xl font-[family-name:var(--font-mono)] text-[0.65rem] font-medium uppercase leading-[1.85] tracking-[0.22em] text-white/52 sm:text-[0.68rem] sm:tracking-[0.26em]">
            {tagline}
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:mt-20 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link
              href="/projects"
              className="inline-flex w-fit items-center border border-white/[0.14] bg-white/[0.04] px-8 py-4 font-[family-name:var(--font-mono)] text-[0.62rem] font-medium uppercase tracking-[0.32em] text-white transition-[background,border-color] duration-500 hover:border-white/25 hover:bg-white/[0.07]"
            >
              View work
            </Link>
            <Link href="#contact" className="link-editorial w-fit py-1">
              Contact / collaborate
            </Link>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
