import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LandingPageShell } from "@/components/home/landing-page-shell";
import {
  CatalogCrossLink,
  CatalogPageHero,
  CatalogSearch,
} from "@/components/home/catalog-hero";
import { LandingMarquee, LandingSectionLabel } from "@/components/home/landing-ui";
import { LibraryLaneTabs } from "@/components/playbook-repository/library-lane-cards";
import { RepositoryRow } from "@/components/playbook-repository/repository-row";
import {
  LIBRARY_GRID_CLASS,
  PlaybookMethodologyCta,
} from "@/components/executive-kb/playbook-library";
import { AI_LITERACY, PLAYBOOK_REPOSITORY, brandOgMeta } from "@/lib/brand";
import { REPOSITORY_CATALOG } from "@/lib/playbook-repository/catalog";
import {
  EMPTY_REPOSITORY_QUERY,
  queryRepository,
  type RepositoryQuery,
} from "@/lib/playbook-repository/query";
import { searchRepository } from "@/lib/playbook-repository/search";
import { REPOSITORY_SORT_LABELS, type RepositorySort } from "@/lib/playbook-repository/taxonomy";
import { LIBRARY_HERO, type LibraryLane } from "@/lib/playbook-repository/vision";
import { fetchCommentCounts, isSupabaseConfigured } from "@/lib/supabase";

const SEARCH_TYPE_LABELS = {
  catalog: "Library",
  tool: "Tool",
  "ai-literacy": "AI Literacy",
} as const;

const LIBRARY_STATS = [
  { value: "3", label: "Playbooks" },
  { value: "3", label: "Complete guides" },
  { value: "Free", label: "No signup" },
  { value: "$0", label: "Forever" },
];

export const Route = createFileRoute("/library/")({
  head: () => ({
    meta: [
      {
        title: `Playbook Library — Practical AI workflows & guides | FactorBeam`,
      },
      {
        name: "description",
        content: PLAYBOOK_REPOSITORY.tagline,
      },
      {
        property: "og:title",
        content: `Playbook Library | FactorBeam`,
      },
      {
        property: "og:description",
        content: PLAYBOOK_REPOSITORY.tagline,
      },
      { property: "og:url", content: PLAYBOOK_REPOSITORY.href },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: PLAYBOOK_REPOSITORY.href }],
  }),
  component: PlaybookLibraryPage,
});

function PlaybookLibraryPage() {
  const [query, setQuery] = useState<RepositoryQuery>(EMPTY_REPOSITORY_QUERY);
  const [commentCounts, setCommentCounts] = useState<Record<string, number>>({});
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    if (isSupabaseConfigured()) {
      fetchCommentCounts().then(setCommentCounts);
    }
  }, []);

  const searchResults = useMemo(
    () => (query.q.trim() ? searchRepository(query.q) : []),
    [query.q],
  );

  const result = useMemo(
    () => queryRepository(REPOSITORY_CATALOG, query),
    [query],
  );

  const hasFilters = query.kinds.length > 0 || query.q.length > 0;

  const featuredEntries = useMemo(
    () => REPOSITORY_CATALOG.filter((e) => e.featured),
    [],
  );

  const showFeaturedSpotlight =
    !hasFilters && result.page === 1 && featuredEntries.length > 0;

  const gridItems = showFeaturedSpotlight
    ? result.items.filter((e) => !e.featured)
    : result.items;

  function setQ(q: string) {
    setQuery((prev) => ({ ...prev, q, page: 1 }));
  }

  function setSort(sort: RepositorySort) {
    setQuery((prev) => ({ ...prev, sort, page: 1 }));
  }

  function setPage(page: number) {
    setQuery((prev) => ({ ...prev, page }));
  }

  function clearFilters() {
    setQuery(EMPTY_REPOSITORY_QUERY);
  }

  function selectLane(lane: LibraryLane | null) {
    if (!lane) {
      clearFilters();
      return;
    }
    if (lane.kinds.length > 0) {
      setQuery({
        ...EMPTY_REPOSITORY_QUERY,
        kinds: lane.kinds,
        sort: query.sort,
        page: 1,
      });
    }
  }

  const showSearchDropdown = searchFocused && query.q.trim().length > 0;

  return (
    <LandingPageShell>
        <CatalogPageHero
          eyebrow="FactorBeam library"
          title="Playbook Library"
          titleAccent="you can ship today."
          subtitle={LIBRARY_HERO.lead}
        >
          <CatalogSearch
            value={query.q}
            onChange={setQ}
            onClear={() => setQ("")}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
            placeholder="Search playbooks…"
            aria-label="Search playbook library"
          >
            {showSearchDropdown && searchResults.length > 0 ? (
              <div className="catalog-search-dropdown absolute z-40 mt-2 w-full overflow-hidden">
                <ul className="max-h-[280px] overflow-y-auto py-1">
                  {searchResults.map((r) => (
                    <li key={r.id}>
                      <a
                        href={r.href}
                        className="flex items-center gap-3 px-4 py-2.5"
                      >
                        <span className="w-14 shrink-0 text-[10px] uppercase tracking-wider text-white/40">
                          {SEARCH_TYPE_LABELS[r.type]}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-medium">{r.title}</p>
                          <p className="truncate text-[11px] text-white/45">
                            {r.subtitle}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </CatalogSearch>

          <LibraryLaneTabs
            activeKinds={query.kinds}
            hasFilters={hasFilters}
            onSelectLane={selectLane}
          />
        </CatalogPageHero>

        <LandingMarquee stats={LIBRARY_STATS} />

        <div className="catalog-body">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <CatalogCrossLink>
              Role-based fundamentals —{" "}
              <Link to={AI_LITERACY.href}>browse AI Literacy</Link>
            </CatalogCrossLink>

            <div className="mb-8 mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[13px] text-muted-foreground">
                {result.total} {result.total === 1 ? "playbook" : "playbooks"}
              </p>
              <div className="flex items-center gap-3">
                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-[13px] text-muted-foreground hover:text-foreground"
                  >
                    Clear
                  </button>
                )}
                <select
                  value={query.sort}
                  onChange={(e) => setSort(e.target.value as RepositorySort)}
                  aria-label="Sort playbooks"
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-[13px] text-muted-foreground outline-none transition-colors hover:border-purple/20"
                >
                  {(Object.keys(REPOSITORY_SORT_LABELS) as RepositorySort[]).map((s) => (
                    <option key={s} value={s}>
                      {REPOSITORY_SORT_LABELS[s]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              {showFeaturedSpotlight && (
                <section className="mb-8" aria-label="Featured playbooks">
                  <LandingSectionLabel>Featured</LandingSectionLabel>
                  <div className={`${LIBRARY_GRID_CLASS} mt-5`}>
                    {featuredEntries.map((entry) => (
                      <RepositoryRow
                        key={entry.slug}
                        entry={entry}
                        featured
                        commentCount={commentCounts[entry.slug] ?? 0}
                      />
                    ))}
                  </div>
                </section>
              )}

              {gridItems.length > 0 ? (
                <div className={LIBRARY_GRID_CLASS}>
                  {gridItems.map((entry) => (
                    <RepositoryRow
                      key={entry.slug}
                      entry={entry}
                      commentCount={commentCounts[entry.slug] ?? 0}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <p className="text-[15px] text-muted-foreground">No playbooks match.</p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-4 text-[13px] font-medium text-foreground hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}

              {result.totalPages > 1 && (
                <nav className="mt-10 flex items-center justify-between" aria-label="Pagination">
                  <button
                    type="button"
                    disabled={result.page <= 1}
                    onClick={() => setPage(result.page - 1)}
                    className="inline-flex items-center gap-1 text-[13px] text-muted-foreground disabled:opacity-40"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                  <span className="text-[12px] tabular-nums text-muted-foreground">
                    {result.page} / {result.totalPages}
                  </span>
                  <button
                    type="button"
                    disabled={result.page >= result.totalPages}
                    onClick={() => setPage(result.page + 1)}
                    className="inline-flex items-center gap-1 text-[13px] text-muted-foreground disabled:opacity-40"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </nav>
              )}

              <PlaybookMethodologyCta />
            </div>
          </div>
        </div>
    </LandingPageShell>
  );
}
