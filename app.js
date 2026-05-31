const WHATSAPP_NUMBER = "5353066647";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const installButton = document.querySelector("#installButton");
const form = document.querySelector("#businessForm");
const copyButton = document.querySelector("#copyRequest");
const formStatus = document.querySelector("#formStatus");
let deferredPrompt = null;

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

function buildRequestText() {
  const data = new FormData(form);
  const lines = [
    "Solicitud para crear negocio en RservasRoma",
    "",
    `Negocio: ${data.get("negocio") || ""}`,
    `Tipo: ${data.get("tipo") || ""}`,
    `WhatsApp: ${data.get("whatsapp") || ""}`,
    `Instagram: ${data.get("instagram") || ""}`,
    `Servicios: ${data.get("servicios") || ""}`,
    `Profesionales: ${data.get("profesionales") || ""}`,
    `Horarios: ${data.get("horarios") || ""}`,
    `Anticipo: ${data.get("anticipo") || ""}`,
    `Plan de interes: ${data.get("plan") || ""}`,
    `Notas: ${data.get("notas") || ""}`
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
    formStatus.textContent = "No se pudo copiar automaticamente. Selecciona el texto generado en WhatsApp.";
  }
});
