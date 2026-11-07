# Application architecture

```text
src/content/projects/{tr,en}/*.md + src/data/profile.ts
              ↓
Astro content loader + Zod schema + translation-pair checks
              ↓
getStaticPaths() → locale routes and project pages
              ↓
Layout + cards + diagrams + local fonts + small bundled scripts
              ↓
dist/ → link/privacy checks → GitHub Pages artifact
```

Astro 7 generates static HTML. TypeScript is used in components, profile data and
browser interactions. Tailwind CSS 4 uses its Vite plugin; shared design tokens
and component styles live in `src/styles/global.css`. Lucide icons render as SVG.
No React runtime, backend, database or visitor-side API is needed.

## Content

Each language has an independent Markdown file. `projectId` and `slug` connect
the pair. The loader explicitly retains the locale in each collection entry ID,
preventing same-slug translation collisions. Source references are public-only;
the schema rejects code links for private or owner-described projects.

The schema supports role, architecture, challenges, testing, results, limitations,
images, references, confidentiality, visibility and related work. Dates remain
nullable. The current case-study body is stored in structured frontmatter, with
Markdown body rendering available for additional long-form content.

## Routes and scripts

Root `/` opens Turkish by default or a locally remembered English preference.
Every primary route has `/tr/` and `/en/` versions. Language links, canonical,
hreflang and localized social metadata are generated per page. GitHub Pages uses
root `404.html`; locale-specific 404 pages are also generated and excluded from
the sitemap. The root 404 contains both languages.

Only menu/theme preference, locale memory, archive filtering and optional
IntersectionObserver scroll reveals need JavaScript. All content and ordinary navigation remain statically rendered.
Filtering works on pre-rendered card attributes; URLs retain query/category,
technology, status and year. No input is transmitted to a server.

## Trust and build boundaries

No private checkout, audit source notes, credentials, data files or original
repository mapping belongs in this source package or build. Private cases are
author-approved high-level descriptions only; enterprise cases are anonymous.
Pattern checks reduce common leakage but are not a complete privacy/security audit.

Development tooling currently pins `minimatch` 11.0.5 through an override to avoid
the advisory affecting older versions. It is not shipped to browsers. Lint and
build checks must pass after any future override/dependency update.

Deployment is deliberately manual and restricted to `main`, with an explicit
`publish` input. The workflow follows Astro's official Pages action and runs
checks before artifact upload. There is no repository write token in site code.
