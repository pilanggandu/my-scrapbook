"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Template } from "@/lib/types";
import { ArrowLeft, Check, Plus, ShieldCheck, ToggleLeft, ToggleRight } from "lucide-react";

export default function AdminTemplatesPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: "tpl-1",
      slug: "romantic-islamic-keepsake",
      title: "Romantic Islamic Keepsake",
      description: "Paduan anggun kertas linen vintage, tiket kenangan perjalanan cinta, kalender milad, dan komitmen ikhtiar sakinah.",
      category: "wedding",
      preview_badge: "Template Utama",
      is_active: true,
      is_featured: true,
      default_config: { theme: "vintage-islamic", totalPages: 5, pages: {} },
      created_at: new Date().toISOString(),
    },
    {
      id: "tpl-2",
      slug: "vintage-travel-story",
      title: "Vintage Wanderlust & Tale",
      description: "Nuansa prangko pos vintage, paspor perjalanan cinta, dan tiket memorial dari kota pertama hingga masa depan.",
      category: "travel",
      preview_badge: "Draft",
      is_active: false,
      is_featured: false,
      default_config: { theme: "travel", totalPages: 4, pages: {} },
      created_at: new Date().toISOString(),
    },
  ]);

  const toggleStatus = (id: string) => {
    setTemplates((prev) =>
      prev.map((t) => (t.id === id ? { ...t, is_active: !t.is_active } : t))
    );
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">
      {/* Header Admin */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-6 py-4 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="w-8 h-8 rounded-lg bg-[#f6eee2] hover:bg-[#ede3d3] text-[#554738] flex items-center justify-center transition"
              title="Kembali ke Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-[#3d3328]">Scrapbook Studio</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#fee8de] border border-[#f5c9b6] text-[10px] font-bold text-[#8c3b24]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Admin Panel</span>
                </span>
              </div>
              <span className="block text-[10px] uppercase tracking-wider text-[#7e7261]">
                Manajemen Template Global
              </span>
            </div>
          </div>

          <button
            onClick={() => alert("Fitur tambah template wizard siap dihubungkan ke Supabase!")}
            className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Template Baru</span>
          </button>
        </div>
      </header>

      {/* Konten Admin Panel */}
      <main className="max-w-6xl mx-auto w-full px-6 py-10 flex-1">
        <div className="mb-8">
          <h1 className="font-serif text-2xl font-bold text-[#382f25]">Katalog Template Scrapbook</h1>
          <p className="text-xs text-[#736655] mt-1">
            Atur template mana yang tampil untuk pengguna publik, jadikan template unggulan, dan pantau statusnya.
          </p>
        </div>

        {/* Tabel / Kartu Manajemen Template */}
        <div className="bg-[#fffdf8] rounded-3xl border border-[#ded5c4] overflow-hidden shadow-xs">
          <div className="divide-y divide-[#eee7da]">
            {templates.map((tpl) => (
              <div key={tpl.id} className="p-6 flex flex-wrap items-center justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="font-serif text-lg font-bold text-[#3b3227]">
                      {tpl.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f4ece0] text-[#6d6152]">
                      slug: {tpl.slug}
                    </span>
                    {tpl.is_featured && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fbeee8] text-[#8c3b24] border border-[#eed3c8]">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#6a5e4f] leading-relaxed mb-2">{tpl.description}</p>
                  <div className="flex items-center gap-2 text-[11px] text-[#7a6d5c]">
                    <span className="capitalize font-semibold text-[#483d31]">Kategori: {tpl.category}</span>
                    <span>•</span>
                    <span>{tpl.default_config.totalPages} Halaman</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="block text-[10px] uppercase font-bold text-[#796d5e]">
                      Status Tampil
                    </span>
                    <span
                      className={`inline-block text-xs font-bold ${
                        tpl.is_active ? "text-[#386b4b]" : "text-[#8a4242]"
                      }`}
                    >
                      {tpl.is_active ? "Aktif (Publik)" : "Nonaktif (Draft)"}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleStatus(tpl.id)}
                    className="p-2 rounded-xl bg-[#f5ede0] hover:bg-[#eae0d0] text-[#554737] transition"
                    title="Ganti status aktif / nonaktif"
                  >
                    {tpl.is_active ? (
                      <ToggleRight className="w-6 h-6 text-[#4b6958]" />
                    ) : (
                      <ToggleLeft className="w-6 h-6 text-[#9a8d7d]" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
