import { CropFrame } from "@/components/survey/crop-frame";
import { LedgerLabel } from "@/components/survey/ledger-label";
import { CONTAINER } from "@/components/survey/sections";
import { SectionHeading } from "@/components/survey/section-heading";
import { TagList } from "@/components/survey/tag-list";
import type { Project } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { toolCount } from "@/lib/instrument-metrics";
import { cn } from "@/lib/utils";

/**
 * The regraded project illustrations, by position in `projects[]` (the same
 * order in both content files). The stems match the `art` stems in
 * `content.ts`; the paths are written out whole so a search for a file in
 * `public/survey/` finds its one consumer.
 */
const PROJECT_PLATES = [
  "/survey/projects/vecerkaplus.webp",
  "/survey/projects/parking.webp",
  "/survey/projects/ortofoto.webp",
  "/survey/projects/ai-maps.webp",
  "/survey/projects/parks.webp",
  "/survey/projects/roundabout.webp",
  "/survey/projects/air-msk.webp",
] as const;

/**
 * One glyph per skill category, by position in `skills[]`: spatial data,
 * computer vision, LiDAR, development and databases, domain and standards
 * (TP 65 is the traffic-sign standard), infrastructure.
 */
const SKILL_ICONS = [
  "/survey/icons/map-pin.png",
  "/survey/icons/camera-360.png",
  "/survey/icons/lidar.png",
  "/survey/icons/database.png",
  "/survey/icons/sign.png",
  "/survey/icons/code.png",
] as const;

interface ProjectLink {
  label: string;
  url: string;
}

function projectLinks(project: Project): ProjectLink[] {
  const links: ProjectLink[] = [];
  if (project.link) links.push({ label: project.linkLabel ?? project.link, url: project.link });
  if (project.webLink) {
    links.push({ label: project.webLinkLabel ?? project.webLink, url: project.webLink });
  }
  if (project.links) links.push(...project.links);
  return links;
}

/** The first link carries the route dash that lengthens on hover (board 4). */
function ProjectLinks({ links, className }: { links: ProjectLink[]; className?: string }) {
  if (links.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-6 gap-y-2 font-survey-mono text-xs", className)}>
      {links.map((link, index) => (
        <li key={link.url}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 text-survey",
              index === 0 && "survey-dash-link",
            )}
          >
            {index === 0 ? <span aria-hidden="true" className="survey-dash" /> : null}
            <span className="underline decoration-survey/40 underline-offset-4 hover:decoration-survey">
              {link.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Board 4: an asymmetric gallery. The lead project in a large crop frame with
 * its copy beside it, the six others in a grid below, then skills as
 * hairline category rows.
 */
export function Portfolio() {
  const { projects, skills, ui } = useContent();
  const [lead, ...rest] = projects;

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <div className={cn(CONTAINER, "py-20 md:py-28")}>
        <SectionHeading id="portfolio-heading">{ui.v4.nav.portfolio}</SectionHeading>
        <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-muted">
          {ui.v4.lead.portfolio}
        </p>

        {lead ? (
          <article className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
            <CropFrame
              src={PROJECT_PLATES[0]}
              width={1600}
              height={900}
              offset
              className="self-start"
              imgClassName="aspect-video"
            />
            <div className="min-w-0 lg:pt-4">
              <h3 className="text-4xl font-semibold leading-none tracking-tighter md:text-5xl">
                {lead.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed">{lead.description}</p>
              <ul className="mt-6 space-y-2.5">
                {lead.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-2.5 shrink-0 bg-survey" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <TagList tags={lead.tags} className="mt-6" />
              <ProjectLinks links={projectLinks(lead)} className="mt-6" />
            </div>
          </article>
        ) : null}

        <ul className="mt-20 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, index) => {
            const plate = PROJECT_PLATES[index + 1];
            return (
              <li key={project.title}>
                <article className="survey-card -m-4 h-full p-4 hover:bg-sheet">
                  {plate ? (
                    <CropFrame
                      src={plate}
                      width={1600}
                      height={900}
                      offset
                      imgClassName="aspect-video"
                    />
                  ) : null}
                  <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  <TagList tags={project.tags} className="mt-4" />
                  <ProjectLinks links={projectLinks(project)} className="mt-5" />
                </article>
              </li>
            );
          })}
        </ul>

        <div id="skills" className="mt-24">
          <LedgerLabel>{ui.sections.skills}</LedgerLabel>
          <ul className="mt-4 border-t border-ink-muted/50">
            {skills.map((category, index) => {
              const icon = SKILL_ICONS[index];
              return (
                <li
                  key={category.name}
                  className="grid gap-2 border-b border-hairline py-4 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] md:gap-8"
                >
                  <div className="flex items-center gap-3">
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    ) : null}
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                  <p className="font-survey-mono text-xs leading-relaxed text-ink-muted">
                    {category.items.join(" · ")}
                  </p>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 font-survey-mono text-xs text-ink-muted">
            {toolCount(skills)} {ui.v3.toolsCatalogued}
          </p>
        </div>
      </div>
    </section>
  );
}
