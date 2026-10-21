import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";
import { createSampleAlbum } from "@/lib/sample-album";

function isUuid(str: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str);
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Handle template / sample demo album
    if (id === "sample-album-1") {
      return NextResponse.json({ album: createSampleAlbum() });
    }

    if (!isUuid(id)) {
      return NextResponse.json({ error: "Album tidak ditemukan" }, { status: 404 });
    }

    const rows = await query("SELECT * FROM albums WHERE id = $1", [id]);

    if (rows.length === 0) {
      return NextResponse.json({ error: "Album tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json({ album: rows[0] });
  } catch (err: any) {
    console.error("Get album error:", err);
    return NextResponse.json({ error: err.message || "Gagal mengambil album" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const body = await req.json();
    const { title, person_name, special_date, template_slug, pages_data } = body;

    // Jika user mengedit sample-album-1 saat sudah login, buatkan album nyata baru di database PostgreSQL
    if (id === "sample-album-1") {
      const result = await query(
        `INSERT INTO albums (user_id, title, person_name, special_date, template_slug, pages_data)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
        [
          user.id,
          title || "Untuk Salsadila, Menjelang Akad",
          person_name || "Salsadila",
          special_date || "2026-10-23",
          template_slug || "romantic-islamic-keepsake",
          pages_data ? JSON.stringify(pages_data) : JSON.stringify({}),
        ]
      );
      return NextResponse.json({ album: result[0] });
    }

    if (!isUuid(id)) {
      return NextResponse.json({ error: "Format ID album tidak valid" }, { status: 400 });
    }

    // Pastikan user adalah pemilik album
    const existing = await query("SELECT id FROM albums WHERE id = $1 AND user_id = $2", [id, user.id]);
    if (existing.length === 0) {
      return NextResponse.json({ error: "Album tidak ditemukan atau bukan milikmu" }, { status: 403 });
    }

    const result = await query(
      `UPDATE albums
       SET title = COALESCE($1, title),
           person_name = COALESCE($2, person_name),
           special_date = COALESCE($3, special_date),
           template_slug = COALESCE($4, template_slug),
           pages_data = COALESCE($5, pages_data)
       WHERE id = $6 AND user_id = $7
       RETURNING *`,
      [
        title ?? null,
        person_name ?? null,
        special_date ?? null,
        template_slug ?? null,
        pages_data ? JSON.stringify(pages_data) : null,
        id,
        user.id,
      ]
    );

    return NextResponse.json({ album: result[0] });
  } catch (err: any) {
    console.error("Update album error:", err);
    return NextResponse.json({ error: err.message || "Gagal mengupdate album" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    if (id === "sample-album-1" || !isUuid(id)) {
      return NextResponse.json({ success: true, message: "Album sample dihapus dari tampilan" });
    }

    await query("DELETE FROM albums WHERE id = $1 AND user_id = $2", [id, user.id]);

    return NextResponse.json({ success: true, message: "Album berhasil dihapus" });
  } catch (err: any) {
    console.error("Delete album error:", err);
    return NextResponse.json({ error: err.message || "Gagal menghapus album" }, { status: 500 });
  }
}
