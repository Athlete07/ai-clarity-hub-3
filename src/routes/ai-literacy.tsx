import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Layout route so chapter pages (/ai-literacy/:id/:slug) render via Outlet. */
export const Route = createFileRoute("/ai-literacy")({
  component: ExecutiveKbLayout,
});

function ExecutiveKbLayout() {
  return <Outlet />;
}
