import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import {
  guideChapterPath,
  guideProgressKey,
} from "@/lib/use-cases/guide-helpers";
import type { GuideChapter, GuidePlaybook } from "@/lib/use-cases/guide-types";
import type { UseCaseProgress } from "@/lib/use-case-storage";
import { cn } from "@/lib/utils";

type GuideChapterNavProps = {
  playbookSlug: string;
  series: GuidePlaybook["series"];
  chapters: GuideChapter[];
  currentChapterSlug: string;
  progress?: UseCaseProgress;
  variant?: "sidebar" | "inline";
};

export function GuideChapterNav({
  playbookSlug,
  series,
  chapters,
  currentChapterSlug,
  progress = {},
  variant = "sidebar",
}: GuideChapterNavProps) {
  const isSidebar = variant === "sidebar";

  return (
    <nav
      className={cn(
        isSidebar ? "guide-chapter-nav" : "guide-chapter-nav-inline",
      )}
      aria-label="Playbook chapters"
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {series.title}
      </p>
      <ol className={cn("mt-4 space-y-0.5", !isSidebar && "sm:grid sm:grid-cols-2 sm:gap-2 sm:space-y-0")}>
        {chapters.map((chapter) => {
          const active = chapter.slug === currentChapterSlug;
          const done = progress[guideProgressKey(playbookSlug, chapter.slug)] === "done";
          return (
            <li key={chapter.slug}>
              <Link
                to="/library/$slug/$chapterSlug"
                params={{ slug: playbookSlug, chapterSlug: chapter.slug }}
                className={cn(
                  "guide-chapter-link flex items-start gap-2 rounded-lg px-3 py-2.5 text-[13px] leading-snug transition-colors",
                  active
                    ? "bg-foreground text-background font-medium"
                    : "text-foreground/85 hover:bg-muted/60",
                )}
              >
                <span className="shrink-0 font-mono text-[11px] opacity-70">
                  {String(chapter.number).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block">{chapter.title}</span>
                  {chapter.readingMinutes && (
                    <span
                      className={cn(
                        "mt-0.5 block text-[11px]",
                        active ? "text-background/70" : "text-muted-foreground",
                      )}
                    >
                      {chapter.readingMinutes} min
                    </span>
                  )}
                </span>
                {done && (
                  <Check
                    size={14}
                    className={cn("mt-0.5 shrink-0", active ? "text-background" : "text-success")}
                    aria-label="Completed"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function GuideChapterPager({
  playbookSlug,
  playbookTitle,
  prev,
  next,
  isDone = false,
}: {
  playbookSlug: string;
  playbookTitle?: string;
  prev?: GuideChapter;
  next?: GuideChapter;
  isDone?: boolean;
}) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Chapter navigation"
      className="landing-surface-card rounded-2xl p-4 sm:p-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {prev ? (
          <Link
            to="/library/$slug/$chapterSlug"
            params={{ slug: playbookSlug, chapterSlug: prev.slug }}
            className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-[13px] font-medium text-foreground transition-colors hover:bg-muted"
          >
            ← Ch {prev.number}: {prev.title}
          </Link>
        ) : (
          <span />
        )}
        <span className="text-center text-[12px] text-muted-foreground">
          {isDone ? (
            <span className="inline-flex items-center gap-1.5 text-success">
              <Check size={13} /> Chapter complete
            </span>
          ) : (
            "Mark complete when you finish this chapter"
          )}
        </span>
        {next ? (
          <Link
            to="/library/$slug/$chapterSlug"
            params={{ slug: playbookSlug, chapterSlug: next.slug }}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90 sm:justify-self-end"
          >
            Ch {next.number}: {next.title}
            <ArrowRight size={14} />
          </Link>
        ) : (
          <Link
            to="/library/$slug"
            params={{ slug: playbookSlug }}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-[13px] font-medium text-background transition-opacity hover:opacity-90 sm:justify-self-end"
          >
            {playbookTitle ? `Complete ${playbookTitle}` : "View full guide"}
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </nav>
  );
}

/** @deprecated use guideChapterPath from guide-helpers */
export { guideChapterPath };
