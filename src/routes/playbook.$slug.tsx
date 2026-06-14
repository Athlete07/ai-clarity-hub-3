import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { canonicalChapterSlug } from "@/lib/chapter-slug-migrations";
import { executiveKbForSlug } from "@/lib/executive-kb";

/** Legacy /playbook/{slug} → /ai-literacy/{kbId}/{chapterSlug} */
export const Route = createFileRoute("/playbook/$slug")({
  beforeLoad: ({ params }) => {
    const canonical = canonicalChapterSlug(params.slug);
    const kb = executiveKbForSlug(canonical);
    if (!kb) throw notFound();
    throw redirect({
      to: "/ai-literacy/$kbId/$chapterSlug",
      params: { kbId: kb.id, chapterSlug: canonical },
      replace: true,
    });
  },
});
