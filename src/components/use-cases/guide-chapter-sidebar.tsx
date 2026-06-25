import { Link } from "@tanstack/react-router";
import { Check, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FactorBeamLogo } from "@/components/factorbeam-logo";
import { PLAYBOOK_REPOSITORY, BRAND } from "@/lib/brand";
import { guideProgressKey } from "@/lib/use-cases/guide-helpers";
import type { GuideChapter, GuidePlaybook } from "@/lib/use-cases/guide-types";
import type { UseCaseProgress } from "@/lib/use-case-storage";
import { cn } from "@/lib/utils";

type GuideChapterSidebarProps = {
  playbookSlug: string;
  series: GuidePlaybook["series"];
  chapters: GuideChapter[];
  currentChapterSlug?: string;
  progress?: UseCaseProgress;
  open?: boolean;
  onClose?: () => void;
};

export function GuideChapterSidebar({
  playbookSlug,
  series,
  chapters,
  currentChapterSlug,
  progress = {},
  open = false,
  onClose,
}: GuideChapterSidebarProps) {
  const [sidebarWidth, setSidebarWidth] = useState(248);
  const isResizing = useRef(false);

  const doneCount = chapters.filter(
    (c) => progress[guideProgressKey(playbookSlug, c.slug)] === "done",
  ).length;
  const pct = chapters.length ? Math.round((doneCount / chapters.length) * 100) : 0;

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isResizing.current) return;
      setSidebarWidth((w) => Math.max(200, Math.min(360, w + e.movementX)));
    };
    const onUp = () => {
      if (!isResizing.current) return;
      isResizing.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, []);

  const nav = (
    <nav className="flex flex-col px-4 py-6 sm:px-5" aria-label="Playbook chapters">
      <Link
        to="/library"
        className="mb-5 inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
        onClick={onClose}
      >
        {PLAYBOOK_REPOSITORY.backShort}
      </Link>

      <Link
        to="/library/$slug"
        params={{ slug: playbookSlug }}
        className="mb-3 inline-flex items-center gap-1 text-[12px] font-medium text-purple transition-colors hover:text-purple-dark"
        onClick={onClose}
      >
        Guide overview →
      </Link>

      <p className="text-[13px] font-medium leading-snug text-foreground">{series.title}</p>
      {series.subtitle && (
        <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{series.subtitle}</p>
      )}

      <div className="mt-4">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span>
            {doneCount}/{chapters.length} chapters
          </span>
          <span>{pct}%</span>
        </div>
        <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-purple transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <ul className="mt-5 space-y-0.5">
        {chapters.map((chapter) => {
          const isCurrent = chapter.slug === currentChapterSlug;
          const done = progress[guideProgressKey(playbookSlug, chapter.slug)] === "done";

          return (
            <li key={chapter.slug}>
              <Link
                to="/library/$slug/$chapterSlug"
                params={{ slug: playbookSlug, chapterSlug: chapter.slug }}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors",
                  isCurrent
                    ? "bg-purple-light/80 font-medium text-purple-dark dark:bg-purple-light/15 dark:text-purple"
                    : "text-foreground/85 hover:bg-muted/60",
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold",
                    done
                      ? "bg-success-bg text-success"
                      : isCurrent
                        ? "bg-purple text-primary-foreground"
                        : "border border-border text-muted-foreground",
                  )}
                >
                  {done ? <Check size={11} /> : chapter.number}
                </span>
                <span className="min-w-0 flex-1 truncate leading-snug">{chapter.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="mt-6 inline-flex items-center text-[12px] text-muted-foreground transition-colors hover:text-foreground"
      >
        ↑ Back to top
      </button>
    </nav>
  );

  return (
    <>
      <aside
        className="relative sticky top-12 hidden h-[calc(100vh-3rem)] shrink-0 overflow-y-auto border-r border-border/80 bg-muted/20 lg:block"
        style={{ width: sidebarWidth }}
      >
        {nav}
        <div
          className="absolute right-0 top-0 h-full w-1 cursor-col-resize hover:bg-purple-light active:bg-purple"
          aria-hidden
          onMouseDown={(e) => {
            e.preventDefault();
            isResizing.current = true;
            document.body.style.cursor = "col-resize";
            document.body.style.userSelect = "none";
          }}
        />
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-foreground/30"
            aria-label="Close chapter menu"
            onClick={onClose}
          />
          <div className="absolute left-0 top-0 h-full w-[min(280px,88vw)] overflow-y-auto bg-background shadow-xl">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-[14px] font-medium">Chapters</span>
              <button type="button" onClick={onClose} aria-label="Close menu">
                <X size={18} className="text-muted-foreground" />
              </button>
            </div>
            {nav}
          </div>
        </div>
      )}
    </>
  );
}

export function GuidePlaybookSubheader({
  playbookTitle,
  playbookSlug,
  chapter,
  chapterCount,
  donePct,
  onOpenMenu,
}: {
  playbookTitle: string;
  playbookSlug: string;
  firstChapterSlug?: string;
  chapter?: GuideChapter;
  chapterCount: number;
  donePct: number;
  onOpenMenu: () => void;
}) {
  const displayNum = chapter?.number;

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="site-header--slim mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="nav-icon-btn text-muted-foreground transition-colors hover:bg-muted lg:hidden"
            onClick={onOpenMenu}
            aria-label="Open chapter menu"
          >
            <Menu size={20} />
          </button>
          <Link
            to="/library"
            className="nav-link hidden items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            {PLAYBOOK_REPOSITORY.name}
          </Link>
          <span className="hidden text-muted-foreground/40 sm:inline" aria-hidden>
            /
          </span>
          <Link
            to="/library/$slug"
            params={{ slug: playbookSlug }}
            className={cn(
              "nav-link truncate transition-colors",
              chapter
                ? "hidden text-muted-foreground hover:text-foreground sm:inline"
                : "font-medium text-foreground",
            )}
          >
            {playbookTitle}
          </Link>
          {chapter && (
            <>
              <span className="hidden text-muted-foreground/40 sm:inline" aria-hidden>
                /
              </span>
              <span className="hidden truncate text-[13px] font-medium text-foreground sm:inline">
                Ch. {chapter.number}: {chapter.title}
              </span>
            </>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="nav-link hidden text-muted-foreground md:inline">
            {displayNum
              ? `Ch. ${displayNum}/${chapterCount} · ${donePct}%`
              : `${chapterCount} chapters · ${donePct}%`}
          </span>
          <Link to="/" className="flex items-center lg:hidden" aria-label={BRAND.name}>
            <FactorBeamLogo context="icon" />
          </Link>
        </div>
      </div>
      <div className="h-[2px] bg-muted">
        <div
          className="h-full bg-purple transition-all duration-500"
          style={{ width: `${donePct}%` }}
        />
      </div>
    </header>
  );
}
