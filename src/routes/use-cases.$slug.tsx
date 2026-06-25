import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { resolveLegacyChapterSlug } from "@/lib/use-cases/registry";

export const Route = createFileRoute("/use-cases/$slug")({
  beforeLoad: ({ params }) => {
    const legacy = resolveLegacyChapterSlug(params.slug);
    if (legacy) {
      throw redirect({
        to: "/library/$slug/$chapterSlug",
        params: {
          slug: legacy.playbookSlug,
          chapterSlug: legacy.chapterSlug,
        },
        replace: true,
      });
    }
  },
  component: UseCaseSlugRedirectLayout,
});

function UseCaseSlugRedirectLayout() {
  return <Outlet />;
}
