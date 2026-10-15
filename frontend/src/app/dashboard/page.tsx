"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Album } from "@/lib/types";
import { BookOpen, Plus, Sparkles, LogOut, ExternalLink, Trash2 } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        // Tampilkan data simulasi jika belum menghubungkan akun Supabase nyata
        setUser({ email: "calon.suami@studio.com", user_metadata: { full_name: "Calon Suami" } });
        setAlbums([
          {
            id: "sample-album-1",
            user_id: "local-user",
            title: "Album Calon Istri: Menuju Akad 2026",
            person_name: "Calon Istriku",
            special_date: "2026-06-18",
            status: "draft",
            pages_data: {},
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }
        ]);
        setLoading(false);
        return;
      }

      setUser(user);

      const { data } = await supabase
        .from("albums")
        .select("*")
        .order("updated_at", { ascending: false });

      if (data) setAlbums(data);
      setLoading(false);
    }

    loadData();
  }, [router]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">
      {/* Header Dashboard */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-6 py-4 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#4b6958] text-[#fffdf5] flex items-center justify-center font-serif text-lg font-bold">
              📖
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-[#3d3328]">Scrapbook Studio</span>
              <span className="block text-[10px] uppercase tracking-wider text-[#7e7261]">Dashboard Pengguna</span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-[#5a4e40] hidden sm:inline">
              Halo, {user?.user_metadata?.full_name || user?.email || "Kreator"}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-lg border border-[#d6cab8] hover:bg-[#f6eee2] text-xs font-semibold text-[#665a4b] transition flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto w-full px-6 py-10 flex-1">
        {/* Banner Sambutan & Aksi */}
        <div className="bg-[#f2ece0] rounded-3xl p-6 sm:p-8 border border-[#dcd1be] mb-10 flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbeee8] border border-[#eed3c8] text-[11px] font-bold text-[#7a3a28] mb-3">
              <Sparkles className="w-3 h-3 text-[#9f495e]" />
              <span>Koleksi Karya Pribadi</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#392f25]">
              Album Scrapbook Kenanganmu
            </h1>
            <p className="text-xs sm:text-sm text-[#6c5f4f] mt-2 leading-relaxed">
              Lanjutkan proyek album yang sedang kamu buat, buka pratinjau live, atau pilih template baru untuk momen istimewa lainnya.
            </p>
          </div>

          <Link
            href="/#templates"
            className="px-5 py-3 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Buat Album dari Template</span>
          </Link>
        </div>

        {/* Daftar Proyek Album */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-serif text-xl font-bold text-[#3b3127]">Daftar Album Aktif</h2>
            <span className="text-xs text-[#7a6e5e]">{albums.length} Album Tersimpan</span>
          </div>

          {loading ? (
            <div className="py-20 text-center text-xs text-[#776b5b]">Memuat album kenangan...</div>
          ) : albums.length === 0 ? (
            <div className="bg-[#fffdf8] rounded-3xl border border-[#ded5c4] p-12 text-center max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#f6eee2] text-[#7a6e5e] flex items-center justify-center text-2xl mx-auto mb-4">
                📑
              </div>
              <h3 className="font-serif text-lg font-bold text-[#3e342a]">Belum Ada Album</h3>
              <p className="text-xs text-[#6f6354] mt-1.5 mb-6">
                Mulai buat album pertamamu dengan memilih salah satu template yang tersedia.
              </p>
              <Link
                href="/#templates"
                className="px-5 py-2.5 bg-[#4b6958] text-[#fffdf5] rounded-xl text-xs font-bold shadow-xs hover:bg-[#385342] transition inline-flex items-center gap-2"
              >
                <span>Pilih Template</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album) => (
                <div
                  key={album.id}
                  className="bg-[#fffdf8] rounded-2xl border border-[#ded5c4] p-5 shadow-xs hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#fbeee8] border border-[#eed3c8] text-[10px] font-bold text-[#7a3a28]">
                        {album.status.toUpperCase()}
                      </span>
                      <span className="text-[11px] text-[#867969]">
                        {new Date(album.updated_at).toLocaleDateString("id-ID")}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#3a3026] leading-snug mb-1">
                      {album.title}
                    </h3>
                    <p className="text-xs text-[#6e6252] mb-4">
                      Untuk: <span className="font-semibold text-[#403529]">{album.person_name}</span>
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#eee7da] flex items-center justify-between gap-2">
                    <Link
                      href="/preview/romantic-islamic-keepsake"
                      className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-lg text-xs font-bold transition flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Buka Editor</span>
                    </Link>
                    <Link
                      href="/preview/romantic-islamic-keepsake"
                      className="px-3 py-2 bg-[#f6eee2] hover:bg-[#ede3d3] text-[#554738] rounded-lg text-xs font-semibold transition flex items-center gap-1"
                      title="Lihat Pratinjau Publik"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
