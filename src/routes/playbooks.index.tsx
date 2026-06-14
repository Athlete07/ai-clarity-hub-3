import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /playbooks/ → /ai-literacy */
export const Route = createFileRoute("/playbooks/")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-literacy", replace: true });
  },
});
