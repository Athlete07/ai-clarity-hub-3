import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { RepositoryCatalogEntry } from "@/lib/playbook-repository/catalog";
import {
  PLAYBOOK_KIND_LABELS,
  REPOSITORY_CATEGORY_MAP,
} from "@/lib/playbook-repository/taxonomy";
import { REPOSITORY_ROLE_LABELS } from "@/lib/playbook-repository/taxonomy";

export function RepositoryRow({
  entry,
  commentCount = 0,
}: {
  entry: RepositoryCatalogEntry;
  commentCount?: number;
}) {
  const category = REPOSITORY_CATEGORY_MAP[entry.categoryId];
  const roleLine = entry.roles.map((r) => REPOSITORY_ROLE_LABELS[r]).join(" · ");

  const inner = (
    <>
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
            <span className="font-medium text-foreground/70">
              {PLAYBOOK_KIND_LABELS[entry.kind]}
            </span>
            <span aria-hidden>·</span>
            <span>{category.label}</span>
            {entry.timeLabel && (
              <>
                <span aria-hidden>·</span>
                <span>{entry.timeLabel}</span>
              </>
            )}
          </div>
          <h3 className="mt-2 text-[16px] font-medium leading-snug tracking-[-0.01em] text-foreground transition-colors group-hover:text-purple-dark sm:text-[17px]">
            {entry.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-[14px] leading-relaxed text-muted-foreground">
            {entry.summary}
          </p>
          <p className="mt-2 text-[12px] text-muted-foreground/80">
            {roleLine}
            {entry.tools.length > 0 && ` · ${entry.tools.slice(0, 3).join(", ")}`}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:pt-1">
          {commentCount > 0 && (
            <span className="inline-flex items-center gap-1 text-[12px] text-muted-foreground">
              <MessageCircle size={13} />
              {commentCount}
            </span>
          )}
          <ArrowRight
            size={16}
            className="text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-dark"
          />
        </div>
      </div>
    </>
  );

  if (entry.external) {
    return (
      <a
        href={entry.href}
        className="repository-row group block border-b border-border py-5 transition-colors last:border-0 hover:bg-muted/20 sm:px-4 sm:-mx-4 sm:rounded-lg"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to="/use-cases/$slug"
      params={{ slug: entry.slug }}
      className="repository-row group block border-b border-border py-5 transition-colors last:border-0 hover:bg-muted/20 sm:px-4 sm:-mx-4 sm:rounded-lg"
    >
      {inner}
    </Link>
  );
}
