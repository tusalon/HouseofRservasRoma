const CACHE_NAME = "house-rservasroma-v10";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./icons/icon-72x72.png",
  "./icons/icon-96x96.png",
  "./icons/icon-128x128.png",
  "./icons/icon-144x144.png",
  "./icons/icon-152x152.png",
  "./icons/icon-192x192.png",
  "./icons/icon-384x384.png",
  "./icons/icon-512x512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    // cache: "reload" obliga a ir a la red. Sin esto, addAll acepta lo que
    // tenga la cache HTTP del navegador, y una version vieja entraba en la
    // cache nueva como si fuera la recien desplegada. Paso exactamente eso.
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(ASSETS.map((url) => new Request(url, { cache: "reload" })))
    )
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

// POR QUE CACHE-FIRST
// La version anterior iba primero a la red y solo usaba la cache si la red
// FALLABA. En Cuba el caso tipico no es que falle: es que tarda ocho segundos.
// Con esa estrategia la salonera esperaba esos ocho segundos aunque la pagina
// estuviera entera en su telefono, y sin timeout que la rescatara.
//
// Ahora se sirve lo cacheado al instante y la copia nueva se baja por detras
// (stale-while-revalidate): la visita de hoy es inmediata y la de mañana ya
// trae los cambios. El precio es ver una version con un despliegue de retraso,
// que en una landing es mucho mas barato que una pantalla en blanco.
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Solo GET: el alta va por POST a Supabase y no se cachea nunca.
  if (request.method !== "GET") return;
  if (!request.url.startsWith("http")) return;
  if (request.url.includes("wa.me")) return;
  if (request.url.includes("supabase.co")) return;

  const sameOrigin = new URL(request.url).origin === self.location.origin;

  event.respondWith(
    caches.match(request).then((cached) => {
      // Misma trampa en la revalidacion: un fetch normal se conforma con lo que
      // la cache HTTP considere fresco (GitHub Pages manda max-age=600), asi que
      // la copia vieja se reescribia sobre si misma. "no-cache" revalida contra
      // el origen; con ETag sigue siendo barato.
      const revalidar = sameOrigin
        ? new Request(request.url, { cache: "no-cache" })
        : request;
      const fresh = fetch(revalidar)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match("./index.html"));

      // Si hay copia local se devuelve ya y la red sigue su curso aparte.
      if (cached) {
        event.waitUntil(fresh.catch(() => {}));
        return cached;
      }
      return fresh;
    })
  );
});
