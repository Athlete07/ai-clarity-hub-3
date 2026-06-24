import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ShareMenu } from "@/components/share-menu";
import type { RepositoryCatalogEntry } from "@/lib/playbook-repository/catalog";
import {
  LIBRARY_CARD_CLASS,
  LibraryCardBadge,
  LibraryCardFooter,
  LibraryCardHeader,
  LibraryCardSummary,
  LibraryCardTitle,
} from "@/components/playbook-repository/library-card";
import { PLAYBOOK_KIND_LABELS } from "@/lib/playbook-repository/taxonomy";
import { cn } from "@/lib/utils";

function catalogMeta(entry: RepositoryCatalogEntry): string {
  const isMultiChapter = (entry.chapterCount ?? 0) > 1;
  if (isMultiChapter && entry.timeLabel) return entry.timeLabel;
  const parts = [
    isMultiChapter && entry.chapterCount
      ? `${entry.chapterCount} chapters`
      : entry.timeLabel,
    entry.readingMinutes
      ? entry.readingMinutes >= 120
        ? `~${Math.round(entry.readingMinutes / 60)} hr read`
        : `~${entry.readingMinutes} min`
      : null,
  ].filter(Boolean);
  return parts.join(" · ");
}

export function RepositoryRow({
  entry,
  commentCount = 0,
  featured = false,
}: {
  entry: RepositoryCatalogEntry;
  commentCount?: number;
  featured?: boolean;
}) {
  const meta = catalogMeta(entry);
  const tagLine = entry.tags.slice(0, 3).join(" · ");

  const inner = (
    <article className="flex h-full flex-col">
      <LibraryCardHeader
        badge={
          <div className="flex flex-wrap items-center gap-1.5">
            <LibraryCardBadge>{PLAYBOOK_KIND_LABELS[entry.kind]}</LibraryCardBadge>
            {entry.catalogBadge && (
              <span
                className={cn(
                  "rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                  featured
                    ? "border-purple/30 bg-purple/10 text-purple-dark dark:text-purple"
                    : "border-border/60 bg-muted/30 text-muted-foreground",
                )}
              >
                {entry.catalogBadge}
              </span>
            )}
          </div>
        }
        action={
          entry.entryChapterSlug ? (
            <ShareMenu
              title={entry.title}
              summary={entry.summary}
              path={entry.href}
              variant="icon"
            />
          ) : (
            <ArrowRight
              size={16}
              className="shrink-0 text-muted-foreground/35 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-dark"
            />
          )
        }
      />
      {tagLine && (
        <p className="mt-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
          {tagLine}
        </p>
      )}
      <LibraryCardTitle
        className={featured ? "text-[18px] sm:text-[20px]" : undefined}
      >
        {entry.title}
      </LibraryCardTitle>
      <LibraryCardSummary>{entry.summary}</LibraryCardSummary>
      <LibraryCardFooter
        meta={meta}
        trailing={
          commentCount > 0 ? (
            <span className="inline-flex shrink-0 items-center gap-1 text-[12px] text-muted-foreground">
              <MessageCircle size={13} />
              {commentCount}
            </span>
          ) : entry.entryChapterSlug ? (
            <span className="text-[12px] font-medium text-muted-foreground">View guide</span>
          ) : undefined
        }
      />
    </article>
  );

  const cardClass = cn(
    LIBRARY_CARD_CLASS,
    featured && "ring-1 ring-purple/20 shadow-[0_8px_32px_-8px_rgb(83_74_183/0.25)]",
  );

  if (entry.external) {
    return (
      <a href={entry.href} className={cardClass}>
        {inner}
      </a>
    );
  }

  if (entry.entryChapterSlug) {
    return (
      <Link to="/use-cases/$slug" params={{ slug: entry.slug }} className={cardClass}>
        {inner}
      </Link>
    );
  }

  return (
    <Link to="/use-cases/$slug" params={{ slug: entry.slug }} className={cardClass}>
      {inner}
    </Link>
  );
}
