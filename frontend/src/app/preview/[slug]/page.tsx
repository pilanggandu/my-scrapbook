"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { createSampleAlbum, normalizeSampleAlbum } from "@/lib/sample-album";

function TemplatePreviewContent() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = (params?.slug as string) || "romantic-islamic-keepsake";
  const albumId = searchParams.get("albumId");

  const [albumData, setAlbumData] = useState<any>(null);

  useEffect(() => {
    async function loadContext() {
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

    iframeRef.current.contentWindow.postMessage(
      { type: "SWITCH_VIEW", payload: { view: "book" } },
      "*"
    );
  }, [albumData]);

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

  return (
    <main className="fixed inset-0 w-screen h-screen h-[100dvh] overflow-hidden bg-[#14100c] z-50">
      <iframe
        ref={iframeRef}
        src="/engine.html?view=book&pure=1"
        onLoad={() => {
          if (albumData) setTimeout(syncAlbumToIframe, 300);
        }}
        className="w-full h-full border-0 select-none"
        title="Scrapbook 3D Interactive Keepsake"
      />
    </main>
  );
}

export default function TemplatePreviewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf7f0] flex items-center justify-center text-xs text-[#736553]">Memuat pratinjau...</div>}>
      <TemplatePreviewContent />
    </Suspense>
  );
}
