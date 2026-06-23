import { createFileRoute } from "@tanstack/react-router";
import { Footer, Nav } from "@/components/site-nav";
import { HomePage } from "@/components/home/home-page";
import { AUDIENCE, brandOgMeta } from "@/lib/brand";
import { useProgress } from "@/lib/storage";
import {
  EXECUTIVE_KBS,
  chapterRouteParams,
  type ExecutiveKb,
} from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { MARKETER_EXECUTIVE_KBS } from "@/lib/executive-kb-marketer";
import type { RoleId } from "@/lib/role-themes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `FactorBeam — AI clarity for ${AUDIENCE.short}` },
      {
        name: "description",
        content:
          `Plain-English AI Literacy for ${AUDIENCE.short}. Sequenced chapters, real product examples, highlight-to-explain, and quizzes. Free, no signup.`,
      },
      {
        property: "og:title",
        content: `FactorBeam — AI clarity for ${AUDIENCE.short}`,
      },
      {
        property: "og:description",
        content:
          "Understand modern AI well enough to ship. Playbooks, literacy tracks, highlight-to-explain — free, no signup.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Do I need a technical background?",
              acceptedAnswer: {
                "@type": "Answer",
                text: `None at all. Every chapter is written for ${AUDIENCE.short} — not engineers. Where math would normally appear, chapters use role-specific examples and plain language instead.`,
              },
            },
            {
              "@type": "Question",
              name: "How long does each chapter take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most chapters take 20–35 minutes including reading, the three examples, and the quiz. There's no timer — and your progress is saved automatically.",
              },
            },
            {
              "@type": "Question",
              name: "What if I get stuck on a sentence?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Highlight it. You'll get a plain-English explanation in place. You can also flag it as confusing — those flags drive the next round of edits.",
              },
            },
            {
              "@type": "Question",
              name: "Is it really free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — no signup and no paywall. Optional ads may appear via Google AdSense only if you consent to advertising cookies; you can reject or change that anytime in Cookie preferences.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const ALL_KBS = [
  ...EXECUTIVE_KBS,
  ...FOUNDER_EXECUTIVE_KBS,
  ...BUSINESS_LEADER_EXECUTIVE_KBS,
  ...MARKETER_EXECUTIVE_KBS,
];

const TRACK_KBS: Record<RoleId, ExecutiveKb[]> = {
  pm: EXECUTIVE_KBS,
  founder: FOUNDER_EXECUTIVE_KBS,
  "business-leader": BUSINESS_LEADER_EXECUTIVE_KBS,
  marketer: MARKETER_EXECUTIVE_KBS,
};

const TOTAL_CHAPTERS = ALL_KBS.reduce((n, kb) => n + kb.sequence.length, 0);

function Home() {
  const { progress } = useProgress();

  const allSlugs = ALL_KBS.flatMap((p) => p.sequence.map((s) => s.slug));
  const doneCount = allSlugs.filter((slug) => progress[slug] === "done").length;
  const inProgressSlug = allSlugs.find((slug) => progress[slug] === "in-progress");
  const firstSlug = allSlugs[0];
  const resumeSlug = inProgressSlug ?? allSlugs.find((s) => progress[s] !== "done") ?? firstSlug;
  const resumeParams = resumeSlug ? chapterRouteParams(resumeSlug) : undefined;
  const ctaLabel = doneCount === 0 ? "Start reading" : "Resume reading";
  const progressPct = allSlugs.length ? Math.round((doneCount / allSlugs.length) * 100) : 0;

  return (
    <>
      <Nav overlay />
      <HomePage
        allKbs={ALL_KBS}
        totalChapters={TOTAL_CHAPTERS}
        trackKbs={TRACK_KBS}
        ctaLabel={ctaLabel}
        progressPct={progressPct}
        doneCount={doneCount}
        resumeParams={resumeParams}
      />
      <Footer />
    </>
  );
}
