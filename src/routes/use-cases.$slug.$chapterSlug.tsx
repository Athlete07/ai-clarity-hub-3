import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/$slug/$chapterSlug")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/library/$slug/$chapterSlug",
      params: {
        slug: params.slug,
        chapterSlug: params.chapterSlug,
      },
      replace: true,
    });
  },
});
