import { cn } from "@/lib/utils";

interface TagListProps {
  tags: string[];
  className?: string;
}

/** Stack and topic tags: mono, survey blue, a thin frame each (board 4). */
export function TagList({ tags, className }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="border border-survey/35 px-1.5 py-1 font-survey-mono text-[11px] leading-none text-survey"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
