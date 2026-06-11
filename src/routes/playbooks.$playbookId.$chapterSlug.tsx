import { createFileRoute, redirect } from "@tanstack/react-router";
import { canonicalChapterSlug } from "@/lib/chapter-slug-migrations";
import { canonicalExecutiveKbId } from "@/lib/executive-kb";

/** Legacy /playbooks/{id}/{slug} → /executive-kb/{id}/{slug} */
export const Route = createFileRoute("/playbooks/$playbookId/$chapterSlug")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/executive-kb/$kbId/$chapterSlug",
      params: {
        kbId: canonicalExecutiveKbId(params.playbookId),
        chapterSlug: canonicalChapterSlug(params.chapterSlug),
      },
      replace: true,
    });
  },
});
