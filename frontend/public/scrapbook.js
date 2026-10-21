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
        notes: []
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
        ]
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
        ]
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
        ]
      },
      4: {
        id: 4,
        layout: "duo-overlap",
        themeTitle: "Kado Pernikahan",
        titleCutout: "SpEcIaL GiFt",
        subtitle: "the maroon collection & flowers for my bride",
        storyBrief: "Halaman 4 dari 5: Kado cinta spesial untuk calon istriku: sepatu merah maroon, baju set serasi, buket bunga cantik, dan kue ulang tahun.",
        captions: [
          "sepatu & baju set maroon untukmu",
          "buket bunga untuk calon istriku",
          "tiup lilin ultah terakhir sebelum nikah"
        ],
        giftCardText: "Sepatu & baju set maroon, buket bunga mekar, dan birthday cake spesial untuk calon istri tercantikku. Bulan depan kita mulai babak baru!",
        signoff: "crafted with all my love for my future wife.",
        notes: [
          { cls: "giftNote1", text: "Maroon looks\nstunning on you" },
          { cls: "giftNote2", text: "Fresh blooms\nfor my bride" },
          { cls: "giftNote3", text: "Sweet cake,\nsweeter future" },
          { cls: "giftNote4", text: "A gift from my\nheart to yours" },
          { cls: "giftNote5", text: "Siap melangkah\nke pelaminan" },
          { cls: "giftNote6", text: "The most beautiful\nbride-to-be" }
        ]
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
        ]
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

  // Render Widget Segel Pita Sampul & Akses QR Buku Digital untuk Sampul Depan (Halaman 0)
  function renderCoverSealWidget(container) {
    container.replaceChildren();
    const widget = document.createElement("div");
    widget.className = "coverSealWidget";

    const bookUrl = getEffectiveDigitalBookUrl();
    const qrSvg = generateQrSvg(bookUrl, { darkColor: "#1d2c22", lightColor: "#ffffff" });

    widget.innerHTML = `
      <div class="coverSealTape" aria-hidden="true"></div>
      <div class="coverSealBadge" role="region" aria-label="Segel Sampul dan Akses QR Mode Buku Digital 3D">
        <div class="coverSealTopHeader">
          <span class="coverSealCrest">✦ 2026 · EDISI SPESIAL ✦</span>
          <span class="coverSealTitle">A LITTLE BOOK OF US</span>
          <span class="coverSealSub">Koleksi Kenangan Manis Menuju Hari Bahagia Kita</span>
        </div>
        <div class="coverQrPassportRow">
          <div class="coverQrFrame" title="Pindai kamera atau klik untuk membuka Mode Buku Digital 3D" role="button" tabindex="0">
            <div class="coverQrBox" id="cover-qr-code-svg">${qrSvg}</div>
            <span class="coverQrScanLabel">SCAN SAYA</span>
          </div>
          <div class="coverQrTextMeta">
            <div class="coverQrHeading">
              <span class="coverQrBadgeTag">📖 BUKU DIGITAL</span>
            </div>
            <p class="coverQrDesc">
              Scan untuk membuka versi buku digital album ini.
            </p>
          </div>
        </div>
      </div>
    `;

    // Interaktivitas langsung di browser jika diklik
    const qrBtn = widget.querySelector(".coverQrFrame");
    if (qrBtn) {
      qrBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        switchView("book");
      });
      qrBtn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchView("book");
        }
      });
    }

    container.append(widget);
  }

  // Render Widget Kalender untuk Halaman 1
  function renderCalendarWidget(container) {
    container.replaceChildren();
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
  function renderTicketWidget(container) {
    container.replaceChildren();
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

  // Render Widget Surat Cinta untuk Halaman 3
  function renderLetterWidget(container) {
    container.replaceChildren();
    const p3 = state.pages[3];
    const letterStamp = state.presentationCopy?.letterStamp || "POSTAGE PAID ♡ WEDDING 2026";
    const letter = document.createElement("div");
    letter.className = "friendLetterCard";
    letter.innerHTML = `
      <div class="letterClip" aria-hidden="true"></div>
      <div class="letterHeader">
        <span class="letterStamp" aria-hidden="true">${letterStamp}</span>
        <span class="letterLabel">${state.presentationCopy?.letterLabel || "surat cinta untuk calon istriku"}</span>
      </div>
      <p class="letterBodyText">${p3.letterText}</p>
      <div class="letterSign">${state.presentationCopy?.letterSignoff || "dengan segenap jiwaku, calon suamimu."}</div>
    `;
    container.append(letter);
  }

  // Render Widget Kado Spesial (Sepatu & Baju Maroon, Bunga, Cake) untuk Halaman 4
  function renderGiftWidget(container, isBase = false) {
    container.replaceChildren();
    const p4 = state.pages[4];
    const giftItemLabels = {
      shoes: { title: "Sepatu Maroon", description: "elegan ke pelaminan" },
      outfit: { title: "Baju Set Maroon", description: "setelan anggun serasi" },
      bouquet: { title: "Buket Bunga", description: "bunga mawar mekar" },
      cake: { title: "Birthday Cake", description: "kue ultah bertingkat" },
      ...(state.presentationCopy?.giftItemLabels || {}),
    };
    const giftAssets = {
      shoes: "images/gift_maroon_shoes.svg",
      outfit: "images/gift_maroon_dress.svg",
      bouquet: "images/gift_flower_bouquet.svg",
      cake: "images/gift_birthday_cake.svg",
      ...(state.presentationCopy?.giftAssets || {}),
    };
    const widget = document.createElement("div");
    widget.className = "giftRevealWidget" + (isBase ? " giftBaseGuide" : "");

    if (isBase) {
      widget.innerHTML = `
        <div class="giftTagRibbon">
          <span class="giftTagLabel">PANDUAN TEMPEL STIKER KADO ♡</span>
          <span class="giftTagSerial">${state.presentationCopy?.giftTagSerial || "FOR MY FUTURE WIFE"}</span>
        </div>
        <div class="giftItemsGrid giftBaseGuideGrid">
          <div class="giftItemBadge giftItemPlaceholder">
            <div class="pasteGuideBox">
              <span class="guideIcon">✂</span>
              <span class="giftItemTitle">Tempel Stiker: ${giftItemLabels.shoes.title}</span>
              <span class="giftItemDesc">dari lembar kertas stiker</span>
            </div>
          </div>
          <div class="giftItemBadge giftItemPlaceholder">
            <div class="pasteGuideBox">
              <span class="guideIcon">✂</span>
              <span class="giftItemTitle">Tempel Stiker: ${giftItemLabels.outfit.title}</span>
              <span class="giftItemDesc">dari lembar kertas stiker</span>
            </div>
          </div>
          <div class="giftItemBadge giftItemPlaceholder">
            <div class="pasteGuideBox">
              <span class="guideIcon">✂</span>
              <span class="giftItemTitle">Tempel Stiker: ${giftItemLabels.bouquet.title}</span>
              <span class="giftItemDesc">dari lembar kertas stiker</span>
            </div>
          </div>
          <div class="giftItemBadge giftItemPlaceholder">
            <div class="pasteGuideBox">
              <span class="guideIcon">✂</span>
              <span class="giftItemTitle">Tempel Stiker: ${giftItemLabels.cake.title}</span>
              <span class="giftItemDesc">dari lembar kertas stiker</span>
            </div>
          </div>
        </div>
        <p class="giftMessageNote">${p4.giftCardText}</p>
      `;
    } else {
      widget.innerHTML = `
        <div class="giftTape" aria-hidden="true"></div>
        <div class="giftTagRibbon">
          <span class="giftTagLabel">${state.presentationCopy?.giftTagLabel || "GIFT UNBOXING ♡"}</span>
          <span class="giftTagSerial">${state.presentationCopy?.giftTagSerial || "FOR MY FUTURE WIFE"}</span>
        </div>
        <div class="giftItemsGrid">
          <div class="giftItemBadge" data-gift-src="${giftAssets.shoes}" title="Klik untuk pasang ${giftItemLabels.shoes.title} ke polaroid">
            <img src="${giftAssets.shoes}" alt="${giftItemLabels.shoes.title}" class="giftItemThumb">
            <div class="giftItemInfo">
              <span class="giftItemTitle">${giftItemLabels.shoes.title}</span>
              <span class="giftItemDesc">${giftItemLabels.shoes.description}</span>
            </div>
          </div>
          <div class="giftItemBadge" data-gift-src="${giftAssets.outfit}" title="Klik untuk pasang ${giftItemLabels.outfit.title} ke polaroid">
            <img src="${giftAssets.outfit}" alt="${giftItemLabels.outfit.title}" class="giftItemThumb">
            <div class="giftItemInfo">
              <span class="giftItemTitle">${giftItemLabels.outfit.title}</span>
              <span class="giftItemDesc">${giftItemLabels.outfit.description}</span>
            </div>
          </div>
          <div class="giftItemBadge" data-gift-src="${giftAssets.bouquet}" title="Klik untuk pasang ${giftItemLabels.bouquet.title} ke polaroid">
            <img src="${giftAssets.bouquet}" alt="${giftItemLabels.bouquet.title}" class="giftItemThumb">
            <div class="giftItemInfo">
              <span class="giftItemTitle">${giftItemLabels.bouquet.title}</span>
              <span class="giftItemDesc">${giftItemLabels.bouquet.description}</span>
            </div>
          </div>
          <div class="giftItemBadge" data-gift-src="${giftAssets.cake}" title="Klik untuk pasang ${giftItemLabels.cake.title} ke polaroid">
            <img src="${giftAssets.cake}" alt="${giftItemLabels.cake.title}" class="giftItemThumb">
            <div class="giftItemInfo">
              <span class="giftItemTitle">${giftItemLabels.cake.title}</span>
              <span class="giftItemDesc">${giftItemLabels.cake.description}</span>
            </div>
          </div>
        </div>
        <p class="giftMessageNote">${p4.giftCardText}</p>
      `;

      // Klik kado untuk memasukkan gambar kado ke frame polaroid Halaman 4
      widget.querySelectorAll(".giftItemBadge").forEach((badge) => {
        badge.addEventListener("click", () => {
          const src = badge.dataset.giftSrc;
          if (!src) return;
          if (state.photoUrls.get(9) !== src) {
            state.photoUrls.set(9, src);
          } else {
            state.photoUrls.set(10, src);
          }
          renderPage(4);
        });
      });
    }

    container.append(widget);
  }

  // Render Widget Mixtape & Ikhtiar Pernikahan untuk Halaman 5
  function renderMixtapeWidget(container) {
    container.replaceChildren();
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
              if (guideSub) guideSub.textContent = "Ukuran besar dari lembar kertas foto";
            }
          } else if (layout === "duo-overlap") {
            if (slot === 0) {
              guideText.textContent = "Tempel Foto 1 (Lapisan Bawah)";
              if (guideSub) guideSub.textContent = "dari lembar kertas foto";
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
            if (guideSub) guideSub.textContent = "dari lembar kertas foto";
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
            if (guideSub) guideSub.textContent = "dari lembar kertas foto";
          }
        }

        const photoBtn = frame.querySelector(".photoButton");
        photoBtn.querySelector(".photo")?.remove();
        const hint = frame.querySelector(".photoHint");

        if (photoSrc) {
          const img = new Image();
          img.className = "photo";
          img.alt = `Kenangan Halaman ${pageId} - Foto ${slot + 1}: ${caption}`;
          img.src = photoSrc;
          photoBtn.prepend(img);
          hint?.classList.add("hasPhoto");
        } else {
          hint?.classList.remove("hasPhoto");
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
        const placeholder = printablePolaroid.querySelector(".cardPhotoPlaceholder");

        if (photoSrc) {
          const cardImg = new Image();
          cardImg.className = "cardPhoto";
          cardImg.alt = `Kenangan Halaman ${pageId} - Foto ${slot + 1}: ${caption}`;
          cardImg.src = photoSrc;
          cardBtn.prepend(cardImg);
          placeholder?.classList.add("hasPhoto");
        } else {
          placeholder?.classList.remove("hasPhoto");
        }
      }
    }

    // Perbarui Widget Unik di Scrapbook
    const widgetArea = document.getElementById("unique-widget-area");
    if (widgetArea) {
      if (pageId === 0) renderCoverSealWidget(widgetArea);
      else if (pageId === 1) renderCalendarWidget(widgetArea);
      else if (pageId === 2) renderTicketWidget(widgetArea);
      else if (pageId === 3) renderLetterWidget(widgetArea);
      else if (pageId === 4) renderGiftWidget(widgetArea, state.currentView === "base");
      else if (pageId === 5) renderMixtapeWidget(widgetArea);
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
        4: [["maroonBox", "maroon set"], ["roseBox", "flower bouquet"], ["goldBox", "birthday cake"]],
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
        4: ["Pita Beludru Maroon", "Pita Bunga Mekar Manis", "Pita Lilin Birthday Cake", "Pita Jahitan Busana Cokelat"],
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
            btn.prepend(img);
          }
        } else {
          if (hint) hint.remove();
          if (guide) guide.style.display = "flex";
        }
      }
    }

    // Widget Unik
    const wArea = wrap.querySelector("#unique-widget-area");
    if (wArea) {
      wArea.removeAttribute("id");
      if (pId === 0) renderCoverSealWidget(wArea);
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
              const g = wrap.querySelector(`.backPhotoboxCard[data-card="${idx}"] .pasteGuide`);
              if (g) g.style.display = "none";
            } else if (isBase) {
              btn.style.display = "none";
              const g = wrap.querySelector(`.backPhotoboxCard[data-card="${idx}"] .pasteGuide`);
              if (g) g.style.display = "flex";
            }
          }
        });

        // Selalu hapus tombol upload dari node cetak
        wrap.querySelectorAll(".backPhotoboxUploadBtn").forEach((b) => b.remove());
        if (isBase) {
          wrap.querySelectorAll(".backPhotoboxCard .pasteGuide").forEach((g) => {
            g.style.display = "flex";
          });
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

    const baseSlot = pId === 0 ? 20 : (pId - 1) * 3;
    for (let s = 0; s < 3; s++) {
      const gIdx = pId === 0 ? (20 + s) : baseSlot + s;
      const frame = baseWrap.querySelector(`.photoFrame[data-slot="${s}"]`);
      if (frame) {
        frame.querySelector(".fileInput")?.remove();
        frame.querySelector(".photoError")?.remove();
        const guide = frame.querySelector(".pasteGuide");
        const btn = frame.querySelector(".photoButton");
        const hint = frame.querySelector(".photoHint");

        const photoSrc = getPhotoUrl(gIdx);
        if (photoSrc) {
          if (guide) guide.remove();
          if (hint) hint.remove();
          if (btn) {
            btn.querySelector(".photo")?.remove();
            const img = new Image();
            img.className = "photo";
            img.alt = `Kenangan Halaman ${pId} - Foto ${s + 1}: ${p.captions[s] || ""}`;
            img.src = photoSrc;
            btn.prepend(img);
          }
        } else {
          if (hint) hint.remove();
          btn?.querySelector(".photo")?.remove();
          if (guide) guide.style.display = "flex";
        }

        const cap = frame.querySelector(".photoCaption");
        if (cap) cap.textContent = p.captions[s] || "";
        const gText = frame.querySelector(".guideText");
        const gSub = frame.querySelector(".guideSub");
        if (gText) {
          if (pId === 0) {
            gText.textContent = "Tempel Foto Sampul Utama";
            if (gSub) gSub.textContent = "Foto potret berdua terbaik untuk sampul depan";
          } else if (layout === "single-hero") {
            if (s === 0) {
              gText.textContent = "Tempel 1 Foto Gedhe";
              if (gSub) gSub.textContent = "Ukuran ~11,3 x 11,3 cm dari lembar foto";
            } else if (s === 1) {
              gText.textContent = "Foto Mini Overlay";
              if (gSub) gSub.textContent = "Tempel di sudut foto utama";
            }
          } else if (layout === "single-clean" || layout === "single-letter") {
            if (s === 0) {
              gText.textContent = state.presentationCopy?.photoGuideTitle || "Tempel 1 Foto Gedhe Calon Istri";
              if (gSub) gSub.textContent = "Ukuran besar dari lembar kertas foto";
            }
          } else if (layout === "duo-overlap") {
            if (s === 0) {
              gText.textContent = "Tempel Foto 1 (Lapisan Bawah)";
              if (gSub) gSub.textContent = "dari lembar kertas foto";
            } else if (s === 1) {
              gText.textContent = "Tempel Foto 2 (Overlay di Atas)";
              if (gSub) gSub.textContent = "tumpang tindih di atas sudut Foto 1";
            }
          } else if (layout === "portrait-duo") {
            gText.textContent = `Tempel Foto ${s === 0 ? "Kiri" : "Kanan"} (Portrait)`;
            if (gSub) gSub.textContent = "posisi tegak berdampingan";
          } else if (layout === "scatter-trio") {
            if (s === 0) gText.textContent = "Tempel Foto Utama (Miring Kiri)";
            else if (s === 1) gText.textContent = "Tempel Foto Kanan Atas";
            else gText.textContent = "Tempel Foto Bawah";
            if (gSub) gSub.textContent = "dari lembar kertas foto";
          } else if (layout === "collage-big-small") {
            if (s === 0) {
              gText.textContent = "Tempel Foto Utama Besar";
              if (gSub) gSub.textContent = "posisi sebelah kiri";
            } else {
              gText.textContent = `Tempel Foto Mini ${s === 1 ? "Atas" : "Bawah"}`;
              if (gSub) gSub.textContent = "posisi sebelah kanan";
            }
          } else if (layout === "filmstrip") {
            gText.textContent = `Tempel Foto Strip ${s + 1}`;
            if (gSub) gSub.textContent = "urutan rol film kenangan";
          } else if (layout === "photobox-strip") {
            gText.textContent = `Tempat Strip Photobox ${s === 0 ? "1 (Kiri)" : "2 (Kanan)"}`;
            if (gSub) gSub.textContent = "Ukuran fisik 5 x 15 cm · Cukup tempel dengan double tape";
          } else {
            gText.textContent = `Tempel Foto ${s + 1} (Hal ${pId})`;
            if (gSub) gSub.textContent = "dari lembar kertas foto";
          }
        }
      }
    }

    const wArea = baseWrap.querySelector("#unique-widget-area");
    if (wArea) {
      if (pId === 0) renderCoverSealWidget(wArea);
      else if (pId === 1) renderCalendarWidget(wArea);
      else if (pId === 2) renderTicketWidget(wArea);
      else if (pId === 3) renderLetterWidget(wArea);
      else if (pId === 4) renderGiftWidget(wArea, true); // Murni panduan tempel kado (tanpa img)
      else if (pId === 5) renderMixtapeWidget(wArea);
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
    photoSheetClone.querySelector(".sheetBadge").textContent = pId === 0 ? "LEMBAR 2 : KERTAS FOTO · SAMPUL DEPAN" : `LEMBAR 2 : KERTAS FOTO · HALAMAN ${pId} DARI 5`;
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
        // Hapus teks/ikon placeholder upload agar tidak pernah tercetak di lembar kertas foto
        pCard.querySelector(".cardPhotoPlaceholder")?.remove();
        const photoSrc = getPhotoUrl(gIdx);
        if (photoSrc) {
          const img = new Image();
          img.className = "cardPhoto";
          img.src = photoSrc;
          btn.prepend(img);
        }
      }
    }
    return photoSheetClone;
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
    base: "Cetak di kertas Linen / Concorde / Karton 220-260 gsm. Berisi background, catatan, dan kotak panduan tempel.",
    back: "Cetak di kertas Linen / Karton 220-260 gsm (Sisi Balik A3+ Duplex). Ruang curahan diary tulisan tangan, segel prangko, dan doa menuju akad.",
    photos: "Cetak di kertas Foto Glossy / Matte 200-230 gsm. Berisi 3 kartu polaroid kenangan siap digunting.",
    stickers: "Cetak di kertas Stiker HVS / Vinyl Matte A4. Berisi stiker tematik, ornamen bintang, dan pita washi."
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
    const allPagesSection = document.getElementById("all-pages-section");
    const digitalBookSection = document.getElementById("digital-book-section");
    const layoutSwitcher = document.querySelector(".layoutSwitcher");

    if (viewName === "all") {
      if (scrapbookWrap) scrapbookWrap.hidden = true;
      if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
      if (sheetPhotos) sheetPhotos.hidden = true;
      if (sheetStickers) sheetStickers.hidden = true;
      if (digitalBookSection) digitalBookSection.hidden = true;
      if (allPagesSection) allPagesSection.hidden = false;
      if (layoutSwitcher) layoutSwitcher.style.display = "none";
      renderAllPagesPreview();
    } else if (viewName === "book") {
      if (scrapbookWrap) scrapbookWrap.hidden = true;
      if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
      if (sheetPhotos) sheetPhotos.hidden = true;
      if (sheetStickers) sheetStickers.hidden = true;
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
        if (state.currentPage === 4) {
          const widgetArea = document.getElementById("unique-widget-area");
          if (widgetArea) renderGiftWidget(widgetArea, viewName === "base");
        }
      } else if (viewName === "back") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = false;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = true;
      } else if (viewName === "photos") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (scrapbookBackWrap) scrapbookBackWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = false;
        if (sheetStickers) sheetStickers.hidden = true;
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

  // Sambungkan input foto untuk 3 slot di halaman aktif
  document.querySelectorAll(".photoFrame").forEach((frame) => {
    const slot = Number(frame.dataset.slot);
    const button = frame.querySelector(".photoButton");
    const input = frame.querySelector("input.fileInput");
    const error = frame.querySelector(".photoError");
    let selection = 0;

    const showError = (message) => {
      if (error) { error.textContent = message; error.hidden = false; }
    };

    button.addEventListener("click", () => input.click());

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

  // Sambungkan tombol foto di lembar foto ke input file terkait
  document.querySelectorAll(".printablePolaroid").forEach((card) => {
    const slot = Number(card.dataset.slot);
    const btn = card.querySelector(".cardPhotoButton");
    if (btn) {
      btn.addEventListener("click", () => {
        const input = document.querySelector(`.photoFrame[data-slot="${slot}"] input.fileInput`);
        if (input) input.click();
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
      if (photosNote) photosNote.textContent = `Mencetak kartu foto polaroid dengan garis potong presisi khusus untuk ${pageTitle}. Kertas Foto Glossy 230 gsm.`;
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
      // 6 Halaman PDF: Semua Lembar Foto Polaroid Seluruh Buku (Cover & Hal 1-5)
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
  }

  // Submit Form Cetak
  if (printForm) {
    const allPrintModes = [
      "single-base-duplex", "single-photos", "single-stickers", "page-current",
      "all-base-duplex", "all-photos", "all-stickers",
      "book-full", "book-duplex", "kit-all"
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

      buildBookPrintDOM(mode);
      document.body.classList.add(`print-mode-${mode}`);

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
    { title: "Lembar 4 : Kado Spesial Maroon", badge: "LEMBAR 4 DUPLEX", sub: "Sisi Kiri: Ikhtiar Seumur Hidup | Sisi Kanan: Sepatu, Baju Maroon & Bunga" },
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

    // 8. Trigger Print Dialog dari Studio Parent
    if (type === "TRIGGER_PRINT") {
      if (printButton) printButton.click();
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
    }
  });
})();
