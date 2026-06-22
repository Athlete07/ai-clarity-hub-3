import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/site-nav";
import { RepositoryRow } from "@/components/playbook-repository/repository-row";
import { RepositorySidebar } from "@/components/playbook-repository/repository-sidebar";
import { AI_LITERACY, PLAYBOOK_REPOSITORY, brandOgMeta } from "@/lib/brand";
import {
  REPOSITORY_CATALOG,
  repositoryStats,
  type RepositoryCatalogEntry,
} from "@/lib/playbook-repository/catalog";
import {
  EMPTY_REPOSITORY_QUERY,
  queryRepository,
  type RepositoryQuery,
} from "@/lib/playbook-repository/query";
import { searchRepository } from "@/lib/playbook-repository/search";
import {
  REPOSITORY_CATEGORIES,
  REPOSITORY_SORT_LABELS,
  type PlaybookKind,
  type RepositoryCategoryId,
  type RepositorySort,
} from "@/lib/playbook-repository/taxonomy";
import type { UseCaseRole } from "@/lib/use-cases/types";
import { fetchCommentCounts, isSupabaseConfigured } from "@/lib/supabase";
import { cn } from "@/lib/utils";

const SEARCH_TYPE_LABELS = {
  catalog: "Library",
  tool: "Tool",
  "ai-literacy": "AI Literacy",
} as const;

function countBy<T extends string>(
  catalog: RepositoryCatalogEntry[],
  getKey: (e: RepositoryCatalogEntry) => T | T[],
): Record<T, number> {
  const counts = {} as Record<T, number>;
  for (const entry of catalog) {
    const keys = getKey(entry);
    const list = Array.isArray(keys) ? keys : [keys];
    for (const key of list) {
      counts[key] = (counts[key] ?? 0) + 1;
    }
  }
  return counts;
}

export const Route = createFileRoute("/use-cases/")({
  head: () => ({
    meta: [
      {
        title: `Playbook Library — AI workflows & guides | FactorBeam`,
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const stats = useMemo(() => repositoryStats(REPOSITORY_CATALOG), []);

  const kindCounts = useMemo(
    () => countBy(REPOSITORY_CATALOG, (e) => e.kind),
    [],
  );
  const categoryCounts = useMemo(
    () => countBy(REPOSITORY_CATALOG, (e) => e.categoryId),
    [],
  );
  const roleCounts = useMemo(
    () => countBy(REPOSITORY_CATALOG, (e) => e.roles),
    [],
  );

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

  const hasFilters =
    query.kinds.length > 0 ||
    query.categories.length > 0 ||
    query.roles.length > 0 ||
    query.q.length > 0;

  function setQ(q: string) {
    setQuery((prev) => ({ ...prev, q, page: 1 }));
  }

  function setSort(sort: RepositorySort) {
    setQuery((prev) => ({ ...prev, sort, page: 1 }));
  }

  function setPage(page: number) {
    setQuery((prev) => ({ ...prev, page }));
  }

  function toggleKind(kind: PlaybookKind) {
    setQuery((prev) => ({
      ...prev,
      kinds: prev.kinds.includes(kind)
        ? prev.kinds.filter((k) => k !== kind)
        : [...prev.kinds, kind],
      page: 1,
    }));
  }

  function toggleCategory(categoryId: RepositoryCategoryId) {
    setQuery((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((c) => c !== categoryId)
        : [...prev.categories, categoryId],
      page: 1,
    }));
  }

  function toggleRole(role: UseCaseRole) {
    setQuery((prev) => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter((r) => r !== role)
        : [...prev.roles, role],
      page: 1,
    }));
  }

  function clearFilters() {
    setQuery(EMPTY_REPOSITORY_QUERY);
  }

  const showSearchDropdown = searchFocused && query.q.trim().length > 0;

  return (
    <>
      <Nav />
      <main className="repository-page">
        {/* Compact hero — repository, not marketing landing */}
        <header className="repository-hero hairline-b">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="max-w-2xl">
              <p className="text-[13px] font-medium text-purple-dark dark:text-purple">
                {PLAYBOOK_REPOSITORY.name}
              </p>
              <h1 className="mt-2 text-[28px] font-medium leading-[1.12] tracking-[-0.03em] sm:text-[36px]">
                Every AI workflow, guide, and playbook
              </h1>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {PLAYBOOK_REPOSITORY.tagline} Built to scale from one workflow
                to a thousand.
              </p>
            </div>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  In library
                </dt>
                <dd className="mt-0.5 text-[20px] font-medium tabular-nums tracking-tight">
                  {stats.total}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Types
                </dt>
                <dd className="mt-0.5 text-[20px] font-medium tabular-nums tracking-tight">
                  {stats.kinds}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Categories
                </dt>
                <dd className="mt-0.5 text-[20px] font-medium tabular-nums tracking-tight">
                  {REPOSITORY_CATEGORIES.length}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Roles
                </dt>
                <dd className="mt-0.5 text-[20px] font-medium tabular-nums tracking-tight">
                  {stats.roles}
                </dd>
              </div>
            </dl>
          </div>
        </header>

        {/* Sticky toolbar */}
        <div className="repository-toolbar sticky top-[var(--header-height)] z-30 hairline-b bg-background/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
            <div className="relative min-w-0 flex-1">
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
                placeholder="Search workflows, tools, concepts…"
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
                <div className="absolute z-40 mt-1.5 w-full overflow-hidden rounded-lg border border-border bg-card shadow-xl">
                  <ul className="max-h-[320px] overflow-y-auto py-1">
                    {searchResults.map((r) => (
                      <li key={r.id}>
                        <a
                          href={r.href}
                          className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted/40"
                        >
                          <span className="w-16 shrink-0 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                            {SEARCH_TYPE_LABELS[r.type]}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[13px] font-medium">{r.title}</p>
                            <p className="truncate text-[11px] text-muted-foreground">
                              {r.subtitle}
                            </p>
                          </div>
                          <ArrowRight size={12} className="shrink-0 opacity-40" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen((o) => !o)}
                className="rounded-lg border border-border px-3 py-2 text-[13px] font-medium text-foreground lg:hidden"
              >
                Filters
                {hasFilters && (
                  <span className="ml-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] text-background">
                    !
                  </span>
                )}
              </button>
              <select
                value={query.sort}
                onChange={(e) => setSort(e.target.value as RepositorySort)}
                aria-label="Sort playbooks"
                className="rounded-lg border border-border bg-card px-3 py-2 text-[13px] text-foreground outline-none"
              >
                {(Object.keys(REPOSITORY_SORT_LABELS) as RepositorySort[]).map((s) => (
                  <option key={s} value={s}>
                    {REPOSITORY_SORT_LABELS[s]}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* AI Literacy migration note */}
        <div className="hairline-b bg-muted/30">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-[13px] text-muted-foreground">
              Role-based concept playbooks from{" "}
              <span className="font-medium text-foreground">AI Literacy</span> will
              migrate here as the library grows toward 1,000 entries.
            </p>
            <Link
              to={AI_LITERACY.href}
              className="shrink-0 text-[13px] font-medium text-purple-dark hover:underline"
            >
              Browse AI Literacy →
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[240px_minmax(0,1fr)]">
            {/* Sidebar — desktop always, mobile toggle */}
            <div
              className={cn(
                "lg:block",
                mobileFiltersOpen ? "mb-6 block" : "hidden",
              )}
            >
              <RepositorySidebar
                kinds={query.kinds}
                categories={query.categories}
                roles={query.roles}
                kindCounts={kindCounts}
                categoryCounts={categoryCounts}
                roleCounts={roleCounts}
                onToggleKind={toggleKind}
                onToggleCategory={toggleCategory}
                onToggleRole={toggleRole}
                onClear={clearFilters}
                hasFilters={hasFilters}
              />
            </div>

            {/* Results */}
            <div className="min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[14px] text-muted-foreground">
                  <span className="font-medium text-foreground">{result.total}</span>{" "}
                  {result.total === 1 ? "entry" : "entries"}
                  {hasFilters && " matching filters"}
                </p>
                {result.totalPages > 1 && (
                  <p className="text-[12px] tabular-nums text-muted-foreground">
                    Page {result.page} of {result.totalPages}
                  </p>
                )}
              </div>

              {result.items.length > 0 ? (
                <div className="mt-4 rounded-xl border border-border bg-card px-4 sm:px-5">
                  {result.items.map((entry) => (
                    <RepositoryRow
                      key={entry.slug}
                      entry={entry}
                      commentCount={commentCounts[entry.slug] ?? 0}
                    />
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-xl border border-dashed border-border px-6 py-16 text-center">
                  <p className="text-[15px] font-medium text-foreground">
                    No entries match
                  </p>
                  <p className="mt-2 text-[14px] text-muted-foreground">
                    Adjust filters or search — new workflows are added weekly.
                  </p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 text-[13px] font-medium text-purple-dark hover:underline"
                  >
                    Reset all filters
                  </button>
                </div>
              )}

              {result.totalPages > 1 && (
                <nav
                  className="mt-6 flex items-center justify-between"
                  aria-label="Pagination"
                >
                  <button
                    type="button"
                    disabled={result.page <= 1}
                    onClick={() => setPage(result.page - 1)}
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-[13px] font-medium disabled:opacity-40"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={result.page >= result.totalPages}
                    onClick={() => setPage(result.page + 1)}
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-[13px] font-medium disabled:opacity-40"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </nav>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
