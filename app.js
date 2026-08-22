const STRAINS = [
  "ADL",
  "Aries",
  "Atomic Belts",
  "Black Cherry Gelato",
  "BLU",
  "Blue Andeze",
  "Blue Lobster",
  "Blue Nerdz",
  "Blue Runtz 565",
  "Blue Taffeez 266",
  "Blue Zlushie",
  "Blue Zoup",
  "Bolo Runtz",
  "Biscotti",
  "Candy Gelato",
  "Candy Gushers",
  "CG",
  "Candy Heart",
  "Candy Runtz",
  "Cheetah Piss",
  "Cherry Runtz",
  "Chem x OG",
  "Carbon Fiber",
  "Cotton Candy",
  "Crack Head",
  "Donkey Butter",
  "Dosido",
  "Dosilato",
  "Double Runtz",
  "Espresso Martini",
  "E85",
  "Fresh Cakes",
  "G33",
  "G41",
  "G45",
  "Gangster Runtz",
  "Gary Cherry",
  "Gas Nana",
  "Gelato",
  "Gelato #33 266",
  "Gel King",
  "GG4 TC1",
  "GG4 TC2",
  "GMO Cookies",
  "GMO #2",
  "Golden Ticket",
  "Grape Skittle",
  "Gruntz",
  "GSC",
  "Guava",
  "Honey Runtz",
  "Ice Cream Cake TC1",
  "Ice Cream Cake",
  "Illumanti",
  "Illemonati 565",
  "Jack Herer",
  "Jungle Gelato",
  "Kept Secret",
  "Lady Pink",
  "LCG Bx1",
  "LCG x G33",
  "LCG Zkittles",
  "Lemon Bitters 369",
  "Lemon Cherry Fuel",
  "Lemon Cherry Gelato 565",
  "LFG",
  "Lilac Diesel TC2",
  "Lips Mackerz",
  "Madd Fruit",
  "Malted Shake 369",
  "Marmalade",
  "Mile High Slurpie",
  "Mochi",
  "Mule Fuel",
  "OBR",
  "Octane",
  "OG x Sherb x Dosi x FOF #1",
  "Oreoz",
  "Pack Muel #4",
  "Papaya Bomb",
  "PP",
  "Papaya Cake",
  "Pez",
  "Pineapple Glue",
  "Pink Runtz",
  "Pixie Stix",
  "PM X RS11",
  "Purple Cream",
  "Rainbow Runtz 565",
  "RB",
  "Royal Runtz",
  "Runtz",
  "Runtz x Jealousy",
  "Russian Runtz x LCG",
  "Sharpie",
  "Sherpa 369",
  "Sour Runtz",
  "Sugar Tarts TC1",
  "Toad Venom",
  "Tropicana Cherry",
  "Triple Chocolate Chip",
  "Wedding Cake",
  "Wedding Cake #2",
  "White Runtz",
  "WiFi OG",
  "Zoap",
  "Ztopia",
];

const LABEL_MEDIA = [
  { type: "image", src: "media/labels/lcg-bx1.png", label: "LCG Bx1" },
  { type: "image", src: "media/labels/adl.png", label: "ADL" },
  { type: "image", src: "media/labels/runtz.png", label: "Runtz" },
  { type: "image", src: "media/labels/blue-lobster.png", label: "Blue Lobster" },
  { type: "image", src: "media/labels/blue-andeze.png", label: "Blue Andeze" },
  { type: "image", src: "media/labels/candy-gushers.png", label: "Candy Gushers" },
  { type: "image", src: "media/labels/blue-zoup.png", label: "Blue Zoup" },
  { type: "image", src: "media/labels/lady-pink.png", label: "Lady Pink" },
  { type: "image", src: "media/labels/jungle-gelato.png", label: "Jungle Gelato" },
  { type: "image", src: "media/labels/pm-x-rs11.png", label: "PM X RS11" },
  { type: "image", src: "media/labels/madd-fruit.png", label: "Madd Fruit" },
  { type: "image", src: "media/labels/honey-runtz.png", label: "Honey Runtz" },
  { type: "image", src: "media/labels/black-cherry-gelato.png", label: "Black Cherry Gelato" },
  { type: "image", src: "media/labels/pineapple-glue.png", label: "Pineapple Glue" },
];

const FLOWER_MEDIA = [
  { type: "image", src: "media/flower/zoap.jpg", label: "Zoap" },
  { type: "image", src: "media/flower/g33.jpg", label: "G33" },
  { type: "image", src: "media/flower/ztopia.jpg", label: "Ztopia" },
  { type: "image", src: "media/flower/cherry-runtz.jpg", label: "Cherry Runtz" },
  { type: "image", src: "media/flower/lcg-x-g33.jpg", label: "LCG x G33" },
  { type: "image", src: "media/flower/rb.jpg", label: "RB" },
  { type: "image", src: "media/flower/candy-heart.jpg", label: "Candy Heart" },
  { type: "image", src: "media/flower/candy-runtz.jpg", label: "Candy Runtz" },
  { type: "image", src: "media/flower/obr.jpg", label: "OBR" },
  { type: "image", src: "media/flower/dosido.jpg", label: "Dosido" },
  { type: "image", src: "media/flower/blu.jpg", label: "BLU" },
];

const LABEL_VIDEOS = [
  { type: "video", src: "media/label-videos/blue-andeze.mp4", poster: "media/label-videos/thumb-blue-andeze.jpg", label: "Blue Andeze" },
  { type: "video", src: "media/label-videos/pm-x-rs11.mp4", poster: "media/label-videos/thumb-pm-x-rs11.jpg", label: "PM X RS11" },
  { type: "video", src: "media/label-videos/lcg-bx1.mp4", poster: "media/label-videos/thumb-lcg-bx1.jpg", label: "LCG Bx1" },
  { type: "video", src: "media/label-videos/pineapple-glue.mp4", poster: "media/label-videos/thumb-pineapple-glue.jpg", label: "Pineapple Glue" },
  { type: "video", src: "media/label-videos/lady-pink.mp4", poster: "media/label-videos/thumb-lady-pink.jpg", label: "Lady Pink" },
  { type: "video", src: "media/label-videos/russian-runtz-x-lcg.mp4", poster: "media/label-videos/thumb-russian-runtz-x-lcg.jpg", label: "Russian Runtz x LCG" },
  { type: "video", src: "media/label-videos/runtz.mp4", poster: "media/label-videos/thumb-runtz.jpg", label: "Runtz" },
  { type: "video", src: "media/label-videos/honey-runtz.mp4", poster: "media/label-videos/thumb-honey-runtz.jpg", label: "Honey Runtz" },
  { type: "video", src: "media/label-videos/candy-gushers.mp4", poster: "media/label-videos/thumb-candy-gushers.jpg", label: "Candy Gushers" },
  { type: "video", src: "media/label-videos/jungle-gelato.mp4", poster: "media/label-videos/thumb-jungle-gelato.jpg", label: "Jungle Gelato" },
  { type: "video", src: "media/label-videos/blue-zoup.mp4", poster: "media/label-videos/thumb-blue-zoup.jpg", label: "Blue Zoup" },
  { type: "video", src: "media/label-videos/black-cherry-gelato.mp4", poster: "media/label-videos/thumb-black-cherry-gelato.jpg", label: "Black Cherry Gelato" },
  { type: "video", src: "media/label-videos/adl.mp4", poster: "media/label-videos/thumb-adl.jpg", label: "ADL" },
  { type: "video", src: "media/label-videos/madd-fruit.mp4", poster: "media/label-videos/thumb-madd-fruit.jpg", label: "Madd Fruit" },
  { type: "video", src: "media/label-videos/blue-lobster.mp4", poster: "media/label-videos/thumb-blue-lobster.jpg", label: "Blue Lobster" },
];

const LOT_VIDEOS = [
  { type: "video", src: "media/lots/lot-01.mp4", poster: "media/lots/thumb-lot-01.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-02.mp4", poster: "media/lots/thumb-lot-02.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-03.mp4", poster: "media/lots/thumb-lot-03.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-04.mp4", poster: "media/lots/thumb-lot-04.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-05.mp4", poster: "media/lots/thumb-lot-05.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-06.mp4", poster: "media/lots/thumb-lot-06.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-07.mp4", poster: "media/lots/thumb-lot-07.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-08.mp4", poster: "media/lots/thumb-lot-08.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-09.mp4", poster: "media/lots/thumb-lot-09.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-10.mp4", poster: "media/lots/thumb-lot-10.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-11.mp4", poster: "media/lots/thumb-lot-11.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-12.mp4", poster: "media/lots/thumb-lot-12.jpg", label: "Indoor lot" },
  { type: "video", src: "media/lots/lot-13.mp4", poster: "media/lots/thumb-lot-13.jpg", label: "Indoor lot" },
];

const DEP_INVENTORY_PRICE = "350–450";

const DEP_INVENTORY = [
  { strain: "Mochi", qty: "100+", price: "300", status: "available" },
  { strain: "Gel King", qty: "100+", price: "300", status: "available" },
  { strain: "LCG", qty: "100+", price: "300", status: "available" },
  { strain: "GSC", qty: "100+", price: "325", status: "available" },
  { strain: "Carbon Fiber", qty: "100+", price: "325", status: "available" },
  { strain: "Triple Chocolate Chip", qty: "Ask", price: "325", status: "available" },
  { strain: "Biscotti", qty: "Ask", price: "325", status: "available" },
  { strain: "G41", qty: "Ask", price: "275", status: "available" },
  { strain: "Runtz", qty: "200", price: "425", status: "available" },
  { strain: "PP", qty: "Ask", price: "375", status: "available" },
  { strain: "Ice Cream Cake", qty: "Ask", price: "375", status: "available" },
  { strain: "GK", qty: "Ask", price: "375", status: "available" },
  { strain: "CG", qty: "Ask", price: "375", status: "available" },
  { strain: "G45", qty: "Ask", price: "275", status: "available" },
  { strain: "Atomic Belts", qty: "Next week", status: "next" },
  { strain: "Cheetah Piss", qty: "100", status: "available" },
  { strain: "Donkey Butter", qty: "58", status: "available" },
  { strain: "Dosilato", qty: "15", status: "available" },
  { strain: "Double Runtz", qty: "1", status: "low" },
  { strain: "E85", qty: "152", status: "available" },
  { strain: "GMO Cookies", qty: "4", status: "low" },
  { strain: "GMO #2", qty: "112", status: "available" },
  { strain: "Illumanti", qty: "Next week", status: "next" },
  { strain: "Kept Secret", qty: "Ask", status: "ask" },
  { strain: "Mule Fuel", qty: "11", status: "available" },
  { strain: "OG x Sherb x Dosi x FOF #1", qty: "29", status: "available" },
  { strain: "Pack Muel #4", qty: "34", status: "available" },
  { strain: "Papaya Bomb", qty: "20", status: "available" },
  { strain: "Papaya Cake", qty: "122", status: "available" },
  { strain: "Purple Cream", qty: "11", status: "available" },
  { strain: "Sharpie", qty: "0", status: "out" },
  { strain: "Tropicana Cherry", qty: "50", status: "available" },
  { strain: "Wedding Cake", qty: "57", status: "available" },
  { strain: "Wedding Cake #2", qty: "117", status: "available" },
];

const LIGHT_ASSIST_INVENTORY_PRICE = "500–650";

const LIGHT_ASSIST_INVENTORY = [
  { strain: "White Runtz", qty: "100+", price: "600", status: "available" },
];

const DEP_VIDEOS = [
  { type: "video", strain: "Diesel", src: "media/dep/dep-diesel.mp4", poster: "media/dep/thumb-diesel.jpg", label: "Diesel" },
  { type: "video", strain: "Candy", src: "media/dep/dep-candy.mp4", poster: "media/dep/thumb-candy.jpg", label: "Candy" },
  { type: "video", strain: "Gas", src: "media/dep/dep-gas.mp4", poster: "media/dep/thumb-gas.jpg", label: "Gas" },
  { type: "video", strain: "Guava", src: "media/dep/dep-guava.mp4", poster: "media/dep/thumb-guava.jpg", label: "Guava" },
  { type: "video", strain: "Grape Skittle", src: "media/dep/dep-grape-skittle.mp4", poster: "media/dep/thumb-grape-skittle.jpg", label: "Grape Skittle" },
  { type: "video", strain: "Cotton Candy", src: "media/dep/dep-cotton-candy.mp4", poster: "media/dep/thumb-cotton-candy.jpg", label: "Cotton Candy" },
  { type: "video", strain: "GSC", src: "media/dep/dep-gsc.mp4", poster: "media/dep/thumb-gsc.jpg", label: "GSC" },
  { type: "video", strain: "Carbon Fiber", src: "media/dep/dep-carbon-fiber.mp4", poster: "media/dep/thumb-carbon-fiber.jpg", label: "Carbon Fiber" },
  { type: "video", strain: "G41", src: "media/dep/dep-g41.mp4", poster: "media/dep/thumb-g41.jpg", label: "G41" },
  { type: "video", strain: "Runtz", src: "media/dep/dep-runtz.mp4", poster: "media/dep/thumb-runtz.jpg", label: "Runtz" },
  { type: "video", strain: "G45", src: "media/dep/dep-g45.mp4", poster: "media/dep/thumb-g45.jpg", label: "G45" },
  { type: "video", strain: "Triple Chocolate Chip", src: "media/dep/dep-triple-chocolate-chip.mp4", poster: "media/dep/thumb-triple-chocolate-chip.jpg", label: "Triple Chocolate Chip" },
  { type: "video", strain: "Biscotti", src: "media/dep/dep-biscotti.mp4", poster: "media/dep/thumb-biscotti.jpg", label: "Biscotti" },
  { type: "video", strain: "PP", src: "media/dep/dep-pp.mp4", poster: "media/dep/thumb-pp.jpg", label: "PP" },
  { type: "video", strain: "Ice Cream Cake", src: "media/dep/dep-ice-cream-cake.mp4", poster: "media/dep/thumb-ice-cream-cake.jpg", label: "Ice Cream Cake" },
  { type: "video", strain: "GK", src: "media/dep/dep-gk.mp4", poster: "media/dep/thumb-gk.jpg", label: "GK" },
  { type: "video", strain: "CG", src: "media/dep/dep-cg.mp4", poster: "media/dep/thumb-cg.jpg", label: "CG" },
];

const DEP_PHOTOS = [
  { type: "image", strain: "Mochi", src: "media/dep/inventory/mochi.png", label: "Mochi" },
  { type: "image", strain: "Gel King", src: "media/dep/inventory/gel-king.png", label: "Gel King" },
  { type: "image", strain: "LCG", src: "media/dep/inventory/lcg.png", label: "LCG" },
  { type: "image", strain: "Runtz", src: "media/dep/inventory/runtz.png", label: "Runtz" },
  { type: "image", strain: "Chem x OG", src: "media/dep/chem-x-og/chem-01.png", label: "Chem x OG" },
  { type: "image", strain: "Mile High Slurpie", src: "media/dep/mile-high-slurpie/mhs-01.png", label: "Mile High Slurpie" },
  { type: "image", strain: "Gangster Runtz", src: "media/dep/gangster-runtz/gr-01.png", label: "Gangster Runtz" },
  { type: "image", strain: "Gangster Runtz", src: "media/dep/gangster-runtz/gr-02.png", label: "Gangster Runtz" },
  { type: "image", strain: "Gangster Runtz", src: "media/dep/gangster-runtz/gr-03.png", label: "Gangster Runtz" },
  { type: "image", strain: "Gangster Runtz", src: "media/dep/gangster-runtz/gr-04.png", label: "Gangster Runtz" },
  { type: "image", strain: "Gangster Runtz", src: "media/dep/gangster-runtz/gr-05.png", label: "Gangster Runtz" },
  { type: "image", strain: "Gangster Runtz", src: "media/dep/gangster-runtz/gr-06.png", label: "Gangster Runtz" },
  { type: "image", strain: "Pixie Stix", src: "media/dep/pixie-stix/ps-01.png", label: "Pixie Stix" },
  { type: "image", strain: "Pixie Stix", src: "media/dep/pixie-stix/ps-02.png", label: "Pixie Stix" },
  { type: "image", strain: "Pixie Stix", src: "media/dep/pixie-stix/ps-03.png", label: "Pixie Stix" },
  { type: "image", strain: "Pixie Stix", src: "media/dep/pixie-stix/ps-04.png", label: "Pixie Stix" },
];

const LIGHT_ASSIST_PHOTOS = [
  { type: "image", strain: "White Runtz", src: "media/light-assist/white-runtz.png", label: "White Runtz" },
  { type: "image", strain: "White Runtz", src: "media/light-assist/la-01.png", label: "Light assist" },
  { type: "image", strain: "White Runtz", src: "media/light-assist/la-02.png", label: "Light assist" },
  { type: "image", strain: "White Runtz", src: "media/light-assist/la-03.png", label: "Light assist" },
  { type: "image", strain: "White Runtz", src: "media/light-assist/la-04.png", label: "Light assist" },
  { type: "image", strain: "White Runtz", src: "media/light-assist/la-05.png", label: "Light assist" },
];

const DEP_STRAIN_MEDIA = buildStrainMediaMap([...DEP_VIDEOS, ...DEP_PHOTOS]);
const LIGHT_ASSIST_STRAIN_MEDIA = buildStrainMediaMap(LIGHT_ASSIST_PHOTOS);

const MEDIA = [
  ...DEP_VIDEOS,
  ...DEP_PHOTOS,
  ...LIGHT_ASSIST_PHOTOS,
  { type: "video", src: "media/indoor/lcg-indoor-01.mp4", poster: "media/indoor/thumb-lcg-01.jpg", label: "LCG Indoor" },
  { type: "video", src: "media/indoor/lcg-indoor-02.mp4", poster: "media/indoor/thumb-lcg-02.jpg", label: "LCG Indoor" },
  { type: "video", src: "media/mochi/asian-mochi-01.mp4", poster: "media/mochi/thumb-mochi-01.jpg", label: "Asian Mochi" },
  { type: "video", src: "media/mochi/asian-mochi-02.mp4", poster: "media/mochi/thumb-mochi-02.jpg", label: "Asian Mochi" },
  { type: "video", src: "media/highend-candy/hc-01.mp4", poster: "media/highend-candy/thumb-hc-01.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-02.mp4", poster: "media/highend-candy/thumb-hc-02.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-03.mp4", poster: "media/highend-candy/thumb-hc-03.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-04.mp4", poster: "media/highend-candy/thumb-hc-04.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-05.mp4", poster: "media/highend-candy/thumb-hc-05.jpg", label: "High-end candy" },
  ...LOT_VIDEOS,
  ...LABEL_VIDEOS,
  ...FLOWER_MEDIA,
  { type: "image", src: "media/indoor/in-01.png", label: "Indoor" },
  { type: "image", src: "media/indoor/in-02.png", label: "Indoor" },
  { type: "image", src: "media/indoor/in-03.png", label: "Indoor" },
  ...LABEL_MEDIA,
];

function forceMute(video) {
  video.muted = true;
  video.defaultMuted = true;
  video.volume = 0;
  video.setAttribute("muted", "");
}

function muteAllVideos() {
  document.querySelectorAll("video").forEach((video) => {
    forceMute(video);
    if (video.dataset.muteBound === "1") return;
    video.dataset.muteBound = "1";
    video.addEventListener("play", () => forceMute(video));
    video.addEventListener("volumechange", () => {
      if (!video.muted || video.volume > 0) forceMute(video);
    });
    video.addEventListener("loadeddata", () => forceMute(video));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  muteAllVideos();
});


function formatInventoryQty(qty) {
  if (!qty || qty === "Ask") return "Ask";
  if (qty === "Next week") return "Next week";
  if (qty === "0") return "Sold out";
  if (String(qty).includes("+")) return `${qty} lbs`;
  return `${qty} lbs`;
}

function buildStrainMediaMap(items) {
  const map = {};
  items.forEach((item) => {
    const key = item.strain || item.label;
    if (!key) return;
    if (!map[key]) map[key] = [];
    map[key].push(item);
  });
  return map;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function showStrainPreview(previewId, item, mediaMap, getPrice, waSuffix) {
  const root = document.getElementById(previewId);
  if (!root || !item) return;

  const placeholder = root.querySelector(".strain-preview__placeholder");
  const panel = root.querySelector(".strain-preview__panel");
  const nameEl = root.querySelector(".strain-preview__name");
  const metaEl = root.querySelector(".strain-preview__meta");
  const mediaEl = root.querySelector(".strain-preview__media");
  const emptyEl = root.querySelector(".strain-preview__empty");
  const waEl = root.querySelector(".strain-preview__wa");
  if (!placeholder || !panel || !nameEl || !metaEl || !mediaEl || !emptyEl || !waEl) return;

  const media = mediaMap[item.strain] || [];
  const price = getPrice(item);
  const waText = encodeURIComponent(`Hi — ${item.strain} ${waSuffix}`);

  placeholder.hidden = true;
  panel.hidden = false;
  nameEl.textContent = item.strain;
  metaEl.textContent = `${formatInventoryQty(item.qty)} · ${price}`;
  waEl.href = `https://wa.me/19165507310?text=${waText}`;

  if (media.length) {
    emptyEl.hidden = true;
    mediaEl.hidden = false;
    mediaEl.innerHTML = media.map(renderFigure).join("");
    muteAllVideos();
    bindPreviewFigures(mediaEl);
  } else {
    mediaEl.hidden = true;
    mediaEl.innerHTML = "";
    emptyEl.hidden = false;
  }

  if (window.matchMedia("(max-width: 900px)").matches) {
    root.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function selectInventoryStrain(body, strain, items, previewId, mediaMap, getPrice, waSuffix) {
  const item = items.find((entry) => entry.strain === strain);
  if (!item || !previewId) return;

  body.querySelectorAll("tr[data-strain]").forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.strain === strain);
  });
  showStrainPreview(previewId, item, mediaMap, getPrice, waSuffix);
}

function bindPreviewFigures(container) {
  container.querySelectorAll("figure").forEach((figure) => {
    if (figure.dataset.zoomBound === "1") return;
    figure.dataset.zoomBound = "1";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "zoom-btn";
    btn.textContent = "Enlarge";
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openLightbox(figure);
    });
    figure.appendChild(btn);

    const img = figure.querySelector("img");
    if (img) {
      img.addEventListener("click", () => openLightbox(figure));
    }
  });
}

function renderInventoryTable(bodyId, items, options = {}) {
  const body = document.getElementById(bodyId);
  if (!body) return;

  const {
    getPrice,
    waSuffix = "from Cali Ticket",
    mediaMap = {},
    previewId,
  } = options;

  const sorted = [...items].sort((a, b) => {
    const rank = { available: 0, low: 1, next: 2, ask: 3, out: 4 };
    const diff = (rank[a.status] ?? 5) - (rank[b.status] ?? 5);
    if (diff !== 0) return diff;
    const aNum = Number(String(a.qty).replace("+", ""));
    const bNum = Number(String(b.qty).replace("+", ""));
    if (!Number.isNaN(aNum) && !Number.isNaN(bNum)) return bNum - aNum;
    return a.strain.localeCompare(b.strain);
  });

  body.innerHTML = sorted
    .map((item) => {
      const rowClass =
        item.status === "out"
          ? "is-out"
          : item.status === "next"
            ? "is-next"
            : item.status === "low"
              ? "is-low"
              : item.status === "ask"
                ? "is-ask"
                : "";
      const waText = encodeURIComponent(`Hi — ${item.strain} ${waSuffix}`);
      const hasMedia = Boolean(mediaMap[item.strain]?.length);
      return `<tr class="${rowClass}" data-strain="${escapeHtml(item.strain)}">
        <th scope="row">
          <button type="button" class="inventory-strain${hasMedia ? " inventory-strain--has-media" : ""}" data-strain="${escapeHtml(item.strain)}">${escapeHtml(item.strain)}</button>
        </th>
        <td>${formatInventoryQty(item.qty)}</td>
        <td>${getPrice(item)}</td>
        <td>
          <a class="inventory-wa" href="https://wa.me/19165507310?text=${waText}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ${escapeHtml(item.strain)}">WA</a>
        </td>
      </tr>`;
    })
    .join("");

  body.querySelectorAll(".inventory-strain").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      selectInventoryStrain(body, btn.dataset.strain, sorted, previewId, mediaMap, getPrice, waSuffix);
    });
  });

  body.querySelectorAll("tr[data-strain]").forEach((row) => {
    row.addEventListener("click", (event) => {
      if (event.target.closest(".inventory-wa")) return;
      selectInventoryStrain(body, row.dataset.strain, sorted, previewId, mediaMap, getPrice, waSuffix);
    });
  });
}

function renderDepInventory() {
  renderInventoryTable("dep-inventory", DEP_INVENTORY, {
    getPrice: (item) => item.price ?? DEP_INVENTORY_PRICE,
    waSuffix: "dep from Cali Ticket",
    mediaMap: DEP_STRAIN_MEDIA,
    previewId: "dep-strain-preview",
  });
}

function renderLightAssistInventory() {
  renderInventoryTable("light-assist-inventory", LIGHT_ASSIST_INVENTORY, {
    getPrice: (item) => item.price ?? LIGHT_ASSIST_INVENTORY_PRICE,
    waSuffix: "light assist from Cali Ticket",
    mediaMap: LIGHT_ASSIST_STRAIN_MEDIA,
    previewId: "light-assist-strain-preview",
  });
}

function renderStrainLists() {
  const list = document.getElementById("strain-list");
  if (!list) return;
  list.innerHTML = STRAINS.map((name) => `<li>${name}</li>`).join("");
}

function renderFigure(item) {
  if (item.type === "video") {
    return `<figure>
      <video src="${item.src}" poster="${item.poster || ""}" controls playsinline muted defaultMuted preload="none"></video>
      <figcaption>${item.label}</figcaption>
    </figure>`;
  }
  return `<figure>
    <img src="${item.src}" alt="${item.label}" loading="lazy" />
    <figcaption>${item.label}</figcaption>
  </figure>`;
}

function renderLabels() {
  const grid = document.getElementById("label-grid");
  if (!grid) return;
  grid.innerHTML = LABEL_MEDIA.map(renderFigure).join("");
}

function renderFlowerMedia() {
  const grid = document.getElementById("flower-grid");
  if (!grid) return;
  grid.innerHTML = FLOWER_MEDIA.map(renderFigure).join("");
}

function renderLabelVideos() {
  const grid = document.getElementById("label-video-grid");
  if (!grid) return;
  grid.innerHTML = LABEL_VIDEOS.map(renderFigure).join("");
}

function renderLotVideos() {
  const grid = document.getElementById("lot-video-grid");
  if (!grid) return;
  grid.innerHTML = LOT_VIDEOS.map(renderFigure).join("");
}

function renderMedia() {
  const grid = document.getElementById("media-grid");
  if (!grid) return;
  grid.innerHTML = MEDIA.map((item) => {
    if (item.type === "video") {
      return `<figure>
        <video src="${item.src}" poster="${item.poster || ""}" controls playsinline muted defaultMuted preload="none"></video>
        <figcaption>${item.label}</figcaption>
      </figure>`;
    }
    return `<figure>
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <figcaption>${item.label}</figcaption>
    </figure>`;
  }).join("");
  muteAllVideos();
  initLightbox();
}

function openLightbox(figure) {
  const lightbox = document.getElementById("lightbox");
  const stage = document.getElementById("lightbox-stage");
  if (!lightbox || !stage) return;

  const video = figure.querySelector("video");
  const img = figure.querySelector("img");
  const caption = figure.querySelector("figcaption");
  stage.innerHTML = "";

  if (video) {
    const clone = document.createElement("video");
    clone.src = video.currentSrc || video.src;
    if (video.poster) clone.poster = video.poster;
    clone.controls = true;
    clone.playsInline = true;
    clone.muted = true;
    clone.defaultMuted = true;
    clone.volume = 0;
    clone.setAttribute("muted", "");
    clone.autoplay = true;
    stage.appendChild(clone);
    forceMute(clone);
    clone.addEventListener("play", () => forceMute(clone));
    clone.addEventListener("volumechange", () => {
      if (!clone.muted || clone.volume > 0) forceMute(clone);
    });
  } else if (img) {
    const clone = document.createElement("img");
    clone.src = img.currentSrc || img.src;
    clone.alt = img.alt || (caption ? caption.textContent : "");
    stage.appendChild(clone);
  } else {
    return;
  }

  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const stage = document.getElementById("lightbox-stage");
  if (!lightbox || !stage) return;
  stage.querySelectorAll("video").forEach((video) => {
    video.pause();
  });
  stage.innerHTML = "";
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  if (!lightbox || lightbox.dataset.ready === "1") {
    // still (re)bind figures after media render
  } else {
    lightbox.dataset.ready = "1";
    closeBtn?.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  document
    .querySelectorAll(".lane__media figure, .media__grid figure, .strain-preview__media figure")
    .forEach((figure) => {
      if (figure.dataset.zoomBound === "1") return;
      figure.dataset.zoomBound = "1";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "zoom-btn";
      btn.textContent = "Enlarge";
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        openLightbox(figure);
      });
      figure.appendChild(btn);

      const img = figure.querySelector("img");
      if (img) {
        img.addEventListener("click", () => openLightbox(figure));
      }
    });
}

function initGate() {
  const gate = document.getElementById("gate");
  const confirm = document.getElementById("gate-confirm");
  const enter = document.getElementById("gate-enter");
  if (!gate || !confirm || !enter) return;

  if (sessionStorage.getItem("caliTicketGate") === "1") {
    gate.classList.add("is-open");
    return;
  }

  confirm.addEventListener("change", () => {
    enter.disabled = !confirm.checked;
  });
  enter.addEventListener("click", () => {
    sessionStorage.setItem("caliTicketGate", "1");
    gate.classList.add("is-open");
  });
}

initGate();
renderDepInventory();
renderLightAssistInventory();
renderStrainLists();
renderLotVideos();
renderLabelVideos();
renderFlowerMedia();
renderLabels();
renderMedia();
muteAllVideos();
initLightbox();
