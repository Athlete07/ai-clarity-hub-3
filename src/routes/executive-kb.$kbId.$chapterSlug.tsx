import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /executive-kb/{kbId}/{chapterSlug} → /ai-literacy/{kbId}/{chapterSlug} */
export const Route = createFileRoute("/executive-kb/$kbId/$chapterSlug")({
  beforeLoad: ({ params, search }) => {
    throw redirect({
      to: "/ai-literacy/$kbId/$chapterSlug",
      params,
      search,
      replace: true,
    });
  },
});
