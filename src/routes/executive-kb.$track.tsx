import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { parseRoleTrack } from "@/lib/executive-kb-track";

/** Short paths like /executive-kb/pm → /executive-kb?track=pm */
export const Route = createFileRoute("/executive-kb/$track")({
  beforeLoad: ({ params }) => {
    const track = parseRoleTrack(params.track);
    if (!track) throw notFound();
    throw redirect({
      to: "/executive-kb",
      search: { track },
      replace: true,
    });
  },
});
