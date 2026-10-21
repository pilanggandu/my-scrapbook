import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const MIME_TYPES: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
  svg: "image/svg+xml",
  gif: "image/gif",
};

function resolveUploadDir(): string {
  const cwd = process.cwd();
  if (existsSync(path.join(cwd, "public", "uploads"))) {
    return path.join(cwd, "public", "uploads");
  }
  if (existsSync(path.join(cwd, "frontend", "public", "uploads"))) {
    return path.join(cwd, "frontend", "public", "uploads");
  }
  return path.join(cwd, "public", "uploads");
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: segments } = await params;
    if (!segments || segments.length === 0) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const safeSegments = segments.map((s) => s.replace(/[^a-zA-Z0-9_.-]/g, ""));
    const uploadsRoot = resolveUploadDir();
    const filePath = path.join(uploadsRoot, ...safeSegments);

    if (!filePath.startsWith(uploadsRoot)) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const fileBuffer = await fs.readFile(filePath);
    const fileName = safeSegments[safeSegments.length - 1] || "";
    const ext = fileName.split(".").pop()?.toLowerCase() || "jpg";
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return new NextResponse("Not Found", { status: 404 });
    }
    console.error("Uploads stream error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
