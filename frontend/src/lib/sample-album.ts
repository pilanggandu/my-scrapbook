import type { Album } from "./types";

const samplePages = {
  "0": {
    themeTitle: "Sampul Depan",
    layout: "single-clean",
    titleCutout: "Cerita Kita",
    subtitle: "Untuk Adek",
    storyBrief: "Foto dan catatan kecil untuk ulang tahun Adek, 23 Oktober 2026.",
    captions: ["Aku senang bisa sampai di sini sama kamu."],
    signoff: "dari aku",
    notes: [],
  },
  "1": {
    themeTitle: "Selamat Ulang Tahun, Adek",
    layout: "single-hero",
    titleCutout: "Happy Birthday",
    storyBrief: "Hari Ulang Tahun: 23 Oktober 2026.",
    captions: [
      "senyum favoritku",
      "23 Oktober, hari kamu",
      "selamat ulang tahun, Adek",
    ],
    signoff: "untuk sayang",
    notes: [
      { cls: "foreverNote", text: "senyum\nfavoritku" },
      { cls: "laughNote", text: "senang bisa\nbareng kamu" },
      { cls: "familyNote", text: "23 Oktober,\nhari kamu" },
      { cls: "adventureNote", text: "sebentar lagi\nkita menikah" },
      { cls: "chosenNote", text: "makasih sudah\nmemilihku" },
      { cls: "memoryNote", text: "23 Oktober\n2026" },
      { cls: "littleNote", text: "buat Adek" },
    ],
  },
  "2": {
    themeTitle: "Perjalanan Kita",
    layout: "collage-big-small",
    titleCutout: "Perjalanan Kita",
    subtitle: "foto-foto yang ingin kusimpan",
    storyBrief: "Beberapa foto kita, dari jalan-jalan sampai menyiapkan pernikahan.",
    captions: [
      "jalan-jalan sama kamu",
      "kalau lihat ini, aku ikut ketawa",
      "foto berdua lagi",
    ],
    ticketHeader: "Tiket Kenangan",
    ticketRoute: "Dari awal kenal sampai menyiapkan pernikahan kita.",
    ticketMeta: ["AKU & KAMU", "FOTO KITA", "SEBENTAR LAGI MENIKAH"],
    signoff: "dari aku",
    notes: [
      { cls: "advNote1", text: "kita waktu itu" },
      { cls: "advNote2", text: "jalan-jalan\nsama kamu" },
      { cls: "advNote3", text: "foto berdua lagi" },
      { cls: "advNote4", text: "masih ketawa\nlihat foto ini" },
      { cls: "advNote5", text: "sebentar lagi\nkita menikah" },
      { cls: "advNote6", text: "mau kusimpan\ndi sini" },
      { cls: "advNote7", text: "nanti foto\nbareng lagi, ya" },
    ],
  },
  "3": {
    themeTitle: "Surat buat Adek",
    layout: "single-letter",
    titleCutout: "Untukmu",
    subtitle: "ada yang ingin aku bilang",
    storyBrief: "Surat ulang tahun untuk Adek.",
    captions: [
      "aku senang kamu ada di sini",
      "makasih sudah memilihku",
      "aku sayang kamu",
    ],
    letterText:
      "Selamat ulang tahun, Adek. Aku senang bisa merayakan ulang tahunmu tanggal 23 Oktober ini. Makasih sudah jadi teman cerita dan sabar sama aku. Sebentar lagi kita menikah. Aku masih harus banyak belajar, dan aku mau jadi suami yang baik buat kamu. Semoga kamu selalu sehat dan hatimu tenang. Semoga Allah memudahkan persiapan pernikahan kita. Aku sayang kamu.",
    signoff: "dari aku",
    notes: [
      { cls: "gratNote1", text: "makasih sudah\nmemilihku" },
      { cls: "gratNote2", text: "aku senang\nkamu ada" },
      { cls: "gratNote3", text: "aku sayang kamu" },
      { cls: "gratNote4", text: "buat Adek" },
      { cls: "gratNote5", text: "belajar\nbareng, ya" },
      { cls: "gratNote6", text: "dari aku,\nbuat kamu" },
    ],
  },
  "4": {
    themeTitle: "Kado buat Adek",
    layout: "duo-overlap",
    titleCutout: "Kado Untukmu",
    subtitle: "semoga kamu suka, ya",
    storyBrief: "Aku pilihkan sepatu maroon dan cardigan rajut manis buat kamu.",
    captions: [
      "semoga sepatunya nyaman dipakai",
      "cardigan rajut hangat buat kamu",
      "selamat ulang tahun, sayang",
    ],
    giftCardText: "Aku senang bisa menyiapkan kado ini buat kamu. Semoga sepatu maroon dan cardigannya nyaman dipakai dan kamu suka, ya. Selamat ulang tahun, sayang.",
    signoff: "untuk sayang",
    notes: [
      { cls: "giftNote1", text: "semoga nyaman\ndipakai, ya" },
      { cls: "giftNote2", text: "bunga\nbuat kamu" },
      { cls: "giftNote3", text: "selamat ulang\ntahun, sayang" },
      { cls: "giftNote4", text: "kue ulang tahun,\n23 Oktober 2026" },
      { cls: "giftNote5", text: "semoga\nkamu suka" },
      { cls: "giftNote6", text: "buat kamu" },
    ],
  },
  "5": {
    themeTitle: "Doa untuk Kita",
    layout: "single-hero",
    titleCutout: "Doa Kita",
    subtitle: "bismillah, sebentar lagi kita menikah",
    storyBrief: "Doa dan harapanku untuk rumah tangga kita nanti.",
    captions: [
      "waktu kita lamaran",
      "semoga kita terus akur, ya",
      "bismillah untuk hari-hari nanti",
    ],
    checklist: [
      "Semoga akad kita lancar",
      "Tetap mau mendengarkan satu sama lain",
      "Bisa minta maaf kalau salah",
      "Sempatkan ngobrol meski sedang sibuk",
      "Saling mengingatkan untuk ibadah",
    ],
    signoff: "dari aku",
    notes: [
      { cls: "wishNote1", text: "semoga kita terus akur, ya" },
      { cls: "wishNote2", text: "belajar saling mendengarkan" },
      { cls: "wishNote3", text: "bismillah untuk hari-hari nanti" },
      { cls: "wishNote4", text: "sebentar lagi kita menikah" },
      { cls: "wishNote5", text: "23 Oktober 2026" },
    ],
  },
};

const presentationCopy = {
  brandSub: "foto dan catatan kecil buat Adek",
  nameFallback: "Adek",
  allPagesSubtitle:
    "Foto-foto kita, ucapan ulang tahun, dan beberapa hal yang ingin aku bilang ke kamu.",
  pageTabLabels: {
    "0": "Sampul",
    "1": "Hari Ulang Tahun",
    "2": "Perjalanan",
    "3": "Surat",
    "4": "Kado",
    "5": "Doa Kita",
  },
  letterLabel: "buat Adek",
  letterSignoff: "dari Gilang",
  giftTagSerial: "buat Adek",
  photoGuideTitle: "Tempel 1 foto",
  letterStamp: "SURAT · 23 OKTOBER 2026",
  giftTagLabel: "KADO UNTUKMU",
  mixtapeLabel: "DOA & HARAPAN",
  checklistTitle: "Untuk hari-hari nanti",
  giftItemLabels: {
    shoes: { title: "Sepatu Maroon", description: "semoga nyaman dipakai" },
    outfit: { title: "Cardigan", description: "semoga hangat dan kamu suka" },
  },
  giftAssets: {
    shoes: "images/gift_maroon_shoes.svg",
    outfit: "images/gift_maroon_dress.svg",
  },
  miniThemes: {
    "0": [["goldBox", "our story"], ["roseBox", "23 Oktober 2026"], ["mintBox", "aku & kamu"]],
    "1": [["mintBox", "sayang"], ["yellowBox", "senyum favoritku"], ["lavenderBox", "23 Oktober"]],
    "2": [["peachBox", "kita waktu itu"], ["mintBox", "jalan-jalan lagi, ya"], ["yellowBox", "foto berdua"]],
    "3": [["lavenderBox", "buat kamu"], ["roseBox", "buat Adek"], ["kraftBox", "aku sayang kamu"]],
    "4": [["maroonBox", "sepatu maroon"], ["roseBox", "cardigan rajut"], ["goldBox", "kado spesial"]],
    "5": [["sageBox", "bismillah"], ["yellowBox", "belajar bareng"], ["lavenderBox", "semoga terus akur"]],
  },
  backPageData: {
    "0": {
      badge: "SAMPUL DEPAN",
      title: "Sampul Kenangan",
      subtitle: "Untuk Adek",
      datePrompt: "23 Oktober 2026",
      quote: "Aku kumpulkan foto-foto ini supaya kita bisa lihat lagi kapan-kapan.",
      memo: "buat kamu, sayang",
      signoff: "dari aku.",
    },
    "1": {
      badge: "ULANG TAHUN",
      title: "23 Oktober, Hari Kamu",
      subtitle: "Selamat ulang tahun, Adek.",
      datePrompt: "Ulang Tahun · 23 Oktober 2026",
      quote: "Selamat ulang tahun, Adek. Semoga kamu sehat selalu dan banyak hal baik datang tahun ini.",
      memo: "senyum favoritku",
      signoff: "dari aku.",
    },
    "2": {
      badge: "PERJALANAN",
      title: "Perjalanan kita",
      subtitle: "foto-foto yang ingin kusimpan",
      datePrompt: "Kenangan kita · 2026",
      quote: "Aku suka lihat foto-foto kita lagi. Ada yang bikin senyum, ada juga yang bikin ketawa sendiri.",
      memo: "nanti foto bareng lagi, ya",
      signoff: "dari aku.",
      hasPhotobox: false,
      captions: ["kita waktu itu", "foto berdua lagi"],
    },
    "3": {
      badge: "SURAT",
      title: "Surat buat Adek",
      subtitle: "ada yang ingin aku bilang",
      datePrompt: "Surat · Oktober 2026",
      quote: "Makasih sudah mau jadi teman cerita dan sabar sama aku. Aku ingin terus belajar jadi suami yang baik buat kamu.",
      memo: "buat Adek",
      signoff: "dari aku.",
    },
    "4": {
      badge: "KADO ULANG TAHUN",
      title: "Kado ulang tahun",
      subtitle: "semoga kamu suka, ya",
      datePrompt: "Kado Ulang Tahun · 23 Oktober 2026",
      quote: "Aku senang bisa menyiapkan kado ini buat kamu. Semoga sepatunya nyaman dipakai, ya.",
      memo: "aku pilihkan buat kamu",
      signoff: "dari aku.",
    },
    "5": {
      badge: "AKAD & DOA",
      title: "Doa untuk Kita",
      subtitle: "bismillah, sebentar lagi kita menikah",
      datePrompt: "Menjelang Hari Akad · 2026",
      quote: "Semoga Allah memudahkan pernikahan kita dan menolong kita saling menjaga setelahnya.",
      memo: "belajar bareng, ya",
      signoff: "dari aku.",
    },
  },
  bookSpreadsMeta: [
    { title: "Cerita Kita", badge: "BUKU TERTUTUP", sub: "Untuk Adek" },
    { title: "Ulang Tahun · 23 Oktober 2026", badge: "LEMBAR 1 DUPLEX", sub: "Sisi kiri: pengantar & dedikasi | sisi kanan: ulang tahun & kalender" },
    { title: "Perjalanan kita", badge: "LEMBAR 2 DUPLEX", sub: "Sisi kiri: catatan kenangan | sisi kanan: tiket perjalanan" },
    { title: "Surat buat Adek", badge: "LEMBAR 3 DUPLEX", sub: "Sisi kiri: foto kenangan | sisi kanan: surat buat kamu" },
    { title: "Kado ulang tahun", badge: "LEMBAR 4 DUPLEX", sub: "Sisi kiri: catatan hadiah | sisi kanan: sepatu maroon & cardigan rajut" },
    { title: "Doa untuk Kita", badge: "LEMBAR 5 DUPLEX", sub: "Sisi kiri: doa | sisi kanan: foto lamaran kita" },
    { title: "Sampul belakang", badge: "PENUTUP DUPLEX", sub: "Doa untuk rumah tangga kita" },
  ],
  endpaperTitle: "Untuk Adek",
  endpaperExLibris: "OUR STORY",
  endpaperDedicationLabel: "Untuk:",
  endpaperMessage: "Aku senang bisa sampai di sini sama kamu.",
  endpaperFooter: "buat kamu, dari Gilang",
  backCoverTitle: "Bismillah untuk Kita",
  backCoverQuote:
    "Semoga Allah memudahkan pernikahan kita dan menolong kita saling menjaga setelahnya.",
  backCoverSignature: "23 OKTOBER 2026",
};

export function createSampleAlbum(): Album {
  const now = new Date().toISOString();
  return {
    id: "sample-album-1",
    user_id: "local-user",
    title: "Untuk Adek, Menjelang Akad",
    person_name: "Adek",
    special_date: "2026-10-23",
    status: "draft",
    pages_data: {
      theme: "vintage-islamic",
      totalPages: 5,
      digitalBookUrl: "",
      pages: samplePages,
      photoUrls: {
        "0": "/api/uploads/sample-album-1/slot_0_1792535276918.jpg",
        "1": "/api/uploads/sample-album-1/slot_1_1792535277342.jpg",
        "3": "/api/uploads/sample-album-1/slot_4_1792535278149.jpg",
        "4": "/api/uploads/sample-album-1/slot_3_1792535277634.jpg",
        "5": "/api/uploads/sample-album-1/slot_5_1792535278295.jpg",
        "6": "/api/uploads/sample-album-1/slot_6_1792535278803.jpg",
        "9": "images/gift_maroon_shoes.svg",
        "10": "images/gift_maroon_dress.svg",
        "11": "images/gift_flower_bouquet_fiancee.svg",
        "12": "/api/uploads/sample-album-1/slot_12_1792535279469.jpg",
        "13": "/api/uploads/sample-album-1/slot_13_1792535280152.jpg",
        "20": "/api/uploads/sample-album-1/slot_20_1792535276443.jpg",
      },
      presentationCopy,
    },
    created_at: now,
    updated_at: now,
  };
}

export function normalizeSampleAlbum(album: Album): Album {
  const savedPhotoUrls = Object.fromEntries(
    Object.entries(album.pages_data?.photoUrls || {}).map(([slot, url]) => [
      slot,
      typeof url === "string" && url.startsWith("/uploads/")
        ? url.replace(/^\/uploads\//, "/api/uploads/")
        : url,
    ])
  );
  const normalizedAlbum: Album = {
    ...album,
    pages_data: { ...album.pages_data, photoUrls: savedPhotoUrls },
  };

  if (normalizedAlbum.id !== "sample-album-1") return normalizedAlbum;

  const sample = createSampleAlbum();
  const savedPages = normalizedAlbum.pages_data?.pages || {};
  const pages = { ...savedPages };

  for (const [pageId, page] of Object.entries(samplePages)) {
    const savedPage = savedPages[pageId] || {};
    pages[pageId] = {
      ...savedPage,
      ...page,
      layout: savedPage.layout || page.layout,
    };
  }

  const normalizedPhotoUrls = normalizedAlbum.pages_data?.photoUrls || {};
  const photoUrls = { ...sample.pages_data.photoUrls, ...normalizedPhotoUrls };
  if (
    !normalizedPhotoUrls["11"] ||
    normalizedPhotoUrls["11"] === "images/gift_flower_bouquet.svg" ||
    normalizedPhotoUrls["11"] === "/images/gift_flower_bouquet.svg"
  ) {
    photoUrls["11"] = "images/gift_flower_bouquet_fiancee.svg";
  }

  return {
    ...normalizedAlbum,
    title: sample.title,
    person_name: sample.person_name,
    special_date: sample.special_date,
    pages_data: {
      ...normalizedAlbum.pages_data,
      ...sample.pages_data,
      digitalBookUrl:
        normalizedAlbum.pages_data?.digitalBookUrl !== undefined
          ? normalizedAlbum.pages_data.digitalBookUrl
          : sample.pages_data.digitalBookUrl || "",
      pages,
      photoUrls,
      presentationCopy,
    },
  };
}
