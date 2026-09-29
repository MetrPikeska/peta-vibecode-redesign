import { About } from "@/components/survey/about";
import { Contact } from "@/components/survey/contact";
import { Hero } from "@/components/survey/hero";
import { Portfolio } from "@/components/survey/portfolio";
import { Services } from "@/components/survey/services";
import { SiteFooter } from "@/components/survey/site-footer";
import { SiteNav } from "@/components/survey/site-nav";
import { Work } from "@/components/survey/work";
import { useConsentInset } from "@/hooks/use-consent-inset";
import { useContent } from "@/hooks/use-content";
import { useHashScroll } from "@/hooks/use-hash-scroll";

/**
 * v4 "survey": the page as one mapping drive, each section a waypoint.
 * Contract: DESIGN.survey.md and the boards in refs/survey/. Tokens are
 * declared in `styles/survey.css` and scoped by the `.survey` root class.
 *
 * Same five destinations as v3; the folded-in blocks keep their own anchors
 * (`#education`, `#certifications`, `#projects`, `#skills`). Light theme
 * only, so there is no theme toggle and no dark token.
 */
export default function V4SurveyPage() {
  const { ui } = useContent();

  useHashScroll();
  useConsentInset();

  return (
    <div className="survey min-h-dvh">
      <a href="#main" className="skip-link">
        {ui.a11y.skipToContent}
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
