import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Legacy layout — child routes redirect to /ai-literacy. */
export const Route = createFileRoute("/executive-kb")({
  component: ExecutiveKbLegacyLayout,
});

function ExecutiveKbLegacyLayout() {
  return <Outlet />;
}
