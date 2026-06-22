import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import {
  LIBRARY_CARD_CLASS,
  LibraryCardBadge,
  LibraryCardFooter,
  LibraryCardHeader,
  LibraryCardSummary,
  LibraryCardTitle,
} from "@/components/playbook-repository/library-card";
import { ShareMenu } from "@/components/share-menu";
import {
  formatExecutiveKbLabel,
  type ExecutiveKb,
} from "@/lib/executive-kb";
import {
  firstPlaybookStart,
  trackProgress,
  trackStats,
} from "@/lib/playbook-hub";
import { ROLES, ROLE_THEMES, type Role, type RoleId } from "@/lib/role-themes";
import { cn } from "@/lib/utils";

const LIBRARY_GRID_CLASS = "grid grid-cols-1 gap-4 sm:grid-cols-2";

export function PlaybookHero({
  role,
  onSelectRole,
  totalPlaybooks,
  totalChapters,
  totalRoles,
}: {
  role: RoleId | null;
  onSelectRole: (id: RoleId) => void;
  totalPlaybooks: number;
  totalChapters: number;
  totalRoles: number;
}) {
  const activeRole = role ? ROLES.find((r) => r.id === role) : null;
  const lead = role
    ? `${activeRole?.title} track — sequenced playbooks with quizzes, examples, and highlight-to-explain on every chapter.`
    : `${totalPlaybooks} sequenced playbooks · ${totalChapters}+ chapters · ${totalRoles} role tracks. Read in order within a track.`;

  return (
    <header className="repository-hero hairline-b">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <h1 className="text-[28px] font-medium leading-[1.12] tracking-[-0.03em] sm:text-[34px]">
          AI Literacy
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{lead}</p>

        <div className="mt-8">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Choose your lens
          </p>
          <RoleTrackPills role={role} onSelect={onSelectRole} />
        </div>
      </div>
    </header>
  );
}

export function PlaybookPillars() {
  return null;
}

export function PlaybookStatRibbon() {
  return null;
}

export function RoleTrackPills({
  role,
  onSelect,
}: {
  role: RoleId | null;
  onSelect: (id: RoleId) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Choose your role track">
      {ROLES.map((r) => {
        const Icon = r.icon;
        const active = r.id === role;
        const theme = ROLE_THEMES[r.id];
        return (
          <button
            key={r.id}
            type="button"
            onClick={() => onSelect(r.id)}
            aria-pressed={active}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all",
              active
                ? theme.pillActive
                : "border-border bg-card text-muted-foreground shadow-sm hover:border-border/80 hover:text-foreground",
            )}
          >
            <Icon size={15} aria-hidden />
            {r.title}
            {r.popular && !active ? (
              <span className="rounded bg-purple-light px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-purple-dark">
                Popular
              </span>
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function TrackGallery({
  onSelect,
  progress,
  kbsByRole,
}: {
  onSelect: (id: RoleId) => void;
  progress: Record<string, "in-progress" | "done" | undefined>;
  kbsByRole: Record<RoleId, ExecutiveKb[]>;
}) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-[13px] text-muted-foreground">
          {ROLES.length} role tracks
        </p>
      </div>

      <div className={LIBRARY_GRID_CLASS}>
        {ROLES.map((r) => (
          <TrackPreviewCard
            key={r.id}
            role={r}
            kbs={kbsByRole[r.id]}
            progress={progress}
            onSelect={() => onSelect(r.id)}
          />
        ))}
      </div>
    </div>
  );
}

function TrackPreviewCard({
  role,
  kbs,
  progress,
  onSelect,
}: {
  role: Role;
  kbs: ExecutiveKb[];
  progress: Record<string, "in-progress" | "done" | undefined>;
  onSelect: () => void;
}) {
  const stats = trackStats(kbs);
  const prog = trackProgress(kbs, progress);
  const opener = kbs[0];

  return (
    <button type="button" onClick={onSelect} className={cn(LIBRARY_CARD_CLASS, "text-left")}>
      <article className="flex h-full flex-col">
        <LibraryCardHeader
          badge={<LibraryCardBadge>Role track</LibraryCardBadge>}
          action={
            <ArrowRight
              size={16}
              className="shrink-0 text-muted-foreground/35 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-dark"
            />
          }
        />
        <LibraryCardTitle>{role.title}</LibraryCardTitle>
        <LibraryCardSummary>
          {role.description}
          {opener
            ? ` Opens with ${formatExecutiveKbLabel(role.id, 1)} — ${opener.title}.`
            : ""}
        </LibraryCardSummary>
        <LibraryCardFooter
          meta={`${stats.playbooks} playbooks · ${stats.chapters} chapters · ~${stats.hoursLabel}`}
          trailing={
            <span className="text-[12px] font-medium text-muted-foreground">
              {prog.pct > 0 ? `${prog.pct}% complete` : "Not started"}
            </span>
          }
        />
      </article>
    </button>
  );
}

export function TrackLibrary({
  role,
  kbs,
  progress,
}: {
  role: RoleId;
  kbs: ExecutiveKb[];
  progress: Record<string, "in-progress" | "done" | undefined>;
}) {
  const activeRole = ROLES.find((r) => r.id === role)!;
  const stats = trackStats(kbs);
  const prog = trackProgress(kbs, progress);

  const sortedKbs = [...kbs].sort((a, b) => {
    const aDone = a.sequence.every((s) => progress[s.slug] === "done");
    const bDone = b.sequence.every((s) => progress[s.slug] === "done");
    const aActive = !aDone && a.sequence.some((s) => progress[s.slug]);
    const bActive = !bDone && b.sequence.some((s) => progress[s.slug]);
    if (aActive && !bActive) return -1;
    if (!aActive && bActive) return 1;
    return a.order - b.order;
  });

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[13px] text-muted-foreground">
          {stats.playbooks} {stats.playbooks === 1 ? "playbook" : "playbooks"} · {activeRole.title}{" "}
          track
        </p>
        {prog.total > 0 ? (
          <p className="text-[13px] text-muted-foreground">
            {prog.pct}% complete · ~{stats.hoursLabel} total
          </p>
        ) : (
          <p className="text-[13px] text-muted-foreground">~{stats.hoursLabel} total reading</p>
        )}
      </div>

      <div className={LIBRARY_GRID_CLASS}>
        {sortedKbs.map((kb) => (
          <LiteracyPlaybookCard key={kb.id} kb={kb} role={role} progress={progress} />
        ))}
      </div>
    </div>
  );
}

function LiteracyPlaybookCard({
  kb,
  role,
  progress,
}: {
  kb: ExecutiveKb;
  role: RoleId;
  progress: Record<string, "in-progress" | "done" | undefined>;
}) {
  const theme = ROLE_THEMES[role];
  const moduleCount = kb.sequence.length || kb.topics.length;
  const doneCount = kb.sequence.filter((s) => progress[s.slug] === "done").length;
  const pct = kb.sequence.length ? Math.round((doneCount / kb.sequence.length) * 100) : 0;
  const nextSlug =
    kb.sequence.find((s) => progress[s.slug] !== "done")?.slug ?? firstPlaybookStart(kb);
  const hasChapters = kb.sequence.length > 0;
  const complete = pct === 100;
  const statusLabel =
    pct === 0 ? null : pct === 100 ? "Completed" : "In progress";

  const inner = (
    <article className="flex h-full flex-col">
      <LibraryCardHeader
        badge={
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                theme.badge,
              )}
            >
              {formatExecutiveKbLabel(role, kb.order)}
            </span>
            {statusLabel ? (
              <LibraryCardBadge>{statusLabel}</LibraryCardBadge>
            ) : (
              <LibraryCardBadge>{kb.difficulty}</LibraryCardBadge>
            )}
          </div>
        }
        action={
          hasChapters && nextSlug ? (
            <ShareMenu
              title={kb.title}
              summary={kb.description}
              kbId={kb.id}
              chapterSlug={nextSlug}
              variant="icon"
            />
          ) : (
            <ArrowRight
              size={16}
              className="shrink-0 text-muted-foreground/35 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-dark"
            />
          )
        }
      />
      <LibraryCardTitle>{kb.title}</LibraryCardTitle>
      <LibraryCardSummary>
        {kb.subtitle ? `${kb.subtitle}. ` : ""}
        {kb.description}
      </LibraryCardSummary>
      <LibraryCardFooter
        meta={`~${kb.readingMinutes} min · ${moduleCount} chapters`}
        trailing={
          complete ? (
            <CheckCircle2 size={14} className="text-muted-foreground" />
          ) : pct > 0 ? (
            <span className="text-[12px] font-medium text-muted-foreground">{pct}%</span>
          ) : hasChapters ? (
            <span className="text-[12px] font-medium text-muted-foreground">Open</span>
          ) : (
            <span className="text-[12px] text-muted-foreground">Soon</span>
          )
        }
      />
    </article>
  );

  if (!hasChapters || !nextSlug) {
    return <div className={cn(LIBRARY_CARD_CLASS, "opacity-70")}>{inner}</div>;
  }

  return (
    <Link
      to="/ai-literacy/$kbId/$chapterSlug"
      params={{ kbId: kb.id, chapterSlug: nextSlug }}
      className={LIBRARY_CARD_CLASS}
    >
      {inner}
    </Link>
  );
}

export function PlaybookMethodologyCta() {
  return (
    <section className="mt-14 rounded-xl border border-border bg-muted/20 px-6 py-8 sm:px-8 sm:py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            Methodology
          </p>
          <h2 className="mt-2 text-[18px] font-medium tracking-tight sm:text-[20px]">
            Stress-tested before it reaches your screen
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            Every playbook passes aggregation, human stress-testing, and executive formatting — so
            you get deployable signal, not LinkedIn fluff.
          </p>
        </div>
        <Link
          to="/about"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-[13px] font-medium transition-colors hover:bg-muted/50"
        >
          <BookOpen size={16} />
          How we build playbooks
          <ArrowRight size={14} className="opacity-60" />
        </Link>
      </div>
    </section>
  );
}

export function EmptyTrackState({ roleTitle }: { roleTitle: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-muted/20 px-8 py-16 text-center">
      <BookOpen size={28} className="mx-auto text-muted-foreground/50" />
      <p className="mt-4 text-[17px] font-medium">No playbooks yet</p>
      <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
        {roleTitle} entries are on the way. Switch to another track to browse what&apos;s available
        today.
      </p>
    </div>
  );
}
