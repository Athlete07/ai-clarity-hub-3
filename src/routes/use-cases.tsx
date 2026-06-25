import { createFileRoute, Outlet } from "@tanstack/react-router";

/** Legacy layout — child routes redirect to /library. */
export const Route = createFileRoute("/use-cases")({
  component: UseCasesLayout,
});

function UseCasesLayout() {
  return <Outlet />;
}
