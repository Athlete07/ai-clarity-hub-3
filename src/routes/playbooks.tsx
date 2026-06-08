import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route so chapter pages (/playbooks/:id/:slug) render via Outlet. */
export const Route = createFileRoute("/playbooks")({
  component: PlaybooksLayout,
});

function PlaybooksLayout() {
  return <Outlet />;
}
