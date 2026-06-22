import type { ExplainSpan } from "@/lib/concepts";
import { cn } from "@/lib/utils";

export function ExplainText({
  parts,
  className,
}: {
  parts: (string | ExplainSpan)[];
  className?: string;
}) {
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (typeof part === "string") return <span key={i}>{part}</span>;
        return (
          <span
            key={i}
            data-explain={part.explain}
            className="rounded-sm bg-purple-light/40 underline decoration-purple/30 decoration-dotted underline-offset-4 transition-colors hover:bg-purple-light"
          >
            {part.text}
          </span>
        );
      })}
    </span>
  );
}

export function ExplainParagraph({
  parts,
  className,
}: {
  parts: (string | ExplainSpan)[];
  className?: string;
}) {
  return (
    <p className={cn("leading-relaxed text-foreground/90", className)}>
      <ExplainText parts={parts} />
    </p>
  );
}
