import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { getUploadAppRoot } from "@/lib/upload-storage";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File audio tidak ditemukan" }, { status: 400 });
    }

    const rawExt = file.name.split(".").pop()?.toLowerCase() || "mp3";
    const validExts = ["mp3", "wav", "ogg", "m4a", "aac", "weba", "flac"];
    const ext = validExts.includes(rawExt) ? rawExt : "mp3";

    // Bersihkan nama dasar file asli
    const baseName = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[^a-zA-Z0-9_\- ]/g, "")
      .trim()
      .replace(/\s+/g, "_")
      .slice(0, 40) || "custom_audio";

    const fileName = `${baseName}_${Date.now()}.${ext}`;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 1. Simpan ke frontend/public/audio/
    const appRoot = getUploadAppRoot();
    const audioDir = path.join(appRoot, "public", "audio");
    await fs.mkdir(audioDir, { recursive: true });
    await fs.writeFile(path.join(audioDir, fileName), buffer);

    // 2. Mirror ke root/audio/ jika direktori ada (untuk prototype.html standalone)
    const cwd = process.cwd();
    const rootAudioDir = existsSync(path.join(cwd, "audio"))
      ? path.join(cwd, "audio")
      : existsSync(path.join(path.dirname(appRoot), "audio"))
        ? path.join(path.dirname(appRoot), "audio")
        : null;

    if (rootAudioDir) {
      try {
        await fs.mkdir(rootAudioDir, { recursive: true });
        await fs.writeFile(path.join(rootAudioDir, fileName), buffer);
      } catch (err) {
        // Abaikan jika mirror opsional gagal
      }
    }

    // Buat judul lagu otomatis dari nama file
    const cleanTitle = file.name
      .replace(/\.[^/.]+$/, "")
      .replace(/[_-]+/g, " ")
      .trim();

    return NextResponse.json({
      url: `/audio/${fileName}`,
      fileName,
      title: cleanTitle,
      size: buffer.length,
    });
  } catch (err: unknown) {
    console.error("Upload audio error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Gagal mengunggah file audio" },
      { status: 500 }
    );
  }
}
