import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Subsection } from "@/components/v3/section";
import { useContent } from "@/hooks/use-content";

export function Certifications() {
  const { certifications, ui } = useContent();

  return (
    <Subsection id="certifications" title={ui.sections.certifications}>
      <Accordion type="single" collapsible className="border-t">
        {certifications.map((certification, index) => (
          <AccordionItem key={certification.name} value={`certification-${index}`}>
            <AccordionTrigger className="gap-4">
              <span className="flex flex-1 flex-col gap-0.5 pr-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span>{certification.name}</span>
                <span className="shrink-0 text-xs font-normal text-muted-foreground">
                  {certification.issuer} · {certification.date}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="max-w-2xl leading-relaxed text-foreground/80">
                {certification.description}
              </p>
              {certification.pdfUrl ? (
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <a
                    href={certification.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ui.v3.openCertificate} — ${certification.name}`}
                  >
                    {ui.v3.openCertificate}
                    <ArrowUpRight />
                  </a>
                </Button>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Subsection>
  );
}
