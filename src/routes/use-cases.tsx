import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/use-cases")({
  component: UseCasesLayout,
});

function UseCasesLayout() {
  return <Outlet />;
}
