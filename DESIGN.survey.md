# v4 "survey": design brief

The fourth design system over the same data layer (`src/data/content*.ts`).
Written before any code, following the Higgsfield website-builder pipeline
(brief, reference boards, asset kit, build to boards, mechanical gate). The
boards live in `refs/survey/`, the kit in `public/survey/`.

## Design read

A recruiter or an R&D lead lands here to answer one question: does this person
take a street-level detection all the way to a map object? The register is a
survey sheet: calm, exact, cool, with one decisive blue.

## Concept spine: the survey drive

The page is one mapping drive. The visitor moves along a trajectory; each
section is a waypoint where the vehicle stops and one thing gets measured.
Motifs: a thin route line, waypoint dots, coordinates in mono, detection
frames as corner brackets, a fine survey grid in the paper.

## Delivery tier: editorial

Non-animated by the owner's choice (a 15 s film costs 105 credits, balance was
38). Typography, imagery, bespoke chrome and micro-motion only. No scroll
journey, no autoplay loops, no reveals gated on viewport.

## Locked palette

| Token | Hex | Role |
|---|---|---|
| paper | `#F2F3F0` | page ground, cool limestone |
| sheet | `#E6E8E3` | panels, table bands |
| hairline | `#C9CDC6` | rules, frames |
| ink | `#15181D` | display and body text |
| ink-muted | `#5A616B` | supporting text, mono meta |
| survey | `#3247C4` | the one accent: links, brackets, route line, contact band |
| on-survey | `#F2F3F0` | text on the accent field |

Defense: cadastral sheets and blueprints are blue on pale paper; the blue is
the colour of a measured line, not of a brand. Saturation 74 %, contrast on
paper 6.7:1, paper on survey 7.5:1. This is a different family from the
terracotta of v1 and v3 and from the black of v2. One theme only: light.

## Locked type

- Display and body: **Geist** (variable), tracking tight on display, normal on body.
- Data voice: **Geist Mono** for coordinates, periods, stacks, tags, chainage.
- No serif anywhere. No Space Grotesk on this surface (v1 and v3 own it).

Scale: display `text-5xl md:text-7xl tracking-tighter leading-none` only for
headlines of 3 to 5 words; section headings `text-3xl md:text-4xl`; body
`text-base leading-relaxed max-w-[65ch]`; mono meta `text-xs` uppercase with
`tracking-wide`, counted against the eyebrow budget when it labels a section.

Animation mode: non-animated, the owner picked "Statický web, bez filmu" at intake.

## Combinatorial pick (held across every board)

- Theme paradigm: Pristine Light, cool.
- Background character: technical grid and dot field, faint, on paper.
- Typography character: Swiss rational sans with hard hierarchy.
- Hero architecture: massive image-first with restrained text, copy bottom-left over the image. Not left-text/right-image.
- Section system: alternating editorial blocks with Swiss grid discipline for the ledgers.
- Signature components: vertical rhythm lines (the route rail), off-grid editorial (about), layered image crop frames (portfolio), hover-accordion slices (services).
- Narrative spine: journey and waypoints.
- Second-read moment: one narrow vertical side-rail note, in the about section only: the trajectory with waypoint coordinates.

## Section plan (6 sections, 6 layout families, 2 eyebrows max)

| # | Section | Anchor | Layout family | Background mode |
|---|---|---|---|---|
| 1 | Hero | `#top` | full-bleed image, copy bottom-left | duotone survey frame, cover |
| 2 | About | `#about` | off-grid editorial: narrow prose offset right, portrait crop frame top-left, side rail; education and certifications as a Swiss ledger below | paper with faint grid |
| 3 | Work | `#experience` | stacked ledger rows, company large, period mono, highlights in two columns; research and publications as lighter rows | sheet band |
| 4 | Portfolio | `#portfolio` | asymmetric gallery: lead project in a large crop frame, six others in two columns; skills as category rows under it | paper |
| 5 | Services | `#services` | hover-accordion slices, one per service, icon from the generated set; rate as a framed block | paper with grid |
| 6 | Contact | `#contact` | colour-blocked survey band: oversized email, channels in mono, footer legal line | survey field with point-cloud plate |

Mobile collapse: hero copy stays bottom-left over a 4:5 crop; about rail moves
above the prose as a horizontal strip; ledgers become single column; portfolio
grid becomes one column; services slices stay full width; contact band stacks.

## Asset plan (Higgsfield, `public/survey/`)

1. Hero visual, 2 candidates, 21:9, duotone: a street-level survey frame from a mapping vehicle on a Czech road, cool desaturated base, ultramarine detection brackets on the signs, a thin trajectory line, LiDAR points settling on the road.
2. Section plates: (a) faint survey grid and dot field on paper, (b) white point cloud on the survey blue for the contact band.
3. Custom icon set, one sheet: 360 camera, GNSS satellite, LiDAR beam, traffic sign, map pin, database, code brackets, drone. 2 px stroke, survey blue, sliced to transparent PNGs.
4. Project imagery: the seven portfolio illustrations regraded into the duotone (paper and survey blue) so the kit reads as one grade.
5. OG card 1200 x 630 composed in the brand language, not a crop of the hero.
6. Head kit: the existing `favicon.svg` and apple touch icon stay (the owner's own). No generated logo: the name set in Geist is the mark.
7. Portrait: the owner's own `portrait.webp`, untouched.

## CTA inventory (each its own garment, no shared button class)

| Intent | Label (CZ / EN) | Where | Garment |
|---|---|---|---|
| view work | Prohlédnout portfolio / View portfolio | hero | text link whose arrow travels along a dotted route path on hover |
| download CV | Stáhnout CV / Download CV | hero, nav | detection bracket: four corner brackets close around the label on hover, like a bounding box locking on |
| enquiry | Napsat poptávku / Send an enquiry | services rate block, contact | framed block whose fill slides in from the left (the one rationed garment on this page) |
| channel links | e-mail, phone, LinkedIn, GitHub | contact | mono readout with a waypoint dot that fills on hover |
| project links | GitHub / Web / PDF | portfolio | whole card shifts grade on hover, link label underlined by a short route dash |
| nav | five destinations | nav | mono labels, a waypoint dot slides under the active one |

One label per intent page-wide: "Napsat poptávku" is the only enquiry label.

## Copy rules for this surface

No em dash or en dash as a separator in any visible string this surface
introduces. Headlines 8 words or fewer. One CTA or one visual per section.
Copy that v4 needs and the others do not lives under `ui.v4` in both content
files.

## Motion

- Hover garments above, transform and opacity only, `prefers-reduced-motion` turns every one into a plain state change.
- No scroll-triggered reveals: a headless full-page screenshot must show every section.
- No parallax, no cursor, no marquee.
