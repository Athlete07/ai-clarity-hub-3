import { createFileRoute, redirect } from "@tanstack/react-router";
import { parseExecutiveKbSearch } from "@/lib/executive-kb-track";

/** Legacy /executive-kb/ → /ai-literacy */
export const Route = createFileRoute("/executive-kb/")({
  validateSearch: parseExecutiveKbSearch,
  beforeLoad: ({ search }) => {
    throw redirect({
      to: "/ai-literacy",
      search,
      replace: true,
    });
  },
});
