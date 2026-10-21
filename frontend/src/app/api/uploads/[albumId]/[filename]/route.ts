import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import {
  getLegacyUploadDir,
  getUploadDir,
  isValidUploadAlbumId,
  isValidUploadFilename,
} from "@/lib/upload-storage";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ albumId: string; filename: string }> }
) {
  try {
    const { albumId, filename } = await params;
    if (!isValidUploadAlbumId(albumId) || !isValidUploadFilename(filename)) {
      return NextResponse.json({ error: "Foto tidak ditemukan" }, { status: 404 });
    }

    for (const uploadDir of [getUploadDir(albumId), getLegacyUploadDir(albumId)]) {
      try {
        const image = await fs.readFile(path.join(uploadDir, filename));
        const ext = path.extname(filename).toLowerCase();
        const contentType =
          ext === ".png"
            ? "image/png"
            : ext === ".webp"
              ? "image/webp"
              : ext === ".avif"
                ? "image/avif"
                : "image/jpeg";

        return new NextResponse(image, {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=31536000, immutable",
            "X-Content-Type-Options": "nosniff",
          },
        });
      } catch (err: unknown) {
        if (
          typeof err === "object" &&
          err !== null &&
          "code" in err &&
          err.code === "ENOENT"
        ) {
          continue;
        }
        throw err;
      }
    }

    return NextResponse.json({ error: "Foto tidak ditemukan" }, { status: 404 });
  } catch (err: unknown) {
    console.error("Get uploaded photo error:", err);
    return NextResponse.json({ error: "Gagal mengambil foto" }, { status: 500 });
  }
}

