const WHATSAPP_NUMBER = "5354066204";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const installButton = document.querySelector("#installButton");
const form = document.querySelector("#businessForm");
const copyButton = document.querySelector("#copyRequest");
const formStatus = document.querySelector("#formStatus");
const bookViewport = document.querySelector("#bookViewport");
const bookPages = Array.from(document.querySelectorAll(".book-page"));
const bookPrev = document.querySelector("#bookPrev");
const bookNext = document.querySelector("#bookNext");
const bookDots = document.querySelector("#bookDots");
const bookCounter = document.querySelector("#bookCounter");
let deferredPrompt = null;
let currentBookPage = 0;
let bookTouchStart = 0;

navToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks?.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const basePath = location.pathname.includes("/HouseofRservasRoma") ? "/HouseofRservasRoma/" : "./";
    navigator.serviceWorker.register(`${basePath}sw.js`).catch(console.warn);
  });
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.hidden = false;
});

installButton?.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.hidden = true;
});

function renderBookDots() {
  if (!bookDots || bookPages.length === 0) return;
  bookDots.innerHTML = "";
  bookPages.forEach((page, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "book-dot";
    dot.setAttribute("aria-label", `Ir a ${page.dataset.title || `página ${index + 1}`}`);
    dot.addEventListener("click", () => showBookPage(index));
    bookDots.appendChild(dot);
  });
}

function showBookPage(index) {
  if (bookPages.length === 0) return;
  currentBookPage = (index + bookPages.length) % bookPages.length;
  bookPages.forEach((page, pageIndex) => {
    page.classList.toggle("active", pageIndex === currentBookPage);
  });

  const dots = Array.from(document.querySelectorAll(".book-dot"));
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentBookPage);
    dot.setAttribute("aria-current", dotIndex === currentBookPage ? "page" : "false");
  });

  if (bookCounter) {
    bookCounter.textContent = `Página ${currentBookPage + 1} de ${bookPages.length}`;
  }
}

bookPrev?.addEventListener("click", () => showBookPage(currentBookPage - 1));
bookNext?.addEventListener("click", () => showBookPage(currentBookPage + 1));

bookViewport?.addEventListener("touchstart", (event) => {
  bookTouchStart = event.touches[0]?.clientX || 0;
}, { passive: true });

bookViewport?.addEventListener("touchend", (event) => {
  const end = event.changedTouches[0]?.clientX || 0;
  const distance = end - bookTouchStart;
  if (Math.abs(distance) < 48) return;
  showBookPage(currentBookPage + (distance < 0 ? 1 : -1));
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (!document.activeElement || !bookViewport) return;
  const guideVisible = location.hash === "#guia" || bookViewport.getBoundingClientRect().top < window.innerHeight;
  if (!guideVisible) return;
  if (event.key === "ArrowLeft") showBookPage(currentBookPage - 1);
  if (event.key === "ArrowRight") showBookPage(currentBookPage + 1);
});

renderBookDots();
showBookPage(0);

function buildRequestText() {
  const data = new FormData(form);
  const lines = [
    "Solicitud para crear cliente en RservasRoma",
    "",
    `Nombre del salón: ${data.get("salon") || ""}`,
    `WhatsApp: ${data.get("whatsapp") || ""}`,
    `Correo electrónico: ${data.get("email") || ""}`
  ];

  return lines.join("\n");
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const text = buildRequestText();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  formStatus.textContent = "Abriendo WhatsApp con la solicitud preparada.";
  window.open(url, "_blank", "noopener,noreferrer");
});

copyButton?.addEventListener("click", async () => {
  const text = buildRequestText();
  try {
    await navigator.clipboard.writeText(text);
    formStatus.textContent = "Solicitud copiada.";
  } catch {
    formStatus.textContent = "No se pudo copiar automáticamente. Selecciona el texto generado en WhatsApp.";
  }
});

