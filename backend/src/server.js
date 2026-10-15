import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = (supabaseUrl && supabaseServiceKey)
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "scrapbook-backend",
    supabaseConnected: Boolean(supabase),
    timestamp: new Date().toISOString()
  });
});

// Middleware verifikasi token user dari Supabase
async function authenticateUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token otentikasi tidak ditemukan" });
  }

  const token = authHeader.split(" ")[1];
  if (!supabase) {
    return res.status(500).json({ error: "Supabase service client belum dikonfigurasi" });
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);
    if (error || !user) {
      return res.status(401).json({ error: "Sesi tidak valid atau telah kedaluwarsa" });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    req.user = user;
    req.profile = profile || { id: user.id, role: "user" };
    next();
  } catch (err) {
    res.status(500).json({ error: "Gagal memverifikasi pengguna" });
  }
}

// Middleware khusus admin
function requireAdmin(req, res, next) {
  if (req.profile?.role !== "admin") {
    return res.status(403).json({ error: "Akses ditolak: Hanya untuk admin" });
  }
  next();
}

// 1. API Templates (Publik: Template Aktif)
app.get("/api/templates", async (req, res) => {
  if (!supabase) {
    return res.json([
      {
        id: "default-keepsake",
        slug: "romantic-islamic-keepsake",
        title: "Romantic Islamic Keepsake",
        description: "Scrapbook kenangan ulang tahun dan menyambut pernikahan dengan sentuhan kertas linen vintage, tiket memorabilia perjalanan cinta, dan doa sakinah.",
        category: "wedding",
        preview_badge: "Template Utama",
        is_active: true,
        is_featured: true
      }
    ]);
  }

  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .eq("is_active", true)
    .order("is_featured", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// 2. API Admin Templates (Melihat semua template termasuk nonaktif)
app.get("/api/admin/templates", authenticateUser, requireAdmin, async (req, res) => {
  const { data, error } = await supabase
    .from("templates")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// 3. API Admin: Tambah / Perbarui Template
app.post("/api/admin/templates", authenticateUser, requireAdmin, async (req, res) => {
  const { slug, title, description, category, default_config, is_active, is_featured, preview_badge } = req.body;
  if (!slug || !title || !default_config) {
    return res.status(400).json({ error: "slug, title, dan default_config wajib diisi" });
  }

  const { data, error } = await supabase
    .from("templates")
    .insert([{ slug, title, description, category, default_config, is_active, is_featured, preview_badge }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
});

// 4. API Admin: Toggle status aktif/nonaktif template
app.patch("/api/admin/templates/:id/toggle", authenticateUser, requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { is_active } = req.body;

  const { data, error } = await supabase
    .from("templates")
    .update({ is_active, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(port, () => {
  console.log(`Backend Express berjalan di http://localhost:${port}`);
});
