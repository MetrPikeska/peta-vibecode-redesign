import { Toaster } from "@/components/ui/sonner";
import { About } from "@/components/v3/about";
import { Contact } from "@/components/v3/contact";
import { Experience } from "@/components/v3/experience";
import { Hero } from "@/components/v3/hero";
import { Portfolio } from "@/components/v3/portfolio";
import { Services } from "@/components/v3/services";
import { SiteFooter } from "@/components/v3/site-footer";
import { SiteNav } from "@/components/v3/site-nav";
import { useConsentInset } from "@/hooks/use-consent-inset";
import { useContent } from "@/hooks/use-content";
import { useHashScroll } from "@/hooks/use-hash-scroll";
import { useTheme } from "@/hooks/use-theme";

/**
 * v3 — the shadcn/ui surface, built on the starter template's own stack and
 * palette: New York style, neutral base, Card / Badge / Accordion / Sheet.
 *
 * Five destinations instead of nine. The four folded-in blocks keep their own
 * anchors (`#education`, `#certifications`, `#projects`, `#skills`) inside the
 * sections that absorbed them, so every link v1 and v2 share still lands where
 * it did. Tokens are scoped by the `.v3` class on the root element — see
 * `styles/v3.css`.
 */
export default function V3ShadcnPage() {
  const { ui } = useContent();
  const { theme } = useTheme();

  useHashScroll();
  useConsentInset();

  return (
    <div className="v3 min-h-screen">
      <a href="#main" className="skip-link">
        {ui.a11y.skipToContent}
      </a>
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
      {/* The toaster portals to `<body>`, outside `.v3`, so it is told the
          theme rather than reading it from a token it cannot see. */}
      <Toaster theme={theme} />
    </div>
  );
}
