# CV

Životopis sázený v [Typstu](https://typst.app). Jeden zdroj faktů, osm PDF.

`cv/` je mimo Vite graf — `npm run build` se ho nedotkne. Hotová PDF ale končí
v `public/assets/resume/`, odkud je Vite kopíruje do `dist/`, takže odkaz
`hero.cvUrl` v `src/data/content.ts` funguje bez zásahu do kódu.

## Sestavení

```powershell
winget install --id Typst.Typst     # jednou; potřeba restart shellu kvůli PATH
.\cv\build.ps1                      # všech 8 PDF
.\cv\build.ps1 -Variant gis -Lang en -Open
.\cv\build.ps1 -Png                 # náhledy místo PDF
```

Iterace na jedné variantě je rychlejší přes watch:

```powershell
typst watch --root . --input variant=general --input lang=cz cv\cv.typ cv\out\preview.pdf
```

## Varianty

| Soubor v `public/assets/resume/` | Varianta | Jazyk | Rozsah |
|---|---|---|---|
| `Petr_Mikeska_CV.pdf` | general | CZ | 2 strany |
| `Petr_Mikeska_CV_en.pdf` | general | EN | 2 strany |
| `Petr_Mikeska_CV_geoai.pdf` (+`_en`) | computer vision / GeoAI | CZ / EN | 2 strany |
| `Petr_Mikeska_CV_gis.pdf` (+`_en`) | geoinformatika | CZ / EN | 2 strany |
| `Petr_Mikeska_CV_academic.pdf` (+`_en`) | akademická | CZ / EN | 3 strany |

`Petr_Mikeska_CV.pdf` si drží název záměrně — je to adresa, na kterou už web
odkazuje.

## Struktura

```
cv.typ                vstupní bod, dispatch varianty a jazyka přes --input
data/cv-data.typ      všechna fakta, právě jednou
lib/template.typ      sazba: stránka, fonty, show rules, stavební prvky
lib/render.typ        skládá sekce z dat podle profilu varianty
variants/*.typ        deklarace varianty — žádná fakta, žádná sazba
build.ps1             matice varianta × jazyk
```

Fakta jsou v `data/`, vzhled v `lib/`, výběr ve `variants/`. Ta hranice je
smyslem celé konstrukce — nemíchat.

## Jak se přidá nebo změní fakt

Vše v `data/cv-data.typ`. Řetězce, které se liší jazykem, jsou dvojice
`(cz: …, en: …)` **hned vedle sebe**. Právě proto, že český a anglický text leží
na sousedních řádcích, se nemůže stát to, co se stalo `src/data/content.en.ts` —
totiž že se anglická verze tiše rozejde s českou. Chybějící `en:` se pozná hned.

Hodnoty s kurzívou nebo odkazem musí být obsah `[…]`, ne řetězec `"…"` —
v řetězci se markup nevysází.

Čísla se píšou s běžnou mezerou (`199 800`); na nezlomitelnou je převede
show rule v `lib/template.typ`.

### Tagy

Každá odrážka, práce, projekt a dovednost nese `tags`. Varianta v `variants/*.typ`
deklaruje, které tagy ji zajímají, a `lib/render.typ` podle toho vybírá.

| Tag | Význam |
|---|---|
| `core` | ukaž vždy, v každé variantě |
| `geoai` | computer vision, detekce, hloubka, fotogrammetrie |
| `3d` | LiDAR, mračna bodů, 3D rekonstrukce a modelování |
| `gis` | prostorové analýzy, databáze, DPZ, kartografie |
| `web` | webový vývoj, aplikace, provoz |
| `biz` | vedení, provoz, obchodní stránka |
| `acad` | jen akademická varianta |
| `full` | jen dlouhé varianty (obecná, akademická) |

Výběr odrážek uvnitř jedné položky: `core` se vezme vždy, zbytek se doplní podle
tagů varianty s předností pro `profile.focus`, ořízne se na `max-bullets`
a nakonec se seřadí zpět do pořadí, v jakém stojí v datech — aby položka četla
přirozeně. Tagy proto rozhodují *co*, data rozhodují *v jakém pořadí*.

Tagy, ne indexy: seznam typu `bullets: (0, 3, 1)` by se tiše rozbil při každém
vložení odrážky a nikdo by si toho nevšiml.

## Cílený životopis na konkrétní inzerát

```powershell
mkdir cv\targeted
copy cv\variants\targeted.typ cv\targeted\firma.typ
# upravit tags, focus, headline a profile-text podle inzerátu
.\cv\build.ps1 -TargetFile cv\targeted\firma.typ -Lang en
```

`cv/targeted/` i `cv/out/` jsou mimo git a mimo `public/`. CV napsané pro jednu
firmu nemá být k nalezení druhou — web nemá žádnou autorizaci.

## Sazba

Písmo je **Libertinus Serif**, zabudované přímo v binárce Typstu. Build proto
běží s `--ignore-system-fonts`: sazba pak dopadne stejně na tomhle stroji,
na notebooku i na CI. Systémové Calibri nebo Georgia by tuhle vlastnost zrušily.

České dělení slov obstará `lang: "cs"`. Nezlomitelné mezery po jednopísmenných
předložkách a v tisícových skupinách řeší show rules v `lib/template.typ` —
`\b` je nulové šířky, takže i „a v roce" chytí obě předložky.

`date: none` v `set document` drží PDF bajt po bajtu stejné, takže přegenerování
beze změny obsahu nedělá diff v gitu.

## Zdroj dat

Fakta pocházejí z `src/data/content.ts` (kanonická česká verze webu),
`CLAUDE_PORTFOLIO_CONTEXT.md` a `PRODUCT.md`. **Ne** z `src/data/content.en.ts` —
ten je vůči češtině zastaralý (chybí v něm CEDA Maps i VečerkaPlus, Skymaps je
duplicitní a má špatné datum).

Platí omezení z `PRODUCT.md`: žádné vymyšlené reference ani metriky, a u CEDA Maps
se popisují metody a řády, ne konkrétní produkční čísla.

Změna faktu se musí promítnout sem **i** do `src/data/content.ts`. Tyhle dva
zdroje spolu git nesynchronizuje.
