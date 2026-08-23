import type {
  Education,
  Experience,
  Project,
  SkillCategory,
  Certification,
  Service,
  ServicesMeta,
  Publication,
} from "./content";

import { hero as csHero } from "./content";

export { contact, footer } from "./content";

/**
 * Identity, links and coordinates are language-neutral and stay shared. The
 * three prose fields are not: the instrument layout sets `tagline` as the
 * page's display claim, so leaving it Czech would put the headline of the
 * English page in the wrong language.
 */
export const hero = {
  ...csHero,
  tagline: "I train models that see. I put the results on a map.",
  subtagline:
    "Geoinformatics & cartography @ UPOL · GIS analyst · Computer vision · Web development",
  intro:
    "I connect GIS, spatial databases and web technologies into map solutions that get used. My current focus is computer vision — detecting objects in video, orthophotos, lidar and mobile mapping, with the spatial processing that follows.",
};

export const ui = {
  nav: {
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Research",
    portfolio: "Portfolio",
    skills: "Skills",
    certifications: "Certifications",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    more: "More",
    contact: "Contact",
    role: "GIS Analyst",
  },
  sections: {
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Research",
    portfolio: "Portfolio",
    skills: "Skills",
    certifications: "Certifications",
    services: "Services",
    contact: "Contact",
  },
  contact: {
    tagline:
      "If you're interested in working together, feel free to get in touch.",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Přepnout do češtiny",
  },
  actions: {
    copyEmail: "Copy email address",
    copied: "Email address copied",
    copyFailed: "Copy failed — select the address and copy it manually",
  },
  footer: {
    icoLabel: "Company ID",
    updated: "Updated",
    copyright:
      "© 2026 Petr Mikeska — Self-employed under Czech Trade Licensing Act",
  },
  v3: {
    /** The five v3 destinations — see the Czech file for why `nav` is here. */
    nav: {
      about: "About",
      experience: "Work",
      portfolio: "Portfolio",
      services: "Services",
      contact: "Contact",
    },
    downloadCv: "Download CV",
    viewWork: "View portfolio",
    publications: "Publications",
    openCertificate: "Open certificate",
    toolsCatalogued: "tools across all categories",
    closeMenu: "Close",
    engagement: {
      heading: "Working together",
      rate: "Indicative rate",
      availability: "Availability",
      billing: "Billing",
      cta: "Send an enquiry",
    },
    theme: {
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
    },
    lead: {
      about: "Geoinformatics, computer vision and the web — and why I put them together.",
      experience: "From a GeoAI pipeline in R&D to a platform of my own in production, plus the university research.",
      portfolio: "Things that run — with links to the code and the deployment.",
      services: "An enquiry starts with an email or a call — contact details are at the end of the page.",
    },
    channels: {
      email: "Email",
      phone: "Phone",
      web: "Web",
      linkedin: "LinkedIn",
      github: "GitHub",
      base: "Based in",
    },
  },
  instrument: {
    availability: "Open to work",
    cv: "CV",
    rail: {
      operator: "Operator",
      base: "Base",
      coord: "Coordinates",
      focus: "Focus",
      index: "Project index",
    },
    result: {
      figure: "Tools catalogued",
      projects: "Projects",
      roles: "Roles",
      categories: "Categories",
      publications: "Publications",
      ico: "Company ID",
    },
    field: {
      verdict: "Pixel and place",
      tags: ["Detection", "Trace", "Residual"],
      caption: "Seeded field · deterministic",
    },
    answers: [
      {
        head: "Computer vision",
        body: "I train detection models on mobile mapping imagery, orthophotos and lidar — from data annotation to production deployment.",
      },
      {
        head: "Geoinformatics",
        body: "Detections are carried into space: triangulation, clustering, deduplication and analysis in PostGIS and GeoPandas.",
      },
      {
        head: "Web and data",
        body: "I build map applications and spatial databases people actually use — React, PostGIS, Leaflet, Supabase.",
      },
    ],
    sequence: {
      label: "Road sign detection pipeline · CEDA Maps",
      steps: [
        { title: "Annotation", note: "Per-track split" },
        { title: "Training", note: "YOLOv8 / OBB, SAHI" },
        { title: "Triangulation", note: "Multi-view, least-squares" },
        { title: "Fusion", note: "Imagery + LiDAR cloud" },
      ],
      result: { title: "Sign in space", note: "One entity from dozens of passes" },
    },
    figure: {
      generated: "Generated plate — not project data",
      open: "Open",
    },
    ledger: {
      institution: "Institution",
      degree: "Degree",
      notes: "Notes",
      company: "Entity",
      role: "Role",
      period: "Period",
      project: "Project",
      stack: "Stack",
      link: "Link",
      category: "Category",
      count: "Count",
      items: "Items",
      certificate: "Certificate",
      issuer: "Issuer",
      date: "Date",
      service: "Service",
      question: "Question",
      publication: "Publication",
      kind: "Type",
      year: "Year",
      channel: "Channel",
      value: "Value",
    },
    channels: {
      email: "Email",
      phone: "Phone",
      web: "Web",
    },
    publications: "Publications",
    allCategories: "All",
    selectorHint: "Bar width encodes the number of items in the category",
  },
};

export const publications: Publication[] = [
  {
    title:
      "A user GIS toolbox for assessing the accessibility of parks and green spaces for urban residents",
    kind: "Bachelor thesis",
    year: "2025",
    venue: "Dept. of Geoinformatics, Palacký University Olomouc",
    url: "https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25",
    urlLabel: "geoinformatics.upol.cz",
  },
  {
    title: "Evaluating LLM-generated maps against a traditional GIS workflow",
    kind: "Master thesis",
    year: "in progress",
    venue: "Dept. of Geoinformatics, Palacký University Olomouc",
    url: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    urlLabel: "GitHub",
  },
];

export const about: string[] = [
  "My name is **Petr Mikeska** and I'm a geoinformatics specialist focused on **computer vision**, spatial databases and web development. I work at the intersection of object detection from imagery and spatial analysis of its output — from raw video, orthophotos or lidar point clouds to a layer you can keep working with in GIS.",
  "On the R&D team at **CEDA Maps** I develop a **GeoAI pipeline for automatic detection and classification of traffic signs** from mobile mapping: data annotation, model training, and clustering and deduplication of detections across dozens of drive-throughs.",
  "I'm a co-founder and technical lead of **[VečerkaPlus](https://vecerkaplus.cz/)** — a production platform (React, Supabase, Vercel) with delivery zones built on spatial analysis.",
  "I study **[Geoinformatics and Cartography](https://www.geoinformatics.upol.cz/)** at Palacký University Olomouc. My [bachelor's thesis](https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25) was a GIS toolbox for evaluating park accessibility; the master's thesis compares the quality of LLM-generated maps against traditional GIS workflows.",
  "Computer vision sees a pixel. GIS sees a place. I'm interested in what needs both.",
];

export const education: Education[] = [
  {
    institution: "Palacký University Olomouc",
    institutionUrl: "https://www.upol.cz/",
    location: "Faculty of Science · Olomouc",
    degree: "MSc – Geoinformatics and Cartography (in progress)",
    type: "Follow-up Master's · full-time · 2 years",
    highlights: [
      "Web GIS and map servers",
      "Remote sensing and image processing",
      "Drones, laser scanning, 3D printing",
    ],
  },
  {
    institution: "Palacký University Olomouc",
    institutionUrl: "https://www.geoinformatics.upol.cz/",
    location: "Department of Geoinformatics · Olomouc",
    degree: "BSc – Geoinformatics and Cartography",
    type: "Bachelor's · full-time · 3 years",
    highlights: [
      "GIS, RS, GPS, geostatistics",
      "Spatial analysis and land-use planning",
      "Thematic cartography",
    ],
  },
  {
    institution: "SSINFOTECH",
    institutionUrl: "https://www.ssinfotech.cz/",
    location: "Frýdek-Místek",
    degree:
      "Maturita – Programming and Application Development – Internet of Things",
    type: "Secondary vocational school · 4 years",
    highlights: [
      "Programming and application development",
      "Web technologies, networks, databases and the Internet of Things",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "CEDA Maps",
    role: "GIS & Computer Vision Analyst (freelance)",
    period: "June 2026 – Present",
    location: "Brno, remote",
    highlights: [
      "GeoAI pipeline for automatic detection and classification of traffic signs from mobile mapping — from data annotation through YOLOv8 training to production deployment",
      "Locating signs without precise GNSS: multi-view triangulation across dozens of drive-throughs, least-squares refinement and fusion into a single entity; monocular depth estimation (Depth Anything V2, MoGe-2) as an independent source, validated with a null test",
      "Panoramic camera rig calibration via COLMAP SfM — extrinsics and intrinsics for lifting detections into real-world space",
      "Dataset engineering: per-track split against data leakage, deduplication of sequential frames and class-imbalance control over tens of thousands of crops",
      "Detecting sign panels directly in the LiDAR point cloud (RIEGL, laspy, PDAL) and cross-checking them against the image detections",
      "Stack: Python, PyTorch, Ultralytics YOLOv8/OBB, SAHI, OpenCV, Open3D, PDAL, COLMAP, PostGIS, GeoPandas",
    ],
  },
  {
    company: "VečerkaPlus",
    role: "Co-founder & technical lead",
    period: "April 2026 – Present",
    location: "Frýdek-Místek",
    highlights: [
      "I co-own and lead a late-night drinks and snacks delivery service in Frýdek-Místek; I built the whole platform from scratch (React, Supabase, Vercel)",
      "Delivery zones built on spatial analysis — price and availability follow real driving distance, not straight-line distance",
      "Beyond development I run the operation: purchasing, courier logistics and growth strategy",
    ],
    links: [{ label: "vecerkaplus.cz", url: "https://vecerkaplus.cz/" }],
  },
  {
    company: "Palacký University Olomouc",
    role: "Web Developer & Administrator",
    period: "May 2023 – Present",
    location: "Czech Republic",
    highlights: [
      "Managing sites with 199,800 visitors and 452,000 page views in total — olomouckymajales.cz and meetup.upol.cz",
      "Changes delivered within 24 hours of request, uninterrupted service during key events, no production downtime",
      "Tools: WordPress, YOOtheme Builder",
    ],
    links: [
      { label: "olomouckymajales.cz", url: "https://olomouckymajales.cz/" },
      { label: "meetup.upol.cz", url: "https://meetup.upol.cz/" },
    ],
  },
  {
    company: "Skymaps s.r.o.",
    role: "GIS & Remote Sensing Analyst",
    period: "February 2025 – September 2025",
    location: "Czech Republic",
    highlights: [
      "Processing multispectral satellite imagery into thematic soil-potential maps",
      "Analysing and interpreting remote sensing data: Sentinel (SNAP), GDAL, EO Browser",
      "Python automation from batch processing of imagery to the output maps",
    ],
  },
];

export const universityProjects: Experience[] = [
  {
    company: "Palacký University Olomouc – KGI / FF / VTP UP + Advolution",
    role: "Field Data Coordinator & Data Analyst",
    period: "2026 – present",
    location: "Olomouc, Czech Republic",
    project: "Visual attention and perception research in urban environments",
    highlights: [
      "Coordinating field drives that record participants' visual attention with eye-tracking glasses",
      "Preprocessing in Tobii Pro Lab: events, segmentation and ROIs for evaluating visual exposure to outdoor advertising",
      "Cleaning gaze data and preparing the outputs for analysis",
    ],
  },
  {
    company: "Palacký University Olomouc",
    role: "3D Modeling Specialist",
    period: "December 2025 – February 2026",
    location: "Czech Republic",
    project:
      "Modeling, processing and production of large-scale 3D models of two grottos including lighting and water installation",
    highlights: [
      "3D modeling of objects for physical installation and 3D printing",
      "Optimising model geometry for manufacturing (Blender, 3D Builder)",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VečerkaPlus",
    description:
      "A late-night drinks and snacks delivery service in Frýdek-Místek (Fri/Sat 22:00–06:00) — a category neither Bolt Food nor Wolt operates here. I built the entire platform from scratch and run the operation: storefront, admin, courier portal and analytics.",
    features: [
      "Supabase backend: PostgreSQL with RLS and PL/pgSQL triggers enforcing order integrity server-side — the client cannot tamper with a total or oversell stock; Vercel Functions as the API layer",
      "Courier PWA: JWT auth, Web Push, wake lock and 1 Hz live GPS tracking into a self-hosted PostGIS database on Hetzner over a Tailscale VPN",
      "Delivery pricing from real driving distance (Google Distance Matrix + server-side cache) — four bands up to 20 km, accurate to the street rather than as the crow flies",
      "Order analytics: market basket analysis (Apriori), margin reports, a price list calibrated with Monte Carlo simulation and OSMnx network analysis; GIS analysis of the catchment area over RÚIAN and the 2021 census",
      "GIS analysis of the market opportunity: 265,783 residents in the catchment area, RÚIAN + 2021 Census + OSM POI",
      "End-to-end test of the whole order flow (checkout → database → courier → delivery) running against production with test data kept isolated",
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
    title: "Parking Occupancy Detection from a Camera Stream",
    description:
      "A system deriving parking occupancy from site cameras that runs unattended — from the frame through detection to the write into the database. Deployed at a ski resort.",
    features: [
      "Ultralytics YOLO + PyTorch: several detection models run at once and their outputs are combined by a custom NMS merge; inference on CUDA with an automatic CPU fallback",
      "Pipeline from frame → georeferencing into the Czech national grid (rasterio, pyproj) → occupancy time series → PostgreSQL over an SSH tunnel",
      "The dashboard API is a separate FastAPI service kept apart from inference, keeping GPU dependencies off the API server; runs unattended, including backfilling the intervals missed during an outage",
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
    title: "Vehicle Detection on Orthophoto Maps",
    description:
      "YOLOv8-OBB vehicle detection on large-format orthophoto maps of Olomouc, fully integrated into a GIS workflow. Results presented at the POGEO 2026 international conference.",
    features: [
      "YOLOv8-OBB + SAHI: inference on images larger than the GPU can hold — a workaround for a GTX 1060 with 3 GB of VRAM",
      "DBSCAN clustering of detected vehicles and Voronoi-based address assignment in GeoPandas and Shapely",
      "End-to-end Python pipeline: annotation → training → georeferencing → spatial analysis → outputs",
    ],
    tags: ["Python", "YOLOv8-OBB", "SAHI", "GeoPandas", "CUDA", "GIS"],
    link: "https://github.com/MetrPikeska/medpz-geoai",
    linkLabel: "GitHub",
  },
  {
    title: "AI Map Generation Evaluation",
    description:
      "Master's thesis: the first systematic comparison of maps generated by LLMs (ChatGPT, Claude, Gemini, Mistral, Perplexity) against a reference workflow in ArcGIS Pro, using object-based metrics and cartographic analysis.",
    features: [
      "Batch pipeline in Python: maps from five LLMs scored with GIS metrics and cartographic analysis",
      "Quantitative and qualitative comparison, plus an interactive Leaflet web map with a choropleth visualisation of the results",
    ],
    tags: ["Python", "GIS", "AI/ML"],
    link: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    linkLabel: "GitHub",
  },
  {
    title: "Park Accessibility Toolbox",
    description:
      "ArcGIS Python toolbox for assessing pedestrian accessibility of parks and green spaces in three large Czech cities. Bachelor's thesis, graded B.",
    features: [
      "Network Analyst accessibility analysis for Olomouc, Brno and Ostrava — three cities compared in one workflow",
      "ArcPy toolbox: automated from data input to output maps, with no manual steps",
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
      "Computer vision system that counts vehicles leaving a roundabout automatically. Line-crossing logic with GPU acceleration for real-time video processing.",
    features: [
      "YOLOv8 detection + geometric tracking through Shapely polygons — stable IDs even when vehicles occlude each other",
      "CUDA acceleration for real-time processing on a GTX 1060; movement statistics exported to CSV for further spatial analysis",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Shapely", "CUDA"],
    link: "https://github.com/MetrPikeska/01_Detekce_vyjezdu",
    linkLabel: "GitHub",
  },
  {
    title: "Air Pollution in MSK Region",
    description:
      "Analytical and synthetic cartographic maps of air pollution in the Moravian-Silesian Region — one of the most heavily burdened parts of the Czech Republic.",
    features: [
      "Interpolation of raster pollutant data and identification of sources at municipality level",
      "Synthetic typology of the territory from a combination of pollution indicators; published in a peer-reviewed proceedings volume",
    ],
    tags: ["Cartography", "GIS", "Analytical maps"],
    link: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
    linkLabel: "PDF",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "GIS and spatial data",
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
      "OGC standards",
      "EPSG 3045 / 5514 / 4326",
    ],
  },
  {
    name: "Computer vision and AI",
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
    name: "LiDAR, 3D and photogrammetry",
    items: [
      "Point cloud processing (RIEGL)",
      "Segmentation and object detection in point clouds",
      "Structure from Motion (COLMAP)",
      "Multi-view triangulation",
      "Multi-camera rig calibration",
      "Monocular depth estimation",
      "DTM/DSM",
      "Open3D",
      "laspy",
      "PDAL",
      "CloudCompare",
      "Blender",
    ],
  },
  {
    name: "Development and databases",
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
    name: "Domain and standards",
    items: [
      "TP 65 (Czech traffic sign standard)",
      "HD maps",
      "Mobile mapping systems (MMS)",
      "Remote sensing and Sentinel (SNAP)",
      "GNSS accuracy",
      "NMEA",
      "TomTom / StreetNet data",
    ],
  },
  {
    name: "Infrastructure and AI-assisted development",
    items: [
      "Git",
      "Linux / WSL",
      "Docker",
      "CUDA",
      "pytest",
      "Vercel",
      "Claude Code — custom extensions",
      "Parallel agent orchestration",
      "MCP clients",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Python for Everyone",
    issuer: "Esri",
    date: "May 2023",
    description:
      "Python fundamentals with a focus on GIS task automation and geospatial data processing.",
    pdfUrl: "/certifikaty/python-for-everyone.pdf",
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "April 2020",
    description:
      "IoT and digital transformation, automation, artificial intelligence and network security fundamentals.",
    pdfUrl: "/certifikaty/iot-cisco.pdf",
  },
  {
    name: "Online UAV Pilot Training",
    issuer: "Civil Aviation Authority CR / EASA",
    date: "October 2024",
    description:
      "Unmanned aircraft pilot authorisation under EASA regulations, categories A1/A3.",
    pdfUrl: "/certifikaty/pilot-dron.pdf",
  },
  {
    name: "Snowboard Instructor APUL/D",
    issuer: "APUL",
    date: "December 2021 – January 2027",
    description:
      "Snowboard instructor licence, valid through January 2027.",
    pdfUrl: "/certifikaty/apul-snowboard.pdf",
  },
  {
    name: "ISSonVIS 2026 – International Spring School on Visualization",
    issuer: "Department of Geoinformatics, UPOL",
    date: "April 2026",
    description:
      "International spring school on visualization, topic Emotions and Map: The Affective Dimension of Visualisation.",
    pdfUrl: "/certifikaty/ISSonVIS2026_Mikeska_Petr.pdf",
  },
];

export const servicesMeta: ServicesMeta = {
  rate: "800–1200 CZK/h",
  rateNote:
    "A range, by the kind of work — analysis and consulting at the lower end, model training and production deployment at the upper. Well-bounded jobs can be quoted at a fixed price instead.",
  availability:
    "Room for one smaller engagement at a time — evenings and weekends alongside R&D work and study.",
};

export const services: Service[] = [
  {
    title: "Spatial Databases & API",
    question:
      "Do you need spatial data in a database that answers queries in milliseconds?",
    description:
      "PostgreSQL + PostGIS with efficient spatial indexes — from the data model to the REST API backend.",
    tags: ["PostGIS", "PostgreSQL", "REST API", "Spatial indexes"],
  },
  {
    title: "Web GIS Applications",
    question: "Do you want a map that shows your data live, not a static image?",
    description:
      "Web GIS applications with a Leaflet frontend and a PostGIS backend: real-time streams, spatial filtering, custom map layers.",
    tags: ["Leaflet", "Web maps", "WebSocket", "Dashboard"],
  },
  {
    title: "Python Automation & Data Processing",
    question: "Are you repeating the same steps over geodata every week?",
    description:
      "Pipelines that take over the routine: batch processing of imagery, GeoPandas transformations, GDAL operations, ETL into a database.",
    tags: ["Python", "GeoPandas", "GDAL", "ETL pipeline"],
  },
  {
    title: "Computer Vision & GeoAI",
    question:
      "Do you need to recognise objects automatically in video, orthophotos or satellite imagery?",
    description:
      "YOLOv8 detection, segmentation and classification, linked to PostGIS for spatial analysis. From production R&D (CEDA Maps) and academic projects (POGEO 2026).",
    tags: ["YOLOv8", "OpenCV", "GeoAI", "PostGIS"],
  },
  {
    title: "Remote Sensing & DEM Processing",
    question: "Do you have satellite imagery or terrain data that isn't talking yet?",
    description:
      "Sentinel and multispectral imagery (SNAP, GDAL), DEM/DSM analysis, orthorectification and mosaicing — outputs ready for GIS and for publication.",
    tags: ["Remote sensing", "SNAP", "GDAL", "DEM/DSM"],
  },
  {
    title: "IoT & Real-Time Data Systems",
    question: "Are you collecting sensor data you cannot properly see anywhere?",
    description:
      "ESP32 sensors → MQTT/HTTP → FastAPI → PostgreSQL → dashboard. Time-series persistence and alerting, from prototype to production.",
    tags: ["ESP32", "MQTT", "FastAPI", "PostgreSQL"],
  },
  {
    title: "LiDAR & 3D Point Cloud Processing",
    question:
      "Do you have a point cloud from mobile mapping or scanning and no idea what to get out of it?",
    description:
      "Segmentation, object detection and feature extraction from the cloud — including fusion with image detections, so two independent measurements verify each other.",
    tags: ["LiDAR", "Point Cloud", "DTM/DSM", "Open3D"],
  },
];
