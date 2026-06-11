import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /playbook → /executive-kb */
export const Route = createFileRoute("/playbook")({
  beforeLoad: () => {
    throw redirect({ to: "/executive-kb", replace: true });
  },
});
