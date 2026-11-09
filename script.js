
const effects = document.getElementById("effects");

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  document.body.classList.remove("raining");
  effects.innerHTML = "";

  window.scrollTo(0, 0);
}

function sayYes() {
  showPage("celebration");
  celebrate();
}

function celebrate() {
  const colors = [
    "#ff5c8a",
    "#ffb3c7",
    "#ffffff",
    "#ffd166",
    "#d96b91"
  ];

  // Confetti
  for (let i = 0; i < 150; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti";

    piece.style.left = Math.random() * 100 + "%";

    piece.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    piece.style.animationDuration =
      2 + Math.random() * 4 + "s";

    piece.style.animationDelay =
      Math.random() * 2 + "s";

    effects.appendChild(piece);

    setTimeout(() => piece.remove(), 8500);
  }

  // Hearts
  for (let i = 0; i < 55; i++) {
    const heart = document.createElement("div");

    heart.className = "falling-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
      15 + Math.random() * 30 + "px";

    heart.style.animationDuration =
      3 + Math.random() * 4 + "s";

    heart.style.animationDelay =
      Math.random() * 2 + "s";

    effects.appendChild(heart);

    setTimeout(() => heart.remove(), 9500);
  }
}

function sayNo() {
  document.body.classList.add("raining");

  document.getElementById("no-message").textContent =
    "oki u literally suck </3";

  effects.innerHTML = "";

  // Rain
  for (let i = 0; i < 180; i++) {
    const drop = document.createElement("div");

    drop.className = "raindrop";

    drop.style.left = Math.random() * 100 + "%";

    drop.style.animationDuration =
      0.5 + Math.random() * 0.8 + "s";

    drop.style.animationDelay =
      Math.random() * 2 + "s";

    effects.appendChild(drop);

    setTimeout(() => drop.remove(), 4500);
  }

  setTimeout(() => {
    document.body.classList.remove("raining");
  }, 5000);
}
