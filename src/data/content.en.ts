import type {
  Education,
  Experience,
  Project,
  SkillCategory,
  Certification,
  Service,
} from "./content";

export { hero, contact, footer } from "./content";

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
  footer: {
    icoLabel: "Company ID",
    copyright:
      "© 2026 Petr Mikeska — Self-employed under Czech Trade Licensing Act",
  },
};

export const about: string[] = [
  "My name is **Petr Mikeska** and I'm a geoinformatics specialist focused on **computer vision**, spatial databases, and web development. I connect GIS, databases, and web technologies into map-based solutions people actually use.",
  "I work at the intersection of object detection from imagery and spatial analysis of its output — from raw video, orthophotos, or lidar point clouds to a layer you can keep working with in GIS.",
  "On the R&D team at **CEDA Maps** I develop a **GeoAI pipeline for automatic detection and classification of traffic signs** from mobile mapping: preparing and annotating training data, training the model, and clustering and deduplicating detections across dozens of drive-throughs.",
  "I'm a co-founder and technical lead of **[VečerkaPlus](https://vecerkaplus.cz/)** — a production platform (React, Supabase, Vercel) with delivery zones built on spatial analysis.",
  "I completed my bachelor's in **Geoinformatics and Cartography** at the **[Department of Geoinformatics](https://www.geoinformatics.upol.cz/)**, Palacký University Olomouc. My thesis produced a **GIS toolbox for evaluating the accessibility of parks and green spaces for urban residents** — [the thesis is available here](https://geoinformatics.upol.cz/dprace/bakalarske/mikeska25). I'm currently in the **follow-up master's programme**, focusing on advanced spatial data work and web cartography; my master's thesis compares the quality of LLM-generated maps against traditional GIS workflows.",
  "My technical foundation comes from the **[Secondary School of Information Technology](https://www.ssinfotech.cz/)** in Frýdek-Místek, field of **Application Programming and Development — Internet of Things**: programming, web technologies, networks, and databases.",
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
      "Advanced spatial analysis and modeling",
      "Web GIS, mapping applications and servers",
      "Remote sensing and image processing",
      "Advanced cartography and visualization",
      "Drones, laser scanning, 3D printing, VR",
    ],
  },
  {
    institution: "Palacký University Olomouc",
    institutionUrl: "https://www.upol.cz/",
    location: "Faculty of Science · Olomouc",
    degree: "BSc – Geoinformatics and Cartography",
    type: "Bachelor's · full-time · 3 years",
    highlights: [
      "GIS, RS, GPS, geostatistics, computer cartography",
      "Spatial analysis and land-use planning",
      "Thematic cartography",
      "Bachelor's thesis: GIS toolbox for evaluating park accessibility in cities",
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
      "Web technologies (HTML, CSS, backend)",
      "Computer networks and system administration",
      "Electronics fundamentals and Internet of Things",
      "Databases and application software",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Skymaps s.r.o.",
    role: "GIS & Remote Sensing Analyst",
    period: "February 2025 – Present",
    location: "Czech Republic",
    highlights: [
      "Processing satellite imagery and raster data in a GIS environment",
      "Analyzing image data and subsequent interpretation",
      "Creating thematic soil potential maps using remote sensing",
      "Automating analytical steps with Python",
      "Linking image data with spatial analyses and map outputs",
      "Tools: QGIS, ArcGIS Pro, EO Browser",
    ],
  },
  {
    company: "Palacký University Olomouc",
    role: "Web Developer & Administrator",
    period: "May 2023 – Present",
    location: "Czech Republic",
    highlights: [
      "Managing high-traffic websites – 199,800 visitors and 452,000 page views in total",
      "Delivering requested changes within 24 hours",
      "Resolving website issues and implementing fixes",
      "Updating content and features to reflect current information",
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
    period: "February 2025 – March 2025",
    location: "Czech Republic",
    highlights: [
      "Processing satellite imagery and raster data in a GIS environment",
      "Analyzing image data and subsequent interpretation",
    ],
  },
];

export const universityProjects: Experience[] = [
  {
    company: "Palacký University Olomouc – KGI / FF / VTP UP + Advolution",
    role: "Data Collection Coordinator & Field Researcher",
    period: "2026 – present",
    location: "Olomouc, Czech Republic",
    project: "Visual Attention and Perception Research in Urban Environments",
    highlights: [
      "Conducted 40–60 eye-tracking sessions in Olomouc, recording participants' visual attention during on-foot and in-vehicle routes",
      "Coordinated participants – experiment logistics, route timing, transfers, and communication",
      "Preprocessing recordings in Tobii Pro Lab: event creation and segmentation of recordings for downstream analysis",
      "Defining ROIs (regions of interest) for evaluating visual exposure to outdoor advertising",
      "Collected and managed spatial field data (GPS/GPX tracks, synchronisation with eye-tracking recordings)",
      "Interdisciplinary collaboration spanning geoinformatics, psychology, academia, and the private sector",
      "Prospective analyses: route visualisations, fixation heatmaps, spatial attention time-series",
    ],
  },
  {
    company: "Palacký University Olomouc",
    role: "3D Modeling Specialist",
    period: "December 2025 – February 2026",
    location: "Czech Republic",
    project:
      "Modeling, processing, and production of large-scale 3D models of two grottos including lighting and water installation",
    highlights: [
      "3D modeling of objects for physical installation and 3D printing",
      "Adjusting and optimizing model geometry for manufacturing",
      "Tools: Blender, 3D Builder",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "VečerkaPlus",
    description:
      "Late-night alcohol, drinks, and snacks delivery in Frýdek-Místek and surroundings, with emphasis on speed, simple ordering, and a modern web application.",
    features: [
      "Web ordering application development (React + Vite)",
      "Supabase integration (order and product database)",
      "Google Maps API integration (distance and delivery calculation)",
      "Notification automation (email + Telegram)",
      "UX design for fast late-night ordering",
    ],
    tags: [
      "React",
      "Vite",
      "Supabase",
      "PostgreSQL",
      "Google Maps API",
      "JavaScript",
    ],
    link: "https://vecerkaplus.cz/",
    linkLabel: "vecerkaplus.cz",
  },
  {
    title: "POGEO – Czech Pirate Party Election Analysis 2025",
    description:
      "Spatial analysis of the Czech Pirate Party's electoral success across 6,157 municipalities using Geographically Weighted Regression.",
    features: [
      "GWR model (R² 0.445) vs OLS (R² 0.188) — elimination of spatial autocorrelation in residuals",
      "Predictors from the 2021 Czech Census: education, employment, religiosity, etc.",
      "Cartographic outputs and an interactive electoral atlas",
    ],
    tags: ["R", "GWR", "Spatial Analysis", "Cartography", "ArcGIS Pro"],
    link: "https://github.com/SvobVojtech/pogeo_2026",
    linkLabel: "GitHub",
    links: [
      { label: "Electoral Atlas", url: "https://petrmikeska.cz/pogeo/" },
      { label: "Interactive Map", url: "https://petrmikeska.cz/pogeo/map/" },
    ],
  },
  {
    title: "AI Map Generation Evaluation",
    description:
      "Master's thesis: evaluating the quality of AI-generated maps using object-based metrics and cartographic analysis.",
    features: [
      "Analysis of AI-generated maps compared to traditional cartographic outputs",
      "Comparison with traditional outputs using GIS metrics",
      "Python pipeline for batch processing and statistical analysis",
    ],
    tags: ["Python", "GIS", "AI/ML"],
    link: "https://github.com/MetrPikeska/ai-generated-map-evaluation",
    linkLabel: "GitHub",
  },
  {
    title: "Park Accessibility Toolbox",
    description:
      "ArcGIS toolbox for analyzing park and green space accessibility in cities. Bachelor's thesis.",
    features: [
      "Network and spatial analysis for evaluating green space accessibility",
      "Pedestrian accessibility assessment of public green areas in urban environments",
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
      "Web GIS platform for climate and environmental data with a PostGIS backend and interactive map.",
    features: [
      "PostGIS database with REST API for spatial queries on climate indicators",
      "Interactive Leaflet map with data visualization and filtering",
      "Full-stack: Python/Flask backend, PostgreSQL with spatial indexes",
    ],
    tags: ["PostGIS", "REST API", "JavaScript", "Python"],
    link: "https://github.com/MetrPikeska/geote-klima-ui",
    linkLabel: "GitHub",
    webLink: "https://petrmikeska.cz/geote",
    webLinkLabel: "Web",
  },
  {
    title: "Vehicle Detection – Roundabout",
    description:
      "YOLOv8 computer vision: vehicle detection and tracking from video with line-crossing logic.",
    features: [
      "YOLOv8 object detection + geometric tracking (Shapely polygons)",
      "GPU acceleration (CUDA) for real-time video sequence processing",
      "Aggregation of results into CSV and vehicle movement statistics",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Shapely", "CUDA"],
    link: "https://github.com/MetrPikeska/01_Detekce_vyjezdu",
    linkLabel: "GitHub",
  },
  {
    title: "Air Pollution in MSK Region",
    description:
      "Cartographic study analyzing and visualizing air pollution in the Moravia-Silesia Region using analytical and synthetic maps.",
    features: [
      "Raster data, interpolation, pollutant analysis",
      "Cartographic visualization with analytical maps and synthetic typology",
      "GIS workflow for evaluating environmental burden in the Czech Republic",
    ],
    tags: ["Cartography", "GIS", "Analytical maps"],
    link: "https://petrmikeska.cz/sykar2026_kapitola_Mikeska.pdf",
    linkLabel: "PDF",
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
    items: ["YOLOv8", "OpenCV", "PyTorch"],
  },
  {
    name: "AI Tools",
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
    date: "May 2023",
    description:
      "Course covering Python programming fundamentals with a focus on GIS task automation and geospatial data processing.",
    pdfUrl: "/certifikaty/python-for-everyone.pdf",
  },
  {
    name: "Introduction to IoT",
    issuer: "Cisco Networking Academy",
    date: "April 2020",
    description:
      "Course covering IoT and digital transformation, the importance of software and data, automation, artificial intelligence, and network security fundamentals.",
    pdfUrl: "/certifikaty/iot-cisco.pdf",
  },
  {
    name: "Online UAV Pilot Training",
    issuer: "Civil Aviation Authority CR / EASA",
    date: "October 2024",
    description:
      "Certificate / Authorization for unmanned aircraft pilots issued by the Civil Aviation Authority of the Czech Republic in compliance with EASA regulations.",
    pdfUrl: "/certifikaty/pilot-dron.pdf",
  },
  {
    name: "Snowboard Instructor APUL/D",
    issuer: "APUL",
    date: "December 2021 – January 2027",
    description:
      "Snowboard instruction license – Association of Professional Ski and Snowboard Instructors.",
    pdfUrl: "/certifikaty/apul-snowboard.pdf",
  },
  {
    name: "ISSonVIS 2026 – International Spring School on Visualization",
    issuer: "Department of Geoinformatics, UPOL",
    date: "April 2026",
    description:
      "Certificate of attendance at the international spring school on visualization. Topic: Emotions and Map: The Affective Dimension of Visualisation.",
    pdfUrl: "/certifikaty/ISSonVIS2026_Mikeska_Petr.pdf",
  },
];

export const services: Service[] = [
  {
    title: "Spatial Databases & API",
    question:
      "Do you need a PostGIS database with REST API for spatial queries?",
    description:
      "Design and implementation of spatial databases in PostgreSQL + PostGIS. Creating efficient indexes, SQL spatial queries, and REST API backends for web applications.",
    tags: ["GIS", "Vector data", "Raster data", "Automation"],
  },
  {
    title: "Web GIS Applications",
    question:
      "Do you need an interactive map or dashboard with real-time data?",
    description:
      "Development of Web GIS applications with Leaflet frontend, PostGIS backend, and REST API. Real-time WebSocket streams, spatial filtering, and modern frontend architecture.",
    tags: ["Leaflet", "Web maps", "Data visualization", "Dashboard"],
  },
  {
    title: "Python Automation & Data Processing",
    question: "Do you have repetitive geodata tasks you'd like to automate?",
    description:
      "Python scripts for vector/raster data processing, geopandas pipelines, GDAL operations. GIS workflow automation, batch processing of satellite imagery, and ETL pipelines.",
    tags: ["PostGIS", "SQL", "Data models", "Data management"],
  },
  {
    title: "Computer Vision & GeoAI",
    question:
      "Do you need object detection from video or satellite image analysis with AI?",
    description:
      "YOLOv8 detection, image classification, segmentation. Remote sensing data processing and linking CV outputs with PostGIS for spatial analysis and visualization.",
    tags: ["YOLO", "OpenCV", "Python", "AI detection"],
  },
  {
    title: "Remote Sensing & DEM Processing",
    question: "Do you want to work with satellite imagery or DEM data?",
    description:
      "Processing satellite imagery (SNAP, GDAL), DEM/DSM analysis. Terrain operations (slope, aspect, hydrology), mosaicing, and orthorectification with GDAL/QGIS workflow.",
    tags: ["DEM/DSM", "3D modeling", "Terrain analysis", "Visualization"],
  },
  {
    title: "IoT & Real-Time Data Systems",
    question: "Do you need data collection and visualization from IoT sensors?",
    description:
      "IoT architecture: ESP32 sensors → MQTT/HTTP → Python backend → PostgreSQL. Real-time dashboards with WebSocket streams, time-series data, and monitoring applications.",
    tags: ["ESP32", "MQTT", "Python", "PostgreSQL"],
  },
];
