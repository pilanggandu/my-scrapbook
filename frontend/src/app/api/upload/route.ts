import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";
import {
  getLegacyUploadDir,
  getUploadDir,
  isValidUploadAlbumId,
  isValidUploadFilename,
  sanitizeAlbumId,
} from "@/lib/upload-storage";

export async function POST(req: NextRequest) {
  try {
    await getSessionUser();
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const albumId = sanitizeAlbumId(String(formData.get("albumId") || "shared"));
    const slot = String(formData.get("slot") || "0");

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    if (!/^\d{1,3}$/.test(slot)) {
      return NextResponse.json({ error: "Slot foto tidak valid" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const rawExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const validExts = ["jpg", "jpeg", "png", "webp", "avif"];
    const ext = validExts.includes(rawExt) ? rawExt : "jpg";
    const uploadDir = getUploadDir(albumId);
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `slot_${slot}_${Date.now()}.${ext}`;
    await fs.writeFile(path.join(uploadDir, fileName), buffer);

    return NextResponse.json({
      url: `/api/uploads/${albumId}/${fileName}`,
      fileName,
    });
  } catch (err: unknown) {
    console.error("Local upload error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Gagal mengunggah foto" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const photoUrl = searchParams.get("url");

    if (!photoUrl) {
      return NextResponse.json({ error: "URL foto tidak disertakan" }, { status: 400 });
    }

    const prefix = photoUrl.startsWith("/api/uploads/")
      ? "/api/uploads/"
      : photoUrl.startsWith("/uploads/")
        ? "/uploads/"
        : "";

    if (prefix) {
      const segments = photoUrl.slice(prefix.length).split("/");
      if (
        segments.length === 2 &&
        isValidUploadAlbumId(segments[0]) &&
        isValidUploadFilename(segments[1])
      ) {
        const [albumId, fileName] = segments;
        for (const uploadDir of [getUploadDir(albumId), getLegacyUploadDir(albumId)]) {
          try {
            await fs.unlink(path.join(uploadDir, fileName));
            break;
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
      }
    }

    return NextResponse.json({
      success: true,
      message: "Foto berhasil di-unlink dan dihapus dari penyimpanan",
    });
  } catch (err: unknown) {
    console.error("Delete photo error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Gagal menghapus file foto" },
      { status: 500 }
    );
  }
}
