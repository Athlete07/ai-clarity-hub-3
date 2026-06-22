import { createFileRoute, redirect } from "@tanstack/react-router";
import { PLAYBOOK_REPOSITORY } from "@/lib/brand";

/** Friendly URL alias → canonical Playbook Library route. */
export const Route = createFileRoute("/library")({
  beforeLoad: () => {
    throw redirect({
      to: PLAYBOOK_REPOSITORY.href,
      replace: true,
    });
  },
});
