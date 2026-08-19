import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/v3/section";
import { Skills } from "@/components/v3/skills";
import { useContent } from "@/hooks/use-content";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/content";

/** Every outbound link a project carries, in the order a reader wants them. */
function projectLinks(project: Project) {
  const links: { label: string; url: string }[] = [];
  if (project.link) links.push({ label: project.linkLabel ?? project.link, url: project.link });
  if (project.webLink)
    links.push({ label: project.webLinkLabel ?? project.webLink, url: project.webLink });
  if (project.links) links.push(...project.links);
  return links;
}

/**
 * One project. The lead entry runs across both columns of the grid — with the
 * copy held to a readable measure and its detail split into two columns, so
 * the extra width buys prominence rather than 140-character lines.
 */
function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const links = projectLinks(project);

  return (
    <Card className={cn("flex flex-col", featured && "md:col-span-2")}>
      {project.image ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="aspect-video w-full rounded-t-xl border-b object-cover"
        />
      ) : null}
      <CardHeader>
        <CardTitle className={featured ? "text-lg" : "text-base"}>
          {project.title}
        </CardTitle>
        <CardDescription
          className={cn("leading-relaxed text-foreground/80", featured && "max-w-3xl")}
        >
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul
          className={cn(
            "space-y-2 text-sm text-foreground/80",
            // Columns, not a two-column grid: a grid pairs the bullets across
            // the gutter, so the list reads sideways and leaves a hole under
            // every short item. Column flow keeps 1-4 left, 5-8 right.
            featured &&
              "sm:columns-2 sm:gap-x-10 sm:space-y-0 [&>li]:mb-2 [&>li]:break-inside-avoid",
          )}
        >
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2.5">
              <span
                className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50"
                aria-hidden="true"
              />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {links.length ? (
        <CardFooter className="flex-wrap gap-2">
          {links.map((link, index) => (
            <Button
              key={link.url}
              asChild
              // The first link is the one the card is for; the rest are
              // supporting. Equal-weight buttons leave the reader no way in.
              variant={index === 0 ? "default" : "outline"}
              size="sm"
            >
              {/* The visible label stays short, but "GitHub" appears on almost
                  every card — so the accessible name names the project too,
                  and a screen reader's link list stops being seven identical
                  entries. */}
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} — ${project.title}`}
              >
                {link.label}
                <ArrowUpRight />
              </a>
            </Button>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  );
}

export function Portfolio() {
  const { projects, ui } = useContent();
  const [lead, ...rest] = projects;

  return (
    <Section id="portfolio" title={ui.v3.nav.portfolio} lead={ui.v3.lead.portfolio}>
      <div className="grid gap-4 md:grid-cols-2">
        {lead ? <ProjectCard key={lead.title} project={lead} featured /> : null}
        {rest.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <Skills />
    </Section>
  );
}
