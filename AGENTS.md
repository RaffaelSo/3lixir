# 3liksir Fashion Website

## Project Overview

This repository contains a fashion/editorial portfolio website for **3liksir** built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

The site presents curated creative work in a cold, cinematic, magazine-inspired visual language. It is currently a **content-driven frontend project** with no CMS, no backend API, and no live form handling.

## Tech Stack

- Next.js App Router
- React
- TypeScript with `strict` mode
- Tailwind CSS via `@import "tailwindcss"` and `@tailwindcss/postcss`
- Framer Motion for subtle transitions
- `next/font` for typography

## Important Commands

- `npm run dev` starts the local dev server
- `npm run build` creates the production build
- `npm run start` runs the production build
- `npm run lint` runs ESLint

## Project Structure

- `src/app/`: routes, root layout, and global styles
- `src/components/editorial/`: editorial page sections and project presentation components
- `src/components/layout/`: shared layout primitives such as header, footer, and section shells
- `src/components/motion/`: motion wrappers and animated UI helpers
- `src/data/`: locally maintained content data, especially project entries
- `src/types/`: shared TypeScript models for project content
- `src/lib/`: lightweight utility helpers

## Routes

- `/`: homepage with hero, featured projects, manifesto, and CTA
- `/about`: studio/about presentation
- `/projects`: overview of all projects
- `/projects/[slug]`: dynamic project detail pages
- `/contact`: contact page with a non-wired form shell

## Content Model

Project content is defined locally in `src/data/projects.ts`.

Each project follows the `Project` type from `src/types/project.ts` and is rendered as a sequence of editorial blocks:

- `image`
- `pair`
- `statement`

If content changes are requested, they should usually happen in `src/data/projects.ts` first, not by hardcoding values into page components.

## Design And Styling Conventions

- Preserve the **dark, cinematic, editorial** visual direction
- Reuse existing layout and editorial components before introducing new patterns
- Keep pages thin and composition-focused; move reusable UI into `src/components/`
- Prefer existing design tokens and CSS variables from `src/app/globals.css`
- Maintain the typography system based on Inter, Cormorant Garamond, and IBM Plex Mono
- Keep animations understated and premium; avoid noisy or overly playful motion

## Architecture Notes

- The app uses the **Next.js App Router**
- Path alias `@/*` maps to `src/*`
- Remote images are currently configured for `images.unsplash.com` in `next.config.ts`
- The contact form in `src/components/editorial/contact-form-shell.tsx` is currently presentational only
- No automated test setup is currently configured in `package.json`

## Guidance For Cursor Agents

- Treat this project as a **frontend-first brand website**, not as a product dashboard or SaaS app
- Favor small, stylistically consistent changes over broad structural rewrites
- When adding sections, keep the editorial pacing and premium fashion tone intact
- When adding external image sources, update `next.config.ts` accordingly
- Do not introduce CMS, backend, analytics, or form submission logic unless explicitly requested
- If metadata or production readiness is touched, review `metadataBase` in `src/app/layout.tsx`
