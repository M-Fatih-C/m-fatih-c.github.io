# Design system

## Direction

A personal software/AI exploration lab: editorial typography, a deliberate
navy canvas, owner-supplied MFÇ circuit artwork and colorful project families. The home
page introduces a person and selected work; case studies hold the technical depth.
No stock imagery, fabricated UI screenshots, skill percentages or vanity counters.

## Tokens

| Role               | Dark      | Light     |
| ------------------ | --------- | --------- |
| Background         | `#0B1020` | `#F7F8FC` |
| Surface            | `#121A2E` | `#FFFFFF` |
| Text               | `#F3F6FF` | `#131D37` |
| Secondary text     | `#A3B0CA` | `#526079` |
| Violet text accent | `#AAAAFF` | `#4B40C5` |
| Cyan text accent   | `#66E0E5` | `#006B76` |
| Warm text accent   | `#FFB27D` | `#A84C0E` |

Buttons use a separate saturated indigo background with white text. Light-theme
text accents are darker to preserve contrast. Decorative diagram strokes may be
lighter; they do not carry essential information alone.

## Typography and layout

- Locally hosted variable Manrope for text; Space Grotesk for display headings.
- Latin and extended-Latin font coverage includes Turkish characters.
- Max content width 1200/1280px, 96px desktop gutters and 40px mobile total gutter.
- Responsive breakpoints: 1100, 760 and 480px. The hero becomes one column at 760px.
- Project cards: three desktop columns, two tablet columns, one narrow-mobile column.
- Technical case studies: sticky contents navigation on desktop, linear reading on mobile.
- Rhythm: 8px-based spacing, 65–100px section padding and 10–18px surface radii.

## Interaction and accessibility

Semantic landmarks, a focusable skip-link target, visible keyboard focus,
accessible control names, native select controls, live result counts and Escape
support for mobile navigation. A local theme preference persists across reloads.
Language switching targets the same route and preserves archive filters. Motion
uses a finite 0.8-second brand entrance, one 2.8-second light sweep, short hover
transitions and once-only scroll reveals. All honor `prefers-reduced-motion`.
IntersectionObserver enhances content progressively; no-JavaScript content remains
visible and print mode reveals every section. No continuous render loop is used.

Category illustrations are original SVG/code graphics, marked as decorative and
captioned as illustrations on project detail pages. A real gallery can be added
only with authorized actual screenshots and localized captions.
