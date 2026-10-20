"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Album } from "@/lib/types";
import { createSampleAlbum, normalizeSampleAlbum } from "@/lib/sample-album";
import {
  ArrowLeft,
  BookOpen,
  Check,
  Cloud,
  CloudUpload,
  Eye,
  Loader2,
  Printer,
  Save,
  Sparkles,
} from "lucide-react";

export default function AlbumEditorPage() {
  const params = useParams();
  const router = useRouter();
  const albumId = params?.id as string;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [album, setAlbum] = useState<Album | null>(null);
  const [albumTitle, setAlbumTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<"idle" | "unsaved" | "saving" | "saved" | "error">("idle");
  const [statusText, setStatusText] = useState("Semua tersimpan");
  const [user, setUser] = useState<any>(null);

  // Buffer state terbaru dari editor scrapbook
  const latestDataRef = useRef<{
    name: string;
    birthday: string;
    pages: Record<string, any>;
    photoUrls: Record<string, string>;
    presentationCopy: Record<string, any> | null;
    digitalBookUrl?: string;
  }>({
    name: "Calon Istriku",
    birthday: "2026-06-18",
    pages: {},
    photoUrls: {},
    presentationCopy: null,
    digitalBookUrl: "",
  });

  // Muat data album dari Supabase atau localStorage fallback
  useEffect(() => {
    async function fetchAlbum() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      if (user && albumId && !albumId.startsWith("local-")) {
        const { data, error } = await supabase
          .from("albums")
          .select("*")
          .eq("id", albumId)
          .single();

        if (data && !error) {
          const normalizedData = normalizeSampleAlbum(data);
          setAlbum(normalizedData);
          setAlbumTitle(normalizedData.title);
          latestDataRef.current = {
            name: normalizedData.person_name || "Calon Istriku",
            birthday: normalizedData.special_date || "",
            pages: normalizedData.pages_data?.pages || {},
            photoUrls: normalizedData.pages_data?.photoUrls || {},
            presentationCopy: normalizedData.pages_data?.presentationCopy || null,
            digitalBookUrl: normalizedData.pages_data?.digitalBookUrl || "",
          };
          setLoading(false);
          return;
        }
      }

      // Fallback ke penyimpanan lokal jika offline atau album lokal
      const savedLocal = localStorage.getItem(`local_album_${albumId}`);
      if (savedLocal) {
        try {
          const parsed = JSON.parse(savedLocal);
          const normalizedParsed = normalizeSampleAlbum(parsed);
          setAlbum(normalizedParsed);
          setAlbumTitle(normalizedParsed.title);
          latestDataRef.current = {
            name: normalizedParsed.person_name || "Calon Istriku",
            birthday: normalizedParsed.special_date || "",
            pages: normalizedParsed.pages_data?.pages || {},
            photoUrls: normalizedParsed.pages_data?.photoUrls || {},
            presentationCopy: normalizedParsed.pages_data?.presentationCopy || null,
            digitalBookUrl: normalizedParsed.pages_data?.digitalBookUrl || "",
          };
          setLoading(false);
          return;
        } catch (e) {
          console.error(e);
        }
      }

      // Default mock album jika belum ada record
      const defaultAlbum: Album = albumId === "sample-album-1"
        ? createSampleAlbum()
        : {
            id: albumId,
            user_id: user?.id || "local-user",
            title: "Album Calon Istri: Menuju Akad",
            person_name: "Calon Istriku",
            special_date: "2026-06-18",
            status: "draft",
            pages_data: {},
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
      setAlbum(defaultAlbum);
      setAlbumTitle(defaultAlbum.title);
      latestDataRef.current = {
        name: defaultAlbum.person_name,
        birthday: defaultAlbum.special_date || "",
        pages: defaultAlbum.pages_data?.pages || {},
        photoUrls: defaultAlbum.pages_data?.photoUrls || {},
        presentationCopy: defaultAlbum.pages_data?.presentationCopy || null,
        digitalBookUrl: defaultAlbum.pages_data?.digitalBookUrl || "",
      };
      setLoading(false);
    }

    if (albumId) fetchAlbum();
  }, [albumId]);

  // Fungsi mengirimkan data album yang ada ke iframe engine
  const syncDataToIframe = useCallback(() => {
    if (!iframeRef.current?.contentWindow) return;
    const current = latestDataRef.current;
    iframeRef.current.contentWindow.postMessage(
      {
        type: "LOAD_SCRAPBOOK_DATA",
        payload: {
          name: current.name,
          birthday: current.birthday,
          pages: current.pages,
          photoUrls: current.photoUrls,
          presentationCopy: current.presentationCopy,
          digitalBookUrl: current.digitalBookUrl || "",
          albumId: album?.id,
          albumTitle,
        },
      },
      "*"
    );
  }, [album?.id, albumTitle]);

  useEffect(() => {
    if (!album) return;
    const timer = window.setTimeout(syncDataToIframe, 400);
    return () => window.clearTimeout(timer);
  }, [album, syncDataToIframe]);

  // Fungsi simpan perubahan ke database Supabase
  const handleSaveToDatabase = async () => {
    if (!album) return;
    setSaveStatus("saving");
    setStatusText("Menyimpan ke Database...");

    const currentData = latestDataRef.current;
    const supabase = createClient();

    const updatedPagesData = {
      theme: "vintage-islamic",
      totalPages: 5,
      pages: currentData.pages,
      photoUrls: currentData.photoUrls,
      digitalBookUrl: currentData.digitalBookUrl || "",
      ...(currentData.presentationCopy ? { presentationCopy: currentData.presentationCopy } : {}),
    };

    let savedSuccessfully = false;

    // Jika user terhubung ke Supabase
    if (user && album.id && !album.id.startsWith("local-")) {
      const { error } = await supabase
        .from("albums")
        .update({
          title: albumTitle || currentData.name || "Album Scrapbook",
          person_name: currentData.name || "Calon Istriku",
          special_date: currentData.birthday || null,
          pages_data: updatedPagesData,
          updated_at: new Date().toISOString(),
        })
        .eq("id", album.id);

      if (!error) {
        savedSuccessfully = true;
      } else {
        console.warn("Gagal update ke Supabase, menyimpan lokal sebagai cadangan:", error.message);
      }
    }

    // Selalu simpan juga ke localStorage sebagai cadangan offline
    const updatedAlbum: Album = {
      ...album,
      title: albumTitle || currentData.name,
      person_name: currentData.name,
      special_date: currentData.birthday,
      pages_data: updatedPagesData,
      updated_at: new Date().toISOString(),
    };
    localStorage.setItem(`local_album_${album.id}`, JSON.stringify(updatedAlbum));
    setAlbum(updatedAlbum);

    if (savedSuccessfully || !user) {
      setSaveStatus("saved");
      setStatusText(savedSuccessfully ? "Tersimpan di Supabase Cloud" : "Tersimpan di Browser Lokal");

      // Beritahu iframe bahwa penyimpanan sukses
      iframeRef.current?.contentWindow?.postMessage(
        { type: "SCRAPBOOK_SAVE_STATUS", payload: { status: "saved" } },
        "*"
      );

      setTimeout(() => {
        setSaveStatus("idle");
        setStatusText("Semua tersimpan");
      }, 3000);
    } else {
      setSaveStatus("error");
      setStatusText("Gagal menyimpan ke server");
      iframeRef.current?.contentWindow?.postMessage(
        { type: "SCRAPBOOK_SAVE_STATUS", payload: { status: "error" } },
        "*"
      );
    }
  };

  // Handler event listener postMessage dari iframe
  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object") return;
      const { type, payload } = event.data;

      // 1. Iframe siap menerima data awal
      if (type === "SCRAPBOOK_READY") {
        syncDataToIframe();
      }

      // 2. Data berubah karena diedit pengguna di iframe
      if (type === "SCRAPBOOK_DATA_CHANGED" && payload) {
        latestDataRef.current = {
          name: payload.name || latestDataRef.current.name,
          birthday: payload.birthday !== undefined ? payload.birthday : latestDataRef.current.birthday,
          pages: payload.pages || latestDataRef.current.pages,
          photoUrls: payload.photoUrls || latestDataRef.current.photoUrls,
          presentationCopy: payload.presentationCopy || latestDataRef.current.presentationCopy,
          digitalBookUrl: payload.digitalBookUrl !== undefined ? payload.digitalBookUrl : latestDataRef.current.digitalBookUrl,
        };
        setSaveStatus("unsaved");
        setStatusText("Ada perubahan belum disimpan");
      }

      // 3. Permintaan simpan dari tombol di dalam iframe
      if (type === "SCRAPBOOK_SAVE_REQUEST") {
        if (payload) {
          latestDataRef.current = {
            name: payload.name || latestDataRef.current.name,
            birthday: payload.birthday !== undefined ? payload.birthday : latestDataRef.current.birthday,
            pages: payload.pages || latestDataRef.current.pages,
            photoUrls: payload.photoUrls || latestDataRef.current.photoUrls,
            presentationCopy: payload.presentationCopy || latestDataRef.current.presentationCopy,
            digitalBookUrl: payload.digitalBookUrl !== undefined ? payload.digitalBookUrl : latestDataRef.current.digitalBookUrl,
          };
        }
        await handleSaveToDatabase();
      }

      // 4. Pengguna memilih foto baru untuk polaroid/photobox
      if (type === "SCRAPBOOK_PHOTO_SELECTED") {
        const { slot, file, dataUrl } = event.data;
        if (!slot) return;

        // Pasang dataUrl lokal ke buffer terlebih dahulu
        if (dataUrl) {
          latestDataRef.current.photoUrls[String(slot)] = dataUrl;
          setSaveStatus("unsaved");
          setStatusText("Foto baru dipilih (belum disimpan)");
        }

        // Jika terhubung ke Supabase, unggah file foto ke Supabase Storage
        const supabase = createClient();
        if (user && file && album?.id && !album.id.startsWith("local-")) {
          try {
            setSaveStatus("saving");
            setStatusText("Mengunggah foto ke Supabase Storage...");

            const ext = file.name ? file.name.split(".").pop() : "jpg";
            const filePath = `${user.id}/${album.id}/slot_${slot}_${Date.now()}.${ext}`;

            const { data: uploadData, error: uploadErr } = await supabase.storage
              .from("scrapbook-photos")
              .upload(filePath, file, { upsert: true });

            if (!uploadErr && uploadData) {
              const { data: { publicUrl } } = supabase.storage
                .from("scrapbook-photos")
                .getPublicUrl(filePath);

              if (publicUrl) {
                latestDataRef.current.photoUrls[String(slot)] = publicUrl;

                // Kabari iframe URL permanen dari Supabase Storage
                iframeRef.current?.contentWindow?.postMessage(
                  {
                    type: "SCRAPBOOK_PHOTO_UPLOADED",
                    payload: { slot, url: publicUrl },
                  },
                  "*"
                );

                // Auto-save album ke database dengan URL baru
                await handleSaveToDatabase();
              }
            } else {
              console.warn("Gagal unggah foto ke Supabase Storage, menggunakan format data lokal:", uploadErr?.message);
            }
          } catch (err) {
            console.error("Error uploading photo:", err);
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [album, user, albumTitle, syncDataToIframe]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#faf7f0] flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#4b6958] animate-spin mb-3" />
        <p className="text-xs text-[#706454] font-semibold">Membuka editor album kenangan...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f0] flex flex-col">
      {/* Top Bar Editor */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-4 sm:px-6 py-2.5 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Sisi Kiri: Navigasi & Judul Album */}
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
                <input
                  type="text"
                  value={albumTitle}
                  onChange={(e) => {
                    setAlbumTitle(e.target.value);
                    setSaveStatus("unsaved");
                    setStatusText("Judul diubah (belum disimpan)");
                  }}
                  className="font-serif text-sm sm:text-base font-bold text-[#3d3328] bg-transparent border-b border-transparent hover:border-[#cfc2ae] focus:border-[#4b6958] focus:outline-hidden px-1 transition"
                  title="Klik untuk mengubah judul album"
                  placeholder="Beri Judul Album..."
                />
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fbeee8] text-[#7a3a28] border border-[#eed3c8] hidden md:inline">
                  Mode Editor
                </span>
              </div>
              <span className="block text-[10px] text-[#7e7261] px-1">
                Untuk: <strong className="text-[#45392d]">{latestDataRef.current.name}</strong>
              </span>
            </div>
          </div>

          {/* Sisi Kanan: Status Simpan & Aksi */}
          <div className="flex items-center gap-2.5">
            {/* Status Penyimpanan */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f6efe4] border border-[#e2d6c3] text-[11px] font-semibold text-[#5a4d3e]">
              {saveStatus === "saving" ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 text-[#4b6958] animate-spin" />
                  <span>Menyimpan...</span>
                </>
              ) : saveStatus === "unsaved" ? (
                <>
                  <CloudUpload className="w-3.5 h-3.5 text-[#b06727]" />
                  <span className="text-[#874b17]">{statusText}</span>
                </>
              ) : saveStatus === "saved" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#2e533d]" />
                  <span className="text-[#2e533d]">{statusText}</span>
                </>
              ) : (
                <>
                  <Cloud className="w-3.5 h-3.5 text-[#6c5f50]" />
                  <span>{statusText}</span>
                </>
              )}
            </div>

            {/* Tombol Buka Mode Buku Digital Duplex */}
            <button
              onClick={() => {
                iframeRef.current?.contentWindow?.postMessage(
                  { type: "SWITCH_VIEW", payload: { view: "book" } },
                  "*"
                );
              }}
              className="px-3.5 py-2 bg-[#f4ece0] hover:bg-[#eadecc] text-[#423528] border border-[#dcd0bf] rounded-xl text-xs font-bold transition flex items-center gap-1.5"
              title="Buka tampilan buku digital interaktif duplex dengan efek lembaran buka-tutup"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#4b6958]" />
              <span>Buku Digital 3D</span>
            </button>

            {/* Tombol Simpan ke Database */}
            <button
              onClick={handleSaveToDatabase}
              disabled={saveStatus === "saving"}
              className="px-4 py-2 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5 disabled:opacity-60"
              title="Simpan semua tulisan, tata letak, dan foto ke database"
            >
              {saveStatus === "saving" ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Save className="w-3.5 h-3.5" />
              )}
              <span>Simpan ke Database</span>
            </button>

            {/* Tombol Pratinjau */}
            <Link
              href={`/preview/romantic-islamic-keepsake?albumId=${album?.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#fffdf8] hover:bg-[#f6eee2] text-[#4b4034] border border-[#d6caba] rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
              title="Buka pratinjau publik di tab baru"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Pratinjau</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Frame Engine Scrapbook */}
      <main className="flex-1 w-full bg-[#f5f2eb]">
        <iframe
          ref={iframeRef}
          src="/engine.html"
          onLoad={() => {
            // Beri sedikit jeda agar DOM di dalam iframe siap lalu kirim data
            setTimeout(syncDataToIframe, 400);
          }}
          className="w-full h-[calc(100vh-61px)] border-0"
          title="Scrapbook Interactive Studio"
        />
      </main>
    </div>
  );
}
