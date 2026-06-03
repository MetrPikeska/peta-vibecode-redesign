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
  link: string;
  linkLabel: string;
  webLink?: string;
  webLinkLabel?: string;
  links?: { label: string; url: string }[];
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
  specialties: [
    "Web GIS",
    "Remote Sensing",
    "GeoAI",
    "Spatial Databases",
    "Computer Vision",
  ],
  hashtags: [
    "#geoinformatika",
    "#DPZ",
    "#webgis",
    "#prostoroveanalyzy",
    "#mapoveaplikace",
    "#geodata",
    "#computervision",
  ],
  coordinates: "49.5167°N, 18.3333°E",
  photo: "/passport.webp",
  linkedin: "https://www.linkedin.com/in/petr-mikeska-b25669262/",
  github: "https://github.com/metrpikeska",
  cvUrl: "https://petrmikeska.cz/assets/resume/Petr_Mikeska_CV.pdf",
};

export const about = [
  "Propojuji prostorovou analytiku, computer vision a webový vývoj do geodatových řešení s reálným dopadem. V R&D týmu CEDA Maps stavím ML pipeline pro automatickou detekci dopravních defektů a značek — od prostorové filtrace GPS tracků přes přípravu trénovacích dat až po PostGIS clusterování výsledků z tisíců průjezdů.",
  "Ve světě GIS se pohybuji stejně volně na příkazové řádce Pythonu jako v ArcGIS Pro nebo QGIS. Prostorovým analýzám, rastrové i vektorové práci a kartografickým výstupům rozumím zevnitř — od datového modelu po finální vizualizaci.",
  "Stavím webové mapové aplikace, které fungují v produkci: Leaflet frontend napojený na PostGIS přes FastAPI, WebSocket real-time streamy z IoT senzorů.",
  "Jako co-founder VečerkaPlus jsem postavil celou produkční aplikaci pro noční rozvoz — od databázového schématu v Supabase po delivery zone whitelist z 1 093 grid bodů. Aplikace generuje reálné objednávky a tržby od prvního týdne provozu.",
  "Mimo kód mám blízko k horám a pohybu. Pocházím z Beskyd, v zimě učím snowboarding jako certifikovaný instruktor APUL. Ve volném čase box, turistika a sbírka hudby na CD a vinylech.",
];

export const education: Education[] = [
  {
    institution: "Univerzita Palackého v Olomouci",
    institutionUrl: "https://www.upol.cz/",
    location: "Přírodovědecká fakulta · Olomouc",
    degree: "Mgr. – Geoinformatika a kartografie (probíhá)",
    type: "Navazující magisterské · prezenční · 2 roky",
    highlights: [
      "Pokročilé prostorové analýzy a modelování",
      "Webový GIS, mapové aplikace a servery",
      "Dálkový průzkum Země a zpracování obrazu",
      "Pokročilá kartografie a vizualizace",
      "Drony, laserové skenování, 3D tisk, VR",
    ],
  },
  {
    institution: "Univerzita Palackého v Olomouci",
    institutionUrl: "https://www.upol.cz/",
    location: "Přírodovědecká fakulta · Olomouc",
    degree: "Bc. – Geoinformatika a kartografie",
    type: "Bakalářské · prezenční · 3 roky",
    highlights: [
      "GIS, DPZ, GPS, geostatistika, počítačová kartografie",
      "Prostorové analýzy a územní plánování",
      "Tematická kartografie",
      "Bakalářská práce: GIS toolbox pro hodnocení dostupnosti parků ve městech",
    ],
  },
  {
    institution: "SSINFOTECH",
    institutionUrl: "https://www.ssinfotech.cz/",
    location: "Frýdek-Místek",
    degree: "Maturita – Programování a vývoj aplikací – Internet věcí",
    type: "Střední odborná škola · 4 roky",
    highlights: [
      "Programování a vývoj aplikací",
      "Webové technologie (HTML, CSS, backend)",
      "Počítačové sítě a správa systémů",
      "Základy elektroniky a Internetu věcí",
      "Databáze a aplikační software",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "CEDA Maps",
    role: "GIS Analytik (OSVČ)",
    period: "červen 2026 – současnost",
    location: "Brno, remote",
    highlights: [
      "Navrhuji a iteruji ML pipeline pro automatickou detekci dopravních značek a defektů v produkčním R&D prostředí",
      "Prostorová analýza TomTom/StreetNet dat: identifikace úseků vhodných pro detekci, filtrace GPS tracků podle třídy komunikace a bounding boxu",
      "PostGIS clusterování (ST_ClusterDBSCAN) detekcí z desítek průjezdů — eliminace duplicit, návrh DB schématu pro produkční nasazení",
      "Relativní lokalizace defektů bez přesného GNSS: map matching a fúze vizuálních pozorování vůči HD mapě",
      "Stack: Python, PostGIS, YOLOv8, GeoPandas, Shapely, OpenCV, CVAT",
    ],
  },
  {
    company: "Univerzita Palackého v Olomouci",
    role: "Web Developer & Administrator",
    period: "květen 2023 – současnost",
    location: "Česká republika",
    highlights: [
      "Spravuji weby s celkem 199 800 návštěvníky a 452 000 zobrazeními — olomouckymajales.cz a meetup.upol.cz",
      "Garantuji zapracování úprav do 24 hodin od zadání, nepřetržitý provoz během klíčových akcí",
      "Implementace designových a funkčních změn bez výpadků na produkčním prostředí",
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
      "Zpracování multispektrálních satelitních snímků pro tvorbu tematických map půdního potenciálu",
      "Analýza a interpretace DPZ dat: Sentinel (SNAP), GDAL, EO Browser",
      "Python automatizace analytických kroků — od batch processingu snímků po výstupní mapy",
      "Nástroje: QGIS, ArcGIS Pro, EO Browser, Python, SNAP",
    ],
  },
  {
    company: "Premium Systems s.r.o.",
    role: "Drone Operator (freelance)",
    period: "2024–2025",
    location: "Ostrava, remote",
    highlights: [
      "Drone záběry pro korporátní marketingové materiály firmy specializované na Business Continuity",
      "Plánování a realizace letových misí v souladu s předpisy EASA A1/A3",
      "Nástroje: DJI Mini 3 Pro, certifikát ÚCL/EASA A1/A3",
    ],
  },
  {
    company: "Weiron Dynamics",
    role: "Web Developer",
    period: "2024 (~4 měsíce)",
    location: "Česká republika",
    highlights: [
      "Tvorba firemních webů ve WordPressu (2–3 projekty)",
    ],
  },
];

export const universityProjects: Experience[] = [
  {
    company: "Univerzita Palackého v Olomouci – KGI / FF / VTP UP + Advolution",
    role: "Koordinátor terénního sběru dat a datový analytik",
    period: "2026 – dosud",
    location: "Olomouc, Česká republika",
    project: "Výzkum vnímání vizuální pozornosti v městském prostředí pomocí eye-tracking technologie",
    highlights: [
      "Logistická koordinace terénních jízd se sledováním vizuální pozornosti účastníků pomocí eye-tracking brýlí v Olomouci",
      "Zpracování a čištění dat ze sledování pohledů; příprava datových výstupů pro analýzu",
      "Tvorba ROI (regionů zájmu) pro hodnocení vizuální expozice venkovní reklamy",
    ],
  },
  {
    company: "Univerzita Palackého v Olomouci",
    role: "3D Modeling Specialist",
    period: "prosinec 2025 – únor 2026",
    location: "Česká republika",
    project: "Modelování, zpracování a výroba rozměrných 3D modelů dvou grott včetně světelné a vodní instalace",
    highlights: [
      "3D modelování objektů pro fyzickou instalaci a 3D tisk",
      "Úprava a optimalizace geometrie modelů pro výrobu",
      "Nástroje: Blender, 3D Builder",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VečerkaPlus",
    description:
      "Co-founder a lead developer prvního nočního rozvozu alkoholu ve Frýdku-Místku — Bolt Food ani Wolt tuto kategorii v FM neprovozují. V provozu od března 2026, průměrná tržba 452 Kč na objednávku, marže 36,5 %.",
    features: [
      "React 19 + Vite + TypeScript frontend s vlastním design systémem — bez UI frameworků třetích stran",
      "Supabase backend: PostgreSQL + PL/pgSQL triggery + RLS políčka, Vercel Edge Functions",
      "Delivery zone z 1 093 grid bodů přes Google Distance Matrix API — přesnost na ulici, ne jen vzdušnou čarou",
      "Automatické notifikace zákazníkům i dispečerovi: email (Resend), Telegram Bot, Twilio",
      "GIS analýza tržní příležitosti: 265 783 obyvatel, RÚIAN + SLDB 2021 + OSM POI",
    ],
    tags: ["React", "Vite", "Supabase", "PostgreSQL", "Google Maps API", "JavaScript"],
    link: "https://vecerkaplus.cz/",
    linkLabel: "vecerkaplus.cz",
  },

  {
    title: "Vehicle Detection na Ortofotomapách",
    description:
      "YOLOv8-OBB detekce vozidel na velkoplošných ortofotomapách Olomouce s plnou integrací do GIS workflow. Výsledky prezentovány na mezinárodní konferenci POGEO 2026.",
    features: [
      "YOLOv8-OBB + SAHI: inference na snímcích větších, než pojme GPU — workaround pro GTX 1060 3 GB VRAM",
      "DBSCAN clusterování detekovaných vozidel + Voronoi-based adresace v GeoPandas a Shapely",
      "End-to-end Python pipeline: anotace CVAT → trénink → georeferencing → prostorová analýza → výstupy",
    ],
    tags: ["Python", "YOLOv8-OBB", "SAHI", "GeoPandas", "CUDA", "GIS"],
    link: "https://github.com/MetrPikeska/vehicle-detection-ortophoto",
    linkLabel: "GitHub",
  },
  {
    title: "AI Map Generation Evaluation",
    description:
      "Diplomová práce: první systematické porovnání kvality map generovaných LLM (ChatGPT, Claude, Gemini, Mistral, GitHub Copilot) vs. tradiční GIS workflow pomocí objektních metrik a kartografické analýzy.",
    features: [
      "Batch processing pipeline v Pythonu: hodnocení map z 5 LLM modelů pomocí GIS metrik a kartografické analýzy",
      "Kvantitativní i kvalitativní porovnání — kde AI mapování selhává a kde překvapí",
      "Interaktivní Leaflet webmapa s choropleth vizualizací výsledků",
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
    title: "GEOTE Klima",
    description:
      "Full-stack Web GIS platforma pro vizualizaci a dotazování klimatických a environmentálních dat — od PostGIS backendu po interaktivní Leaflet mapu.",
    features: [
      "PostGIS + Flask REST API: prostorové dotazy na klimatické indikátory bez zpoždění",
      "Leaflet frontend s dynamickým filtrováním a vizualizací dat přímo na mapě",
      "PostgreSQL s prostorovými indexy — škáluje bez přepisování dotazů",
    ],
    tags: ["PostGIS", "REST API", "JavaScript", "Python"],
    link: "https://github.com/MetrPikeska/geote-klima-ui",
    linkLabel: "GitHub",
    webLink: "https://petrmikeska.cz/geote",
    webLinkLabel: "Web",
  },
  {
    title: "VYGEO Opálená",
    description:
      "Interaktivní Web GIS aplikace pro skiareál: 3D vizualizace terénu z DEM dat v Three.js, real-time počasí z IoT senzorů a AI počítání lyžařů na svahu.",
    features: [
      "Three.js 3D vizualizace terénu z DEM dat — interaktivní prohlížení svahu přímo v prohlížeči",
      "FastAPI + WebSocket real-time stream IoT dat do Leaflet mapy; PHP + MySQL backend",
      "Python AI modul pro počítání lyžařů z kamerového výstupu skiareálu",
    ],
    tags: ["Leaflet", "PostGIS", "REST API", "Python", "IoT"],
    link: "https://github.com/MetrPikeska/VYGEO",
    linkLabel: "GitHub",
  },
  {
    title: "Vehicle Detection – Roundabout",
    description:
      "Computer vision systém pro automatické počítání vozidel opouštějících kruhový objezd. Line-crossing logika s GPU akcelerací pro zpracování videa v reálném čase.",
    features: [
      "YOLOv8 detekce + geometrický tracking přes Shapely polygony — stabilní ID i při okluzi vozidel",
      "CUDA GPU akcelerace: zpracování videosekvencí v reálném čase na GTX 1060",
      "Export statistik pohybu vozidel do CSV pro další prostorovou analýzu",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Shapely", "CUDA"],
    link: "https://github.com/MetrPikeska/01_Detekce_vyjezdu",
    linkLabel: "GitHub",
  },
  {
    title: "IoT Environmental Monitoring",
    description:
      "End-to-end IoT systém pro sběr a vizualizaci environmentálních dat: ESP32 senzory → MQTT stream → FastAPI → PostgreSQL → Grafana dashboard.",
    features: [
      "ESP32 senzorová síť: teplota, vlhkost, kvalita vzduchu — kontinuální MQTT/HTTP stream do backendu",
      "Python/FastAPI real-time ingestion s prostorovými indexy v PostgreSQL",
      "Grafana dashboard: live monitoring i historické analýzy bez exportu dat",
    ],
    tags: ["ESP32", "Python", "PostgreSQL", "REST API", "MQTT"],
    link: "https://github.com/MetrPikeska",
    linkLabel: "GitHub",
  },
  {
    title: "Znečištění ovzduší v MSK",
    description:
      "Analytické a syntetické kartografické mapy znečištění ovzduší v Moravskoslezském kraji — jednom z nejvíce zatížených regionů ČR.",
    features: [
      "Interpolace rastrových dat znečišťujících látek a identifikace zdrojů na úrovni obcí",
      "Syntetická typizace území podle kombinace více ukazatelů znečištění",
      "Publikováno v odborném sborníku (PDF ke stažení)",
    ],
    tags: ["Kartografie", "GIS", "Analytické mapy"],
    link: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
    linkLabel: "PDF",
  },
  {
    title: "Ski Cam Analytics",
    description:
      "Computer vision systém pro real-time analýzu skiareálového HLS streamu: počítání osob na svahu, line-crossing detekce a live dashboard v prohlížeči.",
    features: [
      "YOLO ONNX detekce + Kalman filter tracking — stabilní ID osob přes celou délku záběru",
      "Line-crossing logika a occupancy counters: kolik lidí je na svahu v danou chvíli",
      "FastAPI + WebSocket → Chart.js dashboard: live metriky a trendy bez obnovení stránky",
    ],
    tags: ["Python", "FastAPI", "YOLO ONNX", "FFmpeg", "SQLite", "WebSocket"],
    link: "https://github.com/MetrPikeska/ski-cam-analytics",
    linkLabel: "GitHub",
  },
  {
    title: "Geo Places Quiz",
    description:
      "Interaktivní webová GIS aplikace pro procvičování znalostí 206 obcí s rozšířenou působností ČR — klikej na mapu, uč se jejich rozmístění.",
    features: [
      "Leaflet mapa nad ČÚZK daty (S-JTSK → WGS84) s filtrováním podle kraje a okresu",
      "Node.js/Express API s kešováním a GZIP kompresí — rychlé i na pomalém připojení",
      "Statistiky pokroku v localStorage — sleduj, kolik ORP už znáš",
    ],
    tags: ["JavaScript", "Leaflet", "Node.js", "PostGIS", "Express"],
    link: "https://github.com/MetrPikeska/geo-places-quiz",
    linkLabel: "GitHub",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "GIS & Spatial Tools",
    items: [
      "QGIS",
      "ArcGIS Pro",
      "GDAL/OGR",
      "GeoServer",
      "MapServer",
      "SNAP",
      "Agisoft Metashape",
      "OGC Standards",
      "CloudCompare",
    ],
  },
  {
    name: "Programming Languages",
    items: ["Python", "JavaScript", "SQL", "Bash", "C#"],
  },
  {
    name: "Web Technologies",
    items: ["HTML", "CSS", "REST API", "WordPress", "YOOtheme", "Supabase"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "PostGIS", "MySQL", "Supabase"],
  },
  {
    name: "Geospatial & Data Libraries",
    items: ["GeoPandas", "Shapely", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    name: "Computer Vision & AI",
    items: ["YOLOv8", "OpenCV", "TensorFlow", "PyTorch", "CVAT"],
  },
  {
    name: "AI Nástroje",
    items: ["GitHub Copilot", "Claude"],
  },
  {
    name: "3D & Visualization",
    items: ["Blender", "MeshLab"],
  },
  {
    name: "DevOps & Infrastructure",
    items: ["Git", "GitHub", "Linux", "Ubuntu", "Docker"],
  },
];

export const certifications: Certification[] = [
  {
    name: "Python for Everyone",
    issuer: "Esri",
    date: "Květen 2023",
    description:
      "Kurz pokrývající základy programování v Pythonu se zaměřením na automatizaci GIS úloh a práci s geoprostorovými daty.",
    pdfUrl: "/certifikaty/python-for-everyone.pdf",
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "Duben 2020",
    description:
      "Kurz pokrýval IoT a digitální transformaci, důležitost softwaru a dat, automatizaci, umělou inteligenci a základy síťové bezpečnosti.",
    pdfUrl: "/certifikaty/iot-cisco.pdf",
  },
  {
    name: "Online výcvik pilota bezpilotních prostředků",
    issuer: "Úřad pro civilní letectví ČR / EASA",
    date: "Říjen 2024",
    description:
      "Certifikát / Oprávnění pro piloty bezpilotních prostředků vydaný Úřadem pro civilní letectví ČR v souladu s předpisy EASA.",
    pdfUrl: "/certifikaty/pilot-dron.pdf",
  },
  {
    name: "Instruktor snowboardingu APUL/D",
    issuer: "APUL",
    date: "Prosinec 2021 – Leden 2027",
    description:
      "Licence instrukce snowboardingu – Asociace profesionálních učitelů lyžování a lyžařských škol.",
    pdfUrl: "/certifikaty/apul-snowboard.pdf",
  },
  {
    name: "ISSonVIS 2026 – International Spring School on Visualization",
    issuer: "Katedra geoinformatiky, UPOL",
    date: "Duben 2026",
    description:
      "Certifikát účasti na mezinárodní jarní škole vizualizace. Téma: Emotions and Map: The Affective Dimension of Visualisation.",
    pdfUrl: "/certifikaty/ISSonVIS2026_Mikeska_Petr.pdf",
  },
  {
    name: "IRSSS 2026 – Blended Intensive Programme Remote Sensing",
    issuer: "Katedra geoinformatiky, UPOL / mezinárodní program",
    date: "Červenec 2026",
    description:
      "Blended Intensive Programme zaměřený na dálkový průzkum Země. Stará Lesná, Slovensko.",
  },
];

export const services: Service[] = [
  {
    title: "Spatial Databases & API",
    question: "Potřebujete prostorová data v databázi, která odpovídá na dotazy v milisekundách?",
    description:
      "Návrh a implementace PostgreSQL + PostGIS databází s efektivními prostorovými indexy. Od datového modelu po REST API backend — spatial queries, které nebrzdí ani vaši aplikaci, ani vás.",
    tags: ["PostGIS", "PostgreSQL", "REST API", "Spatial indexy"],
  },
  {
    title: "Web GIS Applications",
    question: "Chcete mapu, která zobrazuje vaše data živě — ne statický obrázek?",
    description:
      "Stavím Web GIS aplikace s Leaflet frontendem, PostGIS backendem a REST API. Real-time WebSocket streamy, spatial filtering, vlastní mapové vrstvy — vše přizpůsobené vašemu use case.",
    tags: ["Leaflet", "Webové mapy", "WebSocket", "Dashboard"],
  },
  {
    title: "Python Automation & Data Processing",
    question: "Opakujete ručně stejné kroky nad geodaty každý týden?",
    description:
      "Python scripty a pipelines, které přebírají vaši rutinu: batch processing satelitních snímků, GeoPandas transformace, GDAL operace, ETL do databáze. Jednou nastavíte, pak to běží samo.",
    tags: ["Python", "GeoPandas", "GDAL", "ETL pipeline"],
  },
  {
    title: "Computer Vision & GeoAI",
    question: "Potřebujete automaticky rozpoznávat objekty z videa, ortofot nebo satelitních snímků?",
    description:
      "YOLOv8 detekce, segmentace a klasifikace — a propojení výsledků s PostGIS pro prostorové analýzy. Zkušenosti z produkčního R&D prostředí (CEDA Maps) i akademických projektů (POGEO 2026).",
    tags: ["YOLOv8", "OpenCV", "GeoAI", "PostGIS"],
  },
  {
    title: "Remote Sensing & DEM Processing",
    question: "Máte satelitní snímky nebo terénní data, která ještě nehovoří?",
    description:
      "Zpracování Sentinel/multispektrálních snímků (SNAP, GDAL), DEM/DSM analýzy (sklon, aspekt, hydrologie), ortorektifikace a mosaicing. Výstupy ve formátech připravených pro GIS i publikaci.",
    tags: ["DPZ", "SNAP", "GDAL", "DEM/DSM"],
  },
  {
    title: "IoT & Real-Time Data Systems",
    question: "Sbíráte data ze senzorů a zatím je nikde pořádně nevidíte?",
    description:
      "End-to-end IoT architektura: ESP32 senzory → MQTT/HTTP → Python/FastAPI → PostgreSQL → real-time dashboard. WebSocket streamy, time-series persistence a alerting — od prototypu po produkci.",
    tags: ["ESP32", "MQTT", "FastAPI", "PostgreSQL"],
  },
];

export const ui = {
  nav: {
    about: "O mně",
    education: "Vzdělání",
    experience: "Praxe",
    projects: "Projekty",
    portfolio: "Portfolio",
    skills: "Dovednosti",
    certifications: "Certifikace",
    services: "Služby",
    contact: "Kontakt",
  },
  hero: {
    more: "Více",
    contact: "Kontakt",
    role: "GIS Analytik · GeoAI Developer",
  },
  sections: {
    about: "O mně",
    education: "Vzdělání",
    experience: "Praxe",
    projects: "Projekty",
    portfolio: "Portfolio",
    skills: "Dovednosti",
    certifications: "Certifikace",
    services: "Služby",
    contact: "Kontakt",
  },
  contact: {
    tagline: "Zajímá vás spolupráce na GIS projektu, GeoAI nebo webové mapové aplikaci? Napište mi.",
  },
  footer: {
    icoLabel: "IČO",
    copyright:
      "© 2026 Petr Mikeska — Fyzická osoba podnikající dle živnostenského zákona",
  },
};

export const contact = {
  email: "piter.mikeska@gmail.com",
  phone: "+420 773 426 330",
  linkedin: "https://www.linkedin.com/in/petr-mikeska-b25669262/",
  github: "https://github.com/MetrPikeska",
  website: "https://petrmikeska.cz",
};

export const footer = {
  name: "Petr Mikeska",
  address: "Čeladná 53",
  zip: "739 12 Čeladná",
  ico: "23195126",
  copyright:
    "\u00a9 2026 Petr Mikeska \u2014 Fyzická osoba podnikající dle živnostenského zákona",
};
