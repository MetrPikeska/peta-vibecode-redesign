import { useState } from "react";
import { InstrumentFooter } from "@/components/instrument/instrument-footer";
import { InstrumentNav } from "@/components/instrument/instrument-nav";
import { AboutPlate } from "@/components/instrument/plates/about-plate";
import { CertificationsPlate } from "@/components/instrument/plates/certifications-plate";
import { ContactPlate } from "@/components/instrument/plates/contact-plate";
import { EducationPlate } from "@/components/instrument/plates/education-plate";
import { ExperiencePlate } from "@/components/instrument/plates/experience-plate";
import { HeroPlate } from "@/components/instrument/plates/hero-plate";
import { PortfolioPlate } from "@/components/instrument/plates/portfolio-plate";
import { ResearchPlate } from "@/components/instrument/plates/research-plate";
import { ServicesPlate } from "@/components/instrument/plates/services-plate";
import { SkillsPlate } from "@/components/instrument/plates/skills-plate";
import { useConsentInset } from "@/hooks/use-consent-inset";
import { useContent } from "@/hooks/use-content";
import { useHashScroll } from "@/hooks/use-hash-scroll";

/**
 * The instrument surface: one continuous ruled field, nine plates deep.
 *
 * Selection state lives here rather than inside a plate because two controls in
 * different regions drive it — the hero's project index marks an entry down in
 * the portfolio, and the selector strip marks a row in the skills ledger. Both
 * are toggles: pressing the active entry clears it.
 */
export default function V2InstrumentPage() {
  const { ui, projects } = useContent();
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useHashScroll();
  useConsentInset();

  const selectProject = (title: string) => {
    const next = activeProject === title ? null : title;
    setActiveProject(next);
    if (!next) return;
    const index = projects.findIndex((project) => project.title === title);
    document.getElementById(`project-${index}`)?.scrollIntoView({ block: "start" });
  };

  const selectCategory = (name: string) =>
    setActiveCategory((current) => (current === name ? null : name));

  return (
    <div className="instrument">
      <a href="#main" className="skip">
        {ui.a11y.skipToContent}
      </a>
      <InstrumentNav />
      <main id="main">
        <HeroPlate activeProject={activeProject} onSelectProject={selectProject} />
        <AboutPlate />
        <EducationPlate />
        <ExperiencePlate />
        <ResearchPlate />
        <PortfolioPlate activeProject={activeProject} />
        <SkillsPlate
          activeCategory={activeCategory}
          onSelectCategory={selectCategory}
        />
        <CertificationsPlate />
        <ServicesPlate />
        <ContactPlate />
      </main>
      <InstrumentFooter />
    </div>
  );
}
