"use strict";

(() => {
  const art = {
    rainbow: `<path d="M12 69V49a38 38 0 0 1 76 0v20H72V49a22 22 0 0 0-44 0v20Z" fill="#f3b7c5" stroke="#fffdf0" stroke-width="8"/><path d="M14 65V49a36 36 0 0 1 72 0v16" stroke="#84746a"/><path d="M20 63V49a30 30 0 0 1 60 0v14" stroke="#edb0ba" stroke-width="7"/><path d="M27 63V49a23 23 0 0 1 46 0v14" stroke="#f2d68d" stroke-width="7"/><path d="M34 63V49a16 16 0 0 1 32 0v14" stroke="#a9c9ba" stroke-width="7"/><path d="M9 79C-2 70 5 59 15 62c-2-15 21-17 24-4 14-4 20 17 5 21Z" fill="#fffcf0"/><path d="M67 79c-15-3-13-20 0-20 2-15 23-13 23 1 15 0 15 20 3 21Z" fill="#fffcf0"/>`,
    camera: `<path d="m9 31 20-2 5-11 26-2 7 10 22-2 6 53-80 8Z" fill="#eac7aa" stroke="#fffdf0" stroke-width="8"/><path d="m9 31 20-2 5-11 26-2 7 10 22-2 6 53-80 8Z" fill="#e9c5a9"/><path d="m11 42 79-7 3 31-78 8Z" fill="#b3cbbd"/><circle cx="52" cy="52" r="22" fill="#fff6df"/><circle cx="52" cy="52" r="15" fill="#8d9585"/><circle cx="52" cy="52" r="10" fill="#5d685f"/><path d="m44 48 5-4" stroke="#fffbed" stroke-width="3"/><path d="m72 32 10-1 1 7-10 1Z" fill="#fff9e9"/>`,
    smile: `<circle cx="50" cy="50" r="39" fill="#f5d883" stroke="#fff8e2" stroke-width="8"/><circle cx="50" cy="50" r="35" fill="#f5d883"/><path d="M36 37v10m27-11v10M30 57c8 21 31 25 43-2" stroke-width="3"/><path d="m23 48 4-1m47 0 4 1" stroke="#dc9e89" stroke-width="5"/>`,
    heart: `<path d="M48 86C30 67 6 43 16 23 25 6 45 15 51 28 62 9 86 11 88 32 90 51 68 74 48 86Z" fill="#eaa8ba" stroke="#fff5e9" stroke-width="7"/><path d="M48 83C30 64 10 43 19 25 27 11 45 19 51 32 62 14 82 14 85 33 86 51 66 72 48 83Z" stroke="#bd798f"/><path d="M27 26c-7 7-2 18 2 22" stroke="#fbe1de" stroke-width="4"/>`,
    bow: `<path d="M48 48C3 5 1 58 42 56L24 86l24-11 8 13 2-32C99 64 94 3 54 46Z" fill="#afd1bf" stroke="#fffaf0" stroke-width="7"/><path d="M48 48C3 5 1 58 42 56L24 86l24-11 8 13 2-32C99 64 94 3 54 46Z" fill="#afd1bf"/><path d="M45 48 23 31m33 18 22-20M44 58 33 75m20-18 1 19"/><ellipse cx="50" cy="51" rx="8" ry="9" fill="#f6d68e"/>`,
    coffee: `<path d="M12 49h61v5c33-9 35 29-5 26-13 14-45 6-49-7Zm-4 37h81" stroke="#fffaf0" stroke-width="9"/><path d="M72 54c27-8 29 22-5 21m7-15c17-3 16 10-3 10" fill="#ebc7ab"/><path d="M13 49h59l-5 24c-4 19-42 18-47 0Z" fill="#f6e8cf"/><ellipse cx="43" cy="49" rx="30" ry="8" fill="#bc967c"/><path d="M25 86c-35-5-17 10 20 10s54-15 22-10M34 33c-13-9 14-13 2-24m12 26c-9-8 9-12 4-20"/><path d="M34 64c3-9 10-3 10 1 9-12 17 1 0 10Z" fill="#dbacb1" stroke="none"/>`,
    clip: `<path d="m63 21-36 48c-14 22 6 37 21 17l35-49C101 11 75-8 58 14L22 63c-8 12 4 21 13 10l33-44" stroke="#fff9e9" stroke-width="10"/><path d="m63 21-36 48c-14 22 6 37 21 17l35-49C101 11 75-8 58 14L22 63c-8 12 4 21 13 10l33-44" stroke="#d68eaa" stroke-width="5"/>`,
    gift: `<path d="m18 42 63-5 3 48-62 6Zm-5-11 73-5 2 18-74 6Z" fill="#cebddb" stroke="#fff9ed" stroke-width="7"/><path d="m18 42 63-5 3 48-62 6Z" fill="#cfc1df"/><path d="m13 31 73-5 2 18-74 6Z" fill="#e8bbca"/><path d="m41 31 15-1 5 58-15 1Z" fill="#f6d989"/><path d="M49 28C-4 13 35-12 49 28c31-52 55-9 0 0Z" fill="#f7d990"/><path d="m49 28-14-12m14 12 15-14"/>`,
    butterfly: `<path d="M50 48C-2-9-7 58 37 63c-32 39 13 42 14 5 8 40 46 25 17-7 50-19 26-65-18-13Z" fill="#d6c1e2" stroke="#fff8e9" stroke-width="6"/><path d="M50 48C-2-9-7 58 37 63c-32 39 13 42 14 5 8 40 46 25 17-7 50-19 26-65-18-13Z" stroke="#ac92b5"/><path d="m50 47 3 24m-3-24-9-14m9 14 9-15"/>`,
    rings: `<ellipse cx="36" cy="60" rx="26" ry="32" transform="rotate(-25 36 60)" stroke="#fff7e8" stroke-width="9"/><ellipse cx="68" cy="43" rx="26" ry="32" transform="rotate(-25 68 43)" stroke="#fff7e8" stroke-width="9"/><ellipse cx="36" cy="60" rx="26" ry="32" transform="rotate(-25 36 60)" stroke="#9b8b76" stroke-width="4" stroke-dasharray="3 3"/><ellipse cx="68" cy="43" rx="26" ry="32" transform="rotate(-25 68 43)" stroke="#9b8b76" stroke-width="4" stroke-dasharray="3 3"/><path d="m27 29-8-10m12 8 1-15m-5 17-17-2" stroke="#809987" stroke-width="4"/>`,
    drink: `<path d="m30 37 6 53h38l8-53ZM57 39 65 7h9" stroke="#fff9ea" stroke-width="8"/><path d="m30 37 6 53h38l8-53Z" fill="#efd2da"/><path d="m38 53 4 32h26l5-32" fill="#c3d9cd"/><path d="m57 39 8-32h9" stroke="#899e9e" stroke-width="4"/><ellipse cx="56" cy="37" rx="26" ry="7" fill="#fff0de"/><path d="m43 56 3 23m12-23v23m10-23-2 23" stroke="#fff8e7"/>`,
    ticket: `<rect x="10" y="30" width="80" height="40" rx="5" fill="#f8e5c4" stroke="#fff9ed" stroke-width="6"/><rect x="10" y="30" width="80" height="40" rx="5" fill="#f8e5c4"/><circle cx="10" cy="50" r="8" fill="#badccd"/><circle cx="90" cy="50" r="8" fill="#badccd"/><path d="M38 30v40M34 50h32" stroke="#8c7866" stroke-width="2" stroke-dasharray="3 3"/><circle cx="62" cy="50" r="6" fill="#ebc2ce"/><path d="M50 38v24" stroke="#8c7866" stroke-width="1.5"/>`,
    envelope: `<rect x="14" y="28" width="72" height="48" rx="4" fill="#edd5de" stroke="#fff8f2" stroke-width="6"/><rect x="14" y="28" width="72" height="48" rx="4" fill="#edd5de"/><path d="M14 28l36 26 36-26" stroke="#b98495" stroke-width="2.5"/><path d="M50 51C45 44 38 48 41 54l9 9 9-9c3-6-4-10-9-3Z" fill="#cf778c"/><path d="M14 76l26-20M86 76l-26-20" stroke="#cba0b0" stroke-width="2"/>`,
    cassette: `<rect x="12" y="24" width="76" height="52" rx="6" fill="#cfc0dc" stroke="#fff8f2" stroke-width="6"/><rect x="12" y="24" width="76" height="52" rx="6" fill="#cfc0dc"/><rect x="22" y="34" width="56" height="32" rx="4" fill="#faf6ec"/><circle cx="36" cy="50" r="9" fill="#9d86ab"/><circle cx="64" cy="50" r="9" fill="#9d86ab"/><circle cx="36" cy="50" r="4" fill="#faf6ec"/><circle cx="64" cy="50" r="4" fill="#faf6ec"/><path d="M36 50h28" stroke="#8d7499" stroke-width="2"/><path d="M26 66l6-8h36l6 8" fill="#c0adc9"/>`,
    flower: `<circle cx="50" cy="50" r="13" fill="#f8da82" stroke="#fff8f0" stroke-width="6"/><circle cx="50" cy="22" r="12" fill="#efb9c8"/><circle cx="50" cy="78" r="12" fill="#efb9c8"/><circle cx="22" cy="50" r="12" fill="#efb9c8"/><circle cx="78" cy="50" r="12" fill="#efb9c8"/><circle cx="30" cy="30" r="12" fill="#f2c9d5"/><circle cx="70" cy="30" r="12" fill="#f2c9d5"/><circle cx="30" cy="70" r="12" fill="#f2c9d5"/><circle cx="70" cy="70" r="12" fill="#f2c9d5"/><circle cx="50" cy="50" r="13" fill="#f8da82"/><circle cx="50" cy="50" r="8" fill="#e9c264"/>`,
    sparkle: `<path d="M50 16c0 18-14 34-34 34 20 0 34 16 34 34 0-18 14-34 34-34-20 0-34-16-34-34Z" fill="#f7dd8c" stroke="#fff8ee" stroke-width="6"/><path d="M50 16c0 18-14 34-34 34 20 0 34 16 34 34 0-18 14-34 34-34-20 0-34-16-34-34Z" fill="#f7dd8c"/><circle cx="24" cy="24" r="4" fill="#badccd"/><circle cx="76" cy="76" r="4" fill="#f2c4d2"/>`,
    shoes: `<path d="M12 60c0-12 10-22 22-22h14l8 12h24c8 0 12 5 12 10v6H12z" fill="#88283f" stroke="#fff8f2" stroke-width="6"/><path d="M12 60c0-12 10-22 22-22h14l8 12h24c8 0 12 5 12 10v6H12z" fill="#88283f"/><ellipse cx="44" cy="46" rx="8" ry="4" fill="#faf4e8"/><circle cx="56" cy="48" r="3" fill="#faf4e8"/><path d="M10 66h82v4c0 3-3 6-6 6H16c-3 0-6-3-6-6z" fill="#faf5ec" stroke="#796957" stroke-width="1.5"/><path d="M38 50l12-4" stroke="#faf4e8" stroke-width="2"/>`,
    outfit: `<path d="M30 32 L50 24 L70 32 L82 56 L72 60 L65 46 L65 72 L35 72 L35 46 L28 60 L18 56 Z" fill="#c77b8b" stroke="#fff8f2" stroke-width="7" stroke-linejoin="round"/><path d="M30 32 L50 24 L70 32 L82 56 L72 60 L65 46 L65 72 L35 72 L35 46 L28 60 L18 56 Z" fill="#c77b8b"/><path d="M44 26 L56 26 L50 44 Z" fill="#ffffff"/><path d="M44 26 L50 44 L56 26" fill="none" stroke="#ede4d5" stroke-width="2.5"/><path d="M50 44v28" stroke="#ede4d5" stroke-width="2.5"/><path d="M35 70h30" stroke="#80192d" stroke-width="3"/><path d="M18 56l10 4m44 0l10-4" stroke="#80192d" stroke-width="2.5"/><circle cx="50" cy="48" r="2.5" fill="#80192d"/><circle cx="50" cy="57" r="2.5" fill="#80192d"/><circle cx="50" cy="66" r="2.5" fill="#80192d"/><circle cx="41" cy="46" r="2" fill="#80192d"/><circle cx="59" cy="46" r="2" fill="#80192d"/><path d="M41 49q-4 3-2 6m20-6q4 3 2 6" stroke="#4d6f46" stroke-width="1.5" fill="none"/>`,
    bouquet: `<path d="M34 52L24 88c2 4 22 8 26 8s24-4 26-8L66 52Z" fill="#eddac5" stroke="#fff8f2" stroke-width="7"/><path d="M34 52L24 88c2 4 22 8 26 8s24-4 26-8L66 52Z" fill="#eddac5"/><path d="M24 88l26-24 26 24" stroke="#cbb49e" stroke-width="1.5"/><circle cx="50" cy="38" r="12" fill="#ef9aa8"/><circle cx="36" cy="42" r="11" fill="#f8c8d4"/><circle cx="64" cy="42" r="11" fill="#f8c8d4"/><circle cx="50" cy="24" r="10" fill="#fce4b8"/><circle cx="35" cy="28" r="9" fill="#afd1bf"/><circle cx="65" cy="28" r="9" fill="#afd1bf"/><path d="M42 38c0-5 8-5 8 0 0-5 8-5 8 0-4 7-8 7-8 7s-4 0-8-7z" fill="#88283f"/><ellipse cx="50" cy="64" rx="9" ry="5" fill="#88283f"/><path d="M45 66l-9 16m14-16l9 16" stroke="#88283f" stroke-width="3"/>`,
    cake: `<ellipse cx="50" cy="84" rx="42" ry="7" fill="#faf6ec" stroke="#fff8f2" stroke-width="7"/><ellipse cx="50" cy="84" rx="42" ry="7" fill="#faf6ec"/><path d="M18 58h64v24c0 4-14 7-32 7s-32-3-32-7z" fill="#fbe7eb" stroke="#fff8f2" stroke-width="6"/><path d="M18 58h64v24c0 4-14 7-32 7s-32-3-32-7z" fill="#fbe7eb"/><ellipse cx="50" cy="58" rx="32" ry="7" fill="#fff5ec"/><path d="M28 38h44v18c0 3-10 5-22 5s-22-2-22-5z" fill="#edd2db" stroke="#fff8f2" stroke-width="6"/><path d="M28 38h44v18c0 3-10 5-22 5s-22-2-22-5z" fill="#edd2db"/><ellipse cx="50" cy="38" rx="22" ry="5" fill="#fffaf2"/><path d="M28 42c4 4 8 0 12 3 4-3 8 0 12-3 4 3 8-1 12 3" stroke="#88283f" stroke-width="2.5" fill="none"/><path d="M42 22v14M50 18v18M58 22v14" stroke="#88283f" stroke-width="2.5"/><path d="M42 16c-2 3 0 5 0 5s2-2 0-5zm8-4c-2 3 0 5 0 5s2-2 0-5zm8 4c-2 3 0 5 0 5s2-2 0-5z" fill="#f6d365"/>`,
    tag: `<path d="M18 50l26-26h32v40H44z" fill="#f8e5c4" stroke="#fff8ee" stroke-width="6"/><path d="M18 50l26-26h32v40H44z" fill="#f8e5c4"/><circle cx="68" cy="44" r="4" fill="#88283f"/><text x="27" y="52" font-size="6.5" fill="#756455" font-family="sans-serif" font-weight="bold">FOR YOU</text>`,
    ribbon: `<path d="M50 44c-18-20-34 0-14 16l14-6 14 6c20-16 4-36-14-16z" fill="#8d2b42" stroke="#fff8f2" stroke-width="6"/><path d="M50 44c-18-20-34 0-14 16l14-6 14 6c20-16 4-36-14-16z" fill="#8d2b42"/><path d="M44 52l-14 26 12-4 8-16M56 52l14 26-12-4-8-16" fill="#a43a53"/><circle cx="50" cy="48" r="6" fill="#f8e5c4"/>`
  };

  const stickerNames = {
    rainbow: "Pelangi Pastel",
    camera: "Kamera Vintage",
    smile: "Wajah Tersenyum",
    heart: "Hati Bertingkat",
    bow: "Pita Hadiah",
    coffee: "Cangkir Kopi",
    clip: "Penjepit Kertas",
    gift: "Kotak Kado",
    butterfly: "Kupu-kupu Manis",
    rings: "Cincin Pernikahan",
    drink: "Gelas Minuman",
    ticket: "Tiket Perjalanan",
    envelope: "Surat Cinta Romantis",
    cassette: "Kaset Mixtape",
    flower: "Bunga Mekar",
    sparkle: "Bintang Harapan",
    shoes: "Sepatu Maroon",
    outfit: "Cardigan Rajut Kimi",
    bouquet: "Buket Bunga Cantik",
    cake: "Kue Ulang Tahun",
    tag: "Tag Cinta Spesial",
    ribbon: "Pita Kado Maroon"
  };

  // Koleksi stiker kurasi khusus per halaman album
  const pageStickersConfig = {
    0: [
      ["ribbon", 3, 3, 10, -8], ["rings", 88, 3, 11, 10], ["bouquet", 16, 17, 9.5, -8], ["sparkle", 76, 17, 8, 12],
      ["envelope", 2, 70, 9, 10], ["heart", 88, 70, 8, -12], ["rings", 4, 93, 10, -6], ["ribbon", 88, 93, 9.5, 8]
    ],
    1: [
      ["smile", 3, 3, 7, -12], ["heart", 89, 3, 8, 12], ["rings", 16, 18, 11, -8], ["rainbow", 73, 17.5, 12, 10],
      ["bow", 2, 53, 9, 12], ["camera", 2, 61, 8.5, -15], ["coffee", 88, 52, 9, 12], ["drink", 88, 61, 8.5, -10],
      ["cake", 23, 68, 11, -6], ["camera", 68, 68, 9, 8], ["sparkle", 16, 73, 6.5, 15], ["butterfly", 77, 73, 7, -12],
      ["smile", 4, 93, 7, 10], ["heart", 88, 93, 8, -12], ["clip", 89, 13, 7, -15]
    ],
    2: [
      ["ticket", 3, 3, 11, -8], ["camera", 88, 3, 9, 12], ["coffee", 16, 18, 9, -10], ["smile", 74, 18, 7, 12],
      ["ticket", 2, 53, 11, 10], ["drink", 2, 62, 8, -12], ["camera", 88, 53, 9, -8], ["rainbow", 87, 62, 11, 8],
      ["sparkle", 23, 68, 7.5, 14], ["ticket", 68, 68, 11, -6], ["drink", 16, 73, 7.5, -10], ["smile", 77, 73, 6.5, 12],
      ["coffee", 4, 93, 8, -10], ["ticket", 88, 93, 10, 8], ["clip", 2, 13, 6.5, 15]
    ],
    3: [
      ["envelope", 3, 3, 11, -8], ["heart", 89, 3, 8.5, 12], ["flower", 16, 18, 8.5, -10], ["rings", 74, 18, 11, 10],
      ["butterfly", 2, 64, 8, -12], ["clip", 2, 70, 6.5, 14], ["flower", 88, 64, 8.5, 12], ["envelope", 88, 70, 10, -8],
      ["heart", 23, 68, 8, 14], ["butterfly", 69, 68, 8, -10], ["rings", 16, 73, 9, -8], ["flower", 77, 73, 8, 10],
      ["envelope", 4, 93, 10, -6], ["heart", 89, 93, 8, 12], ["clip", 89, 13, 6.5, -15]
    ],
    4: [
      ["shoes", 3, 3, 11, -8], ["ribbon", 89, 3, 8.5, 12], ["tag", 16, 18, 8.5, -8], ["cake", 74, 18, 10, 10],
      ["bouquet", 2, 53, 10, -10], ["shoes", 2, 62, 10, 8], ["cake", 88, 53, 10, 10], ["ribbon", 88, 62, 8.5, -12],
      ["heart", 23, 68, 8, 14], ["tag", 69, 68, 8.5, -10], ["bouquet", 16, 73, 9, 8], ["shoes", 77, 73, 10, -8],
      ["ribbon", 4, 93, 8.5, 10], ["outfit", 88, 93, 10, -10], ["tag", 2, 13, 7, 12]
    ],
    5: [
      ["cassette", 3, 3, 12, -6], ["sparkle", 89, 3, 8, 14], ["flower", 16, 18, 8.5, -10], ["rings", 74, 18, 11, 10],
      ["sparkle", 2, 53, 7.5, 16], ["smile", 2, 62, 7, -12], ["rainbow", 87, 53, 11, 12], ["gift", 88, 62, 8.5, -10],
      ["flower", 23, 68, 8, 12], ["sparkle", 69, 68, 7.5, 14], ["rings", 16, 73, 9, -10], ["flower", 77, 73, 8, 8],
      ["cassette", 4, 93, 11, -6], ["sparkle", 89, 93, 8, 14], ["flower", 89, 13, 7.5, -12]
    ]
  };

  const pageKitList = {
    0: ["ribbon", "rings", "bouquet", "sparkle", "envelope", "heart", "bow", "flower", "ribbon", "rings", "bouquet", "sparkle", "envelope", "heart", "bow", "flower"],
    1: ["cake", "bouquet", "heart", "rings", "smile", "flower", "gift", "cake", "camera", "bow", "rainbow", "heart", "rings", "bouquet", "gift", "smile"],
    2: ["ticket", "camera", "rings", "heart", "coffee", "sparkle", "ticket", "camera", "smile", "rainbow", "ticket", "rings", "drink", "sparkle", "camera", "heart"],
    3: ["envelope", "heart", "rings", "bouquet", "flower", "butterfly", "envelope", "heart", "rings", "flower", "bouquet", "envelope", "sparkle", "heart", "bow", "flower"],
    4: ["shoes", "outfit", "ribbon", "tag", "gift", "heart", "shoes", "outfit", "ribbon", "tag", "rings", "heart"],
    5: ["rings", "flower", "cassette", "cake", "sparkle", "heart", "rings", "cassette", "flower", "sparkle", "bouquet", "cassette", "bow", "heart", "flower", "sparkle"]
  };

  // Fungsi me-render dekorasi stiker dan bintang di scrapbook halaman tertentu
  function renderDecorationsForPage(pageId, decorationsElement) {
    if (!decorationsElement) return;
    decorationsElement.replaceChildren();

    const miniTop = document.createElement("span");
    miniTop.className = "miniPolaroid miniTop";
    const miniLeft = document.createElement("span");
    miniLeft.className = "miniPolaroid miniLeft";
    const miniBottom = document.createElement("span");
    miniBottom.className = "miniPolaroid miniBottom";
    const cornerTape = document.createElement("span");
    cornerTape.className = "tape cornerTape";
    const bottomTape = document.createElement("span");
    bottomTape.className = "tape bottomTape";
    const rightTape = document.createElement("span");
    rightTape.className = "tape rightTape";
    decorationsElement.append(miniTop, miniLeft, miniBottom, cornerTape, bottomTape, rightTape);

    const stickerList = pageStickersConfig[pageId] || pageStickersConfig[1];
    stickerList.forEach(([kind, left, top, width, rotate]) => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      Object.entries({
        viewBox: "0 0 100 100",
        fill: "none",
        stroke: "#796957",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        class: "sticker",
        "aria-hidden": "true"
      }).forEach(([name, value]) => svg.setAttribute(name, value));
      Object.assign(svg.style, { left: `${left}%`, top: `${top}%`, width: `${width}%`, transform: `rotate(${rotate}deg)` });
      svg.innerHTML = art[kind] || art.smile;
      decorationsElement.append(svg);
    });

    const starSafePositions = [
      [2, 10], [95, 10], [1, 20], [96, 20],
      [1, 50], [96, 50], [2, 88], [95, 88],
      [22, 71], [75, 71]
    ];
    const starColors = ["#dbc18a", "#dbb7ce", "#aecbd2", "#e9baaa"];
    starSafePositions.forEach(([l, t], i) => {
      const star = document.createElement("span");
      star.className = "star";
      const size = 3 + (i % 2);
      Object.assign(star.style, {
        left: `${l}%`,
        top: `${t}%`,
        width: `${size}%`,
        background: starColors[i % starColors.length],
        transform: `rotate(${i * 27}deg)`
      });
      decorationsElement.append(star);
    });

    for (let index = 0; index < 12; index++) {
      const confetti = document.createElement("span");
      confetti.className = "confetti";
      Object.assign(confetti.style, {
        left: `${82 + ((index * 5) % 15)}%`,
        top: `${88 + ((index * 7) % 10)}%`,
        background: ["#edb9bd", "#a8cfc2", "#f1d19d", "#aec4dc"][index % 4],
        transform: `rotate(${index * 37}deg)`
      });
      decorationsElement.append(confetti);
    }
  }

  // Fungsi me-render lembar stiker kit untuk halaman tertentu
  function renderStickerSheetForPage(pageId, gridElement, starsElement) {
    if (gridElement) {
      gridElement.replaceChildren();
      const list = pageKitList[pageId] || pageKitList[1];
      list.forEach((kind) => {
        const card = document.createElement("div");
        card.className = "sheetStickerCard";

        const cutLine = document.createElement("span");
        cutLine.className = "stickerCutMark";
        cutLine.textContent = "✂";
        card.append(cutLine);

        const dieCut = document.createElement("div");
        dieCut.className = "stickerDieCut";

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        Object.entries({
          viewBox: "0 0 100 100",
          fill: "none",
          stroke: "#796957",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          class: "sheetStickerSvg",
          "aria-label": stickerNames[kind] || kind
        }).forEach(([name, value]) => svg.setAttribute(name, value));
        svg.innerHTML = art[kind] || art.smile;
        dieCut.append(svg);
        card.append(dieCut);

        const label = document.createElement("span");
        label.className = "stickerLabel";
        label.textContent = stickerNames[kind] || kind;
        card.append(label);

        gridElement.append(card);
      });
    }

    if (starsElement) {
      starsElement.replaceChildren();
      const starColors = ["#dbc18a", "#dbb7ce", "#aecbd2", "#e9baaa"];
      for (let i = 0; i < 16; i++) {
        const item = document.createElement("div");
        item.className = "sheetStarItem";
        const cut = document.createElement("span");
        cut.className = "starCutMark";
        cut.textContent = "✂";
        item.append(cut);

        const star = document.createElement("span");
        star.className = "sheetStar";
        star.style.backgroundColor = starColors[i % starColors.length];
        item.append(star);
        starsElement.append(item);
      }
      for (let i = 0; i < 12; i++) {
        const item = document.createElement("div");
        item.className = "sheetConfettiItem";
        const confetti = document.createElement("span");
        confetti.className = "sheetConfetti";
        confetti.style.backgroundColor = ["#edb9bd", "#a8cfc2", "#f1d19d", "#aec4dc"][i % 4];
        item.append(confetti);
        starsElement.append(item);
      }
    }
  }

  window.ScrapbookStickers = {
    art,
    stickerNames,
    renderDecorationsForPage,
    renderStickerSheetForPage
  };

  document.addEventListener("DOMContentLoaded", () => {
    const decorations = document.getElementById("decorations");
    const grid = document.getElementById("sticker-grid");
    const stars = document.getElementById("stars-row");
    if (decorations) renderDecorationsForPage(1, decorations);
    if (grid && stars) renderStickerSheetForPage(1, grid, stars);
  });
})();
