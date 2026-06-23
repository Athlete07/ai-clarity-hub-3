import { Link } from "@tanstack/react-router";
import { LIBRARY_LANES, laneMatchesKinds, type LibraryLane } from "@/lib/playbook-repository/vision";
import type { PlaybookKind } from "@/lib/playbook-repository/taxonomy";
import { cn } from "@/lib/utils";

type LibraryLaneTabsProps = {
  activeKinds: PlaybookKind[];
  hasFilters: boolean;
  onSelectLane: (lane: LibraryLane | null) => void;
};

export function LibraryLaneTabs({
  activeKinds,
  hasFilters,
  onSelectLane,
}: LibraryLaneTabsProps) {
  return (
    <nav className="catalog-lane-tabs" aria-label="Browse by path">
      <button
        type="button"
        onClick={() => onSelectLane(null)}
        className={cn("catalog-lane-tab", !hasFilters && "catalog-lane-tab-active")}
      >
        All
      </button>

      {LIBRARY_LANES.map((lane) => {
        const isSoon = lane.status === "coming-soon";
        const active = laneMatchesKinds(lane, activeKinds);

        if (lane.href) {
          return (
            <Link key={lane.id} to={lane.href} className="catalog-lane-tab">
              {lane.title}
            </Link>
          );
        }

        if (isSoon) {
          return (
            <span
              key={lane.id}
              className="catalog-lane-tab catalog-lane-tab-muted"
              aria-disabled
            >
              {lane.title}
            </span>
          );
        }

        return (
          <button
            key={lane.id}
            type="button"
            onClick={() => onSelectLane(lane)}
            className={cn("catalog-lane-tab", active && "catalog-lane-tab-active")}
          >
            {lane.title}
          </button>
        );
      })}
    </nav>
  );
}
