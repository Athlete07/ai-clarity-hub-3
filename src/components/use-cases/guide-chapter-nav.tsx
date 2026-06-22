import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
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
      {series.subtitle && (
        <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
          {series.subtitle}
        </p>
      )}
      <ol className={cn("mt-4 space-y-0.5", !isSidebar && "sm:grid sm:grid-cols-2 sm:gap-2 sm:space-y-0")}>
        {chapters.map((chapter) => {
          const active = chapter.slug === currentChapterSlug;
          const done = progress[guideProgressKey(playbookSlug, chapter.slug)] === "done";
          return (
            <li key={chapter.slug}>
              <Link
                to="/use-cases/$slug/$chapterSlug"
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
  prev,
  next,
}: {
  playbookSlug: string;
  prev?: GuideChapter;
  next?: GuideChapter;
}) {
  if (!prev && !next) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {prev ? (
        <Link
          to="/use-cases/$slug/$chapterSlug"
          params={{ slug: playbookSlug, chapterSlug: prev.slug }}
          className="group rounded-xl border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-muted/30"
        >
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Previous
          </p>
          <p className="mt-2 text-[15px] font-medium text-foreground group-hover:underline">
            Ch {prev.number}: {prev.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to="/use-cases/$slug/$chapterSlug"
          params={{ slug: playbookSlug, chapterSlug: next.slug }}
          className="group rounded-xl border border-border p-5 text-right transition-colors hover:border-foreground/20 hover:bg-muted/30 sm:col-start-2"
        >
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Next
          </p>
          <p className="mt-2 text-[15px] font-medium text-foreground group-hover:underline">
            Ch {next.number}: {next.title}
          </p>
        </Link>
      ) : null}
    </div>
  );
}

/** @deprecated use guideChapterPath from guide-helpers */
export { guideChapterPath };
