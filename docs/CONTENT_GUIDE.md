# Managing content

## Add a project / Yeni proje ekle

1. Add `src/content/projects/tr/<id>.md` and `en/<id>.md` with the same `projectId`
   and `slug`. Use an existing pair as the field reference.
2. Write natural, complete translations for every narrative field. Categories,
   technology identifiers, related IDs and status must agree across the pair.
3. New pairs are discovered automatically; no route or component edit is needed.
   The inventory manifest guards the original 22 projects against accidental
   removal. Sub-experiments belong inside a parent collection unless they have a
   distinct, supported scope.
4. Use `year: null` when the work date is unknown. Do not substitute a repository
   migration/import date. Set an appropriate maturity; never infer production use.
5. Add public evidence links only. For private projects, omit `githubUrl`, keep
   `sourceReferences: []` and use `confidentialityLevel: summary-only`.
6. Write actual contribution scope; analysis of an existing system does not imply
   sole authorship. Distinguish historical tests from fresh/live acceptance.
7. Run `npm run qa` and inspect both locale pages on mobile and desktop.

## Content fields

Required fields include `projectId`, `slug`, `lang`, `title`, `summary`,
`description`, `categories`, `technologies`, `year`, `status`, `featured`,
`repositoryVisibility`, `role`, `problem`, `solution`, `architecture`, `features`,
`technicalChallenges`, `decisions`, `testing`, `results`, `limitations`,
`sourceReferences`, `confidentialityLevel`, `sourceState`, `order`, and `related`.
`githubUrl` and `demoUrl` are optional. The Zod schema is authoritative.

`sourceState: open-pr` means technical context includes an unmerged improvement
PR, not that every described component was introduced by that PR.
`self-reported` is used for the three supplied non-repository studies.

## Images / Görseller

Only add actual authorized screenshots or explicitly labeled illustrations under
`public/images/`. An image record contains `src`, localized `alt` and `caption`.
Avoid personal/customer/patient data. Set accurate `width` and `height` in each image record, and optimize images before publication.
Current generic category SVGs are not screenshots.

## Profile, CV and certificates

Edit both locale arrays in `src/data/profile.ts`. Experience, education and named
certificates are based on the supplied original 2026 CV. The HTML CV section is an
accessible brief summary; the original document is `public/cv/muhammet-fatih-cetintas-2026.pdf`.
The Turkish download preserves this original PDF unchanged. The English download uses
`public/cv/muhammet-fatih-cetintas-2026-en.pdf`, a two-page translation of the same
supplied CV. Both are selected centrally through `src/data/cv.ts`. Replace the
Turkish original only when the owner supplies a new CV; identify translations
explicitly and keep both locale references consistent.

Named certificates use the titles, issuers and years in the supplied document.
The DoS/DDoS certificate has no supplied year, so none is inferred. Publications
and co-authorship need a specific publication and contribution; none are listed.

Optional `implementation` records contain localized `{ title, detail }` objects
for deeper workflow and engineering explanations. Add them to both locales. They
complement the existing architecture, testing and limitation fields.

## Validation

`check:content` checks pairs, all narrative fields, shared metadata, related IDs
and the private-source boundary. Astro check validates the actual content schema
and TypeScript. `check:links` checks the generated local routes, assets and anchors;
external websites are outside that check. `check:privacy` scans specific leak
patterns in source/output. These are complementary checks, not universal proofs.

## Presentation depth

`presentation: case-study` uses the full technical case-study layout.
`presentation: brief` opens with three sections for smaller prototypes and
archives, with further engineering context and sources in native expandable
sections. All original narrative fields remain in the content files. Keep this
setting consistent across both languages. Private-project notes describe private
source and the shared technical summary; they never show the public-PR notice.

HANDORA’s MediaPipe/TFLite, left-hand cursor and right-hand click/scroll scope
is supplied by the owner. Detection and stability remain limitations; it does
not imply independent performance or device validation. No new project screenshots
or diagrams were added in this revision, as requested by the owner.
