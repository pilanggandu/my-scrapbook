import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const rawAlbums = await query(
      "SELECT * FROM albums WHERE user_id = $1 ORDER BY created_at DESC",
      [user.id]
    );

    const albums = rawAlbums.map((a: any) => ({
      ...a,
      status: a.status || "draft",
    }));

    return NextResponse.json({ albums });
  } catch (err: any) {
    console.error("Get albums error:", err);
    return NextResponse.json({ error: err.message || "Gagal memuat album" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      title = "Album Kenangan Cinta",
      person_name = "Calon Istriku",
      special_date = "2026-06-18",
      template_slug = "romantic-islamic-keepsake",
      pages_data = {},
    } = body;

    const result = await query(
      `INSERT INTO albums (user_id, title, person_name, special_date, template_slug, pages_data)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [
        user.id,
        title,
        person_name,
        special_date,
        template_slug,
        JSON.stringify(pages_data),
      ]
    );

    return NextResponse.json({ album: result[0] });
  } catch (err: any) {
    console.error("Create album error:", err);
    return NextResponse.json({ error: err.message || "Gagal membuat album" }, { status: 500 });
  }
}
