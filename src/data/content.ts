export interface Education {
  institution: string;
  institutionUrl: string;
  location: string;
  degree: string;
  type: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  project?: string;
  highlights: string[];
  links?: { label: string; url: string }[];
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  link?: string;
  linkLabel?: string;
  webLink?: string;
  webLinkLabel?: string;
  links?: { label: string; url: string }[];
  /**
   * Full-resolution evidence — a screenshot, map or plot, served from `public/`.
   * Left unset, the instrument layout draws a deterministic plate from the
   * project title instead of shrinking the entry into a decorative thumbnail.
   */
  image?: string;
}

/**
 * Written output. Every entry is already linked somewhere on the site — this
 * collection only lifts it out of prose so it can be read as a ledger.
 */
export interface Publication {
  title: string;
  kind: string;
  year: string;
  venue: string;
  url?: string;
  urlLabel?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  description: string;
  pdfUrl?: string;
}

export interface Service {
  title: string;
  question: string;
  description: string;
  tags: string[];
}

export const hero = {
  name: "Petr Mikeska",
  tagline: "Trénuji modely, které vidí. Výsledky dávám na mapu.",
  subtagline:
    "Geoinformatika & kartografie @ UPOL · GIS analytik · Computer vision · Web development",
  intro:
    "Propojuji GIS, prostorové databáze a webové technologie do funkčních mapových řešení. Aktuálně se zaměřuji na computer vision — detekci objektů z videa, ortofot, lidaru a mobilního mapování s návazným prostorovým zpracováním.",
  specialties: ["Computer Vision", "GeoAI", "Web GIS", "Spatial Databases"],
  hashtags: [
    "#computervision",
    "#geoinformatika",
    "#webgis",
    "#geodata",
    "#DPZ",
    "#prostoroveanalyzy",
    "#mapoveaplikace",
  ],
  coordinates: "49.5167°N, 18.3333°E",
  photo: "/passport.webp",
  linkedin: "https://www.linkedin.com/in/mikeskapetr",
  github: "https://github.com/metrpikeska",
  cvUrl: "https://petrmikeska.cz/assets/resume/Petr_Mikeska_CV.pdf",
};

export const about = [
  "Jmenuji se **Petr Mikeska** a jsem geoinformatik zaměřený na **computer vision**, prostorové databáze a webový vývoj. Pracuji na průniku detekce objektů z obrazu a prostorové analýzy jejich výstupů — od surového videa, ortofota nebo lidarového mračna až po vrstvu, se kterou jde dál pracovat v GIS.",
  "V R&D týmu **CEDA Maps** vyvíjím **GeoAI pipeline pro automatickou detekci a klasifikaci dopravního značení** z mobilního mapování: anotace dat, trénink modelu, klastrování a deduplikace detekcí z desítek průjezdů.",
  "Jsem spoluzakladatel a technický lead **[VečerkaPlus](https://vecerkaplus.cz/)** — produkčně nasazené platformy (React, Supabase, Vercel) s doručovacími zónami postavenými na prostorové analýze.",
  "Studuji **[Geoinformatiku a kartografii](https://www.geoinformatics.upol.cz/)** na Univerzitě Palackého v Olomouci. [Bakalářská práce](https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25) byla GIS toolbox pro hodnocení dostupnosti parků; diplomová porovnává kvalitu map generovaných LLM s tradičním GIS workflow.",
  "Computer vision vidí pixel, GIS vidí místo. Zajímá mě to, co potřebuje obojí.",
];

export const education: Education[] = [
  {
    institution: "Univerzita Palackého v Olomouci",
    institutionUrl: "https://www.upol.cz/",
    location: "Přírodovědecká fakulta · Olomouc",
    degree: "Mgr. – Geoinformatika a kartografie (probíhá)",
    type: "Navazující magisterské · prezenční · 2 roky",
    highlights: [
      "Webový GIS a mapové servery",
      "Dálkový průzkum Země a zpracování obrazu",
      "Drony, laserové skenování, 3D tisk",
    ],
  },
  {
    institution: "Univerzita Palackého v Olomouci",
    institutionUrl: "https://www.geoinformatics.upol.cz/",
    location: "Katedra geoinformatiky · Přírodovědecká fakulta · Olomouc",
    degree: "Bc. – Geoinformatika a kartografie",
    type: "Bakalářské · prezenční · 3 roky",
    highlights: [
      "GIS, DPZ, GPS, geostatistika",
      "Prostorové analýzy a územní plánování",
      "Tematická kartografie",
    ],
  },
  {
    institution: "Střední škola informačních technologií",
    institutionUrl: "https://www.ssinfotech.cz/",
    location: "Frýdek-Místek",
    degree: "Maturita – Programování a vývoj aplikací – Internet věcí",
    type: "Střední odborná škola · 4 roky",
    highlights: [
      "Programování a vývoj aplikací",
      "Webové technologie, sítě, databáze a Internet věcí",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "CEDA Maps",
    role: "GIS & Computer Vision Analytik (OSVČ)",
    period: "červen 2026 – současnost",
    location: "Brno, remote",
    highlights: [
      "GeoAI pipeline pro automatickou detekci a klasifikaci dopravního značení z mobilního mapování — od anotace dat přes trénink YOLOv8 po produkční nasazení",
      "Lokalizace značek bez přesného GNSS: multi-view triangulace z desítek průjezdů, least-squares refinement a fúze do jedné entity; monokulární odhad hloubky (Depth Anything V2, MoGe-2) jako nezávislý zdroj, validovaný nulovým testem",
      "Kalibrace panoramatického kamerového rigu přes COLMAP SfM — extrinsics a intrinsics pro převod detekcí do reálného prostoru",
      "Dataset engineering: per-track split proti data leakage, deduplikace sekvenčních snímků a řízení class imbalance nad desítkami tisíc cropů",
      "Detekce panelů přímo v LiDAR mračnu (RIEGL, laspy, PDAL) a křížové ověření proti obrazovým detekcím",
      "Stack: Python, PyTorch, Ultralytics YOLOv8/OBB, SAHI, OpenCV, Open3D, PDAL, COLMAP, PostGIS, GeoPandas",
    ],
  },
  {
    company: "VečerkaPlus",
    role: "Spoluzakladatel & technický lead",
    period: "duben 2026 – současnost",
    location: "Frýdek-Místek",
    highlights: [
      "Spoluvlastním a vedu noční rozvoz nápojů a pochutin ve Frýdku-Místku a okolí; celou platformu jsem postavil od nuly (React, Supabase, Vercel)",
      "Systém doručovacích zón postavený na prostorové analýze — cena a dostupnost podle reálné dojezdové vzdálenosti, ne vzdušnou čarou",
      "Kromě vývoje řídím provoz: nákup, logistiku kurýrů a růstovou strategii",
    ],
    links: [{ label: "vecerkaplus.cz", url: "https://vecerkaplus.cz/" }],
  },
  {
    company: "Univerzita Palackého v Olomouci",
    role: "Web Developer & Administrator",
    period: "květen 2023 – současnost",
    location: "Česká republika",
    highlights: [
      "Spravuji weby s celkem 199 800 návštěvníky a 452 000 zobrazeními — olomouckymajales.cz a meetup.upol.cz",
      "Úpravy do 24 hodin od zadání, nepřetržitý provoz během klíčových akcí, změny bez výpadků na produkci",
      "Nástroje: WordPress, YOOtheme Builder",
    ],
    links: [
      { label: "olomouckymajales.cz", url: "https://olomouckymajales.cz/" },
      { label: "meetup.upol.cz", url: "https://meetup.upol.cz/" },
    ],
  },
  {
    company: "Skymaps s.r.o.",
    role: "GIS & Remote Sensing Analyst",
    period: "únor 2025 – září 2025",
    location: "Česká republika",
    highlights: [
      "Zpracování multispektrálních satelitních snímků pro tematické mapy půdního potenciálu",
      "Analýza a interpretace DPZ dat: Sentinel (SNAP), GDAL, EO Browser",
      "Python automatizace od batch processingu snímků po výstupní mapy",
    ],
  },
];

export const universityProjects: Experience[] = [
  {
    company: "Univerzita Palackého v Olomouci – KGI / FF / VTP UP + Advolution",
    role: "Koordinátor terénního sběru dat a datový analytik",
    period: "2026 – dosud",
    location: "Olomouc, Česká republika",
    project:
      "Výzkum vnímání vizuální pozornosti v městském prostředí pomocí eye-tracking technologie",
    highlights: [
      "Koordinace terénních jízd se sledováním vizuální pozornosti účastníků pomocí eye-tracking brýlí",
      "Preprocessing v Tobii Pro Lab: eventy, segmentace nahrávek a ROI pro hodnocení vizuální expozice venkovní reklamy",
      "Čištění dat ze sledování pohledů a příprava výstupů pro analýzu",
    ],
  },
  {
    company: "Univerzita Palackého v Olomouci",
    role: "3D Modeling Specialist",
    period: "prosinec 2025 – únor 2026",
    location: "Česká republika",
    project:
      "Modelování, zpracování a výroba rozměrných 3D modelů dvou grott včetně světelné a vodní instalace",
    highlights: [
      "3D modelování objektů pro fyzickou instalaci a 3D tisk",
      "Optimalizace geometrie modelů pro výrobu (Blender, 3D Builder)",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VečerkaPlus",
    description:
      "Noční rozvoz nápojů a pochutin ve Frýdku-Místku (pá/so 22:00–06:00) — kategorie, kterou tu Bolt Food ani Wolt neprovozují. Postavil jsem celou platformu od nuly a zároveň řídím provoz: e-shop, administraci, kurýrský portál i analytiku.",
    features: [
      "Supabase backend: PostgreSQL s RLS a PL/pgSQL triggery, které server-side vynucují integritu objednávek — klient nemůže zmanipulovat součet ani vyčerpat sklad; Vercel Functions jako API vrstva",
      "Kurýrská PWA: JWT, Web Push, wake-lock a live GPS tracking 1 Hz do vlastní PostGIS databáze na Hetzneru přes Tailscale VPN",
      "Nacenění dopravy podle reálné jízdní vzdálenosti (Google Distance Matrix + server-side cache) — 4 pásma do 20 km, přesnost na ulici, ne vzdušnou čarou",
      "Analytika nad objednávkami: market basket analýza (Apriori), maržové reporty, ceník kalibrovaný Monte Carlo simulací a OSMnx síťovou analýzou; GIS analýza spádové oblasti nad RÚIAN a SLDB 2021",
    ],
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "PostGIS",
      "Vercel",
      "Google Maps API",
    ],
    link: "https://vecerkaplus.cz/",
    linkLabel: "vecerkaplus.cz",
  },
  {
    title: "Detekce obsazenosti parkoviště z kamerového streamu",
    description:
      "Systém, který z kamer areálu odvozuje obsazenost parkoviště a běží bez obsluhy — od snímku přes detekci až po zápis do databáze. Nasazeno v provozu lyžařského areálu.",
    features: [
      "Ultralytics YOLO + PyTorch: několik detekčních modelů běží současně a jejich výstupy slučuje vlastní NMS merge; inference na CUDA s automatickým fallbackem na CPU",
      "Pipeline snímek → georeference do S-JTSK (rasterio, pyproj) → časové řady obsazenosti → PostgreSQL přes SSH tunel",
      "Dashboardové API je samostatná FastAPI služba oddělená od inference, takže server s API netahá GPU závislosti; provoz bez obsluhy včetně dopočtu intervalů chybějících po výpadku",
    ],
    tags: [
      "Python",
      "YOLO",
      "PyTorch",
      "FastAPI",
      "PostgreSQL",
      "rasterio",
    ],
  },

  {
    title: "Vehicle Detection na Ortofotomapách",
    description:
      "YOLOv8-OBB detekce vozidel na velkoplošných ortofotomapách Olomouce s plnou integrací do GIS workflow. Výsledky prezentovány na mezinárodní konferenci POGEO 2026.",
    features: [
      "YOLOv8-OBB + SAHI: inference na snímcích větších, než pojme GPU — workaround pro GTX 1060 3 GB VRAM",
      "DBSCAN clusterování detekovaných vozidel + Voronoi-based adresace v GeoPandas a Shapely",
      "End-to-end Python pipeline: anotace → trénink → georeferencing → prostorová analýza → výstupy",
    ],
    tags: ["Python", "YOLOv8-OBB", "SAHI", "GeoPandas", "CUDA", "GIS"],
    link: "https://github.com/MetrPikeska/medpz-geoai",
    linkLabel: "GitHub",
  },
  {
    title: "AI Map Generation Evaluation",
    description:
      "Diplomová práce: první systematické porovnání kvality map generovaných LLM (ChatGPT, Claude, Gemini, Mistral, Perplexity) vs. referenční workflow v ArcGIS Pro pomocí objektních metrik a kartografické analýzy.",
    features: [
      "Batch pipeline v Pythonu: hodnocení map z 5 LLM modelů pomocí GIS metrik a kartografické analýzy",
      "Kvantitativní i kvalitativní porovnání a interaktivní Leaflet webmapa s choropleth vizualizací výsledků",
    ],
    tags: ["Python", "GIS", "AI/ML"],
    link: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    linkLabel: "GitHub",
  },
  {
    title: "Park Accessibility Toolbox",
    description:
      "ArcGIS Python toolbox pro hodnocení pěší dostupnosti parků a zelených ploch ve třech velkých českých městech. Bakalářská práce hodnocená B.",
    features: [
      "Síťová analýza dostupnosti (Network Analyst) pro Olomouc, Brno a Ostravu — porovnání tří měst v jednom workflow",
      "ArcPy toolbox: automatizace od vstupu dat po výstupní mapy bez manuálních kroků",
    ],
    tags: ["ArcGIS Pro", "Python", "Network Analyst"],
    link: "https://github.com/MetrPikeska/park-accessibility-toolbox",
    linkLabel: "GitHub",
    webLink: "https://petrmikeska.cz/bp/",
    webLinkLabel: "Web",
  },
  {
    title: "Vehicle Detection – Roundabout",
    description:
      "Computer vision systém pro automatické počítání vozidel opouštějících kruhový objezd. Line-crossing logika s GPU akcelerací pro zpracování videa v reálném čase.",
    features: [
      "YOLOv8 detekce + geometrický tracking přes Shapely polygony — stabilní ID i při okluzi vozidel",
      "CUDA akcelerace pro zpracování v reálném čase na GTX 1060; export statistik do CSV pro další prostorovou analýzu",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Shapely", "CUDA"],
    link: "https://github.com/MetrPikeska/01_Detekce_vyjezdu",
    linkLabel: "GitHub",
  },
  {
    title: "Znečištění ovzduší v MSK",
    description:
      "Analytické a syntetické kartografické mapy znečištění ovzduší v Moravskoslezském kraji — jednom z nejvíce zatížených regionů ČR.",
    features: [
      "Interpolace rastrových dat znečišťujících látek a identifikace zdrojů na úrovni obcí",
      "Syntetická typizace území podle kombinace více ukazatelů; publikováno v odborném sborníku",
    ],
    tags: ["Kartografie", "GIS", "Analytické mapy"],
    link: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
    linkLabel: "PDF",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "GIS a prostorová data",
    items: [
      "QGIS",
      "ArcGIS Pro",
      "PostGIS",
      "GDAL/OGR",
      "GeoServer",
      "GeoPandas",
      "Shapely",
      "pyproj",
      "Rasterio",
      "H3",
      "Leaflet",
      "OGC standardy",
      "EPSG 3045 / 5514 / 4326",
    ],
  },
  {
    name: "Computer vision a AI",
    items: [
      "PyTorch",
      "Ultralytics YOLOv8 / OBB",
      "SAHI",
      "OpenCV",
      "Hugging Face Transformers",
      "Depth Anything V2",
      "MoGe-2",
      "scikit-learn",
    ],
  },
  {
    name: "LiDAR, 3D a fotogrammetrie",
    items: [
      "Zpracování mračen bodů (RIEGL)",
      "Segmentace a detekce objektů v mračnu",
      "Structure from Motion (COLMAP)",
      "Multi-view triangulace",
      "Kalibrace multikamerového rigu",
      "Monokulární odhad hloubky",
      "DTM/DSM",
      "Open3D",
      "laspy",
      "PDAL",
      "CloudCompare",
      "Blender",
    ],
  },
  {
    name: "Vývoj a databáze",
    items: [
      "Python",
      "JavaScript / TypeScript",
      "SQL",
      "Bash",
      "React",
      "REST API",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "WordPress",
    ],
  },
  {
    name: "Doména a standardy",
    items: [
      "TP 65 (dopravní značení)",
      "HD mapy",
      "Mobilní mapovací systémy (MMS)",
      "DPZ a Sentinel (SNAP)",
      "GNSS přesnost",
      "NMEA",
      "TomTom / StreetNet data",
    ],
  },
  {
    name: "Infrastruktura a AI-asistovaný vývoj",
    items: [
      "Git",
      "Linux / WSL",
      "Docker",
      "CUDA",
      "pytest",
      "Vercel",
      "Claude Code — vlastní rozšíření",
      "Orchestrace paralelních agentů",
      "MCP klienti",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Python for Everyone",
    issuer: "Esri",
    date: "Květen 2023",
    description:
      "Základy Pythonu se zaměřením na automatizaci GIS úloh a práci s geoprostorovými daty.",
    pdfUrl: "/certifikaty/python-for-everyone.pdf",
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "Duben 2020",
    description:
      "IoT a digitální transformace, automatizace, umělá inteligence a základy síťové bezpečnosti.",
    pdfUrl: "/certifikaty/iot-cisco.pdf",
  },
  {
    name: "Online výcvik pilota bezpilotních prostředků",
    issuer: "Úřad pro civilní letectví ČR / EASA",
    date: "Říjen 2024",
    description:
      "Oprávnění pilota bezpilotních prostředků podle předpisů EASA, kategorie A1/A3.",
    pdfUrl: "/certifikaty/pilot-dron.pdf",
  },
  {
    name: "Instruktor snowboardingu APUL/D",
    issuer: "APUL",
    date: "Prosinec 2021 – Leden 2027",
    description:
      "Licence instruktora snowboardingu, platná do ledna 2027.",
    pdfUrl: "/certifikaty/apul-snowboard.pdf",
  },
  {
    name: "ISSonVIS 2026 – International Spring School on Visualization",
    issuer: "Katedra geoinformatiky, UPOL",
    date: "Duben 2026",
    description:
      "Mezinárodní jarní škola vizualizace, téma Emotions and Map: The Affective Dimension of Visualisation.",
    pdfUrl: "/certifikaty/ISSonVIS2026_Mikeska_Petr.pdf",
  },
];

export const services: Service[] = [
  {
    title: "Spatial Databases & API",
    question:
      "Potřebujete prostorová data v databázi, která odpovídá na dotazy v milisekundách?",
    description:
      "PostgreSQL + PostGIS s efektivními prostorovými indexy — od datového modelu po REST API backend.",
    tags: ["PostGIS", "PostgreSQL", "REST API", "Spatial indexy"],
  },
  {
    title: "Web GIS Applications",
    question:
      "Chcete mapu, která zobrazuje vaše data živě — ne statický obrázek?",
    description:
      "Web GIS aplikace s Leaflet frontendem a PostGIS backendem: real-time streamy, spatial filtering, vlastní mapové vrstvy.",
    tags: ["Leaflet", "Webové mapy", "WebSocket", "Dashboard"],
  },
  {
    title: "Python Automation & Data Processing",
    question: "Opakujete ručně stejné kroky nad geodaty každý týden?",
    description:
      "Pipelines, které přebírají rutinu: batch processing snímků, GeoPandas transformace, GDAL operace, ETL do databáze.",
    tags: ["Python", "GeoPandas", "GDAL", "ETL pipeline"],
  },
  {
    title: "Computer Vision & GeoAI",
    question:
      "Potřebujete automaticky rozpoznávat objekty z videa, ortofot nebo satelitních snímků?",
    description:
      "YOLOv8 detekce, segmentace a klasifikace, propojené s PostGIS pro prostorovou analýzu. Z produkčního R&D (CEDA Maps) i akademických projektů (POGEO 2026).",
    tags: ["YOLOv8", "OpenCV", "GeoAI", "PostGIS"],
  },
  {
    title: "Remote Sensing & DEM Processing",
    question: "Máte satelitní snímky nebo terénní data, která ještě nehovoří?",
    description:
      "Sentinel a multispektrální snímky (SNAP, GDAL), DEM/DSM analýzy, ortorektifikace a mosaicing — výstupy připravené pro GIS i publikaci.",
    tags: ["DPZ", "SNAP", "GDAL", "DEM/DSM"],
  },
  {
    title: "IoT & Real-Time Data Systems",
    question: "Sbíráte data ze senzorů a zatím je nikde pořádně nevidíte?",
    description:
      "ESP32 senzory → MQTT/HTTP → FastAPI → PostgreSQL → dashboard. Time-series persistence a alerting, od prototypu po produkci.",
    tags: ["ESP32", "MQTT", "FastAPI", "PostgreSQL"],
  },
  {
    title: "LiDAR & 3D Point Cloud Processing",
    question:
      "Máte mračno bodů z mobilního mapování nebo skenování a nevíte, co z něj dostat?",
    description:
      "Segmentace, detekce objektů a extrakce prvků z mračna — včetně fúze s obrazovými detekcemi, aby se dvě nezávislá měření ověřovala navzájem.",
    tags: ["LiDAR", "Point Cloud", "DTM/DSM", "Open3D"],
  },
];

export const ui = {
  nav: {
    about: "O mně",
    education: "Vzdělání",
    experience: "Praxe",
    projects: "Výzkum",
    portfolio: "Portfolio",
    skills: "Dovednosti",
    certifications: "Certifikace",
    services: "Služby",
    contact: "Kontakt",
  },
  hero: {
    more: "Více",
    contact: "Kontakt",
    role: "GIS Analytik · Computer Vision",
  },
  sections: {
    about: "O mně",
    education: "Vzdělání",
    experience: "Praxe",
    projects: "Výzkum",
    portfolio: "Portfolio",
    skills: "Dovednosti",
    certifications: "Certifikace",
    services: "Služby",
    contact: "Kontakt",
  },
  contact: {
    tagline:
      "Spolupráce na GIS, GeoAI nebo webové mapové aplikaci — napište mi.",
  },
  a11y: {
    skipToContent: "Přeskočit na obsah",
    openMenu: "Otevřít menu",
    closeMenu: "Zavřít menu",
    switchLanguage: "Switch to English",
  },
  actions: {
    copyEmail: "Kopírovat e-mailovou adresu",
    copied: "E-mailová adresa zkopírována",
    copyFailed: "Zkopírování se nepovedlo — adresu označte a zkopírujte ručně",
  },
  footer: {
    icoLabel: "IČO",
    updated: "Aktualizováno",
    copyright:
      "© 2026 Petr Mikeska — Fyzická osoba podnikající dle živnostenského zákona",
  },
  /**
   * Strings the shadcn layout (v3) needs. Each design system phrases the same
   * ideas in its own register — the instrument surface is telegraphic ("CV"),
   * this one speaks in full labels ("Stáhnout CV") — so the wording lives per
   * system rather than being shared and flattened to the shortest form.
   */
  v3: {
    /**
     * Five destinations. `ui.nav` still carries all nine labels because v1 and
     * v2 still name nine sections; this is the v3 set, and it doubles as the
     * section headings so a label and the heading it leads to never disagree.
     */
    nav: {
      about: "O mně",
      experience: "Práce",
      portfolio: "Portfolio",
      services: "Služby",
      contact: "Kontakt",
    },
    downloadCv: "Stáhnout CV",
    viewWork: "Prohlédnout portfolio",
    publications: "Publikace",
    openCertificate: "Otevřít certifikát",
    toolsCatalogued: "nástrojů napříč kategoriemi",
    closeMenu: "Zavřít",
    theme: {
      toDark: "Přepnout na tmavý režim",
      toLight: "Přepnout na světlý režim",
    },
    /**
     * A section lead exists to say what the heading cannot. Restating the
     * heading in a full sentence ("Kde jsem se to naučil." under "Vzdělání")
     * costs a line and returns nothing, so every lead here carries a fact,
     * a scope or the next step instead.
     */
    lead: {
      about: "Geoinformatika, computer vision a web — a proč to spojuji.",
      experience: "Od GeoAI pipeline v R&D po vlastní produkčně nasazenou platformu, včetně univerzitního výzkumu.",
      portfolio: "Věci, které běží — s odkazy na kód i nasazení.",
      services: "Poptávka začíná e-mailem nebo telefonem — kontakt je na konci stránky.",
    },
    channels: {
      email: "E-mail",
      phone: "Telefon",
      web: "Web",
      linkedin: "LinkedIn",
      github: "GitHub",
      base: "Sídlo",
    },
  },
  /**
   * Strings the instrument layout needs and the topographic one does not:
   * rail keys, ledger headers and the short answer that runs under the hero.
   * Values stay out of here — every number comes from the data above or is
   * derived in `lib/instrument-metrics.ts`.
   */
  instrument: {
    availability: "Přijímá zakázky",
    cv: "CV",
    rail: {
      operator: "Operátor",
      base: "Základna",
      coord: "Souřadnice",
      focus: "Zaměření",
      index: "Index projektů",
    },
    result: {
      figure: "Nástrojů v katalogu",
      projects: "Projektů",
      roles: "Rolí",
      categories: "Kategorií",
      publications: "Publikací",
      ico: "IČO",
    },
    field: {
      verdict: "Pixel a místo",
      tags: ["Detekce", "Stopa", "Reziduum"],
      caption: "Seedované pole · deterministické",
    },
    answers: [
      {
        head: "Computer vision",
        body: "Trénuji detekční modely na obraz z mobilního mapování, ortofot a lidaru — od anotace dat po produkční nasazení.",
      },
      {
        head: "Geoinformatika",
        body: "Výstupy detekce převádím do prostoru: triangulace, klastrování, deduplikace a analýza v PostGIS a GeoPandas.",
      },
      {
        head: "Web a data",
        body: "Stavím mapové aplikace a prostorové databáze, které někdo reálně používá — React, PostGIS, Leaflet, Supabase.",
      },
    ],
    sequence: {
      label: "Pipeline detekce dopravního značení · CEDA Maps",
      steps: [
        { title: "Anotace", note: "Per-track split" },
        { title: "Trénink", note: "YOLOv8 / OBB, SAHI" },
        { title: "Triangulace", note: "Multi-view, least-squares" },
        { title: "Fúze", note: "Obraz + LiDAR mračno" },
      ],
      result: { title: "Značka v prostoru", note: "Jedna entita z desítek průjezdů" },
    },
    figure: {
      generated: "Generovaná plachta — nejde o data projektu",
      open: "Otevřít",
    },
    ledger: {
      institution: "Instituce",
      degree: "Titul",
      notes: "Poznámky",
      company: "Subjekt",
      role: "Role",
      period: "Období",
      project: "Projekt",
      stack: "Stack",
      link: "Odkaz",
      category: "Kategorie",
      count: "Počet",
      items: "Položky",
      certificate: "Certifikát",
      issuer: "Vydavatel",
      date: "Datum",
      service: "Služba",
      question: "Otázka",
      publication: "Publikace",
      kind: "Typ",
      year: "Rok",
      channel: "Kanál",
      value: "Hodnota",
    },
    channels: {
      email: "E-mail",
      phone: "Telefon",
      web: "Web",
    },
    publications: "Publikace",
    allCategories: "Vše",
    selectorHint: "Šířka pruhu kóduje počet položek v kategorii",
  },
};

export const publications: Publication[] = [
  {
    title:
      "Uživatelský GIS toolbox pro hodnocení dostupnosti parků a zelených ploch pro obyvatele měst",
    kind: "Bakalářská práce",
    year: "2025",
    venue: "Katedra geoinformatiky UP Olomouc",
    url: "https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25",
    urlLabel: "geoinformatics.upol.cz",
  },
  {
    title: "Porovnání kvality map generovaných LLM s tradičním GIS workflow",
    kind: "Diplomová práce",
    year: "probíhá",
    venue: "Katedra geoinformatiky UP Olomouc",
    url: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    urlLabel: "GitHub",
  },
];

export const contact = {
  email: "piter.mikeska@gmail.com",
  phone: "+420 773 426 330",
  linkedin: "https://www.linkedin.com/in/mikeskapetr",
  github: "https://github.com/MetrPikeska",
  website: "https://petrmikeska.cz",
};

export const footer = {
  name: "Petr Mikeska",
  address: "Čeladná 53",
  zip: "739 12 Čeladná",
  /** Short form for status bars — a place name, not a postal address. */
  base: "Čeladná, CZ",
  ico: "23195126",
  copyright:
    "\u00a9 2026 Petr Mikeska \u2014 Fyzická osoba podnikající dle živnostenského zákona",
};
