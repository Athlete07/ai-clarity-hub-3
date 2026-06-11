import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /playbooks/ → /executive-kb */
export const Route = createFileRoute("/playbooks/")({
  beforeLoad: () => {
    throw redirect({ to: "/executive-kb", replace: true });
  },
});
