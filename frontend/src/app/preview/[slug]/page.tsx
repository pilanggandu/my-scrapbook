"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { createSampleAlbum, normalizeSampleAlbum } from "@/lib/sample-album";
import { ArrowLeft, BookOpen, Edit3, Sparkles } from "lucide-react";

function TemplatePreviewContent() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = (params?.slug as string) || "romantic-islamic-keepsake";
  const albumId = searchParams.get("albumId");

  const [user, setUser] = useState<any>(null);
  const [albumData, setAlbumData] = useState<any>(null);

  const templateNames: Record<string, string> = {
    "romantic-islamic-keepsake": "Romantic Islamic Keepsake",
    "vintage-travel-story": "Vintage Wanderlust & Tale",
    "minimalist-linen-journal": "Minimalist Linen Journal",
  };

  const currentTitle = albumData?.title || templateNames[slug] || "Romantic Islamic Keepsake";

  useEffect(() => {
    async function loadContext() {
      try {
        const meRes = await fetch("/api/auth/me");
        if (meRes.ok) {
          const meData = await meRes.json();
          setUser(meData.user);
        }
      } catch (err) {
        console.error("Auth check error:", err);
      }

      if (albumId) {
        if (!albumId.startsWith("local-") && albumId !== "sample-album-1") {
          try {
            const res = await fetch(`/api/albums/${albumId}`);
            if (res.ok) {
              const data = await res.json();
              if (data.album) {
                setAlbumData(normalizeSampleAlbum(data.album));
                return;
              }
            }
          } catch (e) {
            console.error("Preview album fetch error:", e);
          }
        }

        const local = localStorage.getItem(`local_album_${albumId}`);
        if (local) {
          try {
            setAlbumData(normalizeSampleAlbum(JSON.parse(local)));
            return;
          } catch (e) {
            console.error(e);
          }
        }

        if (albumId === "sample-album-1") {
          setAlbumData(createSampleAlbum());
        }
      }
    }

    loadContext();
  }, [albumId]);

  const isBookView = searchParams.get("view") === "book";

  const syncAlbumToIframe = useCallback(() => {
    if (!albumData || !iframeRef.current?.contentWindow) return;
    iframeRef.current.contentWindow.postMessage(
      {
        type: "LOAD_SCRAPBOOK_DATA",
        payload: {
          name: albumData.person_name,
          birthday: albumData.special_date,
          pages: albumData.pages_data?.pages || {},
          photoUrls: albumData.pages_data?.photoUrls || {},
          presentationCopy: albumData.pages_data?.presentationCopy || null,
          digitalBookUrl: albumData.pages_data?.digitalBookUrl || "",
          albumId: albumData.id,
          albumTitle: albumData.title,
        },
      },
      "*"
    );

    if (isBookView) {
      iframeRef.current.contentWindow.postMessage(
        { type: "SWITCH_VIEW", payload: { view: "book" } },
        "*"
      );
    }
  }, [albumData, isBookView]);

  useEffect(() => {
    const handleMsg = (e: MessageEvent) => {
      if (e.data?.type === "SCRAPBOOK_READY") {
        syncAlbumToIframe();
      }
    };
    window.addEventListener("message", handleMsg);
    return () => window.removeEventListener("message", handleMsg);
  }, [syncAlbumToIframe]);

  useEffect(() => {
    if (!albumData) return;
    const timer = window.setTimeout(syncAlbumToIframe, 300);
    return () => window.clearTimeout(timer);
  }, [albumData, syncAlbumToIframe]);

  const handleUseTemplate = async () => {
    if (!user) {
      router.push(`/register?template=${slug}`);
      return;
    }

    const defaultPagesData = {
      theme: "vintage-islamic",
      totalPages: 5,
      pages: {
        "0": { titleCutout: "OuR StOrY", subtitle: "A Little Keepsake for My Future Wife", captions: ["foto sampul terbaik berdua"] },
        "1": { themeTitle: "Hari Istimewa", layout: "single-hero", captions: ["senyum manis calon istri tercinta", "the bride to be ♡", "selamat ulang tahun, bidadariku"] },
        "2": { themeTitle: "Perjalanan Cinta", layout: "duo-overlap", captions: ["cerita kencan pertama kita", "siap bersanding di pelaminan", "langkah demi langkah berdua"], ticketRoute: "Dari awal perjumpaan hingga melangkah mantap menuju akad nikah" },
        "3": { themeTitle: "Surat Calon Istri", layout: "single-letter", captions: ["wanita yang kupilih seumur hidup", "pelukan terhangat calon istri", "tatapan tulus menuju masa depan"], letterText: "Selamat ulang tahun calon istriku tersayang. Terima kasih sudah menerima kekuranganku dan memilihku. Bulan depan, dengan izin Allah, saat ijab kabul terucap di hadapan wali dan saksi, kita mengikat mitsaqan ghalidza." },
        "4": { themeTitle: "Kado Pernikahan", layout: "duo-overlap", captions: ["sepatu & baju set maroon untukmu", "buket bunga untuk calon istriku", "tiup lilin ultah terakhir sebelum nikah"], giftCardText: "Sepatu & baju set maroon, buket bunga mekar, dan birthday cake spesial untuk calon istri tercantikku." },
        "5": { themeTitle: "Akad & Doa", layout: "single-hero", captions: ["menatap masa depan berdua", "doa terbaik untuk keluarga kecil kita", "bismillah menuju hari akad nikah"] }
      },
      photoUrls: {
        "9": "images/gift_maroon_shoes.svg",
        "10": "images/gift_maroon_dress.svg",
        "11": "images/gift_flower_bouquet.svg"
      }
    };

    try {
      const res = await fetch("/api/albums", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Album Scrapbook Calon Istri",
          person_name: "Calon Istriku",
          special_date: "2026-06-18",
          template_slug: slug,
          pages_data: defaultPagesData,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.album?.id) {
          router.push(`/editor/${data.album.id}`);
          return;
        }
      }
    } catch (e) {
      console.error("Gagal membuat album di PostgreSQL:", e);
    }
    router.push("/dashboard");
  };

  if (isBookView) {
    return (
      <main className="fixed inset-0 w-screen h-screen h-[100dvh] overflow-hidden bg-[#181410] z-50">
        <iframe
          ref={iframeRef}
          src="/engine.html?view=book"
          onLoad={() => {
            if (albumData) setTimeout(syncAlbumToIframe, 300);
          }}
          className="w-full h-full border-0"
          title="Scrapbook 3D Book View"
        />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">
      {/* Top Bar Preview */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-6 py-3.5 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={user && albumId ? `/editor/${albumId}` : "/"}
              className="w-8 h-8 rounded-lg bg-[#f6eee2] hover:bg-[#ede3d3] text-[#554738] flex items-center justify-center transition"
              title={user && albumId ? "Kembali ke Editor" : "Kembali ke Beranda"}
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-[#3d3328]">
                  {currentTitle}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8f2ec] text-[#2e533d] border border-[#c5dcce]">
                  {albumId ? "Pratinjau Album Pribadi" : "Mode Pratinjau Template"}
                </span>
              </div>
              <span className="block text-[10px] uppercase tracking-wider text-[#7e7261]">
                {albumId ? `Menampilkan album untuk: ${albumData?.person_name || "Calon Istri"}` : "Pratinjau interaktif tata letak & lembar cetak scrapbook"}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                iframeRef.current?.contentWindow?.postMessage(
                  { type: "SWITCH_VIEW", payload: { view: "book" } },
                  "*"
                );
              }}
              className="px-3.5 py-2 bg-[#f4ece0] hover:bg-[#eadecc] text-[#423528] border border-[#dcd0bf] rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              title="Buka buku digital interaktif duplex dengan efek lembaran buka-tutup"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#4b6958]" />
              <span>Buku Digital 3D</span>
            </button>

            {albumId && user ? (
              <Link
                href={`/editor/${albumId}`}
                className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Buka di Editor</span>
              </Link>
            ) : albumId && !user ? (
              <Link
                href={`/register?template=${slug}`}
                className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Buat Scrapbook Serupa</span>
              </Link>
            ) : (
              <button
                onClick={handleUseTemplate}
                className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Gunakan Template Ini</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Frame Engine Scrapbook Lengkap */}
      <main className="flex-1 w-full bg-[#f5f2eb]">
        <iframe
          ref={iframeRef}
          src={isBookView ? "/engine.html?view=book" : "/engine.html"}
          onLoad={() => {
            if (albumData) setTimeout(syncAlbumToIframe, 300);
          }}
          className="w-full h-[calc(100vh-61px)] border-0"
          title="Scrapbook Engine Live Preview"
        />
      </main>
    </div>
  );
}

export default function TemplatePreviewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf7f0] flex items-center justify-center text-xs text-[#736553]">Memuat pratinjau...</div>}>
      <TemplatePreviewContent />
    </Suspense>
  );
}
