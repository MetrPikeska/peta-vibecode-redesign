import { footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { toolCount } from "@/lib/instrument-metrics";
import { AnswerStrip } from "../answer-strip";
import { DataRail, ResultRail } from "../rails";
import { SignatureField } from "../signature-field";

interface HeroPlateProps {
  activeProject: string | null;
  onSelectProject: (title: string) => void;
}

export function HeroPlate({ activeProject, onSelectProject }: HeroPlateProps) {
  // Via the content hook, not the CS module: `hero`'s three prose fields are
  // translated in content.en.ts and the claim below is one of them.
  const { ui, hero, projects, skills, experience, publications } = useContent();
  const labels = ui.instrument;

  return (
    <>
      <div id="top" className="hero">
        <div className="hero__col">
          <DataRail
            rows={[
              { key: labels.rail.operator, value: hero.name },
              { key: labels.rail.focus, value: ui.hero.role },
              { key: labels.rail.base, value: footer.base },
              { key: labels.rail.coord, value: hero.coordinates },
            ]}
            listLabel={labels.rail.index}
            items={projects.map((project) => project.title)}
            activeItem={activeProject}
            onSelect={onSelectProject}
          />
        </div>

        <div className="hero__col">
          <div className="field__claim">
            {/* The name stays the h1 — it is the entity this page is about, and
                machines read it there. It does not also need the display face:
                the sticky wordmark and the rail's operator row already carry it,
                and two monumental voices stacked flush read as one block with
                nothing leading. The claim is what earns the enquiry, so the
                claim gets the scale. */}
            <h1 className="t-sub">{hero.name}</h1>
            {/* Headline, not display: the claim runs 48 characters, and the
                display step caps at 12ch — it would stack to six lines and push
                the signature field off the first screen. 15ch fits it in four. */}
            <p className="t-headline">{hero.tagline}</p>
            <p className="t-label t-dim">{hero.subtagline}</p>
            <p className="t-body">{hero.intro}</p>
          </div>
          <SignatureField
            tags={labels.field.tags}
            verdict={labels.field.verdict}
            label={labels.field.caption}
          />
        </div>

        <div className="hero__col hero__col--result">
          <ResultRail
            figure={String(toolCount(skills))}
            figureLabel={labels.result.figure}
            rows={[
              { key: labels.result.projects, value: projects.length },
              { key: labels.result.roles, value: experience.length },
              { key: labels.result.categories, value: skills.length },
              { key: labels.result.publications, value: publications.length },
              { key: labels.result.ico, value: footer.ico },
            ]}
            state={labels.availability}
            stateNote={String(new Date().getFullYear())}
          />
        </div>
      </div>

      <AnswerStrip answers={labels.answers} />
    </>
  );
}
