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
        signoff: "bismillah, till jannah together.",
        notes: [
          { cls: "wishNote1", text: "Till jannah\nwith you" },
          { cls: "wishNote2", text: "Bismillah bulan\ndepan sah!" },
          { cls: "wishNote3", text: "May Allah bless\nour marriage" },
          { cls: "wishNote4", text: "Sakinah, mawaddah\nwarahmah" },
          { cls: "wishNote5", text: "You will be the\nbest wife ever" }
        ]
      }
    }
  };

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

  // Render Widget Segel Pita Sampul untuk Sampul Depan (Halaman 0)
  function renderCoverSealWidget(container) {
    container.replaceChildren();
    const widget = document.createElement("div");
    widget.className = "coverSealWidget";
    widget.innerHTML = `
      <div class="coverSealTape" aria-hidden="true"></div>
      <div class="coverSealBadge">
        <span class="coverSealCrest">✦ 2026 ✦</span>
        <span class="coverSealTitle">A LITTLE BOOK OF US</span>
        <span class="coverSealSub">Koleksi Kenangan Manis Menuju Hari Bahagia Kita</span>
      </div>
    `;
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
    const letter = document.createElement("div");
    letter.className = "friendLetterCard";
    letter.innerHTML = `
      <div class="letterClip" aria-hidden="true"></div>
      <div class="letterHeader">
        <span class="letterStamp" aria-hidden="true">POSTAGE PAID ♡ WEDDING 2026</span>
        <span class="letterLabel">surat cinta untuk calon istriku</span>
      </div>
      <p class="letterBodyText">${p3.letterText}</p>
      <div class="letterSign">dengan segenap jiwaku, calon suamimu.</div>
    `;
    container.append(letter);
  }

  // Render Widget Kado Spesial (Sepatu & Baju Maroon, Bunga, Cake) untuk Halaman 4
  function renderGiftWidget(container) {
    container.replaceChildren();
    const p4 = state.pages[4];
    const widget = document.createElement("div");
    widget.className = "giftRevealWidget";
    widget.innerHTML = `
      <div class="giftTape" aria-hidden="true"></div>
      <div class="giftTagRibbon">
        <span class="giftTagLabel">GIFT UNBOXING ♡</span>
        <span class="giftTagSerial">FOR MY FUTURE WIFE</span>
      </div>
      <div class="giftItemsGrid">
        <div class="giftItemBadge" data-gift-src="images/gift_maroon_shoes.svg" title="Klik untuk pasang Sepatu Maroon ke polaroid">
          <img src="images/gift_maroon_shoes.svg" alt="Sepatu Maroon" class="giftItemThumb">
          <div class="giftItemInfo">
            <span class="giftItemTitle">Sepatu Maroon</span>
            <span class="giftItemDesc">elegan ke pelaminan</span>
          </div>
        </div>
        <div class="giftItemBadge" data-gift-src="images/gift_maroon_dress.svg" title="Klik untuk pasang Baju Set Maroon ke polaroid">
          <img src="images/gift_maroon_dress.svg" alt="Baju Set Maroon" class="giftItemThumb">
          <div class="giftItemInfo">
            <span class="giftItemTitle">Baju Set Maroon</span>
            <span class="giftItemDesc">setelan anggun serasi</span>
          </div>
        </div>
        <div class="giftItemBadge" data-gift-src="images/gift_flower_bouquet.svg" title="Klik untuk pasang Buket Bunga ke polaroid">
          <img src="images/gift_flower_bouquet.svg" alt="Buket Bunga" class="giftItemThumb">
          <div class="giftItemInfo">
            <span class="giftItemTitle">Buket Bunga</span>
            <span class="giftItemDesc">bunga mawar mekar</span>
          </div>
        </div>
        <div class="giftItemBadge" data-gift-src="images/gift_birthday_cake.svg" title="Klik untuk pasang Birthday Cake ke polaroid">
          <img src="images/gift_birthday_cake.svg" alt="Birthday Cake" class="giftItemThumb">
          <div class="giftItemInfo">
            <span class="giftItemTitle">Birthday Cake</span>
            <span class="giftItemDesc">kue ultah bertingkat</span>
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
          <div class="cassetteLabel">WEDDING SOUNDTRACK · SIDE A</div>
          <div class="cassetteReels"><span></span><span></span></div>
        </div>
      </div>
      <div class="bucketListCard">
        <p class="bucketListTitle">Ikhtiar &amp; Impian Rumah Tangga Kita</p>
        <ul class="bucketListItems">
          ${p5.checklist.map((item) => `<li><span class="checkBullet">✔</span><span>${item}</span></li>`).join("")}
        </ul>
      </div>
    `;
    container.append(widget);
  }

  // Render Halaman Aktif
  function renderPage(pageId) {
    state.currentPage = pageId;
    const page = state.pages[pageId] || state.pages[1];

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
          <span class="coverEditionPill">EDISI SPESIAL · MENUJU AKAD 2026</span>
          <div style="display:flex;justify-content:center;gap:.5cqw;"><span data-letters="${page.titleCutout || 'OuR StOrY'}"></span></div>
        `;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
        nameHeading.style.setProperty("--name-size", `${Math.min(9.5, 70 / Math.max(Array.from(state.name).length, 1))}cqw`);
      }
    } else if (pageId === 1) {
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
        nameHeading.style.setProperty("--name-size", `${Math.min(11.8, 76 / Math.max(Array.from(state.name).length, 1))}cqw`);
      }
    } else {
      if (headingPrefix) {
        headingPrefix.style.display = "flex";
        headingPrefix.style.flexDirection = "row";
        headingPrefix.style.alignItems = "center";
        headingPrefix.innerHTML = `<span data-letters="${page.titleCutout}"></span>`;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) {
        nameHeading.style.display = "none";
      }
    }

    // Perbarui Subtitle / Date Label
    const dateLabel = document.getElementById("date-label");
    if (dateLabel) {
      if (pageId === 1) {
        const [year, month] = (state.birthday || "2026-06-01").split("-").map(Number);
        dateLabel.textContent = `${months[month - 1]} ${year}`;
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
              if (guideSub) guideSub.textContent = "Ukuran ~8 x 10,5 cm dari lembar foto";
            } else if (slot === 1) {
              guideText.textContent = "Foto Mini Overlay";
              if (guideSub) guideSub.textContent = "Tempel di sudut foto utama";
            }
          } else if (layout === "single-clean" || layout === "single-letter") {
            if (slot === 0) {
              guideText.textContent = "Tempel 1 Foto Gedhe Calon Istri";
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
          } else {
            guideText.textContent = `Tempel Foto ${slot + 1} (Hal ${pageId})`;
            if (guideSub) guideSub.textContent = "dari lembar kertas foto";
          }
        }

        const photoBtn = frame.querySelector(".photoButton");
        photoBtn.querySelector(".photo")?.remove();
        const hint = frame.querySelector(".photoHint");

        if (state.photoUrls.has(globalIndex)) {
          const img = new Image();
          img.className = "photo";
          img.alt = `Kenangan Halaman ${pageId} - Foto ${slot + 1}: ${caption}`;
          img.src = state.photoUrls.get(globalIndex);
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
          } else {
            cutLabel.innerHTML = `<span class="cutIcon">✂</span> Garis potong Hal ${pageId} Foto ${slot + 1}`;
          }
        }

        const cardBtn = printablePolaroid.querySelector(".cardPhotoButton");
        cardBtn.querySelector(".cardPhoto")?.remove();
        const placeholder = printablePolaroid.querySelector(".cardPhotoPlaceholder");

        if (state.photoUrls.has(globalIndex)) {
          const cardImg = new Image();
          cardImg.className = "cardPhoto";
          cardImg.alt = `Kenangan Halaman ${pageId} - Foto ${slot + 1}: ${caption}`;
          cardImg.src = state.photoUrls.get(globalIndex);
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
      else if (pageId === 4) renderGiftWidget(widgetArea);
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
      const miniThemes = {
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
          <span class="coverEditionPill">EDISI SPESIAL · MENUJU AKAD 2026</span>
          <div style="display:flex;justify-content:center;gap:.5cqw;"><span data-letters="${p.titleCutout || 'OuR StOrY'}"></span></div>
        `;
        headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
      }
      if (nameHeading) {
        nameHeading.style.display = "block";
        cutoutLetters(nameHeading, state.name, 2);
        nameHeading.style.setProperty("--name-size", `${Math.min(9.5, 70 / Math.max(Array.from(state.name).length, 1))}cqw`);
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
        btn.querySelector(".photo")?.remove();
        const hint = frame.querySelector(".photoHint");

        if (state.photoUrls.has(gIdx)) {
          const img = new Image();
          img.className = "photo";
          img.alt = `Kenangan Halaman ${pId} - Foto ${s + 1}: ${p.captions[s] || ""}`;
          img.src = state.photoUrls.get(gIdx);
          btn.prepend(img);
          hint?.classList.add("hasPhoto");
        } else {
          hint?.classList.remove("hasPhoto");
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
  const viewTabs = document.querySelectorAll(".viewTab");
  const viewNotice = document.getElementById("view-notice");
  const notices = {
    full: "Tampilan utuh siap pajang atau dijilid menjadi album kenangan.",
    all: "Pratinjau lengkap seluruh 5 halaman album pernikahan. Gulir untuk menyusuri kisah cinta dari awal hingga pelaminan.",
    base: "Cetak di kertas Linen / Concorde / Karton 220-260 gsm. Berisi background, catatan, dan kotak panduan tempel.",
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
    if (viewName !== "all") {
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

    const scrapbookWrap = document.querySelector(".scrapbookWrap");
    const sheetPhotos = document.getElementById("sheet-photos");
    const sheetStickers = document.getElementById("sheet-stickers");
    const allPagesSection = document.getElementById("all-pages-section");
    const layoutSwitcher = document.querySelector(".layoutSwitcher");

    if (viewName === "all") {
      if (scrapbookWrap) scrapbookWrap.hidden = true;
      if (sheetPhotos) sheetPhotos.hidden = true;
      if (sheetStickers) sheetStickers.hidden = true;
      if (allPagesSection) allPagesSection.hidden = false;
      if (layoutSwitcher) layoutSwitcher.style.display = "none";
      renderAllPagesPreview();
    } else {
      if (allPagesSection) allPagesSection.hidden = true;
      if (layoutSwitcher) layoutSwitcher.style.display = "flex";
      if (viewName === "full" || viewName === "base") {
        if (scrapbookWrap) scrapbookWrap.hidden = false;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = true;
      } else if (viewName === "photos") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = false;
        if (sheetStickers) sheetStickers.hidden = true;
      } else if (viewName === "stickers") {
        if (scrapbookWrap) scrapbookWrap.hidden = true;
        if (sheetPhotos) sheetPhotos.hidden = true;
        if (sheetStickers) sheetStickers.hidden = false;
      }
    }

    if (viewNotice) viewNotice.textContent = notices[viewName] || "";
  }

  viewTabs.forEach((tab) => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

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

  // Pilihan Tata Letak Foto Halaman Aktif (Layout Switcher)
  document.querySelectorAll(".layoutPill").forEach((pill) => {
    pill.addEventListener("click", () => {
      const choice = pill.dataset.layout;
      if (!choice) return;
      state.pages[state.currentPage].layout = choice;
      renderPage(state.currentPage);
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
      const url = URL.createObjectURL(file);
      const photo = new Image();

      photo.onload = () => {
        if (currentSelection !== selection) { URL.revokeObjectURL(url); return; }
        const prevUrl = state.photoUrls.get(globalIndex);
        if (prevUrl && typeof prevUrl === "string" && prevUrl.startsWith("blob:")) URL.revokeObjectURL(prevUrl);
        state.photoUrls.set(globalIndex, url);

        // Perbarui foto pada kolase dan lembar foto
        renderPage(state.currentPage);
      };

      photo.onerror = () => {
        URL.revokeObjectURL(url);
        if (currentSelection === selection) showError("Foto tidak bisa dibuka. Coba file lain.");
      };
      photo.src = url;
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

      state.name = form.elements.name.value.trim() || "Calon Istriku";
      state.birthday = form.elements.birthday.value;

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

      document.title = `Happy Birthday, ${state.name}! · Wedding & Birthday Scrapbook`;
      renderPage(state.currentPage);
      dialog.close();
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
      const pageKitNote = document.getElementById("current-page-kit-note");
      const singleNote = document.getElementById("current-page-single-note");
      const p = state.pages[state.currentPage];
      if (pageKitNote) pageKitNote.textContent = `Mencetak 3 lembar (Dasar, Foto, Stiker) khusus untuk Halaman ${state.currentPage} (${p.themeTitle}).`;
      if (singleNote) singleNote.textContent = `Mencetak Halaman ${state.currentPage} (${p.themeTitle}) dalam format 1 lembar poster A4 utuh.`;
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

  // Bangun elemen cetak untuk multi-halaman buku album
  function buildBookPrintDOM(mode) {
    if (!printBookContainer) return;
    printBookContainer.replaceChildren();

    if (mode === "book-full") {
      // Cetak Cover + 5 halaman scrapbook utuh berurutan
      for (let pId = 0; pId <= 5; pId++) {
        const pageEl = document.createElement("div");
        pageEl.className = "bookPrintPage";
        const wrap = createScrapbookPageNode(pId);
        if (wrap) pageEl.append(wrap);
        printBookContainer.append(pageEl);
      }
    } else if (mode === "kit-all") {
      // Cetak seluruh kit: Cover + 5 halaman (Dasar, Foto, Stiker)
      for (let pId = 0; pId <= 5; pId++) {
        const p = state.pages[pId];

        // 1. Lembar Dasar
        const basePage = document.createElement("div");
        basePage.className = "bookPrintPage sheetBasePrint";
        const baseWrap = document.querySelector(".scrapbookWrap").cloneNode(true);
        baseWrap.removeAttribute("id");
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

        // pasang elemen teks
        const headingPrefix = baseWrap.querySelector("#heading-prefix");
        const nameHeading = baseWrap.querySelector("#name-heading");
        if (pId === 0) {
          if (headingPrefix) {
            headingPrefix.style.display = "flex";
            headingPrefix.style.flexDirection = "column";
            headingPrefix.style.alignItems = "center";
            headingPrefix.innerHTML = `
              <span class="coverEditionPill">EDISI SPESIAL · MENUJU AKAD 2026</span>
              <div style="display:flex;justify-content:center;gap:.5cqw;"><span data-letters="${p.titleCutout || 'OuR StOrY'}"></span></div>
            `;
            headingPrefix.querySelectorAll("[data-letters]").forEach((el) => cutoutLetters(el, el.dataset.letters, 1));
          }
          if (nameHeading) {
            nameHeading.style.display = "block";
            cutoutLetters(nameHeading, state.name, 2);
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
          const frame = baseWrap.querySelector(`.photoFrame[data-slot="${s}"]`);
          if (frame) {
            frame.querySelector(".photoCaption").textContent = p.captions[s] || "";
            const gText = frame.querySelector(".guideText");
            const gSub = frame.querySelector(".guideSub");
            if (gText) {
              if (pId === 0) {
                gText.textContent = "Tempel Foto Sampul Utama";
                if (gSub) gSub.textContent = "Foto potret berdua terbaik untuk sampul depan";
              } else if (layout === "single-hero") {
                if (s === 0) {
                  gText.textContent = "Tempel 1 Foto Gedhe";
                  if (gSub) gSub.textContent = "Ukuran ~8 x 10,5 cm dari lembar foto";
                } else if (s === 1) {
                  gText.textContent = "Foto Mini Overlay";
                  if (gSub) gSub.textContent = "Tempel di sudut foto utama";
                }
              } else if (layout === "single-clean" || layout === "single-letter") {
                if (s === 0) {
                  gText.textContent = "Tempel 1 Foto Gedhe Calon Istri";
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
          else if (pId === 4) renderGiftWidget(wArea);
          else if (pId === 5) renderMixtapeWidget(wArea);
        }

        baseWrap.querySelector("#page-signoff").textContent = p.signoff;
        basePage.append(baseWrap);
        printBookContainer.append(basePage);

        // 2. Lembar Foto
        const photoPage = document.createElement("div");
        photoPage.className = "bookPrintPage sheetPhotoPrint";
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
              } else {
                cutGuide.innerHTML = `<span class="cutIcon">✂</span> Garis potong Hal ${pId} Foto ${s + 1}`;
              }
            }
            const btn = pCard.querySelector(".cardPhotoButton");
            btn.querySelector(".cardPhoto")?.remove();
            if (state.photoUrls.has(gIdx)) {
              const img = new Image();
              img.className = "cardPhoto";
              img.src = state.photoUrls.get(gIdx);
              btn.prepend(img);
            }
          }
        }
        photoPage.append(photoSheetClone);
        printBookContainer.append(photoPage);

        // 3. Lembar Stiker
        const stickerPage = document.createElement("div");
        stickerPage.className = "bookPrintPage sheetStickerPrint";
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
        stickerPage.append(stickerSheetClone);
        printBookContainer.append(stickerPage);
      }
    }
  }

  // Submit Form Cetak
  if (printForm) {
    const optionCards = printForm.querySelectorAll(".printOptionCard");
    optionCards.forEach((card) => {
      const radio = card.querySelector('input[type="radio"]');
      radio.addEventListener("change", () => {
        optionCards.forEach((c) => c.classList.remove("active"));
        if (radio.checked) card.classList.add("active");
      });
    });

    printForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const mode = printForm.elements.printMode.value;
      printDialog.close();

      document.body.classList.remove(
        "print-mode-kit-all", "print-mode-book-full",
        "print-mode-kit-current", "print-mode-page-current"
      );

      if (mode === "kit-all" || mode === "book-full") {
        buildBookPrintDOM(mode);
        document.body.classList.add(`print-mode-${mode}`);
      } else if (mode === "kit-current") {
        document.body.classList.add("print-mode-kit-current");
      } else {
        document.body.classList.add("print-mode-page-current");
      }

      const cleanup = () => {
        document.body.classList.remove(
          "print-mode-kit-all", "print-mode-book-full",
          "print-mode-kit-current", "print-mode-page-current"
        );
        if (printBookContainer) printBookContainer.replaceChildren();
        window.removeEventListener("afterprint", cleanup);
      };

      window.addEventListener("afterprint", cleanup);

      setTimeout(() => {
        window.print();
        setTimeout(cleanup, 2000);
      }, 150);
    });
  }

  // Inisialisasi awal saat halaman dimuat
  document.addEventListener("DOMContentLoaded", () => {
    renderPage(1);
    switchView("full");
  });
})();
