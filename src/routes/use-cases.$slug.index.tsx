import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases/$slug/")({
  beforeLoad: ({ params }) => {
    throw redirect({
      to: "/library/$slug/",
      params: { slug: params.slug },
      replace: true,
    });
  },
});
