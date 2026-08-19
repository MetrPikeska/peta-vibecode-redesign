---
name: Petr Mikeska — Instrument
description: Osobní web jako měřicí přístroj — jedno souvislé pravítkované pole, binární bílá na černé, kondenzovaný monospace.
colors:
  signal-white: "#ffffff"
  field-black: "#000000"
  rule-white: "rgba(255,255,255,0.42)"
  secondary: "rgba(255,255,255,0.70)"
typography:
  display:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "clamp(3rem, 6.4vw, 6rem)"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 1.0
    letterSpacing: "-0.04em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "clamp(2.35rem, 4.5vw, 5rem)"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    textTransform: "uppercase"
  sub:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "1.35rem"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 1.05
    letterSpacing: "0.04em"
    textTransform: "uppercase"
  num:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "2.3rem"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  sequence-num:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "clamp(2rem, 3.4vw, 3.25rem)"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  verdict:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "clamp(1.1rem, 2vw, 1.9rem)"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  selector-value:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 800
    fontStretch: "62.5%"
    lineHeight: 1
    letterSpacing: "normal"
  answer:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "clamp(1.05rem, 1.4vw, 1.4rem)"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "16px"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.55
    letterSpacing: "normal"
  prose:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "0.9rem"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.5
    letterSpacing: "normal"
  strong:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "16px"
    fontWeight: 600
    fontStretch: "75%"
    lineHeight: 1.55
    letterSpacing: "normal"
  ledger:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "0.82rem"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.4
    letterSpacing: "normal"
    textTransform: "uppercase"
  label:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.4
    letterSpacing: "0.045em"
    textTransform: "uppercase"
  tag:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "0.69rem"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.4
    letterSpacing: "0.045em"
    textTransform: "uppercase"
  footer-meta:
    fontFamily: "Noto Sans Mono Var, ui-monospace, monospace"
    fontSize: "0.68rem"
    fontWeight: 300
    fontStretch: "75%"
    lineHeight: 1.4
    letterSpacing: "0.045em"
    textTransform: "uppercase"
rounded:
  none: "0"
spacing:
  hair: "1px"
  tight: "0.35rem"
  cell: "0.7rem"
  gutter: "1rem"
  stack: "1.25rem"
  stack-lg: "2.5rem"
  inset: "clamp(1rem, 4vw, 4rem)"
  rhythm: "clamp(5rem, 9vw, 10rem)"
  rhythm-mobile: "6rem"
components:
  plate:
    backgroundColor: "{colors.field-black}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.none}"
    padding: "{spacing.rhythm} {spacing.inset}"
    borderBottom: "1px solid {colors.rule-white}"
  rail-button:
    backgroundColor: "transparent"
    textColor: "{colors.signal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.7rem 1rem"
  rail-button-hover:
    backgroundColor: "{colors.signal-white}"
    textColor: "{colors.field-black}"
  selector-cell:
    backgroundColor: "transparent"
    textColor: "{colors.signal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "1rem"
    minHeight: "128px"
  selector-cell-hover:
    backgroundColor: "{colors.signal-white}"
    textColor: "{colors.field-black}"
  ledger-cell:
    backgroundColor: "transparent"
    textColor: "{colors.signal-white}"
    typography: "{typography.ledger}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.85rem"
  ledger-cell-head:
    backgroundColor: "{colors.signal-white}"
    textColor: "{colors.field-black}"
    typography: "{typography.ledger}"
  figure:
    backgroundColor: "{colors.field-black}"
    textColor: "{colors.signal-white}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.signal-white}"
  nav:
    backgroundColor: "rgba(0,0,0,0.96)"
    textColor: "{colors.signal-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    minHeight: "64px"
    borderBottom: "1px solid {colors.signal-white}"
  sequence-result:
    backgroundColor: "{colors.signal-white}"
    textColor: "{colors.field-black}"
    typography: "{typography.num}"
    rounded: "{rounded.none}"
    padding: "1.5rem 1.25rem"
motion:
  opacity-shift:
    duration: "240ms"
    easing: "ease-out"
  signature-drift:
    duration: "continuous"
    easing: "linear"
    note: "Jediná animace v systému. Pod prefers-reduced-motion se vykreslí jako statický snímek."
---

# Instrument

North star: **„Instrument, not page."** Web se chová jako celoplošný měřicí přístroj, ne jako článek zabalený do dashboardu. Čte se jako jedno souvislé pravítkované pole — od tvrzení v headline, přes důkaz, k metodě. Žádné plovoucí karty, žádný vycentrovaný sloupec obsahu.

Hierarchie vzniká **ze škály, hustoty, inverze a důkazu**. Nikdy z dekorace.

Předchozí systém („topografický list", parchment + Instrument Serif + vrstevnice) je archivovaný v `DESIGN.topographic.md` a stále platí pro komponenty ve `src/components/sections/`, které používá `src/pages/v1-original.tsx`.

---

## Barva — striktně binární

```
signal-white   #ffffff                    typografie, linky, vykreslené stopy, aktivní plochy
field-black    #000000                    stránka, panely, ovládání, canvas, podklad obrazu
rule-white     rgba(255,255,255,0.42)     vnitřní děliče, mřížky, struktura tabulek
secondary      rgba(255,255,255,0.70)     doprovodný text, popisky nízké priority
```

**Rule — Binary signal.** Hierarchie se staví jen z opacity bílé, ze škály a z úplné inverze. Žádný akcentní odstín, žádná tónovaná plocha, žádný šedý pigment, žádný gradient (kromě barcode `repeating-linear-gradient`). Tmavý režim je jediný režim; světlá varianta neexistuje.

Fotografie a figury se sjednocují do palety přes `filter: grayscale(1) contrast(1.2–1.45)` (`invert(1)` navíc pro diagramy a grafy na světlém podkladu), `opacity: 0.78–0.84`, na hover/focus `opacity: 1`. Filtr smí obraz sjednotit — nikdy nesmí překreslit nebo zjednodušit data uvnitř.

Výběr textu je invertovaný: bílé pozadí, černý text. Scrollbar je bílý thumb s 2px černým rámem na černé dráze.

**rule-white nikdy nenese text.** Slouží linkám a mřížkám; pro doprovodný text je `secondary`.

---

## Typografie — jen kondenzovaný monospace

Jedna rodina, dva hlasy, vybrané osou šířky — ne druhým souborem:

- **Display / nadpisy:** `font-stretch: 62.5%`, `font-weight: 800`, UPPERCASE.
- **Text / popisky:** `font-stretch: 75%`, `font-weight: 300`.

`Noto Sans Mono Var` je self-hostovaný variable woff2 ve dvou subsetech (`latin`, `latin-ext`) v `public/fonts/`. Obě osy — `wdth 62.5–100`, `wght 100–900` — jsou zachovány, takže prohlížeč interpoluje místo faux-boldu. Fallback `ui-monospace, monospace`.

**Rule — Instrument type.** Každé číslo je tabulární (`font-variant-numeric: tabular-nums lining-nums`, nastaveno na kořeni `.instrument`). Display typ vyslovuje tvrzení; lehký textový řez nese důkaz. Nadpisy používají `text-wrap: balance` a drží se pod znakovým stropem (display 12ch, headline 15ch), aby se lámaly do skládaných monumentálních řádků.

**Prózu nikdy neuppercasovat.** Ledger buňky jsou uppercase jako popisky, ale odstavec českého textu v uppercase je nečitelný — na to je `.ledger__cell--prose`.

---

## Layout — full-bleed pravítkované pole

- Stránka zabírá **celou šířku prohlížeče**. Nikdy žádný `max-width` kontejner.
- Horizontální odsazení je fluidní: `clamp(1rem, 4vw, 4rem)`.
- Vertikální rytmus sekcí je štědrý: `clamp(5rem, 9vw, 10rem)`, 6rem na mobilu. Každá sekce je nový přístrojový plát oddělený 1px bílou linkou.
- Hero má **tříslopcový shell**: 232px levý datový rail, fluidní střední pole, 220px pravý výsledkový rail. Na 1100px zmizí pravý rail a levý se zúží na 180px. Na 760px se rail mění na horizontálně scrollovatelný selektorový pás a sloupce se skládají.

**Rule — Continuous field.** Raily, hero, selektor, náhledy a důkazy jsou sousední pravítkované oblasti jedné plochy. Nerozpadají se do plovoucích karet.

**Rule — Flat measurement.** Žádné stíny, žádný blur, žádné hloubkové gradienty, žádné vyvýšené plochy, nikde žádný `border-radius` (`border-radius: 0`). Hloubka je strukturální: 1px linky tvoří vrstvy, inverze černá/bílá značí stav.

---

## Komponenty

**Navigace** — sticky, min-height 64px, `rgba(0,0,0,0.96)`, spodní 1px bílá linka. Grid: wordmark vlevo / lowercase textové kotvy uprostřed / stavová metadata vpravo (lokalita, souřadnice, dostupnost, aktuální rok). Wordmarku předchází **barcode glyph** — blok 42×22px z `repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 4px)`. Odkazy bez podtržení, podtržení na hover, 2px bílý focus outline s offsetem 4px. Pod 760px se lišta vrací do toku dokumentu a kotvy scrollují horizontálně.

**Datový rail (vlevo)** — uppercase 0.72rem bloky popisků, každý řádek oddělený spodní `rule-white` linkou: popisek v `secondary`, hodnota bílá, `font-weight: 300`. Pod nimi seznam vybíratelných položek jako full-bleed čtvercová tlačítka, která **invertují na bílou** při hover a v aktivním stavu.

**Výsledkový rail (vpravo)** — jedno monumentální display číslo (~2.3rem), pak definition list: popisek vlevo, tabulární hodnota vpravo, řádky oddělené 1px tečkovanou `rule-white`. Na konci stavový blok orámovaný plnou bílou linkou nahoře i dole.

**Signature field** — canvas ve středu hera: husté vertikální bílé stopy na černé, barcode pole generované z **pevného seedu, takže se vykreslí identicky při každém načtení**, protnuté jednou 1.5px sinusovou stopou s pomalu driftující fází. Nad ním malé boxované popisky (1px bílý rám, černá výplň, uppercase 0.69rem) značící body v poli, plus vpravo zarovnaná verdict line v display řezu, max 18 znaků. Pod `prefers-reduced-motion: reduce` se stejná kompozice vykreslí jako statický snímek. Tento drift je **jediná** animace v systému; všechno ostatní je nanejvýš 240ms `ease-out` změna opacity.

**Selektorový pás** — 7 buněk přes celou šířku (`repeat(7, 1fr)`, min-height 128px), každá čtvercové tlačítko s 1px `rule-white` děličem, tříradový grid (popisek / pruh / hodnota). Pruh je barcode gradient v `currentColor`, jehož **šířka kóduje velikost** (`--strength: 100% … 4%`). Hover i aktivní stav invertují celou buňku na bílou. Pod 760px horizontálně scrollovatelný s `minmax(92px, 1fr)`.

**Evidence figures** — screenshoty projektů, mapy a grafy jsou **důkaz přes celou šířku, ne náhledy**. Orámované 1px bílou linkou, popisek jako flex řádek: popis vlevo, rozlišení / datum / odkaz vpravo, uppercase 0.72rem, oddělené horní linkou. Každá figura odkazuje na plné rozlišení. Na mobilu scrollují horizontálně v nativní velikosti (`width: auto; height: 440px`), místo aby se zmenšily do nečitelnosti.

**Ledgery** — CV řádky, metadata projektů a poznámky k metodě jsou definition listy nebo tříslopcové gridy: popisek / hodnota / poznámka, 1px `rule-white` hranice buněk, uppercase 0.82rem. Hlavičkové buňky **invertují na bílou**, stejně jako vybraná ovládání.

**Sequence row** — pro proces nebo pipeline: grid `repeat(4, 1fr 44px) auto` — každý krok monumentální display číslo s uppercase popiskem pod ním, oddělené 28px 1px bílou linkou zakončenou o 45° otočeným hrotem, končící invertovaným bílým výsledkovým blokem.

**Answer strip** — přímo pod hero: tříslopcový řádek velkých tvrzení (`clamp(1.05rem, 1.4vw, 1.4rem)`), rozdělený 1px `rule-white` verticals, s klíčovými frázemi v display řezu na `1.2em`. Tohle je krátká odpověď na „kdo to je a co dělá" — nesmí se schovat za metodologii.

**Footer** — min-height 100px, barcode glyph vlevo, uppercase 0.68rem metadata rozprostřená přes řádek, pod 760px do sloupce.

---

## Interakce a přístupnost

- Focus je vždy viditelný: `outline: 2px solid #fff; outline-offset: 4px`.
- Hover stav jakéhokoli ovládání je úplná inverze, nikdy tón ani nadzvednutí.
- Odkazy dědí barvu, `text-decoration-thickness: 1px`, `text-underline-offset: 0.24em`.
- Kontrast je konstrukcí triviálně AA/AAA; `secondary` se nedává na drobnou typografii.
- Všechny husté tabulky a figury zůstávají horizontálně prohlédnutelné na úzkých displejích.

---

## Data

Každé číslo na ploše pochází z datové vrstvy (`src/data/content.ts`) nebo je z ní odvozené (`src/lib/instrument-metrics.ts`). Přístrojový jazyk nesmí svádět k vymýšlení hodnot: `PRODUCT.md` zakazuje vymyšlená čísla, reference a benchmarky. Pruh v selektoru kóduje počet položek v kategorii dovedností, protože to je spočitatelné; nekóduje sebehodnocenou „úroveň".

---

## Do

- Zabírat celou šířku prohlížeče a každou hranici vykreslit přesně 1px linkou.
- Vystavovat reálná čísla — souřadnice, data, velikosti, doby trvání, rozlišení — jako tabulární hodnoty přímo v rozhraní.
- Stav stavět inverzí, hierarchii opacitou bílé plus škálou.
- Držet seedované pole deterministické a statické, když je vyžádán reduced motion.

## Don't

- Nepřidávat vycentrovaný obsahový strop, zaoblené rohy, stíny, měkkou elevaci ani dashboardovou omáčku.
- Nezavádět akcentní barvu, tónovanou plochu ani druhou rodinu písma.
- Neredukovat důkaz o projektu na dekorativní náhled.
- Nepřidávat ornamentální pohyb — žádný fade-in-on-scroll, žádný parallax, žádné hover lift.
