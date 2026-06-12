import type { CredentialStamp } from "./types";
import { clearSyncQueue, queueStampForSync, readSyncQueue } from "./storage";

async function digestHex(payload: string): Promise<string> {
  if (typeof crypto !== "undefined" && crypto.subtle) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(payload));
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }
  let h = 0x811c9dc5;
  for (let i = 0; i < payload.length; i++) {
    h ^= payload.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(64, "0");
}

/** SHA-256 stamp + client integrity signature (verified locally on leaderboard submit). */
export async function issueStamp(
  playerId: string,
  wave: number,
  score: number,
): Promise<CredentialStamp> {
  const timestamp = new Date().toISOString();
  const payload = `${playerId}:wave_${wave}:${score}:${timestamp}`;
  const sha256 = await digestHex(payload);
  const signature = await digestHex(`${sha256}:${playerId}:factorbeam-ao-v1`);
  return { wave, timestamp, sha256, playerId, score, signature };
}

export async function verifyStamp(stamp: CredentialStamp): Promise<boolean> {
  const expected = await digestHex(`${stamp.sha256}:${stamp.playerId}:factorbeam-ao-v1`);
  return expected === stamp.signature;
}

const AO_SYNC_API = "/api/ao/sync";

/** Forwards stamp to the server proxy — HRIS credentials never leave the Worker. */
export async function syncToHRIS(stamp: CredentialStamp): Promise<void> {
  await fetch(AO_SYNC_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(stamp),
  });
}

export function queueStamp(stamp: CredentialStamp): void {
  queueStampForSync(stamp);
}

export async function retryQueuedSync(): Promise<boolean> {
  const queue = readSyncQueue();
  if (!queue.length) return true;
  try {
    for (const stamp of queue) {
      if (!(await verifyStamp(stamp))) continue;
      await syncToHRIS(stamp);
    }
    clearSyncQueue();
    return true;
  } catch {
    return false;
  }
}
