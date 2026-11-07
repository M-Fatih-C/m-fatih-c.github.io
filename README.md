# Muhammet Fatih Çetintaş — Software & AI Portfolio

[Türkçe](README.tr.md)

A bilingual, static portfolio built with Astro 7, TypeScript and Tailwind CSS 4.
It presents 22 repository-backed projects and three owner-described independent
studies through 25 paired Turkish/English case studies. Public-source references
include open documentation-improvement PRs; those changes are not described as
merged or released.

## Local development

Use Node **22.23.4** (see `.node-version`) and npm:

```bash
npm ci
npm run dev
```

Open the printed local URL, normally `http://127.0.0.1:4321/tr/`.

```bash
npm run qa       # Astro/TypeScript, ESLint, formatting, content, build, links, privacy
npm run preview  # Preview the generated static build
```

Astro's static preview may run as a background process in this version. Use
`npx astro preview status` and `npx astro preview stop` to inspect or stop it.

## Content and routes

- `/tr/` and `/en/`: home, about, research, contact, CV and project archive.
- `/tr/projects/<slug>/` and `/en/projects/<slug>/`: matching case-study routes.
- `src/content/projects/{tr,en}/*.md`: independent, schema-checked content files.
- `src/data/profile.ts`: experience and education supplied by the owner.
- No runtime database, paid API, analytics or visitor-side GitHub API request.
- Language and theme preferences are stored locally in the visitor's browser.
- Project filters support name/text, category, technology, status and year. Dates
  not established by evidence remain null instead of using repository migration dates.

## Guides

- [Content inventory and evidence boundaries](docs/PROJECT_CONTENT_INVENTORY.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Adding and translating projects](docs/CONTENT_GUIDE.md)
- [GitHub Pages deployment](docs/DEPLOYMENT.md)
- [Third-party notices](THIRD_PARTY_NOTICES.md)

## Publication status

Source repository: [M-Fatih-C/m-fatih-c.github.io](https://github.com/M-Fatih-C/m-fatih-c.github.io).
Site address: [m-fatih-c.github.io](https://m-fatih-c.github.io/tr/).
The owner approved publication of the reviewed portfolio on 8 November 2026.
GitHub Pages uses the root site URL without a project subdirectory `base`.
Deployment is manual, requires the `publish` input and only runs from `main`.
See repository Actions for deployment results and the deployment guide for updates.

## Content and privacy

Private projects have high-level case studies with no source-code links. The
enterprise workflow and process-analysis studies are anonymous. No private source,
patient/address/bank dataset, production credentials, internal report or source
checkout is included. Illustrations are code-generated category graphics, clearly
distinguished from application screenshots. Galleries accept real authorized
images when available; none have been fabricated.

The downloadable CV is the owner's original two-page 2026 PDF, preserved without
changes. Both locales use this Turkish document and label its language. Experience,
education and four named certificates are based on that CV. No publication titles,
awards or co-authorship have been invented. The owner-supplied MFÇ brand artwork
is optimized by Astro for responsive use without changing its design. Twelve
project pairs include additional implementation narratives. Short entrance and
scroll animations respect reduced-motion preferences and never loop continuously.

No new source-code license is asserted. Third-party font/icon licenses are retained.
