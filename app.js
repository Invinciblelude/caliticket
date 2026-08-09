const STRAINS = [
  "Lemon Bitters 369",
  "Blue Nerdz",
  "Blue Runtz 565",
  "Blue Taffeez 266",
  "Blue Zlushie",
  "Gelato #33 266",
  "GG4 TC2",
  "GG4 TC1",
  "Aries",
  "Ice Cream Cake TC1",
  "Illemonati 565",
  "Lemon Cherry Fuel",
  "Lemon Cherry Gelato 565",
  "Lilac Diesel TC2",
  "Malted Shake 369",
  "Octane",
  "Oreoz",
  "Pez",
  "Rainbow Runtz 565",
  "Runtz x Jealousy",
  "Runtz",
  "Sherpa 369",
  "Sugar Tarts TC1",
  "WiFi OG",
  "Blue Andeze",
  "ADL",
  "LCG Bx1",
  "Blue Lobster",
  "LCG X BX1",
  "Blue Amneze",
  "Espresso Martini",
  "Blue Zoap",
  "Candy Gusher",
  "Jack Herer",
  "Jungle Gelato",
  "Royal Runtz",
  "Gary Cherry",
  "LCG Zkittles",
  "Gas Nana",
  "PM X RS11",
  "Pineapple Glue",
  "Gruntz",
  "Marmalade",
  "Candy Gelato",
  "Golden Ticket",
  "LFG",
  "Bolo Runtz",
  "Toad Venom",
  "Mochi",
  "Crack Head",
  "Black Cherry Gelato",
  "Lips Mackerz",
  "Pink Runtz",
  "Blue Neroz",
];

const MEDIA = [
  { type: "video", src: "media/dep/dep-diesel.mp4", poster: "media/dep/thumb-diesel.jpg", label: "Diesel Dep" },
  { type: "video", src: "media/dep/dep-candy.mp4", poster: "media/dep/thumb-candy.jpg", label: "Candy Dep" },
  { type: "video", src: "media/dep/dep-gas.mp4", poster: "media/dep/thumb-gas.jpg", label: "Gas Dep" },
  { type: "image", src: "media/light-assist/la-01.png", label: "Light assist" },
  { type: "image", src: "media/light-assist/la-02.png", label: "Light assist" },
  { type: "image", src: "media/light-assist/la-03.png", label: "Light assist" },
  { type: "image", src: "media/light-assist/la-04.png", label: "Light assist" },
  { type: "image", src: "media/light-assist/la-05.png", label: "Light assist" },
  { type: "video", src: "media/indoor/lcg-indoor-01.mp4", poster: "media/indoor/thumb-lcg-01.jpg", label: "LCG Indoor" },
  { type: "video", src: "media/indoor/lcg-indoor-02.mp4", poster: "media/indoor/thumb-lcg-02.jpg", label: "LCG Indoor" },
  { type: "video", src: "media/mochi/asian-mochi-01.mp4", poster: "media/mochi/thumb-mochi-01.jpg", label: "Asian Mochi" },
  { type: "video", src: "media/mochi/asian-mochi-02.mp4", poster: "media/mochi/thumb-mochi-02.jpg", label: "Asian Mochi" },
  { type: "video", src: "media/highend-candy/hc-01.mp4", poster: "media/highend-candy/thumb-hc-01.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-02.mp4", poster: "media/highend-candy/thumb-hc-02.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-03.mp4", poster: "media/highend-candy/thumb-hc-03.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-04.mp4", poster: "media/highend-candy/thumb-hc-04.jpg", label: "High-end candy" },
  { type: "video", src: "media/highend-candy/hc-05.mp4", poster: "media/highend-candy/thumb-hc-05.jpg", label: "High-end candy" },
  { type: "image", src: "media/indoor/in-01.png", label: "Indoor" },
  { type: "image", src: "media/indoor/in-02.png", label: "Indoor" },
  { type: "image", src: "media/indoor/in-03.png", label: "Indoor" },
  { type: "image", src: "media/highend/label-blue-andeze.png", label: "Blue Andeze" },
  { type: "image", src: "media/highend/label-adl.png", label: "ADL" },
  { type: "image", src: "media/highend/label-lcg-bx1.png", label: "LCG Bx1" },
  { type: "image", src: "media/highend/label-blue-lobster.png", label: "Blue Lobster" },
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


function renderStrainLists() {
  const list = document.getElementById("strain-list");
  if (!list) return;
  list.innerHTML = STRAINS.map((name) => `<li>${name}</li>`).join("");
}

function renderMedia() {
  const grid = document.getElementById("media-grid");
  if (!grid) return;
  grid.innerHTML = MEDIA.map((item) => {
    if (item.type === "video") {
      return `<figure>
        <video src="${item.src}" poster="${item.poster || ""}" controls playsinline muted defaultMuted preload="metadata"></video>
        <figcaption>${item.label}</figcaption>
      </figure>`;
    }
    return `<figure>
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <figcaption>${item.label}</figcaption>
    </figure>`;
  }).join("");
  muteAllVideos();
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
renderStrainLists();
renderMedia();
muteAllVideos();
