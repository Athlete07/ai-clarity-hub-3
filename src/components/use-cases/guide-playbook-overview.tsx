import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Check, Clock } from "lucide-react";
import { ShareMenu } from "@/components/share-menu";
import { LandingPageShell } from "@/components/home/landing-page-shell";
import { LandingSectionLabel } from "@/components/home/landing-ui";
import { ExplainParagraph } from "@/components/use-cases/explain-text";
import { PLAYBOOK_REPOSITORY, brandOgMeta } from "@/lib/brand";
import { PLAYBOOK_KIND_LABELS } from "@/lib/playbook-repository/taxonomy";
import type { UseCaseProgress } from "@/lib/use-case-storage";
import {
  firstGuideChapter,
  guideChapterPath,
  guideOverviewPath,
  guideProgressKey,
  totalGuideReadingMinutes,
} from "@/lib/use-cases/guide-helpers";
import type { GuideChapter } from "@/lib/use-cases/guide-types";
import type { UseCasePlaybook } from "@/lib/use-cases/types";

export function guideCourseJsonLd(
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> },
  siteOrigin = "https://factorbeam.com",
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: playbook.title,
    description: playbook.summary,
    url: `${siteOrigin}${guideOverviewPath(playbook.slug)}`,
    provider: { "@type": "Organization", name: "FactorBeam" },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: playbook.timeToImplement,
    },
    hasPart: playbook.guide.chapters.map((ch) => ({
      "@type": "LearningResource",
      name: ch.title,
      description: ch.subtitle,
      url: `${siteOrigin}${guideChapterPath(playbook.slug, ch.slug)}`,
      position: ch.number,
    })),
  };
}

function GuideMetaGrid({ playbook }: { playbook: UseCasePlaybook }) {
  const totalMinutes = totalGuideReadingMinutes(playbook);
  const chapterCount = playbook.guide!.chapters.length;

  const cells = [
    { label: "Chapters", value: `${chapterCount} sequenced articles` },
    {
      label: "Reading time",
      value: totalMinutes ? `~${totalMinutes} min total` : playbook.timeToImplement,
    },
    { label: "Stack", value: playbook.tools.slice(0, 3).join(", ") },
    { label: "Cost", value: playbook.costEstimate },
  ];

  return (
    <div className="playbook-meta-grid mt-8 max-w-3xl">
      {cells.map((cell) => (
        <div key={cell.label} className="playbook-meta-cell">
          <p className="playbook-meta-label">{cell.label}</p>
          <p className="playbook-meta-value">{cell.value}</p>
        </div>
      ))}
    </div>
  );
}

function ChapterArticleCard({
  playbookSlug,
  chapter,
  progress,
}: {
  playbookSlug: string;
  chapter: GuideChapter;
  progress: UseCaseProgress;
}) {
  const done = progress[guideProgressKey(playbookSlug, chapter.slug)] === "done";

  return (
    <Link
      to="/use-cases/$slug/$chapterSlug"
      params={{ slug: playbookSlug, chapterSlug: chapter.slug }}
      className="landing-surface-card landing-surface-card-hover group flex flex-col rounded-2xl p-5 sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-[11px] tracking-wider text-muted-foreground">
          Ch {String(chapter.number).padStart(2, "0")}
        </span>
        {done ? (
          <Check size={14} className="shrink-0 text-success" aria-label="Completed" />
        ) : (
          <ArrowRight
            size={14}
            className="shrink-0 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-dark"
          />
        )}
      </div>
      <h3 className="mt-3 text-[17px] font-medium leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-purple-dark">
        {chapter.title}
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
        {chapter.subtitle}
      </p>
      {chapter.readingMinutes ? (
        <p className="mt-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground/80">
          ~{chapter.readingMinutes} min · standalone article
        </p>
      ) : null}
    </Link>
  );
}

export function GuidePlaybookOverview({
  playbook,
  progress,
}: {
  playbook: UseCasePlaybook & { guide: NonNullable<UseCasePlaybook["guide"]> };
  progress: UseCaseProgress;
}) {
  const guide = playbook.guide;
  const first = firstGuideChapter(playbook)!;
  const totalMinutes = totalGuideReadingMinutes(playbook);
  const doneCount = guide.chapters.filter(
    (c) => progress[guideProgressKey(playbook.slug, c.slug)] === "done",
  ).length;
  const pct = guide.chapters.length
    ? Math.round((doneCount / guide.chapters.length) * 100)
    : 0;

  return (
    <LandingPageShell>
      <header className="playbook-detail-hero relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 transition-colors hover:text-white"
          >
            ← {PLAYBOOK_REPOSITORY.backShort}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90">
              {PLAYBOOK_KIND_LABELS[playbook.kind]}
            </span>
            <span className="text-[12px] text-white/50">
              {guide.chapters.length} chapters · read in order or jump to any article
            </span>
          </div>

          <h1 className="mt-4 max-w-4xl text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.04em] text-white">
            {playbook.title}
          </h1>

          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/65 sm:text-[17px]">
            {playbook.summary}
          </p>

          {playbook.heroBullets && playbook.heroBullets.length > 0 ? (
            <ul className="mt-6 max-w-2xl space-y-2">
              {playbook.heroBullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-[14px] leading-relaxed text-white/60"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#C4B5FD]" aria-hidden />
                  {bullet}
                </li>
              ))}
            </ul>
          ) : null}

          <GuideMetaGrid playbook={playbook} />

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/use-cases/$slug/$chapterSlug"
              params={{ slug: playbook.slug, chapterSlug: first.slug }}
              className="landing-cta-on-aurora inline-flex items-center gap-2"
            >
              <BookOpen size={16} />
              Start Chapter 1
              <ArrowRight size={15} />
            </Link>
            {doneCount > 0 ? (
              <p className="text-[13px] text-white/55">
                {pct}% complete · {doneCount}/{guide.chapters.length} chapters
              </p>
            ) : null}
            <span className="ml-auto">
              <ShareMenu
                title={playbook.title}
                summary={playbook.summary}
                path={guideOverviewPath(playbook.slug)}
                variant="icon"
              />
            </span>
          </div>
        </div>
      </header>

      <div className="catalog-body">
        {playbook.decisionCriteria.length > 0 ? (
          <section className="landing-body-section-alt">
            <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12">
              <LandingSectionLabel>Is this guide for you?</LandingSectionLabel>
              <div className="mt-8 space-y-0 divide-y divide-border landing-surface-card overflow-hidden rounded-2xl text-left">
                {playbook.decisionCriteria.map((c, i) => (
                  <div key={i} className="px-5 py-5 sm:px-6">
                    <p className="text-[15px] font-medium text-foreground">{c.question}</p>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {c.yesMeans}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <LandingSectionLabel>{guide.series.title}</LandingSectionLabel>
              <h2 className="landing-headline mt-4">
                Every chapter is a
                <em className="landing-headline-italic"> standalone article.</em>
              </h2>
              {guide.series.subtitle ? (
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  {guide.series.subtitle}
                </p>
              ) : null}
            </div>
            {totalMinutes ? (
              <p className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                <Clock size={14} />
                ~{totalMinutes} min if you read cover to cover
              </p>
            ) : null}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guide.chapters.map((chapter) => (
              <ChapterArticleCard
                key={chapter.slug}
                playbookSlug={playbook.slug}
                chapter={chapter}
                progress={progress}
              />
            ))}
          </div>
        </section>

        {playbook.businessContext.length > 0 ? (
          <section className="landing-body-section">
            <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
              <LandingSectionLabel>Why this guide exists</LandingSectionLabel>
              <ExplainParagraph
                parts={playbook.businessContext}
                className="mt-6 text-[16px] leading-[1.75] text-muted-foreground sm:text-[17px]"
              />
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
          <div className="catalog-methodology flex flex-col items-center p-10 text-center sm:p-14">
            <div className="catalog-methodology-aurora" aria-hidden />
            <div className="relative">
              <h2 className="text-[22px] font-medium tracking-tight text-white sm:text-[26px]">
                Ready to start?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[14px] text-white/70">
                Chapter 1 builds the mental model. Or jump to any chapter that matches
                your bottleneck — each one stands alone.
              </p>
              <Link
                to="/use-cases/$slug/$chapterSlug"
                params={{ slug: playbook.slug, chapterSlug: first.slug }}
                className="landing-cta-on-aurora mt-8 inline-flex items-center gap-2"
              >
                Start Chapter 1: {first.title}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </LandingPageShell>
  );
}

export function guideOverviewHead(playbook: UseCasePlaybook) {
  const url = `${PLAYBOOK_REPOSITORY.href}/${playbook.slug}`;
  const chapterCount = playbook.guide?.chapters.length;
  const description = chapterCount
    ? `${playbook.summary} ${chapterCount} chapters — read in order or jump to any article.`
    : playbook.summary;

  return {
    meta: [
      { title: `${playbook.title} — Complete guide | FactorBeam` },
      { name: "description", content: description },
      { property: "og:title", content: playbook.title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: playbook.guide
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify(
              guideCourseJsonLd(
                playbook as UseCasePlaybook & {
                  guide: NonNullable<UseCasePlaybook["guide"]>;
                },
              ),
            ),
          },
        ]
      : undefined,
  };
}
