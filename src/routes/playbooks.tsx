import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

/** Legacy /playbooks layout — child routes redirect to /executive-kb. */
export const Route = createFileRoute("/playbooks")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/playbooks") {
      throw redirect({ to: "/executive-kb", replace: true });
    }
  },
  component: () => <Outlet />,
});
