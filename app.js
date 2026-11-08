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
      origen: datos.origen || "landing",
      nota: datos.nota || null
    })
  });
};

// Une el pais elegido con el numero: "+53 55512345". Si ella ya escribio el "+" o
// el "00" se respeta lo que puso; si repitio el codigo sin "+" (53 55512345) se quita
// para que no quede duplicado. Asi la tabla guarda siempre el codigo y el panel no adivina.
const LARGO_NACIONAL = { "53": 8, "1": 10, "34": 9, "52": 10 };
window.telefonoConPais = function (codigo, valor) {
  const crudo = String(valor || "").trim();
  if (/^(\+|00)/.test(crudo)) return "+" + crudo.replace(/^(\+|00)/, "").replace(/\D/g, "");
  let solo = crudo.replace(/\D/g, "");
  if (!solo) return "";
  if (!/^\d+$/.test(codigo)) return crudo; // "Otro país" sin "+": se deja tal cual, no se inventa un código
  if (solo.startsWith(codigo) && solo.length === codigo.length + (LARGO_NACIONAL[codigo] || -99)) solo = solo.slice(codigo.length);
  return `+${codigo} ${solo}`;
};
// "Otro pais": sin codigo el numero no sirve, asi que el navegador exige que empiece por "+".
window.activarSelectorPais = function (select, input) {
  if (!select || !input) return;
  const ajustar = () => {
    const otro = select.value === "otro";
    input.placeholder = otro ? "+593 99 123 4567" : select.value === "53" ? "5 123 4567" : "Tu número";
    if (otro) { input.pattern = "\\+.*"; input.title = "Escribe el número con su código de país, por ejemplo +593…"; }
    else { input.removeAttribute("pattern"); input.removeAttribute("title"); }
  };
  select.addEventListener("change", ajustar);
  ajustar();
};
window.activarSelectorPais(document.querySelector("#pais"), document.querySelector("#whatsapp"));

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

// De donde viene la solicitud y para que tipo de negocio es. No pide nada mas a la
// visitante: sale de la direccion (?fuente=ig-comentario) y del boton "Quiero mi app"
// de cada rubro. Va en la columna "nota" de solicitudes_alta (sin tocar la tabla).
const limpiarEtiqueta = (valor) => String(valor || "").toLowerCase().replace(/[^a-z0-9áéíóúñ _-]/g, "").trim().slice(0, 40);
const parametros = new URLSearchParams(location.search);
const fuenteSolicitud = limpiarEtiqueta(parametros.get("fuente") || parametros.get("utm_source") || parametros.get("ref"));
const rubroInput = document.querySelector("#rubro");
if (rubroInput) rubroInput.value = limpiarEtiqueta(parametros.get("rubro"));

document.querySelectorAll("[data-rubro]").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    if (rubroInput) rubroInput.value = enlace.dataset.rubro;
  });
});

function notaSolicitud() {
  const partes = [];
  if (fuenteSolicitud) partes.push(`fuente=${fuenteSolicitud}`);
  if (rubroInput?.value) partes.push(`rubro=${rubroInput.value}`);
  return partes.length ? `web | ${partes.join(" | ")}` : null;
}

function buildRequestText() {
  const data = new FormData(form);
  const lines = [
    "Solicitud para crear cliente en RservasRoma",
    "",
    `Nombre del salón: ${data.get("salon") || ""}`,
    `WhatsApp: ${window.telefonoConPais(data.get("pais") || "53", data.get("whatsapp"))}`,
    `Correo electrónico: ${data.get("email") || ""}`,
    `Sistema operativo: ${data.get("plataforma") || ""}`
  ];
  if (data.get("rubro")) lines.push(`Tipo de negocio: ${data.get("rubro")}`);

  return lines.join("\n");
}

// Tras guardar bien la solicitud, el formulario cede su lugar a los siguientes pasos.
const thanks = document.querySelector("#thanks");
const thanksWhatsapp = document.querySelector("#thanksWhatsapp");
function mostrarGracias(urlWhatsapp) {
  if (!thanks || !form) return;
  if (thanksWhatsapp) thanksWhatsapp.href = urlWhatsapp;
  form.hidden = true;
  thanks.hidden = false;
  thanks.scrollIntoView({ behavior: quietMotionForm ? "auto" : "smooth", block: "center" });
}
const quietMotionForm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const submitButton = form?.querySelector('button[type="submit"]');
const submitLabel = submitButton?.textContent;

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
  if (submitButton?.disabled) return;

  const data = new FormData(form);
  const text = buildRequestText();
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Enviando…";
  }
  setStatus("Abriendo WhatsApp…");

  // Primero se registra (sin esperar) y despues se abre WhatsApp en el mismo
  // gesto del click, que es lo que el navegador exige para no bloquearlo.
  const guardado = window.guardarSolicitudRservas({
    salon: data.get("salon"),
    whatsapp: window.telefonoConPais(data.get("pais") || "53", data.get("whatsapp")),
    email: data.get("email"),
    plataforma: data.get("plataforma"),
    origen: "landing",
    nota: notaSolicitud()
  });

  window.open(url, "_blank", "noopener,noreferrer");

  guardado
    .then((response) => {
      // fetch resuelve tambien con 4xx y 5xx, asi que hay que mirar el estado:
      // el catch anterior solo veia caidas de red.
      if (!response.ok) throw new Error(String(response.status));
      setStatus("Solicitud registrada. Si WhatsApp no se abrió, toca Copiar y escríbenos.", "is-ok");
      mostrarGracias(url);
    })
    .catch(() => {
      // Antes esto era un catch vacio y el mensaje decia "Solicitud registrada"
      // aunque no se hubiera guardado nada. Justo el caso que la tabla existe
      // para cubrir: si ella no envia el WhatsApp, el lead se pierde de verdad.
      setStatus("No pudimos guardar la solicitud. Envía el mensaje de WhatsApp que se abrió, o toca Copiar y escríbenos.", "is-err");
    })
    .finally(() => {
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

/* ── MAQUETA DE RESERVA (hero) ── */
// Es un ejemplo dibujado, no la app real: deja probar elegir servicio, dia y hora.
// Cambiar cualquier opcion borra el aviso de "reserva enviada".
const demo = document.querySelector("#demo");
const demoConfirm = document.querySelector("#demoConfirm");
const demoDone = document.querySelector("#demoDone");

function resetDemo() {
  if (!demoConfirm) return;
  demoConfirm.removeAttribute("data-done");
  demoConfirm.textContent = "Reservar";
  if (demoDone) demoDone.textContent = "";
}

demo?.addEventListener("click", (event) => {
  const opcion = event.target.closest("button[data-pick]");
  if (!opcion || opcion.disabled) return;
  demo.querySelectorAll(`[data-pick="${opcion.dataset.pick}"]`).forEach((boton) => {
    boton.setAttribute("aria-pressed", String(boton === opcion));
  });
  resetDemo();
});

demoConfirm?.addEventListener("click", () => {
  demoConfirm.setAttribute("data-done", "");
  demoConfirm.textContent = "Reserva enviada";
  if (demoDone) demoDone.textContent = "Te avisamos 24 h y 1 h antes de tu cita.";
});

/* ── MOVIMIENTO ── */
// Patron tomado de aliciasnailstudio.com: aparicion escalonada al entrar en pantalla,
// contadores que suben y la maqueta de reserva que se juega sola una vez.
// Todo depende de <html class="anim"> (lo pone la cabecera si no hay prefers-reduced-motion).
const header = document.querySelector(".site-header");
addEventListener("scroll", () => header?.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

if (document.documentElement.classList.contains("anim")) {
  document.querySelectorAll(".t-agenda .agenda li").forEach((li, k) => li.style.setProperty("--k", k));

  const bloques = ".section-head, .before-after li, .tile, .rubros li, .quotes figure, .feat-phone, .feature-col, .eco-list li, .price, .steps li, .faq-list details, .signup-copy, .signup-card";
  const entrada = new IntersectionObserver((vistos) => {
    vistos.forEach((v) => {
      if (!v.isIntersecting) return;
      v.target.classList.add("is-in");
      entrada.unobserve(v.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(bloques).forEach((el) => {
    el.classList.add("reveal");
    el.style.setProperty("--i", Math.min([...el.parentElement.children].indexOf(el), 5));
    entrada.observe(el);
  });

  document.querySelectorAll("[data-count]").forEach((el) => {
    const fin = Number(el.dataset.count);
    const t0 = performance.now() + 300;
    const paso = (ahora) => {
      const p = Math.min(Math.max((ahora - t0) / 1400, 0), 1);
      el.textContent = Math.round(fin * (1 - (1 - p) ** 3));
      if (p < 1) requestAnimationFrame(paso);
    };
    requestAnimationFrame(paso);
  });

  // La maqueta se reserva sola (dia, hora, Reservar) la primera vez que se ve; si la visitante la toca, se detiene.
  if (demo) {
    const jugar = new IntersectionObserver(([v]) => {
      if (!v.isIntersecting) return;
      jugar.disconnect();
      const pasos = ['[data-pick="dia"]:nth-child(3)', '[data-pick="hora"]:nth-child(2)', "#demoConfirm"];
      const timers = pasos.map((sel, i) => setTimeout(() => demo.querySelector(sel)?.click(), 2400 + i * 1300));
      demo.addEventListener("pointerdown", () => timers.forEach(clearTimeout), { once: true });
    }, { threshold: 0.6 });
    jugar.observe(demo);
  }
}
