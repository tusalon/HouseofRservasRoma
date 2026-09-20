const WHATSAPP_NUMBER = "15154650340";

// Supabase: la solicitud se guarda en la tabla "solicitudes_alta" (ver
// sql-solicitudes-alta.sql) ademas de abrir WhatsApp. Antes, si la salonera no le
// daba "enviar" en WhatsApp, el lead se perdia entero; asi queda registrado y
// el panel lo puede dar de alta sin volver a teclear nada.
// La clave anon es publica a proposito: las politicas RLS de la tabla solo
// permiten INSERT, nadie puede leer las solicitudes con ella.
const SUPABASE_URL = "https://zorhclhvykikaachfrmp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvcmhjbGh2eWtpa2FhY2hmcm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxNDQzMzUsImV4cCI6MjA4NzcyMDMzNX0.reauF3UfNTFJFZ3Mnzf8ctYH1d5p7C3msi7AvYJUaos";

// Guarda la solicitud. No se espera (await) antes de abrir WhatsApp: el
// navegador bloquea window.open si pierde el gesto del usuario, asi que la
// peticion sale en paralelo con keepalive para que llegue aunque la pestana
// cambie de foco.
window.guardarSolicitudRservas = function (datos) {
  return fetch(`${SUPABASE_URL}/rest/v1/solicitudes_alta`, {
    method: "POST",
    keepalive: true,
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      nombre_salon: datos.salon,
      whatsapp: datos.whatsapp,
      email: datos.email,
      plataforma: String(datos.plataforma || "").toLowerCase() || null,
      origen: datos.origen || "landing"
    })
  });
};

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
  // alta.html tambien carga este script y no tiene el boton de instalar:
  // sin la guarda, Chrome lanzaba un TypeError en esa pagina al disparar
  // beforeinstallprompt. El handler del clic de abajo ya usaba ?.
  if (installButton) installButton.hidden = false;
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
    "Solicitud para crear cliente en RservasRoma",
    "",
    `Nombre del salón: ${data.get("salon") || ""}`,
    `WhatsApp: ${data.get("whatsapp") || ""}`,
    `Correo electrónico: ${data.get("email") || ""}`,
    `Sistema operativo: ${data.get("plataforma") || ""}`
  ];

  return lines.join("\n");
}

const submitButton = form?.querySelector('button[type="submit"]');

function setStatus(message, kind) {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.classList.remove("is-ok", "is-err");
  if (kind) formStatus.classList.add(kind);
}

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  // Con conexion lenta el boton parece muerto y se toca dos veces: eso creaba
  // dos filas para el mismo salon en solicitudes_alta.
  if (form.dataset.sending === "1") return;

  const data = new FormData(form);
  const text = buildRequestText();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const submitLabel = submitButton?.textContent;

  form.dataset.sending = "1";
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando…";
  }
  setStatus("Abriendo WhatsApp…");

  // Primero se registra (sin esperar) y despues se abre WhatsApp en el mismo
  // gesto del click, que es lo que el navegador exige para no bloquearlo.
  const guardado = window.guardarSolicitudRservas({
    salon: data.get("salon"),
    whatsapp: data.get("whatsapp"),
    email: data.get("email"),
    plataforma: data.get("plataforma"),
    origen: "landing"
  });

  window.open(url, "_blank", "noopener,noreferrer");

  guardado
    .then((response) => {
      // fetch resuelve tambien con 4xx y 5xx, asi que hay que mirar el estado:
      // el catch anterior solo veia caidas de red.
      if (!response.ok) throw new Error(String(response.status));
      setStatus("Solicitud registrada. Si WhatsApp no se abrió, toca Copiar y escríbenos.", "is-ok");
    })
    .catch(() => {
      // Antes esto era un catch vacio y el mensaje decia "Solicitud registrada"
      // aunque no se hubiera guardado nada. Justo el caso que la tabla existe
      // para cubrir: si ella no envia el WhatsApp, el lead se pierde de verdad.
      setStatus("No pudimos guardar la solicitud. Envía el mensaje de WhatsApp que se abrió, o toca Copiar y escríbenos.", "is-err");
    })
    .finally(() => {
      delete form.dataset.sending;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitLabel;
      }
    });
});

copyButton?.addEventListener("click", async () => {
  const text = buildRequestText();
  try {
    await navigator.clipboard.writeText(text);
    setStatus("Solicitud copiada. Pégala en WhatsApp y te respondemos.", "is-ok");
  } catch {
    setStatus("No se pudo copiar. Selecciona el texto a mano y envíanoslo por WhatsApp.", "is-err");
  }
});

/* ── SCROLL REVEAL ── */
const revealTargets = document.querySelectorAll(".section:not(.hero)");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

/* ── PAUSA DEL MARQUEE ── */
// La franja de datos se mueve en bucle y la unica pausa era :hover, que en un
// movil no existe. WCAG 2.2.2 (nivel A) exige poder pararla.
const marquee = document.querySelector("#marquee");
const marqueePause = document.querySelector("#marqueePause");

marqueePause?.addEventListener("click", () => {
  const paused = marquee.dataset.motion === "paused";
  if (paused) {
    delete marquee.dataset.motion;
  } else {
    marquee.dataset.motion = "paused";
  }
  marqueePause.setAttribute("aria-pressed", String(!paused));
  marqueePause.textContent = paused ? "Pausar el movimiento" : "Reanudar el movimiento";
});

/* ── COUNT-UP NUMBERS ── */
const countEls = document.querySelectorAll(".countup");
const quietMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10) || 0;
  // Quien pide menos movimiento ve la cifra final, no una cuenta subiendo.
  if (quietMotion) {
    el.textContent = target;
    return;
  }
  const duration = 1200;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
if (countEls.length && "IntersectionObserver" in window) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  countEls.forEach((el) => countObserver.observe(el));
}

