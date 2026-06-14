import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

/** Legacy /playbooks layout — child routes redirect to /ai-literacy. */
export const Route = createFileRoute("/playbooks")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/playbooks") {
      throw redirect({ to: "/ai-literacy", replace: true });
    }
  },
  component: () => <Outlet />,
});
