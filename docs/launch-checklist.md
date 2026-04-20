# Launch Checklist

## Private launch (current posture)

- `NEXT_PUBLIC_SITE_URL` points to the canonical domain (`https://3liksir.site`).
- `CONTACT_FORM_ENABLED` is `false` (form UI may remain visible, API stays disabled).
- `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS` is `false` unless intentionally enabled.
- Legal pages reflect current behavior (private operation, form disabled, analytics opt-in).
- Build checks pass:
  - `npm run lint`
  - `npx tsc --noEmit`
  - `npm run build`

## Business/public operations later

- Add complete legal postal address in imprint/impressum where required.
- Enable contact form only when all are ready:
  - `CONTACT_FORM_ENABLED=true`
  - `RESEND_API_KEY` set
  - sender/recipient emails reviewed
- If analytics are enabled, set:
  - `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS=true`
  - legal text updated if processing scope changes
- Ensure operational/legal follow-through outside code:
  - processor agreements (e.g. Vercel/Resend)
  - retention/deletion workflow
  - incident/contact process

## Static rendering (current state)

Static rendering rollback is applied. Route modes as of the last build:

- `○` Static: `/`, `/about`, `/contact`, `/projects`, `/imprint`, `/privacy`,
  `/impressum`, `/datenschutz`, `/opengraph-image`.
- `●` SSG: all `/[locale]` routes (home, about, contact, projects,
  `projects/[slug]`, imprint, privacy) for `en`, `de`, `ru`.
- `ƒ` Dynamic: only `/api/contact` (form backend, gated via
  `CONTACT_FORM_ENABLED`).

### How it works

- Locale is derived from the URL segment (`/en`, `/de`, `/ru`) and from
  `localStorage` only for the locale switcher preference.
- Root layout is static and seeds `<html lang>` with the default locale.
  `LocaleHtmlSync` updates `document.documentElement.lang` on the client
  based on the active URL.
- Localized SEO signals (canonical + `alternates.languages`, per-locale
  metadata, localized sitemap) remain server-rendered via each route's
  `generateMetadata` / `generateStaticParams`.
- There is no `proxy.ts` / middleware for locale; unprefixed routes
  redirect to the canonical `/en/...` URL at request time via
  `permanentRedirect`, and every locale slug is pre-rendered.

### Regression checklist to run before releases

- Locale switch navigation works in the header across all routes.
- Canonical link + `alternates.languages` are correct per locale.
- Legal links (`/[locale]/imprint`, `/[locale]/privacy`) are reachable and
  correctly localized; legacy `/impressum` and `/datenschutz` still
  redirect as expected.
- Contact flow respects `CONTACT_FORM_ENABLED` (disabled UI + 503 API by
  default).
- Build output shows the expected `○` / `●` / `ƒ` mix; no regressions to
  dynamic rendering on marketing routes.

