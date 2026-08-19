# GEO Audit: petrmikeska.cz — re-check

**Datum:** 20. srpna 2026
**Předchozí audit:** 11. srpna 2026, skóre 38/100
**Cíl:** nasazený web `https://petrmikeska.cz` + lokální zdrojáky (branch `design/instrument`)
**Typ webu:** Agency/Services — osobní portfolio OSVČ s poptávkovou funkcí

---

## Proč re-check a ne nový audit

Předchozí audit vznikl nad **v1** layoutem a tvrdí, že hlavní route je `src/pages/v1-original.tsx`. To už neplatí — `src/App.tsx` dnes montuje `src/pages/v3-shadcn.tsx`, navigace má pět položek místo devíti a obsah je zhruba o 40 % kratší. Z jeho třicetidenního plánu byl zapracovaný jediný bod (favicon).

Tenhle běh navíc jako první **sáhl na nasazený web**, ne jen na zdrojáky. Tím se našlo to, co žádná analýza repozitáře najít nemohla.

---

## Executive Summary

**Celkové GEO skóre: 34/100 → 52/100 po opravách v této dávce**

Předchozí audit uzavřel, že obsah je dobrý, ale pro AI systémy neviditelný, protože build servíruje prázdný `<div id="root">`. To platí dál. Ale příčina je o patro výš, než se čekalo:

> **`petrmikeska.cz` aktivně odmítá AI crawlery na úrovni Cloudflare. Nedostanou ani tu prázdnou skořápku — dostanou HTTP 403.**

Proto je skóre po re-checku **nižší** než v srpnu, přestože se na webu odvedla práce. Původní audit měřil zdrojáky a tenhle problém vidět nemohl.

### Skóre podle kategorií

| Kategorie | 11. 8. | Dnes | Po této dávce | Váha | Měřeno |
|---|---|---|---|---|---|
| AI Citability | 35 | **20** | 55 | 25 % | ✅ přímo |
| Brand Authority | 30 | 30 | 30 | 20 % | ⚠️ odhad |
| Content E-E-A-T | 68 | **74** | 74 | 20 % | ✅ přímo |
| Technical GEO | 28 | **22** | 48 | 15 % | ✅ přímo (živě) |
| Schema & Structured Data | 30 | 30 | **85** | 10 % | ✅ přímo |
| Platform Optimization | 25 | **15** | 45 | 10 % | ✅ přímo (živě) |
| **Celkem** | **38** | **34** | **52** | | |

Sloupec „Po této dávce" předpokládá, že **krok A (Cloudflare) proběhne**. Bez něj zůstává reálné skóre na 34 bez ohledu na cokoli v repozitáři.

---

## Kritické nálezy

### K1 — Cloudflare blokuje AI crawlery (NOVÝ, nejzávažnější)

Doména má nameservery u Cloudflare (`algin.ns.cloudflare.com`, `leah.ns.cloudflare.com`) a A záznamy míří na Cloudflare anycast. Origin je WEDOS, ale provoz jde přes Cloudflare proxy — a ta má zapnuté blokování AI botů.

Naměřeno:

| User-Agent | HTTP |
|---|---|
| `Mozilla/5.0 … Chrome/131.0` | 200 |
| `curl/8.0` | 200 |
| `GPTBot/1.0` | **403** |
| `ClaudeBot/1.0` | **403** |
| `PerplexityBot/1.0` | **403** |

Odpověď nese `Server: cloudflare`, `CF-RAY: …-PRG`. Servírovaný `robots.txt` je Cloudflare Managed Content:

```
User-agent: *               Content-Signal: search=yes, ai-train=no, use=reference
User-agent: ClaudeBot       Disallow: /
User-agent: GPTBot          Disallow: /
User-agent: Google-Extended Disallow: /
User-agent: CCBot           Disallow: /
User-agent: Applebot-Extended, Bytespider, Amazonbot, meta-externalagent   Disallow: /
```

Blokované jsou tedy ChatGPT (GPTBot), Claude (ClaudeBot), Gemini grounding (Google-Extended) i Perplexity. `PerplexityBot` v robots.txt uvedený není, ale 403 dostane taky — edge pravidlo je širší než ten seznam.

`PRODUCT.md` označuje citovatelnost AI systémy za rovnocenný cíl (d). Ten cíl je dnes vypnutý přepínačem v cizím dashboardu.

**Oprava:** Cloudflare → Security → Bots → vypnout *Block AI bots*; Security → Settings → Manage robots.txt → vypnout *Managed robots.txt*; zkontrolovat WAF Managed rules. Není to změna v kódu a nejde ji udělat z repozitáře.

### K2 — Prázdný `<div id="root">` (trvá z minula)

`dist/index.html` po čerstvém buildu:

```html
<body>
  <div id="root"></div>
</body>
```

Veškerý text vzniká z `assets/index-*.js` (414 kB). Crawler, který nespouští JS, vidí jen `<head>`.

**Zmírněno v této dávce** přes `public/llms.txt` — statický markdown s celým obsahem webu, který žádný runtime nepotřebuje. Není to náhrada prerenderingu, ale je to dokument, ze kterého lze citovat.

**Plná oprava:** build-time prerendering (`vite-react-ssg`), o kterém `PRODUCT.md` už rozhodl. Samostatná dávka.

### K3 — EN verze nemá URL (trvá z minula)

`src/contexts/language-context.tsx` drží jazyk v `localStorage`. Žádná `/en` route, žádný `hreflang`, statické HTML je vždy `lang="cs"`. `react-router-dom` je v `package.json`, ale `grep -rn "react-router" src/` nevrací nic. Pro crawler anglická verze neexistuje.

**Neopraveno** — patří k prerenderingové dávce spolu s `.htaccess` rewrite pravidly pro WEDOS.

---

## Opraveno v této dávce

| ID | Nález | Stav |
|---|---|---|
| H1 | Chybí `robots.txt`, `sitemap.xml`, `llms.txt` | ✅ generuje `scripts/generate-static-seo.mjs`, zapojeno do `npm run build` |
| H2 | JSON-LD rozporné se zdrojem pravdy | ✅ viz níže |
| H3 | Title a description propagují opuštěný positioning („Remote Sensing" v popředí) | ✅ přepsáno na computer vision + GIS |
| M2 | `og:image` míří na neexistující `/assets/img/passport.webp` | ✅ opraveno na `/passport.webp`, doplněny rozměry a `og:locale` |
| M3 | Favicon byl logo Vite | ✅ (už v srpnu) |
| M4 | Žádné datum aktualizace | ✅ `dateModified` v JSON-LD + `<time>` v patičce, hodnota z `define` při buildu |
| M5 | CMP skript před obsahem hlavičky | ✅ přesunut na konec `<head>` |

### H2 — rozpory v JSON-LD

Čtyři pole si odporovala s `src/data/content.ts`:

| Pole | Bylo | Je |
|---|---|---|
| `sameAs` LinkedIn | `/in/petr-mikeska-b25669262/` | `/in/mikeskapetr` |
| `sameAs` GitHub | `github.com/metrpikeska` | `github.com/MetrPikeska` |
| `email` | `petr@petrmikeska.cz` | `piter.mikeska@gmail.com` |
| `jobTitle` | „GIS Analyst & Geoinformatics Student" | „Geoinformatik — GIS analytik a computer vision" |

Jediný uzel `Person` nahrazen `@graph` se čtyřmi uzly: `WebSite`, `ProfilePage`, `Person` (nově `worksFor`, `alumniOf`, `address`, `hasCredential`, `knowsLanguage`, přepsané `knowsAbout`) a `ScholarlyArticle` pro bakalářskou práci na `/bp/`.

---

## Co zůstává otevřené

| Priorita | Položka |
|---|---|
| **Kritická** | K1 — vypnout blok AI crawlerů v Cloudflare *(mimo repozitář)* |
| **Vysoká** | K2 — build-time prerendering (`vite-react-ssg`) |
| **Vysoká** | K3 — `/en` URL, `hreflang`, `.htaccess` pro WEDOS |
| Střední | Adresovatelnost projektů — devět témat na jedné URL (H4 z minula) |
| Střední | `services[].question` je jen podtitulek karty, ne nadpis, na který by šlo odpovědět (M1 z minula) |
| Nízká | `public/bp/` má vlastní `ScholarlyArticle` schema, ale není odkázaná z hlavní stránky |
| Nízká | Brand Authority (30/100) je pořád odhad — vyžaduje scan zmínek mimo web |

---

## Verifikace

```bash
# Krok A — po zásahu v Cloudflare musí crawlery projít
for ua in "GPTBot/1.0" "ClaudeBot/1.0" "PerplexityBot/1.0"; do
  curl -s -o /dev/null -w "%{http_code} $ua\n" -A "$ua" https://petrmikeska.cz/
done                                          # očekáváno 200, dnes 403

curl -s https://petrmikeska.cz/robots.txt | grep -i "claudebot\|gptbot"
curl -s -o /dev/null -w "%{http_code}\n" https://petrmikeska.cz/llms.txt

# Repozitář
npm run build && npm run lint
node -e "const h=require('fs').readFileSync('index.html','utf8');
  JSON.parse(h.match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/)[1]);
  console.log('JSON-LD OK')"
```

Schema navíc projít přes <https://validator.schema.org/>. Po nasazení ověřit náhled odkazu na LinkedInu — `og:image` byl rozbitý od začátku.

---

## Metodická poznámka

Předchozí audit četl jen repozitář a proto nemohl najít K1 — nejzávažnější nález celého webu byl mimo kód. Každý další běh musí sahat na nasazenou doménu, ne jen na `dist/`.
