"use strict";

(() => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const paperColors = ["#f9e8bf", "#b2d4c5", "#edc2d0", "#d6c5e2", "#f8d0b5", "#e9ecd8"];
  const inkColors = ["#5e8c83", "#9c5873", "#927343", "#826897", "#b36a50", "#557c78"];

  const state = {
    name: "Calon Istriku",
    birthday: "",
    albumId: null,
    albumTitle: null,
    digitalBookUrl: "",
    presentationCopy: null,
    currentPage: 1,
    currentView: "full",
    photoUrls: new Map([
      [9, "images/gift_maroon_shoes.svg"],
      [10, "images/gift_maroon_dress.svg"],
      [11, "images/gift_flower_bouquet.svg"]
    ]),
    pages: {
      0: {
        id: 0,
        layout: "single-clean",
        themeTitle: "Sampul Depan",
        titleCutout: "OuR StOrY",
        subtitle: "A Little Keepsake for My Future Wife",
        storyBrief: "Sampul Depan Album: Persembahan cinta dan kenangan manis untuk calon istri tercinta menjelang hari akad nikah kita.",
        captions: ["foto sampul terbaik berdua", "", ""],
        signoff: "bismillah, kisah cinta kita menuju pelaminan.",
        notes: [],
        photoPositions: [{ x: 50, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 50 }]
      },
      1: {
        id: 1,
        layout: "single-hero",
        themeTitle: "Hari Istimewa",
        titleCutout: "HaPpY BiRThDaY",
        storyBrief: "Halaman 1 dari 5: Hari lahir calon istri tercinta. Ultah terakhir berstatus calon istri sebelum bulan depan kita sah menikah.",
        captions: ["senyum manis calon istri tercinta", "the bride to be ♡", "selamat ulang tahun, bidadariku"],
        signoff: "forever yours, calon suamimu.",
        notes: [
          { cls: "foreverNote", text: "Forever\nwith you" },
          { cls: "laughNote", text: "Laughs\n& love" },
          { cls: "familyNote", text: "Soon to be\nmy lovely\nwife" },
          { cls: "adventureNote", text: "Bulan depan\nkita sah" },
          { cls: "chosenNote", text: "My heart found its forever home" },
          { cls: "memoryNote", text: "Menghitung hari\nmenuju akad\nnikah kita" },
          { cls: "littleNote", text: "my bride" }
        ],
        photoPositions: [{ x: 50, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 50 }]
      },
      2: {
        id: 2,
        layout: "duo-overlap",
        themeTitle: "Perjalanan Cinta",
        titleCutout: "OuR JoUrNeY",
        subtitle: "from dating days to wedding day next month",
        storyBrief: "Halaman 2 dari 5: Kilas balik perjalanan cinta kita, dari kencan pertama hingga mantap melangkah ke pelaminan bulan depan.",
        captions: ["cerita kencan pertama kita", "siap bersanding di pelaminan", "langkah demi langkah berdua"],
        signoff: "bismillah, tak sabar bersanding di pelaminan bersamamu.",
        ticketHeader: "Tiket Kenangan · Perjalanan Menuju Akad",
        ticketRoute: "Dari awal perjumpaan hingga melangkah mantap menuju akad nikah",
        ticketMeta: ["IKHTIAR: BERDUA", "TUJUAN: SAKINAH MAWADDAH", "INSYA ALLAH BULAN DEPAN"],
        notes: [
          { cls: "advNote1", text: "Found my home\nin you" },
          { cls: "advNote2", text: "Perjalanan indah\nmenuju hari\nbahagia kita" },
          { cls: "advNote3", text: "Choosing you\nevery single day" },
          { cls: "advNote4", text: "Sunset with\nmy future wife" },
          { cls: "advNote5", text: "Bulan depan\nkita bersanding" },
          { cls: "advNote6", text: "Ready for our\nforever" },
          { cls: "advNote7", text: "My forever\nlove" }
        ],
        photoPositions: [{ x: 50, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 50 }]
      },
      3: {
        id: 3,
        layout: "single-letter",
        themeTitle: "Surat Calon Istri",
        titleCutout: "My FuTuRe WiFe",
        subtitle: "a love letter before our wedding day",
        storyBrief: "Halaman 3 dari 5: Surat cinta dan ungkapan syukur untuk calon istriku. Menghitung hari menuju akad nikah dan ibadah seumur hidup bersamamu.",
        captions: ["wanita yang kupilih seumur hidup", "pelukan terhangat calon istri", "tatapan tulus menuju masa depan"],
        letterText: "Selamat ulang tahun calon istriku tersayang. Terima kasih sudah menerima kekuranganku dan memilihku. Bulan depan, dengan izin Allah, saat ijab kabul terucap di hadapan wali dan saksi, kita mengikat mitsaqan ghalidza. Aku berikhtiar dengan segenap hatiku untuk selalu menjagamu, membimbingmu, dan bersama meraih ridha-Nya dalam keluarga yang sakinah, mawaddah, warahmah.",
        signoff: "dengan segenap jiwaku, calon suamimu.",
        notes: [
          { cls: "gratNote1", text: "Thank you for\nchoosing me" },
          { cls: "gratNote2", text: "Safe harbor\nin your arms" },
          { cls: "gratNote3", text: "Bulan depan\nbidadariku sah" },
          { cls: "gratNote4", text: "Kindest soul\nmy bride" },
          { cls: "gratNote5", text: "Ibadah seumur\nhidup bersamamu" },
          { cls: "gratNote6", text: "Side by side\nfor life" }
        ],
        photoPositions: [{ x: 50, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 50 }]
      },
      4: {
        id: 4,
        layout: "duo-overlap",
        themeTitle: "Kado Pernikahan",
        titleCutout: "SpEcIaL GiFt",
        subtitle: "sepatu maroon & cardigan untuk calon istriku",
        storyBrief: "Halaman 4 dari 5: Kado cinta spesial untuk calon istriku: sepatu merah maroon dan cardigan rajut manis.",
        captions: [
          "sepatu maroon untuk melangkah bersama",
          "cardigan rajut manis & hangat untukmu",
          "hadiah spesial untuk calon istri tercantik"
        ],
        giftCardText: "Sepatu maroon dan cardigan rajut manis spesial untuk calon istri tercantikku. Bulan depan kita mulai babak baru!",
        signoff: "crafted with all my love for my future wife.",
        notes: [
          { cls: "giftNote1", text: "Maroon looks\nstunning on you" },
          { cls: "giftNote2", text: "Warm cardigan\njust for you" },
          { cls: "giftNote3", text: "Sweet steps,\nsweeter future" },
          { cls: "giftNote4", text: "A gift from my\nheart to yours" },
          { cls: "giftNote5", text: "Siap melangkah\nke pelaminan" },
          { cls: "giftNote6", text: "The most beautiful\nbride-to-be" }
        ],
        photoPositions: [{ x: 50, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 50 }]
      },
      5: {
        id: 5,
        layout: "single-hero",
        themeTitle: "Akad & Doa",
        titleCutout: "AkAd & DoA",
        subtitle: "chapter 2026: building our home together",
        storyBrief: "Halaman 5 dari 5: Doa menyempurnakan separuh agama, ikhtiar membangun rumah tangga sakinah mawaddah warahmah, checklist impian setelah sah, dan lagu kenangan kita.",
        captions: [
          "menatap masa depan berdua",
          "doa terbaik untuk keluarga kecil kita",
          "bismillah menuju hari akad nikah"
        ],
        checklist: [
          "Ijab kabul lancar dan khidmat di hadapan wali",
          "Membangun keluarga sakinah, mawaddah, warahmah",
          "Saling menyempurnakan ibadah dan saling mendoakan",
          "Bulan madu manis dan liburan berdua",
          "Mendidik anak-anak sholeh & sholehah hingga ke jannah"
        ],
        signoff: "bismillah melangkah bersama menuju surga-Nya.",
        notes: [
          { cls: "wishNote1", text: "Sakinah Mawaddah\nWarahmah" },
          { cls: "wishNote2", text: "Building our\nhome together" },
          { cls: "wishNote3", text: "Till jannah\nwith you" },
          { cls: "wishNote4", text: "Separuh agamaku\nsempurna" },
          { cls: "wishNote5", text: "2026: The year\nwe unite" }
        ],
        photoPositions: [{ x: 50, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 50 }]
      }
    }
  };

  // Helper resolusi URL Buku Digital (Mode View Book)
  function getEffectiveDigitalBookUrl() {
    if (state.digitalBookUrl && state.digitalBookUrl.trim()) {
      return state.digitalBookUrl.trim();
    }
    try {
      let origin = window.location.origin;
      try {
        if (window.parent && window.parent.location && window.parent.location.origin) {
          origin = window.parent.location.origin;
        }
      } catch (e) {}

      if (state.albumId && !String(state.albumId).startsWith("sample-")) {
        return `${origin}/preview/romantic-islamic-keepsake?albumId=${encodeURIComponent(state.albumId)}&view=book`;
      }
      const u = new URL(window.location.href);
      u.searchParams.set("view", "book");
      return u.toString();
    } catch {
      return window.location.href.split("?")[0] + "?view=book";
    }
  }

  // ==========================================================================
  // HELPER PENGATUR POSISI FOTO POLAROID (PAN / OBJECT-POSITION)
  // ==========================================================================

  function getPhotoPosition(pageId, slot) {
    const p = state.pages[pageId];
    if (!p) return { x: 50, y: 50 };
    if (!Array.isArray(p.photoPositions)) {
      p.photoPositions = [
        { x: 50, y: 50 },
        { x: 50, y: 50 },
        { x: 50, y: 50 }
      ];
    }
    const pos = p.photoPositions[slot];
    if (!pos || typeof pos.x !== "number" || typeof pos.y !== "number") {
      return { x: 50, y: 50 };
    }
    return {
      x: Math.max(0, Math.min(100, Math.round(pos.x))),
      y: Math.max(0, Math.min(100, Math.round(pos.y)))
    };
  }

  function setPhotoPosition(pageId, slot, x, y) {
    const p = state.pages[pageId];
    if (!p) return;
    if (!Array.isArray(p.photoPositions)) {
      p.photoPositions = [
        { x: 50, y: 50 },
        { x: 50, y: 50 },
        { x: 50, y: 50 }
      ];
    }
    const clampedX = Math.max(0, Math.min(100, Math.round(x)));
    const clampedY = Math.max(0, Math.min(100, Math.round(y)));
    p.photoPositions[slot] = { x: clampedX, y: clampedY };
  }

  function syncPhotoPositions(slot, x, y) {
    const framePhoto = document.querySelector(`.photoFrame[data-slot="${slot}"] .photo`);
    if (framePhoto) {
      framePhoto.style.objectPosition = `${x}% ${y}%`;
    }
    const cardPhoto = document.querySelector(`.printablePolaroid[data-slot="${slot}"] .cardPhoto`);
    if (cardPhoto) {
      cardPhoto.style.objectPosition = `${x}% ${y}%`;
    }
  }

  function renderPhotoAdjustToolbar(container, pageId, slot, isSheet) {
    container.querySelector(".photoAdjustToolbar")?.remove();
    container.querySelector(".photoPosBadge")?.remove();

    const bar = document.createElement("div");
    bar.className = "photoAdjustToolbar";
    bar.setAttribute("role", "toolbar");
    bar.setAttribute("aria-label", "Atur posisi foto polaroid");
    bar.innerHTML = `
      <div class="photoAdjustPanHint" title="Klik & seret foto untuk menggeser posisi" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 9l-3 3 3 3M9 5l3-3 3 3M19 9l3 3-3 3M9 19l3 3 3-3M2 12h20M12 2v20"/></svg>
        <span>Geser</span>
      </div>
      <div class="photoNudgeGroup">
        <button type="button" class="photoAdjustBtn btnNudge" data-dir="up" title="Geser ke atas" aria-label="Geser ke atas">▲</button>
        <button type="button" class="photoAdjustBtn btnNudge" data-dir="down" title="Geser ke bawah" aria-label="Geser ke bawah">▼</button>
        <button type="button" class="photoAdjustBtn btnNudge" data-dir="left" title="Geser ke kiri" aria-label="Geser ke kiri">◀</button>
        <button type="button" class="photoAdjustBtn btnNudge" data-dir="right" title="Geser ke kanan" aria-label="Geser ke kanan">▶</button>
      </div>
      <button type="button" class="photoAdjustBtn btnResetPos" title="Kembalikan posisi foto ke tengah (50% 50%)" aria-label="Reset posisi foto">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
      </button>
      <button type="button" class="photoAdjustBtn btnReplacePhoto" title="Ganti file foto ini" aria-label="Ganti foto">
        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        <span>Ganti</span>
      </button>
    `;

    const badge = document.createElement("div");
    badge.className = "photoPosBadge";
    badge.setAttribute("aria-live", "polite");

    container.append(bar, badge);

    let badgeTimer = null;
    const showBadge = (x, y) => {
      badge.textContent = `Posisi: ${x}% · ${y}%`;
      badge.classList.add("is-visible");
      clearTimeout(badgeTimer);
      badgeTimer = setTimeout(() => {
        badge.classList.remove("is-visible");
      }, 1500);
    };

    bar.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      const nudge = e.target.closest(".btnNudge");
      if (nudge) {
        const dir = nudge.dataset.dir;
        const cur = getPhotoPosition(pageId, slot);
        let nx = cur.x;
        let ny = cur.y;
        const STEP = 5;
        if (dir === "left") nx = Math.max(0, nx - STEP);
        if (dir === "right") nx = Math.min(100, nx + STEP);
        if (dir === "up") ny = Math.max(0, ny - STEP);
        if (dir === "down") ny = Math.min(100, ny + STEP);

        setPhotoPosition(pageId, slot, nx, ny);
        syncPhotoPositions(slot, nx, ny);
        notifyParentChange();
        showBadge(nx, ny);
        return;
      }

      const reset = e.target.closest(".btnResetPos");
      if (reset) {
        setPhotoPosition(pageId, slot, 50, 50);
        syncPhotoPositions(slot, 50, 50);
        notifyParentChange();
        showBadge(50, 50);
        return;
      }

      const replace = e.target.closest(".btnReplacePhoto");
      if (replace) {
        const input = document.querySelector(`.photoFrame[data-slot="${slot}"] input.fileInput`);
        if (input) input.click();
        return;
      }
    });
  }

  // Helper pembuatan QR Code SVG murni
  function generateQrSvg(url, options = {}) {
    const darkColor = options.darkColor || "#1d2c22";
    const lightColor = options.lightColor || "#ffffff";
    if (typeof QRCode !== "undefined" && QRCode.toString) {
      let result = "";
      QRCode.toString(url, {
        type: "svg",
        margin: 1,
        color: { dark: darkColor, light: lightColor }
      }, (err, svg) => {
        if (!err && svg) result = svg;
      });
      if (result) return result;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><rect width="100" height="100" fill="${lightColor}"/><text x="50" y="55" font-size="10" font-family="sans-serif" text-anchor="middle" fill="${darkColor}">QR Code</text></svg>`;
  }

  // Helper pembaruan serentak seluruh elemen QR Code di layar dan mode cetak
  function updateAllQrCodes() {
    const bookUrl = getEffectiveDigitalBookUrl();
    const qrSvg = generateQrSvg(bookUrl, { darkColor: "#1d2c22", lightColor: "#ffffff" });

    // 0. QR Code di Sampul Depan (Cover Keepsake)
    const coverQrBoxes = document.querySelectorAll(".coverQrBox, #cover-qr-code-svg");
    coverQrBoxes.forEach((box) => {
      box.innerHTML = qrSvg;
    });
    const coverQrUrls = document.querySelectorAll(".coverQrUrlText");
    coverQrUrls.forEach((u) => {
      u.textContent = bookUrl;
      u.parentElement?.setAttribute("title", bookUrl);
    });

    // 1. Margin slug di editor
    const marginSlugQr = document.getElementById("margin-slug-qr-box");
    if (marginSlugQr) marginSlugQr.innerHTML = qrSvg;

    // 2. Footer lembar foto cetak
    const photoSheetQr = document.getElementById("photo-sheet-qr-box");
    if (photoSheetQr) photoSheetQr.innerHTML = qrSvg;

    // 3. Footer lembar stiker cetak
    const stickerSheetQr = document.getElementById("sticker-sheet-qr-box");
    if (stickerSheetQr) stickerSheetQr.innerHTML = qrSvg;

    // 4. Stempel pos QR di sisi balik duplex
    const backQrBoxes = document.querySelectorAll(".postalStampQr, #back-qr-code-svg");
    backQrBoxes.forEach((box) => {
      box.innerHTML = qrSvg;
    });

    // 5. Banner pratinjau di dialog cetak
    const printQrDest = document.getElementById("print-qr-dest-preview");
    if (printQrDest) printQrDest.textContent = `Tujuan: ${bookUrl}`;

    // 6. Pratinjau langsung di dialog editor studio
    const editorQrBox = document.getElementById("editor-qr-code-display");
    if (editorQrBox) editorQrBox.innerHTML = qrSvg;
    const editorQrText = document.getElementById("editor-qr-target-url-text");
    if (editorQrText) editorQrText.textContent = bookUrl;

    // 7. QR Code pada kartu panduan & sampul belakang
    const guideQrBoxes = document.querySelectorAll(".guideQrSvg");
    guideQrBoxes.forEach((box) => { box.innerHTML = qrSvg; });
    const backCoverQrBoxes = document.querySelectorAll(".backCoverQrFrame");
    backCoverQrBoxes.forEach((box) => { box.innerHTML = qrSvg; });
    const backCoverQrUrls = document.querySelectorAll(".backCoverQrUrl");
    backCoverQrUrls.forEach((u) => { u.textContent = bookUrl; });
  }

  // Helper akses & penyimpanan foto aman terhadap tipe key (string / number)
  function getPhotoUrl(slotKey) {
    if (state.photoUrls.has(slotKey)) return state.photoUrls.get(slotKey);
    const num = Number(slotKey);
    if (!isNaN(num) && state.photoUrls.has(num)) return state.photoUrls.get(num);
    const str = String(slotKey);
    if (state.photoUrls.has(str)) return state.photoUrls.get(str);
    return null;
  }

  function hasPhotoUrl(slotKey) {
    return !!getPhotoUrl(slotKey);
  }

  function setPhotoUrl(slotKey, url) {
    if (!url) {
      removePhotoUrl(slotKey);
      return;
    }
    state.photoUrls.set(slotKey, url);
    const num = Number(slotKey);
    if (!isNaN(num)) {
      state.photoUrls.set(num, url);
      state.photoUrls.set(String(num), url);
    }
  }

  function removePhotoUrl(slotKey) {
    state.photoUrls.delete(slotKey);
    const num = Number(slotKey);
    if (!isNaN(num)) {
      state.photoUrls.delete(num);
      state.photoUrls.delete(String(num));
    }
    const str = String(slotKey);
    state.photoUrls.delete(str);
  }

  function cutoutLetters(element, text, offset = 0) {
    if (!element) return;
    element.replaceChildren();
    Array.from(text).forEach((letter, index) => {
      const n = index + offset;
      const span = document.createElement("span");
      span.className = letter === " " ? "letterSpace" : "letter";
      span.textContent = letter;
      span.style.backgroundColor = paperColors[n % paperColors.length];
      span.style.color = inkColors[n % inkColors.length];
      span.style.transform = `rotate(${[-7, 3, -3, 6, -4, 2][n % 6]}deg) translateY(${[0, 2, -1, 1][n % 4]}%)`;
      span.style.fontFamily = ["Georgia, serif", "var(--font-playfair), Georgia, serif", "var(--font-jakarta), sans-serif"][n % 3];
      element.append(span);
    });
  }

  // Render Widget Segel Pita Sampul & Akses QR Buku Digital untuk Sampul Depan (Halaman 0) - Dihilangkan total dari cover
  function renderCoverSealWidget(container) {
    if (!container) return;
    container.replaceChildren();
    container.style.display = "none";
  }

  // Render Widget Kalender untuk Halaman 1
  function renderCalendarWidget(container, isBase = false) {
    container.replaceChildren();
    if (isBase) {
      const guide = document.createElement("div");
      guide.className = "widgetPasteGuide calendarGuide";
      guide.innerHTML = `
        <div class="guideCutIcon">✂</div>
        <div class="guideTitle">Area Tempel : Kalender Hari Istimewa</div>
        <div class="guideSubtitle">Gunting kartu kalender dari Lembar Kartu DIY lalu tempel di sini (foam tape 3D)</div>
      `;
      container.append(guide);
      return;
    }
    const section = document.createElement("section");
    section.className = "calendar";
    section.id = "calendar";

    const [year, month, day] = (state.birthday || "2026-06-01").split("-").map(Number);
    const label = `${months[month - 1]} ${year}`;
    section.setAttribute("aria-label", `Kalender ${label}`);

    const inner = document.createElement("div");
    inner.className = "calendarInner";

    const h2 = document.createElement("h2");
    h2.id = "calendar-heading";
    h2.textContent = label;
    inner.append(h2);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `<tr><th scope="col">SUN</th><th scope="col">MON</th><th scope="col">TUE</th><th scope="col">WED</th><th scope="col">THU</th><th scope="col">FRI</th><th scope="col">SAT</th></tr>`;
    table.append(thead);

    const tbody = document.createElement("tbody");
    tbody.id = "calendar-days";

    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDay = new Date(year, month, 0).getDate();
    const totalCells = Math.ceil((firstDay + lastDay) / 7) * 7;

    let row;
    for (let index = 0; index < totalCells; index++) {
      if (index % 7 === 0) {
        row = document.createElement("tr");
        tbody.append(row);
      }
      const cell = document.createElement("td");
      const number = index - firstDay + 1;
      if (number > 0 && number <= lastDay) {
        const span = document.createElement("span");
        span.textContent = number;
        if (state.birthday && number === day) {
          span.className = "birthdayDate";
          span.setAttribute("aria-label", `${number}, hari ulang tahun`);
        }
        cell.append(span);
      }
      row.append(cell);
    }

    table.append(tbody);
    inner.append(table);
    section.append(inner);
    container.append(section);
  }

  // Render Widget Tiket Perjalanan untuk Halaman 2
  function renderTicketWidget(container, isBase = false) {
    container.replaceChildren();
    if (isBase) {
      const guide = document.createElement("div");
      guide.className = "widgetPasteGuide ticketGuide";
      guide.innerHTML = `
        <div class="guideCutIcon">✂</div>
        <div class="guideTitle">Area Tempel : Tiket Perjalanan Kenangan</div>
        <div class="guideSubtitle">Gunting tiket dari Lembar Kartu DIY lalu tempel di sini (washi / foam tape)</div>
      `;
      container.append(guide);
      return;
    }
    const p2 = state.pages[2] || {};
    const header = p2.ticketHeader || "Tiket Kenangan · Perjalanan Menuju Akad";
    const route = p2.ticketRoute || "Dari awal perjumpaan hingga melangkah mantap menuju akad nikah";
    const metaList = Array.isArray(p2.ticketMeta)
      ? p2.ticketMeta
      : ["IKHTIAR: BERDUA", "TUJUAN: SAKINAH MAWADDAH", "INSYA ALLAH BULAN DEPAN"];

    const ticket = document.createElement("div");
    ticket.className = "travelTicket";
    ticket.innerHTML = `
      <div class="ticketTape" aria-hidden="true"></div>
      <div class="ticketStubLeft">
        <span class="ticketStubTag">MEMORABILIA</span>
        <span class="ticketStubYear">2026</span>
        <span class="ticketStubStatus">MENUJU AKAD</span>
      </div>
      <div class="ticketDivider" aria-hidden="true"></div>
      <div class="ticketMain">
        <p class="ticketTheme">${header}</p>
        <p class="ticketRoute">${route}</p>
        <div class="ticketMeta">${metaList.map((m) => `<span>${m}</span>`).join('<span class="metaDot">·</span>')}</div>
      </div>
    `;
    container.append(ticket);
  }

  // Auto-fit teks secara dinamis agar penuh di dalam frame kartu & tidak terpotong
  function autoFitDynamicText(bodyEl, cardEl, minCqw = 0.85) {
    if (!bodyEl || !cardEl) return;
    if (bodyEl.closest(".cardsSheet")) {
      bodyEl.style.fontSize = "";
      bodyEl.style.lineHeight = "";
      return;
    }

    const runFit = () => {
      if (!bodyEl.isConnected) return;
      const sb = cardEl.closest(".scrapbook") || document.querySelector(".scrapbook");
      const cqw = (sb && sb.clientWidth > 0 ? sb.clientWidth : cardEl.clientWidth) / 100 || 5.2;

      // Reset inline style to allow CSS class baseline calculation
      bodyEl.style.fontSize = "";
      bodyEl.style.lineHeight = "";

      let compPx = parseFloat(window.getComputedStyle(bodyEl).fontSize) || 12;
      let currentCqw = compPx / cqw;
      let iterations = 0;

      // 1. Jika teks meluap / overflow melebihi tinggi kartu: turunkan ukuran font secara halus sampai 100% pas
      while (bodyEl.scrollHeight > bodyEl.clientHeight + 1 && currentCqw > minCqw && iterations < 50) {
        currentCqw -= 0.03;
        bodyEl.style.fontSize = currentCqw.toFixed(2) + "cqw";
        bodyEl.style.lineHeight = Math.max(1.10, 1.22 - (2.5 - currentCqw) * 0.05).toFixed(2);
        iterations++;
      }

      // 2. Jika teks pendek dan menyisakan ruang kosong (> 15% kosong): perbesar font secara bertahap agar mengisi kartu dengan proporsional
      if (bodyEl.clientHeight > 0 && bodyEl.scrollHeight < bodyEl.clientHeight * 0.85 && iterations === 0) {
        let growIter = 0;
        const maxCqw = 5.2;
        while (bodyEl.scrollHeight < bodyEl.clientHeight * 0.95 && currentCqw < maxCqw && growIter < 40) {
          currentCqw += 0.04;
          bodyEl.style.fontSize = currentCqw.toFixed(2) + "cqw";
          bodyEl.style.lineHeight = Math.min(1.50, 1.22 + (currentCqw - 2.5) * 0.06).toFixed(2);
          if (bodyEl.scrollHeight > bodyEl.clientHeight) {
            currentCqw -= 0.04;
            bodyEl.style.fontSize = currentCqw.toFixed(2) + "cqw";
            break;
          }
          growIter++;
        }
      }
    };

    runFit();
    requestAnimationFrame(runFit);
    setTimeout(runFit, 50);
    setTimeout(runFit, 150);
  }

  // Render Widget Surat Cinta untuk Halaman 3
  function renderLetterWidget(container, isBase = false) {
    container.replaceChildren();
    if (isBase) {
      const guide = document.createElement("div");
      guide.className = "widgetPasteGuide letterGuide";
      guide.innerHTML = `
        <div class="guideCutIcon">✂</div>
        <div class="guideTitle">Area Tempel : Kartu Surat Cinta Untukmu</div>
        <div class="guideSubtitle">Gunting kartu surat dari Lembar Kartu DIY lalu tempel di sini</div>
      `;
      container.append(guide);
      return;
    }
    const p3 = state.pages[3];
    const letterStamp = state.presentationCopy?.letterStamp || "POSTAGE PAID ♡ WEDDING 2026";
    const rawText = (p3.letterText || "").trim();
    const textLen = rawText.length;

    // Tentukan kelas tier panjang teks secara dinamis (termasuk tier xs untuk surat pendek agar kartu penuh terisi)
    let lenClass = "letter-len-xs";
    if (textLen > 620) lenClass = "letter-len-xxl";
    else if (textLen > 480) lenClass = "letter-len-xl";
    else if (textLen > 340) lenClass = "letter-len-lg";
    else if (textLen > 200) lenClass = "letter-len-md";
    else if (textLen > 110) lenClass = "letter-len-sm";
    else lenClass = "letter-len-xs";

    const letter = document.createElement("div");
    letter.className = "friendLetterCard";
    letter.innerHTML = `
      <div class="letterClip" aria-hidden="true"></div>
      <div class="letterHeader">
        <span class="letterStamp" aria-hidden="true">${letterStamp}</span>
        <span class="letterLabel">${state.presentationCopy?.letterLabel || "surat cinta untuk calon istriku"}</span>
      </div>
      <p class="letterBodyText ${lenClass}">${p3.letterText}</p>
      <div class="letterSign">${state.presentationCopy?.letterSignoff || "dengan segenap jiwaku, calon suamimu."}</div>
    `;
    container.append(letter);

    const bodyEl = letter.querySelector(".letterBodyText");
    autoFitDynamicText(bodyEl, letter, 0.85);
  }

  // Render Widget Kado Spesial untuk Halaman 4 (Pesan Kalimat Hadiah)
  function renderGiftWidget(container, isBase = false) {
    container.replaceChildren();
    const p4 = state.pages[4];
    const widget = document.createElement("div");
    widget.className = "giftRevealWidget" + (isBase ? " giftBaseGuide" : "");

    const giftTitle = state.presentationCopy?.giftTagLabel || "KADO UNTUKMU ♡";
    const giftSerial = state.presentationCopy?.giftTagSerial || "FOR MY FUTURE WIFE";
    const rawMsg = p4.giftCardText || "Kado spesial dengan segenap cinta untuk hari bahagiamu.";
    const giftMessage = rawMsg.replace(/\n/g, "<br>");
    const msgLen = rawMsg.trim().length;

    let msgLenClass = "gift-len-sm";
    if (msgLen > 300) msgLenClass = "gift-len-xl";
    else if (msgLen > 180) msgLenClass = "gift-len-lg";
    else if (msgLen > 90) msgLenClass = "gift-len-md";

    if (isBase) {
      widget.innerHTML = `
        <div class="giftTagRibbon">
          <span class="giftTagLabel">${giftTitle}</span>
          <span class="giftTagSerial">${giftSerial}</span>
        </div>
        <div class="giftCardBaseBody">
          <div class="giftCardBaseGuideBox">
            <span class="guideIcon">✂</span>
            <span class="giftCardBaseGuideTitle">Tempel Catatan / Kartu Kalimat Kado</span>
            <p class="giftCardBaseGuideText">${giftMessage}</p>
          </div>
        </div>
      `;
    } else {
      widget.innerHTML = `
        <div class="giftTape" aria-hidden="true"></div>
        <div class="giftTagRibbon">
          <span class="giftTagLabel">${giftTitle}</span>
          <span class="giftTagSerial">${giftSerial}</span>
        </div>
        <div class="giftCardBody">
          <span class="giftCardQuoteMark" aria-hidden="true">“</span>
          <p class="giftCardMessage ${msgLenClass}">${giftMessage}</p>
          <span class="giftCardSignoff">♡ spesial untuk bidadariku</span>
        </div>
      `;
    }

    container.append(widget);

    if (!isBase) {
      const msgEl = widget.querySelector(".giftCardMessage");
      const cardBody = widget.querySelector(".giftCardBody");
      autoFitDynamicText(msgEl, cardBody, 0.9);
    }
  }

  // Render Widget Mixtape & Ikhtiar Pernikahan untuk Halaman 5
  function renderMixtapeWidget(container, isBase = false) {
    container.replaceChildren();
    if (isBase) {
      const guide = document.createElement("div");
      guide.className = "widgetPasteGuide mixtapeGuide";
      guide.innerHTML = `
        <div class="guideCutIcon">✂</div>
        <div class="guideTitle">Area Tempel : Replika Kaset Mixtape & Checklist</div>
        <div class="guideSubtitle">Gunting kaset & checklist dari Lembar Kartu DIY lalu tempel di sini</div>
      `;
      container.append(guide);
      return;
    }
    const p5 = state.pages[5];
    const widget = document.createElement("div");
    widget.className = "mixtapeChecklistWidget";
    widget.innerHTML = `
      <div class="mixtapeCard">
        <div class="cassetteGraphic" aria-hidden="true">
          <div class="cassetteLabel">${state.presentationCopy?.mixtapeLabel || "WEDDING SOUNDTRACK · SIDE A"}</div>
          <div class="cassetteReels"><span></span><span></span></div>
        </div>
      </div>
      <div class="bucketListCard">
        <p class="bucketListTitle">${state.presentationCopy?.checklistTitle || "Ikhtiar &amp; Impian Rumah Tangga Kita"}</p>
        <ul class="bucketListItems">
          ${p5.checklist.map((item) => `<li><span class="checkBullet">✔</span><span>${item}</span></li>`).join("")}
        </ul>
      </div>
    `;
    container.append(widget);
  }

  // Menyesuaikan ukuran teks semua kartu fitur secara dinamis agar 100% pas dan tidak terpotong
  function fitAllDynamicCards(container) {
    if (!container) return;
    container.querySelectorAll(".friendLetterCard").forEach((card) => {
      const bodyEl = card.querySelector(".letterBodyText");
      if (bodyEl) autoFitDynamicText(bodyEl, card);
    });
    container.querySelectorAll(".giftRevealWidget").forEach((widget) => {
      const msgEl = widget.querySelector(".giftCardMessage");
      const body = widget.querySelector(".giftCardBody") || widget;
      if (msgEl) autoFitDynamicText(msgEl, body, 0.9);
    });
  }

  // Data Narasi & Doa Sisi Balik Dasar Lembar (Untuk Cetak Bolak-Balik A3+ Duplex / Bentangan 2 Halaman)
  const backPageData = {
    0: {
      badge: "SISI BALIK · SAMPUL DEPAN (HALAMAN PENGANTAR)",
      title: "Bismillah Menuju Hari Akad",
      subtitle: "Sebuah persembahan kecil dari calon suamimu untuk calon istri tercinta",
      datePrompt: "Edisi Terbatas 2026",
      quote: "Buku kenangan ini adalah saksi langkah-langkah kecil kita dari awal perjumpaan hingga mantap melangkah ke pelaminan. Terima kasih telah memilihku menjadi imammu.",
      memo: "Our Forever Starts Soon ♡",
      signoff: "calon imam & pendamping hidupmu."
    },
    1: {
      badge: "SISI BALIK · HALAMAN 1 (HARI ISTIMEWA MILAD)",
      title: "Catatan Hati di Hari Lahirmu",
      subtitle: "Selamat milad calon istriku tercinta, bidadari duniaku",
      datePrompt: "Catatan Milad · June 2026",
      quote: "Terima kasih telah lahir ke dunia dan menghadirkan ketenangan dalam hidupku. Ini ulang tahun terakhirmu berstatus calon istri sebelum bulan depan kita sah menikah.",
      memo: "Soon to be my lovely wife",
      signoff: "forever yours, calon suamimu."
    },
    2: {
      badge: "SISI BALIK · HALAMAN 2 (PHOTOBOX PERJALANAN CINTA)",
      title: "Strip Photobox Kenangan Kencan Kita",
      subtitle: "Dua strip photobox kenangan manis dan senyum bahagia kencan kita berdua",
      datePrompt: "Candid Studio & Kencan · 2026",
      quote: "Di antara semua potret formal, strip photobox inilah yang paling menggambarkan kita: penuh tawa lepas, senyum konyol berdua, dan bahagia apa adanya.",
      memo: "Our Silly Faces & Sweet Memories ♡",
      signoff: "calon suamimu yang selalu bahagia di dekatmu.",
      hasPhotobox: true,
      captions: [
        "strip photobox kencan pertama kita",
        "pose konyol & senyum spontan berdua"
      ]
    },
    3: {
      badge: "SISI BALIK · HALAMAN 3 (SURAT CALON ISTRI)",
      title: "Ikhtiar & Doa Calon Suami",
      subtitle: "Komitmen mitsaqan ghalidza di hadapan Allah",
      datePrompt: "Surat Cinta · Akad 2026",
      quote: "Saat ijab kabul terucap di hadapan wali dan saksi nanti, aku berikhtiar dengan segenap jiwaku untuk menjagamu, membimbingmu, dan bersama menggapai ridha-Nya dalam surga-Nya.",
      memo: "Ibadah Terpanjang Seumur Hidup",
      signoff: "dengan segenap jiwaku, calon suamimu."
    },
    4: {
      badge: "SISI BALIK · HALAMAN 4 (KADO PERNIKAHAN)",
      title: "Harapan & Hadiah Terbaik untuk Rumah Kita",
      subtitle: "Sepatu maroon, busana serasi, dan bunga mekar untuk bidadariku",
      datePrompt: "Kado Spesial · June 2026",
      quote: "Kado terindah bukanlah materi, melainkan kebersamaan kita dalam membangun istana kecil yang sakinah, mawaddah, warahmah. Semoga suka dengan bingkisan kecil ini.",
      memo: "Maroon Looks Stunning On You",
      signoff: "crafted with all my love for my future wife."
    },
    5: {
      badge: "SISI BALIK · HALAMAN 5 (AKAD & DOA MASA DEPAN)",
      title: "Doa & Cita-Cita Rumah Tangga Kita",
      subtitle: "Membangun baiti jannati, melangkah bersama hingga ke surga-Nya",
      datePrompt: "Menuju Akad · 2026",
      quote: "Di hadapan Allah dan saksi nanti, aku berjanji menjadi imam yang sabar, pendengar setia, dan pelindung yang tak kenal lelah. Mari menua bersama dalam ketaatan.",
      memo: "Till Jannah Together ♡",
      signoff: "bismillah melangkah bersama menuju surga-Nya."
    }
  };

  function getBackPageData(pageId) {
    const base = backPageData[pageId] || backPageData[1];
    const override = state.presentationCopy?.backPageData?.[String(pageId)] || {};
    return { ...base, ...override };
  }

  function applyPresentationCopy() {
    const copy = state.presentationCopy;
    if (!copy) return;

    const brandSub = document.querySelector(".brandSub");
    if (brandSub && copy.brandSub) brandSub.textContent = copy.brandSub;

    const allPagesSubtitle = document.querySelector(".allPagesSubTitle");
    if (allPagesSubtitle && copy.allPagesSubtitle) allPagesSubtitle.textContent = copy.allPagesSubtitle;

    if (copy.pageTabLabels) {
      document.querySelectorAll(".pageTab[data-page]").forEach((tab) => {
        const label = copy.pageTabLabels[tab.dataset.page];
        const pageName = tab.querySelector(".pageName");
        if (label && pageName) pageName.textContent = label;
      });
    }

    const title = document.getElementById("title");
    if (title) title.setAttribute("aria-label", state.albumTitle || `Happy Birthday, ${state.name}`);
    if (state.albumTitle) document.title = state.albumTitle;
  }

  // Render Halaman Aktif
  
  // Interaksi Hold To Reveal untuk Foto Kado Halaman 4
  function setupHoldToReveal(frame) {
    if (!frame) return;
    const photoBtn = frame.querySelector(".photoButton");
    if (!photoBtn) return;

    photoBtn.querySelector(".giftRevealCover")?.remove();
    frame.querySelector(".photoRecloseBtn")?.remove();

    const photoImg = photoBtn.querySelector(".photo");
    if (!photoImg) return;

    const cover = document.createElement("div");
    cover.className = "giftRevealCover";
    cover.setAttribute("role", "button");
    cover.setAttribute("tabindex", "0");
    cover.setAttribute("aria-label", "Kado Rahasia - Tahan untuk melihat foto kado");
    cover.innerHTML = `
      <div class="giftCoverPattern"></div>
      <div class="giftCoverContent">
        <div class="giftCoverBadge">
          <span class="giftCoverIcon">🎁</span>
          <span class="giftCoverLabel">KADO RAHASIA</span>
        </div>
        <div class="giftCoverPrompt">
          <span class="giftTouchIcon">👆</span>
          <span class="giftPromptText">Tahan untuk melihat ♡</span>
        </div>
      </div>
      <div class="giftCoverProgress">
        <div class="giftProgressBar"></div>
      </div>
    `;

    const recloseBtn = document.createElement("button");
    recloseBtn.type = "button";
    recloseBtn.className = "photoRecloseBtn";
    recloseBtn.setAttribute("title", "Tutup kembali foto kado");
    recloseBtn.textContent = "Tutup Kado ✕";

    photoBtn.append(cover);
    frame.append(recloseBtn);

    let holdTimer = null;
    let isLockedOpen = false;

    const startHold = (e) => {
      if (isLockedOpen) return;
      if (e.type === "mousedown" && e.button !== 0) return;
      e.preventDefault();
      cover.classList.add("isHolding");
      photoBtn.classList.add("photoRevealing");

      if (typeof navigator !== "undefined" && navigator.vibrate) {
        try { navigator.vibrate(30); } catch {}
      }

      holdTimer = setTimeout(() => {
        isLockedOpen = true;
        cover.classList.remove("isHolding");
        cover.classList.add("isUnlocked");
        photoBtn.classList.remove("photoRevealing");
        photoBtn.classList.add("photoUnlocked");
        recloseBtn.style.display = "block";
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          try { navigator.vibrate([40, 50, 40]); } catch {}
        }
      }, 1000);
    };

    const endHold = () => {
      if (isLockedOpen) return;
      if (holdTimer) {
        clearTimeout(holdTimer);
        holdTimer = null;
      }
      cover.classList.remove("isHolding");
      photoBtn.classList.remove("photoRevealing");
    };

    recloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      isLockedOpen = false;
      cover.classList.remove("isUnlocked", "isHolding");
      photoBtn.classList.remove("photoUnlocked", "photoRevealing");
      recloseBtn.style.display = "none";
    });

    cover.addEventListener("pointerdown", startHold);
    cover.addEventListener("pointerup", endHold);
    cover.addEventListener("pointercancel", endHold);
    cover.addEventListener("pointerleave", endHold);
    cover.addEventListener("contextmenu", (e) => e.preventDefault());

    cover.addEventListener("keydown", (e) => {
      if ((e.key === " " || e.key === "Enter") && !e.repeat) {
        startHold(e);
      }
    });
    cover.addEventListener("keyup", (e) => {
      if (e.key === " " || e.key === "Enter") {
        endHold();
      }
    });
  }

  function renderPage(pageId) {
    state.currentPage = pageId;
    const page = state.pages[pageId] || state.pages[1];
    applyPresentationCopy();

    // 1. Perbarui Navigasi Halaman
    document.querySelectorAll(".pageTab").forEach((tab) => {
      const isCurrent = Number(tab.dataset.page) === pageId;
      tab.classList.toggle("active", isCurrent);
      tab.setAttribute("aria-selected", String(isCurrent));
    });

    const prevBtn = document.getElementById("prev-page-btn");
    const nextBtn = document.getElementById("next-page-btn");
    if (prevBtn) prevBtn.disabled = pageId <= 0;
    if (nextBtn) nextBtn.disabled = pageId >= 5;

    const brief = document.getElementById("page-story-brief");
    if (brief) brief.textContent = page.storyBrief;

    const workspace = document.querySelector(".workspace");
    if (workspace) workspace.dataset.page = String(pageId);

    // 2. Perbarui Scrapbook Utama & Tata Letak Foto
    const layout = page.layout || "single-hero";
    const scrapbook = document.getElementById("scrapbook");
    if (scrapbook) {
      scrapbook.className = `scrapbook pageTheme${pageId} layout-${layout}`;
      scrapbook.setAttribute("aria-label", `Scrapbook Halaman ${pageId}: ${page.themeTitle}`);
    }

    // Perbarui Tata Letak Lembar Foto
    const sheetPhotos = document.getElementById("sheet-photos");
    if (sheetPhotos) {
      sheetPhotos.dataset.layout = layout;
      sheetPhotos.dataset.page = String(pageId);
    }

    // Perbarui Tombol Pilihan Tata Letak (Pills)
    // Kirim sinyal perubahan halaman aktif ke parent Studio
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "SCRAPBOOK_PAGE_CHANGED",
        page: pageId,
        layout: layout,
        themeTitle: page.themeTitle || (pageId === 0 ? "Sampul Depan" : `Halaman ${pageId}`)
      }, "*");
    }

    document.querySelectorAll(".layoutPill").forEach((pill) => {
      const isSelected = pill.dataset.layout === layout;
      pill.classList.toggle("active", isSelected);
      pill.setAttribute("aria-checked", String(isSelected));
    });

    // Perbarui Judul Potongan Kertas
    const headingPrefix = document.getElementById("heading-prefix");
    const nameHeading = document.getElementById("name-heading");

    if (pageId === 0) {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "column";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `
          <span class="coverEditionPill">EDISI TERBATAS 2026</span>
          <div style="display:flex;justify-content:center;gap:.5cqw;"><span data-letters="${page.titleCutout || 'OuR StOrY'}"></span></div>
        `;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
        nameHeading.style.setProperty("--name-size", `${Math.min(8.5, 68 / Math.max(Array.from(state.name).length, 1))}cqw`);
      }
    } else if (pageId === 1) {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        const titleStr = page.titleCutout || "HaPpY BiRThDaY";
        const words = titleStr.split(" ").filter(Boolean);
        headingPrefix.innerHTML = words
          .map((w, wIdx) => `<span data-letters="${w}" data-offset="${wIdx * 3}"></span>`)
          .join('<span class="wordSpace"></span>');
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, Number(el.dataset.offset || 0)));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
        nameHeading.style.setProperty("--name-size", `${Math.min(11.8, 76 / Math.max(Array.from(state.name).length, 1))}cqw`);
      }
    } else {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        const titleStr = page.titleCutout || "";
        const words = titleStr.split(" ").filter(Boolean);
        headingPrefix.innerHTML = words
          .map((w, wIdx) => `<span data-letters="${w}" data-offset="${wIdx * 2}"></span>`)
          .join('<span class="wordSpace"></span>');
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, Number(el.dataset.offset || 1)));
      }
      if (nameHeading) {
        nameHeading.style.display = "none";
      }
    }

    // Perbarui Subtitle / Date Label
    const dateLabel = document.getElementById("date-label");
    if (dateLabel) {
      if (pageId === 1) {
        if (page.subtitle) {
          dateLabel.textContent = page.subtitle;
        } else {
          const [year, month] = (state.birthday || "2026-06-01").split("-").map(Number);
          dateLabel.textContent = `${months[month - 1]} ${year}`;
        }
      } else {
        dateLabel.textContent = page.subtitle || "";
      }
    }

    // Perbarui Catatan Tangan di Scrapbook
    const notesContainer = document.getElementById("page-notes-container");
    if (notesContainer) {
      notesContainer.replaceChildren();
      page.notes.forEach((note) => {
        const span = document.createElement("span");
        span.className = `note ${note.cls}`;
        span.innerHTML = note.text.replace(/\n/g, "<br>");
        notesContainer.append(span);
      });
    }

    // Perbarui Foto Polaroid di Kolase (Slot untuk halaman ini)
    const baseSlot = pageId === 0 ? 20 : (pageId - 1) * 3;
    for (let slot = 0; slot < 3; slot++) {
      const globalIndex = pageId === 0 ? (20 + slot) : baseSlot + slot;
      const caption = page.captions[slot] || "";
      const photoSrc = getPhotoUrl(globalIndex);

      // Kolase Scrapbook
      const frame = document.querySelector(`.photoFrame[data-slot="${slot}"]`);
      if (frame) {
        const captionElem = frame.querySelector(".photoCaption");
        if (captionElem) captionElem.textContent = caption;

        const guideText = frame.querySelector(".guideText");
        const guideSub = frame.querySelector(".guideSub");
        if (guideText) {
          if (pageId === 0) {
            guideText.textContent = "Tempel Foto Sampul Utama";
            if (guideSub) guideSub.textContent = "Foto potret berdua terbaik untuk sampul depan";
          } else if (layout === "single-hero") {
            if (slot === 0) {
              guideText.textContent = "Tempel 1 Foto Gedhe";
              if (guideSub) guideSub.textContent = "Ukuran ~11,3 x 11,3 cm dari lembar foto";
            } else if (slot === 1) {
              guideText.textContent = "Foto Mini Overlay";
              if (guideSub) guideSub.textContent = "Tempel di sudut foto utama";
            }
          } else if (layout === "single-clean" || layout === "single-letter") {
            if (slot === 0) {
              guideText.textContent = state.presentationCopy?.photoGuideTitle || "Tempel 1 Foto Gedhe Calon Istri";
              if (guideSub) guideSub.textContent = "Ukuran besar dari lembar kertas silky";
            }
          } else if (layout === "duo-overlap") {
            if (slot === 0) {
              guideText.textContent = "Tempel Foto 1 (Lapisan Bawah)";
              if (guideSub) guideSub.textContent = "dari lembar kertas silky";
            } else if (slot === 1) {
              guideText.textContent = "Tempel Foto 2 (Overlay di Atas)";
              if (guideSub) guideSub.textContent = "tumpang tindih di atas sudut Foto 1";
            }
          } else if (layout === "portrait-duo") {
            guideText.textContent = `Tempel Foto ${slot === 0 ? "Kiri" : "Kanan"} (Portrait)`;
            if (guideSub) guideSub.textContent = "posisi tegak berdampingan";
          } else if (layout === "scatter-trio") {
            if (slot === 0) guideText.textContent = "Tempel Foto Utama (Miring Kiri)";
            else if (slot === 1) guideText.textContent = "Tempel Foto Kanan Atas";
            else guideText.textContent = "Tempel Foto Bawah";
            if (guideSub) guideSub.textContent = "dari lembar kertas silky";
          } else if (layout === "collage-big-small") {
            if (slot === 0) {
              guideText.textContent = "Tempel Foto Utama Besar";
              if (guideSub) guideSub.textContent = "posisi sebelah kiri";
            } else {
              guideText.textContent = `Tempel Foto Mini ${slot === 1 ? "Atas" : "Bawah"}`;
              if (guideSub) guideSub.textContent = "posisi sebelah kanan";
            }
          } else if (layout === "filmstrip") {
            guideText.textContent = `Tempel Foto Strip ${slot + 1}`;
            if (guideSub) guideSub.textContent = "urutan rol film kenangan";
          } else if (layout === "photobox-strip") {
            guideText.textContent = `Tempat Strip Photobox ${slot === 0 ? "1 (Kiri)" : "2 (Kanan)"}`;
            if (guideSub) guideSub.textContent = "Ukuran 5 x 15 cm · Cukup tempel dengan double tape";
          } else {
            guideText.textContent = `Tempel Foto ${slot + 1} (Hal ${pageId})`;
            if (guideSub) guideSub.textContent = "dari lembar kertas silky";
          }
        }

        const photoBtn = frame.querySelector(".photoButton");
        photoBtn.querySelector(".photo")?.remove();
        frame.querySelector(".photoAdjustToolbar")?.remove();
        frame.querySelector(".photoPosBadge")?.remove();
        const hint = frame.querySelector(".photoHint");

        if (photoSrc) {
          const img = new Image();
          img.className = "photo";
          img.alt = `Kenangan Halaman ${pageId} - Foto ${slot + 1}: ${caption}`;
          img.src = photoSrc;
          const pos = getPhotoPosition(pageId, slot);
          img.style.objectPosition = `${pos.x}% ${pos.y}%`;
          photoBtn.prepend(img);
          hint?.classList.add("hasPhoto");
          frame.classList.add("hasPhoto");
          renderPhotoAdjustToolbar(frame, pageId, slot, false);
        } else {
          hint?.classList.remove("hasPhoto");
          frame.classList.remove("hasPhoto");
        }
      }

      // Lembar Foto (sheet-photos)
      const printablePolaroid = document.querySelector(`.printablePolaroid[data-slot="${slot}"]`);
      if (printablePolaroid) {
        const sheetCaption = printablePolaroid.querySelector(".cardCaption");
        if (sheetCaption) sheetCaption.textContent = caption;

        const cutLabel = printablePolaroid.querySelector(".cutGuideLabel");
        if (cutLabel) {
          if (pageId === 0) {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto Sampul Utama (Cover)`;
          } else if (layout === "single-hero") {
            if (slot === 0) cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong 1 Foto Gedhe (Hal ${pageId})`;
            else if (slot === 1) cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Mini Overlay (Hal ${pageId})`;
          } else if (layout === "single-clean" || layout === "single-letter") {
            if (slot === 0) cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong 1 Foto Gedhe (Hal ${pageId})`;
          } else if (layout === "duo-overlap") {
            if (slot === 0) cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto 1 - Lapisan Bawah (Hal ${pageId})`;
            else if (slot === 1) cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto 2 - Overlay (Hal ${pageId})`;
          } else if (layout === "portrait-duo") {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto ${slot === 0 ? "Kiri" : "Kanan"} (Hal ${pageId})`;
          } else if (layout === "scatter-trio") {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto ${slot === 0 ? "Utama" : slot + 1} (Hal ${pageId})`;
          } else if (layout === "collage-big-small") {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto ${slot === 0 ? "Besar Kiri" : slot === 1 ? "Mini Atas" : "Mini Bawah"} (Hal ${pageId})`;
          } else if (layout === "filmstrip") {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Strip ${slot + 1} (Hal ${pageId})`;
          } else if (layout === "photobox-strip") {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Strip Photobox ${slot === 0 ? "1" : "2"} (5 x 15 cm)`;
          } else {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Hal ${pageId} Foto ${slot + 1}`;
          }
        }

        const cardBtn = printablePolaroid.querySelector(".cardPhotoButton");
        cardBtn.querySelector(".cardPhoto")?.remove();
        printablePolaroid.querySelector(".photoAdjustToolbar")?.remove();
        printablePolaroid.querySelector(".photoPosBadge")?.remove();
        const placeholder = printablePolaroid.querySelector(".cardPhotoPlaceholder");

        if (photoSrc) {
          const cardImg = new Image();
          cardImg.className = "cardPhoto";
          cardImg.alt = `Kenangan Halaman ${pageId} - Foto ${slot + 1}: ${caption}`;
          cardImg.src = photoSrc;
          const pos = getPhotoPosition(pageId, slot);
          cardImg.style.objectPosition = `${pos.x}% ${pos.y}%`;
          cardBtn.prepend(cardImg);
          placeholder?.classList.add("hasPhoto");
          printablePolaroid.classList.add("hasPhoto");
          renderPhotoAdjustToolbar(printablePolaroid, pageId, slot, true);
        } else {
          placeholder?.classList.remove("hasPhoto");
          printablePolaroid.classList.remove("hasPhoto");
        }
      }
    }

    // Perbarui Widget Unik di Scrapbook
    const widgetArea = document.getElementById("unique-widget-area");
    if (widgetArea) {
      if (pageId === 0) {
        widgetArea.replaceChildren();
        widgetArea.style.display = "none";
      } else {
        widgetArea.style.display = "";
        if (pageId === 1) renderCalendarWidget(widgetArea, state.currentView === "base");
        else if (pageId === 2) renderTicketWidget(widgetArea, state.currentView === "base");
        else if (pageId === 3) renderLetterWidget(widgetArea, state.currentView === "base");
        else if (pageId === 4) renderGiftWidget(widgetArea, state.currentView === "base");
        else if (pageId === 5) renderMixtapeWidget(widgetArea, state.currentView === "base");
      }
    }

    // Perbarui Signoff
    const signoff = document.getElementById("page-signoff");
    if (signoff) signoff.textContent = page.signoff;

    // Informasi Lembar & Halaman di Ruang Margin Luar
    const marginBadge = document.getElementById("margin-slug-badge");
    const marginTitle = document.getElementById("margin-slug-title");
    if (pageId === 0) {
      if (marginBadge) marginBadge.textContent = "LEMBAR 0 : SAMPUL DEPAN (COVER)";
      if (marginTitle) marginTitle.textContent = "Sampul Luar Album Kenangan";
    } else {
      if (marginBadge) marginBadge.textContent = "LEMBAR 1 : LEMBAR DASAR";
      if (marginTitle) marginTitle.textContent = `Halaman ${pageId} dari 5 · ${page.themeTitle}`;
    }

    // 3. Perbarui Lembar Foto (Header & Mini Polaroids)
    const photoBadge = document.getElementById("photo-sheet-badge");
    const photoTitle = document.getElementById("photo-sheet-title");
    if (pageId === 0) {
      if (photoBadge) photoBadge.textContent = "LEMBAR 2 : KERTAS FOTO · SAMPUL DEPAN";
      if (photoTitle) photoTitle.textContent = "Foto Polaroid Sampul Depan";
    } else {
      if (photoBadge) photoBadge.textContent = `LEMBAR 2 : KERTAS FOTO · HALAMAN ${pageId} DARI 5`;
      if (photoTitle) photoTitle.textContent = `Foto Polaroid Kenangan : ${page.themeTitle}`;
    }

    const miniRow = document.getElementById("mini-polaroid-row");
    if (miniRow) {
      const miniThemes = state.presentationCopy?.miniThemes || {
        0: [["goldBox", "our story"], ["roseBox", "special day"], ["mintBox", "akad 2026"]],
        1: [["mintBox", "my bride"], ["yellowBox", "sweet smile"], ["lavenderBox", "future wife"]],
        2: [["peachBox", "our journey"], ["mintBox", "two hearts"], ["yellowBox", "to pelaminan"]],
        3: [["lavenderBox", "wedding 2026"], ["roseBox", "love letter"], ["kraftBox", "forever yours"]],
        4: [["maroonBox", "sepatu maroon"], ["roseBox", "cardigan rajut"], ["goldBox", "kado spesial"]],
        5: [["sageBox", "ijab kabul"], ["yellowBox", "sakinah"], ["lavenderBox", "till jannah"]]
      };
      miniRow.replaceChildren();
      (miniThemes[pageId] || miniThemes[1]).forEach(([cls, label]) => {
        const card = document.createElement("div");
        card.className = "miniPolaroidCard";
        card.innerHTML = `<span class="miniCut">✂</span><div class="miniPhotoBox ${cls}"></div><span class="miniLabel">${label}</span>`;
        miniRow.append(card);
      });
    }

    // 4. Perbarui Lembar Stiker (Header & Koleksi Stiker)
    const stickerBadge = document.getElementById("sticker-sheet-badge");
    const stickerTitle = document.getElementById("sticker-sheet-title");
    if (pageId === 0) {
      if (stickerBadge) stickerBadge.textContent = "LEMBAR 3 : KERTAS STIKER & AKSEN SAMPUL";
      if (stickerTitle) stickerTitle.textContent = "Stiker & Washi Tematik : Sampul Depan";
    } else {
      if (stickerBadge) stickerBadge.textContent = `LEMBAR 3 : KERTAS STIKER & CATATAN DIY · HALAMAN ${pageId} DARI 5`;
      if (stickerTitle) stickerTitle.textContent = `Stiker & Washi Tematik : ${page.themeTitle}`;
    }

    const washiList = document.getElementById("washi-list");
    if (washiList) {
      const washiThemes = {
        0: ["Pita Emas Segel Sampul", "Pita Beludru Akad Nikah", "Pita Renda Mawar Pengantin", "Pita Salju Berkah"],
        1: ["Pita Peach Romantis", "Pita Mint Kasih Sayang", "Pita Kotak Pastel Manis", "Pita Lavender Lembut"],
        2: ["Pita Tiket Menuju Pelaminan", "Pita Garis Emas Berdua", "Pita Kompas Masa Depan", "Pita Kraft Cinta Vintage"],
        3: ["Pita Bunga Mawar Merah", "Pita Renda Gaun Pengantin", "Pita Polkadot Pink Kasih", "Pita Doa Calon Suami"],
        4: ["Pita Beludru Maroon", "Pita Rajut Cardigan", "Pita Kado Spesial", "Pita Jahitan Busana Cokelat"],
        5: ["Pita Berkah Akad Nikah", "Pita Melodi Sakinah", "Pita Lilac Pernikahan", "Pita Mentari Masa Depan"]
      };
      washiList.replaceChildren();
      (washiThemes[pageId] || washiThemes[1]).forEach((title, i) => {
        const strip = document.createElement("div");
        strip.className = `washiStrip washiStrip${i + 1} pageWashi${pageId}_${i + 1}`;
        strip.innerHTML = `<span class="washiScissors">✂</span><span>${title}</span>`;
        washiList.append(strip);
      });
    }

    // Render Catatan Tempel DIY Siap Gunting untuk Lembar 3
    const notesCutoutGrid = document.getElementById("notes-cutout-grid");
    if (notesCutoutGrid) renderNotesCutoutSection(pageId, notesCutoutGrid);

    // Panggil stickers.js untuk me-render dekorasi scrapbook dan stiker kit halaman ini
    const decorations = document.getElementById("decorations");
    const stickerGrid = document.getElementById("sticker-grid");
    const starsRow = document.getElementById("stars-row");

    if (window.ScrapbookStickers) {
      if (decorations) window.ScrapbookStickers.renderDecorationsForPage(pageId, decorations);
      if (stickerGrid && starsRow) window.ScrapbookStickers.renderStickerSheetForPage(pageId, stickerGrid, starsRow);
    }

    // 5. Perbarui Lembar Dasar Sisi Balik (Back Sheet)
    const backData = getBackPageData(pageId);
    const sbBack = document.getElementById("scrapbook-back");
    if (sbBack) {
      sbBack.className = `scrapbook backScrapbook pageTheme${pageId}`;
      const bBadge = document.getElementById("back-badge");
      if (bBadge) bBadge.remove();
      const bTitle = document.getElementById("back-title");
      const bSub = document.getElementById("back-subtitle");
      const bPrompt = document.getElementById("back-date-prompt");
      const bQuote = document.getElementById("back-quote-lead");
      const bMemo = document.getElementById("back-memo-text");
      const bSignoff = document.getElementById("back-signoff");

      if (bTitle) bTitle.textContent = backData.title;
      if (bSub) bSub.textContent = backData.subtitle;
      if (bPrompt) bPrompt.textContent = backData.datePrompt;
      if (bQuote) bQuote.textContent = `"${backData.quote}"`;
      if (bMemo) bMemo.textContent = `"${backData.memo}"`;
      if (bSignoff) bSignoff.textContent = backData.signoff;

      const photoboxSec = document.getElementById("back-photobox-section");
      const diarySec = document.getElementById("back-diary-section");
      const envStub = document.getElementById("back-envelope-stub");

      if (backData.hasPhotobox || pageId === 2) {
        if (photoboxSec) photoboxSec.hidden = false;
        if (diarySec) diarySec.hidden = true;
        if (envStub) envStub.style.display = "none";

        const c0 = document.getElementById("back-photobox-caption-0");
        const c1 = document.getElementById("back-photobox-caption-1");
        if (c0 && backData.captions) c0.textContent = backData.captions[0] || "";
        if (c1 && backData.captions) c1.textContent = backData.captions[1] || "";

        [0, 1].forEach((idx) => {
          const btn = sbBack.querySelector(`[data-slot="back-photobox-${idx}"]`);
          if (btn) {
            btn.querySelector(".backPhotoboxImg")?.remove();
            const photoUrl = state.photoUrls.get(`back-photobox-${idx}`);
            if (photoUrl) {
              const img = new Image();
              img.className = "backPhotoboxImg";
              img.src = photoUrl;
              btn.prepend(img);
            }
          }
        });
      } else {
        if (photoboxSec) photoboxSec.hidden = true;
        if (diarySec) diarySec.hidden = false;
        if (envStub) envStub.style.display = "";
      }
    }

    // Setup Hold to Reveal khusus untuk Halaman 4
    if (pageId === 4) {}
  }

  // Me-render potongan catatan tempel / sticky notes siap gunting di Lembar 3
  function renderNotesCutoutSection(pageId, container) {
    if (!container) return;
    container.replaceChildren();
    const page = state.pages[pageId] || state.pages[1];

    page.notes.forEach((note, index) => {
      const card = document.createElement("div");
      card.className = "noteCutoutCard";
      card.innerHTML = `
        <div class="noteCutoutHeader">
          <span>Catatan #${index + 1}</span>
          <span class="noteCutoutScissor">✂ Gunting</span>
        </div>
        <div class="noteCutoutBody note ${note.cls}">
          <span>${note.text.replace(/\n/g, "<br>")}</span>
        </div>
      `;
      container.append(card);
    });

    // Kartu memo kosong siap tulis tangan
    const blankCard = document.createElement("div");
    blankCard.className = "noteCutoutCard blankMemoCard";
    blankCard.innerHTML = `
      <div class="noteCutoutHeader">
        <span>Memo Tulisan Tangan</span>
        <span class="noteCutoutScissor">✂ Gunting</span>
      </div>
      <div class="noteCutoutBody">
        <span class="blankMemoPrompt">Tulis pesan / doa spesialmu di sini dengan pulpen fisik</span>
        <div class="memoLines"><span></span><span></span><span></span></div>
      </div>
    `;
    container.append(blankCard);
  }

  // Membuat node DOM scrapbook klon lengkap untuk halaman tertentu
  function createScrapbookPageNode(pId) {
    const p = state.pages[pId];
    if (!p) return null;
    const originalWrap = document.querySelector(".scrapbookWrap");
    if (!originalWrap) return null;

    const wrap = originalWrap.cloneNode(true);
    wrap.removeAttribute("id");
    wrap.hidden = false;
    const sb = wrap.querySelector(".scrapbook");
    if (!sb) return null;

    sb.removeAttribute("id");
    const layout = p.layout || "single-hero";
    sb.className = `scrapbook pageTheme${pId} layout-${layout}`;
    sb.setAttribute("aria-label", `Scrapbook Halaman ${pId}: ${p.themeTitle}`);

    const mBadge = wrap.querySelector("#margin-slug-badge");
    const mTitle = wrap.querySelector("#margin-slug-title");
    if (mBadge) mBadge.textContent = pId === 0 ? "SAMPUL DEPAN (COVER)" : "ALBUM BUKU UTUH";
    if (mTitle) mTitle.textContent = pId === 0 ? "Sampul Luar Album Kenangan" : `Halaman ${pId} dari 5 · ${p.themeTitle}`;

    // Pasang judul potongan kertas
    const headingPrefix = wrap.querySelector("#heading-prefix");
    const nameHeading = wrap.querySelector("#name-heading");

    if (pId === 0) {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "column";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `
          <span class="coverEditionPill">EDISI TERBATAS 2026</span>
          <div style="display:flex;justify-content:center;gap:.5cqw;"><span data-letters="${p.titleCutout || 'OuR StOrY'}"></span></div>
        `;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
        nameHeading.style.setProperty("--name-size", `${Math.min(8.5, 68 / Math.max(Array.from(state.name).length, 1))}cqw`);
      }
    } else if (pId === 1) {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `<span data-letters="HaPpY"></span><span class="wordSpace"></span><span data-letters="BiRThDaY" data-offset="3"></span>`;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, Number(el.dataset.offset || 0)));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
      }
    } else {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `<span data-letters="${p.titleCutout}"></span>`;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) nameHeading.style.display = "none";
    }

    // Tanggal / Subtitle
    const dateLbl = wrap.querySelector("#date-label");
    if (dateLbl) {
      if (pId === 1) {
        const [year, month] = (state.birthday || "2026-06-01").split("-").map(Number);
        dateLbl.textContent = `${months[month - 1]} ${year}`;
      } else {
        dateLbl.textContent = p.subtitle || "";
      }
    }

    // Catatan Tangan
    const notesBox = wrap.querySelector("#page-notes-container");
    if (notesBox) {
      notesBox.replaceChildren();
      p.notes.forEach((n) => {
        const span = document.createElement("span");
        span.className = `note ${n.cls}`;
        span.innerHTML = n.text.replace(/\n/g, "<br>");
        notesBox.append(span);
      });
    }

    // Foto Polaroid
    const baseSlot = pId === 0 ? 20 : (pId - 1) * 3;
    for (let s = 0; s < 3; s++) {
      const gIdx = pId === 0 ? (20 + s) : baseSlot + s;
      const frame = wrap.querySelector(`.photoFrame[data-slot="${s}"]`);
      if (frame) {
        const cap = frame.querySelector(".photoCaption");
        if (cap) cap.textContent = p.captions[s] || "";
        const btn = frame.querySelector(".photoButton");
        const hint = frame.querySelector(".photoHint");
        const guide = frame.querySelector(".pasteGuide");

        if (btn) btn.querySelector(".photo")?.remove();

        const photoSrc = getPhotoUrl(gIdx);
        if (photoSrc) {
          if (guide) guide.remove();
          if (hint) hint.remove();
          if (btn) {
            const img = new Image();
            img.className = "photo";
            img.alt = `Kenangan Halaman ${pId} - Foto ${s + 1}: ${p.captions[s] || ""}`;
            img.src = photoSrc;
            const pos = getPhotoPosition(pId, s);
            img.style.objectPosition = `${pos.x}% ${pos.y}%`;
            btn.prepend(img);
          }
        } else {
          if (hint) hint.remove();
          if (guide) guide.style.display = "flex";
        }
        frame.querySelectorAll(".photoAdjustToolbar, .photoPosBadge, .fileInput, .photoError").forEach((el) => el.remove());
      }
    }

    // Widget Unik
    const wArea = wrap.querySelector("#unique-widget-area");
    if (pId === 4) {
      wrap.querySelectorAll(".photoFrame").forEach(setupHoldToReveal);
    }

    if (wArea) {
      wArea.removeAttribute("id");
      if (pId === 0) wArea.remove();
      else if (pId === 1) renderCalendarWidget(wArea);
      else if (pId === 2) renderTicketWidget(wArea);
      else if (pId === 3) renderLetterWidget(wArea);
      else if (pId === 4) renderGiftWidget(wArea);
      else if (pId === 5) renderMixtapeWidget(wArea);
    }

    // Signoff
    const signoff = wrap.querySelector("#page-signoff");
    if (signoff) signoff.textContent = p.signoff;

    // Dekorasi Stiker
    const decor = wrap.querySelector("#decorations");
    if (decor) {
      decor.removeAttribute("id");
      if (window.ScrapbookStickers) window.ScrapbookStickers.renderDecorationsForPage(pId, decor);
    }

    return wrap;
  }

  // Membuat node DOM klon untuk Sisi Balik Dasar Lembar
  function createScrapbookBackNode(pId, isBase = false) {
    const backData = getBackPageData(pId);
    const templateBack = document.getElementById("scrapbook-back-view");
    if (!templateBack) return null;
    const wrap = templateBack.cloneNode(true);
    wrap.removeAttribute("id");
    wrap.hidden = false;

    const sbBack = wrap.querySelector(".backScrapbook");
    if (sbBack) {
      sbBack.removeAttribute("id");
      sbBack.className = `scrapbook backScrapbook pageTheme${pId}`;
      wrap.querySelector("#back-badge")?.remove();
      wrap.querySelector(".backBadge")?.remove();
      wrap.querySelector(".backDuplexTip")?.remove();
      const bTitle = wrap.querySelector("#back-title") || wrap.querySelector(".backTitle");
      const bSub = wrap.querySelector("#back-subtitle") || wrap.querySelector(".backSubtitle");
      const bPrompt = wrap.querySelector("#back-date-prompt") || wrap.querySelector(".diaryDatePrompt");
      const bQuote = wrap.querySelector("#back-quote-lead") || wrap.querySelector(".backQuoteLead");
      const bMemo = wrap.querySelector("#back-memo-text") || wrap.querySelector(".memoText");
      const bSignoff = wrap.querySelector("#back-signoff") || wrap.querySelector(".backSignoff");

      if (bTitle) bTitle.textContent = backData.title;
      if (bSub) bSub.textContent = backData.subtitle;
      if (bPrompt) bPrompt.textContent = backData.datePrompt;
      if (bQuote) bQuote.textContent = `"${backData.quote}"`;
      if (bMemo) bMemo.textContent = `"${backData.memo}"`;
      if (bSignoff) bSignoff.textContent = backData.signoff;

      const photoboxSec = wrap.querySelector("#back-photobox-section") || wrap.querySelector(".backPhotoboxSection");
      const diarySec = wrap.querySelector("#back-diary-section") || wrap.querySelector(".backDiarySection");
      const envStub = wrap.querySelector("#back-envelope-stub") || wrap.querySelector(".backEnvelopeStub");

      if (backData.hasPhotobox || pId === 2) {
        if (isBase) {
          if (photoboxSec) photoboxSec.hidden = true;
          if (diarySec) diarySec.hidden = false;
          if (envStub) envStub.style.display = "";
        } else {
          if (photoboxSec) photoboxSec.hidden = false;
          if (diarySec) diarySec.hidden = true;
          if (envStub) envStub.style.display = "none";

          const c0 = wrap.querySelector("#back-photobox-caption-0");
          const c1 = wrap.querySelector("#back-photobox-caption-1");
          if (c0 && backData.captions) c0.textContent = backData.captions[0] || "";
          if (c1 && backData.captions) c1.textContent = backData.captions[1] || "";

          [0, 1].forEach((idx) => {
            const btn = wrap.querySelector(`[data-slot="back-photobox-${idx}"]`);
            if (btn) {
              btn.querySelector(".backPhotoboxImg")?.remove();
              const photoUrl = getPhotoUrl(`back-photobox-${idx}`);
              if (photoUrl) {
                const img = new Image();
                img.className = "backPhotoboxImg";
                img.src = photoUrl;
                btn.prepend(img);
                btn.style.display = "block";
              }
            }
          });

          // Selalu hapus tombol upload dari node cetak
          wrap.querySelectorAll(".backPhotoboxUploadBtn").forEach((b) => b.remove());
        }
      } else {
        if (photoboxSec) photoboxSec.hidden = true;
        if (diarySec) diarySec.hidden = false;
        if (envStub) envStub.style.display = "";
      }

      const qrBox = wrap.querySelector(".postalStampQr");
      if (qrBox) {
        const bookUrl = getEffectiveDigitalBookUrl();
        qrBox.innerHTML = generateQrSvg(bookUrl, { darkColor: "#251d16", lightColor: "#ffffff" });
      }
    }
    return wrap;
  }

  // Membuat node DOM klon untuk Lembar Dasar (dengan panduan tempel & sayatan celah foto)
  function createScrapbookBaseNode(pId) {
    const p = state.pages[pId];
    if (!p) return null;
    const baseWrap = document.querySelector(".scrapbookWrap").cloneNode(true);
    baseWrap.removeAttribute("id");
    baseWrap.hidden = false;
    const sb = baseWrap.querySelector(".scrapbook");
    sb.removeAttribute("id");
    const layout = p.layout || "single-hero";
    sb.className = `scrapbook pageTheme${pId} layout-${layout}`;

    const mBadge = baseWrap.querySelector("#margin-slug-badge");
    const mTitle = baseWrap.querySelector("#margin-slug-title");
    if (pId === 0) {
      if (mBadge) mBadge.textContent = "LEMBAR 0 : SAMPUL DEPAN (COVER)";
      if (mTitle) mTitle.textContent = "Sampul Luar Album Kenangan";
    } else {
      if (mBadge) mBadge.textContent = "LEMBAR 1 : LEMBAR DASAR";
      if (mTitle) mTitle.textContent = `Halaman ${pId} dari 5 · ${p.themeTitle}`;
    }

    const headingPrefix = baseWrap.querySelector("#heading-prefix");
    const nameHeading = baseWrap.querySelector("#name-heading");
    if (pId === 0) {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "column";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `
          <span class="coverEditionPill">EDISI TERBATAS 2026</span>
          <div style="display:flex;justify-content:center;gap:.5cqw;"><span data-letters="${p.titleCutout || 'OuR StOrY'}"></span></div>
        `;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
        nameHeading.style.setProperty("--name-size", `${Math.min(8.5, 68 / Math.max(Array.from(state.name).length, 1))}cqw`);
      }
    } else if (pId === 1) {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `<span data-letters="HaPpY"></span><span class="wordSpace"></span><span data-letters="BiRThDaY" data-offset="3"></span>`;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, Number(el.dataset.offset || 0)));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
      }
    } else {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `<span data-letters="${p.titleCutout}"></span>`;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) nameHeading.style.display = "none";
    }

    const dateLbl = baseWrap.querySelector("#date-label");
    if (dateLbl) {
      if (pId === 1) {
        const [year, month] = (state.birthday || "2026-06-01").split("-").map(Number);
        dateLbl.textContent = `${months[month - 1]} ${year}`;
      } else {
        dateLbl.textContent = p.subtitle || "";
      }
    }

    const notesBox = baseWrap.querySelector("#page-notes-container");
    if (notesBox) {
      notesBox.replaceChildren();
      p.notes.forEach((n) => {
        const span = document.createElement("span");
        span.className = `note ${n.cls}`;
        span.innerHTML = n.text.replace(/\n/g, "<br>");
        notesBox.append(span);
      });
    }

    // Pada Lembar Dasar DIY: Sembunyikan total frame foto dan placeholder kartu agar kanvas latar belakang murni bersih & bebas berkreasi secara fisik
    baseWrap.querySelectorAll(".photoFrame").forEach((frame) => {
      frame.remove();
    });

    const wArea = baseWrap.querySelector("#unique-widget-area");
    if (wArea) {
      wArea.remove();
    }

    const signoff = baseWrap.querySelector("#page-signoff");
    if (signoff) signoff.textContent = p.signoff;

    const decor = baseWrap.querySelector("#decorations") || baseWrap.querySelector(".decorations");
    if (decor) {
      decor.removeAttribute("id");
      decor.replaceChildren(); // MURNI KANVAS DASAR: Hapus semua stiker karena stiker dicetak terpisah di Kertas Stiker!
    }

    return baseWrap;
  }

  // Membuat node DOM klon untuk Lembar Kertas Foto Polaroid
  function createPhotoSheetNode(pId) {
    const p = state.pages[pId];
    if (!p) return null;
    const layout = p.layout || "single-hero";
    const baseSlot = pId === 0 ? 20 : (pId - 1) * 3;

    const photoSheetClone = document.getElementById("sheet-photos").cloneNode(true);
    photoSheetClone.removeAttribute("id");
    photoSheetClone.hidden = false;
    photoSheetClone.dataset.layout = layout;
    photoSheetClone.dataset.page = String(pId);
    photoSheetClone.querySelector(".sheetBadge").textContent = pId === 0 ? "LEMBAR 2 : KERTAS SILKY · SAMPUL DEPAN" : `LEMBAR 2 : KERTAS SILKY · HALAMAN ${pId} DARI 5`;
    photoSheetClone.querySelector(".sheetTitle").textContent = pId === 0 ? "Foto Polaroid Sampul Depan" : `Foto Polaroid Kenangan : ${p.themeTitle}`;

    for (let s = 0; s < 3; s++) {
      const gIdx = baseSlot + s;
      const pCard = photoSheetClone.querySelector(`.printablePolaroid[data-slot="${s}"]`);
      if (pCard) {
        pCard.querySelector(".cardCaption").textContent = p.captions[s] || "";
        const cutGuide = pCard.querySelector(".cutGuideLabel");
        if (cutGuide) {
          if (pId === 0) {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto Sampul Utama (Cover)`;
          } else if (layout === "single-hero") {
            if (s === 0) cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong 1 Foto Gedhe (Hal ${pId})`;
            else if (s === 1) cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Mini Overlay (Hal ${pId})`;
          } else if (layout === "single-clean" || layout === "single-letter") {
            if (s === 0) cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong 1 Foto Gedhe (Hal ${pId})`;
          } else if (layout === "duo-overlap") {
            if (s === 0) cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto 1 - Lapisan Bawah (Hal ${pId})`;
            else if (s === 1) cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto 2 - Overlay (Hal ${pId})`;
          } else if (layout === "portrait-duo") {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto ${s === 0 ? "Kiri" : "Kanan"} (Hal ${pId})`;
          } else if (layout === "scatter-trio") {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto ${s === 0 ? "Utama" : s + 1} (Hal ${pId})`;
          } else if (layout === "collage-big-small") {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Foto ${s === 0 ? "Besar Kiri" : s === 1 ? "Mini Atas" : "Mini Bawah"} (Hal ${pId})`;
          } else if (layout === "filmstrip") {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Strip ${s + 1} (Hal ${pId})`;
          } else if (layout === "photobox-strip") {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Strip Photobox ${s === 0 ? "1" : "2"} (5 x 15 cm)`;
          } else {
            cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Hal ${pId} Foto ${s + 1}`;
          }
        }
        const btn = pCard.querySelector(".cardPhotoButton");
        btn.querySelector(".cardPhoto")?.remove();
        // Hapus teks/ikon placeholder upload & adjuster controls agar tidak pernah tercetak di lembar kertas foto
        pCard.querySelector(".cardPhotoPlaceholder")?.remove();
        pCard.querySelectorAll(".photoAdjustToolbar, .photoPosBadge, .fileInput, .photoError").forEach((el) => el.remove());
        const photoSrc = getPhotoUrl(gIdx);
        if (photoSrc) {
          const img = new Image();
          img.className = "cardPhoto";
          img.src = photoSrc;
          const pos = getPhotoPosition(pId, s);
          img.style.objectPosition = `${pos.x}% ${pos.y}%`;
          btn.prepend(img);
        }
      }
    }
    return photoSheetClone;
  }

  // ==========================================================================
  // MODUL LEMBAR CETAK FOTO POLAROID FORMAT A3+ (329 x 483 MM)
  // Menyatukan seluruh foto album ke 1 lembar kertas A3+ (nambah halaman jika penuh)
  // ==========================================================================

  const POLAROID_SLOT_DIMS = {
    "single-hero": {
      0: { width: 87.3, height: 112.5 },
      1: { width: 32.3, height: 47.4 }
    },
    "duo-overlap": {
      0: { width: 59.8, height: 81.4 },
      1: { width: 61.4, height: 82.9 }
    },
    "single-clean": {
      0: { width: 97.0, height: 130.2 }
    },
    "single-letter": {
      0: { width: 71.1, height: 94.7 }
    },
    "portrait-duo": {
      0: { width: 61.4, height: 112.5 },
      1: { width: 61.4, height: 112.5 }
    },
    "scatter-trio": {
      0: { width: 74.4, height: 88.8 },
      1: { width: 53.4, height: 68.1 },
      2: { width: 56.6, height: 68.1 }
    },
    "collage-big-small": {
      0: { width: 71.1, height: 130.2 },
      1: { width: 55.0, height: 62.2 },
      2: { width: 55.0, height: 62.2 }
    },
    "filmstrip": {
      0: { width: 53.4, height: 79.9 },
      1: { width: 53.4, height: 79.9 },
      2: { width: 53.4, height: 79.9 }
    },
    "photobox-strip": {
      0: { width: 34.0, height: 136.2 },
      1: { width: 34.0, height: 136.2 }
    },
    "triple": {
      0: { width: 51.7, height: 62.2 },
      1: { width: 53.4, height: 63.6 },
      2: { width: 53.4, height: 63.6 }
    },
    "cover": {
      0: { width: 90.5, height: 99.2 }
    },
    "cover-bonus": {
      0: { width: 90.5, height: 99.2 }
    },
    "hero-bonus": {
      0: { width: 87.3, height: 112.5 }
    },
    "pasfoto-4x6": {
      0: { width: 38.1, height: 55.9 }
    },
    "pasfoto-3x4": {
      0: { width: 27.9, height: 38.1 }
    }
  };

  function getActiveSlotsForLayout(pId, layout) {
    if (pId === 0) return [0];
    switch (layout) {
      case "single-clean":
      case "single-letter":
        return [0];
      case "single-hero":
      case "duo-overlap":
      case "portrait-duo":
      case "photobox-strip":
        return [0, 1];
      case "scatter-trio":
      case "collage-big-small":
      case "filmstrip":
      case "triple":
      default:
        return [0, 1, 2];
    }
  }

  function collectAllPolaroidCards() {
    const cards = [];

    // 1. Sampul Depan (Cover Keepsake - Page 0)
    const p0 = state.pages[0];
    const p0Dims = POLAROID_SLOT_DIMS["cover"][0];
    cards.push({
      pId: 0,
      slot: 0,
      layout: "cover",
      caption: (p0 && p0.captions && p0.captions[0]) || "Sampul Depan",
      cutGuideText: "Garis potong Foto Sampul Utama (Cover)",
      widthMm: p0Dims.width,
      heightMm: p0Dims.height,
      photoUrl: getPhotoUrl(20),
      photoPos: getPhotoPosition(0, 0)
    });

    // 2. Halaman 1 sampai 5
    for (let pId = 1; pId <= 5; pId++) {
      const p = state.pages[pId];
      if (!p) continue;
      const layout = p.layout || "single-hero";
      const activeSlots = getActiveSlotsForLayout(pId, layout);
      const baseSlot = (pId - 1) * 3;
      const layoutDims = POLAROID_SLOT_DIMS[layout] || POLAROID_SLOT_DIMS["triple"];

      for (const slot of activeSlots) {
        const gIdx = baseSlot + slot;
        const dims = layoutDims[slot] || { width: 60, height: 80 };
        let cutText = `Garis potong Hal ${pId} · Foto ${slot + 1}`;
        if (layout === "single-hero") {
          cutText = slot === 0 ? `Garis potong 1 Foto Gedhe (Hal ${pId})` : `Garis potong Mini Overlay (Hal ${pId})`;
        } else if (layout === "single-clean" || layout === "single-letter") {
          cutText = `Garis potong 1 Foto Gedhe (Hal ${pId})`;
        } else if (layout === "duo-overlap") {
          cutText = slot === 0 ? `Garis potong Foto 1 - Lapisan Bawah (Hal ${pId})` : `Garis potong Foto 2 - Overlay (Hal ${pId})`;
        } else if (layout === "portrait-duo") {
          cutText = `Garis potong Foto ${slot === 0 ? "Kiri" : "Kanan"} (Hal ${pId})`;
        } else if (layout === "scatter-trio") {
          cutText = `Garis potong Foto ${slot === 0 ? "Utama" : slot + 1} (Hal ${pId})`;
        } else if (layout === "collage-big-small") {
          cutText = `Garis potong Foto ${slot === 0 ? "Besar Kiri" : slot === 1 ? "Mini Atas" : "Mini Bawah"} (Hal ${pId})`;
        } else if (layout === "filmstrip") {
          cutText = `Garis potong Strip ${slot + 1} (Hal ${pId})`;
        } else if (layout === "photobox-strip") {
          cutText = `Garis potong Strip Photobox ${slot === 0 ? "1" : "2"} (Hal ${pId})`;
        }

        cards.push({
          pId,
          slot,
          layout,
          caption: (p.captions && p.captions[slot]) || "",
          cutGuideText: cutText,
          widthMm: dims.width,
          heightMm: dims.height,
          photoUrl: getPhotoUrl(gIdx),
          photoPos: getPhotoPosition(pId, slot)
        });
      }
    }

    // 3. Foto Strip Photobox di halaman belakang jika ada
    [0, 1].forEach((idx) => {
      const url = getPhotoUrl(`back-photobox-${idx}`);
      if (url) {
        cards.push({
          pId: 2,
          slot: idx,
          layout: "photobox-strip",
          caption: (state.pages[2] && state.pages[2].backCaptions && state.pages[2].backCaptions[idx]) || `Strip Photobox ${idx + 1}`,
          cutGuideText: `Garis potong Strip Photobox Belakang ${idx + 1}`,
          widthMm: 34.0,
          heightMm: 136.2,
          photoUrl: url,
          photoPos: { x: 50, y: 50 }
        });
      }
    });

    // 4. Bonus Foto Cadangan & Pas Foto Dompet untuk memanfaatkan seluruh ruang lembar cetak A3
    const coverUrl = getPhotoUrl(20);
    const p1Url = getPhotoUrl(0);
    const p3Url = getPhotoUrl(6);
    const p5Url = getPhotoUrl(12);

    // A. Cadangan Foto Sampul Depan (Cover Keepsake)
    cards.push({
      pId: 0,
      slot: 99,
      layout: "cover-bonus",
      caption: "Cadangan Foto Sampul Depan",
      cutGuideText: "✂ [BONUS] Cadangan Foto Sampul Depan",
      widthMm: p0Dims.width,
      heightMm: p0Dims.height,
      photoUrl: coverUrl,
      photoPos: getPhotoPosition(0, 0)
    });

    // B. Pas Foto Buku Nikah & Dompet 4x6 cm (Standar 38.1 x 55.9 mm)
    cards.push({
      pId: 0,
      slot: 101,
      layout: "pasfoto-4x6",
      caption: "",
      cutGuideText: "✂ [PAS FOTO 4×6] Dompet / Simpanan",
      widthMm: 38.1,
      heightMm: 55.9,
      photoUrl: coverUrl || p1Url,
      photoPos: getPhotoPosition(0, 0)
    });

    cards.push({
      pId: 5,
      slot: 102,
      layout: "pasfoto-4x6",
      caption: "",
      cutGuideText: "✂ [PAS FOTO 4×6] Dompet / Simpanan",
      widthMm: 38.1,
      heightMm: 55.9,
      photoUrl: p5Url || p3Url || p1Url,
      photoPos: getPhotoPosition(5, 0)
    });

    // D. Pas Foto Dompet 3x4 cm (Standar 27.9 x 38.1 mm)
    cards.push({
      pId: 1,
      slot: 103,
      layout: "pasfoto-3x4",
      caption: "",
      cutGuideText: "✂ [PAS FOTO 3×4] Dompet / Kenangan",
      widthMm: 27.9,
      heightMm: 38.1,
      photoUrl: p1Url || coverUrl,
      photoPos: getPhotoPosition(1, 0)
    });

    cards.push({
      pId: 5,
      slot: 104,
      layout: "pasfoto-3x4",
      caption: "",
      cutGuideText: "✂ [PAS FOTO 3×4] Dompet / Kenangan",
      widthMm: 27.9,
      heightMm: 38.1,
      photoUrl: p5Url || p3Url || coverUrl,
      photoPos: getPhotoPosition(5, 0)
    });

    return cards;
  }

  function packCardsIntoA3Pages(cards, maxRowWidth = 282, maxPageHeight = 404, colGap = 3, rowGap = 3.5, miniSectionHeight = 34) {
    // 1. Urutkan kartu dari tinggi terbesar ke terkecil (Shelf Packing FFDH)
    // agar kartu dengan tinggi serupa berada di satu baris, mempermudah potongan horizontal lurus
    const sorted = [...cards].sort((a, b) => (b.heightMm - a.heightMm) || (b.widthMm - a.widthMm));

    const rows = [];
    for (const card of sorted) {
      const cardEffectiveW = card.widthMm + 2.5; // Toleransi garis potong putus-putus
      const cardEffectiveH = card.heightMm + 4.5; // Toleransi label gunting di atas
      let placed = false;
      for (const r of rows) {
        if (r.width + colGap + cardEffectiveW <= maxRowWidth) {
          r.cards.push(card);
          r.width += colGap + cardEffectiveW;
          r.height = Math.max(r.height, cardEffectiveH);
          placed = true;
          break;
        }
      }
      if (!placed) {
        rows.push({ cards: [card], width: cardEffectiveW, height: cardEffectiveH });
      }
    }

    // 2. Bagi baris-baris ke dalam halaman A3 (297 x 420 mm)
    const pages = [];
    let currentPageRows = [];
    let currentPageHeight = 0;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const isLastRow = (i === rows.length - 1);
      const addedHeight = currentPageRows.length === 0 ? row.height : (rowGap + row.height);

      if (isLastRow) {
        const remainingW = maxRowWidth - row.width;
        // Jika baris terakhir masih punya ruang horizontal luas (>= 90mm), mini polaroid ditata inline di baris ini
        const canInlineMini = remainingW >= 90;
        const effectiveMiniH = canInlineMini ? 0 : miniSectionHeight;
        const heightWithMini = currentPageHeight + addedHeight + (effectiveMiniH > 0 ? (rowGap + effectiveMiniH) : 0);

        if (heightWithMini <= maxPageHeight) {
          currentPageRows.push(row);
          pages.push({ rows: currentPageRows, hasMini: true, miniInline: canInlineMini });
          currentPageRows = [];
          break;
        } else if (currentPageHeight + addedHeight <= maxPageHeight) {
          currentPageRows.push(row);
          pages.push({ rows: currentPageRows, hasMini: false });
          pages.push({ rows: [], hasMini: true, miniInline: false });
          currentPageRows = [];
          break;
        } else {
          if (currentPageRows.length > 0) {
            pages.push({ rows: currentPageRows, hasMini: false });
          }
          pages.push({ rows: [row], hasMini: true, miniInline: false });
          currentPageRows = [];
          break;
        }
      }

      if (currentPageHeight + addedHeight <= maxPageHeight) {
        currentPageRows.push(row);
        currentPageHeight += addedHeight;
      } else {
        if (currentPageRows.length > 0) {
          pages.push({ rows: currentPageRows, hasMini: false });
        }
        currentPageRows = [row];
        currentPageHeight = row.height;
      }
    }

    if (currentPageRows.length > 0) {
      pages.push({ rows: currentPageRows, hasMini: true, miniInline: false });
    }

    return pages;
  }

  function createPolaroidCardDOM(card) {
    const itemWrap = document.createElement("div");
    itemWrap.className = "photoCardItem photoSheet";
    itemWrap.dataset.layout = card.layout;
    itemWrap.dataset.page = String(card.pId);

    const cardEl = document.createElement("div");
    cardEl.className = "printablePolaroid";
    cardEl.dataset.slot = String(card.slot);
    cardEl.dataset.layout = card.layout;
    cardEl.dataset.page = String(card.pId);

    // Kunci ukuran presisi millimeter langsung pada inline style
    cardEl.style.setProperty("width", `${card.widthMm}mm`, "important");
    cardEl.style.setProperty("height", `${card.heightMm}mm`, "important");

    // 4 Tanda Potong Sudut (Corner Crop Marks / L-Marks) agar memotong pakai penggaris besi & cutter sangat mudah
    const cmTL = document.createElement("span");
    cmTL.className = "cropMark cropMarkTL";
    cmTL.setAttribute("aria-hidden", "true");
    const cmTR = document.createElement("span");
    cmTR.className = "cropMark cropMarkTR";
    cmTR.setAttribute("aria-hidden", "true");
    const cmBL = document.createElement("span");
    cmBL.className = "cropMark cropMarkBL";
    cmBL.setAttribute("aria-hidden", "true");
    const cmBR = document.createElement("span");
    cmBR.className = "cropMark cropMarkBR";
    cmBR.setAttribute("aria-hidden", "true");
    cardEl.append(cmTL, cmTR, cmBL, cmBR);

    const cutLabel = document.createElement("span");
    cutLabel.className = "cutGuideLabel";
    cutLabel.innerHTML = `<span class="cutIcon">✂</span> ${card.cutGuideText}`;
    cardEl.append(cutLabel);

    const photoWrap = document.createElement("div");
    photoWrap.className = "polaroidPhotoWrap";

    const btn = document.createElement("div");
    btn.className = "cardPhotoButton";

    if (card.photoUrl) {
      const img = new Image();
      img.className = "cardPhoto";
      img.src = card.photoUrl;
      img.style.objectPosition = `${card.photoPos.x}% ${card.photoPos.y}%`;
      btn.append(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "cardPhotoEmptyBox";
      ph.innerHTML = `<span class="emptyBoxText">Celah Foto Polaroid</span>`;
      btn.append(ph);
    }
    photoWrap.append(btn);
    cardEl.append(photoWrap);

    if (card.caption) {
      const cap = document.createElement("p");
      cap.className = "cardCaption";
      cap.textContent = card.caption;
      cardEl.append(cap);
    }

    itemWrap.append(cardEl);
    return itemWrap;
  }

  function buildPhotoA3PrintPages() {
    const cards = collectAllPolaroidCards();
    const pageList = packCardsIntoA3Pages(cards, 282, 404, 3, 3.5, 34);
    const totalPages = pageList.length;
    const pageNodes = [];

    pageList.forEach((pageObj, pIdx) => {
      const pageNum = pIdx + 1;
      const pageEl = document.createElement("div");
      pageEl.className = "bookPrintPage sheetPhotoA3Print";

      // 1. Header Kompak Presisi Lembar A3 (Hanya ~6mm tinggi, hemat ruang & tinta)
      const header = document.createElement("header");
      header.className = "photoA3HeaderCompact";
      header.innerHTML = `
        <div class="photoA3HeaderLeft">
          <span class="photoA3Badge">KERTAS SILKY (A3 / A3+) · SKALA 1:1</span>
          <span class="photoA3GuideText">Gunting mengikuti tanda sudut presisi &amp; garis putus-putus ✂</span>
        </div>
        <div class="photoA3HeaderRight">
          <span class="photoA3PageBadge">Lembar ${pageNum} dari ${totalPages}</span>
        </div>
      `;
      pageEl.append(header);

      // 2. Main Grid Container
      if (pageObj.rows.length > 0) {
        const grid = document.createElement("div");
        grid.className = "photoA3Grid";

        pageObj.rows.forEach((rowObj, rIdx) => {
          const rowEl = document.createElement("div");
          rowEl.className = "photoA3Row";
          rowObj.cards.forEach((card) => {
            rowEl.append(createPolaroidCardDOM(card));
          });

          // Jika mini polaroid ditata inline pada baris terakhir
          if (pageObj.hasMini && pageObj.miniInline && rIdx === pageObj.rows.length - 1) {
            const miniGroup = document.createElement("div");
            miniGroup.className = "photoA3MiniInlineGroup";
            miniGroup.innerHTML = `
              <div class="miniInlineHeader">
                <span class="miniScissors">✂</span>
                <span>MINI POLAROID &amp; AKSEN DEKORASI (GUNTING BEBAS)</span>
              </div>
              <div class="miniInlineRow" id="photo-a3-mini-inline-${pageNum}"></div>
            `;
            const miniRow = miniGroup.querySelector(`#photo-a3-mini-inline-${pageNum}`);
            const miniThemes = state.presentationCopy?.miniThemes || {
              0: [["goldBox", "our story"], ["roseBox", "special day"], ["mintBox", "akad 2026"]],
              1: [["mintBox", "my bride"], ["yellowBox", "sweet smile"], ["lavenderBox", "future wife"]],
              2: [["peachBox", "our journey"], ["mintBox", "two hearts"], ["yellowBox", "to pelaminan"]],
              3: [["lavenderBox", "wedding 2026"], ["roseBox", "love letter"], ["kraftBox", "forever yours"]],
              4: [["maroonBox", "sepatu maroon"], ["roseBox", "cardigan rajut"], ["goldBox", "kado spesial"]],
              5: [["sageBox", "ijab kabul"], ["yellowBox", "sakinah"], ["lavenderBox", "till jannah"]]
            };
            for (let pid = 0; pid <= 5; pid++) {
              (miniThemes[pid] || []).forEach(([cls, label]) => {
                const mCard = document.createElement("div");
                mCard.className = "miniPolaroidCard";
                mCard.innerHTML = `<span class="miniCut">✂</span><div class="miniPhotoBox ${cls}"></div><span class="miniLabel">${label}</span>`;
                miniRow.append(mCard);
              });
            }
            rowEl.append(miniGroup);
          }

          grid.append(rowEl);
        });
        pageEl.append(grid);
      }

      // 3. Mini Polaroid Standalone (Hanya jika tidak ditata inline)
      if (pageObj.hasMini && !pageObj.miniInline) {
        const miniSection = document.createElement("section");
        miniSection.className = "photoA3MiniSectionCompact";
        miniSection.innerHTML = `
          <div class="photoA3MiniHeader">
            <span class="miniScissors">✂</span>
            <span>MINI POLAROID &amp; AKSEN DEKORASI (GUNTING BEBAS)</span>
          </div>
          <div class="photoA3MiniRow" id="photo-a3-mini-row-${pageNum}"></div>
        `;
        const miniRow = miniSection.querySelector(`#photo-a3-mini-row-${pageNum}`);
        const miniThemes = state.presentationCopy?.miniThemes || {
          0: [["goldBox", "our story"], ["roseBox", "special day"], ["mintBox", "akad 2026"]],
          1: [["mintBox", "my bride"], ["yellowBox", "sweet smile"], ["lavenderBox", "future wife"]],
          2: [["peachBox", "our journey"], ["mintBox", "two hearts"], ["yellowBox", "to pelaminan"]],
          3: [["lavenderBox", "wedding 2026"], ["roseBox", "love letter"], ["kraftBox", "forever yours"]],
          4: [["maroonBox", "sepatu maroon"], ["roseBox", "cardigan rajut"], ["goldBox", "kado spesial"]],
          5: [["sageBox", "ijab kabul"], ["yellowBox", "sakinah"], ["lavenderBox", "till jannah"]]
        };
        for (let pid = 0; pid <= 5; pid++) {
          (miniThemes[pid] || []).forEach(([cls, label]) => {
            const mCard = document.createElement("div");
            mCard.className = "miniPolaroidCard";
            mCard.innerHTML = `<span class="miniCut">✂</span><div class="miniPhotoBox ${cls}"></div><span class="miniLabel">${label}</span>`;
            miniRow.append(mCard);
          });
        }
        pageEl.append(miniSection);
      }

      // 4. Footer Kompak Presisi Lembar A3 (~5mm tinggi, hemat ruang & tinta)
      const footer = document.createElement("footer");
      footer.className = "photoA3FooterCompact";
      footer.innerHTML = `
        <span>Tips Cetak: Cetak pada Kertas Silky (Luster / Kulit Jeruk) 230-260 gsm skala 100% (Actual Size). Gunakan penggaris besi &amp; cutter presisi.</span>
        <span>Halaman ${pageNum} / ${totalPages} · Standar Cetak A3 (297 × 420 mm)</span>
      `;
      pageEl.append(footer);

      pageNodes.push(pageEl);
    });

    return pageNodes;
  }

  // Render Lembar Khusus Kartu Fitur Interaktif DIY (6 Kartu Lengkap Skala Sama)
  function renderCardsSheet(container) {
    if (!container) return;
    const grid = container.querySelector("#cards-cutout-grid") || container;
    grid.replaceChildren();

    // 1. Kartu Halaman 1: Kalender
    const card1Wrap = document.createElement("div");
    card1Wrap.className = "featureCutoutCard cardKalenderWrap";
    card1Wrap.innerHTML = `
      <div class="cardCutoutHeader">
        <span>✂ [HALAMAN 1] KALENDER HARI ISTIMEWA</span>
        <span class="cutoutAction">✂ GUNTING IKUTI GARIS</span>
      </div>
      <div class="featureCardInner calendarSlot"></div>
    `;
    renderCalendarWidget(card1Wrap.querySelector(".calendarSlot"), false);
    grid.append(card1Wrap);

    // 2. Kartu Halaman 2: Tiket Kenangan
    const card2Wrap = document.createElement("div");
    card2Wrap.className = "featureCutoutCard cardTiketWrap";
    card2Wrap.innerHTML = `
      <div class="cardCutoutHeader">
        <span>✂ [HALAMAN 2] TIKET PERJALANAN KENANGAN</span>
        <span class="cutoutAction">✂ GUNTING IKUTI GARIS</span>
      </div>
      <div class="featureCardInner ticketSlot"></div>
    `;
    renderTicketWidget(card2Wrap.querySelector(".ticketSlot"), false);
    grid.append(card2Wrap);

    // 3. Kartu Halaman 3: Surat Cinta
    const card3Wrap = document.createElement("div");
    card3Wrap.className = "featureCutoutCard cardSuratWrap";
    card3Wrap.innerHTML = `
      <div class="cardCutoutHeader">
        <span>✂ [HALAMAN 3] KARTU SURAT CINTA UNTUKMU</span>
        <span class="cutoutAction">✂ GUNTING IKUTI GARIS</span>
      </div>
      <div class="featureCardInner letterSlot"></div>
    `;
    renderLetterWidget(card3Wrap.querySelector(".letterSlot"), false);
    grid.append(card3Wrap);

    // 4. Kartu Halaman 4: Kartu Pesan Kado
    const card4Wrap = document.createElement("div");
    card4Wrap.className = "featureCutoutCard cardKadoWrap";
    card4Wrap.innerHTML = `
      <div class="cardCutoutHeader">
        <span>✂ [HALAMAN 4] KARTU PESAN KADO UNTUKMU</span>
        <span class="cutoutAction">✂ GUNTING IKUTI GARIS</span>
      </div>
      <div class="featureCardInner giftSlot"></div>
    `;
    renderGiftWidget(card4Wrap.querySelector(".giftSlot"), false);
    grid.append(card4Wrap);

    // 5. Kartu Halaman 5: Mixtape
    const card5Wrap = document.createElement("div");
    card5Wrap.className = "featureCutoutCard cardMixtapeWrap";
    card5Wrap.innerHTML = `
      <div class="cardCutoutHeader">
        <span>✂ [HALAMAN 5] REPLIKA KASET MIXTAPE & CHECKLIST</span>
        <span class="cutoutAction">✂ GUNTING IKUTI GARIS</span>
      </div>
      <div class="featureCardInner mixtapeSlot"></div>
    `;
    renderMixtapeWidget(card5Wrap.querySelector(".mixtapeSlot"), false);
    grid.append(card5Wrap);

    // 6. Kartu Spesial Scan QR Buku Digital 3D Interaktif
    const card6Wrap = document.createElement("div");
    card6Wrap.className = "featureCutoutCard cardGuideWrap";
    card6Wrap.innerHTML = `
      <div class="cardCutoutHeader">
        <span>✂ [KARTU SCAN] BUKU DIGITAL 3D INTERAKTIF</span>
        <span class="cutoutAction">✂ GUNTING &amp; SIMPAN DI BUKU / DOMPET</span>
      </div>
      <div class="featureCardInner guideSlot">
        <div class="guideCardWidget">
          <div class="guideQrArea">
            <div class="guideQrSvg"></div>
            <div class="guideQrInfo">
              <strong class="guideQrTitle">Buku Digital 3D</strong>
              <span class="guideQrSub">Scan Menggunakan Kamera HP</span>
            </div>
          </div>
          <div class="guideStepsArea">
            <div class="guideStepsTitle">Buka Kenangan Kita di Layar HP:</div>
            <ol class="guideStepsList">
              <li>Arahkan kamera smartphone ke kode QR di samping</li>
              <li>Buka tautan yang muncul untuk mengakses buku 3D</li>
              <li>Nikmati efek buka-tutup halaman &amp; musik kenangan kita ♡</li>
            </ol>
          </div>
        </div>
      </div>
    `;
    const guideQrSvg = card6Wrap.querySelector(".guideQrSvg");
    if (guideQrSvg && typeof generateQrSvg === "function") {
      guideQrSvg.innerHTML = generateQrSvg(getEffectiveDigitalBookUrl(), { darkColor: "#251d16", lightColor: "#ffffff" });
    }
    grid.append(card6Wrap);

    fitAllDynamicCards(grid);
  }

  // Membuat node DOM klon untuk Lembar Khusus Kartu Fitur Interaktif DIY (1 Lembar A4)
  function createCardsSheetNode() {
    const cardsSheetClone = document.getElementById("sheet-cards").cloneNode(true);
    cardsSheetClone.removeAttribute("id");
    cardsSheetClone.hidden = false;
    renderCardsSheet(cardsSheetClone);
    const qrBox = cardsSheetClone.querySelector("#cards-sheet-qr-box");
    if (qrBox) {
      qrBox.innerHTML = generateQrSvg(getEffectiveDigitalBookUrl(), { darkColor: "#251d16", lightColor: "#ffffff" });
    }
    return cardsSheetClone;
  }

  // Membuat node DOM klon untuk Lembar Kertas Stiker & Catatan DIY
  function createStickerSheetNode(pId) {
    const p = state.pages[pId];
    if (!p) return null;
    const stickerSheetClone = document.getElementById("sheet-stickers").cloneNode(true);
    stickerSheetClone.removeAttribute("id");
    stickerSheetClone.hidden = false;
    stickerSheetClone.querySelector(".sheetBadge").textContent = pId === 0 ? "LEMBAR 3 : KERTAS STIKER & AKSEN SAMPUL" : `LEMBAR 3 : KERTAS STIKER & CATATAN DIY · HALAMAN ${pId} DARI 5`;
    stickerSheetClone.querySelector(".sheetTitle").textContent = pId === 0 ? "Stiker & Washi Tematik : Sampul Depan" : `Stiker & Washi Tematik : ${p.themeTitle}`;

    const sGrid = stickerSheetClone.querySelector(".stickerGrid");
    const sStars = stickerSheetClone.querySelector(".starsRow");
    const sNotes = stickerSheetClone.querySelector(".notesCutoutGrid");
    if (sNotes) renderNotesCutoutSection(pId, sNotes);
    if (window.ScrapbookStickers) {
      window.ScrapbookStickers.renderStickerSheetForPage(pId, sGrid, sStars);
    }
    return stickerSheetClone;
  }

  // Render Galeri Pratinjau Semua Halaman (All Pages Preview)
  function renderAllPagesPreview() {
    const grid = document.getElementById("all-pages-grid");
    if (!grid) return;
    grid.replaceChildren();

    const returnPageNum = document.getElementById("return-page-num");
    if (returnPageNum) returnPageNum.textContent = String(state.currentPage);

    for (let pId = 0; pId <= 5; pId++) {
      const page = state.pages[pId];
      const card = document.createElement("article");
      card.className = "allPageCard";
      card.dataset.page = String(pId);

      const header = document.createElement("div");
      header.className = "allPageCardHeader";
      const briefSubtitle = page.storyBrief ? (page.storyBrief.split(":")[1]?.trim() || page.subtitle || "") : (page.subtitle || "");
      header.innerHTML = `
        <div class="allPageCardMeta">
          <span class="allPageBadge pageThemeBadge${pId}">${pId === 0 ? "SAMPUL" : `HALAMAN ${pId}`}</span>
          <h3 class="allPageCardTitle">${page.themeTitle}</h3>
          <span class="allPageCardSubtitle">${briefSubtitle}</span>
        </div>
        <button type="button" class="jumpToPageBtn" data-jump="${pId}" title="Buka & edit ${pId === 0 ? "Sampul" : `Halaman ${pId}`}">
          ✏️ Buka ${pId === 0 ? "Sampul" : `Hal ${pId}`}
        </button>
      `;

      header.querySelector(".jumpToPageBtn").addEventListener("click", () => {
        renderPage(pId);
        switchView("full");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      const body = document.createElement("div");
      body.className = "allPageCardBody";

      const pageNode = createScrapbookPageNode(pId);
      if (pageNode) body.append(pageNode);

      card.append(header, body);
      grid.append(card);
    }
  }

  // Sistem Pemilih Tab Jenis Kertas untuk Halaman Aktif & Pratinjau Semua Halaman
  const viewTabs = document.querySelectorAll(".viewTab[data-view]");
  const viewNotice = document.getElementById("view-notice");
  const notices = {
    full: "Tampilan utuh siap pajang atau dijilid menjadi album kenangan.",
    book: "Mode Buku Digital 3D Duplex: Buka, tutup, dan balik lembaran album kenangan seperti buku fisik 2 sisi.",
    all: "Pratinjau lengkap seluruh 5 halaman album pernikahan. Gulir untuk menyusuri kisah cinta dari awal hingga pelaminan.",
    base: "Cetak di kertas Linen / Concorde / Karton 220–260 gsm. Kanvas dasar bersih dengan tekstur estetis, bebas berkreasi menempel foto & kartu fisik.",
    back: "Cetak di kertas Linen / Karton 220-260 gsm (Sisi Balik A3+ Duplex). Ruang curahan diary tulisan tangan, segel prangko, dan doa menuju akad.",
    photos: "Cetak di kertas Silky 230–260 gsm (Luster / Kulit Jeruk). Berisi kartu foto polaroid kenangan presisi siap digunting.",
    stickers: "Cetak di kertas Stiker HVS / Vinyl Matte A4. Berisi stiker tematik, ornamen bintang, dan pita washi.",
    cards: "Cetak di Kertas Karton / Concorde / Linen 220–260 gsm. Berisi 5 kartu fitur interaktif (Kalender, Tiket, Surat, Kado, Mixtape) siap gunting & tempel 3D."
  };

  function switchView(viewName) {
    state.currentView = viewName;
    viewTabs.forEach((tab) => {
      const isActive = tab.dataset.view === viewName;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    // Update status tab album semua halaman
    const allTab = document.getElementById("page-tab-all");
    if (allTab) {
      const isAll = viewName === "all";
      allTab.classList.toggle("active", isAll);
      allTab.setAttribute("aria-selected", String(isAll));
    }
    if (viewName !== "all" && viewName !== "book") {
      document.querySelectorAll(".pageTab:not(.allPagesTab)").forEach((tab) => {
        const isCurrent = Number(tab.dataset.page) === state.currentPage;
        tab.classList.toggle("active", isCurrent);
        tab.setAttribute("aria-selected", String(isCurrent));
      });
    } else {
      document.querySelectorAll(".pageTab:not(.allPagesTab)").forEach((tab) => {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      });
    }

    const workspace = document.querySelector(".workspace");
    if (workspace) workspace.dataset.view = viewName;

    const scrapbookWrap = document.querySelector(".scrapbookWrap:not(.backSheetWrap)");
    const scrapbookBackWrap = document.getElementById("scrapbook-back-view");
    const sheetPhotos = document.getElementById("sheet-photos");
    const sheetStickers = document.getElementById("sheet-stickers");
    const sheetCards = document.getElementById("sheet-cards");
    const allPagesSection = document.getElementById("all-pages-section");
    const digitalBookSection = document.getElementById("digital-book-section");
    const layoutSwitcher = document.querySelector(".layoutSwitcher");

    if (viewName === "all") {
      if (scrapbookWrap) scrapbookWrap.hidden = true;
      if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
      if (sheetPhotos) sheetPhotos.hidden = true;
      if (sheetStickers) sheetStickers.hidden = true;
      if (sheetCards) sheetCards.hidden = true;
      if (digitalBookSection) digitalBookSection.hidden = true;
      if (allPagesSection) allPagesSection.hidden = false;
      if (layoutSwitcher) layoutSwitcher.style.display = "none";
      renderAllPagesPreview();
    } else if (viewName === "book") {
      if (scrapbookWrap) scrapbookWrap.hidden = true;
      if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
      if (sheetPhotos) sheetPhotos.hidden = true;
      if (sheetStickers) sheetStickers.hidden = true;
      if (sheetCards) sheetCards.hidden = true;
      if (allPagesSection) allPagesSection.hidden = true;
      if (digitalBookSection) digitalBookSection.hidden = false;
      if (layoutSwitcher) layoutSwitcher.style.display = "none";
      renderDigitalBookSpread(bookSpreadIndex);
    } else {
      if (allPagesSection) allPagesSection.hidden = true;
      if (digitalBookSection) digitalBookSection.hidden = true;
      if (layoutSwitcher) layoutSwitcher.style.display = viewName === "back" ? "none" : "flex";
      if (viewName === "full" || viewName === "base") {
        if (scrapbookWrap) scrapbookWrap.hidden = false;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = true;
      if (sheetCards) sheetCards.hidden = true;
        const widgetArea = document.getElementById("unique-widget-area");
        if (widgetArea) {
          if (state.currentPage === 0) {
            widgetArea.replaceChildren();
            widgetArea.style.display = "none";
          } else {
            widgetArea.style.display = "";
            if (state.currentPage === 1) renderCalendarWidget(widgetArea, viewName === "base");
            else if (state.currentPage === 2) renderTicketWidget(widgetArea, viewName === "base");
            else if (state.currentPage === 3) renderLetterWidget(widgetArea, viewName === "base");
            else if (state.currentPage === 4) renderGiftWidget(widgetArea, viewName === "base");
            else if (state.currentPage === 5) renderMixtapeWidget(widgetArea, viewName === "base");
          }
        }
      } else if (viewName === "back") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = false;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = true;
      if (sheetCards) sheetCards.hidden = true;
      } else if (viewName === "cards") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = true;
        if (sheetCards) {
          sheetCards.hidden = false;
          renderCardsSheet(sheetCards);
          const qrBox = sheetCards.querySelector("#cards-sheet-qr-box");
          if (qrBox) {
            qrBox.innerHTML = generateQrSvg(getEffectiveDigitalBookUrl(), { darkColor: "#251d16", lightColor: "#ffffff" });
          }
        }
      } else if (viewName === "photos") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = false;
        if (sheetStickers) sheetStickers.hidden = true;
      if (sheetCards) sheetCards.hidden = true;
      } else if (viewName === "stickers") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = false;
      }
    }

    if (viewNotice) viewNotice.textContent = notices[viewName] || "";
  }

  viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  // Tombol Toggle Panduan Lubang Jilid Presisi
  const punchToggleBtn = document.getElementById("btn-toggle-punch-guide");
  if (punchToggleBtn) {
    punchToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.toggle("show-punch-guides");
      const active = document.body.classList.contains("show-punch-guides");
      punchToggleBtn.classList.toggle("active", active);
      punchToggleBtn.setAttribute("aria-pressed", String(active));
    });
  }

  // Navigasi Halaman Album
  document.querySelectorAll(".pageTab").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.page === "all") {
        switchView("all");
      } else {
        if (state.currentView === "all") switchView("full");
        renderPage(Number(tab.dataset.page));
      }
    });
  });

  // Tombol Pilihan Mode Tampilan di All Pages (Grid vs Alur Baca)
  const btnGridView = document.getElementById("btn-grid-view");
  const btnStreamView = document.getElementById("btn-stream-view");
  const allPagesGrid = document.getElementById("all-pages-grid");

  if (btnGridView && btnStreamView && allPagesGrid) {
    btnGridView.addEventListener("click", () => {
      btnGridView.classList.add("active");
      btnStreamView.classList.remove("active");
      allPagesGrid.className = "allPagesGrid mode-grid";
    });
    btnStreamView.addEventListener("click", () => {
      btnStreamView.classList.add("active");
      btnGridView.classList.remove("active");
      allPagesGrid.className = "allPagesGrid mode-stream";
    });
  }

  document.getElementById("btn-all-pages-print")?.addEventListener("click", () => {
    const printBtn = document.getElementById("print-button");
    if (printBtn) printBtn.click();
    const radio = document.querySelector('input[name="printMode"][value="book-full"]');
    if (radio) {
      radio.checked = true;
      document.querySelectorAll(".printOptionCard").forEach((c) => c.classList.remove("active"));
      radio.closest(".printOptionCard")?.classList.add("active");
    }
  });

  document.getElementById("btn-all-pages-close")?.addEventListener("click", () => {
    switchView("full");
    renderPage(state.currentPage);
  });

  document.getElementById("prev-page-btn")?.addEventListener("click", () => {
    if (state.currentPage > 0) renderPage(state.currentPage - 1);
  });
  document.getElementById("next-page-btn")?.addEventListener("click", () => {
    if (state.currentPage < 5) renderPage(state.currentPage + 1);
  });

  // Helper serialisasi data state untuk database
  function getSerializableState() {
    return {
      name: state.name,
      birthday: state.birthday,
      digitalBookUrl: state.digitalBookUrl,
      pages: JSON.parse(JSON.stringify(state.pages)),
      photoUrls: Object.fromEntries(state.photoUrls),
      presentationCopy: state.presentationCopy
    };
  }

  function notifyParentChange() {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({
        type: "SCRAPBOOK_DATA_CHANGED",
        payload: getSerializableState()
      }, "*");
    }
  }

  // Pilihan Tata Letak Foto Halaman Aktif (Layout Switcher)
  document.querySelectorAll(".layoutPill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const choice = pill.dataset.layout;
      if (!choice) return;
      state.pages[state.currentPage].layout = choice;
      renderPage(state.currentPage);
      notifyParentChange();
    });
  });

  // Sambungkan input foto & fitur geser posisi untuk 3 slot di halaman aktif
  const lastPhotoDragTime = new Map();

  document.querySelectorAll(".photoFrame").forEach((frame) => {
    const slot = Number(frame.dataset.slot);
    const button = frame.querySelector(".photoButton");
    const input = frame.querySelector("input.fileInput");
    const error = frame.querySelector(".photoError");
    let selection = 0;

    const showError = (message) => {
      if (error) { error.textContent = message; error.hidden = false; }
    };

    button.addEventListener("click", (e) => {
      if (state.currentPage === 4 && e.target.closest(".giftRevealCover, .photoRecloseBtn")) {
        return;
      }
      if (e.target.closest(".photoAdjustToolbar")) {
        return;
      }
      const lastDrag = lastPhotoDragTime.get(`frame-${slot}`) || 0;
      if (Date.now() - lastDrag < 300) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      input.click();
    });

    // Pointer Drag untuk geser posisi foto langsung di bingkai polaroid
    button.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (state.currentPage === 4 && e.target.closest(".giftRevealCover, .photoRecloseBtn")) return;
      if (e.target.closest(".photoAdjustToolbar")) return;

      const img = button.querySelector(".photo");
      if (!img) return;

      frame.classList.add("is-adjusting");
      const pageId = state.currentPage;
      const startX = e.clientX;
      const startY = e.clientY;
      const origPos = getPhotoPosition(pageId, slot);
      let currentPos = { ...origPos };
      let isDragging = false;
      let hasMoved = false;

      const rect = button.getBoundingClientRect();
      const width = rect.width || 200;
      const height = rect.height || 200;

      try {
        button.setPointerCapture(e.pointerId);
      } catch (_) {}

      const badge = frame.querySelector(".photoPosBadge");

      const onPointerMove = (moveEvt) => {
        const dx = moveEvt.clientX - startX;
        const dy = moveEvt.clientY - startY;

        if (!isDragging && Math.hypot(dx, dy) > 4) {
          isDragging = true;
          hasMoved = true;
          frame.classList.add("is-dragging-photo");
          button.classList.add("is-dragging");
        }

        if (!isDragging) return;

        const deltaX = (dx / width) * 100;
        const deltaY = (dy / height) * 100;

        let nx = Math.round(origPos.x - deltaX);
        let ny = Math.round(origPos.y - deltaY);
        nx = Math.max(0, Math.min(100, nx));
        ny = Math.max(0, Math.min(100, ny));
        currentPos = { x: nx, y: ny };

        syncPhotoPositions(slot, nx, ny);

        if (badge) {
          badge.textContent = `Posisi: ${nx}% · ${ny}%`;
          badge.classList.add("is-visible");
        }
      };

      const onPointerUp = () => {
        try {
          button.releasePointerCapture(e.pointerId);
        } catch (_) {}
        button.removeEventListener("pointermove", onPointerMove);
        button.removeEventListener("pointerup", onPointerUp);
        button.removeEventListener("pointercancel", onPointerUp);

        frame.classList.remove("is-dragging-photo");
        button.classList.remove("is-dragging");

        if (hasMoved) {
          setPhotoPosition(pageId, slot, currentPos.x, currentPos.y);
          notifyParentChange();
          lastPhotoDragTime.set(`frame-${slot}`, Date.now());
          if (badge) {
            setTimeout(() => {
              badge.classList.remove("is-visible");
            }, 1200);
          }
        } else {
          if (badge) badge.classList.remove("is-visible");
        }
      };

      button.addEventListener("pointermove", onPointerMove);
      button.addEventListener("pointerup", onPointerUp);
      button.addEventListener("pointercancel", onPointerUp);
    });

    input.addEventListener("change", () => {
      const file = input.files[0];
      input.value = "";
      if (!file) return;
      const currentSelection = ++selection;
      if (error) error.hidden = true;

      if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(file.type)) {
        showError("Pilih foto JPG, PNG, WebP, atau AVIF.");
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        showError("Ukuran foto maksimal 15 MB.");
        return;
      }

      const globalIndex = state.currentPage === 0 ? (20 + slot) : (state.currentPage - 1) * 3 + slot;
      const reader = new FileReader();

      reader.onload = () => {
        if (currentSelection !== selection) return;
        state.photoUrls.set(globalIndex, reader.result);
        // Reset posisi ke tengah untuk foto baru yang diunggah
        setPhotoPosition(state.currentPage, slot, 50, 50);
        renderPage(state.currentPage);
        notifyParentChange();

        // Kirim event foto ke parent Next.js untuk disimpan ke server storage
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({
            type: "SCRAPBOOK_PHOTO_SELECTED",
            slot: globalIndex,
            file: file,
            dataUrl: reader.result
          }, "*");
        }
      };

      reader.onerror = () => {
        if (currentSelection === selection) showError("Foto tidak bisa dibuka. Coba file lain.");
      };

      reader.readAsDataURL(file);
    });
  });

  // Sambungkan tombol foto di lembar foto ke input file & drag posisi
  document.querySelectorAll(".printablePolaroid").forEach((card) => {
    const slot = Number(card.dataset.slot);
    const btn = card.querySelector(".cardPhotoButton");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      if (e.target.closest(".photoAdjustToolbar")) return;
      const lastDrag = lastPhotoDragTime.get(`sheet-${slot}`) || 0;
      if (Date.now() - lastDrag < 300) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      const input = document.querySelector(`.photoFrame[data-slot="${slot}"] input.fileInput`);
      if (input) input.click();
    });

    btn.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (e.target.closest(".photoAdjustToolbar")) return;

      const img = btn.querySelector(".cardPhoto");
      if (!img) return;

      card.classList.add("is-adjusting");
      const pageId = state.currentPage;
      const startX = e.clientX;
      const startY = e.clientY;
      const origPos = getPhotoPosition(pageId, slot);
      let currentPos = { ...origPos };
      let isDragging = false;
      let hasMoved = false;

      const rect = btn.getBoundingClientRect();
      const width = rect.width || 200;
      const height = rect.height || 200;

      try {
        btn.setPointerCapture(e.pointerId);
      } catch (_) {}

      const badge = card.querySelector(".photoPosBadge");

      const onPointerMove = (moveEvt) => {
        const dx = moveEvt.clientX - startX;
        const dy = moveEvt.clientY - startY;

        if (!isDragging && Math.hypot(dx, dy) > 4) {
          isDragging = true;
          hasMoved = true;
          card.classList.add("is-dragging-photo");
          btn.classList.add("is-dragging");
        }

        if (!isDragging) return;

        const deltaX = (dx / width) * 100;
        const deltaY = (dy / height) * 100;

        let nx = Math.round(origPos.x - deltaX);
        let ny = Math.round(origPos.y - deltaY);
        nx = Math.max(0, Math.min(100, nx));
        ny = Math.max(0, Math.min(100, ny));
        currentPos = { x: nx, y: ny };

        syncPhotoPositions(slot, nx, ny);

        if (badge) {
          badge.textContent = `Posisi: ${nx}% · ${ny}%`;
          badge.classList.add("is-visible");
        }
      };

      const onPointerUp = () => {
        try {
          btn.releasePointerCapture(e.pointerId);
        } catch (_) {}
        btn.removeEventListener("pointermove", onPointerMove);
        btn.removeEventListener("pointerup", onPointerUp);
        btn.removeEventListener("pointercancel", onPointerUp);

        card.classList.remove("is-dragging-photo");
        btn.classList.remove("is-dragging");

        if (hasMoved) {
          setPhotoPosition(pageId, slot, currentPos.x, currentPos.y);
          notifyParentChange();
          lastPhotoDragTime.set(`sheet-${slot}`, Date.now());
          if (badge) {
            setTimeout(() => {
              badge.classList.remove("is-visible");
            }, 1200);
          }
        } else {
          if (badge) badge.classList.remove("is-visible");
        }
      };

      btn.addEventListener("pointermove", onPointerMove);
      btn.addEventListener("pointerup", onPointerUp);
      btn.addEventListener("pointercancel", onPointerUp);
    });
  });

  // Listener tutup toolbar adjusting saat klik area luar
  document.addEventListener("pointerdown", (e) => {
    if (!e.target.closest(".photoFrame, .printablePolaroid")) {
      document.querySelectorAll(".photoFrame.is-adjusting, .printablePolaroid.is-adjusting").forEach((el) => {
        el.classList.remove("is-adjusting");
      });
    }
  });

  // Sambungkan upload untuk 2 strip photobox di Sisi Balik Halaman 2
  const photoboxFileInput = document.createElement("input");
  photoboxFileInput.type = "file";
  photoboxFileInput.accept = "image/*";
  photoboxFileInput.style.display = "none";
  document.body.append(photoboxFileInput);
  let activePhotoboxSlot = null;

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".backPhotoboxUploadBtn");
    if (btn) {
      activePhotoboxSlot = btn.dataset.slot;
      photoboxFileInput.value = "";
      photoboxFileInput.click();
    }
  });

  photoboxFileInput.addEventListener("change", () => {
    const file = photoboxFileInput.files?.[0];
    if (!file || !activePhotoboxSlot) return;
    const reader = new FileReader();
    reader.onload = () => {
      state.photoUrls.set(activePhotoboxSlot, reader.result);
      const btn = document.querySelector(`.backPhotoboxUploadBtn[data-slot="${activePhotoboxSlot}"]`);
      if (btn) {
        btn.querySelector(".backPhotoboxImg")?.remove();
        const img = new Image();
        img.className = "backPhotoboxImg";
        img.src = reader.result;
        btn.prepend(img);
      }
      notifyParentChange();

      if (window.parent && window.parent !== window) {
        window.parent.postMessage({
          type: "SCRAPBOOK_PHOTO_SELECTED",
          slot: activePhotoboxSlot,
          file: file,
          dataUrl: reader.result
        }, "*");
      }
    };
    reader.readAsDataURL(file);
  });

  // Dialog Editor Tulisan & Isi Seluruh Buku
  // Dialog Editor Tulisan & Isi Seluruh Buku (Studio Personalisasi)
  const editButton = document.getElementById("edit-button");
  const dialog = document.getElementById("editor");
  const form = document.getElementById("editor-form");
  const closeEditor = document.getElementById("close-editor");
  const cancelEditor = document.getElementById("btn-cancel-editor");

  // Tab Switcher di dalam Modal Editor
  const editorNavBtns = document.querySelectorAll(".editorNavBtn");
  const editorPanels = document.querySelectorAll(".editorPanel");

  function switchEditorTab(tabName) {
    editorNavBtns.forEach((btn) => {
      const isTarget = btn.dataset.editorTab === tabName;
      btn.classList.toggle("active", isTarget);
      btn.setAttribute("aria-selected", String(isTarget));
    });
    editorPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.id === `editor-panel-${tabName}`);
    });
  }

  editorNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => switchEditorTab(btn.dataset.editorTab));
  });

  // Handler Visual Layout Picker di dalam form modal
  function updateVisualLayoutSelection(pageId, layoutValue) {
    const hiddenInput = form.elements[`p${pageId}_layout`];
    if (hiddenInput) hiddenInput.value = layoutValue;

    const group = document.querySelector(`.visualLayoutGroup[data-page="${pageId}"]`);
    if (group) {
      group.querySelectorAll(".layoutCard").forEach((card) => {
        const isSelected = card.dataset.layout === layoutValue;
        card.classList.toggle("active", isSelected);
        card.setAttribute("aria-pressed", String(isSelected));
      });
    }
  }

  document.querySelectorAll(".visualLayoutGroup .layoutCard").forEach((card) => {
    card.addEventListener("click", () => {
      const group = card.closest(".visualLayoutGroup");
      if (!group) return;
      const pageId = Number(group.dataset.page);
      const chosenLayout = card.dataset.layout;
      updateVisualLayoutSelection(pageId, chosenLayout);
    });
  });

  if (editButton && dialog) {
    editButton.addEventListener("click", () => {
      form.elements.name.value = state.name;
      form.elements.birthday.value = state.birthday;
      if (form.elements.digital_book_url) {
        form.elements.digital_book_url.value = state.digitalBookUrl || "";
      }
      updateAllQrCodes();

      // Isi nilai form untuk Sampul dan 5 halaman
      if (form.elements.p0_title) form.elements.p0_title.value = state.pages[0].titleCutout;
      if (form.elements.p0_sub) form.elements.p0_sub.value = state.pages[0].subtitle;
      if (form.elements.p0_c0) form.elements.p0_c0.value = state.pages[0].captions[0] || "";

      for (let p = 1; p <= 5; p++) {
        const page = state.pages[p];
        const currentLayout = page.layout || "single-hero";
        if (form.elements[`p${p}_layout`]) form.elements[`p${p}_layout`].value = currentLayout;
        updateVisualLayoutSelection(p, currentLayout);

        page.captions.forEach((cap, idx) => {
          if (form.elements[`p${p}_c${idx}`]) form.elements[`p${p}_c${idx}`].value = cap;
        });
      }
      if (form.elements.p2_ticket_route) form.elements.p2_ticket_route.value = state.pages[2].ticketRoute;
      if (form.elements.p3_letter) form.elements.p3_letter.value = state.pages[3].letterText;
      if (form.elements.p4_gift_msg) form.elements.p4_gift_msg.value = state.pages[4].giftCardText;

      // Buka tab yang relevan dengan halaman aktif di kanvas
      if (state.currentPage === 0) {
        switchEditorTab("cover");
      } else if (state.currentPage >= 1 && state.currentPage <= 5) {
        switchEditorTab(`page${state.currentPage}`);
      } else {
        switchEditorTab("profile");
      }

      dialog.showModal();
    });
  }

  if (closeEditor) closeEditor.addEventListener("click", () => dialog.close());
  if (cancelEditor) cancelEditor.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      state.name = form.elements.name.value.trim() || state.presentationCopy?.nameFallback || "Calon Istriku";
      state.birthday = form.elements.birthday.value;

      // Simpan URL Buku Digital jika diisi
      if (form.elements.digital_book_url) {
        state.digitalBookUrl = form.elements.digital_book_url.value.trim();
      }
      updateAllQrCodes();

      // Simpan catatan sampul
      if (form.elements.p0_title) state.pages[0].titleCutout = form.elements.p0_title.value.trim() || state.pages[0].titleCutout;
      if (form.elements.p0_sub) state.pages[0].subtitle = form.elements.p0_sub.value.trim() || state.pages[0].subtitle;
      if (form.elements.p0_c0) state.pages[0].captions[0] = form.elements.p0_c0.value.trim() || state.pages[0].captions[0];

      // Simpan catatan dan tata letak per halaman
      for (let p = 1; p <= 5; p++) {
        if (form.elements[`p${p}_layout`]) {
          state.pages[p].layout = form.elements[`p${p}_layout`].value;
        }
        state.pages[p].captions = [0, 1, 2].map((idx) => {
          const field = form.elements[`p${p}_c${idx}`];
          return field ? field.value.trim() : state.pages[p].captions[idx];
        });
      }
      if (form.elements.p2_ticket_route) {
        state.pages[2].ticketRoute = form.elements.p2_ticket_route.value.trim() || state.pages[2].ticketRoute;
      }
      if (form.elements.p3_letter) {
        state.pages[3].letterText = form.elements.p3_letter.value.trim() || state.pages[3].letterText;
      }
      if (form.elements.p4_gift_msg) {
        state.pages[4].giftCardText = form.elements.p4_gift_msg.value.trim() || state.pages[4].giftCardText;
      }

      document.title = state.albumTitle || `Happy Birthday, ${state.name}! · Wedding & Birthday Scrapbook`;
      renderPage(state.currentPage);
      notifyParentChange();
      dialog.close();
    });
  }

  // Interaktivitas Pengaturan URL & Pratinjau QR Code di Dialog Studio
  const digitalBookUrlInput = document.getElementById("digital-book-url-input");
  const btnAutoSetUrl = document.getElementById("btn-auto-set-url");
  const btnPrintChangeQr = document.getElementById("btn-print-change-qr");

  if (digitalBookUrlInput) {
    digitalBookUrlInput.addEventListener("input", () => {
      const customUrl = digitalBookUrlInput.value.trim();
      const effective = customUrl || getEffectiveDigitalBookUrl();
      const editorQrBox = document.getElementById("editor-qr-code-display");
      if (editorQrBox) editorQrBox.innerHTML = generateQrSvg(effective, { darkColor: "#251d16", lightColor: "#ffffff" });
      const editorQrText = document.getElementById("editor-qr-target-url-text");
      if (editorQrText) editorQrText.textContent = effective;
    });
  }

  if (btnAutoSetUrl) {
    btnAutoSetUrl.addEventListener("click", () => {
      try {
        const u = new URL(window.location.href);
        u.searchParams.set("view", "book");
        if (digitalBookUrlInput) {
          digitalBookUrlInput.value = u.toString();
          digitalBookUrlInput.dispatchEvent(new Event("input"));
        }
      } catch {
        if (digitalBookUrlInput) {
          digitalBookUrlInput.value = window.location.href.split("?")[0] + "?view=book";
          digitalBookUrlInput.dispatchEvent(new Event("input"));
        }
      }
    });
  }

  if (btnPrintChangeQr) {
    btnPrintChangeQr.addEventListener("click", () => {
      if (printDialog) printDialog.close();
      if (editButton) editButton.click();
      setTimeout(() => {
        switchEditorTab("digital-book");
      }, 50);
    });
  }

  // Dialog Cetak / Simpan PDF
  const printButton = document.getElementById("print-button");
  const printDialog = document.getElementById("print-dialog");
  const closePrintDialog = document.getElementById("close-print-dialog");
  const cancelPrintButton = document.getElementById("cancel-print-button");
  const printForm = document.getElementById("print-form");
  const printBookContainer = document.getElementById("print-book-container");

  if (printButton && printDialog) {
    printButton.addEventListener("click", () => {
      const p = state.pages[state.currentPage];
      const pageLabelSub = document.getElementById("current-page-label-sub");
      const baseDuplexNote = document.getElementById("current-base-duplex-note");
      const photosNote = document.getElementById("current-photos-note");
      const stickersNote = document.getElementById("current-stickers-note");
      const singleNote = document.getElementById("current-page-single-note");

      const pageTitle = state.currentPage === 0 ? "Sampul Depan (Cover Keepsake)" : `Halaman ${state.currentPage} (${p.themeTitle})`;

      if (pageLabelSub) pageLabelSub.textContent = `Pilihan lembar khusus untuk: ${pageTitle}`;
      if (baseDuplexNote) baseDuplexNote.textContent = `Mencetak Sisi Depan (kliping latar & panduan celah foto) dan Sisi Balik (diary & doa akad) secara bolak-balik khusus untuk ${pageTitle}. Kertas Linen / Concorde 260 gsm.`;
      if (photosNote) photosNote.textContent = `Mencetak kartu foto polaroid dengan garis potong presisi khusus untuk ${pageTitle}. Kertas Silky (Luster / Kulit Jeruk) 230–260 gsm.`;
      if (stickersNote) stickersNote.textContent = `Mencetak stiker tematik, pita washi, dan kartu memo tulisan tangan khusus untuk ${pageTitle}. Kertas Stiker Vinyl / HVS A4.`;
      if (singleNote) singleNote.textContent = `Mencetak ${pageTitle} dalam format 1 lembar poster kolase utuh jadi siap pajang.`;

      updateAllQrCodes();
      printDialog.showModal();
    });
  }

  if (closePrintDialog) closePrintDialog.addEventListener("click", () => printDialog.close());
  if (cancelPrintButton) cancelPrintButton.addEventListener("click", () => printDialog.close());

  if (printDialog) {
    printDialog.addEventListener("click", (event) => {
      if (event.target !== printDialog) return;
      const bounds = printDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
        printDialog.close();
      }
    });
  }

  // Tombol Cetak Cepat Langsung dari Lembar Kartu Fitur Interaktif
  const btnPrintCardsDirect = document.getElementById("btn-print-cards-direct");
  if (btnPrintCardsDirect) {
    btnPrintCardsDirect.addEventListener("click", () => {
      if (printForm) {
        printForm.elements.printMode.value = "all-cards";
        printForm.dispatchEvent(new Event("submit"));
      }
    });
  }

  // Tombol Cetak Cepat Langsung Lembar Foto Polaroid A3+
  const btnPrintPhotosA3Direct = document.getElementById("btn-print-photos-a3-direct");
  if (btnPrintPhotosA3Direct) {
    btnPrintPhotosA3Direct.addEventListener("click", () => {
      if (printForm) {
        printForm.elements.printMode.value = "all-photos";
        printForm.dispatchEvent(new Event("submit"));
      }
    });
  }

  // Bangun elemen cetak untuk multi-halaman buku album & lembar kertas terpisah
  function buildBookPrintDOM(mode) {
    if (!printBookContainer) return;
    printBookContainer.replaceChildren();

    const cur = state.currentPage;

    if (mode === "single-base-duplex") {
      // 2 Halaman PDF: Sisi Depan Dasar + Sisi Balik Dasar untuk Halaman Aktif Saja
      const frontPage = document.createElement("div");
      frontPage.className = "bookPrintPage sheetBasePrint";
      const frontNode = createScrapbookBaseNode(cur);
      if (frontNode) frontPage.append(frontNode);
      printBookContainer.append(frontPage);

      const backPage = document.createElement("div");
      backPage.className = "bookPrintPage sheetBasePrint sheetBackPage";
      const backNode = createScrapbookBackNode(cur, true);
      if (backNode) backPage.append(backNode);
      printBookContainer.append(backPage);
    } else if (mode === "single-photos") {
      // 1 Halaman PDF: Foto Polaroid Halaman Aktif Saja
      const photoPage = document.createElement("div");
      photoPage.className = "bookPrintPage sheetPhotoPrint";
      const photoNode = createPhotoSheetNode(cur);
      if (photoNode) photoPage.append(photoNode);
      printBookContainer.append(photoPage);
    } else if (mode === "single-stickers") {
      // 1 Halaman PDF: Stiker & Catatan DIY Halaman Aktif Saja
      const stickerPage = document.createElement("div");
      stickerPage.className = "bookPrintPage sheetStickerPrint";
      const stickerNode = createStickerSheetNode(cur);
      if (stickerNode) stickerPage.append(stickerNode);
      printBookContainer.append(stickerPage);
    } else if (mode === "page-current") {
      // 1 Halaman PDF: Poster Kolase Jadi Halaman Aktif Saja
      const pageEl = document.createElement("div");
      pageEl.className = "bookPrintPage";
      const wrap = state.currentView === "back" ? createScrapbookBackNode(cur, false) : createScrapbookPageNode(cur);
      if (wrap) pageEl.append(wrap);
      printBookContainer.append(pageEl);
    } else if (mode === "all-base-duplex") {
      // 12 Halaman PDF: Semua Lembar Dasar Duplex Seluruh Buku (Depan 0, Balik 0, Depan 1, Balik 1, dst.)
      for (let pId = 0; pId <= 5; pId++) {
        const frontPage = document.createElement("div");
        frontPage.className = "bookPrintPage sheetBasePrint";
        const frontNode = createScrapbookBaseNode(pId);
        if (frontNode) frontPage.append(frontNode);
        printBookContainer.append(frontPage);

        const backPage = document.createElement("div");
        backPage.className = "bookPrintPage sheetBasePrint sheetBackPage";
        const backNode = createScrapbookBackNode(pId, true);
        if (backNode) backPage.append(backNode);
        printBookContainer.append(backPage);
      }
    } else if (mode === "all-photos") {
      // Format A3+: Seluruh Foto Polaroid Album Jadi 1 Lembar A3+ (Otomatis Tambah Lembar jika Penuh)
      const a3Pages = buildPhotoA3PrintPages();
      a3Pages.forEach((p) => printBookContainer.append(p));
    } else if (mode === "all-photos-a4") {
      // 6 Halaman PDF: Semua Lembar Foto Polaroid Seluruh Buku (Cover & Hal 1-5) Versi A4 Terpisah
      for (let pId = 0; pId <= 5; pId++) {
        const photoPage = document.createElement("div");
        photoPage.className = "bookPrintPage sheetPhotoPrint";
        const photoNode = createPhotoSheetNode(pId);
        if (photoNode) photoPage.append(photoNode);
        printBookContainer.append(photoPage);
      }
    } else if (mode === "all-stickers") {
      // 6 Halaman PDF: Semua Lembar Stiker Tematik Seluruh Buku (Cover & Hal 1-5)
      for (let pId = 0; pId <= 5; pId++) {
        const stickerPage = document.createElement("div");
        stickerPage.className = "bookPrintPage sheetStickerPrint";
        const stickerNode = createStickerSheetNode(pId);
        if (stickerNode) stickerPage.append(stickerNode);
        printBookContainer.append(stickerPage);
      }
      // Halaman ke-19: Lembar Khusus 5 Kartu Fitur Interaktif DIY
      const cardsPage = document.createElement("div");
      cardsPage.className = "bookPrintPage sheetCardsPrint";
      const cardsNode = createCardsSheetNode();
      if (cardsNode) cardsPage.append(cardsNode);
      printBookContainer.append(cardsPage);
    } else if (mode === "all-cards") {
      // 1 Halaman PDF: Lembar Khusus Kartu Fitur Interaktif DIY (Hal 1 s/d 5)
      const cardsPage = document.createElement("div");
      cardsPage.className = "bookPrintPage sheetCardsPrint";
      const cardsNode = createCardsSheetNode();
      if (cardsNode) cardsPage.append(cardsNode);
      printBookContainer.append(cardsPage);
    } else if (mode === "book-full") {
      // 6 Halaman PDF: Cover & 5 Halaman Jadi 1 Sisi
      for (let pId = 0; pId <= 5; pId++) {
        const pageEl = document.createElement("div");
        pageEl.className = "bookPrintPage";
        const wrap = createScrapbookPageNode(pId);
        if (wrap) pageEl.append(wrap);
        printBookContainer.append(pageEl);
      }
    } else if (mode === "book-duplex") {
      // 12 Halaman PDF: Cover & 5 Halaman Jadi Bolak-Balik
      for (let pId = 0; pId <= 5; pId++) {
        const frontPageEl = document.createElement("div");
        frontPageEl.className = "bookPrintPage sheetFrontPage";
        const frontWrap = createScrapbookPageNode(pId);
        if (frontWrap) frontPageEl.append(frontWrap);
        printBookContainer.append(frontPageEl);

        const backPageEl = document.createElement("div");
        backPageEl.className = "bookPrintPage sheetBackPage";
        const backWrap = createScrapbookBackNode(pId);
        if (backWrap) backPageEl.append(backWrap);
        printBookContainer.append(backPageEl);
      }
    } else if (mode === "kit-all") {
      // 18 Halaman PDF: Dasar, Foto, Stiker berturut-turut untuk Cover & Hal 1-5
      for (let pId = 0; pId <= 5; pId++) {
        const basePage = document.createElement("div");
        basePage.className = "bookPrintPage sheetBasePrint";
        const baseNode = createScrapbookBaseNode(pId);
        if (baseNode) basePage.append(baseNode);
        printBookContainer.append(basePage);

        const photoPage = document.createElement("div");
        photoPage.className = "bookPrintPage sheetPhotoPrint";
        const photoNode = createPhotoSheetNode(pId);
        if (photoNode) photoPage.append(photoNode);
        printBookContainer.append(photoPage);

        const stickerPage = document.createElement("div");
        stickerPage.className = "bookPrintPage sheetStickerPrint";
        const stickerNode = createStickerSheetNode(pId);
        if (stickerNode) stickerPage.append(stickerNode);
        printBookContainer.append(stickerPage);
      }
    }
    fitAllDynamicCards(printBookContainer);
  }

  // Terapkan aturan @page dan ukuran kertas dinamis sesuai mode cetak
  function applyDynamicPrintStyles(mode) {
    let dynamicPrintStyle = document.getElementById("dynamic-print-page-style");
    if (!dynamicPrintStyle) {
      dynamicPrintStyle = document.createElement("style");
      dynamicPrintStyle.id = "dynamic-print-page-style";
      document.head.appendChild(dynamicPrintStyle);
    }
    if (mode === "all-photos") {
      dynamicPrintStyle.textContent = `
        @page {
          size: A3 portrait;
          margin: 0;
        }
        @media print {
          html, body {
            width: 297mm !important;
            min-width: 297mm !important;
            max-width: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }
          .workspace {
            width: 297mm !important;
            min-width: 297mm !important;
            max-width: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }
          .printBookContainer {
            width: 297mm !important;
            min-width: 297mm !important;
            max-width: 297mm !important;
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `;
    } else {
      dynamicPrintStyle.textContent = `
        @page {
          size: A4 portrait;
          margin: 0;
        }
        @media print {
          html, body {
            width: 210mm !important;
            background: #ffffff !important;
          }
          .workspace {
            width: 210mm !important;
            background: #ffffff !important;
          }
          .printBookContainer {
            width: 210mm !important;
          }
        }
      `;
    }
  }

  // Submit Form Cetak
  if (printForm) {
    const allPrintModes = [
      "single-base-duplex", "single-photos", "single-stickers", "page-current",
      "all-base-duplex", "all-photos", "all-photos-a4", "all-stickers",
      "book-full", "book-duplex", "kit-all", "all-cards"
    ];

    const optionCards = printForm.querySelectorAll(".printOptionCard");
    optionCards.forEach((card) => {
      const radio = card.querySelector('input[type="radio"]');
      radio.addEventListener("change", () => {
        optionCards.forEach((c) => c.classList.remove("active"));
        if (radio.checked) card.classList.add("active");
      });
    });

    printForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const mode = printForm.elements.printMode.value;
      printDialog.close();

      allPrintModes.forEach((m) => document.body.classList.remove(`print-mode-${m}`));

      // Suntikkan aturan @page dan ukuran bodi yang dinamis sesuai format kertas
      applyDynamicPrintStyles(mode);

      buildBookPrintDOM(mode);
      document.body.classList.add(`print-mode-${mode}`);
      fitAllDynamicCards(printBookContainer);

      // Tunggu seluruh foto dan gambar selesai di-load dan di-decode 100% sebelum membuka dialog cetak
      const allImgs = Array.from(printBookContainer.querySelectorAll("img"));
      if (allImgs.length > 0) {
        await Promise.all(
          allImgs.map((img) => {
            if (img.complete && img.naturalWidth > 0) {
              return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
            }
            return new Promise((resolve) => {
              img.onload = () => {
                if (img.decode) {
                  img.decode().then(resolve).catch(resolve);
                } else {
                  resolve();
                }
              };
              img.onerror = resolve;
            });
          })
        );
      }

      await new Promise((r) => setTimeout(r, 150));

      const cleanup = () => {
        allPrintModes.forEach((m) => document.body.classList.remove(`print-mode-${m}`));
        if (printBookContainer) printBookContainer.replaceChildren();
        if (dynamicPrintStyle) dynamicPrintStyle.remove();
        window.removeEventListener("afterprint", cleanup);
      };

      window.addEventListener("afterprint", cleanup);
      window.print();
    });
  }

  // Handler Tombol Simpan Buku
  const saveButton = document.getElementById("save-button");
  const saveButtonText = document.getElementById("save-button-text");

  if (saveButton) {
    saveButton.addEventListener("click", () => {
      if (window.parent && window.parent !== window) {
        if (saveButtonText) saveButtonText.textContent = "Menyimpan...";
        saveButton.classList.add("saving");
        window.parent.postMessage({
          type: "SCRAPBOOK_SAVE_REQUEST",
          payload: getSerializableState()
        }, "*");
      } else {
        // Fallback penyimpanan peramban lokal jika dibuka di luar iframe
        try {
          localStorage.setItem("scrapbook_standalone_saved", JSON.stringify(getSerializableState()));
          if (saveButtonText) saveButtonText.textContent = "Tersimpan Lokal!";
          setTimeout(() => {
            if (saveButtonText) saveButtonText.textContent = "Simpan Buku";
          }, 2000);
        } catch (e) {
          console.error("Gagal menyimpan ke localStorage:", e);
        }
      }
    });
  }

  // ==========================================================================
  // KONTROLLER BUKU DIGITAL 3D DUPLEX (FLIPBOOK BUKA-TUTUP & SPREAD 2 HALAMAN)
  // ==========================================================================

  let bookSpreadIndex = 0; // 0: Sampul Depan Tertutup, 1..5: Lembar 1..5 Terbuka, 6: Sampul Belakang
  let isBookAnimating = false;

  // Efek Suara Lembaran Kertas Balik (Web Audio API Sintetis Berlapis)
  function playPaperSound() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === "suspended") ctx.resume();

      const sampleRate = ctx.sampleRate;

      // Lapisan 1: Gesekan Lembaran Kertas (Airy Swish)
      const duration = 0.28;
      const bufferSize = Math.floor(sampleRate * duration);
      const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        const envelope = Math.sin((i / bufferSize) * Math.PI);
        data[i] = (Math.random() * 2 - 1) * envelope;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1600, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + duration);
      filter.Q.setValueAtTime(1.8, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      // Lapisan 2: Sentuhan Awal Lepas Kertas (Subtle Crisp Snap)
      const clickBuf = ctx.createBuffer(1, Math.floor(sampleRate * 0.03), sampleRate);
      const clickData = clickBuf.getChannelData(0);
      for (let i = 0; i < clickData.length; i++) {
        clickData[i] = (Math.random() * 2 - 1) * Math.exp(-i / 80);
      }
      const clickSource = ctx.createBufferSource();
      clickSource.buffer = clickBuf;

      const clickFilter = ctx.createBiquadFilter();
      clickFilter.type = "highpass";
      clickFilter.frequency.setValueAtTime(2400, ctx.currentTime);

      const clickGain = ctx.createGain();
      clickGain.gain.setValueAtTime(0.04, ctx.currentTime);
      clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

      clickSource.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(ctx.destination);
      clickSource.start(ctx.currentTime + 0.01);
    } catch (e) {
      // Audio diabaikan jika dibatasi browser
    }
  }

  // Membuat Node Halaman Endpaper (Sisi Balik Sampul Depan / Lembar Pembuka)
  function createEndpaperNode() {
    const wrap = document.createElement("div");
    wrap.className = "bookEndpaper";
    const copy = state.presentationCopy || {};
    const endpaperTitle = copy.endpaperTitle || "A Little Keepsake for My Bride";
    const endpaperMessage = copy.endpaperMessage || "&quot;Bismillahir-rahmanir-rahim.<br>Sebuah lembaran sederhana pencatat langkah kita. Dari saling mendoakan dalam diam, pertemuan dua keluarga, hingga insya Allah bersanding di pelaminan bulan depan.&quot;";
    const endpaperFooter = copy.endpaperFooter || "forever yours, calon suamimu.";
    const endpaperExLibris = copy.endpaperExLibris || "MEMORABILIA CINTA";
    const endpaperDedicationLabel = copy.endpaperDedicationLabel || "Dipersembahkan setulus jiwa untuk:";
    wrap.innerHTML = `
      <div class="endpaperFrame">
        <div class="endpaperHeader">
          <span class="endpaperMonogram">💍 ♡ 📖</span>
          <span class="endpaperExLibris">${endpaperExLibris}</span>
          <h3 class="endpaperTitle">${endpaperTitle}</h3>
        </div>
        <div class="endpaperDedication">
          <span class="endpaperDedicationLabel">${endpaperDedicationLabel}</span>
          <span class="endpaperTargetName">${state.name || "Calon Istriku"}</span>
          <p class="endpaperMessageLead">${endpaperMessage}</p>
        </div>
        <div class="endpaperFooter">
          <span>${endpaperFooter}</span>
        </div>
      </div>
    `;
    return wrap;
  }

  // Membuat Node Sampul Belakang (Back Cover Keepsake)
  function createBackCoverNode() {
    const wrap = document.createElement("div");
    wrap.className = "bookBackCover";
    const copy = state.presentationCopy || {};
    const backCoverTitle = copy.backCoverTitle || "The Beginning of Our Forever";
    const backCoverQuote = copy.backCoverQuote || "&quot;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...&quot;";
    const backCoverSignature = copy.backCoverSignature || "SAKINAH · MAWADDAH · WARAHMAH · 2026";
    const bookUrl = getEffectiveDigitalBookUrl();
    const qrSvg = generateQrSvg(bookUrl, { darkColor: "#1d3326", lightColor: "#ffffff" });

    wrap.innerHTML = `
      <div class="backCoverPattern"></div>
      <div class="backCoverCenter">
        <div class="backCoverWaxSeal">💍</div>
        <h3 class="backCoverTitle">${backCoverTitle}</h3>
        <p class="backCoverQuote">${backCoverQuote}</p>
        <div class="backCoverQrStamp" title="Scan untuk membuka versi Buku Digital Interaktif Duplex">
          <div class="backCoverQrFrame">${qrSvg}</div>
          <div class="backCoverQrTextWrap">
            <span class="backCoverQrTitle">✦ EDISI DIGITAL INTERAKTIF ✦</span>
            <span class="backCoverQrHint">Scan kamera HP untuk membuka Buku Digital 3D</span>
            <span class="backCoverQrUrl">${bookUrl}</span>
          </div>
        </div>
      </div>
      <div class="backCoverSignature">
        <span>${backCoverSignature}</span>
      </div>
    `;
    return wrap;
  }

  // Data Babak Lembar
  const bookSpreadsMeta = [
    { title: "Sampul Depan (Cover Keepsake)", badge: "BUKU TERTUTUP", sub: "Klik sampul atau tombol 'Buka Buku' untuk membuka lembaran album." },
    { title: "Lembar 1 : Hari Istimewa Kelahiran", badge: "LEMBAR 1 DUPLEX", sub: "Sisi Kiri: Kata Pengantar & Dedikasi | Sisi Kanan: Milad & Kalender Ulang Tahun" },
    { title: "Lembar 2 : Perjalanan Menuju Pelaminan", badge: "LEMBAR 2 DUPLEX", sub: "Sisi Kiri: Catatan Hati Calon Suami | Sisi Kanan: Tiket & Kilas Balik Kencan" },
    { title: "Lembar 3 : Surat Cinta Calon Istri", badge: "LEMBAR 3 DUPLEX", sub: "Sisi Kiri: Strip Photobox Kenangan (Double Tape) | Sisi Kanan: Surat Tulus Menjelang Akad" },
    { title: "Lembar 4 : Kado Spesial Maroon", badge: "LEMBAR 4 DUPLEX", sub: "Sisi Kiri: Ikhtiar Seumur Hidup | Sisi Kanan: Sepatu Maroon & Cardigan Rajut" },
    { title: "Lembar 5 : Menatap Hari Akad & Doa", badge: "LEMBAR 5 DUPLEX", sub: "Sisi Kiri: Catatan Kado & Bunga | Sisi Kanan: Komitmen Ikhtiar Sakinah" },
    { title: "Sampul Belakang : Penutup Album", badge: "PENUTUP DUPLEX", sub: "Sisi Kiri: Doa Rumah Tangga Sakinah | Sisi Kanan: Hardcover Belakang" }
  ];

  // Render Spread Aktif Buku Digital
  function renderDigitalBookSpread(spreadIdx, animDirection = null) {
    if (spreadIdx < 0) spreadIdx = 0;
    if (spreadIdx > 6) spreadIdx = 6;

    const bookVolume = document.getElementById("book-volume");
    const leftContent = document.getElementById("book-left-content");
    const rightContent = document.getElementById("book-right-content");
    const badge = document.getElementById("book-spread-badge");
    const title = document.getElementById("book-spread-title");
    const sub = document.getElementById("book-spread-subtitle");
    const counter = document.getElementById("book-current-spread-num");
    const prevBtn = document.getElementById("btn-book-prev-spread");
    const nextBtn = document.getElementById("btn-book-next-spread");
    const toggleBtnText = document.getElementById("btn-book-toggle-text");
    const toggleBtnIcon = document.getElementById("btn-book-toggle-icon");
    const flipperLeaf = document.getElementById("flipper-leaf");
    const flipperFront = document.getElementById("flipper-front");
    const flipperBack = document.getElementById("flipper-back");

    if (!bookVolume || !leftContent || !rightContent) return;

    const customMeta = state.presentationCopy?.bookSpreadsMeta;
    const meta = customMeta?.[spreadIdx] || bookSpreadsMeta[spreadIdx] || bookSpreadsMeta[0];
    if (badge) badge.textContent = meta.badge;
    if (title) title.textContent = meta.title;
    if (sub) sub.textContent = meta.sub;
    if (counter) counter.textContent = spreadIdx === 0 ? "Sampul" : spreadIdx === 6 ? "Penutup" : String(spreadIdx);

    if (prevBtn) prevBtn.disabled = spreadIdx <= 0;
    if (nextBtn) nextBtn.disabled = spreadIdx >= 6;
    const purePrev = document.getElementById("pure-book-prev");
    const pureNext = document.getElementById("pure-book-next");
    if (purePrev) purePrev.disabled = spreadIdx <= 0;
    if (pureNext) pureNext.disabled = spreadIdx >= 6;

    if (toggleBtnText && toggleBtnIcon) {
      if (spreadIdx === 0) {
        toggleBtnText.textContent = "Buka Buku";
        toggleBtnIcon.textContent = "📖";
      } else {
        toggleBtnText.textContent = "Tutup Buku";
        toggleBtnIcon.textContent = "📕";
      }
    }

    // Bangun Konten Sisi Kiri
    const buildLeftPage = (idx) => {
      if (idx === 0) return document.createElement("div");
      if (idx === 1) return createEndpaperNode();
      if (idx >= 2 && idx <= 6) return createScrapbookBackNode(idx - 1);
      return document.createElement("div");
    };

    // Bangun Konten Sisi Kanan
    const buildRightPage = (idx) => {
      if (idx >= 0 && idx <= 5) return createScrapbookPageNode(idx);
      if (idx === 6) return createBackCoverNode();
      return document.createElement("div");
    };

    // Jika ada animasi pembalikan lembar
    if (animDirection && flipperLeaf && flipperFront && flipperBack) {
      isBookAnimating = true;
      playPaperSound();

      if (animDirection === "forward") {
        // Balik dari kanan ke kiri
        const prevIdx = spreadIdx - 1;
        flipperFront.replaceChildren(buildRightPage(prevIdx));
        flipperBack.replaceChildren(buildLeftPage(spreadIdx));

        // Perbarui halaman kanan di bawahnya terlebih dahulu
        rightContent.replaceChildren(buildRightPage(spreadIdx));

        if (spreadIdx > 0 && spreadIdx < 6) {
          bookVolume.dataset.state = "open";
        }

        flipperLeaf.className = "flipperLeaf turning-forward";

        let completed = false;
        const onComplete = () => {
          if (completed) return;
          completed = true;
          flipperLeaf.removeEventListener("animationend", onComplete);
          leftContent.replaceChildren(buildLeftPage(spreadIdx));
          flipperLeaf.className = "flipperLeaf";
          flipperFront.replaceChildren();
          flipperBack.replaceChildren();
          if (spreadIdx === 0) bookVolume.dataset.state = "closed-front";
          else if (spreadIdx === 6) bookVolume.dataset.state = "closed-back";
          else bookVolume.dataset.state = "open";
          isBookAnimating = false;
        };

        flipperLeaf.addEventListener("animationend", onComplete, { once: true });
        setTimeout(onComplete, 780);
      } else if (animDirection === "backward") {
        // Balik dari kiri ke kanan
        const nextIdx = spreadIdx + 1;
        flipperFront.replaceChildren(buildLeftPage(nextIdx));
        flipperBack.replaceChildren(buildRightPage(spreadIdx));

        // Perbarui halaman kiri di bawahnya terlebih dahulu
        leftContent.replaceChildren(buildLeftPage(spreadIdx));

        if (spreadIdx > 0 && spreadIdx < 6) {
          bookVolume.dataset.state = "open";
        }

        flipperLeaf.className = "flipperLeaf turning-backward";

        let completed = false;
        const onComplete = () => {
          if (completed) return;
          completed = true;
          flipperLeaf.removeEventListener("animationend", onComplete);
          rightContent.replaceChildren(buildRightPage(spreadIdx));
          flipperLeaf.className = "flipperLeaf";
          flipperFront.replaceChildren();
          flipperBack.replaceChildren();
          if (spreadIdx === 0) bookVolume.dataset.state = "closed-front";
          else if (spreadIdx === 6) bookVolume.dataset.state = "closed-back";
          else bookVolume.dataset.state = "open";
          isBookAnimating = false;
        };

        flipperLeaf.addEventListener("animationend", onComplete, { once: true });
        setTimeout(onComplete, 780);
      }
    } else {
      leftContent.replaceChildren(buildLeftPage(spreadIdx));
      rightContent.replaceChildren(buildRightPage(spreadIdx));
    }

    // Set status volume (closed-front / open / closed-back)
    if (spreadIdx === 0) {
      bookVolume.dataset.state = "closed-front";
    } else if (spreadIdx === 6) {
      bookVolume.dataset.state = "closed-back";
    } else {
      bookVolume.dataset.state = "open";
    }

    bookSpreadIndex = spreadIdx;
    renderChapterPills(spreadIdx);
  }

  // Render tombol babak navigasi cepat
  function renderChapterPills(activeIdx) {
    const container = document.getElementById("chapter-nav-buttons");
    if (!container) return;
    container.replaceChildren();

    const labels = [
      "Sampul Depan",
      "1. Hari Istimewa",
      "2. Perjalanan Cinta",
      "3. Surat Akad",
      "4. Kado Maroon",
      "5. Akad & Doa",
      "Sampul Belakang"
    ];

    labels.forEach((label, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `chapterPillBtn ${idx === activeIdx ? "active" : ""}`;
      btn.textContent = label;
      btn.addEventListener("click", () => {
        if (isBookAnimating || idx === bookSpreadIndex) return;
        const dir = idx > bookSpreadIndex ? "forward" : "backward";
        renderDigitalBookSpread(idx, dir);
      });
      container.append(btn);

      if (idx === activeIdx) {
        setTimeout(() => {
          btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }, 60);
      }
    });
  }

  // Handler Pemilih Gaya Jilid Buku Digital
  document.querySelectorAll(".bindingStylePill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const binding = pill.dataset.binding;
      if (!binding) return;
      document.querySelectorAll(".bindingStylePill").forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const gutter = document.getElementById("book-spine-gutter");
      if (gutter) {
        gutter.className = `bookSpineGutter binding-style-${binding}`;
      }
    });
  });

  // Handler Event Buku Digital
  const btnBookToggleOpen = document.getElementById("btn-book-toggle-open");
  const btnBookPrev = document.getElementById("btn-book-prev-spread");
  const btnBookNext = document.getElementById("btn-book-next-spread");
  const btnBookFullscreen = document.getElementById("btn-book-fullscreen");
  const btnBookCloseView = document.getElementById("btn-book-close-view");
  const rightPageEl = document.getElementById("book-right-page");
  const leftPageEl = document.getElementById("book-left-page");

  if (btnBookToggleOpen) {
    btnBookToggleOpen.addEventListener("click", () => {
      if (isBookAnimating) return;
      if (bookSpreadIndex === 0) {
        renderDigitalBookSpread(1, "forward");
      } else {
        renderDigitalBookSpread(0, "backward");
      }
    });
  }

  if (btnBookNext) {
    btnBookNext.addEventListener("click", () => {
      if (isBookAnimating || bookSpreadIndex >= 6) return;
      renderDigitalBookSpread(bookSpreadIndex + 1, "forward");
    });
  }

  if (btnBookPrev) {
    btnBookPrev.addEventListener("click", () => {
      if (isBookAnimating || bookSpreadIndex <= 0) return;
      renderDigitalBookSpread(bookSpreadIndex - 1, "backward");
    });
  }

  const pureBookPrev = document.getElementById("pure-book-prev");
  const pureBookNext = document.getElementById("pure-book-next");

  if (pureBookNext) {
    pureBookNext.addEventListener("click", () => {
      if (isBookAnimating || bookSpreadIndex >= 6) return;
      renderDigitalBookSpread(bookSpreadIndex + 1, "forward");
    });
  }

  if (pureBookPrev) {
    pureBookPrev.addEventListener("click", () => {
      if (isBookAnimating || bookSpreadIndex <= 0) return;
      renderDigitalBookSpread(bookSpreadIndex - 1, "backward");
    });
  }

  // Klik langsung pada halaman untuk membalik
  if (rightPageEl) {
    rightPageEl.addEventListener("click", (e) => {
      if (e.target.closest("button") && !e.target.classList.contains("pageTurnCorner")) return;
      if (isBookAnimating || bookSpreadIndex >= 6) return;
      renderDigitalBookSpread(bookSpreadIndex + 1, "forward");
    });
  }

  if (leftPageEl) {
    leftPageEl.addEventListener("click", (e) => {
      if (e.target.closest("button") && !e.target.classList.contains("pageTurnCorner")) return;
      if (isBookAnimating || bookSpreadIndex <= 0) return;
      renderDigitalBookSpread(bookSpreadIndex - 1, "backward");
    });
  }

  // Navigasi Keyboard (Arrow Left & Arrow Right)
  window.addEventListener("keydown", (e) => {
    if (state.currentView !== "book" || isBookAnimating) return;
    if (e.key === "ArrowRight") {
      if (bookSpreadIndex < 6) renderDigitalBookSpread(bookSpreadIndex + 1, "forward");
    } else if (e.key === "ArrowLeft") {
      if (bookSpreadIndex > 0) renderDigitalBookSpread(bookSpreadIndex - 1, "backward");
    }
  });

  // Navigasi Sentuh / Geser Layar (Touch Swipe) untuk Smartphone & Tablet
  const bookViewportEl = document.getElementById("book-viewport");
  if (bookViewportEl) {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    bookViewportEl.addEventListener("touchstart", (e) => {
      if (state.currentView !== "book" || isBookAnimating) return;
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touch = e.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchStartTime = Date.now();
    }, { passive: true });

    bookViewportEl.addEventListener("touchend", (e) => {
      if (state.currentView !== "book" || isBookAnimating) return;
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touch = e.changedTouches[0];
      const diffX = touch.clientX - touchStartX;
      const diffY = touch.clientY - touchStartY;
      const elapsed = Date.now() - touchStartTime;

      // Ambang batas swipe: horisontal > 35px, durasi < 650ms, dominan horisontal
      if (elapsed < 650 && Math.abs(diffX) > 35 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
        if (diffX < 0) {
          // Geser ke kiri (swipe left) -> maju lembar berikutnya
          if (bookSpreadIndex < 6) {
            renderDigitalBookSpread(bookSpreadIndex + 1, "forward");
          }
        } else {
          // Geser ke kanan (swipe right) -> kembali lembar sebelumnya
          if (bookSpreadIndex > 0) {
            renderDigitalBookSpread(bookSpreadIndex - 1, "backward");
          }
        }
      }
    }, { passive: true });
  }

  // Mode Layar Penuh (Fullscreen)
  if (btnBookFullscreen) {
    btnBookFullscreen.addEventListener("click", () => {
      const sec = document.getElementById("digital-book-section");
      if (!sec) return;
      if (!document.fullscreenElement) {
        sec.requestFullscreen?.().catch(() => {});
        const fsText = document.getElementById("fullscreen-text");
        if (fsText) fsText.textContent = "Keluar Layar Penuh";
      } else {
        document.exitFullscreen?.().catch(() => {});
        const fsText = document.getElementById("fullscreen-text");
        if (fsText) fsText.textContent = "Layar Penuh";
      }
    });
  }

  if (btnBookCloseView) {
    btnBookCloseView.addEventListener("click", () => {
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
      switchView("full");
    });
  }

  // Komunikasi pesan Dua Arah dengan Parent Next.js
  window.addEventListener("message", (event) => {
    if (!event.data || typeof event.data !== "object") return;
    const { type, payload } = event.data;

    // 1. Muat data album dari database PostgreSQL
    if (type === "LOAD_SCRAPBOOK_DATA" && payload) {
      if (payload.name) state.name = payload.name;
      if (payload.birthday !== undefined) state.birthday = payload.birthday || "";
      if (payload.albumId !== undefined) state.albumId = payload.albumId;
      if (payload.albumTitle !== undefined) state.albumTitle = payload.albumTitle;
      if (payload.digitalBookUrl !== undefined) state.digitalBookUrl = payload.digitalBookUrl || "";
      if (payload.presentationCopy !== undefined) state.presentationCopy = payload.presentationCopy;
      if (payload.pages) {
        for (const [key, val] of Object.entries(payload.pages)) {
          state.pages[key] = { ...(state.pages[key] || {}), ...val };
          if (val && val.photoPositions && Array.isArray(val.photoPositions)) {
            state.pages[key].photoPositions = val.photoPositions.map((pos) => ({
              x: typeof pos?.x === "number" ? Math.max(0, Math.min(100, Math.round(pos.x))) : 50,
              y: typeof pos?.y === "number" ? Math.max(0, Math.min(100, Math.round(pos.y))) : 50
            }));
          }
        }
      }
      if (payload.photoUrls) {
        for (const [k, v] of Object.entries(payload.photoUrls)) {
          setPhotoUrl(k, v);
        }
      }
      document.title = state.albumTitle || `Happy Birthday, ${state.name}! · Wedding & Birthday Scrapbook`;
      renderPage(state.currentPage);
      updateAllQrCodes();
    }

    // 2. Perbarui slot foto setelah berhasil di-upload atau di-unlink
    if ((type === "SCRAPBOOK_PHOTO_UPLOADED" || type === "SCRAPBOOK_PHOTO_REMOVED") && payload) {
      const { slot, url } = payload;
      if (!url || type === "SCRAPBOOK_PHOTO_REMOVED") {
        removePhotoUrl(slot);
        if (typeof slot === "string" && slot.startsWith("back-photobox-")) {
          const btn = document.querySelector(`.backPhotoboxUploadBtn[data-slot="${slot}"]`);
          if (btn) btn.querySelector(".backPhotoboxImg")?.remove();
        }
      } else {
        setPhotoUrl(slot, url);
      }
      renderPage(state.currentPage);
    }

    // 3. Status notifikasi simpan dari database
    if (type === "SCRAPBOOK_SAVE_STATUS" && payload) {
      if (saveButton && saveButtonText) {
        saveButton.classList.remove("saving");
        if (payload.status === "saved") {
          saveButton.classList.add("saved");
          saveButtonText.textContent = "Tersimpan ✓";
          setTimeout(() => {
            saveButton.classList.remove("saved");
            saveButtonText.textContent = "Simpan Buku";
          }, 2500);
        } else if (payload.status === "error") {
          saveButtonText.textContent = "Gagal Simpan";
          setTimeout(() => {
            saveButtonText.textContent = "Simpan Buku";
          }, 2500);
        }
      }
    }

    // 4. Buka mode tampilan khusus (seperti mode buku digital duplex 3D)
    if (type === "SWITCH_VIEW" && payload && payload.view) {
      switchView(payload.view);
    }

    // 5. Pindah Halaman Aktif dari Studio Parent
    if (type === "SET_PAGE" && payload && payload.page !== undefined) {
      const targetPage = Number(payload.page);
      if (targetPage >= 0 && targetPage <= 5) {
        renderPage(targetPage);
        switchView("full");
      }
    }

    // 6. Ganti Layout Halaman Aktif dari Studio Parent
    if (type === "SET_LAYOUT" && payload && payload.layout) {
      if (state.pages[state.currentPage]) {
        state.pages[state.currentPage].layout = payload.layout;
        renderPage(state.currentPage);
        notifyParentChange();
      }
    }

    // 7. Update Field Teks Langsung dari Studio Parent
    if (type === "UPDATE_FIELD" && payload) {
      const { field, value, page } = payload;
      if (field === "name") {
        state.name = value;
      } else if (field === "birthday") {
        state.birthday = value;
      } else if (field === "digitalBookUrl") {
        state.digitalBookUrl = value;
        updateAllQrCodes();
      } else if (page !== undefined && state.pages[page]) {
        if (field === "titleCutout") state.pages[page].titleCutout = value;
        else if (field === "subtitle") state.pages[page].subtitle = value;
        else if (field === "themeTitle") state.pages[page].themeTitle = value;
        else if (field === "signoff") state.pages[page].signoff = value;
        else if (field === "ticketHeader") state.pages[page].ticketHeader = value;
        else if (field === "ticketRoute") state.pages[page].ticketRoute = value;
        else if (field === "letterText") state.pages[page].letterText = value;
        else if (field === "giftCardText") state.pages[page].giftCardText = value;
        else if (field.startsWith("caption_")) {
          const cIdx = Number(field.replace("caption_", ""));
          if (!state.pages[page].captions) state.pages[page].captions = [];
          state.pages[page].captions[cIdx] = value;
        } else if (field.startsWith("note_")) {
          const nIdx = Number(field.replace("note_", ""));
          if (state.pages[page].notes && state.pages[page].notes[nIdx]) {
            state.pages[page].notes[nIdx].text = value;
          }
        } else if (field.startsWith("checklist_")) {
          const chkIdx = Number(field.replace("checklist_", ""));
          if (!state.pages[page].checklist) state.pages[page].checklist = [];
          state.pages[page].checklist[chkIdx] = value;
        } else if (field.startsWith("ticketMeta_")) {
          const mIdx = Number(field.replace("ticketMeta_", ""));
          if (!state.pages[page].ticketMeta) state.pages[page].ticketMeta = [];
          state.pages[page].ticketMeta[mIdx] = value;
        }
      }
      renderPage(state.currentPage);
      notifyParentChange();
    }

    // 8. Trigger Print Dialog dari Studio Parent (Mendukung mode cetak langsung atau dialog)
    if (type === "TRIGGER_PRINT") {
      const mode = (payload && payload.mode) || (event.data && event.data.payload && event.data.payload.mode) || null;
      const validModes = [
        "single-base-duplex", "single-photos", "single-stickers", "page-current",
        "all-base-duplex", "all-photos", "all-photos-a4", "all-stickers", "all-cards",
        "book-full", "book-duplex", "kit-all"
      ];
      if (mode && validModes.includes(mode)) {
        if (printDialog) printDialog.close();
        validModes.forEach((m) => document.body.classList.remove(`print-mode-${m}`));

        applyDynamicPrintStyles(mode);
        buildBookPrintDOM(mode);
        document.body.classList.add(`print-mode-${mode}`);
        fitAllDynamicCards(printBookContainer);

        const cleanup = () => {
          validModes.forEach((m) => document.body.classList.remove(`print-mode-${m}`));
          if (printBookContainer) printBookContainer.replaceChildren();
          window.removeEventListener("afterprint", cleanup);
        };
        window.addEventListener("afterprint", cleanup);

        // Tunggu seluruh foto dan gambar selesai di-load dan di-decode 100% sebelum membuka dialog cetak
        const allImgs = Array.from(printBookContainer.querySelectorAll("img"));
        if (allImgs.length > 0) {
          Promise.all(
            allImgs.map((img) => {
              if (img.complete && img.naturalWidth > 0) {
                return img.decode ? img.decode().catch(() => {}) : Promise.resolve();
              }
              return new Promise((resolve) => {
                img.onload = () => {
                  if (img.decode) {
                    img.decode().then(resolve).catch(resolve);
                  } else {
                    resolve();
                  }
                };
                img.onerror = resolve;
              });
            })
          ).then(() => {
            setTimeout(() => {
              window.print();
            }, 180);
          });
        } else {
          setTimeout(() => {
            window.print();
          }, 200);
        }
      } else {
        if (printButton) printButton.click();
      }
    }
  });

  // Inisialisasi awal saat halaman dimuat
  document.addEventListener("DOMContentLoaded", () => {
    // Mode Embedded Studio untuk Next.js: sembunyikan toolbar dan panel tumpuk di dalam iframe
    if (window.location.search.includes("embedded=true") || (window.parent && window.parent !== window)) {
      document.body.classList.add("embedded-studio");
    }
    try {
      const saved = localStorage.getItem("scrapbook_standalone_saved");
      if (saved) {
        const payload = JSON.parse(saved);
        if (payload.name) state.name = payload.name;
        if (payload.birthday !== undefined) state.birthday = payload.birthday || "";
        if (payload.albumId !== undefined) state.albumId = payload.albumId;
        if (payload.albumTitle !== undefined) state.albumTitle = payload.albumTitle;
        if (payload.digitalBookUrl !== undefined) state.digitalBookUrl = payload.digitalBookUrl || "";
        if (payload.presentationCopy !== undefined) state.presentationCopy = payload.presentationCopy;
        if (payload.pages) {
          for (const [key, val] of Object.entries(payload.pages)) {
            state.pages[key] = { ...(state.pages[key] || {}), ...val };
          }
        }
        if (payload.photoUrls) {
          for (const [k, v] of Object.entries(payload.photoUrls)) {
            setPhotoUrl(k, v);
          }
        }
      }
    } catch (e) {}

    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = urlParams.has("page") ? parseInt(urlParams.get("page"), 10) : 1;
    renderPage(isNaN(initialPage) ? 1 : initialPage);
    updateAllQrCodes();

    const initialView = urlParams.get("view") || "full";
    switchView(initialView);

    // Sinyal ke parent Next.js bahwa canvas/engine siap menerima data
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: "SCRAPBOOK_READY" }, "*");
    // Auto-fit dinamis saat ukuran layar / kontainer kanvas berubah
    window.addEventListener("resize", () => {
      const activeLetter = document.querySelector(".scrapbook .friendLetterCard");
      if (activeLetter) {
        autoFitDynamicText(activeLetter.querySelector(".letterBodyText"), activeLetter, 0.85);
      }
      const activeGift = document.querySelector(".scrapbook .giftRevealWidget .giftCardMessage");
      if (activeGift) {
        autoFitDynamicText(activeGift, activeGift.closest(".giftCardBody"), 0.9);
      }
    });

    }
  });
})();
