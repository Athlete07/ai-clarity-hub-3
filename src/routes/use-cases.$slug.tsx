import { createFileRoute, notFound, Outlet, redirect } from "@tanstack/react-router";
import { resolveLegacyChapterSlug, useCaseBySlug } from "@/lib/use-cases/registry";

/** Layout route — child routes render via Outlet (index = overview, $chapterSlug = chapter). */
export const Route = createFileRoute("/use-cases/$slug")({
  loader: ({ params }) => {
    const legacy = resolveLegacyChapterSlug(params.slug);
    if (legacy) {
      throw redirect({
        to: "/use-cases/$slug/$chapterSlug",
        params: { slug: legacy.playbookSlug, chapterSlug: legacy.chapterSlug },
      });
    }

    const playbook = useCaseBySlug(params.slug);
    if (!playbook) throw notFound();
    return { playbook };
  },
  component: UseCaseSlugLayout,
});

function UseCaseSlugLayout() {
  return <Outlet />;
}
