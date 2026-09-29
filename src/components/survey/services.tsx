import * as Accordion from "@radix-ui/react-accordion";
import { EnquiryCta } from "@/components/survey/enquiry-cta";
import { SectionHeading } from "@/components/survey/section-heading";
import { TagList } from "@/components/survey/tag-list";
import { contact } from "@/data/content";
import { useContent } from "@/hooks/use-content";

/**
 * One icon per service, by position in `services[]` (same order in both
 * content files):
 *   0 Spatial Databases & API          database
 *   1 Web GIS Applications             map-pin
 *   2 Python Automation & Data         code
 *   3 Computer Vision & GeoAI          camera-360
 *   4 Remote Sensing & DEM             gnss (the satellite)
 *   5 IoT & Real-Time Data Systems     drone (the set has no sensor glyph;
 *                                      the drone is the nearest field device)
 *   6 LiDAR & 3D Point Cloud           lidar
 */
const SERVICE_ICONS = [
  "/survey/icons/database.png",
  "/survey/icons/map-pin.png",
  "/survey/icons/code.png",
  "/survey/icons/camera-360.png",
  "/survey/icons/gnss.png",
  "/survey/icons/drone.png",
  "/survey/icons/lidar.png",
] as const;

/**
 * Board 5: hover-accordion slices on the survey grid, one per service, and
 * the rate as a framed block with the enquiry garment. The first slice starts
 * open so the prerendered page carries one full answer, as the board does.
 */
export function Services() {
  const { services, servicesMeta, ui } = useContent();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="survey-grid border-t border-hairline"
    >
      <div className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10 md:py-28">
        <SectionHeading id="services-heading">{ui.v4.nav.services}</SectionHeading>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue={services[0]?.title}
          className="mt-12 border-t border-survey/30"
        >
          {services.map((service, index) => {
            const icon = SERVICE_ICONS[index];
            return (
              <Accordion.Item
                key={service.title}
                value={service.title}
                className="border-b border-survey/30"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex min-h-18 w-full items-center gap-5 py-3 text-left hover:bg-sheet/70 md:gap-8 md:px-3">
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        width={40}
                        height={40}
                        className="size-10 shrink-0"
                      />
                    ) : null}
                    <span className="flex-1 text-lg font-semibold tracking-tight md:text-xl">
                      {service.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative mr-1 size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45 motion-reduce:transition-none"
                    >
                      <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-survey" />
                      <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-survey" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="pb-7 pl-[3.75rem] pr-6 md:pl-[5.75rem] md:pr-12">
                  <p className="text-sm leading-relaxed text-ink-muted">{service.question}</p>
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <TagList tags={service.tags} className="mt-4" />
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>

        <div className="mt-10 flex flex-col gap-6 border border-survey/60 bg-paper p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-[52ch]">
            <p className="font-survey-mono text-sm">
              <span className="text-ink-muted">{ui.v3.engagement.rate}</span>{" "}
              <span className="text-ink">{servicesMeta.rate}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{servicesMeta.rateNote}</p>
          </div>
          <EnquiryCta href={`mailto:${contact.email}`}>{ui.v3.engagement.cta}</EnquiryCta>
        </div>
      </div>
    </section>
  );
}
