/** Cloudflare Worker bindings — injected by src/server.ts on each request. */
export type WorkerBindings = {
  HRIS_ENDPOINT?: string;
  HRIS_TOKEN?: string;
};

let bindings: WorkerBindings = {};

export function setWorkerBindings(env: WorkerBindings): void {
  bindings = env;
}

export function getWorkerBindings(): WorkerBindings {
  return bindings;
}
