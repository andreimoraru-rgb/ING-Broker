import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface ApprovedPayload { id: string; key: string; payloadSha256: string }
export function loadEditorialRelease(root: string): ApprovedPayload[] {
  const file = resolve(root, 'src/data/editorial-release-20261126.json');
  if (!existsSync(file)) return [];
  const manifest = JSON.parse(readFileSync(file, 'utf8'));
  if (manifest.release !== 'editorial-2027-approved-20261126' || manifest.approvedAt !== '2026-11-26' ||
      !Array.isArray(manifest.entries) || manifest.entries.length !== 51 ||
      new Set(manifest.entries.map((e: ApprovedPayload) => e.key)).size !== 51 ||
      !manifest.entries.every((e: ApprovedPayload) => typeof e.id === 'string' &&
        /^(ru|en)\/[^/]+$/.test(e.key) && /^[a-f0-9]{64}$/.test(e.payloadSha256))) {
    throw new Error('Invalid scoped editorial release manifest');
  }
  return manifest.entries;
}
export function isExactApprovedPayload(entries: ApprovedPayload[], key: string, id: string, payload: unknown): boolean {
  const value = payload as { reviewStatus?: string };
  if (value?.reviewStatus !== 'approved' || /[\u2013\u2014]/.test(JSON.stringify(value))) return false;
  const hash = createHash('sha256').update(JSON.stringify(payload)).digest('hex');
  return entries.some(e => e.key === key && e.id === id && e.payloadSha256 === hash);
}
