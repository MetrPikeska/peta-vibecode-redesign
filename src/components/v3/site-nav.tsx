import { useState } from "react";
import { Download, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { hero } from "@/data/content";
import { useContent } from "@/hooks/use-content";
import { useLanguage } from "@/contexts/language-context";
import { useTheme } from "@/hooks/use-theme";

/**
 * Five destinations, in reading order. The keys are the anchor ids.
 *
 * Nine labels made the bar a list to be read rather than a set of choices to
 * be made, and four of them named supporting material — education,
 * certifications, research, skills — that nobody navigates to on purpose.
 * Those blocks now sit inside the section that answers the same question, and
 * keep their own ids, so the anchors v1 and v2 share are all still live.
 */
const SECTIONS = [
  "about",
  "experience",
  "portfolio",
  "services",
  "contact",
] as const;

export function SiteNav() {
  const { ui } = useContent();
  const { lang, toggle: toggleLanguage } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const themeLabel = theme === "dark" ? ui.v3.theme.toLight : ui.v3.theme.toDark;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-6">
        <a
          href="#main"
          className="shrink-0 text-sm font-semibold tracking-tight transition-colors hover:text-muted-foreground"
        >
          {hero.name}
        </a>

        {/* Five labels leave the bar real slack at `md`, where nine did not
            fit until `xl` — the menu button is now a phone affordance rather
            than the primary way most laptops reach the page. */}
        <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
          {SECTIONS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="whitespace-nowrap rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {ui.v3.nav[key]}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            aria-label={ui.a11y.switchLanguage}
            className="tap-44 text-xs font-medium uppercase"
          >
            {lang === "cs" ? "EN" : "CS"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
            className="tap-44"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          {/* The CV was hidden below `sm`, which removed it from the phone
              entirely — the one download on the page, gone on the device most
              visitors arrive with. */}
          <Button asChild variant="outline" size="sm">
            <a
              href={hero.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ui.v3.downloadCv}
            >
              <Download />
              <span className="hidden sm:inline">{ui.v3.downloadCv}</span>
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="tap-44 md:hidden"
                aria-label={ui.a11y.openMenu}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72" closeLabel={ui.v3.closeMenu}>
              <SheetTitle className="text-left">{hero.name}</SheetTitle>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-1">
                {SECTIONS.map((key) => (
                  <SheetClose asChild key={key}>
                    <a
                      href={`#${key}`}
                      className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {ui.v3.nav[key]}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <Separator className="my-4" />
              <Button asChild variant="outline" className="w-full">
                <a href={hero.cvUrl} target="_blank" rel="noopener noreferrer">
                  <Download />
                  {ui.v3.downloadCv}
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
