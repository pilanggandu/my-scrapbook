"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Template } from "@/lib/types";
import {
  ArrowLeft,
  Check,
  Plus,
  ShieldCheck,
  ToggleLeft,
  ToggleRight,
  Layers,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function AdminTemplatesPage() {
  const router = useRouter();
  const [templates, setTemplates] = useState<Template[]>([
    {
      id: "tpl-1",
      slug: "romantic-islamic-keepsake",
      title: "Romantic Islamic Keepsake",
      description:
        "Paduan anggun kertas linen vintage, tiket kenangan perjalanan cinta, kalender milad, dan komitmen ikhtiar sakinah.",
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
      description:
        "Nuansa prangko pos vintage, paspor perjalanan cinta, dan tiket memorial dari kota pertama hingga masa depan.",
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

  const totalActive = templates.filter((t) => t.is_active).length;
  const categories = Array.from(new Set(templates.map((t) => t.category)));

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col font-sans text-[#382e25]">
      {/* 1. Header Admin Responsive */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-4 sm:px-6 py-3 sm:py-4 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/dashboard"
              className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-xl bg-[#f6eee2] hover:bg-[#ede3d3] text-[#554738] flex items-center justify-center transition active:scale-95 shrink-0"
              title="Kembali ke Dashboard"
              aria-label="Kembali ke Dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-serif text-base sm:text-lg font-bold text-[#3d3328] tracking-tight">
                  Scrapbook Studio
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#fee8de] border border-[#f5c9b6] text-[10px] font-bold text-[#8c3b24]">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Admin Panel</span>
                </span>
              </div>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-[#7e7261] truncate">
                Manajemen Template Global
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <Link
              href="/dashboard"
              className="hidden sm:inline-flex px-3.5 py-2.5 rounded-xl border border-[#d6cab8] hover:bg-[#f6eee2] text-xs font-semibold text-[#554738] transition items-center gap-1.5"
            >
              <span>Ke Dashboard</span>
            </Link>

            <button
              onClick={() =>
                alert("Fitur tambah template wizard siap dihubungkan ke Supabase!")
              }
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs min-h-[44px] active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Template Baru</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Konten Admin Panel Responsive */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-10 flex-1">
        {/* Ringkasan Statistik Cepat */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-[#fffdf8] rounded-2xl border border-[#ded5c4] p-3.5 sm:p-4 shadow-2xs">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-[#7c7060]">
              Total Template
            </span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#32271d] mt-1 block">
              {templates.length}
            </span>
          </div>

          <div className="bg-[#fffdf8] rounded-2xl border border-[#ded5c4] p-3.5 sm:p-4 shadow-2xs">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-[#7c7060]">
              Aktif Publik
            </span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#2f5e3e] mt-1 block">
              {totalActive}
            </span>
          </div>

          <div className="bg-[#fffdf8] rounded-2xl border border-[#ded5c4] p-3.5 sm:p-4 shadow-2xs">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-[#7c7060]">
              Kategori
            </span>
            <span className="text-xl sm:text-2xl font-bold font-serif text-[#32271d] mt-1 block">
              {categories.length}
            </span>
          </div>

          <div className="bg-[#fffdf8] rounded-2xl border border-[#ded5c4] p-3.5 sm:p-4 shadow-2xs">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-[#7c7060]">
              Database Status
            </span>
            <span className="text-xs sm:text-sm font-bold text-[#4b6958] mt-1.5 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4b6958] animate-pulse"></span>
              <span>Online Ready</span>
            </span>
          </div>
        </section>

        {/* Heading Halaman */}
        <div className="mb-6">
          <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#382f25]">
            Katalog Template Scrapbook
          </h1>
          <p className="text-xs sm:text-sm text-[#736655] mt-1 leading-relaxed">
            Atur template mana yang tampil untuk pengguna publik, jadikan template unggulan, dan pantau statusnya.
          </p>
        </div>

        {/* Tabel / Kartu Manajemen Template Responsive */}
        <div className="bg-[#fffdf8] rounded-2xl sm:rounded-3xl border border-[#ded5c4] overflow-hidden shadow-2xs">
          <div className="divide-y divide-[#eee7da]">
            {templates.map((tpl) => (
              <div
                key={tpl.id}
                className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 hover:bg-[#fbf9f4] transition"
              >
                <div className="max-w-2xl min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#3b3227]">
                      {tpl.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f4ece0] text-[#6d6152] break-all">
                      slug: {tpl.slug}
                    </span>
                    {tpl.is_featured && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fbeee8] text-[#8c3b24] border border-[#eed3c8]">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#6a5e4f] leading-relaxed mb-2.5">
                    {tpl.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#7a6d5c]">
                    <span className="capitalize font-semibold text-[#483d31]">
                      Kategori: {tpl.category}
                    </span>
                    <span>•</span>
                    <span>{tpl.default_config.totalPages} Halaman</span>
                  </div>
                </div>

                {/* Status Toggle & Kontrol Aksi Bawah Mobile */}
                <div className="flex items-center justify-between md:justify-end gap-4 pt-3.5 border-t border-[#f2ebe0] md:border-t-0 md:pt-0 shrink-0">
                  <div className="text-left md:text-right">
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
                    className="p-2 sm:p-2.5 min-w-[44px] min-h-[44px] rounded-xl bg-[#f5ede0] hover:bg-[#eae0d0] text-[#554737] transition flex items-center justify-center active:scale-95"
                    title="Ganti status aktif / nonaktif"
                    aria-label={`Ubah status ${tpl.title}`}
                  >
                    {tpl.is_active ? (
                      <ToggleRight className="w-7 h-7 text-[#4b6958]" />
                    ) : (
                      <ToggleLeft className="w-7 h-7 text-[#9a8d7d]" />
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
