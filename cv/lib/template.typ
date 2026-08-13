// Sazba životopisu. Vzhled je tady, fakta v `cv/data/cv-data.typ`, výběr
// v `cv/variants/*.typ`. Nic z toho se nesmí míchat.

// ─────────────────────────────────────────────────────────────────────────────
// Jazykové pomůcky
// ─────────────────────────────────────────────────────────────────────────────

/// Vybere jazykovou mutaci. Není-li hodnota dvojice `(cz:, en:)`, vrátí ji beze změny.
#let tr(value, lang) = {
  if type(value) == dictionary and ("cz" in value or "en" in value) {
    value.at(lang, default: value.at("cz", default: ""))
  } else {
    value
  }
}

/// Přečte pole položky. Existuje-li varianta `<key>-en` a sázíme anglicky, vyhraje ta.
#let fld(item, key, lang) = {
  let alt = key + "-en"
  if lang == "en" and alt in item {
    item.at(alt)
  } else if key in item {
    tr(item.at(key), lang)
  } else {
    none
  }
}

/// Nezlomitelná mezera za jednopísmennými předložkami a spojkami. Bez ní zůstává
/// na konci řádku osamocené „v", „s", „a" — v české sazbě chyba.
#let czech-typography(body) = {
  // `\b` je nulové šířky, takže po sobě jdoucí předložky („a v roce") chytí obě —
  // vzor začínající mezerou by mezeru snědl a druhou předložku přeskočil.
  // Rustovský regex nezná lookahead, proto se koncová mezera spotřebuje a vrátí
  // se jako nezlomitelná.
  show regex("(?i)\\b[aikosuvz] "): it => it.text.trim() + "\u{00A0}"
  // Tisícové skupiny: 199 800, 265 783, 1 093. Všechna čísla v datech mají jen
  // jednu mezeru, takže nepřekrývající se hledání stačí.
  show regex("[0-9] [0-9]"): it => it.text.replace(" ", "\u{00A0}")
  body
}

// ─────────────────────────────────────────────────────────────────────────────
// Barvy
// ─────────────────────────────────────────────────────────────────────────────

#let ink = rgb("#111111")
#let muted = rgb("#5a5a5a")
#let rule-color = rgb("#b8b8b8")
#let link-color = rgb("#2a4a6a")

// ─────────────────────────────────────────────────────────────────────────────
// Stavební prvky
// ─────────────────────────────────────────────────────────────────────────────

/// Odkaz. Bez podtržení, jen tmavší — v tisku nesmí rušit, na obrazovce musí fungovat.
#let url(target, label) = link(target, text(fill: link-color)[#label])

/// Nadpis sekce: verzálky s prostrkáním a vlasová linka pod nimi.
#let section(title) = block(breakable: false, sticky: true, width: 100%, above: 1.2em, below: 0.6em)[
  #text(size: 8.4pt, weight: "semibold", tracking: 1.5pt, fill: ink)[#upper(title)]
  #v(-0.5em)
  #line(length: 100%, stroke: 0.6pt + rule-color)
]

/// Řádek „název vlevo / období vpravo". `sticky` drží hlavičku u prvního odstavce,
/// takže položka nikdy nekončí osiřelým nadpisem na patě stránky.
#let entry-head(left-side, right-side, sub: none) = block(
  breakable: false,
  sticky: true,
  width: 100%,
  below: 0.3em,
)[
  #grid(
    columns: (1fr, auto),
    column-gutter: 1em,
    align: (left + bottom, right + bottom),
    text(size: 10pt, fill: ink)[#left-side],
    text(size: 8.6pt, fill: muted)[#right-side],
  )
  #if sub != none {
    v(0.1em)
    text(size: 8.6pt, fill: muted, style: "italic")[#sub]
  }
]

/// Odrážky. Těsné, s krátkou pomlčkou místo puntíku — na hustém CV se čte líp.
#let bullets(items) = {
  if items.len() == 0 { return }
  block(below: 0.75em, width: 100%)[
    #set par(justify: true, leading: 0.5em)
    #set text(size: 9.4pt)
    #list(
      tight: false,
      spacing: 0.42em,
      marker: text(fill: muted)[--],
      indent: 0em,
      body-indent: 0.55em,
      ..items,
    )
  ]
}

/// Dvousloupcový řádek „štítek / obsah" pro dovednosti, jazyky a certifikáty.
#let label-row(label, body, label-width: 9.2em) = block(breakable: false, width: 100%, below: 0.45em)[
  #set par(justify: false, leading: 0.5em)
  #grid(
    columns: (label-width, 1fr),
    column-gutter: 0.7em,
    text(size: 9.2pt, weight: "semibold", fill: ink)[#label],
    text(size: 9.2pt, fill: ink)[#body],
  )
]

// ─────────────────────────────────────────────────────────────────────────────
// Hlavička
// ─────────────────────────────────────────────────────────────────────────────

#let header(contact, headline, lang, show-ico: false) = {
  let sep = text(fill: rule-color)[~·~]

  block(width: 100%, below: 0.9em)[
    #grid(
      columns: (1fr, auto),
      column-gutter: 1.6em,
      align: (left + top, right + top),
      [
        #text(size: 21pt, weight: "medium", tracking: 0.4pt, fill: ink)[#contact.name]
        #v(0.3em)
        #text(size: 9.4pt, fill: muted)[#headline]
      ],
      [
        #set text(size: 8.6pt, fill: ink)
        #set par(leading: 0.6em, justify: false)
        #url("mailto:" + contact.email, contact.email) \
        #contact.phone \
        #url(contact.web.url, contact.web.label)#sep#url(contact.linkedin.url, "in/mikeskapetr") \
        #url(contact.github.url, contact.github.label) \
        #text(fill: muted)[
          #tr(contact.location, lang)#if show-ico [#sep IČO #contact.ico]
        ]
      ],
    )
  ]
  line(length: 100%, stroke: 0.9pt + ink)
}

// ─────────────────────────────────────────────────────────────────────────────
// Dokument
// ─────────────────────────────────────────────────────────────────────────────

#let cv(lang: "cz", name: "Petr Mikeska", subject: "", body) = {
  set document(
    title: name + " — " + (if lang == "en" { "CV" } else { "Životopis" }),
    author: name,
    description: subject,
    // `none`, ne `auto` — PDF pak vychází bajt po bajtu stejné a přegenerování
    // beze změny obsahu nedělá diff v gitu.
    date: none,
  )

  set page(
    paper: "a4",
    margin: (top: 14mm, bottom: 13mm, left: 16mm, right: 16mm),
    footer: context {
      set text(size: 7.4pt, fill: muted)
      grid(
        columns: (1fr, auto),
        align: (left, right),
        name,
        [#counter(page).get().first() / #counter(page).final().first()],
      )
    },
  )

  set text(
    font: "Libertinus Serif",
    size: 9.6pt,
    fill: ink,
    lang: if lang == "en" { "en" } else { "cs" },
    hyphenate: true,
  )

  set par(justify: true, leading: 0.56em, spacing: 0.6em)

  if lang == "en" { body } else { czech-typography(body) }
}
