import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route so chapter pages (/executive-kb/:id/:slug) render via Outlet. */
export const Route = createFileRoute("/executive-kb")({
  component: ExecutiveKbLayout,
});

function ExecutiveKbLayout() {
  return <Outlet />;
}
