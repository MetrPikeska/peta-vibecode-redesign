import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/v3/section";
import { useContent } from "@/hooks/use-content";

export function Services() {
  const { services, ui } = useContent();

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
    </Section>
  );
}
