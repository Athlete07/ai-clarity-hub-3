import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CatalogCrossLink } from "@/components/home/catalog-hero";
import { LandingMarquee } from "@/components/home/landing-ui";
import { LandingPageShell } from "@/components/home/landing-page-shell";
import {
  EmptyTrackState,
  PlaybookHero,
  PlaybookMethodologyCta,
  TrackGallery,
  TrackLibrary,
} from "@/components/executive-kb/playbook-library";
import { PLAYBOOK_REPOSITORY, AUDIENCE, AI_LITERACY, brandOgMeta } from "@/lib/brand";
import { useProgress } from "@/lib/storage";
import {
  executiveKbTrackSearch,
  parseExecutiveKbSearch,
  readStoredRole,
  writeStoredRole,
} from "@/lib/executive-kb-track";
import { EXECUTIVE_KBS, type ExecutiveKb } from "@/lib/executive-kb";
import { FOUNDER_EXECUTIVE_KBS } from "@/lib/executive-kb-founder";
import { BUSINESS_LEADER_EXECUTIVE_KBS } from "@/lib/executive-kb-business-leader";
import { MARKETER_EXECUTIVE_KBS } from "@/lib/executive-kb-marketer";
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

const LITERACY_STATS = [
  { value: String(ALL_KBS.length), label: "Playbooks" },
  { value: String(ROLES.length), label: "Role tracks" },
  { value: `${TOTAL_CHAPTERS}+`, label: "Chapters" },
  { value: "$0", label: "Forever free" },
];

function ExecutiveKbPage() {
  const { track: trackFromUrl } = Route.useSearch();
  const navigate = useNavigate();
  const [role, setRole] = useState<RoleId | null>(trackFromUrl ?? null);
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

  const selectRole = (id: RoleId) => {
    setRole(id);
    writeStoredRole(id);
    navigate({
      to: "/ai-literacy",
      search: executiveKbTrackSearch(id),
    });
  };

  const executiveKbs = role ? EXECUTIVE_KBS_BY_ROLE[role] || [] : [];
  const activeRole = role ? ROLES.find((r) => r.id === role) : null;

  return (
    <LandingPageShell>
        <PlaybookHero
          role={role}
          onSelectRole={selectRole}
          totalPlaybooks={ALL_KBS.length}
          totalChapters={TOTAL_CHAPTERS}
          totalRoles={ROLES.length}
        />

        <LandingMarquee stats={LITERACY_STATS} />

        <div className="catalog-body">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
            <CatalogCrossLink>
              Tool guides & workflows —{" "}
              <Link to={PLAYBOOK_REPOSITORY.href}>browse Playbook Library</Link>
            </CatalogCrossLink>

            <div className="mt-8">
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
          </div>
        </div>
    </LandingPageShell>
  );
}
