import { ArrowRight, Layers } from "lucide-react";
import type { ArchitectureStep } from "@/lib/use-cases/types";

export function ArchitectureDiagram({
  title,
  caption,
  steps,
}: {
  title: string;
  caption: string;
  steps: ArchitectureStep[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border px-6 py-5">
        <div className="flex items-center gap-2">
          <Layers size={16} className="text-muted-foreground" />
          <h3 className="text-[15px] font-medium text-foreground">{title}</h3>
        </div>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
          {caption}
        </p>
      </div>
      <div className="overflow-x-auto p-6 sm:p-8">
        <div className="flex w-full min-w-min items-stretch gap-0">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <div key={i} className="flex items-center">
                <div
                  className={`flex w-[152px] flex-col rounded-lg border px-4 py-4 ${
                    isLast
                      ? "border-foreground/15 bg-foreground text-background"
                      : "border-border bg-background"
                  }`}
                >
                  <span
                    className={`text-[13px] font-medium leading-snug ${isLast ? "" : "text-foreground"}`}
                  >
                    {step.label}
                  </span>
                  <span
                    className={`mt-1.5 text-[11px] leading-snug ${isLast ? "text-background/70" : "text-muted-foreground"}`}
                  >
                    {step.desc}
                  </span>
                  {step.tool && (
                    <span
                      className={`mt-3 text-[10px] font-medium tracking-wide uppercase ${
                        isLast ? "text-background/60" : "text-muted-foreground/70"
                      }`}
                    >
                      {step.tool}
                    </span>
                  )}
                </div>
                {!isLast && (
                  <ArrowRight
                    size={14}
                    className="mx-2 shrink-0 text-muted-foreground/40"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
