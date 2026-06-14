import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy /playbook → /ai-literacy */
export const Route = createFileRoute("/playbook")({
  beforeLoad: () => {
    throw redirect({ to: "/ai-literacy", replace: true });
  },
});
