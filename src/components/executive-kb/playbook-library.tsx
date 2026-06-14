import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Highlighter,
  Layers,
  ListOrdered,
  Sparkles,
  Users,
} from "lucide-react";
import { ShareMenu } from "@/components/share-menu";
import {
  formatExecutiveKbLabel,
  type ExecutiveKb,
} from "@/lib/executive-kb";
import {
  PLAYBOOK_PILLARS,
  SPINE_HEIGHTS,
  firstPlaybookStart,
  trackProgress,
  trackStats,
} from "@/lib/playbook-hub";
import { ROLES, ROLE_THEMES, type Role, type RoleId } from "@/lib/role-themes";
import { cn } from "@/lib/utils";

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
  return (
    <section className="relative overflow-hidden border-b border-border/80">
      <div className="pointer-events-none absolute inset-0 playbook-ruled-bg opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="mesh-glow-1 absolute -top-40 left-1/3 h-[420px] w-[420px] rounded-full bg-purple-light/30 blur-[120px] dark:bg-purple-light/8" />
        <div className="mesh-glow-2 absolute right-0 bottom-0 h-[280px] w-[280px] rounded-full bg-blue-bg/35 blur-[100px] dark:bg-blue-bg/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20 lg:grid lg:grid-cols-[1fr_minmax(260px,340px)] lg:items-center lg:gap-14 lg:py-24">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple/20 bg-purple-light/50 px-3 py-1 text-[11px] font-medium tracking-wide text-purple-dark dark:bg-purple-light/15 dark:text-purple">
              <Sparkles size={12} aria-hidden />
              Playbook library
            </span>
            <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
              Free · No signup · Highlight to explain
            </span>
          </div>

          <h1 className="mt-6 max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.06] tracking-[-0.04em] text-balance">
            The AI playbook library{" "}
            <span className="text-purple">built for operators.</span>
          </h1>

          <p className="mt-5 max-w-lg text-[16px] leading-[1.65] text-muted-foreground sm:text-[17px]">
            {totalPlaybooks} sequenced playbooks · {totalChapters}+ chapters · {totalRoles} role
            tracks. Plain English, real product examples, quizzes that surface gaps before you ship.
          </p>

          <div className="mt-8">
            <p className="section-label mb-3">Choose your lens</p>
            <RoleTrackPills role={role} onSelect={onSelectRole} />
          </div>
        </div>

        <CatalogShelf role={role} onSelect={onSelectRole} className="mt-12 lg:mt-0" />
      </div>
    </section>
  );
}

function CatalogShelf({
  role,
  onSelect,
  className,
}: {
  role: RoleId | null;
  onSelect: (id: RoleId) => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-[320px] items-end justify-center gap-2 sm:gap-2.5 lg:max-w-none",
        className,
      )}
      aria-label="Visual track selector"
    >
      <div className="absolute inset-x-4 bottom-0 h-3 rounded-full bg-foreground/5 blur-md" />
      <div className="playbook-shelf-shadow relative flex items-end gap-2 rounded-2xl border border-border/60 bg-card/80 px-4 pb-4 pt-8 backdrop-blur-sm sm:gap-2.5 sm:px-5">
        {ROLES.map((r) => {
          const theme = ROLE_THEMES[r.id];
          const active = role === r.id;
          const heights = SPINE_HEIGHTS[r.id];
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => onSelect(r.id)}
              className={cn(
                "group relative flex w-11 flex-col items-center transition-transform duration-300 sm:w-12",
                active ? "-translate-y-2 scale-105" : "hover:-translate-y-1",
              )}
              aria-label={`${r.title} track`}
            >
              <div
                className={cn(
                  "flex w-full flex-col items-center gap-0.5 rounded-t-md border-x border-t px-0.5 pt-2 shadow-sm transition-shadow",
                  theme.border,
                  active ? "ring-2 ring-offset-2 ring-offset-background" : "opacity-85 group-hover:opacity-100",
                  active && r.id === "pm" && "ring-purple/40",
                  active && r.id === "founder" && "ring-amber/40",
                  active && r.id === "business-leader" && "ring-blue/40",
                  active && r.id === "marketer" && "ring-teal/40",
                )}
                style={{
                  background: `linear-gradient(180deg, color-mix(in oklch, var(--card) 90%, transparent), color-mix(in oklch, var(--muted) 40%, transparent))`,
                }}
              >
                {heights.slice(0, 5).map((h, i) => (
                  <div
                    key={i}
                    className={cn("w-full rounded-sm", theme.progress, i === 0 ? "opacity-90" : "opacity-35")}
                    style={{ height: `${h * 0.22}px` }}
                  />
                ))}
              </div>
              <span
                className={cn(
                  "playbook-spine-num mt-1.5 text-[9px] font-semibold uppercase tracking-wider",
                  active ? theme.textHover.replace("group-hover/card:", "") : "text-muted-foreground",
                )}
              >
                {r.id === "business-leader" ? "BL" : r.id === "marketer" ? "MKT" : r.id === "founder" ? "CEO" : "PM"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function PlaybookPillars() {
  return (
    <section className="border-b border-border/80 bg-muted/20">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {PLAYBOOK_PILLARS.map((pillar, i) => {
            const Icon = [ListOrdered, Users, Highlighter][i];
            return (
              <div key={pillar.step} className="relative pl-0 md:pl-1">
                <div className="flex items-center gap-3">
                  <span className="playbook-spine-num text-[11px] font-semibold tracking-widest text-purple/70">
                    {pillar.step}
                  </span>
                  <Icon size={16} className="text-muted-foreground" aria-hidden />
                </div>
                <h2 className="mt-3 text-[16px] font-medium tracking-tight sm:text-[17px]">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PlaybookStatRibbon({
  totalPlaybooks,
  totalChapters,
  totalRoles,
}: {
  totalPlaybooks: number;
  totalChapters: number;
  totalRoles: number;
}) {
  const stats = [
    { value: String(totalPlaybooks), label: "Playbooks" },
    { value: `${totalChapters}+`, label: "Chapters" },
    { value: String(totalRoles), label: "Role tracks" },
    { value: "$0", label: "Forever" },
  ];
  return (
    <section className="border-b border-border/80">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border/60 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-7 text-center sm:py-9">
            <p className="home-stat-value text-[26px] font-medium tracking-tight sm:text-[30px]">
              {s.value}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
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
              "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all sm:px-5",
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
      <div className="mb-10 max-w-2xl">
        <p className="section-label">Four tracks · one library</p>
        <h2 className="mt-2 text-[clamp(1.35rem,3vw,1.875rem)] font-medium tracking-tight text-balance">
          Pick the curriculum that matches how you decide
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Each track reframes the same AI foundations for a different job. Start anywhere — but
          read playbooks in order within a track.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {ROLES.map((r, i) => (
          <TrackPreviewCard
            key={r.id}
            role={r}
            kbs={kbsByRole[r.id]}
            progress={progress}
            index={i}
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
  index,
  onSelect,
}: {
  role: Role;
  kbs: ExecutiveKb[];
  progress: Record<string, "in-progress" | "done" | undefined>;
  index: number;
  onSelect: () => void;
}) {
  const theme = ROLE_THEMES[role.id];
  const stats = trackStats(kbs);
  const prog = trackProgress(kbs, progress);
  const Icon = role.icon;
  const opener = kbs[0];

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:p-8",
        theme.hoverBorder,
        "animate-fade-in-up",
      )}
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: "both" }}
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-muted/50 opacity-40 blur-2xl"
        aria-hidden
      />
      {role.popular ? (
        <span className="absolute right-6 top-6 rounded-full bg-purple-light px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark">
          Popular
        </span>
      ) : null}

      <div className="flex items-start gap-4">
        <div className={cn("inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl", theme.iconBox)}>
          <Icon size={22} />
        </div>
        <div className="min-w-0 flex-1">
          <p className={cn("text-[11px] font-semibold uppercase tracking-[0.14em]", theme.badge.split(" ")[1])}>
            {stats.playbooks} playbooks · {stats.chapters} chapters
          </p>
          <h3 className="mt-1 text-[20px] font-medium tracking-tight">{role.title}</h3>
        </div>
      </div>

      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">{role.description}</p>

      {opener ? (
        <p className="mt-5 rounded-lg border border-border/60 bg-muted/25 px-4 py-3 text-[13px] leading-snug text-muted-foreground">
          <span className="font-medium text-foreground">Opens with </span>
          {formatExecutiveKbLabel(role.id, 1)} — {opener.title}
        </p>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border/60 pt-5">
        <span className="text-[12px] text-muted-foreground">
          ~{stats.hoursLabel} read · {prog.pct > 0 ? `${prog.pct}% complete` : "Not started"}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1 text-[13px] font-semibold",
            theme.textHover.replace("group-hover/card:", "group-hover:"),
          )}
        >
          Enter track
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
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
  const theme = ROLE_THEMES[role];
  const stats = trackStats(kbs);
  const prog = trackProgress(kbs, progress);
  const featured =
    kbs.find((kb) => {
      const done = kb.sequence.every((s) => progress[s.slug] === "done");
      return !done && kb.sequence.length > 0;
    }) ?? kbs[0];

  return (
    <div>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border px-6 py-8 sm:px-8 sm:py-10",
          theme.cardHover,
          "border-border bg-card",
        )}
      >
        <div
          className={cn("absolute inset-x-0 top-0 h-1", theme.progress)}
          aria-hidden
        />
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">{activeRole.title} track</p>
            <h2 className="mt-2 text-[clamp(1.5rem,3.5vw,2rem)] font-medium tracking-tight">
              {stats.playbooks} playbooks · {stats.chapters} chapters
            </h2>
            <p className="mt-2 max-w-xl text-[15px] text-muted-foreground">
              ~{stats.hoursLabel} total reading · sequenced PB 01 → PB{" "}
              {String(stats.playbooks).padStart(2, "0")}
            </p>
          </div>
          {prog.total > 0 ? (
            <div className="shrink-0 rounded-xl border border-border/60 bg-muted/30 px-5 py-4 sm:min-w-[180px]">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Your progress
              </p>
              <p className="home-stat-value mt-1 text-[28px] font-medium">{prog.pct}%</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className={cn("h-full rounded-full transition-all", theme.progress)} style={{ width: `${prog.pct}%` }} />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {featured ? (
        <FeaturedPlaybookCard kb={featured} role={role} progress={progress} className="mt-8" />
      ) : null}

      <div className="mt-10">
        <div className="mb-6 flex items-center gap-2">
          <Layers size={16} className="text-muted-foreground" aria-hidden />
          <h3 className="text-[15px] font-medium tracking-tight">Full track sequence</h3>
        </div>
        <div className="playbook-spine-timeline relative space-y-4 pl-0 sm:space-y-5">
          {kbs
            .filter((kb) => kb.id !== featured?.id)
            .map((kb, index) => (
              <PlaybookSpineCard
                key={kb.id}
                kb={kb}
                role={role}
                progress={progress}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedPlaybookCard({
  kb,
  role,
  progress,
  className,
}: {
  kb: ExecutiveKb;
  role: RoleId;
  progress: Record<string, "in-progress" | "done" | undefined>;
  className?: string;
}) {
  const theme = ROLE_THEMES[role];
  const doneCount = kb.sequence.filter((s) => progress[s.slug] === "done").length;
  const pct = kb.sequence.length ? Math.round((doneCount / kb.sequence.length) * 100) : 0;
  const nextSlug =
    kb.sequence.find((s) => progress[s.slug] !== "done")?.slug ?? firstPlaybookStart(kb);

  return (
    <article
      className={cn(
        "relative overflow-hidden rounded-2xl border-2 bg-card p-7 sm:p-8",
        theme.border,
        className,
      )}
    >
      <div className={cn("absolute inset-x-0 top-0 h-1 opacity-80", theme.progress)} aria-hidden />
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {pct === 0 ? "Recommended start" : pct === 100 ? "Completed — review anytime" : "Continue here"}
      </p>
      <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className={cn("rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider", theme.badge)}>
            {formatExecutiveKbLabel(role, kb.order)}
          </span>
          <h3 className="mt-3 text-[22px] font-medium tracking-tight sm:text-[26px]">{kb.title}</h3>
          {kb.subtitle ? (
            <p className="mt-1 text-[14px] font-medium text-muted-foreground">{kb.subtitle}</p>
          ) : null}
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{kb.description}</p>
        </div>
        {nextSlug ? (
          <Link
            to="/ai-literacy/$kbId/$chapterSlug"
            params={{ kbId: kb.id, chapterSlug: nextSlug }}
            className={cn(
              "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition-opacity hover:opacity-90",
              theme.progress,
            )}
          >
            {pct === 0 ? "Start playbook" : pct === 100 ? "Review" : "Resume"}
            <ArrowRight size={16} />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function PlaybookSpineCard({
  kb,
  role,
  progress,
  index,
}: {
  kb: ExecutiveKb;
  role: RoleId;
  progress: Record<string, "in-progress" | "done" | undefined>;
  index: number;
}) {
  const theme = ROLE_THEMES[role];
  const moduleCount = kb.sequence.length || kb.topics.length;
  const doneCount = kb.sequence.filter((s) => progress[s.slug] === "done").length;
  const pct = kb.sequence.length ? Math.round((doneCount / kb.sequence.length) * 100) : 0;
  const nextSlug =
    kb.sequence.find((s) => progress[s.slug] !== "done")?.slug ?? firstPlaybookStart(kb);
  const hasChapters = kb.sequence.length > 0;
  const complete = pct === 100;

  return (
    <article
      className={cn("relative pl-11 sm:pl-14", "animate-fade-in-up")}
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: "both" }}
    >
      <div
        className={cn(
          "absolute left-0 top-6 flex h-11 w-11 items-center justify-center rounded-xl border-2 bg-card font-mono text-[13px] font-semibold sm:h-12 sm:w-12 sm:text-[14px]",
          complete ? cn(theme.border, theme.badge) : "border-border text-muted-foreground",
        )}
      >
        {complete ? <CheckCircle2 size={18} className={theme.badge.split(" ")[1]} /> : String(kb.order).padStart(2, "0")}
      </div>

      <div
        className={cn(
          "group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand sm:p-7",
          theme.cardHover,
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={cn("rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider", theme.badge)}>
              {formatExecutiveKbLabel(role, kb.order)}
            </span>
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
              {kb.difficulty}
            </span>
          </div>
          {hasChapters && nextSlug ? (
            <ShareMenu
              title={kb.title}
              summary={kb.description}
              kbId={kb.id}
              chapterSlug={nextSlug}
              variant="icon"
            />
          ) : null}
        </div>

        <h3 className="mt-4 text-[18px] font-medium tracking-tight sm:text-[19px]">{kb.title}</h3>
        {kb.subtitle ? (
          <p className="mt-1 text-[13px] font-medium text-muted-foreground">{kb.subtitle}</p>
        ) : null}
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-none">
          {kb.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {kb.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border/60 pt-5">
          <span className="text-[12px] text-muted-foreground">
            ~{kb.readingMinutes} min · {moduleCount} chapters
          </span>
          {pct > 0 && pct < 100 ? (
            <div className="flex min-w-[100px] flex-1 items-center gap-2">
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                <div className={cn("h-full rounded-full", theme.progress)} style={{ width: `${pct}%` }} />
              </div>
              <span className="text-[11px] text-muted-foreground">{pct}%</span>
            </div>
          ) : null}
          {hasChapters && nextSlug ? (
            <Link
              to="/ai-literacy/$kbId/$chapterSlug"
              params={{ kbId: kb.id, chapterSlug: nextSlug }}
              className={cn(
                "ml-auto inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-[12px] font-semibold transition-opacity hover:opacity-90",
                complete
                  ? "border border-border bg-muted text-foreground"
                  : cn("text-primary-foreground", theme.progress),
              )}
            >
              {pct === 0 ? (
                <>
                  Open <ArrowRight size={13} />
                </>
              ) : complete ? (
                <>
                  <CheckCircle2 size={13} /> Review
                </>
              ) : (
                "Resume"
              )}
            </Link>
          ) : (
            <span className="ml-auto rounded-lg bg-muted px-4 py-2 text-[12px] font-semibold text-muted-foreground">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function PlaybookMethodologyCta() {
  return (
    <section className="mt-20 rounded-2xl border border-border bg-muted/20 px-6 py-10 sm:px-10 sm:py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="section-label">Methodology</p>
          <h2 className="mt-2 text-[20px] font-medium tracking-tight sm:text-[22px]">
            Stress-tested before it reaches your screen
          </h2>
          <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
            Every playbook passes aggregation, human stress-testing, and executive formatting — so
            you get deployable signal, not LinkedIn fluff.
          </p>
        </div>
        <Link
          to="/about"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-[14px] font-medium transition-colors hover:bg-muted/50"
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
    <div className="rounded-2xl border border-dashed border-border bg-muted/20 px-8 py-16 text-center">
      <BookOpen size={28} className="mx-auto text-muted-foreground/50" />
      <p className="mt-4 text-[17px] font-medium">No playbooks yet</p>
      <p className="mx-auto mt-2 max-w-md text-[14px] leading-relaxed text-muted-foreground">
        {roleTitle} entries are on the way. Switch to another track to browse what&apos;s available
        today.
      </p>
    </div>
  );
}
