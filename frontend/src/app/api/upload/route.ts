import { NextRequest, NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    // Biarkan upload jika ada user atau untuk guest session
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const albumId = (formData.get("albumId") as string) || "shared";
    const slot = (formData.get("slot") as string) || "0";

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Ambil ekstensi aman
    const rawExt = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const validExts = ["jpg", "jpeg", "png", "webp", "avif"];
    const ext = validExts.includes(rawExt) ? rawExt : "jpg";

    // Sanitasi folder album
    const cleanAlbumId = albumId.replace(/[^a-zA-Z0-9_-]/g, "");
    const uploadDir = path.join(process.cwd(), "public", "uploads", cleanAlbumId);
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = `slot_${slot}_${Date.now()}.${ext}`;
    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${cleanAlbumId}/${fileName}`;

    return NextResponse.json({
      url: publicUrl,
      fileName,
    });
  } catch (err: any) {
    console.error("Local upload error:", err);
    return NextResponse.json(
      { error: err.message || "Gagal mengunggah foto" },
      { status: 500 }
    );
  }
}
