// Zdroj faktů pro všechny varianty životopisu.
//
// Každý fakt je zde právě jednou. Řetězce, které se liší jazykem, jsou dvojice
// `(cz: "…", en: "…")` — díky tomu se česká a anglická verze nemohou rozejít,
// protože obě čtou stejnou položku.
//
// Kanonickým zdrojem dat je `src/data/content.ts` (česká verze webu).
// `src/data/content.en.ts` je vůči ní zastaralý a jako zdroj se nepoužívá.
//
// Tagy u odrážek řídí, která varianta je zobrazí:
//   core  — ukaž vždy, v každé variantě
//   geoai — computer vision, detekce, hloubka, fotogrammetrie
//   3d    — LiDAR, mračna bodů, 3D rekonstrukce a modelování
//   gis   — prostorové analýzy, databáze, DPZ, kartografie
//   web   — webový vývoj, aplikace, provoz
//   biz   — vedení, provoz, obchodní stránka
//   acad  — jen pro akademickou variantu

// ─────────────────────────────────────────────────────────────────────────────
// Kontakt
// ─────────────────────────────────────────────────────────────────────────────

#let contact = (
  name: "Petr Mikeska",
  email: "piter.mikeska@gmail.com",
  phone: "+420 773 426 330",
  web: (label: "petrmikeska.cz", url: "https://petrmikeska.cz"),
  linkedin: (label: "linkedin.com/in/mikeskapetr", url: "https://www.linkedin.com/in/mikeskapetr"),
  github: (label: "github.com/MetrPikeska", url: "https://github.com/MetrPikeska"),
  ico: "23195126",
  location: (cz: "Čeladná · Olomouc", en: "Čeladná / Olomouc, Czechia"),
)

// ─────────────────────────────────────────────────────────────────────────────
// Titulek pod jménem — liší se variantou
// ─────────────────────────────────────────────────────────────────────────────

#let headlines = (
  general: (
    cz: "GIS analytik · Computer vision · Web GIS",
    en: "GIS analyst · Computer vision · Web GIS",
  ),
  geoai: (
    cz: "Computer vision & GeoAI · Detekce objektů a jejich lokalizace v prostoru",
    en: "Computer vision & GeoAI · Object detection and spatial localisation",
  ),
  gis: (
    cz: "GIS analytik · Prostorové databáze · Web GIS a kartografie",
    en: "GIS analyst · Spatial databases · Web GIS and cartography",
  ),
  academic: (
    cz: "Geoinformatika a kartografie · Computer vision · Univerzita Palackého v Olomouci",
    en: "Geoinformatics and cartography · Computer vision · Palacký University Olomouc",
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Profil — jediné místo, kde se varianty liší tónem, ne jen výběrem
// ─────────────────────────────────────────────────────────────────────────────

#let profiles = (
  general: (
    cz: [Geoinformatik pracující na průniku computer vision, prostorové analýzy
      a webového vývoje. V R&D týmu CEDA Maps vyvíjím GeoAI pipeline pro detekci
      a klasifikaci dopravního značení z mobilního mapování — od anotace dat přes
      trénink modelu po lokalizaci detekcí v reálném prostoru. Spoluzakladatel
      a technický lead VečerkaPlus, produkčně nasazené platformy s reálnými tržbami.
      Studuji navazující magisterské studium geoinformatiky a kartografie na UP
      v Olomouci.],
    en: [Geoinformatics specialist working where computer vision, spatial analysis
      and web development meet. In the CEDA Maps R&D team I build a GeoAI pipeline
      for detecting and classifying road signs from mobile mapping — from data
      annotation through model training to localising detections in real space.
      Co-founder and technical lead of VečerkaPlus, a production platform with real
      revenue. Currently reading for an MSc in Geoinformatics and Cartography at
      Palacký University Olomouc.],
  ),
  geoai: (
    cz: [Computer vision inženýr se zázemím v geoinformatice. Trénuji detekční modely
      na obraz z mobilního mapování, ortofot a lidarového mračna a řeším to, co
      následuje: převod detekcí do reálného prostoru bez přesného GNSS —
      multi-view triangulace, least-squares refinement, monokulární odhad hloubky
      a křížové ověření proti LiDAR mračnu. Produkční R&D praxe v CEDA Maps,
      publikovaný výzkum na konferenci POGEO 2026.],
    en: [Computer vision engineer with a geoinformatics background. I train detection
      models on mobile mapping imagery, orthophotos and lidar point clouds, and solve
      what comes next: lifting detections into real space without precise GNSS —
      multi-view triangulation, least-squares refinement, monocular depth estimation
      and cross-validation against a LiDAR point cloud. Production R&D experience at
      CEDA Maps, research presented at the POGEO 2026 conference.],
  ),
  gis: (
    cz: [GIS analytik se zaměřením na prostorové databáze, webovou kartografii
      a dálkový průzkum Země. Navrhuji a stavím PostGIS databáze s REST API,
      Web GIS aplikace nad Leafletem a Python pipeline pro dávkové zpracování
      geodat. Zkušenost sahá od zpracování multispektrálních satelitních snímků
      po síťové analýzy dostupnosti ve třech krajských městech.],
    en: [GIS analyst focused on spatial databases, web cartography and remote sensing.
      I design and build PostGIS databases with REST APIs, Leaflet-based Web GIS
      applications and Python pipelines for batch geodata processing. My experience
      runs from processing multispectral satellite imagery to network accessibility
      analysis across three regional capitals.],
  ),
  academic: (
    cz: [Student navazujícího magisterského studia geoinformatiky a kartografie na
      Přírodovědecké fakultě Univerzity Palackého v Olomouci. Výzkumné zaměření:
      detekce objektů z obrazových a lidarových dat s návazným prostorovým
      zpracováním, evaluace kvality map generovaných velkými jazykovými modely
      a hodnocení dostupnosti městské zeleně. Souběžně pracuji jako GIS
      a computer vision analytik v R&D týmu CEDA Maps.],
    en: [MSc student of Geoinformatics and Cartography at the Faculty of Science,
      Palacký University Olomouc. Research interests: object detection from imagery
      and lidar with downstream spatial processing, evaluation of maps generated by
      large language models, and urban green space accessibility assessment.
      In parallel I work as a GIS and computer vision analyst in the CEDA Maps
      R&D team.],
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Vzdělání
// ─────────────────────────────────────────────────────────────────────────────

#let education = (
  (
    tags: ("core",),
    org: "Univerzita Palackého v Olomouci",
    org-en: "Palacký University Olomouc",
    period: "2025 – 2027",
    place: (cz: "Přírodovědecká fakulta, Katedra geoinformatiky", en: "Faculty of Science, Dept. of Geoinformatics"),
    degree: (
      cz: "Mgr. — Geoinformatika a kartografie (probíhá)",
      en: "MSc — Geoinformatics and Cartography (in progress)",
    ),
    bullets: (
      (tags: ("core",),
       cz: [Zaměření: pokročilá práce s prostorovými daty, webová kartografie, dálkový
            průzkum Země a zpracování obrazu],
       en: [Focus: advanced spatial data processing, web cartography, remote sensing
            and image processing]),
      (tags: ("core", "acad"),
       cz: [Diplomová práce (probíhá): _Porovnání kvality map generovaných LLM
            s tradičním GIS workflow_],
       en: [Master's thesis (in progress): _Evaluating LLM-generated maps against
            a traditional GIS workflow_]),
      (tags: ("3d", "acad"),
       cz: [Drony, laserové skenování, 3D tisk a virtuální realita],
       en: [Drones, laser scanning, 3D printing and virtual reality]),
    ),
  ),
  (
    tags: ("core",),
    org: "Univerzita Palackého v Olomouci",
    org-en: "Palacký University Olomouc",
    period: "2022 – 2025",
    place: (cz: "Přírodovědecká fakulta, Katedra geoinformatiky", en: "Faculty of Science, Dept. of Geoinformatics"),
    degree: (
      cz: "Bc. — Geoinformatika a kartografie",
      en: "BSc — Geoinformatics and Cartography",
    ),
    bullets: (
      (tags: ("core",),
       cz: [Bakalářská práce: _Uživatelský GIS toolbox pro hodnocení dostupnosti parků
            a zelených ploch pro obyvatele měst_ — hodnocení B],
       en: [Bachelor's thesis: _A user GIS toolbox for assessing the accessibility of
            parks and green spaces for urban residents_ — grade B]),
      (tags: ("gis", "acad"),
       cz: [GIS, dálkový průzkum Země, GNSS, geostatistika, počítačová a tematická
            kartografie, prostorové analýzy a územní plánování],
       en: [GIS, remote sensing, GNSS, geostatistics, computer and thematic
            cartography, spatial analysis and land-use planning]),
    ),
  ),
  (
    tags: ("core",),
    org: "Střední škola informačních technologií",
    org-en: "Secondary School of Information Technology",
    period: "2018 – 2022",
    place: (cz: "Frýdek-Místek", en: "Frýdek-Místek, Czechia"),
    degree: (
      cz: "Maturitní zkouška — Programování a vývoj aplikací / Internet věcí",
      en: "Maturita — Programming and Application Development / Internet of Things",
    ),
    bullets: (
      (tags: ("core",),
       cz: [Programování, webové technologie, počítačové sítě, databáze a základy
            elektroniky a IoT],
       en: [Programming, web technologies, computer networks, databases and the
            fundamentals of electronics and IoT]),
    ),
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Praxe
// ─────────────────────────────────────────────────────────────────────────────

#let experience = (
  (
    tags: ("core",),
    org: "CEDA Maps",
    period: (cz: "červen 2026 – současnost", en: "June 2026 – present"),
    place: (cz: "Brno, remote", en: "Brno, remote"),
    role: (
      cz: "GIS & Computer Vision analytik (OSVČ)",
      en: "GIS & Computer Vision Analyst (contractor)",
    ),
    bullets: (
      (tags: ("core",),
       cz: [Vývoj GeoAI pipeline pro automatickou detekci a klasifikaci dopravního
            značení z mobilního mapování — od anotace dat přes trénink modelu po
            produkční nasazení],
       en: [Building a GeoAI pipeline for automatic detection and classification of
            road signs from mobile mapping — from data annotation through model
            training to production deployment]),
      (tags: ("core", "geoai"),
       cz: [Lokalizace značek bez přesného GNSS: multi-view triangulace pozorování
            z desítek průjezdů, least-squares refinement a fúze do jedné entity;
            monokulární odhad vzdálenosti (Depth Anything V2, MoGe-2) jako nezávislý
            zdroj, validováno nulovým testem a scénářovými syntetickými daty],
       en: [Localising signs without precise GNSS: multi-view triangulation of
            observations from dozens of passes, least-squares refinement and fusion
            into a single entity; monocular distance estimation (Depth Anything V2,
            MoGe-2) as an independent source, validated by a null test and scenario
            synthetic data]),
      (tags: ("geoai", "3d"),
       cz: [Kalibrace panoramatického kamerového rigu přes COLMAP SfM — extrinsics
            a intrinsics pro převod detekcí do reálného prostoru],
       en: [Calibration of a panoramic camera rig via COLMAP SfM — extrinsics and
            intrinsics for lifting detections into real-world space]),
      (tags: ("3d",),
       cz: [Detekce panelů dopravního značení přímo v LiDAR mračnu (RIEGL) a křížové
            ověření proti obrazovým detekcím],
       en: [Detecting sign panels directly in the LiDAR point cloud (RIEGL) and
            cross-validating them against image detections]),
      (tags: ("geoai",),
       cz: [Dataset engineering: per-track split proti data leakage, deduplikace
            sekvenčních snímků a řízení class imbalance nad desítkami tisíc cropů;
            syntetická augmentace scén o počasí a světelné podmínky],
       en: [Dataset engineering: per-track splits against data leakage, deduplication
            of sequential frames and class-imbalance control over tens of thousands
            of crops; synthetic scene augmentation for weather and lighting]),
      (tags: ("gis",),
       cz: [Klastrování a deduplikace detekcí z více průjezdů (DBSCAN, ST_ClusterDBSCAN)
            a prostorová analýza tras nad StreetNet daty v PostGIS],
       en: [Clustering and deduplication of detections across multiple passes (DBSCAN,
            ST_ClusterDBSCAN) and spatial analysis of routes over StreetNet data in
            PostGIS]),
      (tags: ("core",),
       cz: [Python, PyTorch, Ultralytics YOLOv8/OBB, SAHI, ONNX Runtime, OpenCV,
            Open3D, laspy, COLMAP, CVAT, PostGIS, GeoPandas, Shapely],
       en: [Python, PyTorch, Ultralytics YOLOv8/OBB, SAHI, ONNX Runtime, OpenCV,
            Open3D, laspy, COLMAP, CVAT, PostGIS, GeoPandas, Shapely]),
    ),
  ),
  (
    tags: ("core",),
    org: "VečerkaPlus",
    period: (cz: "duben 2026 – současnost", en: "April 2026 – present"),
    place: (cz: "Frýdek-Místek", en: "Frýdek-Místek, Czechia"),
    role: (
      cz: "Spoluzakladatel a technický lead",
      en: "Co-founder and technical lead",
    ),
    link: (label: "vecerkaplus.cz", url: "https://vecerkaplus.cz/"),
    bullets: (
      (tags: ("core",),
       cz: [Spoluvlastník a technický lead nočního rozvozu nápojů a pochutin ve
            Frýdku-Místku — celá webová platforma postavená od nuly na React,
            Supabase a Vercelu],
       en: [Co-owner and technical lead of a late-night drinks and snacks delivery
            service in Frýdek-Místek — the entire web platform built from scratch on
            React, Supabase and Vercel]),
      (tags: ("core", "gis"),
       cz: [Systém doručovacích zón postavený na prostorové analýze: 1 093 grid bodů
            přes Google Distance Matrix API, takže cena a dostupnost odpovídají reálné
            dojezdové vzdálenosti, ne vzdušné čáře],
       en: [Delivery zone system built on spatial analysis: 1,093 grid points via the
            Google Distance Matrix API, so price and availability follow real driving
            distance rather than straight-line distance]),
      (tags: ("gis", "acad"),
       cz: [GIS analýza tržní příležitosti nad RÚIAN, SLDB 2021 a OSM POI — 265 783
            obyvatel v zóně o rozloze 630 km#super[2]],
       en: [GIS market-opportunity analysis over RÚIAN, the 2021 Czech Census and OSM
            POIs — 265,783 inhabitants across a 630 km#super[2] zone]),
      (tags: ("web",),
       cz: [Backend na Supabase: PostgreSQL s PL/pgSQL triggery a RLS politikami,
            Vercel Edge Functions, automatické notifikace přes Resend, Telegram Bot
            a Twilio],
       en: [Supabase backend: PostgreSQL with PL/pgSQL triggers and RLS policies,
            Vercel Edge Functions, automated notifications via Resend, a Telegram bot
            and Twilio]),
      (tags: ("core", "biz"),
       cz: [Vedle vývoje řídím provoz — nákup, logistiku kurýrů a růstovou strategii;
            průměrná tržba 452 Kč na objednávku při marži 36,5 %],
       en: [Alongside development I run operations — purchasing, courier logistics and
            growth strategy; average revenue of CZK 452 per order at a 36.5 % margin]),
    ),
  ),
  (
    tags: ("core",),
    org: "Univerzita Palackého v Olomouci",
    org-en: "Palacký University Olomouc",
    period: (cz: "květen 2023 – současnost", en: "May 2023 – present"),
    place: (cz: "Olomouc", en: "Olomouc, Czechia"),
    role: (cz: "Webový vývojář a správce", en: "Web Developer & Administrator"),
    bullets: (
      (tags: ("core",),
       cz: [Správa webů olomouckymajales.cz a meetup.upol.cz s celkem 199 800
            návštěvníky a 452 000 zobrazeními],
       en: [Running olomouckymajales.cz and meetup.upol.cz — 199,800 visitors and
            452,000 page views in total]),
      (tags: ("core", "web"),
       cz: [Zapracování úprav do 24 hodin od zadání a nepřetržitý provoz během
            klíčových akcí; designové i funkční změny nasazované na produkci
            bez výpadku],
       en: [Requested changes delivered within 24 hours and uninterrupted operation
            during key events; design and functional changes deployed to production
            with no downtime]),
      (tags: ("web",),
       cz: [WordPress, YOOtheme Builder],
       en: [WordPress, YOOtheme Builder]),
    ),
  ),
  (
    tags: ("core",),
    org: "Skymaps s.r.o.",
    period: (cz: "únor 2025 – září 2025", en: "February 2025 – September 2025"),
    place: (cz: "Česká republika", en: "Czechia"),
    role: (cz: "GIS & Remote Sensing analytik", en: "GIS & Remote Sensing Analyst"),
    bullets: (
      (tags: ("core",),
       cz: [Zpracování multispektrálních satelitních snímků pro tematické mapy
            půdního potenciálu],
       en: [Processing multispectral satellite imagery into thematic maps of soil
            potential]),
      (tags: ("core", "gis"),
       cz: [Analýza a interpretace dat DPZ: Sentinel v SNAP, GDAL, EO Browser;
            Python automatizace od dávkového zpracování snímků po výstupní mapy],
       en: [Analysis and interpretation of remote sensing data: Sentinel in SNAP,
            GDAL, EO Browser; Python automation from batch image processing to final
            map outputs]),
      (tags: ("gis",),
       cz: [QGIS, ArcGIS Pro, SNAP, EO Browser, Python],
       en: [QGIS, ArcGIS Pro, SNAP, EO Browser, Python]),
    ),
  ),
  (
    tags: ("full", "geoai", "acad"),
    org: (cz: "Dronové snímkování (freelance)", en: "Aerial imaging (freelance)"),
    period: "2024 – 2025",
    place: (cz: "Ostrava, remote", en: "Ostrava, remote"),
    role: (cz: "Pilot bezpilotního prostředku", en: "Drone Operator"),
    bullets: (
      (tags: ("core",),
       cz: [Zakázka na dronové záběry pro korporátní marketingové materiály; plánování
            a realizace letových misí v souladu s předpisy EASA A1/A3 (DJI Mini 3 Pro)],
       en: [Commissioned drone footage for corporate marketing materials; planning and
            flying missions in compliance with EASA A1/A3 rules (DJI Mini 3 Pro)]),
    ),
  ),
  (
    tags: ("full", "acad"),
    org: "Weiron Dynamics",
    period: (cz: "2024 (4 měsíce)", en: "2024 (4 months)"),
    place: (cz: "Česká republika", en: "Czechia"),
    role: (cz: "Webový vývojář", en: "Web Developer"),
    bullets: (
      (tags: ("core",),
       cz: [Tvorba firemních webových prezentací ve WordPressu],
       en: [Building corporate websites in WordPress]),
    ),
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Výzkumné a univerzitní projekty
// ─────────────────────────────────────────────────────────────────────────────

#let research = (
  (
    tags: ("core",),
    org: (
      cz: "Univerzita Palackého v Olomouci",
      en: "Palacký University Olomouc",
    ),
    period: (cz: "2026 – současnost", en: "2026 – present"),
    place: (
      cz: "Olomouc · KGI, FF a VTP UP ve spolupráci s Advolution",
      en: "Olomouc · Dept. of Geoinformatics, Faculty of Arts and Science and Technology Park, with Advolution",
    ),
    role: (
      cz: "Koordinátor terénního sběru dat a datový analytik",
      en: "Field Data Collection Coordinator & Data Analyst",
    ),
    project: (
      cz: "Výzkum vnímání vizuální pozornosti v městském prostředí pomocí eye-trackingu",
      en: "Visual attention and perception research in urban environments using eye-tracking",
    ),
    bullets: (
      (tags: ("core",),
       cz: [Koordinace 40–60 terénních měření se sledováním vizuální pozornosti
            účastníků pomocí eye-tracking brýlí — logistika, časování tras
            i komunikace s účastníky],
       en: [Coordinating 40–60 field sessions recording participants' visual attention
            with eye-tracking glasses — logistics, route timing and participant
            communication]),
      (tags: ("core",),
       cz: [Preprocessing záznamů v Tobii Pro Lab: tvorba eventů, segmentace nahrávek
            a definice ROI pro hodnocení vizuální expozice venkovní reklamy],
       en: [Preprocessing recordings in Tobii Pro Lab: event creation, segmentation and
            ROI definition for evaluating visual exposure to outdoor advertising]),
      (tags: ("gis", "acad"),
       cz: [Sběr a správa prostorových dat z terénu (GPS/GPX trasy) a jejich
            synchronizace se záznamy pohledu; příprava datových výstupů pro analýzu],
       en: [Collecting and managing spatial field data (GPS/GPX tracks) and
            synchronising it with gaze recordings; preparing data outputs for
            analysis]),
      (tags: ("acad",),
       cz: [Mezioborová spolupráce geoinformatiky, psychologie, akademické sféry
            a soukromého sektoru],
       en: [Interdisciplinary collaboration across geoinformatics, psychology, academia
            and the private sector]),
    ),
  ),
  (
    tags: ("core",),
    org: "Univerzita Palackého v Olomouci",
    org-en: "Palacký University Olomouc",
    period: (cz: "prosinec 2025 – únor 2026", en: "December 2025 – February 2026"),
    place: (cz: "Olomouc", en: "Olomouc, Czechia"),
    role: (cz: "Specialista 3D modelování", en: "3D Modelling Specialist"),
    project: (
      cz: "Modelování, zpracování a výroba rozměrných 3D modelů dvou grott včetně světelné a vodní instalace",
      en: "Modelling, processing and production of large-scale 3D models of two grottos including lighting and water installation",
    ),
    bullets: (
      (tags: ("core",),
       cz: [3D modelování objektů pro fyzickou instalaci a 3D tisk; úprava
            a optimalizace geometrie pro výrobu (Blender, 3D Builder)],
       en: [3D modelling of objects for physical installation and 3D printing;
            adjusting and optimising geometry for manufacturing (Blender, 3D Builder)]),
    ),
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Projekty
// ─────────────────────────────────────────────────────────────────────────────

#let projects = (
  (
    tags: ("geoai", "3d", "gis"),
    name: "Vehicle Detection na ortofotomapách",
    name-en: "Vehicle Detection on Orthophotos",
    period: "2025 – 2026",
    link: (label: "github.com/MetrPikeska/vehicle-detection-ortophoto",
           url: "https://github.com/MetrPikeska/vehicle-detection-ortophoto"),
    desc: (
      cz: [Detekce vozidel na velkoplošných ortofotomapách Olomouce s plnou integrací
        do GIS workflow. YOLOv8-OBB se SAHI umožňuje inferenci na snímcích větších,
        než pojme GPU; navazuje DBSCAN klastrování detekcí a adresace přes Voronoi
        polygony v GeoPandas. End-to-end pipeline od anotace v CVAT přes trénink
        a georeferencování až po prostorovou analýzu. Prezentováno na mezinárodní
        konferenci POGEO 2026.],
      en: [Vehicle detection on large-area orthophotos of Olomouc, fully integrated
        into a GIS workflow. YOLOv8-OBB with SAHI enables inference on images larger
        than the GPU can hold; DBSCAN clustering of detections and Voronoi-based
        address assignment in GeoPandas follow. An end-to-end pipeline from CVAT
        annotation through training and georeferencing to spatial analysis. Presented
        at the international POGEO 2026 conference.],
    ),
    stack: "Python · YOLOv8-OBB · SAHI · GeoPandas · Shapely · CUDA",
  ),
  (
    tags: ("core", "web", "biz"),
    name: "VečerkaPlus",
    period: "2026",
    link: (label: "vecerkaplus.cz", url: "https://vecerkaplus.cz/"),
    desc: (
      cz: [Produkčně nasazená objednávková platforma pro noční rozvoz. React 19,
        Vite a TypeScript na frontendu s vlastním design systémem bez UI frameworků
        třetích stran; Supabase backend s PostgreSQL, PL/pgSQL triggery a RLS.
        Doručovací zóna spočtená z 1 093 grid bodů přes Google Distance Matrix API.],
      en: [A production ordering platform for late-night delivery. React 19, Vite and
        TypeScript on the front end with a bespoke design system and no third-party UI
        framework; a Supabase backend with PostgreSQL, PL/pgSQL triggers and RLS.
        The delivery zone is computed from 1,093 grid points via the Google Distance
        Matrix API.],
    ),
    stack: "React · TypeScript · Supabase · PostgreSQL · Google Maps API · Vercel",
  ),
  (
    tags: ("gis", "web"),
    name: "GEOTE Klima",
    period: "2025",
    link: (label: "petrmikeska.cz/geote", url: "https://petrmikeska.cz/geote"),
    desc: (
      cz: [Full-stack Web GIS platforma pro vizualizaci a dotazování klimatických
        a environmentálních dat. PostGIS s prostorovými indexy pod Flask REST API,
        Leaflet frontend s dynamickým filtrováním přímo nad mapou.],
      en: [A full-stack Web GIS platform for visualising and querying climate and
        environmental data. PostGIS with spatial indexes behind a Flask REST API,
        and a Leaflet front end with dynamic filtering directly on the map.],
    ),
    stack: "PostGIS · PostgreSQL · Flask · REST API · Leaflet · JavaScript",
  ),
  (
    tags: ("gis", "acad"),
    name: "Park Accessibility Toolbox",
    period: "2025",
    link: (label: "github.com/MetrPikeska/park-accessibility-toolbox",
           url: "https://github.com/MetrPikeska/park-accessibility-toolbox"),
    desc: (
      cz: [ArcGIS Python toolbox pro hodnocení pěší dostupnosti parků a zelených ploch,
        aplikovaný na Olomouc, Brno a Ostravu v jednom workflow. Síťová analýza přes
        Network Analyst, automatizace od vstupu dat po výstupní mapy bez manuálních
        kroků. Bakalářská práce, hodnocení B.],
      en: [An ArcGIS Python toolbox for assessing pedestrian accessibility of parks and
        green spaces, applied to Olomouc, Brno and Ostrava in a single workflow.
        Network analysis via Network Analyst, automated from data input to final maps
        with no manual steps. Bachelor's thesis, grade B.],
    ),
    stack: "ArcGIS Pro · ArcPy · Network Analyst · Python",
  ),
  (
    tags: ("gis", "acad"),
    name: (cz: "Volební atlas — GWR analýza", en: "Electoral Atlas — GWR analysis"),
    period: "2026",
    link: (label: "petrmikeska.cz/pogeo", url: "https://petrmikeska.cz/pogeo/"),
    desc: (
      cz: [Prostorová analýza volebního úspěchu České pirátské strany napříč 6 157
        obcemi pomocí geograficky vážené regrese. Model GWR (R#super[2] 0,445) proti
        OLS (R#super[2] 0,188) odstranil prostorovou autokorelaci v reziduích;
        prediktory ze SLDB 2021. Výstupem je interaktivní volební atlas.],
      en: [Spatial analysis of the Czech Pirate Party's electoral success across 6,157
        municipalities using geographically weighted regression. The GWR model
        (R#super[2] 0.445) against OLS (R#super[2] 0.188) removed spatial
        autocorrelation in the residuals; predictors from the 2021 Czech Census.
        The output is an interactive electoral atlas.],
    ),
    stack: "R · GWR · PostGIS · FastAPI · Leaflet · ArcGIS Pro",
  ),
  (
    tags: ("geoai",),
    name: (cz: "Detekce výjezdů z kruhového objezdu", en: "Roundabout Exit Detection"),
    period: "2025",
    link: (label: "github.com/MetrPikeska/01_Detekce_vyjezdu",
           url: "https://github.com/MetrPikeska/01_Detekce_vyjezdu"),
    desc: (
      cz: [Systém pro automatické počítání vozidel opouštějících kruhový objezd.
        YOLOv8 detekce s geometrickým trackingem přes Shapely polygony drží stabilní
        ID i při okluzi; CUDA akcelerace zvládá videosekvence v reálném čase
        i na GTX 1060.],
      en: [A system for automatically counting vehicles leaving a roundabout. YOLOv8
        detection with geometric tracking via Shapely polygons keeps IDs stable through
        occlusion; CUDA acceleration handles video sequences in real time even on
        a GTX 1060.],
    ),
    stack: "Python · YOLOv8 · OpenCV · Shapely · CUDA",
  ),
  (
    tags: ("geoai", "acad"),
    name: (cz: "Evaluace map generovaných LLM", en: "LLM-Generated Map Evaluation"),
    period: (cz: "2026 – probíhá", en: "2026 – in progress"),
    link: (label: "github.com/MetrPikeska/ai-generated-map-evaluation",
           url: "https://github.com/MetrPikeska/ai-generated-map-evaluation"),
    desc: (
      cz: [Diplomová práce: systematické porovnání kvality map generovaných pěti
        velkými jazykovými modely (ChatGPT, Claude, Gemini, Mistral, GitHub Copilot)
        s tradičním GIS workflow pomocí objektních metrik a kartografické analýzy.
        Batch pipeline v Pythonu, výsledky v interaktivní Leaflet mapě.],
      en: [Master's thesis: a systematic comparison of maps generated by five large
        language models (ChatGPT, Claude, Gemini, Mistral, GitHub Copilot) against
        a traditional GIS workflow, using object-based metrics and cartographic
        analysis. A Python batch pipeline, with results in an interactive Leaflet map.],
    ),
    stack: "Python · GeoPandas · Leaflet · GIS metriky",
    stack-en: "Python · GeoPandas · Leaflet · GIS metrics",
  ),
  (
    tags: ("web", "gis"),
    name: (cz: "VYGEO Opálená — real-time IoT Web GIS", en: "VYGEO Opálená — real-time IoT Web GIS"),
    period: "2025",
    link: none,
    desc: (
      cz: [Interaktivní mapa skiareálu s 3D vizualizací terénu z DEM, real-time
        počasím a automatickým počítáním lyžařů z kamerového streamu. Leaflet
        a Three.js na frontendu, FastAPI s WebSocketem pro živá data.],
      en: [An interactive ski resort map with 3D terrain visualisation from a DEM,
        real-time weather and automatic skier counting from a camera stream. Leaflet
        and Three.js on the front end, FastAPI with WebSockets for live data.],
    ),
    stack: "Leaflet · Three.js · FastAPI · WebSocket · PHP/MySQL · YOLO ONNX",
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Publikace a výstupy
// ─────────────────────────────────────────────────────────────────────────────

#let publications = (
  (
    year: "2026",
    kind: (cz: "Konferenční příspěvek", en: "Conference paper"),
    title: (
      cz: "Vehicle detection na velkoplošných ortofotomapách",
      en: "Vehicle detection on large-area orthophotos",
    ),
    venue: "POGEO 2026",
    url: "https://github.com/MetrPikeska/vehicle-detection-ortophoto",
  ),
  (
    year: "2026",
    kind: (cz: "Kapitola ve sborníku", en: "Proceedings chapter"),
    title: (
      cz: "Znečištění ovzduší v Moravskoslezském kraji",
      en: "Air pollution in the Moravian-Silesian Region",
    ),
    venue: "SYKAR 2026",
    url: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
  ),
  (
    year: "2025",
    kind: (cz: "Bakalářská práce", en: "Bachelor's thesis"),
    title: (
      cz: "Uživatelský GIS toolbox pro hodnocení dostupnosti parků a zelených ploch pro obyvatele měst",
      en: "A user GIS toolbox for assessing the accessibility of parks and green spaces for urban residents",
    ),
    venue: (
      cz: "Katedra geoinformatiky, Univerzita Palackého v Olomouci",
      en: "Dept. of Geoinformatics, Palacký University Olomouc",
    ),
    url: "https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25",
  ),
  (
    year: (cz: "probíhá", en: "in progress"),
    kind: (cz: "Diplomová práce", en: "Master's thesis"),
    title: (
      cz: "Porovnání kvality map generovaných LLM s tradičním GIS workflow",
      en: "Evaluating LLM-generated maps against a traditional GIS workflow",
    ),
    venue: (
      cz: "Katedra geoinformatiky, Univerzita Palackého v Olomouci",
      en: "Dept. of Geoinformatics, Palacký University Olomouc",
    ),
    url: none,
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Konference a odborné akce
// ─────────────────────────────────────────────────────────────────────────────

// Hodnoty jsou obsah `[…]`, ne řetězce — jen tak se v nich vysází kurzíva.
#let conferences = (
  (year: "2026", name: (cz: [POGEO 2026 — mezinárodní konference, aktivní účast s příspěvkem],
                        en: [POGEO 2026 — international conference, presented a paper])),
  (year: "2026", name: (cz: [ISSonVIS 2026 — International Spring School on Visualization,
                             Katedra geoinformatiky UP Olomouc; téma _Emotions and Map:
                             The Affective Dimension of Visualisation_],
                        en: [ISSonVIS 2026 — International Spring School on Visualization,
                             Dept. of Geoinformatics, Palacký University Olomouc; theme
                             _Emotions and Map: The Affective Dimension of Visualisation_])),
  (year: "2026", name: (cz: [GeoArts — přednáška, Katedra geoinformatiky UP Olomouc],
                        en: [GeoArts — talk, Dept. of Geoinformatics, Palacký University Olomouc])),
  (year: "2026", name: (cz: [InstallFest 2026, FEL ČVUT Praha],
                        en: [InstallFest 2026, Faculty of Electrical Engineering, CTU Prague])),
)

// ─────────────────────────────────────────────────────────────────────────────
// Dovednosti
// ─────────────────────────────────────────────────────────────────────────────

#let skills = (
  (
    tags: ("core",),
    name: (cz: "Jazyky a databáze", en: "Languages & databases"),
    items: "Python · SQL / PL-pgSQL · JavaScript / TypeScript · R · Bash · C# · PostgreSQL / PostGIS · MySQL · Supabase",
  ),
  (
    tags: ("core", "geoai"),
    name: (cz: "Computer vision a strojové učení", en: "Computer vision & machine learning"),
    items: "PyTorch · Ultralytics YOLOv8 / OBB · SAHI · OpenCV · torchvision · Hugging Face Transformers · Depth Anything V2 · MoGe-2 · scikit-learn · ONNX Runtime · CVAT · CUDA",
  ),
  (
    tags: ("core", "gis"),
    name: (cz: "GIS a prostorová data", en: "GIS & spatial data"),
    items: "QGIS · ArcGIS Pro / ArcPy · GDAL/OGR · GeoServer · MapServer · SNAP · GeoPandas · Shapely · pyproj · Rasterio · H3 · Folium · OGC standardy · EPSG 5514 / 3045 / 4326",
    items-en: "QGIS · ArcGIS Pro / ArcPy · GDAL/OGR · GeoServer · MapServer · SNAP · GeoPandas · Shapely · pyproj · Rasterio · H3 · Folium · OGC standards · EPSG 5514 / 3045 / 4326",
  ),
  (
    tags: ("core", "3d", "geoai"),
    name: (cz: "LiDAR, 3D a fotogrammetrie", en: "LiDAR, 3D & photogrammetry"),
    items: "Zpracování mračen bodů (RIEGL) · Open3D · laspy · CloudCompare · Agisoft Metashape · COLMAP (SfM) · multi-view triangulace · kalibrace kamerového rigu · DTM/DSM · Blender · MeshLab",
    items-en: "Point cloud processing (RIEGL) · Open3D · laspy · CloudCompare · Agisoft Metashape · COLMAP (SfM) · multi-view triangulation · camera rig calibration · DTM/DSM · Blender · MeshLab",
  ),
  (
    tags: ("core", "web"),
    name: (cz: "Web a backend", en: "Web & backend"),
    items: "React · Vite · Leaflet · FastAPI · Flask · Node.js / Express · REST API · WebSocket · HTML/CSS · WordPress · Vercel",
  ),
  (
    tags: ("core",),
    name: (cz: "Nástroje a provoz", en: "Tooling & operations"),
    items: "Git / GitHub · Linux / Ubuntu / WSL · Docker · pytest · NumPy · Pandas · SciPy · Matplotlib · Claude Code · GitHub Copilot",
  ),
  (
    tags: ("geoai", "gis", "acad"),
    name: (cz: "Doména a standardy", en: "Domain & standards"),
    items: "TP 65 (dopravní značení) · HD mapy · mobilní mapovací systémy · GNSS a NMEA · TomTom / StreetNet · RÚIAN · Sentinel / DPZ · INSPIRE",
    items-en: "TP 65 (Czech road sign standard) · HD maps · mobile mapping systems · GNSS and NMEA · TomTom / StreetNet · RÚIAN · Sentinel / remote sensing · INSPIRE",
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Certifikáty
// ─────────────────────────────────────────────────────────────────────────────

#let certifications = (
  (
    tags: ("core",),
    date: (cz: "říjen 2024", en: "October 2024"),
    name: (cz: "Pilot bezpilotních prostředků, kategorie A1/A3",
           en: "Remote pilot certificate, category A1/A3"),
    issuer: (cz: "Úřad pro civilní letectví ČR / EASA",
             en: "Civil Aviation Authority of the Czech Republic / EASA"),
  ),
  (
    tags: ("core",),
    date: (cz: "květen 2023", en: "May 2023"),
    name: "Python for Everyone",
    issuer: "Esri",
  ),
  (
    tags: ("core", "acad"),
    date: (cz: "duben 2026", en: "April 2026"),
    name: (cz: "ISSonVIS 2026 — International Spring School on Visualization",
           en: "ISSonVIS 2026 — International Spring School on Visualization"),
    issuer: (cz: "Katedra geoinformatiky, UP Olomouc",
             en: "Dept. of Geoinformatics, Palacký University Olomouc"),
  ),
  (
    tags: ("full",),
    date: (cz: "duben 2020", en: "April 2020"),
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
  ),
  (
    tags: ("full",),
    date: (cz: "prosinec 2021", en: "December 2021"),
    name: (cz: "Instruktor snowboardingu, licence APUL/D",
           en: "Snowboard instructor, APUL/D licence"),
    issuer: (cz: "Asociace profesionálních učitelů lyžování, platnost do 2027",
             en: "Association of Professional Ski Instructors (APUL), valid to 2027"),
  ),
)

// ─────────────────────────────────────────────────────────────────────────────
// Jazyky
// ─────────────────────────────────────────────────────────────────────────────

#let languages = (
  (name: (cz: "Čeština", en: "Czech"), level: (cz: "rodilý mluvčí", en: "native")),
  (name: (cz: "Angličtina", en: "English"), level: (cz: "B2", en: "B2")),
)
