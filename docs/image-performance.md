# Image Performance Framework

## Summary

This project previously suffered from oversized image transfers due to:

- unbounded `sizes` (e.g. `100vw` on capped layouts)
- large source assets (PNG/JPEG)
- suboptimal loading patterns (priority, concurrency)

The issue has been resolved using a two-phase approach.

---

## Core Principle

The browser selects image size based on `sizes`, not actual DOM width.

Mismatch between declared and real layout width leads to overfetch.

---

## Root Cause

- `sizes` too optimistic → browser selected up to `3840w` (Next.js default `deviceSizes` include very large widths)
- images rendered ~1720px wide (see `SectionShell` `max-w-[1720px]`) → unnecessary transfer
- large source files amplified worst-case payload

---

## Highest Impact Fix

Hero and other full-width images inside the bounded layout should cap the described width at the same order of magnitude as the content shell:

```tsx
sizes="(min-width: 1720px) 1720px, 100vw"
```

Smaller viewports keep `100vw` where the hero is truly full-bleed. Adjust the breakpoint if the layout max width changes.

---

## Phase 1 — Delivery optimization

Implemented in UI components (no asset changes):

| Area | Change |
|------|--------|
| Bounded layouts | `sizes` aligned with ~1720px max content width where appropriate |
| Project grid (`/projects`) | `xl` three-column layout: ~`33vw` instead of overstating as `50vw` |
| `priority` | Single likely LCP image per route (e.g. first card on `/projects`) |
| `ProjectFolderGallery` | Reduced initial batch size (lower parallel image concurrency) |
| Heroes | `home-hero`, `project-hero`, and `hero-editorial` use the bounded hero `sizes` pattern |

**Why it matters:** `next/image` passes `sizes` to the browser’s `srcset` selection. Correct `sizes` reduces chosen width and avoids requesting multi‑megabyte derivatives for on-screen pixels.

---

## Phase 2 — Asset optimization

- Optimized WebP outputs live under **`public/images/projects-optimized/`** (produced by the local pipeline script).
- Runtime URLs map from legacy **`/images/projects/...`** semantics to optimized paths via **`src/lib/optimized-project-image.ts`** (`toOptimizedProjectPublicPath`).
- **`scripts/generate-project-images-manifest.mjs`** regenerates **`src/data/project-images.ts`** on build (`prebuild`), emitting **`/images/projects-optimized/...webp`** URLs with the same **basename collision rules** as the Phase 2 optimizer (e.g. duplicate basename `.JPEG` / `.JPG` → `*.webp` vs `*.jpg.webp`).

**Why it matters:** Smaller sources reduce bytes, decode cost, and image optimizer work; URLs must stay aligned with files on disk.

---

## Definition of Done

- No **sole** unbounded `100vw` for images in **capped** layouts; heroes use a **1720px** cap where the shell caps content.
- **At most one** `priority` image per route where LCP is image-driven (unless explicitly justified).
- DevTools: image requests should not show absurd **`w=`** values (e.g. **3840**) for content drawn ~1720px wide.
- Production references consistently target **optimized** assets under **`/images/projects-optimized/`** where the pipeline has been run.

---

## DPR note

High-DPI screens request larger bitmaps (~layout × **DPR**). That is expected and not a `sizes` bug.

---

## Collision edge case

If two files in the same folder share the same basename with different extensions (e.g. `013.JPEG` and `013.JPG`), the Phase 2 naming uses a fallback (`*.jpg.webp`). The TypeScript helper includes explicit entries for known cases; new collisions require updating the helper and staying consistent with the manifest script.

---

## Maintenance

If layout max-width or breakpoints change, **`sizes` must be updated accordingly**.

If new assets are added, the **optimization pipeline must be rerun** (and `npm run images:manifest` / build so `project-images.ts` stays aligned).

---

## Related commands

- `npm run images:optimize:dry` / `images:optimize:write` — Phase 2 pipeline (`scripts/optimize-project-images-phase2.mjs`)
- `npm run images:manifest` — regenerate `project-images.ts` (also runs on `prebuild`)

---

## Further reading in repo

- `src/lib/optimized-project-image.ts` — legacy → optimized public path
- `scripts/optimize-project-images-phase2.mjs` — WebP generation and collision naming
- `scripts/generate-project-images-manifest.mjs` — manifest URL generation
