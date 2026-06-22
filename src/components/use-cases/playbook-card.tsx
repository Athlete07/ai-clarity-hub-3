import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { UseCasePlaybook } from "@/lib/use-cases/types";

export function PlaybookCard({
  playbook,
  commentCount = 0,
  featured = false,
}: {
  playbook: UseCasePlaybook;
  commentCount?: number;
  featured?: boolean;
}) {
  return (
    <Link
      to="/use-cases/$slug"
      params={{ slug: playbook.slug }}
      className={`playbook-row-card group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8 ${
        featured ? "sm:p-10" : ""
      }`}
    >
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-medium text-muted-foreground">
          {playbook.tags.slice(0, 3).join(" · ")}
        </p>
        <h3
          className={`mt-2 font-medium leading-[1.2] tracking-[-0.02em] text-foreground transition-colors group-hover:text-purple-dark ${
            featured ? "text-[22px] sm:text-[26px]" : "text-[18px] sm:text-[20px]"
          }`}
        >
          {playbook.title}
        </h3>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
          {playbook.timeToImplement} · {playbook.costEstimate}
        </p>
        <p className="mt-2 text-[13px] text-muted-foreground/80">
          {playbook.tools.join(" · ")}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
        {commentCount > 0 && (
          <span className="inline-flex items-center gap-1.5 text-[12px] text-muted-foreground">
            <MessageCircle size={14} />
            {commentCount} discussion{commentCount === 1 ? "" : "s"}
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-purple-dark transition-transform group-hover:translate-x-0.5">
          Read playbook
          <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
