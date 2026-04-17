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
- images rendered near the **content column width** inside `SectionShell` (max `1720px` **including** horizontal padding) → unnecessary transfer if `sizes` assumed the full 1720px for the bitmap
- large source files amplified worst-case payload

---

## Two hero patterns (do not confuse them)

### 1. True viewport full-bleed (e.g. `home-hero`)

The image covers the **entire viewport** (`absolute inset-0` on a full-width header, not limited by `SectionShell` width). The rendered width is effectively **100vw**.

```tsx
sizes="100vw"
```

Using a synthetic cap like `(min-width: 1720px) 1720px` here would **mis-describe** display width on ultrawide viewports (the image still draws at `100vw`).

### 2. Shell-bounded full-width (e.g. `project-hero`, full-bleed figures inside `SectionShell`)

The image spans the **inner content column** only. With `SectionShell` at `max-w-[1720px]` and horizontal padding (`xl:px-20` etc.), the **maximum content width** is about **1560px** at very large viewports—not 1720px.

```tsx
sizes="(min-width: 1720px) 1560px, 100vw"
```

Refine middle breakpoints with `calc(100vw - …)` where the layout uses different padding per breakpoint (see `project-hero`).

---

## Highest Impact Fix (bounded layouts)

For full-width images **inside** the padded shell, cap `sizes` at the **inner column width** (~1560px at max), not the shell’s outer `max-w-[1720px]`:

```tsx
sizes="(min-width: 1720px) 1560px, 100vw"
```

Smaller viewports use `100vw` or `calc(100vw - padding)` as appropriate. Adjust numbers if `SectionShell` padding or max width changes.

---

## Phase 1 — Delivery optimization

Implemented in UI components (no asset changes):

| Area | Change |
|------|--------|
| Bounded layouts | `sizes` aligned with **~1560px** inner max where the image fills the shell column |
| Grids / pairs / cards | Column caps at large breakpoints (e.g. half-column ~780px, third-column ~504px), not generic overstated `vw` |
| Project grid (`/projects`) | `xl` three-column layout: `sizes` reflect **~504px** column at max |
| `priority` | At most one likely LCP image per route where justified (e.g. first card on `/projects`) |
| `ProjectFolderGallery` | Pair grid `sizes` aligned with two-column width + max cap |
| Heroes | **Viewport full-bleed** (`home-hero`): `100vw`. **Shell full-width** (`project-hero`): **~1560px** cap + `calc`. **Split-column** (`hero-editorial`, `home-world-cyber`): **~704px** / `44vw` at large breakpoints (half of inner grid, not full shell) |

**Why it matters:** `next/image` passes `sizes` to the browser’s `srcset` selection. Correct `sizes` reduces chosen width and avoids requesting oversized derivatives for on-screen pixels.

---

## Phase 2 — Asset optimization

- Optimized WebP outputs live under **`public/images/projects-optimized/`** (produced by the local pipeline script).
- Runtime URLs map from legacy **`/images/projects/...`** semantics to optimized paths via **`src/lib/optimized-project-image.ts`** (`toOptimizedProjectPublicPath`).
- **`scripts/generate-project-images-manifest.mjs`** regenerates **`src/data/project-images.ts`** on build (`prebuild`), emitting **`/images/projects-optimized/...webp`** URLs with the same **basename collision rules** as the Phase 2 optimizer (e.g. duplicate basename `.JPEG` / `.JPG` → `*.webp` vs `*.jpg.webp`).

**Why it matters:** Smaller sources reduce bytes, decode cost, and image optimizer work; URLs must stay aligned with files on disk.

---

## Definition of Done

- No **sole** unbounded `100vw` for images in **capped** layouts where the bitmap is narrower than the viewport.
- **Shell-bound** “full width” images: **`sizes` caps match inner column width** (~1560px at max for current padding), not a blanket **1720px** unless the image truly renders that wide.
- **Viewport full-bleed** heroes: **`sizes="100vw"`** (or equivalent) so srcset matches real draw width.
- **At most one** `priority` image per route where LCP is image-driven (unless explicitly justified).
- DevTools: image requests should not show absurd **`w=`** values for content drawn at modest widths.
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
