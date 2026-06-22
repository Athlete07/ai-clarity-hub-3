import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Nav, Footer } from "@/components/site-nav";
import { LibraryLaneTabs } from "@/components/playbook-repository/library-lane-cards";
import { RepositoryRow } from "@/components/playbook-repository/repository-row";
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

export const Route = createFileRoute("/use-cases/")({
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
    <>
      <Nav />
      <main className="repository-page">
        <header className="repository-hero hairline-b">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
            <h1 className="text-[28px] font-medium leading-[1.12] tracking-[-0.03em] sm:text-[34px]">
              {LIBRARY_HERO.title}
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {LIBRARY_HERO.lead}
            </p>

            <div className="relative mt-8">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="search"
                value={query.q}
                onChange={(e) => setQ(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder="Search playbooks…"
                aria-label="Search playbook library"
                className="w-full rounded-lg border border-border bg-card py-2.5 pl-9 pr-9 text-[14px] outline-none transition-shadow focus:border-purple/30 focus:ring-2 focus:ring-purple/10"
              />
              {query.q && (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:bg-muted"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}

              {showSearchDropdown && searchResults.length > 0 && (
                <div className="absolute z-40 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-card shadow-lg">
                  <ul className="max-h-[280px] overflow-y-auto py-1">
                    {searchResults.map((r) => (
                      <li key={r.id}>
                        <a
                          href={r.href}
                          className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted/40"
                        >
                          <span className="w-14 shrink-0 text-[10px] uppercase tracking-wider text-muted-foreground">
                            {SEARCH_TYPE_LABELS[r.type]}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[13px] font-medium">{r.title}</p>
                            <p className="truncate text-[11px] text-muted-foreground">
                              {r.subtitle}
                            </p>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <LibraryLaneTabs
              activeKinds={query.kinds}
              hasFilters={hasFilters}
              onSelectLane={selectLane}
            />

            <p className="mt-6 text-[13px] text-muted-foreground">
              Role-based fundamentals live in{" "}
              <Link
                to={AI_LITERACY.href}
                className="font-medium text-foreground hover:underline"
              >
                AI Literacy
              </Link>
              .
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="flex items-center justify-between gap-4">
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
                className="rounded-md border border-border bg-transparent px-2 py-1 text-[13px] text-muted-foreground outline-none"
              >
                {(Object.keys(REPOSITORY_SORT_LABELS) as RepositorySort[]).map((s) => (
                  <option key={s} value={s}>
                    {REPOSITORY_SORT_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            {result.items.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {result.items.map((entry) => (
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
              <nav className="mt-8 flex items-center justify-between" aria-label="Pagination">
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
