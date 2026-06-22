import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
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

export function RepositoryRow({
  entry,
  commentCount = 0,
}: {
  entry: RepositoryCatalogEntry;
  commentCount?: number;
}) {
  const isMultiChapter = (entry.chapterCount ?? 0) > 1;

  const meta = [
    isMultiChapter && entry.chapterCount
      ? `${entry.chapterCount} chapters`
      : entry.timeLabel,
    entry.readingMinutes ? `~${entry.readingMinutes} min` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const inner = (
    <article className="flex h-full flex-col">
      <LibraryCardHeader
        badge={<LibraryCardBadge>{PLAYBOOK_KIND_LABELS[entry.kind]}</LibraryCardBadge>}
        action={
          <ArrowRight
            size={16}
            className="shrink-0 text-muted-foreground/35 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-dark"
          />
        }
      />
      <LibraryCardTitle>{entry.title}</LibraryCardTitle>
      <LibraryCardSummary>{entry.summary}</LibraryCardSummary>
      <LibraryCardFooter
        meta={meta}
        trailing={
          commentCount > 0 ? (
            <span className="inline-flex shrink-0 items-center gap-1 text-[12px] text-muted-foreground">
              <MessageCircle size={13} />
              {commentCount}
            </span>
          ) : undefined
        }
      />
    </article>
  );

  if (entry.external) {
    return (
      <a href={entry.href} className={LIBRARY_CARD_CLASS}>
        {inner}
      </a>
    );
  }

  return (
    <Link to="/use-cases/$slug" params={{ slug: entry.slug }} className={LIBRARY_CARD_CLASS}>
      {inner}
    </Link>
  );
}
