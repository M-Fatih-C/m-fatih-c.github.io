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
accessible brief summary; the full document is `public/cv/muhammet-fatih-cetintas-2026.pdf`.
Both locale downloads use this unchanged Turkish PDF, with an explicit language label
on the English page. Replace the original only when the owner supplies a new CV;
never regenerate or silently translate it. Keep download references consistent.

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
