import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Section headings run one step larger than the brief's `text-3xl md:text-4xl`:
 * on boards 2 to 5 the heading is the largest type in its section, and at
 * `text-4xl` it was out-sized by the company names in the work ledger.
 */
export function SectionHeading({ id, children, className }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn("text-4xl font-semibold leading-none tracking-tighter md:text-5xl", className)}
    >
      {children}
    </h2>
  );
}
