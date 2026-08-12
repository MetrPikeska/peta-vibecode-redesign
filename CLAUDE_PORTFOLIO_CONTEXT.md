# CONTEXT — Petr Mikeska Portfolio Web
> Tento soubor slouží jako kontext pro Claude Code při přestavbě portfolio webu petrmikeska.cz.
> Aktualizováno: 31. 5. 2026 (v2 — GitHub repos + Premium Systems)

---

## 1. OSOBNÍ PROFIL

| | |
|---|---|
| **Jméno** | Petr Mikeska |
| **Věk** | 23 let (25. 4. 2003) |
| **Bydliště** | Čeladná / Olomouc |
| **Kontakt** | piter.mikeska@gmail.com · +420 773 426 330 |
| **Web** | petrmikeska.cz |
| **GitHub** | github.com/MetrPikeska |
| **LinkedIn** | linkedin.com/in/mikeskapetr |
| **IČO** | 23195126 |

**Positioning (headline):**
GIS Analyst · GeoAI & Computer Vision · Web GIS Developer

**Bio (krátká):**
Student Mgr. geoinformatiky a kartografie na PřF UP Olomouc. Pracuji na pomezí prostorové analýzy, computer vision a webového vývoje. GIS analytik (OSVČ) u CEDA Maps — práce na ML pipeline pro detekci defektů a značek na komunikacích (YOLO, PostGIS). Co-founder VečerkaPlus.cz. Původem z Beskyd.

---

## 2. VZDĚLÁNÍ

| Stupeň | Škola | Obor | Období |
|---|---|---|---|
| SŠ – maturita | SSINFOTECH Frýdek-Místek | Programování a vývoj aplikací – Internet věcí | 2018–2022 |
| Bc. | PřF UP Olomouc | Geoinformatika a kartografie | 2022–2025 |
| Mgr. (probíhá) | PřF UP Olomouc | Geoinformatika a kartografie | 2025–2027 |

**Bc. závěrečná práce:** GIS toolbox pro hodnocení dostupnosti zelených ploch a parků ve městech (ArcPy, Network Analyst, Olomouc/Brno/Ostrava) — hodnocení B

**Mgr. diplomová práce:** Evaluace kvality map generovaných AI pomocí objektních metrik a kartografické analýzy. Porovnání výstupů LLM (ChatGPT, Claude, Gemini, Mistral, GitHub Copilot) vs. tradiční GIS workflow. Python pipeline, Leaflet webmapa, choropleth, geopandas. GitHub: MetrPikeska/ai-generated-map-evaluation

**Erasmus:** Řecko, říjen 2026 – únor 2027

**Certifikace:**
- ESRI: Python for Everyone (2023)
- Cisco: Introduction to IoT (2020)
- ÚCL/EASA: Online výcvik pilota bezpilotních prostředků A1/A3 (2024)
- APUL: Instruktor snowboardingu APUL/D (platnost do 2027)
- ISSonVIS 2026 – International Spring School on Visualization, UPOL (2026)
- IRSSS 2026 – Blended Intensive Programme remote sensing (Stará Lesná, 7/2026)

---

## 3. PRACOVNÍ ZKUŠENOSTI

### CEDA Maps — GIS Analytik (OSVČ)
**Červen 2026 – současnost** · Brno, remote

R&D stáž pod vedením Mgr. Adama Štencka (vedoucí R&D). Práce na:
- **Rozvoj detekčního algoritmu:** Prostorová analýza StreetNet/TomTom dat → identifikace úseků kde dávají smysl dopravní značky. Filtrace tracků (GPS bbox, třída komunikace), příprava trénovacích cropů v různých podmínkách (vzdálenost, úhel, okluze, světlo). Python (pandas/geopandas, shapely), PostGIS, CVAT, spolupráce na engine Petra Šťastného.
- **Clusterování detekovaných defektů:** Sloučení detekcí z více průjezdů (Visioncraft, Geopost Vision) → eliminace duplicit. ST_ClusterDBSCAN v PostGIS, DBSCAN (sklearn/geopandas), návrh DB schématu.
- **Relativní lokalizace:** Zpřesnění polohy defektů/značek bez přesné GNSS. Map matching, feature-based localization vůči DTM/HD mapě, fúze GPS + vizuálních pozorování.
- **Rozvoj BP toolboxu:** Rozšíření ArcPy toolboxu pro dostupnostní analýzy.
- Stack: Python, PostGIS, CVAT, YOLOv8, geopandas, shapely, OpenCV

### Skymaps s.r.o. — GIS & Remote Sensing Analyst (OSVČ)
**Únor–Září 2025** (reálně ~4 měsíce aktivní práce)

- Zpracování satelitních snímků a rastrových dat
- Tvorba tematických map půdního potenciálu z DPZ dat
- Automatizace analytických kroků Pythonem
- Stack: QGIS, ArcGIS Pro, EO Browser, Python, SNAP

### Univerzita Palackého v Olomouci — Web Developer & Administrator
**Květen 2023 – současnost** (vedlejší spolupráce)

- Správa olomouckymajales.cz a meetup.upol.cz (celkem 199 800 návštěvníků, 452 000 zobrazení)
- WordPress, YOOtheme Builder

### Premium Systems s.r.o. — Drone Operator (freelance)
**2024–2025** · Ostrava / remote

- Droning pro firmu specializovanou na Business Continuity a kybernetickou bezpečnost
- Tvorba drone záběrů pro marketingové účely
- DJI Mini 3 Pro, A1/A3 certifikát

### Weiron Dynamics — Web Developer
**~2024, 4 měsíce**
- Tvorba firemních webů ve WordPressu (2–3 projekty)

---

## 4. PROJEKTY (portfolio)

### VečerkaPlus.cz — Co-founder & Lead Developer
**Březen 2026 – současnost** · Frýdek-Místek

Noční rozvoz alkoholu a doplňkového zboží (Pá–Ne 22:00–6:00). První noční rozvoz alkoholu v FM bez přímého konkurenta (Bolt Food/Wolt tuto kategorii v FM neprovozují).

**Tech stack:**
- Frontend: React 19 + Vite + TypeScript, CSS-in-JS (vlastní design systém), DM Sans + Libre Baskerville
- Backend/DB: Supabase (PostgreSQL + PL/pgSQL triggery + RLS), Vercel Edge Functions
- Integrace: Google Maps Distance Matrix API, Google Places API, Resend (emaily), Telegram Bot, Twilio
- DevOps: Vercel + GitHub CI/CD, sémantické verzování (v1.0 → v1.2)
- Analytika: GA4, Streamlit dashboard (Supabase napojení)
- Spatial: vlastní delivery zone whitelist z Google Distance Matrix API (1 093 grid bodů), ORS izochróna

**GIS analýza:** Samostatný repozitář `vecerkaplus-spatial` — RÚIAN, SLDB 2021, OSM POI, Google Distance Matrix, demografická analýza 265 783 obyvatel v 630 km² zóně.

**Status:** Aktivní provoz, 5 objednávek za první 4 týdny, průměrná tržba 452 Kč, marže 36,5 %.

**GitHub:** github.com/Vanilla57/VecerkaPlus (privátní)

---

### Vehicle Detection na Ortofotomapách — YOLOv8-OBB + GIS
**2025–2026** · UPOL / KGI · Prezentováno POGEO 2026

Detekce a prostorová analýza vozidel na ortofotomapách Olomouce. Kolaborátor Dan (georeferencing).

**Tech stack:**
- YOLOv8-OBB (Oriented Bounding Boxes) + SAHI (Slicing Aided Hyper Inference)
- supervision (Roboflow) pro vizualizaci a tracking
- GeoPandas, Shapely — Voronoi-based adresace, DBSCAN clusterování
- CVAT — anotace trénovacích dat
- CUDA (GTX 1060 3GB — VRAM constraints → SAHI nutný)
- Python pipeline: detekce → georeferencing → prostorová analýza → výstupy

**GitHub:** github.com/MetrPikeska/parking-video-analytics, parking-car-detection

---

### Pirátský Volební Atlas — Prostorová analýza volebních výsledků
**2025–2026** · POGEO / UPOL · Spolupráce s Vojtěchem Svobodou (SvobVojtech)

GWR model (R² = 0.445) vs OLS (R² = 0.188) pro 6 157 obcí ČR. Prediktory ze SLDB 2021.

**Tech stack:**
- PostGIS + PostgreSQL — datová základna
- FastAPI — REST API backend
- Leaflet — interaktivní volební atlas
- R — GWR/OLS analýza, eliminace prostorové autokorelace
- Python — data processing pipeline
- ArcGIS Pro — kartografické výstupy

**GitHub:** github.com/MetrPikeska/pirati-volebni-atlas

---

### AI Map Generation Evaluation — Diplomová práce (WIP)
**2025–2027** · PřF UPOL

Evaluace kvality map generovaných AI pomocí objektních metrik a kartografické analýzy.

**Tech stack:**
- Python — batch processing pipeline, statistické analýzy
- GIS metriky — porovnání s tradičními kartografickými výstupy
- Vizualizace výsledků

**GitHub:** github.com/MetrPikeska/ai-generated-map-evaluation

---

### Park Accessibility Toolbox — BP práce
**2024–2025** · PřF UPOL

ArcGIS toolbox pro hodnocení dostupnosti parků a zelených ploch ve městech (Olomouc, Brno, Ostrava).

**Tech stack:**
- ArcPy — toolbox, automatizace GIS workflow
- ArcGIS Pro + Network Analyst — síťová analýza dostupnosti
- Python — data processing

**GitHub:** github.com/MetrPikeska/park-accessibility-toolbox

---

### GONLI — Custom WebGIS Map App
**2026** · UPOL / KGI

Custom HTML mapová aplikace s workaroundem pro CORS/GetFeatureInfo limitace. Kombinace GeoServer WMS s ArcGIS Online WFS.

**Tech stack:**
- Vanilla JS + HTML/CSS
- GeoServer WMS + ArcGIS Online WFS
- OGC standardy (GetFeatureInfo, WMS, WFS)
- XSD validace

**GitHub:** github.com/MetrPikeska/gonli_zapocet, gonli-xsd

---

### GEOTE Klima — Web GIS platforma
**2025** · UPOL / KGI

Web GIS platforma pro klimatická a environmentální data.

**Tech stack:**
- PostGIS — databáze s REST API pro prostorové dotazy
- Python/Flask — backend
- Leaflet — interaktivní mapa
- PostgreSQL — prostorové indexy

**GitHub:** github.com/MetrPikeska/climatgis, geote-klima-ui

---

### VYGEO Opálená — Real-time IoT Web GIS + 3D Terrain
**2025** · UPOL / KGI

Interaktivní mapa skiareálu s 3D vizualizací terénu, real-time počasím a AI počítáním lyžařů.

**Tech stack:**
- Leaflet — interaktivní 2D mapa
- Three.js — 3D vizualizace terénu (DEM)
- PHP + MySQL — backend a databáze
- FastAPI + WebSocket — real-time IoT stream
- Python — AI skier counting, data processing

**GitHub:** github.com/MetrPikeska/VYGEO, vygeo-public

---

### Ski Cam Analytics — Computer Vision (neaktivní)
**2024** · Side projekt

Real-time detekce osob z HLS streamu skiareálu.

**Tech stack:**
- YOLO ONNX + Kalman filter tracking
- FastAPI + WebSocket + SQLite
- FFmpeg — HLS stream processing
- Chart.js — real-time dashboard

**GitHub:** github.com/MetrPikeska/ski-cam-analytics

---

### Roundabout Exit Detection — Computer Vision
**2025** · Side projekt

Detekce a počítání vozidel opouštějících kruhový objezd. Line-crossing logika.

**Tech stack:**
- YOLOv8 + tracking
- Shapely-based ROI a polygon logika
- State transition detection → export statistik do CSV
- Python, CUDA

**GitHub:** github.com/MetrPikeska/roundabout-exit-detection

---

### Aerial Object Detector — (privátní, WIP)
**2026** · Pravděpodobně CEDA-related nebo drone analytika

**Stack:** HTML/Python (private repo)
**GitHub:** github.com/MetrPikeska/aerial-object-detector (privátní)

---

### Slope Camera — (privátní, WIP)
**2026** · Ski resort CV analytika (navazuje na Ski Cam Analytics)

**Stack:** Python (private repo)
**GitHub:** github.com/MetrPikeska/slope-camera (privátní)

---

### Smart Growbox — IoT projekt
**2026** · Side projekt / hobby

**Stack:** C++ (embedded, Arduino/ESP32)
**GitHub:** github.com/MetrPikeska/smart-growbox (privátní)

---

### Freelance Web Projekty
**2024–2026**

Menší komerční a komunitní weby:
- `veve-coffe` — web pro kavárnu (CSS)
- `vojtech-svoboda-web` — osobní web pro spolužáka/kolegu (TypeScript)
- `dominikova-redesign` — redesign webu (JavaScript)
- `peta-vibecode-redesign` — forked redesign projekt (TypeScript)

---

### Znečištění ovzduší v MSK — Kartografická práce
**2024** · UPOL

Analytické a syntetické mapy znečišťujících látek v Moravskoslezském kraji.

**Tech stack:**
- GIS workflow — rastrová data, interpolace
- Kartografická vizualizace, analytické mapy

---

### Geo Places Quiz — WebGIS hra
**2024** · UPOL / side projekt

Procvičování znalostí ORP ČR (206 obcí) formou interaktivní mapy.

**Tech stack:**
- Leaflet + PostGIS — ČÚZK data, S-JTSK → WGS84
- Node.js/Express — API s kešováním a GZIP kompresí
- JavaScript

**GitHub:** github.com/MetrPikeska/geo-places-quiz

---

### Eye-Tracking — Vizuální pozornost v městském prostředí
**2026** · KGI/FF/VTP UP + Advolution + CleverMaps

Koordinátor terénního sběru dat a datový analytik pro výzkum Markéty Muczkovské.

- Logistická koordinace terénních jízd s eye-tracking brýlemi (Olomouc)
- Zpracování a čištění dat pohledů
- Tvorba ROI pro hodnocení vizuální expozice reklamy

---

### 3D Modelování Grot — UPOL
**Prosinec 2025 – únor 2026**

3D modely dvou grot včetně světelné a vodní instalace (fyzický 3D tisk).

**Tech stack:** Blender, 3D Builder

---

## 5. TECHNICKÝ STACK

### GIS & Spatial Tools
```
QGIS · ArcGIS Pro · ArcGIS Online · GeoServer · MapServer
GDAL/OGR · SNAP (Sentinel) · Agisoft Metashape · CloudCompare
OGC Standards (WMS/WFS/WCS/WMTS) · INSPIRE · EO Browser
```

### Programovací jazyky
```
Python (primary, pokročilý)
JavaScript / TypeScript (pokročilý)
SQL / PL/pgSQL (pokročilý)
R (GWR/OLS analýzy — středně pokročilý)
Bash (základní–středně pokročilý)
C++ (základní — IoT/Arduino)
C# (základní)
```

### Python ekosystém
```
Prostorová data:  GeoPandas · Shapely · Rasterio · Fiona · PyProj
Analýza:          Pandas · NumPy · SciPy · Scikit-learn · Matplotlib · Seaborn
Web/API:          FastAPI · Flask · Requests · HTTPX
CV/ML:            OpenCV · YOLOv8 (Ultralytics) · SAHI · supervision
                  ONNX runtime · TensorFlow (základní) · PyTorch (základní)
Anotace:          CVAT
Nástroje:         GDAL Python bindings · SQLAlchemy
```

### Web Technologies
```
Frontend:  React 19 · Vite · TypeScript · HTML5 · CSS3 · Three.js
Mapové:    Leaflet · OpenLayers (základní)
Backend:   FastAPI · Node.js/Express · Flask · PHP (základní)
BaaS:      Supabase · PocketBase (explorováno)
CMS:       WordPress · YOOtheme
Další:     REST API design · WebSocket · MQTT
```

### Databáze
```
PostgreSQL + PostGIS (primární, pokročilý)
Supabase (BaaS — PostgreSQL + Auth + Storage + Realtime)
MySQL · SQLite · PocketBase (základní)
```

### Infrastructure & DevOps
```
Git/GitHub (MetrPikeska)
Linux/Ubuntu (primární OS — desktop dual-boot, server)
Docker (základní)
Vercel (hosting + CI/CD)
Cloudflare Tunnel (home server expose)
```

### 3D & Visualization
```
Blender · MeshLab · CloudCompare
Chart.js · Plotly (základní) · Streamlit
```

### Hardware & Field
```
DJI Mini 3 Pro — certifikát A1/A3, Samsung EVO Plus 256 GB
GPS field mapping (Garmin, mobile GIS)
```

---

## 6. HARDWARE (development environment)

### Desktop (primární vývojová stanice)
```
CPU:  AMD Ryzen 7 2700X (8c/16t, 3.7–4.3 GHz)
GPU:  NVIDIA GTX 1060 3GB (VRAM constraint pro ML → SAHI nutný)
RAM:  32 GB DDR4 3200 CL16
SSD:  1 TB NVMe
MB:   Gigabyte B450 Aorus Elite
OS:   Dual-boot Ubuntu 22.04 + Windows 11
```

### Laptop (mobilní práce)
```
CPU: Intel i7-10510U (4c/8t)
RAM: 32 GB
OS:  Dual-boot Ubuntu + Windows 11
```

### Home Server
```
CPU: Intel Core i5-6200U (4 threads, 2.3–2.8 GHz)
OS:  Ubuntu Server 24.04
Běží: PostgreSQL/PostGIS · FastAPI
Pozn.: petrmikeska.cz zde NEBĚŽÍ — web je na hostingu WEDOS
```

### External Storage
```
Samsung T7 4 TB SSD (data, projekty, drony)
```

---

## 7. AKTUÁLNÍ PORTFOLIO WEB — co existuje

**URL:** petrmikeska.cz
**Hosting:** WEDOS
**GitHub repo:** github.com/MetrPikeska/petrmikeska (TypeScript)

**Aktuální sekce webu:**
- O mně
- Vzdělání
- Praxe (pracovní zkušenosti)
- Projekty
- Portfolio (projekty s tech stackem)
- Dovednosti
- Certifikace
- Služby (6 komerčních služeb)
- Kontakt

**Aktuální language switch:** CS/EN toggle (v záhlaví) — EN verze buď chybí nebo je neúplná

**Souřadnice v headeru:** 49.5167°N, 18.3333°E (Beskydy)

---

## 8. POŽADAVKY NA NOVÝ WEB (kontext pro přestavbu)

### Technologie nového webu
- **Stack:** React + Vite + TypeScript (konzistentní s VečerkaPlus)
- **Styling:** vlastní CSS / Tailwind — žádný heavy UI framework
- **Hosting:** WEDOS
- **Repo:** github.com/MetrPikeska/petrmikeska

### Co musí nový web obsahovat
1. **EN jako primární jazyk** (CZ jako sekundární) — důvod: EU trh, CEDA práce, Erasmus
2. **GeoAI + Spatial CV jako hlavní positioning** — ne jen "GIS student"
3. **CEDA stáž** prominentně — R&D práce je silný differenciátor
4. **Projekty s tech stackem** — každý projekt: co to dělá, jaký stack, GitHub odkaz
5. **VečerkaPlus** — produkčně nasazená aplikace s reálnými zákazníky
6. **Sekce Služby** — 6 komerčních nabídek (Spatial DB, Web GIS, Python automation, CV/GeoAI, DPZ, IoT)
7. **Kontakt s IČO** — fyzická osoba podnikající dle živnostenského zákona

### Co zlepšit oproti stávajícímu webu
- Odstranit zastaralé info (Skymaps jako "Současnost")
- EN first, CZ jako toggle
- Lepší vizuální hierarchie projektů (CEDA > VečerkaPlus > Vehicle Detection > ...)
- Mobilní responsivita
- SEO: klíčová slova GeoAI, Spatial Computer Vision, WebGIS developer
- Rychlejší load

### Tone & design
- Technický, ale přístupný — ne akademický, ne korporátní
- Dark mode preferován (konzistentní s VečerkaPlus "Night Operator" estetikou)
- Koordináty v headeru zachovat (osobní touch)
- Beskydy reference zachovat (původ, snowboard instruktor)

---

## 9. LINKEDIN & ONLINE PRESENCE

- **LinkedIn:** linkedin.com/in/mikeskapetr (73 connections, CZ profil)
- **LinkedIn headline:** "Geoinformatics & Cartography student @ UPOL · GIS Analyst · Computer Vision · Web Development"
- **GitHub:** github.com/MetrPikeska — **59 repozitářů** (veřejné + privátní), GitHub Pro
- **GitHub bio:** "Geoinformatics MSc student @ Palacký University · GIS • Computer Vision • GeoAI · Python | PostGIS"
- **Aktivita:** GeoArts sraz (přednáška UPOL KGI), InstallFest 2026 FEL ČVUT, přesdílí CV/ML obsah (Boxer, GrowerAdviser)

### Vybrané veřejné GitHub repos (aktuálně nejaktivnější)
```
aerial-object-detector    Private · HTML    (drone/CEDA detekce)
smart-growbox             Private · C++     (IoT growbox)
slope-camera              Private · Python  (ski resort CV)
Metr-Obs                  Private · Shell   (monitoring/Obsidian?)
vehicle-detection-ortophoto Public          (POGEO 2026 projekt)
ai-generated-map-evaluation Public · Python (diplomová práce)
roundabout-exit-detection   Public · Python (YOLOv8 traffic CV)
medpz-geoai                 Public · Python (DPZ + GeoAI)
pirati-volebni-atlas        Public · JS     (volební atlas)
geote-klima-ui              Public · JS     (klimatická WebGIS)
VYGEO                       Public · JS     (skiareál 3D WebGIS)
ski-cam-analytics           Public · Python (HLS stream detekce)
park-accessibility-toolbox  Public · Python (BP toolbox)
geo-places-quiz             Public · JS     (ORP quiz)
```

---

## 10. OBCHODNÍ INFORMACE

```
Petr Mikeska
Fyzická osoba podnikající dle živnostenského zákona
IČO: 23195126
Adresa: Čeladná 53, 739 12 Čeladná
Email: piter.mikeska@gmail.com
Tel: +420 773 426 330
```

---

## 11. KLÍČOVÉ KONTEXT NOTES pro Claude Code

- **GTX 1060 VRAM constraint:** při lokálním vývoji ML věcí používám SAHI jako workaround pro inference na velkých snímcích
- **Hosting:** petrmikeska.cz běží na WEDOS. Home server (i5-6200U) slouží jiným účelům (PostgreSQL/PostGIS, FastAPI), ne hostování webu
- **OSVČ vedlejší (student):** do 2027 kdy ukončím Mgr.
- **Kódování:** preferuji TypeScript přes JavaScript pro nové projekty
- **Tooling:** Claude Code + Obsidian vault pro project management
- **CLAUDE.md preference:** read-only analysis phase před změnami (viz moje workflow)
- **Portfolio iterace:** portfolio, portfolio-2, portfolio-3, portfolio-4, petrmikeska — aktuální live verze je `petrmikeska` (TypeScript)
- **vehicle-detection-ortophoto** je správné repo jméno pro POGEO projekt (ne parking-video-analytics jak bylo dříve uvedeno — to je starší roundabout projekt)
- **Premium Systems** — droning byl freelance/jednorázová spolupráce, ne dlouhodobý vztah

---

*Soubor: CLAUDE_PORTFOLIO_CONTEXT.md*
*Určen pro: Claude Code kontext při přestavbě petrmikeska.cz*
*Poslední aktualizace: 31. 5. 2026*
