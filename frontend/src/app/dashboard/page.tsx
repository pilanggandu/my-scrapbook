"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Album } from "@/lib/types";
import { createSampleAlbum, normalizeSampleAlbum } from "@/lib/sample-album";
import {
  BookOpen,
  Plus,
  Sparkles,
  LogOut,
  ExternalLink,
  Trash2,
  Calendar,
  Heart,
  Clock,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const meRes = await fetch("/api/auth/me");
        const meData = await meRes.json();
        const activeUser = meData.user;
        setUser(activeUser);

        if (activeUser) {
          const albumsRes = await fetch("/api/albums");
          if (albumsRes.ok) {
            const albumsData = await albumsRes.json();
            if (albumsData.albums && albumsData.albums.length > 0) {
              setAlbums(albumsData.albums.map(normalizeSampleAlbum));
              setLoading(false);
              return;
            }
          }
        }

        const localAlbums: Album[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith("local_album_")) {
            try {
              const item = JSON.parse(localStorage.getItem(key) || "{}");
              if (item.id) localAlbums.push(normalizeSampleAlbum(item));
            } catch (e) {
              console.error(e);
            }
          }
        }

        if (localAlbums.length > 0) {
          setAlbums(localAlbums);
        } else {
          setAlbums([createSampleAlbum()]);
        }
      } catch (err) {
        console.error("Dashboard loadData error:", err);
        setAlbums([createSampleAlbum()]);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [router]);

  const handleCreateAlbum = async () => {
    setCreating(true);
    const defaultPagesData = {
      theme: "vintage-islamic",
      totalPages: 5,
      pages: {
        "0": { titleCutout: "OuR StOrY", subtitle: "A Little Keepsake for My Future Wife", captions: ["foto sampul terbaik berdua"] },
        "1": { themeTitle: "Hari Istimewa", layout: "single-hero", captions: ["senyum manis calon istri tercinta", "the bride to be ♡", "selamat ulang tahun, bidadariku"] },
        "2": { themeTitle: "Perjalanan Cinta", layout: "duo-overlap", captions: ["cerita kencan pertama kita", "siap bersanding di pelaminan", "langkah demi langkah berdua"], ticketRoute: "Dari awal perjumpaan hingga melangkah mantap menuju akad nikah" },
        "3": { themeTitle: "Surat Calon Istri", layout: "single-letter", captions: ["wanita yang kupilih seumur hidup", "pelukan terhangat calon istri", "tatapan tulus menuju masa depan"], letterText: "Selamat ulang tahun calon istriku tersayang. Terima kasih sudah menerima kekuranganku dan memilihku. Bulan depan, dengan izin Allah, saat ijab kabul terucap di hadapan wali dan saksi, kita mengikat mitsaqan ghalidza." },
        "4": { themeTitle: "Kado Pernikahan", layout: "duo-overlap", captions: ["sepatu & baju set maroon untukmu", "buket bunga untuk calon istriku", "tiup lilin ultah terakhir sebelum nikah"], giftCardText: "Sepatu & baju set maroon, buket bunga mekar, dan birthday cake spesial untuk calon istri tercantikku." },
        "5": { themeTitle: "Akad & Doa", layout: "single-hero", captions: ["menatap masa depan berdua", "doa terbaik untuk keluarga kecil kita", "bismillah menuju hari akad nikah"] },
      },
      photoUrls: {
        "9": "images/gift_maroon_shoes.svg",
        "10": "images/gift_maroon_dress.svg",
        "11": "images/gift_flower_bouquet.svg",
      },
    };

    if (user && user.id && !user.id.startsWith("local-")) {
      try {
        const res = await fetch("/api/albums", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: "Album Calon Istri: Menuju Akad",
            person_name: "Calon Istriku",
            special_date: "2026-06-18",
            template_slug: "romantic-islamic-keepsake",
            pages_data: defaultPagesData,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          router.push(`/editor/${data.album.id}`);
          return;
        }
      } catch (e) {
        console.error("Create album error:", e);
      }
    }

    // Fallback penyimpanan lokal
    const localId = "local-" + Date.now();
    const newAlbum: Album = {
      id: localId,
      user_id: user?.id || "local-user",
      title: "Album Calon Istri: Menuju Akad",
      person_name: "Calon Istriku",
      special_date: "2026-06-18",
      status: "draft",
      pages_data: defaultPagesData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    localStorage.setItem(`local_album_${localId}`, JSON.stringify(newAlbum));
    router.push(`/editor/${localId}`);
  };

  const handleDeleteAlbum = async (albumId: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus album kenangan ini?")) return;
    if (user && !albumId.startsWith("local-") && albumId !== "sample-album-1") {
      try {
        await fetch(`/api/albums/${albumId}`, { method: "DELETE" });
      } catch (e) {
        console.error("Delete album error:", e);
      }
    }
    localStorage.removeItem(`local_album_${albumId}`);
    setAlbums((prev) => prev.filter((a) => a.id !== albumId));
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch (e) {
      console.error("Logout error:", e);
    }
    router.push("/login");
  };

  const userName = user?.user_metadata?.full_name || (user?.email ? user.email.split("@")[0] : "Kreator");
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col font-sans text-[#382e25]">
      {/* 1. HEADER DASHBOARD RESPONSIVE */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-4 sm:px-6 py-3 sm:py-3.5 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Logo Studio */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#4b6958] text-[#fffdf5] flex items-center justify-center shadow-xs transition group-hover:bg-[#385342] shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <span className="font-serif text-base sm:text-lg font-bold text-[#342a20] tracking-tight block leading-tight truncate">
                Scrapbook Studio
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#7d6f5d] block truncate">
                Koleksi &amp; Album Pribadi
              </span>
            </div>
          </Link>

          {/* User Profile, Admin Link & Logout */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href="/admin"
              className="px-2.5 sm:px-3 py-1.5 min-h-[38px] sm:min-h-[40px] rounded-xl bg-[#fee8de]/70 hover:bg-[#fee8de] border border-[#f5c9b6] text-[11px] sm:text-xs font-bold text-[#8c3b24] transition flex items-center gap-1.5 active:scale-95"
              title="Buka Admin Panel (Kelola Template)"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Admin</span>
            </Link>

            <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 min-h-[38px] sm:min-h-[40px] rounded-xl bg-[#f6eee2] border border-[#dcd0bf]">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#4b6958] text-[#fffdf5] flex items-center justify-center text-[10px] sm:text-xs font-bold font-serif shrink-0">
                {userInitial}
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-[#4e4133] max-w-20 sm:max-w-36 truncate hidden xs:inline sm:inline">
                {userName}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 sm:px-3 sm:py-1.5 min-h-[38px] sm:min-h-[40px] min-w-[38px] sm:min-w-auto rounded-xl border border-[#d6cab8] hover:bg-[#f6eee2] text-xs font-semibold text-[#665a4b] transition flex items-center justify-center gap-1.5 active:scale-95"
              title="Keluar dari akun"
              aria-label="Keluar dari akun"
            >
              <LogOut className="w-4 h-4 sm:w-3.5 sm:h-3.5" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT RESPONSIVE */}
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex-1">
        {/* Banner Selamat Datang */}
        <section className="bg-[#f3ede1] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#ded3bf] mb-8 relative overflow-hidden shadow-2xs">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf5ed] border border-[#eed7cb] text-[11px] font-bold text-[#7a3a28] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#9f495e]" />
                <span>Studio Kreatif Scrapbook</span>
              </div>

              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#2e241a] tracking-tight leading-tight">
                Selamat datang kembali, {userName}
              </h1>

              <p className="text-xs sm:text-sm text-[#665949] mt-2 leading-relaxed">
                Kelola lembaran album kenanganmu, buka editor kanvas interaktif, atau buat album baru dengan kit cetak artisan lengkap.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 sm:mt-5 text-[11px] text-[#6d6050] font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4b6958] shrink-0" />
                  <span>{albums.length} Album Tersedia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#4b6958] shrink-0" />
                  <span>Tersimpan di Cloud Database</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start lg:justify-end shrink-0">
              <button
                onClick={handleCreateAlbum}
                disabled={creating}
                className="w-full sm:w-auto px-5 py-3 sm:py-3.5 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs sm:text-sm font-bold shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-60 min-h-[44px] active:scale-95"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{creating ? "Membuat Album..." : "Buat Album Baru"}</span>
              </button>
            </div>
          </div>
        </section>

        {/* 3. DAFTAR ALBUM AKTIF */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#30261d] tracking-tight">
                Daftar Album Kenangan
              </h2>
              <span className="text-xs text-[#7d7060]">
                Pilih album untuk membuka editor atau melihat buku digital 3D
              </span>
            </div>
            <span className="self-start sm:self-auto text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#f4ece0] text-[#554738] border border-[#dcd1bf]">
              Total: {albums.length}
            </span>
          </div>

          {loading ? (
            <div className="py-24 text-center">
              <div className="w-8 h-8 rounded-full border-2 border-[#4b6958] border-t-transparent animate-spin mx-auto mb-3" />
              <p className="text-xs text-[#706454] font-medium">Memuat daftar album kenangan...</p>
            </div>
          ) : albums.length === 0 ? (
            <div className="bg-[#fffdf8] rounded-2xl sm:rounded-3xl border border-[#ded5c4] p-8 sm:p-12 text-center max-w-md mx-auto shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-[#f6eee2] text-[#4b6958] flex items-center justify-center mx-auto mb-4 border border-[#e2d5c3]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#372d23]">
                Belum Ada Album Kenangan
              </h3>
              <p className="text-xs text-[#6e6252] mt-1.5 mb-6 leading-relaxed">
                Mulai buat album pertamamu dengan template kenangan pernikahan, milad, dan kisah perjalanan cinta.
              </p>
              <button
                onClick={handleCreateAlbum}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#4b6958] text-[#fffdf5] rounded-xl text-xs font-bold shadow-xs hover:bg-[#385342] transition inline-flex items-center justify-center gap-2 min-h-[44px] active:scale-95"
              >
                <Plus className="w-4 h-4" />
                <span>Buat Album Sekarang</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {albums.map((alb) => {
                const dateObj = alb.updated_at ? new Date(alb.updated_at) : null;
                const updatedDateStr = dateObj && !isNaN(dateObj.getTime())
                  ? dateObj.toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })
                  : "Baru saja";

                return (
                  <article
                    key={alb.id}
                    className="bg-[#fffdf8] rounded-2xl border border-[#ded5c4] p-4 sm:p-5 shadow-2xs hover:shadow-sm transition flex flex-col justify-between group"
                  >
                    <div>
                      {/* Status & Tanggal Update */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#eef5f0] border border-[#cbe1d3] text-[10px] font-bold text-[#2e533e]">
                          {(alb.status || "draft").toUpperCase()}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-[#847766]">
                          <Clock className="w-3 h-3 text-[#9b8d7b]" />
                          <span>{updatedDateStr}</span>
                        </div>
                      </div>

                      {/* Header Mini Visual / Kartu Tema */}
                      <div className="p-3 mb-3.5 rounded-xl bg-[#f8f3eb] border border-[#e6dcce] flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#badccd]/50 text-[#305342] flex items-center justify-center shrink-0 text-sm">
                          💍
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-[10px] uppercase font-bold tracking-wider text-[#7b6d5b]">
                            Edisi Spesial 5 Babak
                          </span>
                          <span className="block text-xs font-bold text-[#3a3026] truncate">
                            Romantic Keepsake Kit
                          </span>
                        </div>
                      </div>

                      {/* Judul Album & Penerima */}
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#32281e] leading-snug mb-1 group-hover:text-[#4b6958] transition">
                        {alb.title}
                      </h3>

                      <div className="space-y-1 mt-2 text-xs text-[#6e6252]">
                        <div className="flex items-center gap-1.5">
                          <Heart className="w-3.5 h-3.5 text-[#9f495e] shrink-0" />
                          <span>
                            Untuk: <strong className="text-[#3a3026]">{alb.person_name}</strong>
                          </span>
                        </div>
                        {alb.special_date && (
                          <div className="flex items-center gap-1.5 text-[11px] text-[#7d705f]">
                            <Calendar className="w-3.5 h-3.5 text-[#867866] shrink-0" />
                            <span>Milad / Akad: {alb.special_date}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tombol Aksi Bawah Responsive */}
                    <div className="pt-3.5 sm:pt-4 mt-4 border-t border-[#eee7da] flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                        <Link
                          href={`/editor/${alb.id}`}
                          className="flex-1 sm:flex-initial px-3.5 py-2.5 min-h-[42px] bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-2xs active:scale-95"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Buka Editor</span>
                        </Link>

                        <Link
                          href={`/preview/romantic-islamic-keepsake?albumId=${alb.id}`}
                          className="px-3 py-2.5 min-h-[42px] bg-[#f6eee2] hover:bg-[#ece1d1] text-[#4d3f32] border border-[#dcd0be] rounded-xl text-xs font-semibold transition flex items-center justify-center gap-1 active:scale-95"
                          title="Lihat Pratinjau Buku Digital 3D"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-[#736554]" />
                          <span className="hidden xs:inline sm:inline">Buku 3D</span>
                          <span className="xs:hidden sm:hidden">3D</span>
                        </Link>
                      </div>

                      <button
                        onClick={() => handleDeleteAlbum(alb.id)}
                        className="p-2.5 min-w-[42px] min-h-[42px] rounded-xl text-[#9c5858] hover:bg-[#fbeae8] transition border border-transparent hover:border-[#f3cec8] flex items-center justify-center active:scale-95 shrink-0"
                        title="Hapus album ini"
                        aria-label="Hapus album"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
