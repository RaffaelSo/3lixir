import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/motion/page-transition";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://3lixir.example"),
  title: {
    default: "3LIXIR",
    template: "%s | 3LIXIR",
  },
  description:
    "Creative and image direction for fashion campaigns, editorials, and brand worlds — a digital space built like a cold, cinematic magazine sequence.",
  openGraph: {
    title: "3LIXIR",
    description:
      "A curated digital editorial space for avant-garde fashion work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} bg-background text-foreground antialiased`}
      >
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.055),transparent_58%)]" />
            <div className="absolute inset-y-0 right-0 w-[32rem] bg-[radial-gradient(circle,rgba(140,168,205,0.09),transparent_70%)] blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-64 w-[min(80%,48rem)] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(158,182,217,0.06),transparent_70%)] blur-3xl" />
          </div>

          <SiteHeader />

          <PageTransition>
            <main className="relative z-10 pt-[4.75rem] sm:pt-[5.25rem]">{children}</main>
            <SiteFooter />
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
