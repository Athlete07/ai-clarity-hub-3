import { Link } from "@tanstack/react-router";
import { ArrowRight, Highlighter, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AI_LITERACY, PLAYBOOK_REPOSITORY } from "@/lib/brand";
import {
  LandingAurora,
  LandingBeamOrb,
  LandingGrain,
  LandingGrid,
} from "@/components/home/landing-graphics";
import { cn } from "@/lib/utils";

type LandingHeroProps = {
  ctaLabel: string;
  progressPct: number;
  doneCount: number;
  resumeParams?: { kbId: string; chapterSlug: string };
};

export function LandingHero({
  ctaLabel,
  progressPct,
  doneCount,
  resumeParams,
}: LandingHeroProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 12, y: y * -10 });
    };

    const onLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={sceneRef} className="landing-hero relative min-h-[100svh] overflow-hidden">
      <LandingAurora />
      <LandingGrid />
      <LandingGrain />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8 lg:px-12 lg:pb-32 lg:pt-36">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">
          <div className="landing-reveal landing-reveal-1 text-center lg:text-left">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="landing-pill">
                <Sparkles size={12} aria-hidden />
                Playbook Library · AI Literacy
              </span>
              <span className="landing-pill landing-pill-muted">Free · No signup</span>
            </div>

            <h1 className="landing-display mt-8 text-[clamp(2.75rem,7vw,4.75rem)] leading-[0.95] tracking-[-0.04em] text-white">
              Clarity that
              <br />
              <em className="landing-display-italic text-[#C4B5FD]">illuminates</em>
              <br />
              modern AI.
            </h1>

            <p className="mx-auto mt-7 max-w-[480px] text-[17px] leading-[1.7] text-white/65 lg:mx-0">
              The most beautiful playbook library for teams who ship — sequenced guides,
              highlight-to-explain chapters, and workflows you can run this week.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Link to={PLAYBOOK_REPOSITORY.href} className="landing-cta-primary">
                {PLAYBOOK_REPOSITORY.browse}
                <ArrowRight size={16} />
              </Link>
              {resumeParams ? (
                <Link
                  to="/ai-literacy/$kbId/$chapterSlug"
                  params={resumeParams}
                  className="landing-cta-ghost"
                >
                  {ctaLabel}
                  <ArrowRight size={15} className="opacity-70" />
                </Link>
              ) : (
                <Link to={AI_LITERACY.href} className="landing-cta-ghost">
                  Explore AI Literacy
                  <ArrowRight size={15} className="opacity-70" />
                </Link>
              )}
            </div>

            {doneCount > 0 ? (
              <p className="mt-7 text-[13px] text-white/50 lg:text-left">
                <span className="font-medium text-white/80">{progressPct}%</span> of the library
                complete · {doneCount} chapter{doneCount === 1 ? "" : "s"} done
              </p>
            ) : null}
          </div>

          <div
            className="landing-reveal landing-reveal-2 relative mx-auto w-full max-w-[440px] lg:max-w-none"
            style={{
              transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <LandingBeamOrb />

            <div className="relative z-10 space-y-4">
              <div className="landing-glass-card landing-float-1 ml-auto w-[92%] sm:w-[88%]">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-[#A78BFA]" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                    Cowork · Ch 03
                  </span>
                </div>
                <div className="space-y-3 p-5">
                  <p className="text-[14px] leading-relaxed text-white/85">
                    Schedule Skills like cron for your ops — Monday briefs, invoice triage, board
                    packs on{" "}
                    <mark className="rounded bg-[#534AB7]/40 px-1 text-[#E9D5FF]">autopilot</mark>.
                  </p>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-[#534AB7] to-[#A78BFA]" />
                  </div>
                </div>
              </div>

              <div className="landing-glass-card landing-float-2 w-[88%] sm:w-[78%]">
                <div className="flex items-start gap-3 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#534AB7]/30 text-[#C4B5FD]">
                    <Highlighter size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#C4B5FD]">
                      Instant explanation
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/75">
                      Highlight any sentence — plain English appears in place. No tab switching.
                    </p>
                  </div>
                </div>
              </div>

              <div className="landing-glass-card landing-float-3 ml-6 w-[70%] border-[#534AB7]/30 p-4 sm:ml-10">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Claude Full Stack
                </p>
                <p className="mt-1 text-[22px] font-medium tracking-tight text-white">10 chapters</p>
                <p className="text-[12px] text-white/45">Mental model → production</p>
              </div>
            </div>
          </div>
        </div>

        <div className="landing-scroll-hint absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 lg:flex">
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/30">Scroll</span>
          <span className="landing-scroll-line" aria-hidden />
        </div>
      </div>
    </section>
  );
}

export function LandingMarquee({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <section className="landing-marquee-wrap border-y border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="landing-marquee">
        {[...stats, ...stats].map((stat, i) => (
          <div key={`${stat.label}-${i}`} className="landing-marquee-item">
            <span className="landing-stat-value">{stat.value}</span>
            <span className="landing-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LandingSectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="landing-section-label">
      <span className="landing-section-label-line" aria-hidden />
      {children}
    </p>
  );
}

export function LandingGlassCard({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={cn("landing-surface-card", hover && "landing-surface-card-hover", className)}>
      {children}
    </div>
  );
}
