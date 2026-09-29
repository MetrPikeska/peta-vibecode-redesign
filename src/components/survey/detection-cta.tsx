import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DetectionCtaProps {
  href: string;
  children: ReactNode;
  size?: "sm" | "md";
  /** Opens in a new tab; the CV is a PDF on another path. */
  external?: boolean;
  className?: string;
}

/**
 * The "download CV" garment: four survey-blue corner brackets around the
 * label that step inward on hover, a bounding box locking on. The top pair is
 * drawn on the anchor's pseudo-elements, the bottom pair on the base span.
 */
export function DetectionCta({
  href,
  children,
  size = "md",
  external = false,
  className,
}: DetectionCtaProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "survey-detect font-survey-mono",
        size === "sm" ? "h-9 px-3 text-xs" : "h-12 px-5 text-sm",
        className,
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="survey-detect__base" />
    </a>
  );
}
