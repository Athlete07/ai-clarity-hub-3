import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { PLAYBOOK_REPOSITORY, brandOgMeta } from "@/lib/brand";
import {
  attributionFromPlaybook,
  contentAuthorJsonLd,
  contentPublisherJsonLd,
  SITE_ORIGIN,
} from "@/lib/content-attribution";
import {
  firstGuideChapter,
  guideChapterPath,
  guideOverviewPath,
} from "@/lib/use-cases/guide-helpers";
import type { GuideChapter } from "@/lib/use-cases/guide-types";
import type { UseCasePlaybook } from "@/lib/use-cases/types";
import { cn } from "@/lib/utils";

export function guideArticleJsonLd(
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> },
  chapter: GuideChapter,
  siteOrigin = "https://factorbeam.com",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: chapter.title,
    description: chapter.subtitle,
    url: `${siteOrigin}${guideChapterPath(playbook.slug, chapter.slug)}`,
    isPartOf: {
      "@type": "Course",
      name: playbook.title,
      url: `${siteOrigin}${guideOverviewPath(playbook.slug)}`,
    },
    position: chapter.number,
    author: contentAuthorJsonLd(attributionFromPlaybook(playbook)),
    publisher: contentPublisherJsonLd(),
  };
}

export function GuideChapterSeriesBanner({
  playbook,
  chapter,
  className,
}: {
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> };
  chapter: GuideChapter;
  className?: string;
}) {
  const first = firstGuideChapter(playbook);
  const total = playbook.guide.chapters.length;
  const isFirst = chapter.slug === first?.slug;

  return (
    <div
      className={cn(
        "rounded-xl border border-purple/15 bg-purple-light/40 px-4 py-4 dark:bg-purple-light/10 sm:px-5 sm:py-5",
        className,
      )}
    >
      <nav aria-label="Guide breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]">
        <Link
          to="/library"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {PLAYBOOK_REPOSITORY.name}
        </Link>
        <span className="text-muted-foreground/40" aria-hidden>
          /
        </span>
        <Link
          to="/library/$slug"
          params={{ slug: playbook.slug }}
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {playbook.title}
        </Link>
        <span className="text-muted-foreground/40" aria-hidden>
          /
        </span>
        <span className="font-medium text-foreground">
          Ch {chapter.number} of {total}
        </span>
      </nav>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-purple-dark dark:text-purple">
        Standalone article · part of a sequenced guide
      </p>

      {chapter.keyInsight ? (
        <div className="mt-3 flex gap-2.5">
          <Lightbulb size={15} className="mt-0.5 shrink-0 text-purple" aria-hidden />
          <p className="text-[14px] leading-relaxed text-foreground/90">
            <span className="font-medium">What you&apos;ll unlock: </span>
            {chapter.keyInsight}
          </p>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          to="/library/$slug"
          params={{ slug: playbook.slug }}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-purple transition-colors hover:text-purple-dark"
        >
          <BookOpen size={13} />
          View full guide
        </Link>
        {!isFirst && first ? (
          <Link
            to="/library/$slug/$chapterSlug"
            params={{ slug: playbook.slug, chapterSlug: first.slug }}
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            New here? Start Chapter 1
            <ArrowRight size={12} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export function GuideChapterJumpLinks({
  playbook,
  currentChapter,
}: {
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> };
  currentChapter: GuideChapter;
}) {
  const others = playbook.guide.chapters
    .filter((c) => c.slug !== currentChapter.slug)
    .slice(0, 4);

  if (others.length === 0) return null;

  return (
    <aside
      className="landing-surface-card rounded-2xl p-5 sm:p-6"
      aria-label="Related chapters"
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        Not what you need?
      </p>
      <p className="mt-1 text-[13px] text-muted-foreground">
        Jump to another chapter — each article stands alone.
      </p>
      <ul className="mt-4 space-y-2">
        {others.map((ch) => (
          <li key={ch.slug}>
            <Link
              to="/library/$slug/$chapterSlug"
              params={{ slug: playbook.slug, chapterSlug: ch.slug }}
              className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/50"
            >
              <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                {String(ch.number).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block text-[13px] font-medium text-foreground group-hover:text-purple-dark">
                  {ch.title}
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-muted-foreground line-clamp-1">
                  {ch.subtitle}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to="/library/$slug"
        params={{ slug: playbook.slug }}
        className="landing-text-cta mt-4 inline-flex items-center gap-1 text-[12px]"
      >
        See all {playbook.guide.chapters.length} chapters
        <ArrowRight size={12} />
      </Link>
    </aside>
  );
}

export function guideChapterHead(
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> },
  chapter: GuideChapter,
) {
  const url = `${PLAYBOOK_REPOSITORY.href}/${playbook.slug}/${chapter.slug}`;
  const total = playbook.guide.chapters.length;
  const pageTitle = `${chapter.title} — Ch ${chapter.number} of ${total} | ${playbook.title}`;
  const description = `${chapter.subtitle} Standalone article from ${playbook.title} (chapter ${chapter.number} of ${total}).`;

  return {
    meta: [
      { title: `${pageTitle} | FactorBeam` },
      { name: "description", content: description },
      { property: "og:title", content: chapter.title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { name: "article:section", content: playbook.title },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(guideArticleJsonLd(playbook, chapter)),
      },
    ],
  };
}
