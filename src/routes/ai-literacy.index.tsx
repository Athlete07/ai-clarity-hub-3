import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Nav, Footer } from "@/components/site-nav";
import {
  EmptyTrackState,
  PlaybookHero,
  PlaybookMethodologyCta,
  PlaybookPillars,
  PlaybookStatRibbon,
  TrackGallery,
  TrackLibrary,
} from "@/components/executive-kb/playbook-library";
import { useProgress } from "@/lib/storage";
import {
  dismissTrackBanner,
  executiveKbTrackSearch,
  parseExecutiveKbSearch,
  isTrackBannerDismissed,
  readStoredRole,
  writeStoredRole,
} from "@/lib/executive-kb-track";
import { EXECUTIVE_KBS, type ExecutiveKb } from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { MARKETER_EXECUTIVE_KBS } from "@/lib/executive-kb-marketer";
import { AUDIENCE, AI_LITERACY, brandOgMeta } from "@/lib/brand";
import { ROLES, type RoleId } from "@/lib/role-themes";

export const Route = createFileRoute("/ai-literacy/")({
  validateSearch: parseExecutiveKbSearch,
  head: () => ({
    meta: [
      {
        title: `AI Literacy — The playbook library for ${AUDIENCE.short} | FactorBeam`,
      },
      {
        name: "description",
        content: `Browse ${ALL_KBS.length} sequenced AI playbooks across ${ROLES.length} role tracks. Plain-English chapters, real examples, highlight-to-explain, and quizzes — free for ${AUDIENCE.long}.`,
      },
      {
        property: "og:title",
        content: `AI Literacy — Playbook library for ${AUDIENCE.short}`,
      },
      {
        property: "og:description",
        content:
          "Sequenced AI playbooks for PMs, founders, leaders, and marketers. Read in order, explain anything in place, ship with confidence.",
      },
      { property: "og:url", content: AI_LITERACY.href },
      { property: "og:type", content: "website" },
      ...brandOgMeta(),
    ],
    links: [{ rel: "canonical", href: AI_LITERACY.href }],
  }),
  component: ExecutiveKbPage,
});

const EXECUTIVE_KBS_BY_ROLE: Record<RoleId, ExecutiveKb[]> = {
  pm: EXECUTIVE_KBS,
  founder: FOUNDER_EXECUTIVE_KBS,
  "business-leader": BUSINESS_LEADER_EXECUTIVE_KBS,
  marketer: MARKETER_EXECUTIVE_KBS,
};

const ALL_KBS = [
  ...EXECUTIVE_KBS,
  ...FOUNDER_EXECUTIVE_KBS,
  ...BUSINESS_LEADER_EXECUTIVE_KBS,
  ...MARKETER_EXECUTIVE_KBS,
];
const TOTAL_CHAPTERS = ALL_KBS.reduce((n, kb) => n + kb.sequence.length, 0);

function ExecutiveKbPage() {
  const { track: trackFromUrl } = Route.useSearch();
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleId | null>(trackFromUrl ?? null);
  const [showTrackBanner, setShowTrackBanner] = useState(false);
  const { progress } = useProgress();

  useEffect(() => {
    if (trackFromUrl) {
      setRole(trackFromUrl);
      writeStoredRole(trackFromUrl);
      return;
    }

    const saved = readStoredRole();
    if (saved && EXECUTIVE_KBS_BY_ROLE[saved]) {
      setRole(saved);
      navigate({
        to: "/ai-literacy",
        search: executiveKbTrackSearch(saved),
        replace: true,
      });
      return;
    }

    setRole(null);
  }, [trackFromUrl, navigate]);

  useEffect(() => {
    setShowTrackBanner(!isTrackBannerDismissed());
  }, []);

  const selectRole = (id: RoleId) => {
    setRole(id);
    writeStoredRole(id);
    navigate({
      to: "/ai-literacy",
      search: executiveKbTrackSearch(id),
    });
  };

  const handleDismissBanner = () => {
    dismissTrackBanner();
    setShowTrackBanner(false);
  };

  const executiveKbs = role ? EXECUTIVE_KBS_BY_ROLE[role] || [] : [];
  const activeRole = role ? ROLES.find((r) => r.id === role) : null;

  return (
    <>
      <Nav />
      {role === null && showTrackBanner ? (
        <div
          role="status"
          className="border-b border-purple/15 bg-purple-light/50 dark:bg-purple-light/10"
        >
          <div className="mx-auto flex max-w-6xl items-start justify-between gap-4 px-5 py-3 sm:items-center sm:px-6">
            <p className="text-[13px] leading-snug text-purple-dark dark:text-purple sm:text-[14px]">
              Choose a role lens below — each track reframes the same AI foundations for how you
              work.
            </p>
            <button
              type="button"
              onClick={handleDismissBanner}
              aria-label="Dismiss"
              className="shrink-0 rounded-md p-1.5 text-purple-dark/70 transition-colors hover:bg-purple-light hover:text-purple-dark dark:text-purple/70 dark:hover:text-purple"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ) : null}

      <main className="overflow-x-hidden">
        <PlaybookHero
          role={role}
          onSelectRole={selectRole}
          totalPlaybooks={ALL_KBS.length}
          totalChapters={TOTAL_CHAPTERS}
          totalRoles={ROLES.length}
        />

        <PlaybookPillars />
        <PlaybookStatRibbon
          totalPlaybooks={ALL_KBS.length}
          totalChapters={TOTAL_CHAPTERS}
          totalRoles={ROLES.length}
        />

        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          {role === null ? (
            <TrackGallery
              onSelect={selectRole}
              progress={progress}
              kbsByRole={EXECUTIVE_KBS_BY_ROLE}
            />
          ) : executiveKbs.length === 0 ? (
            <EmptyTrackState roleTitle={activeRole?.title ?? "This"} />
          ) : (
            <TrackLibrary role={role} kbs={executiveKbs} progress={progress} />
          )}

          <PlaybookMethodologyCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
