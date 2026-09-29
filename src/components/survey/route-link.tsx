import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RouteLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * The "view work" garment: the label sits on a dotted survey path and the
 * arrow travels 8 px along it on hover. Styles live in `styles/survey.css`.
 */
export function RouteLink({ href, children, className }: RouteLinkProps) {
  return (
    <a href={href} className={cn("survey-route text-sm font-medium", className)}>
      <span>{children}</span>
      <span aria-hidden="true" className="survey-route__arrow">
        →
      </span>
    </a>
  );
}
