---
name: Petr Mikeska — Portfolio
description: Topografický list jako osobní web — papírová plocha, půlnoční mapové pole, vrstevnice jako podklad.
colors:
  topo: "oklch(0.38 0.09 165)"
  topo-light: "oklch(0.92 0.03 165)"
  terracotta: "oklch(0.62 0.16 35)"
  hero-bg: "oklch(0.16 0.03 165)"
  hero-text: "oklch(0.97 0.005 80)"
  parchment: "oklch(0.97 0.007 75)"
  parchment-dark: "oklch(0.94 0.009 75)"
  card: "oklch(0.99 0.004 75)"
  ink: "oklch(0.22 0.015 50)"
  ink-muted: "oklch(0.50 0.01 50)"
  border: "oklch(0.90 0.008 75)"
  input: "oklch(0.92 0.006 75)"
  destructive: "oklch(0.577 0.245 27.325)"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(3.5rem, 8vw, 8rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  lead:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "clamp(1.1rem, 2vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.375
    letterSpacing: "normal"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  body-compact:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.025em"
  mono-label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.3em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  hair: "4px"
  tight: "8px"
  gutter: "24px"
  stack: "48px"
  heading: "64px"
  section: "96px"
  section-lg: "128px"
components:
  button-primary:
    backgroundColor: "{colors.hero-text}"
    textColor: "{colors.hero-bg}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 28px"
  button-primary-hover:
    backgroundColor: "{colors.hero-text}"
    textColor: "{colors.hero-bg}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.hero-text}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "10px 28px"
  tag-pill:
    backgroundColor: "{colors.topo-light}"
    textColor: "{colors.topo}"
    rounded: "{rounded.full}"
    padding: "2px 10px"
    size: "0.625rem"
  skill-pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-compact}"
    rounded: "{rounded.full}"
    padding: "4px 14px"
  skill-pill-hover:
    textColor: "{colors.topo}"
  project-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  lang-toggle:
    backgroundColor: "#ffffff"
    textColor: "#000000"
    rounded: "{rounded.full}"
    height: "36px"
    width: "36px"
  contact-link-icon:
    backgroundColor: "transparent"
    textColor: "{colors.terracotta}"
    rounded: "{rounded.md}"
    height: "36px"
    width: "36px"
---

# Design System: Petr Mikeska — Portfolio

## Overview

**Creative North Star: "Topografický list"**

Web je mapový list. Ne web *o* mapách — mapový list samotný, jehož obsahem je shodou okolností člověk. Světlé sekce jsou papírová podložka, na které je list vytištěn; tmavé sekce (hero, kontakt, patička) jsou totéž pole zobrazené na obrazovce, kde se z papíru stává terén. Napříč oběma běží stejné sedmilinkové vrstevnicové pole, stejná mono legenda a stejná terracottová kóta. Návštěvník nečte stránku, čte výřez.

Atmosféra je přesná a zdrženlivá. Prázdné místo mezi sekcemi (96 px, na desktopu 128 px) je součástí sdělení, ne mezera, kterou je třeba zaplnit — přesně jako bílá plocha kolem izolinie. Odbornost se dokazuje pořádkem: jedním rodinným rozhraním, jedním rytmem, jednou barvou navíc. Kontrolní otázka pro jakýkoli nový prvek zní **„je to podklad, linka, nebo legenda?"** Co není ani jedno, na list nepatří.

Barva je vzácná záměrně. Vrstevnicová zeleň nese strukturu a odkazy; kóta terracotta se objeví jen jako značka — 4px odrážka, 64×2px podtržení pod nadpisem, ikona na 70 % krytí. Systém odmítá glassmorphismus, barevnou záři a jakoukoli druhou zelenou větev; jsou to potvrzené anti-reference, ne jen nevyužité možnosti.

**Key Characteristics:**
- Dva podklady, žádný třetí: teplý parchment nebo půlnoční topo pole
- Vrstevnice jako jediný dekorativní prvek, kreslený jednou při vstupu
- Instrument Serif pojmenovává, Space Grotesk vysvětluje, mono měří
- Ploché povrchy s hairline linkou; stín výhradně jako odpověď na stav
- Pilulky pro hodnoty a akce, 8px desky pro obsah — nic mezi tím
- Jediný směr pohybu: 32 px zdola, 700 ms, ease-out

## Colors

Paleta je teplá papírová stupnice se dvěma akcenty vytaženými z mapového klíče — nic dekorativního, nic doplňkového.

### Primary
- **Vrstevnicová zeleň** (`{colors.topo}`): nosná barva systému. Nese odkazy (`text-topo`), názvy zaměstnavatelů a institucí, popisky ve službách, hover stav dovednostních pilulek, obrys uzlů na časové ose vzdělání a focus ring. Je to barva linky — vždy tenká, vždy funkční.
- **Vrstevnicová zeleň — světlá** (`{colors.topo-light}`): jediná výplňová varianta zeleně. Používá se výhradně jako podklad tagových pilulek v projektech a službách, kde nese `{colors.topo}` text. Nikde jinde.

### Secondary
- **Kóta terracotta** (`{colors.terracotta}`): značka, ne plocha. Výskyty jsou spočitatelné: 4px odrážka u každé položky seznamu, 64×2px podtržení pod nadpisem sekce, číslice pořadí ve službách na 50 % krytí, ikony kontaktů na 70 % krytí, badge `49.5°N` u fotky v hero, levý okraj pull-quote v sekci O mně na 60 % krytí, hover stav odkazu na instituci.

### Neutral
- **Teplý parchment** (`{colors.parchment}`): výchozí podklad stránky. Sekce O mně, Praxe, Výzkum, Dovednosti a Služby na něm stojí bez další úpravy.
- **Parchment tmavší** (`{colors.parchment-dark}`): druhý papírový tón. Odděluje Vzdělání, Portfolio a Certifikace — nese rytmus stránky, ne důraz.
- **Karta** (`{colors.card}`): nejsvětlejší papír. Výhradně pro karty projektů, které se tak zvednou nad `{colors.parchment-dark}` bez použití stínu.
- **Inkoust** (`{colors.ink}`): veškerý primární text na papíře — nadpisy, jména, hodnoty.
- **Inkoust tlumený** (`{colors.ink-muted}`): souvislý text, popisy, období, lokace. Nejpoužívanější textová barva na světlé ploše.
- **Linka** (`{colors.border}`): hairline dělítka mezi položkami praxe a certifikací, obrys dovednostních pilulek, svislá osa v sekci Vzdělání, rámeček karet.

### Dark ground
- **Půlnoční topo pole** (`{colors.hero-bg}`): podklad hero, kontaktu a patičky. Není to černá — je to stejná zelená rodina (hue 165) ztlumená na L 0.16, takže vrstevnice na ní patří.
- **Papír na obrazovce** (`{colors.hero-text}`): text na tmavém poli a zároveň výplň primárního CTA. Pracuje v celé škále krytí od 100 % (nadpis) po 20 % (šipka dolů).

### Reserved
- **Destruktivní** (`{colors.destructive}`): definována v tokenech, na stránce zatím nepoužita — web nemá chybové stavy. Rezerva pro formuláře a validaci; nesmí se použít jako akcent.

### Named Rules

**The Kóta Rule.** Terracotta se objevuje jen jako značka: tečka, linka, číslice, ikona, jeden badge. Nikdy nevyplní plochu, nikdy nenese text delší než dvě slova a nikdy není interaktivní barvou. Její vzácnost je smysl — na výřezu má být spočitatelná.

**The Alias Rule.** Sémantické tokeny shadcn nejsou druhá paleta. `--primary` **je** `{colors.topo}`, `--accent` **je** `{colors.terracotta}`, `--ring` **je** `{colors.topo}`. Když se mění akcent, mění se v `@theme inline` na jednom místě a alias jde s ním. Nikdy jim nedávej nezávislou hodnotu.

**The Two Grounds Rule.** Každá sekce stojí buď na papíře (`{colors.parchment}` / `{colors.parchment-dark}`), nebo na poli (`{colors.hero-bg}`). Třetí podklad neexistuje — ani gradient mezi nimi, ani obrázkové pozadí.

## Typography

**Display Font:** Instrument Serif (fallback Georgia, serif) — pouze regular, kurzíva dostupná
**Body Font:** Space Grotesk (fallback system-ui, sans-serif) — váhy 300–700, reálně se používají 400/500/600
**Label/Mono Font:** systémový mono stack — **není definovaný v `@theme`**, jede na výchozím Tailwind `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`. Je to jediná typografická mezera v systému; ať už se doplní cokoli, musí to být úzký grotesk-mono, aby souřadnice v hero drželo v jedné linii.

**Character:** Instrument Serif má vysokou střední výšku a tenké přechody — na `clamp(3.5rem, 8vw, 8rem)` s leadingem 0.88 působí jako vytištěný název listu, ne jako headline. Space Grotesk pod ním je geometrický, mírně technický a nikdy nepřevezme hlas. Mono na 11 px s trackingem 0.3em není text, je to měřítko.

### Hierarchy
- **Display** (Instrument Serif 400, `clamp(3.5rem, 8vw, 8rem)`, leading 0.88, tracking −0.025em): pouze jméno v hero, zalomené na dva řádky. Jediný výskyt na celé stránce.
- **Headline** (Instrument Serif 400, 2.25rem, na ≥1024px 3rem): nadpisy sekcí přes `SectionHeading`. Vždy s 64×2px terracottovým podtržením 16 px pod textem.
- **Title** (Instrument Serif 400, 1.25rem): jména věcí — role v praxi, tituly ve vzdělání, názvy služeb a certifikátů. Karty projektů 1.125rem, featured karta 1.5rem.
- **Lead** (Instrument Serif 400, `clamp(1.1rem, 2vw, 1.45rem)`, leading 1.375): tagline v hero a věta v kontaktu. Serifový hlas ve zkratce.
- **Body** (Space Grotesk 400, 0.9375rem, leading 1.8): souvislý text v sekci O mně. Sloupce se drží v `max-w-4xl`, tedy zhruba 60–70 znaků.
- **Body compact** (Space Grotesk 400, 0.8125rem, leading 1.625): popisy karet a služeb. Hero intro sedí o něco výš na 0.875rem / leading 1.75.
- **Label** (Space Grotesk 500–600, 0.8125rem, tracking 0.025em): navigace, jména firem a institucí, nadpisy skupin dovedností (verzálky, 0.8125rem, 600).
- **Mono label** (mono 400, 0.6875rem, tracking 0.3em, verzálky): souřadnice v hero. Užší varianta trackingu 0.18em nese subtagline, 0.625rem hashtagy a číslice pořadí ve službách.

### Named Rules

**The Serif-Names-Things Rule.** Instrument Serif pojmenovává: člověka, sekci, roli, projekt, titul, službu. Vše, co vysvětluje, měří nebo naviguje, je Space Grotesk. Jediná povolená výjimka je kurzívní pull-quote na konci sekce O mně — a je jediná právě proto, že je výjimka.

**The Mono-is-Legend Rule.** Mono nese obsah mapové legendy: souřadnice, hashtagy, pořadová čísla, jednu podtitulkovou linku. Nikdy souvislý text, nikdy popisek tlačítka, nikdy hodnoty v kartách.

**The Opacity-Not-Color Rule.** Na tmavém poli se hierarchie dělá krytím jediné barvy (`{colors.hero-text}` na 100/85/60/55/40/35/30/25/20 %), ne přimícháváním šedé. Na papíře se dělá výměnou tokenu (`{colors.ink}` → `{colors.ink-muted}`), ne krytím.

## Layout

Jeden kontejner pro celou stránku: `max-w-6xl` (1152 px) s 24px vnitřním okrajem, vystředěný. Sekce se od sebe oddělují vertikálním prostorem 96 px, od 1024 px 128 px — žádné dělicí linky mezi sekcemi, rytmus nese střídání papírových tónů.

Text nikdy nevyužije plnou šířku kontejneru. Prózové a seznamové bloky se omezují na `max-w-3xl` (768 px, praxe, vzdělání, výzkum, certifikace), dvousloupcový text v O mně na `max-w-4xl` s mezerou 64 px mezi sloupci, pull-quote na `max-w-2xl`, hero intro na `max-w-xl`. Šířka 1152 px patří mřížkám, ne řádkům.

Mřížky: portfolio 1 → 2 → 3 sloupce s mezerou 20 px, první karta přes dva sloupce od 1024 px; dovednosti 1 → 2 → 3 s mezerou 48 px; služby 1 → 2 s mezerami 64 px vodorovně a 56 px svisle; hero je pětisloupcová mřížka 3 : 2, která se pod 1024 px skládá a fotka jde nahoru.

Zlom, na kterém se web láme, je jediný: **1024 px (`lg`)**. Tam se navigace sbaluje do hamburgeru, hero přechází z vedle-sebe na pod-sebe a sekce zvyšují svislý prostor. `md` (768 px) slouží jen k přidání sloupce v mřížkách; `sm` (640 px) jen k přeskládání dvojice nadpis/období z pod-sebe na baseline-zarovnanou řádku.

Nadpis sekce má vždy 64 px odstup od svého obsahu. Fixní navigace je 64 px vysoká a je průhledná, dokud návštěvník neposkroluje o 100 px; potom se podloží `black/70` s 24px blurem a hairline spodní linkou.

### Named Rules

**The One-Container Rule.** `max-w-6xl mx-auto px-6` je jediný kontejner v projektu. Nová sekce ho nepředefinovává, nezužuje ani nerozšiřuje — omezuje se dovnitř přes `max-w-*` na obsahu.

## Elevation & Depth

Systém je **plochý v klidu a reaguje stavem**. Hloubka se nese čtyřmi tóny papíru — `{colors.card}` 0.99 › `{colors.parchment}` 0.97 › `{colors.parchment-dark}` 0.94 › `{colors.hero-bg}` 0.16 — a jednou hairline linkou. Karta projektu leží na tmavším papíru bez stínu; že je to vrstva, se pozná podle tónu a rámečku, přesně jako se na mapovém listu pozná vrstva podle odstínu výplně.

Stín je vyhrazen pro odpověď na akci a pro jediný fyzický objekt na stránce.

### Shadow Vocabulary
- **Hover odpověď** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): karta projektu při najetí, spolu s přebarvením rámečku na `{colors.topo}` na 30 % krytí. Přechod 300 ms.
- **Fotografie** (`box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.4)`): portrét v hero. Jediný prvek, který je na stránce myšlen jako fyzický objekt položený na pole — proto smí mít stín i v klidu.
- **Badge** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1)`): terracottová kóta `49.5°N` připnutá k rohu fotografie. Patří k fotografii, ne k systému.

### Named Rules

**The Flat-at-Rest Rule.** Povrch je v klidu plochý. Stín se objeví výhradně jako odpověď na hover nebo focus a zase zmizí. Nová komponenta, která má stín ve výchozím stavu, je chyba — jedinou výjimkou je fotografie v hero.

## Shapes

Formální jazyk má dva tvary a nic mezi nimi. **Pilulka** (`{rounded.full}`) pro vše, co je hodnota nebo akce: tagy projektů a služeb, dovednosti, specializace v hero, obě CTA, CV odkaz v navigaci, přepínač jazyka, badge kóty. **Deska** (`{rounded.lg}`, 8 px) pro vše, co drží obsah: karty projektů, fotografie. Menší 6px rádius (`{rounded.md}`) se objevuje jen u 36×36px rámečků ikon v kontaktu a u shadcn primitiv (tlačítko, input) — je to služební rádius, ne výrazový.

Rámečky jsou vždy 1 px a vždy hairline: na papíře `{colors.border}`, na poli `{colors.hero-text}` na 10–25 % krytí. Nikde není 2px rámeček kromě jediného místa — 15px kroužek uzlu na časové ose vzdělání, který má 2px obrys `{colors.topo}` a výplň v barvě podkladu, takže vypadá jako proražený otvor v listu.

Podpisová geometrie je vrstevnicové pole: sedm bézierových křivek přes viewBox 1400×800, tloušťka 0.8–1.6 px a krytí 6–13,5 %, `preserveAspectRatio="xMidYMid slice"`. Kreslí se jednou od stroke-dashoffset 3000 do nuly za 4 s ease-out se zpožděním 0.2–1.7 s; v kontaktu se vykreslí staticky (`animate={false}`), protože tam už je návštěvník doma.

### Named Rules

**The Pill-or-Sheet Rule.** Nový prvek je buď pilulka, nebo 8px deska. `rounded-sm`, `rounded-xl` a `rounded-2xl` jsou v tokenech dostupné, ale na stránce se nepoužívají — sáhnout po nich znamená zavést třetí tvarový jazyk.

## Components

### Buttons
- **Shape:** vždy pilulka (`{rounded.full}`), vnitřní odsazení 10 × 28 px, velikost textu 0.875rem, váha 500.
- **Primary:** plná výplň `{colors.hero-text}` s textem `{colors.hero-bg}` — na tmavém poli je to inverze, tedy nejsvětlejší plocha na stránce. Hover ztlumí krytí na 90 %, nic víc.
- **Ghost:** průhledné pozadí, 1px rámeček `{colors.hero-text}` na 20 % krytí, text na 70 %. Hover posune rámeček na 40 % a text na 100 %. Přechod 300 ms, `transition-all`.
- **Focus:** shadcn primitiva používají 1px `--ring` (`{colors.topo}`). Vlastní odkazová tlačítka v hero focus stav nemají — je to známý dluh, ne záměr.
- **shadcn `<Button>`:** existuje s plnou sadou variant, ale v sekcích se nepoužívá; sekce staví CTA jako stylované `<a>`. Kdo přidá formulář, ať drží shadcn variantu `default` (`bg-primary`), která je barevně totožná s `{colors.topo}`.

### Pills (tags & skills)
- **Tag pilulka:** výplň `{colors.topo-light}`, text `{colors.topo}`, 0.625rem, váha 500, odsazení 2 × 10 px. Projekty a služby.
- **Dovednostní pilulka:** bez výplně, 1px rámeček `{colors.border}`, text `{colors.ink-muted}` 0.8125rem, odsazení 4 × 14 px. Hover přebarví rámeček i text na `{colors.topo}` (rámeček na 40 % krytí), kurzor zůstává `default` — není to odkaz, je to hodnota.
- **Specializace v hero:** stejná geometrie jako dovednostní pilulka, ale v tmavém režimu — rámeček `{colors.hero-text}` na 15 %, text na 60 %, 0.6875rem.

### Cards
- **Corner Style:** 8 px (`{rounded.lg}`).
- **Background:** `{colors.card}` na podkladu `{colors.parchment-dark}`.
- **Border:** 1px `{colors.border}`, na hover `{colors.topo}` na 30 %.
- **Shadow Strategy:** žádný v klidu, hover odpověď — viz Elevation & Depth.
- **Internal Padding:** 24 px, výška 100 % ve sloupci, obsah ve flexu s odkazy přitisknutými ke spodku (`mt-auto`).
- **Featured varianta:** první karta v mřížce zabírá dva sloupce a od 1024 px se překlápí do vodorovného rozvržení s mezerou 40 px; blok tagů a odkazů jde doprava dolů.

### Navigation
- **V klidu:** průhledná, jméno „PM" serifem 1.25rem v `{colors.hero-text}`, položky 0.8125rem váhy 500 na 60 % krytí.
- **Po 100 px scrollu:** `black/70` s 24px blurem, spodní hairline `white/5`, položky přecházejí na `white/50`. Přechod 500 ms pro pruh, 300 ms pro barvy.
- **CV odkaz:** pilulka s rámečkem, 14×14px ikona stažení, odsazení 6 × 16 px.
- **Mobil (<1024 px):** hamburger otevře panel `black/90` s blurem, animovaný přes `max-height`, položky 0.875rem pod sebou s odstupem 12 px.

### Signature: SectionHeading
Nadpis sekce je serifový text 2.25rem (3rem od 1024 px) s podtržením 64 × 2 px, 16 px pod ním, a 64px odstupem k obsahu. Podtržení je terracottové na papíře a `{colors.hero-text}` na 30 % krytí na tmavém poli (prop `light`). Je to jediný povinný ornament systému — každá sekce ho má, žádná ho nemá jinak.

### Signature: ContourBg
Absolutně pozicované SVG pole vrstevnic, `pointer-events: none`, dědí barvu přes `currentColor` z rodiče (`text-hero-text`). Používá se ve dvou místech — hero (animované) a kontakt (statické). Nikdy nepatří na papírovou sekci; kontrast na parchment by ho buď zneviditelnil, nebo by musel být tak silný, že by přebil obsah.

### Signature: Reveal
Vstupní obal každého bloku: `opacity 0 → 1`, `translateY(32px) → 0`, 700 ms, ease-out, s `transitionDelay` předaným v ms. Stagger je 60–150 ms na položku podle hustoty sekce; hero jede po 100 ms od 100 do 600.

### Timeline node (Vzdělání)
Svislá 1px osa `{colors.border}` s 12px odsazením od horního i dolního okraje bloku, na ní 15×15px kroužky s 2px obrysem `{colors.topo}` a výplní `{colors.parchment-dark}`. Obsah je odsazen 40 px doprava, položky 56 px od sebe.

### Contact link
36×36px čtverec s 6px rádiusem, 1px rámeček `{colors.hero-text}` na 10 %, uvnitř 16px ikona `{colors.terracotta}` na 70 % krytí, vedle popisek 0.875rem. Hover přebarví rámeček na `{colors.terracotta}` na 40 % a text na plný `{colors.hero-text}`.

### Language toggle
36×36px bílý kruh s černým textem „CS" / „EN" 0.6875rem, váha 600. Při přepnutí proběhne 450ms `flag-flip` — rotace kolem osy Y s krátkým zmenšením na 80 %. Je to jediný rotační pohyb v celém systému a je záměrně mimo pravidlo směru: má připomínat otočení karty, ne příchod obsahu.

## Do's and Don'ts

### Do:
- **Do** postav každou novou sekci na `max-w-6xl mx-auto px-6` a obsah omez zevnitř přes `max-w-3xl` / `max-w-4xl`. Test: žádný řádek souvislého textu nepřesáhne ~70 znaků.
- **Do** střídej `{colors.parchment}` a `{colors.parchment-dark}` mezi sousedními papírovými sekcemi. Dvě sousední sekce se stejným podkladem splynou v jednu.
- **Do** obal každý blok do `<Reveal>` se stagger delayem 60–150 ms podle počtu položek. Sekce bez Reveal se od zbytku stránky pozná okamžitě.
- **Do** používej `SectionHeading` pro každý nadpis sekce, včetně propu `light` na tmavém poli. Vlastní `<h2>` je regrese.
- **Do** drž terracottu spočitatelnou: na jednom výřezu obrazovky by mělo jít ukázat prstem na každý její výskyt.
- **Do** dělej hierarchii na tmavém poli krytím `{colors.hero-text}`, ne novou barvou.
- **Do** ohlídej kontrast, když sahneš pod 40 % krytí. Současné `{colors.hero-text}/25` a `/20` u role v hero a copyrightu v patičce dávají zhruba 2 : 1 proti `{colors.hero-bg}` — jsou pod WCAG AA a jsou to známé slabé body, ne vzor k následování.
- **Do** definuj `--font-mono` v `@theme inline`, jakmile se mono rozšíří mimo hero. Systémový fallback se mezi Windows a macOS liší šířkou a souřadnice se rozjedou.

### Don't:
- **Don't** používej `backdrop-filter` ani glassmorphismus. Třídy `.glass-card` a `.glass-card-subtle` v `src/index.css` existují, ale **žádná komponenta je nevolá** — jsou to pozůstatky opuštěného směru a potvrzená anti-reference.
- **Don't** přidávej barevnou záři. `.glow-teal`, `.glow-teal-sm` a `@keyframes glow-pulse` jsou ze stejného opuštěného směru. Stín je odpověď na stav, ne světelný efekt.
- **Don't** zaváděj druhou zelenou větev. Zmíněné mrtvé třídy pracují s `oklch(0.55 0.15 175)` — jiný odstín než `{colors.topo}` (hue 165). Dvě zelené vedle sebe čtou jako chyba, ne jako paleta.
- **Don't** používej bounce, elastic ani spring easing. `animate-bounce` u šipky dolů v `src/components/sections/hero-section.tsx:133` je jediný zbývající výskyt a je to odchylka od systému — nahradit tlumeným posunem nebo krytím.
- **Don't** dávej `{colors.terracotta}` na plochu větší než 100 × 24 px a nikdy jí neobarvuj interaktivní prvek. Odkazy jsou zelené.
- **Don't** sahej po `{rounded.sm}`, `{rounded.xl}` ani `{rounded.2xl}`. Systém zná pilulku a 8px desku.
- **Don't** dávej stín do klidového stavu jakékoli nové komponenty.
- **Don't** používej Instrument Serif na souvislý text. Jediná povolená kurzívní výjimka je pull-quote v O mně.
- **Don't** vkládej `ContourBg` na papírovou sekci — vrstevnice patří jen na `{colors.hero-bg}`.
- **Don't** předefinovávej `--primary`, `--accent` ani `--ring` nezávisle na `{colors.topo}` / `{colors.terracotta}`. Jsou to aliasy, ne druhá paleta.
