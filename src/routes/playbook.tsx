import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /playbook index → /playbooks listing. */
export const Route = createFileRoute("/playbook")({
  beforeLoad: () => {
    throw redirect({ to: "/playbooks", replace: true });
  },
});
