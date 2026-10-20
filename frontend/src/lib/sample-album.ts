import type { Album } from "./types";

const samplePages = {
  "0": {
    themeTitle: "Sampul Depan",
    layout: "single-clean",
    titleCutout: "Our Story",
    subtitle: "A Little Keepsake for My Fiancée",
    storyBrief: "Sampul: Satu cerita, satu tujuan: menua bersama.",
    captions: ["Satu cerita, satu tujuan: menua bersama."],
    signoff: "dari aku",
    notes: [],
  },
  "1": {
    themeTitle: "Hari Istimewa",
    layout: "single-hero",
    titleCutout: "Happy Birthday",
    storyBrief: "Hari Ulang Tahun: 23 Oktober 2026.",
    captions: [
      "senyummu, tempat ternyamanku",
      "sayang, my favorite ♡",
      "23 Oktober, harimu ♡",
    ],
    signoff: "untuk sayang",
    notes: [
      { cls: "foreverNote", text: "senyummu,\ntempat ternyamanku" },
      { cls: "laughNote", text: "sayang,\nmy favorite ♡" },
      { cls: "familyNote", text: "23 Oktober,\nharimu ♡" },
      { cls: "adventureNote", text: "menjelang\nhari akad" },
      { cls: "chosenNote", text: "terima kasih\nsudah memilihku" },
      { cls: "memoryNote", text: "23 Oktober\n2026" },
      { cls: "littleNote", text: "sayang" },
    ],
  },
  "2": {
    themeTitle: "Perjalanan Kita",
    layout: "duo-overlap",
    titleCutout: "Our Journey",
    subtitle: "menuju hari yang kita nantikan",
    storyBrief: "Perjalanan: Mengenang awal cerita kita hingga hari akad.",
    captions: [
      "awal cerita kita",
      "menuju hari yang kita nantikan",
      "selalu berdua, langkah demi langkah",
    ],
    ticketHeader: "Tiket Kenangan",
    ticketRoute: "Dari perjumpaan pertama hingga hari akad yang kita nantikan",
    ticketMeta: ["PERJALANAN KITA", "AWAL CERITA", "MENUJU HARI AKAD"],
    signoff: "dari aku",
    notes: [
      { cls: "advNote1", text: "awal cerita kita" },
      { cls: "advNote2", text: "menuju hari yang\nkita nantikan" },
      { cls: "advNote3", text: "selalu berdua,\nlangkah demi langkah" },
      { cls: "advNote4", text: "tawa dan cerita\nbersama" },
      { cls: "advNote5", text: "menjelang hari\nakad" },
      { cls: "advNote6", text: "dari awal hingga\nhari ini" },
      { cls: "advNote7", text: "langkah kita\nselanjutnya" },
    ],
  },
  "3": {
    themeTitle: "Surat untuk My Fiancée",
    layout: "single-letter",
    titleCutout: "Untukmu",
    subtitle: "Menjelang hari akad",
    storyBrief: "Surat: Untuk my fiancée, menjelang hari akad.",
    captions: [
      "terima kasih sudah memilihku",
      "tawa dan cerita bersamamu",
      "menjelang hari akad",
    ],
    letterText:
      "Selamat ulang tahun, sayang. Pada 23 Oktober ini, aku bersyukur untuk setiap tawa, cerita, dan kesabaran yang kamu bagi denganku. Terima kasih sudah memilih berjalan bersamaku. Menjelang hari akad, insyaAllah kita akan mengikat mitsaqan ghalidza di hadapan wali dan saksi. Semoga Allah menjaga langkah kita dan menuntun rumah tangga kita menuju sakinah, mawaddah, wa rahmah. Aku akan terus belajar menyayangimu dengan baik, hari ini dan sepanjang hidup kita.",
    signoff: "dari aku",
    notes: [
      { cls: "gratNote1", text: "terima kasih\nsudah memilihku" },
      { cls: "gratNote2", text: "tawa, cerita,\ndan sabarmu" },
      { cls: "gratNote3", text: "menjelang hari\nakad" },
      { cls: "gratNote4", text: "my fiancée" },
      { cls: "gratNote5", text: "insyaAllah" },
      { cls: "gratNote6", text: "hari ini dan\nseterusnya" },
    ],
  },
  "4": {
    themeTitle: "Kado untuk Sayang",
    layout: "duo-overlap",
    titleCutout: "Kado Untukmu",
    subtitle: "Kado ulang tahun untuk sayang",
    storyBrief: "Kado: Sepatu maroon, outfit pilihan, buket mawar, dan kue ulang tahun.",
    captions: [
      "sepatu maroon untuk langkah barumu",
      "buket mawar untuk sayang",
      "23 Oktober 2026, harimu ♡",
    ],
    giftCardText:
      "Sepatu maroon, outfit pilihan, buket mawar, dan kue ulang tahun untuk merayakanmu. Semoga setiap hadiah ini mengingatkanmu betapa bahagianya aku memanggilmu sayang. Menjelang hari akad, insyaAllah, kita mulai babak baru sebagai suami istri.",
    signoff: "untuk sayang",
    notes: [
      { cls: "giftNote1", text: "sepatu maroon\nuntuk langkah barumu" },
      { cls: "giftNote2", text: "buket mawar\nuntuk sayang" },
      { cls: "giftNote3", text: "23 Oktober 2026,\nharimu ♡" },
      { cls: "giftNote4", text: "kue ulang tahun,\n23 Oktober 2026" },
      { cls: "giftNote5", text: "menjelang hari\nakad" },
      { cls: "giftNote6", text: "sayang" },
    ],
  },
  "5": {
    themeTitle: "Akad & Doa",
    layout: "single-hero",
    titleCutout: "Akad & Doa",
    subtitle: "Bismillah menuju hari akad kita",
    storyBrief: "Doa: Untuk rumah tangga kita.",
    captions: [
      "menyambut masa depan bersama",
      "doa untuk rumah tangga kita",
      "bismillah menuju hari akad kita",
    ],
    checklist: [
      "Menjalani akad dengan lancar",
      "Membangun rumah tangga dengan doa",
      "Belajar saling memahami",
      "Menjalani hari-hari bersama",
      "Saling mendukung dalam ibadah",
    ],
    signoff: "dari aku",
    notes: [
      { cls: "wishNote1", text: "menyambut masa depan bersama" },
      { cls: "wishNote2", text: "doa untuk rumah tangga kita" },
      { cls: "wishNote3", text: "bismillah menuju hari akad kita" },
      { cls: "wishNote4", text: "menjelang hari akad" },
      { cls: "wishNote5", text: "23 Oktober 2026" },
    ],
  },
};

const presentationCopy = {
  brandSub: "for my fiancée · wedding & birthday album",
  nameFallback: "Salsadila",
  allPagesSubtitle:
    "Pratinjau album: ulang tahun, perjalanan kita, surat, kado, dan doa menjelang hari akad.",
  pageTabLabels: {
    "0": "Sampul",
    "1": "Hari Ulang Tahun",
    "2": "Perjalanan",
    "3": "Surat",
    "4": "Kado",
    "5": "Akad & Doa",
  },
  letterLabel: "surat untuk sayang",
  letterSignoff: "untuk sayang, dari aku",
  giftTagSerial: "for my fiancée",
  photoGuideTitle: "Tempel 1 foto",
  letterStamp: "SURAT · 23 OKTOBER 2026",
  giftTagLabel: "KADO UNTUKMU",
  mixtapeLabel: "DOA & HARAPAN",
  checklistTitle: "Harapan untuk rumah tangga kita",
  giftItemLabels: {
    shoes: { title: "Sepatu Maroon", description: "untuk langkah barumu" },
    outfit: { title: "Outfit Pilihan", description: "pilihanmu" },
    bouquet: { title: "Buket Mawar", description: "untuk sayang" },
    cake: { title: "Kue Ulang Tahun", description: "23 Oktober 2026" },
  },
  giftAssets: {
    shoes: "images/gift_maroon_shoes.svg",
    outfit: "images/gift_maroon_dress.svg",
    bouquet: "images/gift_flower_bouquet_fiancee.svg",
    cake: "images/gift_birthday_cake.svg",
  },
  miniThemes: {
    "0": [["goldBox", "our story"], ["roseBox", "23 Oktober 2026"], ["mintBox", "menjelang akad"]],
    "1": [["mintBox", "sayang"], ["yellowBox", "my favorite"], ["lavenderBox", "23 Oktober"]],
    "2": [["peachBox", "awal cerita kita"], ["mintBox", "hari yang kita nantikan"], ["yellowBox", "langkah demi langkah"]],
    "3": [["lavenderBox", "surat untukmu"], ["roseBox", "my fiancée"], ["kraftBox", "menjelang akad"]],
    "4": [["maroonBox", "sepatu maroon"], ["roseBox", "buket mawar"], ["goldBox", "kue ulang tahun"]],
    "5": [["sageBox", "akad & doa"], ["yellowBox", "rumah tangga kita"], ["lavenderBox", "masa depan bersama"]],
  },
  backPageData: {
    "0": {
      badge: "SAMPUL DEPAN",
      title: "Sampul Kenangan",
      subtitle: "A Little Keepsake for My Fiancée",
      datePrompt: "23 Oktober 2026",
      quote: "Satu cerita, satu tujuan: menua bersama.",
      memo: "menjelang hari akad",
      signoff: "dari aku.",
    },
    "1": {
      badge: "ULANG TAHUN",
      title: "23 Oktober, Harimu",
      subtitle: "Selamat ulang tahun, sayang.",
      datePrompt: "Ulang Tahun · 23 Oktober 2026",
      quote: "Pada 23 Oktober ini, aku bersyukur untuk setiap tawa, cerita, dan kesabaran yang kamu bagi denganku.",
      memo: "sayang, my favorite ♡",
      signoff: "dari aku.",
    },
    "2": {
      badge: "PERJALANAN",
      title: "Perjalanan kita",
      subtitle: "menuju hari yang kita nantikan",
      datePrompt: "Kenangan kita · 2026",
      quote: "Dari perjumpaan pertama hingga hari akad yang kita nantikan.",
      memo: "selalu berdua, langkah demi langkah",
      signoff: "dari aku.",
      hasPhotobox: true,
      captions: ["awal cerita kita", "selalu berdua, langkah demi langkah"],
    },
    "3": {
      badge: "SURAT",
      title: "Surat untuk My Fiancée",
      subtitle: "menjelang hari akad",
      datePrompt: "Surat · Oktober 2026",
      quote: "Terima kasih sudah memilih berjalan bersamaku. Menjelang hari akad, insyaAllah kita akan mengikat mitsaqan ghalidza di hadapan wali dan saksi.",
      memo: "my fiancée",
      signoff: "dari aku.",
    },
    "4": {
      badge: "KADO ULANG TAHUN",
      title: "Kado ulang tahun",
      subtitle: "Sepatu maroon, outfit pilihan, buket mawar, dan kue ulang tahun.",
      datePrompt: "Kado Ulang Tahun · 23 Oktober 2026",
      quote: "Semoga setiap hadiah ini mengingatkanmu betapa bahagianya aku memanggilmu sayang.",
      memo: "sepatu maroon untuk langkah barumu",
      signoff: "dari aku.",
    },
    "5": {
      badge: "AKAD & DOA",
      title: "Doa untuk rumah tangga kita",
      subtitle: "bismillah menuju hari akad kita",
      datePrompt: "Menjelang Hari Akad · 2026",
      quote: "Semoga Allah menjaga langkah kita dan menuntun rumah tangga kita menuju sakinah, mawaddah, wa rahmah.",
      memo: "menyambut masa depan bersama",
      signoff: "dari aku.",
    },
  },
  bookSpreadsMeta: [
    { title: "Our Story", badge: "BUKU TERTUTUP", sub: "Untuk Salsadila" },
    { title: "Ulang Tahun · 23 Oktober 2026", badge: "LEMBAR 1 DUPLEX", sub: "Sisi kiri: pengantar & dedikasi | sisi kanan: ulang tahun & kalender" },
    { title: "Perjalanan kita", badge: "LEMBAR 2 DUPLEX", sub: "Sisi kiri: catatan kenangan | sisi kanan: tiket perjalanan" },
    { title: "Surat untuk My Fiancée", badge: "LEMBAR 3 DUPLEX", sub: "Sisi kiri: photobox | sisi kanan: surat menjelang hari akad" },
    { title: "Kado ulang tahun", badge: "LEMBAR 4 DUPLEX", sub: "Sisi kiri: catatan hadiah | sisi kanan: sepatu maroon, buket mawar & kue ulang tahun" },
    { title: "Akad & Doa", badge: "LEMBAR 5 DUPLEX", sub: "Sisi kiri: doa | sisi kanan: langkah menuju hari akad" },
    { title: "Sampul belakang", badge: "PENUTUP DUPLEX", sub: "Doa untuk rumah tangga kita" },
  ],
  endpaperTitle: "A Little Keepsake for My Fiancée",
  endpaperExLibris: "OUR STORY",
  endpaperDedicationLabel: "Untuk:",
  endpaperMessage: "Satu cerita, satu tujuan: menua bersama.",
  endpaperFooter: "untuk sayang, dari aku",
  backCoverTitle: "Doa untuk Rumah Tangga Kita",
  backCoverQuote:
    "Semoga Allah menjaga langkah kita dan menuntun rumah tangga kita menuju sakinah, mawaddah, wa rahmah.",
  backCoverSignature: "23 OKTOBER 2026",
};

export function createSampleAlbum(): Album {
  const now = new Date().toISOString();
  return {
    id: "sample-album-1",
    user_id: "local-user",
    title: "Untuk Salsadila, Menjelang Akad",
    person_name: "Salsadila",
    special_date: "2026-10-23",
    status: "draft",
    pages_data: {
      theme: "vintage-islamic",
      totalPages: 5,
      digitalBookUrl: "",
      pages: samplePages,
      photoUrls: {
        "9": "images/gift_maroon_shoes.svg",
        "10": "images/gift_maroon_dress.svg",
        "11": "images/gift_flower_bouquet_fiancee.svg",
      },
      presentationCopy,
    },
    created_at: now,
    updated_at: now,
  };
}

export function normalizeSampleAlbum(album: Album): Album {
  if (album.id !== "sample-album-1") return album;

  const sample = createSampleAlbum();
  const savedPages = album.pages_data?.pages || {};
  const pages = { ...savedPages };

  for (const [pageId, page] of Object.entries(samplePages)) {
    const savedPage = savedPages[pageId] || {};
    pages[pageId] = {
      ...savedPage,
      ...page,
      layout: savedPage.layout || page.layout,
    };
  }

  const savedPhotoUrls = album.pages_data?.photoUrls || {};
  const photoUrls = { ...sample.pages_data.photoUrls, ...savedPhotoUrls };
  if (
    !savedPhotoUrls["11"] ||
    savedPhotoUrls["11"] === "images/gift_flower_bouquet.svg" ||
    savedPhotoUrls["11"] === "/images/gift_flower_bouquet.svg"
  ) {
    photoUrls["11"] = "images/gift_flower_bouquet_fiancee.svg";
  }

  return {
    ...album,
    title: sample.title,
    person_name: sample.person_name,
    special_date: sample.special_date,
    pages_data: {
      ...album.pages_data,
      ...sample.pages_data,
      digitalBookUrl:
        album.pages_data?.digitalBookUrl !== undefined
          ? album.pages_data.digitalBookUrl
          : sample.pages_data.digitalBookUrl || "",
      pages,
      photoUrls,
      presentationCopy,
    },
  };
}
