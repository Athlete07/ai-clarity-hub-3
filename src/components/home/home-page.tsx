import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  BookOpen,
  Highlighter,
  ListChecks,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaqItem } from "@/components/faq-item";
import {
  LandingGlassCard,
  LandingHero,
  LandingMarquee,
  LandingSectionLabel,
} from "@/components/home/landing-hero";
import { AUDIENCE, AI_LITERACY, PLAYBOOK_REPOSITORY } from "@/lib/brand";
import {
  chapterRouteParams,
  formatExecutiveKbLabel,
  type ExecutiveKb,
  type ExecutiveKbTrack,
} from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { MARKETER_EXECUTIVE_KBS } from "@/lib/executive-kb-marketer";
import { executiveKbTrackSearch } from "@/lib/executive-kb-track";
import { hasGuideChapters } from "@/lib/use-cases/guide-helpers";
import { USE_CASE_PLAYBOOKS } from "@/lib/use-cases/registry";
import { ROLES, ROLE_THEMES, type RoleId } from "@/lib/role-themes";
import { cn } from "@/lib/utils";

const FEATURED_BY_TRACK: { track: ExecutiveKbTrack; roleId: RoleId }[] = [
  { track: "pm", roleId: "pm" },
  { track: "founder", roleId: "founder" },
  { track: "business-leader", roleId: "business-leader" },
  { track: "marketer", roleId: "marketer" },
];

export type HomePageProps = {
  allKbs: ExecutiveKb[];
  totalChapters: number;
  trackKbs: Record<RoleId, ExecutiveKb[]>;
  ctaLabel: string;
  progressPct: number;
  doneCount: number;
  resumeParams?: { kbId: string; chapterSlug: string };
};

export function HomePage({
  allKbs,
  totalChapters,
  trackKbs,
  ctaLabel,
  progressPct,
  doneCount,
  resumeParams,
}: HomePageProps) {
  const guidePlaybooks = USE_CASE_PLAYBOOKS.filter(hasGuideChapters);

  const stats = [
    { value: String(guidePlaybooks.length + allKbs.length), label: "Playbooks" },
    { value: String(ROLES.length), label: "Role tracks" },
    { value: `${totalChapters}+`, label: "Chapters" },
    { value: "$0", label: "Forever free" },
  ];

  return (
    <main className="landing-page overflow-x-hidden">
      <LandingHero
        ctaLabel={ctaLabel}
        progressPct={progressPct}
        doneCount={doneCount}
        resumeParams={resumeParams}
      />

      <LandingMarquee stats={stats} />

      {/* ── Tool guides spotlight ─────────────────────────────── */}
      <section className="landing-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <LandingSectionLabel>Playbook Library</LandingSectionLabel>
              <h2 className="landing-headline mt-5">
                Deep guides for the
                <em className="landing-headline-italic"> tools you ship with.</em>
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
                Claude, Cowork, production workflows — chapter by chapter, with artifacts you paste
                into your stack today.
              </p>
            </div>
            <Link to={PLAYBOOK_REPOSITORY.href} className="landing-text-cta">
              View full library
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {guidePlaybooks.map((playbook, i) => (
                <Link
                  key={playbook.slug}
                  to="/library/$slug"
                  params={{ slug: playbook.slug }}
                  className={cn(
                    "landing-playbook-spotlight group",
                    i === 0 && "lg:row-span-1",
                  )}
                >
                  <div className="landing-playbook-spotlight-glow" aria-hidden />
                  <div className="relative flex h-full flex-col p-7 sm:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <span className="landing-pill landing-pill-on-light text-[10px]">
                        {playbook.catalogBadge ?? "Tool guide"}
                      </span>
                      <ArrowRight
                        size={18}
                        className="shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-1 group-hover:text-purple"
                      />
                    </div>
                    <h3 className="mt-6 text-[26px] font-medium leading-tight tracking-[-0.03em] sm:text-[30px]">
                      {playbook.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      {playbook.summary}
                    </p>
                    <p className="mt-6 text-[12px] font-medium uppercase tracking-wider text-muted-foreground/80">
                      {playbook.guide!.chapters.length} chapters · {playbook.timeToImplement}
                    </p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Role pathways ─────────────────────────────────────── */}
      <section className="landing-section landing-section-muted">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <LandingSectionLabel>AI Literacy</LandingSectionLabel>
            <h2 className="landing-headline mt-5">
              Same concepts.
              <em className="landing-headline-italic"> Sequenced for your role.</em>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              PM, founder, leader, marketer — every track uses examples from your day job.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {ROLES.map((role, i) => {
              const theme = ROLE_THEMES[role.id];
              const Icon = role.icon;
              const kbCount = trackKbs[role.id].length;
              return (
                <Link
                  key={role.id}
                  to="/ai-literacy"
                  search={executiveKbTrackSearch(role.id)}
                  className={cn(
                    "landing-path-card group",
                    theme.hoverBorder,
                  )}
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {role.popular ? (
                    <span className="absolute right-5 top-5 rounded-full bg-purple-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-purple-dark">
                      Popular
                    </span>
                  ) : null}
                  <div className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl", theme.iconBox)}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-6 text-[19px] font-medium tracking-tight">{role.title}</h3>
                  <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-[12px]">
                    <span className="text-muted-foreground">{kbCount} tracks</span>
                    <span className={cn("inline-flex items-center gap-1 font-medium opacity-0 transition-all group-hover:opacity-100", theme.textHover.replace("group-hover/card:", "group-hover:"))}>
                      Choose track
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Experience constellation ──────────────────────────── */}
      <section className="landing-section">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <LandingSectionLabel>The experience</LandingSectionLabel>
            <h2 className="landing-headline mx-auto mt-5 max-w-3xl">
              Designed for clarity,
              <em className="landing-headline-italic"> not credential collecting.</em>
            </h2>
          </div>

          <div className="landing-constellation mt-14">
            <LandingGlassCard className="landing-constellation-hero min-h-[280px] p-8 sm:p-10">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-purple-light text-purple-dark">
                    <Highlighter size={20} />
                  </div>
                  <h3 className="mt-6 text-[24px] font-medium tracking-tight sm:text-[28px]">
                    Highlight to understand
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                    Stuck on a sentence? Select it. Plain English appears in place — no
                    tab-switching, no search rabbit holes.
                  </p>
                </div>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-purple">
                  Our differentiator
                </p>
              </div>
            </LandingGlassCard>

            <LandingGlassCard className="p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-bg text-teal">
                <ListChecks size={18} />
              </div>
              <h3 className="mt-4 text-[18px] font-medium">3 real examples</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Stripe, Duolingo, Anthropic — every idea grounded in products you know.
              </p>
            </LandingGlassCard>

            <LandingGlassCard className="p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-bg text-amber">
                <BarChart3 size={18} />
              </div>
              <h3 className="mt-4 text-[18px] font-medium">Quiz every chapter</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Judgment, not memorization — categorize, order, choose under real constraints.
              </p>
            </LandingGlassCard>

            <LandingGlassCard className="p-7">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-bg text-blue">
                <Bookmark size={18} />
              </div>
              <h3 className="mt-4 text-[18px] font-medium">Progress follows you</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Local storage, no account — pick up exactly where you left off.
              </p>
            </LandingGlassCard>

            <LandingGlassCard className="flex items-center justify-center p-8 text-center">
              <div>
                <p className="landing-stat-value text-[48px] text-foreground">20–35</p>
                <p className="mt-1 text-[13px] text-muted-foreground">minutes per chapter</p>
              </div>
            </LandingGlassCard>

            <LandingGlassCard className="flex items-center gap-4 p-7">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-light text-purple-dark">
                <Zap size={18} />
              </div>
              <div>
                <h3 className="text-[17px] font-medium">Essentials or full depth</h3>
                <p className="mt-1 text-[13px] text-muted-foreground">
                  Skim takeaways or read every fold — your pace.
                </p>
              </div>
            </LandingGlassCard>
          </div>
        </div>
      </section>

      {/* ── Featured literacy paths ───────────────────────────── */}
      <section className="landing-section landing-section-muted">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <LandingSectionLabel>Start anywhere</LandingSectionLabel>
              <h2 className="landing-headline mt-5">Four tracks. One standard of clarity.</h2>
            </div>
            <Link to="/ai-literacy" className="landing-text-cta">
              View AI Literacy
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {FEATURED_BY_TRACK.map(({ track, roleId }) => {
              const kb = trackKbs[roleId][0];
              if (!kb) return null;
              const firstSlug = kb.sequence[0]?.slug;
              const params = firstSlug ? chapterRouteParams(firstSlug) : undefined;
              const theme = ROLE_THEMES[roleId];
              const cardClass = cn(
                "landing-surface-card landing-surface-card-hover group flex flex-col p-6",
                theme.cardHover,
              );
              const body = (
                <>
                  <span className={cn("inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider", theme.badge)}>
                    {formatExecutiveKbLabel(track, kb.order)}
                  </span>
                  <h3 className="mt-4 text-[18px] font-medium tracking-tight">{kb.title}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {kb.subtitle}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-[12px] text-muted-foreground">
                    <span>
                      {kb.difficulty} · ~{kb.readingMinutes} min
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium opacity-0 transition-opacity group-hover:opacity-100">
                      Start
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </>
              );

              if (params) {
                return (
                  <Link
                    key={track}
                    to="/ai-literacy/$kbId/$chapterSlug"
                    params={params}
                    className={cardClass}
                  >
                    {body}
                  </Link>
                );
              }

              return (
                <Link
                  key={track}
                  to="/ai-literacy"
                  search={executiveKbTrackSearch(roleId)}
                  className={cardClass}
                >
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Manifesto ─────────────────────────────────────────── */}
      <section className="landing-section">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <LandingSectionLabel>Why FactorBeam</LandingSectionLabel>
          <blockquote className="landing-manifesto mt-8 space-y-6">
            <p>Every resource on AI is either impossibly technical or dangerously vague.</p>
            <p className="text-muted-foreground">
              We translate complexity into product strategy — so you ship with confidence, challenge
              vendors, and lead your team without a PhD.
            </p>
          </blockquote>
          <Link to="/about" className="landing-text-cta mt-10 inline-flex">
            About the platform
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="landing-section landing-section-muted">
        <div className="mx-auto max-w-[680px] px-5 sm:px-8">
          <div className="text-center">
            <LandingSectionLabel>FAQ</LandingSectionLabel>
            <h2 className="landing-headline mt-5 text-[28px] sm:text-[32px]">Common questions</h2>
          </div>
          <div className="hairline-t mt-10">
            <FaqItem
              q="Do I need a technical background?"
              a={`None at all. Every chapter is written for ${AUDIENCE.short} — not engineers. Where math would normally appear, chapters use role-specific examples and plain language instead.`}
            />
            <FaqItem
              q="How long does each chapter take?"
              a="Most chapters take 20–35 minutes including reading, the three examples, and the quiz. There's no timer — and your progress is saved automatically."
            />
            <FaqItem
              q="What if I get stuck on a sentence?"
              a="Highlight it. You'll get a plain-English explanation in place. You can also flag it as confusing — those flags drive the next round of edits."
            />
            <FaqItem
              q="Is it really free?"
              a="Yes — no signup and no paywall. Optional ads may appear via Google AdSense only if you consent to advertising cookies; you can reject or change that anytime in Cookie preferences."
            />
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="landing-section pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="landing-final-cta relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-14 sm:py-20">
            <div className="landing-final-cta-aurora" aria-hidden />
            <div className="relative">
              <BookOpen className="mx-auto text-white/60" size={28} strokeWidth={1.5} />
              <h2 className="landing-display mt-6 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] text-white">
                Start with one chapter.
                <br />
                <em className="text-[#C4B5FD]">Leave with sharper judgment.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[16px] text-white/70">
                Join {AUDIENCE.short} worldwide building real AI intuition — one highlight at a
                time.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to={PLAYBOOK_REPOSITORY.href} className="landing-cta-on-aurora">
                  {PLAYBOOK_REPOSITORY.browse}
                  <ArrowRight size={16} />
                </Link>
                <Link to={AI_LITERACY.href} className="landing-cta-ghost-on-aurora">
                  <Sparkles size={15} />
                  AI Literacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
