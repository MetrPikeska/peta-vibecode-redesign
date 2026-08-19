import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contact, hero } from "@/data/content";
import { useContent } from "@/hooks/use-content";

/**
 * The landing plate: who, what, and the three ways on — portfolio, contact, CV.
 *
 * `hero`'s identity fields (name, photo, coordinates, links) come straight from
 * `content.ts`; the three prose fields are translated, so they arrive through
 * the hook. Mixing the two sources in one component is the documented split,
 * not an oversight.
 */
export function Hero() {
  const { hero: copy, ui } = useContent();

  return (
    <section className="hero-shell flex items-center border-b py-16 sm:py-24">
      <div className="hero-inner mx-auto grid w-full max-w-5xl gap-12 px-6 md:grid-cols-[1fr_auto] md:items-center">
        {/* Three blocks, reordered below `sm`. The consent banner owns the
            bottom ~245px of a 390×844 screen until it is answered, and the full
            hero is taller than what remains — so on a phone the calls to action
            follow the claim directly, and the supporting prose comes after
            them. Nothing is dropped; only the order changes. */}
        <div className="order-first flex max-w-2xl flex-col">
          <div className="order-1">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {hero.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
              {copy.tagline}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{copy.subtagline}</p>
          </div>

          <div className="order-3 mt-6 sm:order-2">
            <p className="text-base leading-relaxed text-foreground/80">
              {copy.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {hero.specialties.map((specialty) => (
                <Badge key={specialty} variant="outline" className="font-normal">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          <div className="order-2 mt-6 flex flex-wrap items-center gap-3 sm:order-3 sm:mt-8">
            <Button asChild>
              <a href="#portfolio">
                {ui.v3.viewWork}
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">
                <Mail />
                {ui.hero.contact}
              </a>
            </Button>
            <div className="flex items-center gap-1">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="tap-44"
                aria-label={ui.v3.channels.linkedin}
              >
                <a href={hero.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="tap-44"
                aria-label={ui.v3.channels.github}
              >
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Below `md` the portrait sits after the copy, not before it. Leading
            with a photo pushed the name, the claim and both calls to action
            underneath the consent banner on a phone — the visitor's whole first
            screen was a face. */}
        <div className="order-last md:order-none">
          <img
            src={hero.photo}
            alt={hero.name}
            width={224}
            height={224}
            loading="eager"
            className="size-40 rounded-xl border object-cover shadow-sm sm:size-56"
          />
        </div>
      </div>
    </section>
  );
}
