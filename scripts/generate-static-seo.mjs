/**
 * Generates the three static files an AI crawler reads before it reads anything
 * else: `llms.txt`, `robots.txt` and `sitemap.xml`.
 *
 * `llms.txt` no longer carries the page on its own: since `scripts/prerender.mjs`
 * was added, `dist/index.html` ships the whole rendered page and a crawler that
 * runs no JavaScript can read it. It is kept because the same facts stated once,
 * in reading order and without any markup, are still the cleanest thing to hand
 * a model — and because it costs one build step.
 *
 * It is generated rather than written so the content layer stays the single
 * source of truth: `src/data/content.ts` is the only place a project title, a
 * date or a link is stated. Run it with `npm run seo` after editing content.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const SITE = "https://petrmikeska.cz";

const content = await import(
  pathToFileURL(resolve(root, "src/data/content.ts")).href
);

const {
  hero,
  about,
  education,
  experience,
  universityProjects,
  projects,
  skills,
  certifications,
  services,
  servicesMeta,
  publications,
  contact,
  footer,
} = content;

/** Strips the light `**bold**` / `[label](url)` markup the prose fields carry. */
const plain = (s) =>
  s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1 ($2)");

const lines = [];
const push = (...l) => lines.push(...l);

push(`# ${hero.name}`, "");
push(`> ${hero.tagline} ${hero.subtagline}`, "");
push(...about.map((p) => plain(p) + "\n"));

push("## Kontakt", "");
push(`- E-mail: ${contact.email}`);
push(`- Telefon: ${contact.phone}`);
push(`- Web: ${contact.website}`);
push(`- LinkedIn: ${contact.linkedin}`);
push(`- GitHub: ${contact.github}`);
push(`- Sídlo: ${footer.address}, ${footer.zip}`);
push(`- IČO: ${footer.ico}`, "");

push("## Praxe", "");
for (const role of experience) {
  push(`### ${role.role} — ${role.company}`);
  push(`${role.period} · ${role.location}`, "");
  push(...role.highlights.map((h) => `- ${h}`));
  if (role.links?.length)
    push(...role.links.map((l) => `- Odkaz: ${l.label} — ${l.url}`));
  push("");
}

push("## Výzkum", "");
for (const role of universityProjects) {
  push(`### ${role.role} — ${role.company}`);
  push(`${role.period} · ${role.location}`);
  if (role.project) push(`Projekt: ${role.project}`);
  push("");
  push(...role.highlights.map((h) => `- ${h}`), "");
}

push("## Publikace", "");
for (const p of publications) {
  push(`- ${p.title} (${p.kind}, ${p.year}, ${p.venue})${p.url ? ` — ${p.url}` : ""}`);
}
push("");

push("## Projekty", "");
for (const p of projects) {
  push(`### ${p.title}`, "", p.description, "");
  push(...p.features.map((f) => `- ${f}`));
  push(`- Technologie: ${p.tags.join(", ")}`);
  const urls = [
    p.link && `${p.linkLabel ?? "Odkaz"}: ${p.link}`,
    p.webLink && `${p.webLinkLabel ?? "Web"}: ${p.webLink}`,
    ...(p.links ?? []).map((l) => `${l.label}: ${l.url}`),
  ].filter(Boolean);
  if (urls.length) push(...urls.map((u) => `- ${u}`));
  push("");
}

push("## Služby", "");
for (const s of services) {
  push(`### ${s.title}`, "", `${s.question}`, "", s.description, "");
  push(`Technologie: ${s.tags.join(", ")}`, "");
}

// Podminky spoluprace patri do digestu ze stejneho duvodu jako na stranku:
// asistent, ktery web cituje, dostane otazku "kolik si uctuje" a bez tohohle
// odstavce na ni odpovi domnenkou.
push("### Podmínky spolupráce", "");
push(`Orientační sazba: ${servicesMeta.rate}`, "");
push(servicesMeta.rateNote, "");
push(`Dostupnost: ${servicesMeta.availability}`, "");
push(`Fakturace: IČO ${footer.ico}`, "");

push("## Vzdělání", "");
for (const e of education) {
  push(`### ${e.degree}`);
  push(`${e.institution} (${e.institutionUrl}) · ${e.location} · ${e.type}`, "");
  push(...e.highlights.map((h) => `- ${h}`), "");
}

push("## Dovednosti", "");
for (const c of skills) push(`- **${c.name}**: ${c.items.join(", ")}`);
push("");

push("## Certifikace", "");
for (const c of certifications) {
  push(`- **${c.name}** — ${c.issuer}, ${c.date}. ${c.description}${c.pdfUrl ? ` (${SITE}${c.pdfUrl})` : ""}`);
}
push("");

const today = new Date().toISOString().slice(0, 10);
push("---", "", `Aktualizováno: ${today}`, "");

const out = (name, body) => {
  const target = resolve(root, "public", name);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, body, "utf8");
  console.log(`public/${name} — ${body.length} B`);
};

out("llms.txt", lines.join("\n"));

out(
  "robots.txt",
  `# Every crawler is welcome, including the ones that answer questions rather
# than return links. Being read and cited by an AI assistant is a first-class
# channel for this site, not a side effect — see PRODUCT.md.
#
# Note: if Cloudflare's managed robots.txt is enabled on the zone, it replaces
# this file at the edge and reintroduces a Disallow for ClaudeBot and GPTBot.

User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: meta-externalagent
Allow: /

Sitemap: ${SITE}/sitemap.xml
`,
);

const urls = [
  { loc: `${SITE}/`, priority: "1.0", freq: "weekly" },
  { loc: `${SITE}/bp/`, priority: "0.6", freq: "yearly" },
  { loc: `${SITE}/llms.txt`, priority: "0.5", freq: "weekly" },
];

out(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`,
);
