import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { canonicalChapterSlug } from "@/lib/chapter-slug-migrations";
import { playbookForSlug } from "@/lib/playbooks";

/** Redirect legacy /playbook/{slug} URLs to canonical /playbooks/{playbookId}/{chapterSlug}. */
export const Route = createFileRoute("/playbook/$slug")({
  beforeLoad: ({ params }) => {
    const canonical = canonicalChapterSlug(params.slug);
    const pb = playbookForSlug(canonical);
    if (!pb) throw notFound();
    throw redirect({
      to: "/playbooks/$playbookId/$chapterSlug",
      params: { playbookId: pb.id, chapterSlug: canonical },
      replace: true,
    });
  },
});
