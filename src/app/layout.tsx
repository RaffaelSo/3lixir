import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/motion/page-transition";
import { JsonLdPerson } from "@/components/seo/json-ld-person";
import { defaultLocale } from "@/lib/i18n-config";
import { rootMetadata } from "@/lib/root-metadata";

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

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang={defaultLocale}>
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} bg-background text-foreground antialiased`}
      >
        <JsonLdPerson />
        <div className="relative isolate min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute inset-x-0 top-0 h-[min(70vh,36rem)] bg-[radial-gradient(ellipse_70%_55%_at_50%_-15%,rgba(255,255,255,0.035),transparent_62%)]" />
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
