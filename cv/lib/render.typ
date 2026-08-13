// Skládá sekce z dat podle profilu varianty. Varianty samy proto obsahují jen
// deklaraci — žádnou sazbu a žádná fakta.

#import "template.typ": *
#import "../data/cv-data.typ" as d

// ─────────────────────────────────────────────────────────────────────────────
// Výběr podle tagů
// ─────────────────────────────────────────────────────────────────────────────

/// Položka projde, má-li tag `core` (ukaž vždy), nebo protíná-li se s tagy varianty.
#let matches(tags, profile) = {
  if "core" in tags { return true }
  for t in tags {
    if t in profile.tags { return true }
  }
  false
}

/// Vybere odrážky: `core` vždy, zbytek podle tagů varianty s přednostním
/// zaměřením `profile.focus`, a nakonec seřadí zpět do autorského pořadí,
/// aby položka četla přirozeně.
#let pick-bullets(all, profile) = {
  let limit = profile.at("max-bullets", default: none)

  let pinned = ()
  let focused = ()
  let rest = ()

  for (i, b) in all.enumerate() {
    if "core" in b.tags {
      pinned.push(i)
    } else if matches(b.tags, profile) {
      let focus = profile.at("focus", default: none)
      if focus != none and focus in b.tags {
        focused.push(i)
      } else {
        rest.push(i)
      }
    }
  }

  let chosen = pinned
  if limit == none {
    chosen = pinned + focused + rest
  } else {
    let room = limit - pinned.len()
    if room > 0 {
      let extra = (focused + rest).slice(0, calc.min(room, focused.len() + rest.len()))
      chosen = pinned + extra
    }
  }

  chosen.sorted().map(i => all.at(i))
}

#let bullet-bodies(all, profile, lang) = {
  pick-bullets(all, profile).map(b => tr(b, lang))
}

// ─────────────────────────────────────────────────────────────────────────────
// Popisky sekcí
// ─────────────────────────────────────────────────────────────────────────────

#let titles = (
  profil: (cz: "Profil", en: "Profile"),
  praxe: (cz: "Praxe", en: "Experience"),
  vyzkum: (cz: "Výzkumné projekty", en: "Research projects"),
  projekty: (cz: "Vybrané projekty", en: "Selected projects"),
  publikace: (cz: "Publikace a výstupy", en: "Publications"),
  konference: (cz: "Konference a odborné akce", en: "Conferences and professional events"),
  dovednosti: (cz: "Dovednosti", en: "Skills"),
  vzdelani: (cz: "Vzdělání", en: "Education"),
  certifikaty: (cz: "Certifikáty", en: "Certifications"),
  jazyky: (cz: "Jazyky", en: "Languages"),
)

// ─────────────────────────────────────────────────────────────────────────────
// Jednotlivé sekce
// ─────────────────────────────────────────────────────────────────────────────

#let sec-profil(profile, lang) = {
  let override = profile.at("profile-text", default: none)
  let text-source = if override != none { override } else {
    d.profiles.at(profile.id, default: d.profiles.general)
  }
  section(tr(titles.profil, lang))
  block(width: 100%, below: 0.2em)[
    #set par(justify: true, leading: 0.56em)
    #tr(text-source, lang)
  ]
}

#let job-entry(item, profile, lang) = {
  let org = fld(item, "org", lang)
  let role = tr(item.role, lang)
  let link-part = if "link" in item and item.link != none {
    [ #text(fill: rule-color)[·] #url(item.link.url, item.link.label)]
  }

  entry-head(
    [#text(weight: "semibold")[#role] #text(fill: muted)[—] #org],
    tr(item.period, lang),
    sub: {
      tr(item.place, lang)
      link-part
      if "project" in item {
        [ #text(fill: rule-color)[·] #tr(item.project, lang)]
      }
    },
  )
  bullets(bullet-bodies(item.bullets, profile, lang))
}

#let sec-praxe(profile, lang) = {
  section(tr(titles.praxe, lang))
  for item in d.experience {
    if matches(item.tags, profile) { job-entry(item, profile, lang) }
  }
}

#let sec-vyzkum(profile, lang) = {
  section(tr(titles.vyzkum, lang))
  for item in d.research {
    if matches(item.tags, profile) { job-entry(item, profile, lang) }
  }
}

#let sec-vzdelani(profile, lang) = {
  section(tr(titles.vzdelani, lang))
  for item in d.education {
    if not matches(item.tags, profile) { continue }
    entry-head(
      [#text(weight: "semibold")[#tr(item.degree, lang)]],
      tr(item.period, lang),
      sub: [#fld(item, "org", lang) #text(fill: rule-color)[·] #tr(item.place, lang)],
    )
    bullets(bullet-bodies(item.bullets, profile, lang))
  }
}

#let sec-projekty(profile, lang) = {
  let limit = profile.at("max-projects", default: none)
  let picked = d.projects.filter(p => matches(p.tags, profile))
  if limit != none and picked.len() > limit {
    let focus = profile.at("focus", default: none)
    let first = picked.filter(p => focus != none and focus in p.tags)
    let then = picked.filter(p => not (focus != none and focus in p.tags))
    picked = (first + then).slice(0, limit)
  }

  section(tr(titles.projekty, lang))
  for p in picked {
    entry-head(
      [#text(weight: "semibold")[#fld(p, "name", lang)]],
      tr(p.period, lang),
      sub: if "link" in p and p.link != none { url(p.link.url, p.link.label) },
    )
    block(width: 100%, below: 0.7em)[
      #set par(justify: true, leading: 0.5em)
      #set text(size: 9.4pt)
      #tr(p.desc, lang)
      #linebreak()
      #text(size: 8.8pt, fill: muted)[#fld(p, "stack", lang)]
    ]
  }
}

#let sec-publikace(profile, lang) = {
  section(tr(titles.publikace, lang))
  block(below: 0.3em)[
    #set par(justify: false, leading: 0.5em)
    #for p in d.publications {
      block(breakable: false, below: 0.5em, width: 100%)[
        #grid(
          columns: (4.6em, 1fr),
          column-gutter: 0.7em,
          text(size: 9pt, fill: muted)[#tr(p.year, lang)],
          {
            text(size: 9.4pt, style: "italic")[#tr(p.title, lang)]
            linebreak()
            text(size: 8.8pt, fill: muted)[
              #tr(p.kind, lang) #text(fill: rule-color)[·] #tr(p.venue, lang)
              #if p.url != none [ #text(fill: rule-color)[·] #url(p.url, p.url.replace("https://", ""))]
            ]
          },
        )
      ]
    }
  ]
}

#let sec-konference(profile, lang) = {
  section(tr(titles.konference, lang))
  for c in d.conferences {
    label-row(c.year, tr(c.name, lang), label-width: 3.2em)
  }
}

#let sec-dovednosti(profile, lang) = {
  section(tr(titles.dovednosti, lang))
  for s in d.skills {
    if matches(s.tags, profile) {
      label-row(tr(s.name, lang), fld(s, "items", lang))
    }
  }
}

#let sec-certifikaty(profile, lang) = {
  section(tr(titles.certifikaty, lang))
  for c in d.certifications {
    if not matches(c.tags, profile) { continue }
    label-row(
      tr(c.date, lang),
      [#text(weight: "semibold")[#tr(c.name, lang)] #text(fill: rule-color)[·] #text(fill: muted)[#tr(c.issuer, lang)]],
      label-width: 8.6em,
    )
  }
}

#let sec-jazyky(profile, lang) = {
  section(tr(titles.jazyky, lang))
  block(below: 0.2em)[
    #set text(size: 9.2pt)
    #d.languages.map(l => [#tr(l.name, lang) #text(fill: muted)[(#tr(l.level, lang))]]).join(text(fill: rule-color)[ · ])
  ]
}

// ─────────────────────────────────────────────────────────────────────────────
// Sestavení
// ─────────────────────────────────────────────────────────────────────────────

#let sections = (
  profil: sec-profil,
  praxe: sec-praxe,
  vyzkum: sec-vyzkum,
  projekty: sec-projekty,
  publikace: sec-publikace,
  konference: sec-konference,
  dovednosti: sec-dovednosti,
  vzdelani: sec-vzdelani,
  certifikaty: sec-certifikaty,
  jazyky: sec-jazyky,
)

/// Vysází celý životopis podle profilu varianty.
#let render(profile, lang) = {
  let override = profile.at("headline", default: none)
  let head = if override != none { override } else {
    d.headlines.at(profile.id, default: d.headlines.general)
  }
  header(
    d.contact,
    tr(head, lang),
    lang,
    show-ico: lang == "cz" and profile.at("show-ico", default: true),
  )
  for key in profile.sections {
    (sections.at(key))(profile, lang)
  }
}
