import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { AI_LITERACY, BRAND, brandOgMeta } from "@/lib/brand";
import { CREATOR } from "@/lib/creator";
import type { Concept } from "@/lib/concepts";
import {
  chapterPath,
  formatExecutiveKbLabel,
  type ExecutiveKb,
  type ExecutiveKbId,
  type ExecutiveKbTrack,
} from "@/lib/executive-kb";
import { executiveKbTrackSearch } from "@/lib/executive-kb-track";
import { ROLES, type RoleId } from "@/lib/role-themes";
import { cn } from "@/lib/utils";

const SITE_ORIGIN = "https://factorbeam.com";

export function literacyArticleJsonLd({
  concept,
  kb,
  kbId,
  track,
  chapterIndex,
}: {
  concept: Concept;
  kb: ExecutiveKb;
  kbId: ExecutiveKbId;
  track: ExecutiveKbTrack;
  chapterIndex: number;
}) {
  const url = `${SITE_ORIGIN}${chapterPath(kbId, concept.slug)}`;
  const trackRole = ROLES.find((r) => r.id === track);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: concept.title,
    description: concept.summary,
    url,
    position: chapterIndex,
    isPartOf: {
      "@type": "Course",
      name: kb.title,
      description: kb.description,
      url: `${SITE_ORIGIN}/ai-literacy?track=${track}`,
      provider: { "@type": "Organization", name: BRAND.name },
      about: trackRole?.title,
    },
    author: {
      "@type": "Person",
      name: CREATOR.name,
      url: `${SITE_ORIGIN}/creator`,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND.name,
      url: SITE_ORIGIN,
    },
    mainEntityOfPage: url,
  };
}

export function literacyChapterHead({
  concept,
  kb,
  kbId,
  track,
  chapterIndex,
  chapterTotal,
}: {
  concept: Concept;
  kb: ExecutiveKb;
  kbId: ExecutiveKbId;
  track: ExecutiveKbTrack;
  chapterIndex: number;
  chapterTotal: number;
}) {
  const canonical = chapterPath(kbId, concept.slug);
  const shortTitle = concept.shortTitle ?? concept.title;
  const pageTitle = `${shortTitle} — Ch ${chapterIndex} of ${chapterTotal} | ${kb.title}`;
  const description = `${concept.summary} Standalone article from ${kb.title} (${formatExecutiveKbLabel(track, kb.order)} · chapter ${chapterIndex} of ${chapterTotal}).`;

  return {
    meta: [
      { title: `${pageTitle} | FactorBeam` },
      { name: "description", content: description },
      { property: "og:title", content: concept.title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "article" },
      { name: "article:section", content: kb.title },
      { property: "og:site_name", content: BRAND.name },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          literacyArticleJsonLd({ concept, kb, kbId, track, chapterIndex }),
        ),
      },
    ],
  };
}

export function LiteracyChapterSeriesBanner({
  kb,
  kbId,
  track,
  chapterIndex,
  chapterTotal,
  keyTakeaway,
  firstChapterSlug,
  currentChapterSlug,
  className,
}: {
  kb: ExecutiveKb;
  kbId: ExecutiveKbId;
  track: ExecutiveKbTrack;
  chapterIndex: number;
  chapterTotal: number;
  keyTakeaway: string;
  firstChapterSlug: string;
  currentChapterSlug: string;
  className?: string;
}) {
  const trackRole = ROLES.find((r) => r.id === track as RoleId);
  const isFirst = currentChapterSlug === firstChapterSlug;

  return (
    <div
      className={cn(
        "rounded-xl border border-purple/15 bg-purple-light/40 px-4 py-4 dark:bg-purple-light/10 sm:px-5 sm:py-5",
        className,
      )}
    >
      <nav
        aria-label="Playbook breadcrumb"
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]"
      >
        <Link
          to="/ai-literacy"
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {AI_LITERACY.name}
        </Link>
        <span className="text-muted-foreground/40" aria-hidden>
          /
        </span>
        <Link
          to="/ai-literacy"
          search={executiveKbTrackSearch(track)}
          className="font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {trackRole?.title ?? track}
        </Link>
        <span className="text-muted-foreground/40" aria-hidden>
          /
        </span>
        <span className="font-medium text-muted-foreground">{kb.title}</span>
        <span className="text-muted-foreground/40" aria-hidden>
          /
        </span>
        <span className="font-medium text-foreground">
          Ch {chapterIndex} of {chapterTotal}
        </span>
      </nav>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-purple-dark dark:text-purple">
        Standalone article · {formatExecutiveKbLabel(track, kb.order)} · sequenced playbook
      </p>

      {keyTakeaway ? (
        <div className="mt-3 flex gap-2.5">
          <Lightbulb size={15} className="mt-0.5 shrink-0 text-purple" aria-hidden />
          <p className="text-[14px] leading-relaxed text-foreground/90">
            <span className="font-medium">What you&apos;ll unlock: </span>
            {keyTakeaway}
          </p>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          to="/ai-literacy"
          search={executiveKbTrackSearch(track)}
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-purple transition-colors hover:text-purple-dark"
        >
          <BookOpen size={13} />
          View {trackRole?.title ?? "track"} library
        </Link>
        {!isFirst ? (
          <Link
            to="/ai-literacy/$kbId/$chapterSlug"
            params={{ kbId, chapterSlug: firstChapterSlug }}
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

export function LiteracyChapterJumpLinks({
  kb,
  kbId,
  track,
  currentChapterSlug,
  chapters,
}: {
  kb: ExecutiveKb;
  kbId: ExecutiveKbId;
  track: ExecutiveKbTrack;
  currentChapterSlug: string;
  chapters: { slug: string; shortTitle: string; note?: string }[];
}) {
  const others = chapters.filter((c) => c.slug !== currentChapterSlug).slice(0, 4);

  if (others.length === 0) return null;

  return (
    <aside
      className="landing-surface-card rounded-2xl p-5 sm:p-6"
      aria-label="Related chapters in this playbook"
    >
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        Not what you need?
      </p>
      <p className="mt-1 text-[13px] text-muted-foreground">
        Jump to another chapter in {kb.title} — each article stands alone.
      </p>
      <ul className="mt-4 space-y-2">
        {others.map((ch) => {
          const num = chapters.findIndex((c) => c.slug === ch.slug) + 1;
          return (
            <li key={ch.slug}>
              <Link
                to="/ai-literacy/$kbId/$chapterSlug"
                params={{ kbId, chapterSlug: ch.slug }}
                className="group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted/50"
              >
                <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                  {String(num).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[13px] font-medium text-foreground group-hover:text-purple-dark">
                    {ch.shortTitle}
                  </span>
                  {ch.note ? (
                    <span className="mt-0.5 block text-[12px] leading-snug text-muted-foreground line-clamp-2">
                      {ch.note}
                    </span>
                  ) : null}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link
        to="/ai-literacy"
        search={executiveKbTrackSearch(track)}
        className="landing-text-cta mt-4 inline-flex items-center gap-1 text-[12px]"
      >
        Browse all playbooks in this track
        <ArrowRight size={12} />
      </Link>
    </aside>
  );
}
