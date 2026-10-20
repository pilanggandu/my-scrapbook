import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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
    await query("DELETE FROM albums WHERE id = $1 AND user_id = $2", [id, user.id]);

    return NextResponse.json({ success: true, message: "Album berhasil dihapus" });
  } catch (err: any) {
    console.error("Delete album error:", err);
    return NextResponse.json({ error: err.message || "Gagal menghapus album" }, { status: 500 });
  }
}
