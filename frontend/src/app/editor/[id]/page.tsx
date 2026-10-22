"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Album } from "@/lib/types";
import { createSampleAlbum, normalizeSampleAlbum } from "@/lib/sample-album";
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Cloud,
  CloudUpload,
  Eye,
  FileText,
  Image as ImageIcon,
  Layers,
  LayoutGrid,
  Loader2,
  Maximize2,
  PanelLeftClose,
  PanelLeftOpen,
  Printer,
  Save,
  Settings,
  Sparkles,
  Trash2,
  Upload,
} from "lucide-react";

const LAYOUT_OPTIONS = [
  { id: "single-hero", name: "1 Foto Utama + Mini Snapshot", icon: "🖼️", desc: "1 Foto besar megah dengan polaroid kecil di sudut" },
  { id: "single-clean", name: "1 Foto Penuh Bersih", icon: "📷", desc: "1 Foto besar utuh tanpa aksen snapshot tambahan" },
  { id: "duo-overlap", name: "2 Foto Bertumpuk", icon: "📑", desc: "2 Foto polaroid saling bertumpuk romantis dengan washi tape" },
  { id: "portrait-duo", name: "2 Foto Berdampingan", icon: "👥", desc: "2 Foto portrait tinggi berdiri berdampingan secara rapi" },
  { id: "scatter-trio", name: "3 Foto Tersebar", icon: "✨", desc: "3 Foto tersebar acak dengan sudut dinamis di atas kanvas" },
  { id: "collage-big-small", name: "1 Foto Besar + 2 Mini", icon: "📐", desc: "1 Foto utama di kiri dengan 2 foto kecil bersusun di kanan" },
  { id: "filmstrip", name: "3 Foto Strip Film", icon: "🎞️", desc: "3 Foto berjajar menyerupai rol film sinematik" },
  { id: "triple", name: "3 Foto Kolase Klasik", icon: "📷", desc: "3 Foto polaroid kolase rapi" },
  { id: "photobox-strip", name: "2 Strip Photobox (Double Tape)", icon: "📸", desc: "2 Strip photobox fisik (5x15 cm) dengan panduan double tape" },
];

const PAGES_META = [
  { id: 0, label: "Sampul", title: "Sampul Depan (Cover Keepsake)" },
  { id: 1, label: "Hal 1", title: "Hari Istimewa (Milad)" },
  { id: 2, label: "Hal 2", title: "Perjalanan Cinta (Kencan & Tiket)" },
  { id: 3, label: "Hal 3", title: "Surat Calon Istri" },
  { id: 4, label: "Hal 4", title: "Kado Pernikahan (Maroon Edition)" },
  { id: 5, label: "Hal 5", title: "Akad & Doa Sakinah" },
];

export interface LayoutPhotoMeta {
  count: number;
  labels: string[];
  captionPlaceholders: string[];
}

export function getLayoutPhotoMeta(layoutId: string, pageId: number): LayoutPhotoMeta {
  if (pageId === 0) {
    return {
      count: 1,
      labels: ["Foto Sampul Utama (Cover)"],
      captionPlaceholders: ["Pesan / keterangan singkat di bawah foto sampul..."],
    };
  }

  switch (layoutId) {
    case "single-clean":
    case "single-letter":
      return {
        count: 1,
        labels: ["Foto Utama (Besar Penuh)"],
        captionPlaceholders: ["Keterangan foto polaroid utama..."],
      };

    case "single-hero":
      return {
        count: 2,
        labels: ["Foto 1 (Utama Besar)", "Foto 2 (Mini Overlay Sudut)"],
        captionPlaceholders: [
          "Keterangan foto polaroid utama...",
          "Keterangan foto mini overlay...",
        ],
      };

    case "duo-overlap":
      return {
        count: 2,
        labels: ["Foto 1 (Lapisan Bawah)", "Foto 2 (Overlay di Atas)"],
        captionPlaceholders: [
          "Keterangan foto pertama...",
          "Keterangan foto overlay kedua...",
        ],
      };

    case "portrait-duo":
      return {
        count: 2,
        labels: ["Foto 1 (Kiri Portrait)", "Foto 2 (Kanan Portrait)"],
        captionPlaceholders: [
          "Keterangan foto kiri...",
          "Keterangan foto kanan...",
        ],
      };

    case "photobox-strip":
      return {
        count: 2,
        labels: ["Strip Photobox 1 (Kiri)", "Strip Photobox 2 (Kanan)"],
        captionPlaceholders: [
          "Keterangan strip photobox kiri...",
          "Keterangan strip photobox kanan...",
        ],
      };

    case "scatter-trio":
      return {
        count: 3,
        labels: ["Foto 1 (Utama Miring Kiri)", "Foto 2 (Kanan Atas)", "Foto 3 (Bawah)"],
        captionPlaceholders: [
          "Keterangan foto utama...",
          "Keterangan foto kanan atas...",
          "Keterangan foto bawah...",
        ],
      };

    case "collage-big-small":
      return {
        count: 3,
        labels: ["Foto 1 (Utama Besar Kiri)", "Foto 2 (Mini Kanan Atas)", "Foto 3 (Mini Kanan Bawah)"],
        captionPlaceholders: [
          "Keterangan foto besar kiri...",
          "Keterangan foto mini atas...",
          "Keterangan foto mini bawah...",
        ],
      };

    case "filmstrip":
      return {
        count: 3,
        labels: ["Foto Rol Film 1", "Foto Rol Film 2", "Foto Rol Film 3"],
        captionPlaceholders: [
          "Keterangan strip rol film 1...",
          "Keterangan strip rol film 2...",
          "Keterangan strip rol film 3...",
        ],
      };

    case "triple":
    default:
      return {
        count: 3,
        labels: ["Foto Polaroid 1", "Foto Polaroid 2", "Foto Polaroid 3"],
        captionPlaceholders: [
          "Keterangan foto polaroid 1...",
          "Keterangan foto polaroid 2...",
          "Keterangan foto polaroid 3...",
        ],
      };
  }
}

async function compressImageFile(file: File, maxWidth = 1600, maxHeight = 1600, quality = 0.85): Promise<File> {
  if (typeof window === "undefined") return file;
  if (!file.type.startsWith("image/") || file.type === "image/svg+xml") {
    return file;
  }
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let { width, height } = img;
      if (width > maxWidth || height > maxHeight) {
        if (width / height > maxWidth / maxHeight) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        } else {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(file);
      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (!blob) return resolve(file);
          const compressed = new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), {
            type: "image/jpeg",
            lastModified: Date.now(),
          });
          resolve(compressed);
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(file);
    };
    img.src = url;
  });
}

export default function AlbumEditorPage() {
  const params = useParams();
  const router = useRouter();
  const albumId = params?.id as string;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedPhotoSlot, setSelectedPhotoSlot] = useState<number | string | null>(null);

  const [album, setAlbum] = useState<Album | null>(null);
  const [albumTitle, setAlbumTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState<"idle" | "unsaved" | "saving" | "saved" | "error">("idle");
  const [statusText, setStatusText] = useState("Semua tersimpan");
  const [user, setUser] = useState<any>(null);

  // State Studio Editor
  const [activePage, setActivePage] = useState<number>(1);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSidebarTab, setActiveSidebarTab] = useState<"layout" | "text" | "photos" | "settings">("layout");
  const [currentViewMode, setCurrentViewMode] = useState<"full" | "book" | "base" | "back" | "photos" | "stickers" | "cards">("full");
  const [isPrintMenuOpen, setIsPrintMenuOpen] = useState(false);

  // Buffer state interaktif
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

  const [pagesState, setPagesState] = useState<Record<string, any>>({});
  const [personName, setPersonName] = useState("Calon Istriku");
  const [specialDate, setSpecialDate] = useState("2026-06-18");
  const [digitalBookUrlInput, setDigitalBookUrlInput] = useState("");
  const [notesExpanded, setNotesExpanded] = useState(false);

  // Muat data album dari PostgreSQL atau localStorage
  useEffect(() => {
    async function fetchAlbum() {
      try {
        const meRes = await fetch("/api/auth/me");
        const meData = await meRes.json();
        const activeUser = meData.user;
        setUser(activeUser);

        if (albumId && !albumId.startsWith("local-") && albumId !== "sample-album-1") {
          const res = await fetch(`/api/albums/${albumId}`);
          if (res.ok) {
            const data = await res.json();
            if (data.album) {
              const normalized = normalizeSampleAlbum(data.album);
              setAlbum(normalized);
              setAlbumTitle(normalized.title);
              setPersonName(normalized.person_name || "Calon Istriku");
              setSpecialDate(normalized.special_date || "2026-06-18");
              const pData = normalized.pages_data?.pages || {};
              setPagesState(pData);
              const defaultBookUrl = typeof window !== "undefined"
                ? `${window.location.origin}/preview/romantic-islamic-keepsake?albumId=${albumId}&view=book`
                : "";
              const resolvedBookUrl = normalized.pages_data?.digitalBookUrl || defaultBookUrl;
              setDigitalBookUrlInput(resolvedBookUrl);
              latestDataRef.current = {
                name: normalized.person_name || "Calon Istriku",
                birthday: normalized.special_date || "",
                pages: pData,
                photoUrls: normalized.pages_data?.photoUrls || {},
                presentationCopy: normalized.pages_data?.presentationCopy || null,
                digitalBookUrl: resolvedBookUrl,
              };
              setLoading(false);
              return;
            }
          }
        }
      } catch (err) {
        console.error("Fetch album error:", err);
      }

      // Fallback localStorage
      const savedLocal = localStorage.getItem(`local_album_${albumId}`);
      if (savedLocal) {
        try {
          const parsed = JSON.parse(savedLocal);
          const normalized = normalizeSampleAlbum(parsed);
          setAlbum(normalized);
          setAlbumTitle(normalized.title);
          setPersonName(normalized.person_name || "Calon Istriku");
          setSpecialDate(normalized.special_date || "2026-06-18");
          const pData = normalized.pages_data?.pages || {};
          setPagesState(pData);
          const defaultBookUrl = typeof window !== "undefined"
            ? `${window.location.origin}/preview/romantic-islamic-keepsake?albumId=${albumId}&view=book`
            : "";
          const resolvedBookUrl = normalized.pages_data?.digitalBookUrl || defaultBookUrl;
          setDigitalBookUrlInput(resolvedBookUrl);
          latestDataRef.current = {
            name: normalized.person_name || "Calon Istriku",
            birthday: normalized.special_date || "",
            pages: pData,
            photoUrls: normalized.pages_data?.photoUrls || {},
            presentationCopy: normalized.pages_data?.presentationCopy || null,
            digitalBookUrl: resolvedBookUrl,
          };
          setLoading(false);
          return;
        } catch (e) {
          console.error(e);
        }
      }

      // Default sample album
      const defaultAlbum = createSampleAlbum();
      setAlbum(defaultAlbum);
      setAlbumTitle(defaultAlbum.title);
      setPersonName(defaultAlbum.person_name);
      setSpecialDate(defaultAlbum.special_date || "2026-06-18");
      const defPages = defaultAlbum.pages_data?.pages || {};
      setPagesState(defPages);
      const defaultBookUrl = typeof window !== "undefined"
        ? `${window.location.origin}/preview/romantic-islamic-keepsake?albumId=${albumId}&view=book`
        : "";
      const resolvedBookUrl = defaultAlbum.pages_data?.digitalBookUrl || defaultBookUrl;
      setDigitalBookUrlInput(resolvedBookUrl);
      latestDataRef.current = {
        name: defaultAlbum.person_name,
        birthday: defaultAlbum.special_date || "",
        pages: defPages,
        photoUrls: defaultAlbum.pages_data?.photoUrls || {},
        presentationCopy: defaultAlbum.pages_data?.presentationCopy || null,
        digitalBookUrl: resolvedBookUrl,
      };
      setLoading(false);
    }

    if (albumId) fetchAlbum();
  }, [albumId]);

  // Sinkronisasi data ke iframe canvas
  const syncDataToIframe = useCallback(() => {
    if (!iframeRef.current?.contentWindow) return;
    const current = latestDataRef.current;
    const defaultBookUrl = typeof window !== "undefined"
      ? `${window.location.origin}/preview/romantic-islamic-keepsake?albumId=${albumId}&view=book`
      : "";
    const effectiveBookUrl = current.digitalBookUrl || defaultBookUrl;
    iframeRef.current.contentWindow.postMessage(
      {
        type: "LOAD_SCRAPBOOK_DATA",
        payload: {
          name: current.name,
          birthday: current.birthday,
          pages: current.pages,
          photoUrls: current.photoUrls,
          presentationCopy: current.presentationCopy,
          digitalBookUrl: effectiveBookUrl,
          albumId: album?.id,
          albumTitle,
        },
      },
      "*"
    );
  }, [album?.id, albumId, albumTitle]);

  useEffect(() => {
    if (!album) return;
    const timer = window.setTimeout(syncDataToIframe, 300);
    return () => window.clearTimeout(timer);
  }, [album, syncDataToIframe]);

  // Fungsi simpan ke database PostgreSQL / LocalStorage
  const handleSaveToDatabase = async () => {
    if (!album) return;
    setSaveStatus("saving");
    setStatusText("Menyimpan ke Database...");

    const currentData = latestDataRef.current;

    const updatedPagesData = {
      theme: "vintage-islamic",
      totalPages: 5,
      pages: currentData.pages,
      photoUrls: currentData.photoUrls,
      digitalBookUrl: currentData.digitalBookUrl || "",
      ...(currentData.presentationCopy ? { presentationCopy: currentData.presentationCopy } : {}),
    };

    let savedSuccessfully = false;
    let savedAlbum: Album | null = null;

    if (user && album.id && !album.id.startsWith("local-")) {
      try {
        const res = await fetch(`/api/albums/${album.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: albumTitle || currentData.name || "Album Scrapbook",
            person_name: currentData.name || "Calon Istriku",
            special_date: currentData.birthday || null,
            pages_data: updatedPagesData,
          }),
        });
        if (res.ok) {
          const resData = await res.json();
          if (resData.album) {
            savedAlbum = resData.album;
            setAlbum(resData.album);
            // Jika sebelumnya adalah sample-album-1, sinkronkan URL browser ke ID baru tanpa reload
            if (album.id === "sample-album-1" && resData.album.id !== "sample-album-1") {
              window.history.replaceState(null, "", `/editor/${resData.album.id}`);
            }
          }
          savedSuccessfully = true;
        }
      } catch (e) {
        console.error("Save to database error:", e);
      }
    }

    const targetId = savedAlbum?.id || album.id;
    const updatedAlbum: Album = {
      ...(savedAlbum || album),
      id: targetId,
      title: albumTitle || currentData.name,
      person_name: currentData.name,
      special_date: currentData.birthday,
      pages_data: updatedPagesData,
      updated_at: new Date().toISOString(),
    };
    try {
      localStorage.setItem(`local_album_${targetId}`, JSON.stringify(updatedAlbum));
    } catch (e) {
      console.warn("localStorage quota exceeded:", e);
    }
    setAlbum(updatedAlbum);

    if (savedSuccessfully || !user) {
      setSaveStatus("saved");
      setStatusText(savedSuccessfully ? "Tersimpan di Database VPS" : "Tersimpan di Browser Lokal");
      iframeRef.current?.contentWindow?.postMessage(
        { type: "SCRAPBOOK_SAVE_STATUS", payload: { status: "saved" } },
        "*"
      );
      setTimeout(() => {
        setSaveStatus("idle");
        setStatusText("Semua tersimpan");
      }, 2500);
    } else {
      setSaveStatus("error");
      setStatusText("Gagal simpan ke server");
    }
  };

  // Navigasi Pindah Halaman
  const handleSelectPage = (pageNum: number) => {
    setActivePage(pageNum);
    iframeRef.current?.contentWindow?.postMessage(
      { type: "SET_PAGE", payload: { page: pageNum } },
      "*"
    );
  };

  // Ganti Layout Halaman Aktif
  const handleSelectLayout = (layoutId: string) => {
    setPagesState((prev) => ({
      ...prev,
      [activePage]: { ...(prev[activePage] || {}), layout: layoutId },
    }));
    if (latestDataRef.current.pages[activePage]) {
      latestDataRef.current.pages[activePage].layout = layoutId;
    }
    setSaveStatus("unsaved");
    setStatusText("Layout diubah (belum disimpan)");

    iframeRef.current?.contentWindow?.postMessage(
      { type: "SET_LAYOUT", payload: { layout: layoutId } },
      "*"
    );
  };

  // Update Field Teks Halaman
  const handleUpdateField = (field: string, value: string) => {
    setPagesState((prev) => {
      const pageKey = activePage;
      const pageObj = { ...(prev[pageKey] || prev[String(pageKey)] || {}) };

      if (field.startsWith("caption_")) {
        const idx = Number(field.replace("caption_", ""));
        const caps = [...(pageObj.captions || [])];
        caps[idx] = value;
        pageObj.captions = caps;
      } else if (field.startsWith("note_")) {
        const idx = Number(field.replace("note_", ""));
        const nts = Array.isArray(pageObj.notes)
          ? pageObj.notes.map((n: any) => ({ ...n }))
          : [];
        if (nts[idx]) {
          nts[idx].text = value;
        }
        pageObj.notes = nts;
      } else if (field.startsWith("checklist_")) {
        const idx = Number(field.replace("checklist_", ""));
        const chk = Array.isArray(pageObj.checklist) ? [...pageObj.checklist] : [];
        chk[idx] = value;
        pageObj.checklist = chk;
      } else if (field.startsWith("ticketMeta_")) {
        const idx = Number(field.replace("ticketMeta_", ""));
        const metas = Array.isArray(pageObj.ticketMeta) ? [...pageObj.ticketMeta] : [];
        metas[idx] = value;
        pageObj.ticketMeta = metas;
      } else {
        pageObj[field] = value;
      }
      return { ...prev, [pageKey]: pageObj, [String(pageKey)]: pageObj };
    });

    const targetP =
      latestDataRef.current.pages[activePage] ||
      latestDataRef.current.pages[String(activePage)];
    if (targetP) {
      if (field.startsWith("caption_")) {
        const idx = Number(field.replace("caption_", ""));
        if (!targetP.captions) targetP.captions = [];
        targetP.captions[idx] = value;
      } else if (field.startsWith("note_")) {
        const idx = Number(field.replace("note_", ""));
        if (targetP.notes && targetP.notes[idx]) {
          targetP.notes[idx].text = value;
        }
      } else if (field.startsWith("checklist_")) {
        const idx = Number(field.replace("checklist_", ""));
        if (!targetP.checklist) targetP.checklist = [];
        targetP.checklist[idx] = value;
      } else if (field.startsWith("ticketMeta_")) {
        const idx = Number(field.replace("ticketMeta_", ""));
        if (!targetP.ticketMeta) targetP.ticketMeta = [];
        targetP.ticketMeta[idx] = value;
      } else {
        targetP[field] = value;
      }
    }

    setSaveStatus("unsaved");
    setStatusText("Teks diubah (belum disimpan)");

    iframeRef.current?.contentWindow?.postMessage(
      {
        type: "UPDATE_FIELD",
        payload: { page: activePage, field, value },
      },
      "*"
    );
  };

  // Update Profil Nama & Tanggal
  const handleUpdateProfile = (field: "name" | "birthday", value: string) => {
    if (field === "name") {
      setPersonName(value);
      latestDataRef.current.name = value;
    } else {
      setSpecialDate(value);
      latestDataRef.current.birthday = value;
    }
    setSaveStatus("unsaved");
    setStatusText("Pengaturan diubah (belum disimpan)");

    iframeRef.current?.contentWindow?.postMessage(
      { type: "UPDATE_FIELD", payload: { field, value } },
      "*"
    );
  };

  // Update Tautan QR Buku Digital
  const handleUpdateBookUrl = (value: string) => {
    setDigitalBookUrlInput(value);
    latestDataRef.current.digitalBookUrl = value;
    setSaveStatus("unsaved");
    setStatusText("Tautan QR diubah (belum disimpan)");

    iframeRef.current?.contentWindow?.postMessage(
      { type: "UPDATE_FIELD", payload: { field: "digitalBookUrl", value } },
      "*"
    );
  };

  // Ganti View Mode
  const handleSwitchViewMode = (mode: "full" | "book" | "base" | "back" | "photos" | "stickers" | "cards") => {
    setCurrentViewMode(mode);
    iframeRef.current?.contentWindow?.postMessage(
      { type: "SWITCH_VIEW", payload: { view: mode } },
      "*"
    );
  };

  // Trigger Print PDF (Mendukung mode cetak langsung atau dialog)
  const handleTriggerPrint = (mode?: string) => {
    setIsPrintMenuOpen(false);
    iframeRef.current?.contentWindow?.postMessage(
      { type: "TRIGGER_PRINT", payload: mode ? { mode } : {} },
      "*"
    );
  };

  // Upload Foto dari Sidebar atau Kanvas
  const handleUploadPhotoSlot = async (slotNumber: number | string, rawFile: File) => {
    try {
      const file = await compressImageFile(rawFile);
      const reader = new FileReader();
      reader.onload = async () => {
        const dataUrl = reader.result as string;
        latestDataRef.current.photoUrls[String(slotNumber)] = dataUrl;
        setSaveStatus("unsaved");
        setStatusText("Foto diperbarui");

        iframeRef.current?.contentWindow?.postMessage(
          {
            type: "SCRAPBOOK_PHOTO_UPLOADED",
            payload: { slot: slotNumber, url: dataUrl },
          },
          "*"
        );

        // Unggah foto ke Server Storage (/api/upload)
        const targetAlbumId = album?.id || "guest";
        try {
          setSaveStatus("saving");
          setStatusText("Mengunggah foto ke penyimpanan...");

          const formData = new FormData();
          formData.append("file", file);
          formData.append("albumId", String(targetAlbumId));
          formData.append("slot", String(slotNumber));

          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });

          if (res.ok) {
            const data = await res.json();
            if (data.url) {
              latestDataRef.current.photoUrls[String(slotNumber)] = data.url;
              iframeRef.current?.contentWindow?.postMessage(
                {
                  type: "SCRAPBOOK_PHOTO_UPLOADED",
                  payload: { slot: slotNumber, url: data.url },
                },
                "*"
              );
              await handleSaveToDatabase();
            }
          }
        } catch (e) {
          console.error("Local upload error:", e);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Image processing error:", err);
    }
  };

  // Hapus & Unlink Foto dari Slot
  const handleDeletePhotoSlot = async (slotNumber: number | string) => {
    const slotKey = String(slotNumber);
    const existingPhotoUrl = latestDataRef.current.photoUrls[slotKey];
    if (!existingPhotoUrl) return;

    const confirmDelete = window.confirm("Yakin ingin menghapus dan melepas (unlink) foto dari slot ini?");
    if (!confirmDelete) return;

    delete latestDataRef.current.photoUrls[slotKey];
    setSaveStatus("unsaved");
    setStatusText("Foto dilepas (unlinked)");

    iframeRef.current?.contentWindow?.postMessage(
      {
        type: "SCRAPBOOK_PHOTO_REMOVED",
        payload: { slot: slotNumber },
      },
      "*"
    );

    if (
      existingPhotoUrl.startsWith("/uploads/") ||
      existingPhotoUrl.startsWith("/api/uploads/")
    ) {
      try {
        await fetch(`/api/upload?url=${encodeURIComponent(existingPhotoUrl)}`, {
          method: "DELETE",
        });
      } catch (err) {
        console.error("Unlink file error:", err);
      }
    }

    await handleSaveToDatabase();
  };

  // Listener pesan dari iframe
  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object") return;
      const { type, payload } = event.data;

      if (type === "SCRAPBOOK_READY") {
        syncDataToIframe();
      }

      if (type === "SCRAPBOOK_PAGE_CHANGED" && payload) {
        if (payload.page !== undefined) {
          setActivePage(Number(payload.page));
        }
      }

      if (type === "SCRAPBOOK_DATA_CHANGED" && payload) {
        latestDataRef.current = {
          name: payload.name || latestDataRef.current.name,
          birthday: payload.birthday !== undefined ? payload.birthday : latestDataRef.current.birthday,
          pages: payload.pages || latestDataRef.current.pages,
          photoUrls: payload.photoUrls || latestDataRef.current.photoUrls,
          presentationCopy: payload.presentationCopy || latestDataRef.current.presentationCopy,
          digitalBookUrl: payload.digitalBookUrl !== undefined ? payload.digitalBookUrl : latestDataRef.current.digitalBookUrl,
        };
        if (payload.pages) {
          setPagesState(payload.pages);
        }
        setSaveStatus("unsaved");
        setStatusText("Ada perubahan belum disimpan");
      }

      if (type === "SCRAPBOOK_SAVE_REQUEST") {
        await handleSaveToDatabase();
      }

      if (type === "SCRAPBOOK_PHOTO_SELECTED") {
        const slot = event.data.slot !== undefined ? event.data.slot : payload?.slot;
        const file = event.data.file || payload?.file;
        if (slot !== undefined && slot !== null && file) {
          await handleUploadPhotoSlot(slot, file);
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
        <p className="text-xs text-[#706454] font-semibold">Membuka Studio Scrapbook...</p>
      </div>
    );
  }

  const currentPageData = pagesState[activePage] || pagesState[String(activePage)] || {};
  const currentLayoutId = currentPageData.layout || (activePage === 0 ? "single-clean" : "single-hero");
  const activeMeta = PAGES_META.find((p) => p.id === activePage) || PAGES_META[1];
  const layoutMeta = getLayoutPhotoMeta(currentLayoutId, activePage);

  // Hitung slot foto untuk halaman aktif sesuai layout dinamis
  const photoSlotsForPage: { slot: number | string; label: string }[] = [];
  if (activePage === 0) {
    photoSlotsForPage.push({ slot: 20, label: "Foto Sampul Utama (Cover)" });
  } else {
    const base = (activePage - 1) * 3;
    for (let i = 0; i < layoutMeta.count; i++) {
      photoSlotsForPage.push({
        slot: base + i,
        label: layoutMeta.labels[i] || `Foto Polaroid ${i + 1}`,
      });
    }
    if (activePage === 2) {
      photoSlotsForPage.push(
        { slot: "back-photobox-0", label: "Strip Photobox Belakang 1 (Kiri)" },
        { slot: "back-photobox-1", label: "Strip Photobox Belakang 2 (Kanan)" }
      );
    }
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#faf7f0] flex flex-col">
      {/* 1. TOP STUDIO BAR (Satu Header Rapi & Ringkas) */}
      <header className="bg-[#fffdf8] border-b border-[#ded5c4] px-4 py-2 shrink-0 z-30 shadow-2xs">
        <div className="flex items-center justify-between gap-3">
          {/* Kiri: Kembali, Judul Album & Status */}
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="w-8 h-8 rounded-lg bg-[#f6eee2] hover:bg-[#ede3d3] text-[#554738] flex items-center justify-center transition shrink-0"
              title="Kembali ke Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`w-8 h-8 rounded-lg border transition flex items-center justify-center ${
                sidebarOpen
                  ? "bg-[#4b6958] text-[#fffdf5] border-[#4b6958]"
                  : "bg-[#fffdf8] text-[#6b5e4f] border-[#dcd1bf] hover:bg-[#f6eee2]"
              }`}
              title={sidebarOpen ? "Sembunyikan Panel Studio" : "Buka Panel Studio"}
            >
              {sidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
            </button>

            <div className="hidden sm:block">
              <input
                type="text"
                value={albumTitle}
                onChange={(e) => {
                  setAlbumTitle(e.target.value);
                  setSaveStatus("unsaved");
                  setStatusText("Judul diubah");
                }}
                className="font-serif text-sm font-bold text-[#3d3328] bg-transparent border-b border-transparent hover:border-[#cfc2ae] focus:border-[#4b6958] focus:outline-hidden px-1 transition w-44 md:w-60"
                placeholder="Beri Judul Album..."
              />
            </div>

            {/* Status Penyimpanan */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f6efe4] border border-[#e2d6c3] text-[10px] font-semibold text-[#5a4d3e]">
              {saveStatus === "saving" ? (
                <>
                  <Loader2 className="w-3 h-3 text-[#4b6958] animate-spin" />
                  <span>Menyimpan...</span>
                </>
              ) : saveStatus === "unsaved" ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#d97706]" />
                  <span className="text-[#874b17]">Belum disimpan</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
                  <span className="text-[#166534]">Tersimpan</span>
                </>
              )}
            </div>
          </div>

          {/* Tengah: Navigasi Halaman Ringkas (Cover, 1, 2, 3, 4, 5) */}
          <div className="flex items-center gap-1 bg-[#f4ece0] border border-[#dcd1bf] p-1 rounded-xl">
            <button
              onClick={() => handleSelectPage(Math.max(0, activePage - 1))}
              disabled={activePage <= 0}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[#554738] hover:bg-[#eae0d0] disabled:opacity-30 transition"
              title="Halaman Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-0.5">
              {PAGES_META.map((p) => {
                const isActive = activePage === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPage(p.id)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-lg transition ${
                      isActive
                        ? "bg-[#4b6958] text-[#fffdf5] shadow-2xs"
                        : "text-[#625343] hover:bg-[#eae0d0]"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handleSelectPage(Math.min(5, activePage + 1))}
              disabled={activePage >= 5}
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[#554738] hover:bg-[#eae0d0] disabled:opacity-30 transition"
              title="Halaman Berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Kanan: View Mode, Pratinjau & Tombol Simpan */}
          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden md:flex items-center bg-[#f4ece0] border border-[#dcd1bf] p-0.5 rounded-lg text-[11px] font-semibold text-[#5a4d3e]">
              <button
                onClick={() => handleSwitchViewMode("full")}
                className={`px-2.5 py-1 rounded-md transition ${
                  currentViewMode === "full" ? "bg-[#fffdf8] text-[#3d3328] shadow-2xs font-bold" : "hover:text-[#3d3328]"
                }`}
                title="Tampilan Lembar Scrapbook Utuh"
              >
                Kanvas Utuh
              </button>
              <button
                onClick={() => handleSwitchViewMode("book")}
                className={`px-2.5 py-1 rounded-md transition flex items-center gap-1 ${
                  currentViewMode === "book" ? "bg-[#fffdf8] text-[#3d3328] shadow-2xs font-bold" : "hover:text-[#3d3328]"
                }`}
                title="Buka Buku Digital 3D Duplex"
              >
                <BookOpen className="w-3 h-3 text-[#4b6958]" />
                <span>Buku 3D</span>
              </button>
            </div>

            {/* Tombol Cetak PDF & Menu Cepat Complete */}
            <div className="relative">
              <div className="flex items-center">
                <button
                  onClick={() => handleTriggerPrint()}
                  className="px-2.5 py-1.5 bg-[#f6eee2] hover:bg-[#ebe0ce] text-[#524434] border border-[#dcd0bf] rounded-l-xl text-xs font-semibold transition flex items-center gap-1.5"
                  title="Buka dialog cetak atau simpan lembar PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-[#524434]" />
                  <span className="hidden sm:inline font-bold">Cetak PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsPrintMenuOpen(!isPrintMenuOpen)}
                  className="px-1.5 py-1.5 bg-[#ece1d0] hover:bg-[#dfd1bd] text-[#524434] border border-l-0 border-[#dcd0bf] rounded-r-xl text-xs font-semibold transition flex items-center"
                  title="Pilihan cetak cepat lengkap (Complete)"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {isPrintMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-72 bg-[#fffdfa] border border-[#dcd0bf] rounded-2xl shadow-xl p-2 z-50 flex flex-col gap-1 text-xs animate-in fade-in zoom-in-95">
                  <div className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8b7d6b]">
                    Pilihan Cetak Lengkap (Complete)
                  </div>
                  <button
                    onClick={() => handleTriggerPrint("all-photos")}
                    className="w-full px-2.5 py-2 text-left hover:bg-[#eaf3ed] rounded-xl text-[#234b35] font-semibold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>📸</span>
                      <span>Foto Polaroid Complete</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#2d5e46] text-white rounded-md font-bold">6 Hal A4</span>
                  </button>
                  <button
                    onClick={() => handleTriggerPrint("all-stickers")}
                    className="w-full px-2.5 py-2 text-left hover:bg-[#fdf2e4] rounded-xl text-[#6b471e] font-semibold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>✨</span>
                      <span>Stiker &amp; Catatan Complete</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#855e2b] text-white rounded-md font-bold">6 Hal A4</span>
                  </button>
                  <button
                    onClick={() => handleTriggerPrint("all-cards")}
                    className="w-full px-2.5 py-2 text-left hover:bg-[#faebf0] rounded-xl text-[#7a2238] font-bold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>💌</span>
                      <span>Kartu Fitur DIY (5 Kartu)</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#88283f] text-white rounded-md font-bold">1 Hal A4</span>
                  </button>
                  <button
                    onClick={() => handleTriggerPrint("all-base-duplex")}
                    className="w-full px-2.5 py-2 text-left hover:bg-[#f6eee2] rounded-xl text-[#4a3b2c] font-semibold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>📄</span>
                      <span>Lembar Dasar DIY Complete</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#5a4369] text-white rounded-md font-bold">12 Hal A4</span>
                  </button>
                  <button
                    onClick={() => handleTriggerPrint("book-full")}
                    className="w-full px-2.5 py-2 text-left hover:bg-[#f6eee2] rounded-xl text-[#4a3b2c] font-semibold flex items-center justify-between transition"
                  >
                    <span className="flex items-center gap-2">
                      <span>⭐</span>
                      <span>Album Jadi (Lengkap Foto)</span>
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#3a4f41] text-white rounded-md font-bold">6 Hal A4</span>
                  </button>
                  <div className="h-px bg-[#eee4d4] my-1" />
                  <button
                    onClick={() => handleTriggerPrint()}
                    className="w-full px-2.5 py-2 text-left hover:bg-[#f2e7d7] rounded-xl text-[#3d3328] font-bold flex items-center gap-2 transition"
                  >
                    <span>⚙️</span>
                    <span>Pilihan Format Cetak Lengkap...</span>
                  </button>
                </div>
              )}
            </div>

            {/* Link Pratinjau Publik */}
            <Link
              href={`/preview/romantic-islamic-keepsake?albumId=${album?.id}`}
              target="_blank"
              className="px-2.5 py-1.5 bg-[#fffdf8] hover:bg-[#f6eee2] text-[#4b4034] border border-[#d6caba] rounded-xl text-xs font-semibold transition flex items-center gap-1"
              title="Buka pratinjau publik di tab baru"
            >
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Pratinjau</span>
            </Link>

            {/* Primary Action: Simpan ke Database */}
            <button
              onClick={handleSaveToDatabase}
              disabled={saveStatus === "saving"}
              className="px-3.5 py-1.5 bg-[#4b6958] hover:bg-[#385342] text-[#fffdf5] rounded-xl text-xs font-bold transition shadow-xs flex items-center gap-1.5 disabled:opacity-60"
            >
              {saveStatus === "saving" ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Save className="w-3.5 h-3.5" />
              )}
              <span>Simpan</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. AREA WORKSPACE UTAMA: SIDEBAR PANEL + CLEAN CANVAS */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* SIDEBAR PANEL STUDIO (Kiri, Rapi, Terstruktur) */}
        <aside
          className={`bg-[#fffdf8] border-r border-[#ded5c4] flex flex-col shrink-0 transition-all duration-200 z-20 ${
            sidebarOpen ? "w-80 sm:w-92" : "w-0 -translate-x-full overflow-hidden border-r-0"
          }`}
        >
          {/* Header Panel Studio */}
          <div className="p-3.5 border-b border-[#eee6d8] bg-[#fbf7f0] flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#7d6f5d]">
                Pengaturan Aktif
              </span>
              <h2 className="font-serif text-sm font-bold text-[#3d3328]">
                {activeMeta.title}
              </h2>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#e9f2ec] text-[#2c533c] border border-[#cbe1d3]">
              {activeMeta.label}
            </span>
          </div>

          {/* Tab Kategori Studio (Layout, Tulisan, Foto, Pengaturan) */}
          <div className="flex border-b border-[#eee6d8] bg-[#f8f3ea] p-1 gap-1 text-xs font-semibold">
            <button
              onClick={() => setActiveSidebarTab("layout")}
              className={`flex-1 py-1.5 rounded-lg transition flex items-center justify-center gap-1 ${
                activeSidebarTab === "layout"
                  ? "bg-[#fffdf8] text-[#3d3328] font-bold shadow-2xs"
                  : "text-[#706454] hover:text-[#3d3328]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#4b6958]" />
              <span>Tata Letak</span>
            </button>

            <button
              onClick={() => setActiveSidebarTab("text")}
              className={`flex-1 py-1.5 rounded-lg transition flex items-center justify-center gap-1 ${
                activeSidebarTab === "text"
                  ? "bg-[#fffdf8] text-[#3d3328] font-bold shadow-2xs"
                  : "text-[#706454] hover:text-[#3d3328]"
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#4b6958]" />
              <span>Tulisan</span>
            </button>

            <button
              onClick={() => setActiveSidebarTab("photos")}
              className={`flex-1 py-1.5 rounded-lg transition flex items-center justify-center gap-1 ${
                activeSidebarTab === "photos"
                  ? "bg-[#fffdf8] text-[#3d3328] font-bold shadow-2xs"
                  : "text-[#706454] hover:text-[#3d3328]"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#4b6958]" />
              <span>Foto</span>
            </button>

            <button
              onClick={() => setActiveSidebarTab("settings")}
              className={`flex-1 py-1.5 rounded-lg transition flex items-center justify-center gap-1 ${
                activeSidebarTab === "settings"
                  ? "bg-[#fffdf8] text-[#3d3328] font-bold shadow-2xs"
                  : "text-[#706454] hover:text-[#3d3328]"
              }`}
            >
              <Settings className="w-3.5 h-3.5 text-[#4b6958]" />
              <span>Profil</span>
            </button>
          </div>

          {/* ISI PANEL BERDASARKAN TAB */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* TAB 1: PILIHAN TATA LETAK FOTO */}
            {activeSidebarTab === "layout" && (
              <div className="space-y-3">
                <div className="text-xs text-[#706454]">
                  Pilih tata letak foto untuk <strong>{activeMeta.label}</strong>:
                </div>

                <div className="space-y-2">
                  {LAYOUT_OPTIONS.map((opt) => {
                    const isSelected = currentLayoutId === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectLayout(opt.id)}
                        className={`w-full text-left p-3 rounded-xl border transition flex items-start gap-2.5 ${
                          isSelected
                            ? "bg-[#f2f8f4] border-[#4b6958] ring-1 ring-[#4b6958]"
                            : "bg-[#fffdf8] border-[#e2d8c7] hover:border-[#cfc1ac] hover:bg-[#fbf7f1]"
                        }`}
                      >
                        <span className="text-lg shrink-0 mt-0.5">{opt.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-[#3d3328]">{opt.name}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#4b6958]" />}
                          </div>
                          <p className="text-[11px] text-[#716553] mt-0.5 leading-snug line-clamp-2">
                            {opt.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: EDIT TULISAN HALAMAN AKTIF */}
            {activeSidebarTab === "text" && (
              <div className="space-y-4">
                {/* Info Halaman & Status Layout */}
                <div className="flex items-center justify-between text-xs text-[#706454] bg-[#f8f3ea] px-3 py-2 rounded-xl border border-[#ded5c4]">
                  <div className="truncate mr-2">
                    <strong>{activeMeta.label}</strong>: {activeMeta.title}
                  </div>
                  <span className="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#e7efe9] text-[#2c533c] border border-[#cbded0]">
                    {activePage === 0 ? "1 Foto Sampul" : `${layoutMeta.count} Foto Aktif`}
                  </span>
                </div>

                {/* SEKSI 1: JUDUL & SUBJUDUL KANVAS */}
                <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#4b6958]" />
                      Judul & Header Kanvas
                    </span>
                  </div>

                  {/* Judul Potongan Huruf (titleCutout) */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#524434] mb-1">
                      Judul Potongan Huruf (Cutout Header)
                    </label>
                    <input
                      type="text"
                      value={currentPageData.titleCutout ?? (activePage === 0 ? "OuR StOrY" : activePage === 1 ? "HaPpY BiRThDaY" : "")}
                      onChange={(e) => handleUpdateField("titleCutout", e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                      placeholder={
                        activePage === 0
                          ? "Misal: OuR StOrY"
                          : activePage === 1
                          ? "Misal: HaPpY BiRThDaY"
                          : activePage === 2
                          ? "Misal: Our Journey"
                          : activePage === 3
                          ? "Misal: Untukmu"
                          : activePage === 4
                          ? "Misal: Kado Untukmu"
                          : "Misal: Doa Kita"
                      }
                    />
                    <span className="block text-[10px] text-[#8c7e6e] mt-0.5">
                      Huruf guntingan kertas vintage di bagian paling atas kanvas.
                    </span>
                  </div>

                  {/* Subjudul / Keterangan Waktu (subtitle) */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#524434] mb-1">
                      {activePage === 0
                        ? "Sub-Judul Sampul"
                        : activePage === 1
                        ? "Sub-Judul / Label Waktu"
                        : "Sub-Judul Halaman"}
                    </label>
                    <input
                      type="text"
                      value={currentPageData.subtitle ?? ""}
                      onChange={(e) => handleUpdateField("subtitle", e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                      placeholder={
                        activePage === 0
                          ? "Misal: A Little Keepsake for My Future Wife"
                          : activePage === 1
                          ? "Misal: Oktober 2026 (atau kosongkan untuk otomatis dari tanggal)"
                          : "Misal: catatan kecil yang ingin kusimpan..."
                      }
                    />
                    <span className="block text-[10px] text-[#8c7e6e] mt-0.5">
                      Teks pengantar kecil tepat di bawah judul utama.
                    </span>
                  </div>

                  {/* Judul Tema Babak (themeTitle) */}
                  <div>
                    <label className="block text-[11px] font-bold text-[#524434] mb-1">
                      Nama Tema Babak
                    </label>
                    <input
                      type="text"
                      value={currentPageData.themeTitle ?? ""}
                      onChange={(e) => handleUpdateField("themeTitle", e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                      placeholder="Judul tema babak halaman..."
                    />
                  </div>
                </div>

                {/* SEKSI 2: KETERANGAN FOTO POLAROID (DINAMIS SESUAI JUMLAH FOTO) */}
                <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434] flex items-center gap-1.5">
                      <ImageIcon className="w-3.5 h-3.5 text-[#4b6958]" />
                      Keterangan Foto Polaroid
                    </span>
                    <span className="text-[10px] font-semibold text-[#6d5e4e] bg-[#f5ede2] px-2 py-0.5 rounded-full border border-[#e4d7c5]">
                      {activePage === 0 ? "1 Foto" : `${layoutMeta.count} Foto Sesuai Layout`}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {Array.from({ length: layoutMeta.count }).map((_, idx) => (
                      <div key={idx}>
                        <label className="block text-[11px] font-medium text-[#524434] mb-1">
                          {layoutMeta.labels[idx] || `Keterangan Foto ${idx + 1}`}
                        </label>
                        <input
                          type="text"
                          value={currentPageData.captions?.[idx] ?? ""}
                          onChange={(e) => handleUpdateField(`caption_${idx}`, e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                          placeholder={layoutMeta.captionPlaceholders[idx] || `Tulis keterangan foto ${idx + 1}...`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* SEKSI 3: KONTEN KHUSUS HALAMAN (WIDGET PER HALAMAN) */}
                {activePage === 2 && (
                  <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434] flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-[#4b6958]" />
                        Widget Tiket Perjalanan Cinta
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#524434] mb-1">
                        Judul Tiket Kenangan
                      </label>
                      <input
                        type="text"
                        value={currentPageData.ticketHeader ?? "Tiket Kenangan · Perjalanan Menuju Akad"}
                        onChange={(e) => handleUpdateField("ticketHeader", e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                        placeholder="Judul tiket..."
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#524434] mb-1">
                        Catatan Rute / Kisah Perjalanan
                      </label>
                      <textarea
                        rows={3}
                        value={currentPageData.ticketRoute ?? ""}
                        onChange={(e) => handleUpdateField("ticketRoute", e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958] resize-none leading-relaxed"
                        placeholder="Ceritakan perjalanan cinta atau rute pertemuan..."
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#524434] mb-1">
                        Label Status Tiket (Pills)
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {[0, 1, 2].map((mIdx) => {
                          const defaultMeta = ["IKHTIAR: BERDUA", "TUJUAN: SAKINAH MAWADDAH", "INSYA ALLAH BULAN DEPAN"];
                          const currentMeta = Array.isArray(currentPageData.ticketMeta) ? currentPageData.ticketMeta[mIdx] : defaultMeta[mIdx];
                          return (
                            <input
                              key={mIdx}
                              type="text"
                              value={currentMeta ?? defaultMeta[mIdx]}
                              onChange={(e) => handleUpdateField(`ticketMeta_${mIdx}`, e.target.value)}
                              className="px-2.5 py-1.5 bg-white border border-[#cfc2ae] rounded-lg text-[11px] text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                              placeholder={`Tag ${mIdx + 1}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {activePage === 3 && (
                  <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434] flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#4b6958]" />
                        Surat Cinta untuk Calon Istri
                      </span>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#524434] mb-1">
                        Isi Surat Menuju Hari Akad
                      </label>
                      <textarea
                        rows={6}
                        value={currentPageData.letterText ?? ""}
                        onChange={(e) => handleUpdateField("letterText", e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958] leading-relaxed resize-none"
                        placeholder="Tuliskan ungkapan tulus untuk calon istrimu menjelang hari akad..."
                      />
                    </div>
                  </div>
                )}

                {activePage === 4 && (
                  <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#4b6958]" />
                        Catatan Kartu Hadiah & Kado
                      </span>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-[#524434] mb-1">
                        Pesan Memo Kado Spesial
                      </label>
                      <textarea
                        rows={4}
                        value={currentPageData.giftCardText ?? ""}
                        onChange={(e) => handleUpdateField("giftCardText", e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958] resize-none leading-relaxed"
                        placeholder="Deskripsi hadiah istimewa untuk calon istrimu..."
                      />
                    </div>
                  </div>
                )}

                {activePage === 5 && (
                  <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-3 shadow-2xs">
                    <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434] flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#4b6958]" />
                        Daftar Ikhtiar & Doa Rumah Tangga
                      </span>
                    </div>
                    <div className="space-y-2">
                      {[0, 1, 2, 3, 4].map((chkIdx) => {
                        const defaultChecklist = [
                          "Semoga akad kita lancar",
                          "Tetap mau mendengarkan satu sama lain",
                          "Bisa minta maaf kalau salah",
                          "Sempatkan ngobrol meski sedang sibuk",
                          "Saling mengingatkan untuk ibadah",
                        ];
                        const currentItem = Array.isArray(currentPageData.checklist)
                          ? currentPageData.checklist[chkIdx]
                          : defaultChecklist[chkIdx];
                        return (
                          <div key={chkIdx} className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-[#edf5ee] border border-[#cfdfd2] text-[#2c533c] text-[10px] font-bold flex items-center justify-center shrink-0">
                              {chkIdx + 1}
                            </span>
                            <input
                              type="text"
                              value={currentItem ?? defaultChecklist[chkIdx]}
                              onChange={(e) => handleUpdateField(`checklist_${chkIdx}`, e.target.value)}
                              className="flex-1 px-3 py-1.5 bg-white border border-[#cfc2ae] rounded-lg text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                              placeholder={`Doa / Impian ke-${chkIdx + 1}...`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* SEKSI 4: PESAN PENUTUP / SIGNOFF KANVAS */}
                <div className="bg-white border border-[#ded5c4] rounded-xl p-3.5 space-y-2 shadow-2xs">
                  <label className="block text-[11px] font-bold text-[#524434]">
                    Pesan Penutup / Catatan Kaki (Signoff)
                  </label>
                  <input
                    type="text"
                    value={currentPageData.signoff ?? ""}
                    onChange={(e) => handleUpdateField("signoff", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                    placeholder="Misal: forever yours, calon suamimu."
                  />
                  <span className="block text-[10px] text-[#8c7e6e]">
                    Teks manis penutup di bagian bawah kanvas halaman.
                  </span>
                </div>

                {/* SEKSI 5: STIKER CATATAN & MEMO TEMPEL (NOTES) */}
                {Array.isArray(currentPageData.notes) && currentPageData.notes.length > 0 && (
                  <div className="bg-white border border-[#ded5c4] rounded-xl overflow-hidden shadow-2xs">
                    <button
                      type="button"
                      onClick={() => setNotesExpanded(!notesExpanded)}
                      className="w-full p-3.5 bg-[#fbf7f0] hover:bg-[#f6efe4] flex items-center justify-between text-left transition cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-[#4b6958]" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#524434]">
                          Stiker Catatan & Memo Tempel
                        </span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#f0e6d6] text-[#6b5d4c]">
                          {currentPageData.notes.length}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 text-[#7d6f5d] transition-transform ${notesExpanded ? "rotate-90" : ""}`} />
                    </button>

                    {notesExpanded && (
                      <div className="p-3.5 border-t border-[#eee6d8] space-y-3 bg-white">
                        <p className="text-[10px] text-[#807262]">
                          Ubah teks pada stiker washi & sticky notes yang tertempel di kanvas halaman ini:
                        </p>
                        <div className="space-y-2.5">
                          {currentPageData.notes.map((note: any, nIdx: number) => (
                            <div key={nIdx}>
                              <label className="block text-[10px] font-semibold text-[#665747] mb-1">
                                Stiker #{nIdx + 1}
                              </label>
                              <textarea
                                rows={2}
                                value={note.text || ""}
                                onChange={(e) => handleUpdateField(`note_${nIdx}`, e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-[#fdfbf7] border border-[#d5c8b5] rounded-lg text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958] resize-none"
                                placeholder="Tulis pesan stiker..."
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: UPLOAD & GANTI FOTO */}
            {activeSidebarTab === "photos" && (
              <div className="space-y-3.5">
                <div className="text-xs text-[#706454]">
                  Slot foto pada <strong>{activeMeta.label}</strong>:
                </div>

                <div className="space-y-3">
                  {photoSlotsForPage.map((item) => {
                    const slotIdx = item.slot;
                    const slotLabel = item.label;
                    const photoSrc = latestDataRef.current.photoUrls[String(slotIdx)] || "";

                    return (
                      <div
                        key={String(slotIdx)}
                        className="p-3 bg-white border border-[#ded5c4] rounded-xl flex items-center gap-3 shadow-2xs"
                      >
                        <div className="w-16 h-16 rounded-lg bg-[#f4ece0] border border-[#dcd0bf] flex items-center justify-center overflow-hidden shrink-0">
                          {photoSrc ? (
                            <img src={photoSrc} alt="Slot foto" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-[#9a8c7b]" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="block text-xs font-bold text-[#3d3328]">
                            {slotLabel}
                          </span>
                          <span className="block text-[10px] text-[#716553] truncate mt-0.5">
                            {photoSrc ? "Sudah terpasang" : "Belum ada foto"}
                          </span>

                          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedPhotoSlot(slotIdx);
                                fileInputRef.current?.click();
                              }}
                              className="px-2.5 py-1 bg-[#f4ece0] hover:bg-[#eadecc] text-[#4b3f33] border border-[#dcd0bf] rounded-lg text-[11px] font-bold transition flex items-center gap-1 cursor-pointer"
                            >
                              <Upload className="w-3 h-3 text-[#4b6958]" />
                              <span>{photoSrc ? "Ganti Foto" : "Pilih Foto"}</span>
                            </button>

                            {photoSrc && (
                              <button
                                type="button"
                                onClick={() => handleDeletePhotoSlot(slotIdx)}
                                className="px-2.5 py-1 bg-[#fff1f1] hover:bg-[#ffe2e2] text-[#c02626] border border-[#fecaca] rounded-lg text-[11px] font-bold transition flex items-center gap-1 cursor-pointer"
                                title="Hapus dan lepas foto dari slot ini"
                              >
                                <Trash2 className="w-3 h-3 text-[#dc2626]" />
                                <span>Hapus / Unlink</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 4: PENGATURAN PROFIL & NAMA */}
            {activeSidebarTab === "settings" && (
              <div className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#524434] mb-1">
                    Nama Panggilan Pasangan
                  </label>
                  <input
                    type="text"
                    value={personName}
                    onChange={(e) => handleUpdateProfile("name", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                    placeholder="Misal: Calon Istriku"
                  />
                  <span className="block text-[10px] text-[#7e7261] mt-1">
                    Muncul di seluruh lembaran scrapbook dan judul halaman.
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#524434] mb-1">
                    Tanggal Spesial / Milad
                  </label>
                  <input
                    type="date"
                    value={specialDate}
                    onChange={(e) => handleUpdateProfile("birthday", e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                  />
                  <span className="block text-[10px] text-[#7e7261] mt-1">
                    Digunakan untuk penanda kalender di Halaman 1.
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#524434]">
                      Akses QR Buku Digital (Sampul)
                    </label>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-[#e8f2ec] text-[#285038] border border-[#c4dcce]">
                      A4 Ready (32mm)
                    </span>
                  </div>
                  <input
                    type="text"
                    value={digitalBookUrlInput}
                    onChange={(e) => handleUpdateBookUrl(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#cfc2ae] rounded-xl text-xs text-[#2a221b] focus:outline-hidden focus:ring-2 focus:ring-[#4b6958]"
                    placeholder="https://.../preview/...&view=book"
                  />
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[10px] text-[#7e7261]">
                      Dicetak pada Sampul Depan untuk scan kamera ponsel.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        const autoUrl = `${window.location.origin}/preview/romantic-islamic-keepsake?albumId=${albumId}&view=book`;
                        handleUpdateBookUrl(autoUrl);
                      }}
                      className="text-[10px] font-semibold text-[#4b6958] hover:underline"
                    >
                      Reset Otomatis
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#eee6d8]">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#524434] mb-1.5">
                    Pratinjau Lembar Cetak
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => handleSwitchViewMode("base")}
                      className={`p-2 border rounded-xl text-left font-semibold transition ${
                        currentViewMode === "base"
                          ? "bg-[#eadcc9] text-[#2c2217] border-[#bba891]"
                          : "bg-[#f6eee2] hover:bg-[#ede1ce] text-[#45382b] border-[#dcd0bf]"
                      }`}
                    >
                      📄 Lembar Dasar (DIY)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchViewMode("back")}
                      className={`p-2 border rounded-xl text-left font-semibold transition ${
                        currentViewMode === "back"
                          ? "bg-[#eadcc9] text-[#2c2217] border-[#bba891]"
                          : "bg-[#f6eee2] hover:bg-[#ede1ce] text-[#45382b] border-[#dcd0bf]"
                      }`}
                    >
                      🔄 Sisi Balik (Diary)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchViewMode("photos")}
                      className={`p-2 border rounded-xl text-left font-semibold transition ${
                        currentViewMode === "photos"
                          ? "bg-[#eadcc9] text-[#2c2217] border-[#bba891]"
                          : "bg-[#f6eee2] hover:bg-[#ede1ce] text-[#45382b] border-[#dcd0bf]"
                      }`}
                    >
                      📸 Lembar Foto
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchViewMode("stickers")}
                      className={`p-2 border rounded-xl text-left font-semibold transition ${
                        currentViewMode === "stickers"
                          ? "bg-[#eadcc9] text-[#2c2217] border-[#bba891]"
                          : "bg-[#f6eee2] hover:bg-[#ede1ce] text-[#45382b] border-[#dcd0bf]"
                      }`}
                    >
                      ✨ Lembar Stiker
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSwitchViewMode("cards")}
                      className={`p-2 border rounded-xl text-left font-semibold transition ${
                        currentViewMode === "cards"
                          ? "bg-[#eadcc9] text-[#2c2217] border-[#bba891]"
                          : "bg-[#f6eee2] hover:bg-[#ede1ce] text-[#45382b] border-[#dcd0bf]"
                      }`}
                    >
                      💌 Lembar Kartu Fitur
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#eee6d8]">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#524434] mb-1.5">
                    Cetak Cepat Lengkap (Complete)
                  </span>
                  <div className="flex flex-col gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => handleTriggerPrint("all-photos")}
                      className="w-full py-2 px-3 bg-[#e8f1ec] hover:bg-[#d8e6de] text-[#234b35] border border-[#bcd3c6] rounded-xl font-bold flex items-center justify-between transition shadow-2xs"
                    >
                      <span className="flex items-center gap-1.5">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Foto Polaroid Complete</span>
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#2d5e46] text-white rounded-md">6 Hal A4</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerPrint("all-stickers")}
                      className="w-full py-2 px-3 bg-[#fdf2e4] hover:bg-[#f7e6d0] text-[#6b471e] border border-[#e8d2ba] rounded-xl font-bold flex items-center justify-between transition shadow-2xs"
                    >
                      <span className="flex items-center gap-1.5">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Stiker &amp; Catatan Complete</span>
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#855e2b] text-white rounded-md">6 Hal A4</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerPrint("all-cards")}
                      className="w-full py-2 px-3 bg-[#fdf2f5] hover:bg-[#fae4eb] text-[#7a2238] border border-[#e8c2cb] rounded-xl font-bold flex items-center justify-between transition shadow-2xs"
                    >
                      <span className="flex items-center gap-1.5">
                        <Printer className="w-3.5 h-3.5 text-[#88283f]" />
                        <span>Kartu Fitur DIY (5 Kartu)</span>
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#88283f] text-white rounded-md font-bold">1 Hal A4</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerPrint("all-base-duplex")}
                      className="w-full py-2 px-3 bg-[#f6eee2] hover:bg-[#ece0cf] text-[#4a3b2c] border border-[#dcd0bf] rounded-xl font-semibold flex items-center justify-between transition"
                    >
                      <span className="flex items-center gap-1.5">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Lembar Dasar DIY Complete</span>
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#5a4369] text-white rounded-md">12 Hal A4</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleTriggerPrint("book-full")}
                      className="w-full py-2 px-3 bg-[#fffdf8] hover:bg-[#f6eee2] text-[#4a3b2c] border border-[#d6caba] rounded-xl font-semibold flex items-center justify-between transition"
                    >
                      <span className="flex items-center gap-1.5">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Album Jadi (Lengkap Foto)</span>
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 bg-[#3a4f41] text-white rounded-md">6 Hal A4</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* INPUT FILE HIDDEN UNTUK UPLOAD DARI SIDEBAR */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (file && selectedPhotoSlot !== null) {
              handleUploadPhotoSlot(selectedPhotoSlot, file);
            }
          }}
        />

        {/* CENTER VIEWPORT: KANVAS SCRAPBOOK LEGA & BERSIH */}
        <main className="flex-1 bg-[#f5f2eb] relative overflow-hidden flex flex-col">
          <iframe
            ref={iframeRef}
            src="/engine.html?embedded=true"
            onLoad={() => {
              setTimeout(syncDataToIframe, 400);
            }}
            className="w-full h-full border-0"
            title="Scrapbook Studio Canvas"
          />
        </main>
      </div>
    </div>
  );
}
