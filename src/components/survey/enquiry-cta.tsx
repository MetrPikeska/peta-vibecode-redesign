import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EnquiryCtaProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/**
 * The enquiry garment, the one rationed block on the page: a survey fill
 * slides in from the left on hover and the label flips to paper.
 */
export function EnquiryCta({ href, children, className }: EnquiryCtaProps) {
  return (
    <a
      href={href}
      className={cn("survey-enquiry h-12 shrink-0 px-6 font-survey-mono text-sm", className)}
    >
      <span className="survey-enquiry__label">{children}</span>
    </a>
  );
}
