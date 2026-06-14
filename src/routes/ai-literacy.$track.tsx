import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { parseRoleTrack } from "@/lib/executive-kb-track";

/** Short paths like /ai-literacy/pm → /ai-literacy?track=pm */
export const Route = createFileRoute("/ai-literacy/$track")({
  beforeLoad: ({ params }) => {
    const track = parseRoleTrack(params.track);
    if (!track) throw notFound();
    throw redirect({
      to: "/ai-literacy",
      search: { track },
      replace: true,
    });
  },
});
