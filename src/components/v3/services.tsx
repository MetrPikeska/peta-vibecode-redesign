import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/v3/section";
import { footer } from "@/data/content";
import { useContent } from "@/hooks/use-content";

export function Services() {
  const { services, servicesMeta, ui } = useContent();

  return (
    <Section id="services" title={ui.v3.nav.services} lead={ui.v3.lead.services}>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-base">{service.title}</CardTitle>
              {/* The question is the entry point — it is how a visitor
                  recognises their own problem before reading the answer. */}
              <CardDescription className="text-foreground/80">
                {service.question}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between gap-4">
              <p className="text-sm leading-relaxed text-foreground/80">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sekce dřív končila poslední kartou. Návštěvník, který se v některé
          otázce poznal, se z ní nedozvěděl ani sazbu, ani jestli je vůbec
          kapacita — takže neměl jiný další krok než mail naslepo. Tři fakty
          a jedno tlačítko; jediný barevný prvek v sekci je ten další krok. */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-base">{ui.v3.engagement.heading}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <dl className="grid gap-4 sm:grid-cols-3 sm:gap-8">
            <div>
              <dt className="text-xs text-muted-foreground">
                {ui.v3.engagement.rate}
              </dt>
              <dd className="mt-1 font-medium">{servicesMeta.rate}</dd>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {servicesMeta.rateNote}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">
                {ui.v3.engagement.availability}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
                {servicesMeta.availability}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted-foreground">
                {ui.v3.engagement.billing}
              </dt>
              {/* IČO se sem nepřepisuje — bere se z `footer`, kde už je pro
                  patičku i pro JSON-LD. */}
              <dd className="mt-1 text-sm text-foreground/80">
                {ui.footer.icoLabel} {footer.ico}
              </dd>
            </div>
          </dl>
          <Button asChild className="shrink-0">
            <a href="#contact">
              <Mail />
              {ui.v3.engagement.cta}
            </a>
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}
