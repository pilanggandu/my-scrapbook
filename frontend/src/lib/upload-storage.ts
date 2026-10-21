import { existsSync } from "fs";
import path from "path";

export function sanitizeAlbumId(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 100) || "shared";
}

export function isValidUploadAlbumId(value: string): boolean {
  return /^[a-zA-Z0-9_-]{1,100}$/.test(value);
}

export function isValidUploadFilename(value: string): boolean {
  return /^slot_\d{1,3}_\d+\.(jpg|jpeg|png|webp|avif)$/i.test(value);
}

export function getUploadAppRoot(): string {
  const cwd = process.cwd();
  return existsSync(path.join(cwd, "frontend", "public"))
    ? path.join(cwd, "frontend")
    : cwd;
}

export function getUploadDir(albumId: string): string {
  return path.join(getUploadAppRoot(), "uploads", albumId);
}

export function getLegacyUploadDir(albumId: string): string {
  return path.join(getUploadAppRoot(), "public", "uploads", albumId);
}

