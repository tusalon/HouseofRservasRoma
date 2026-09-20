# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dueñas y dueños de negocios de belleza que viven de una agenda: manicuristas,
barberías, peluquerías, especialistas en lashes y estética, salones con varios
profesionales y academias. La mayoría está en Cuba.

La situación real: llevan la agenda en la cabeza y confirman cada cita a mano por
WhatsApp mientras atienden a una clienta. El trabajo que vienen a resolver es
dejar de ser el intermediario de su propia agenda — que la clienta reserve sola,
con disponibilidad real, sin mensajes de ida y vuelta.

Usuario secundario: la clienta final del salón, que reserva desde el enlace. No
descarga nada ni crea cuenta con contraseña — entra por WhatsApp.

Tercer usuario, interno: cada profesional del salón entra con su propia cuenta y
ve solo lo que el negocio le permite.

## Product Purpose

RservasRoma le da a un salón su propia app de reservas con su marca: página de
reservas con enlace propio, reserva 24/7 según disponibilidad real, cobro de
anticipo por transferencia, recordatorios listos para enviar por WhatsApp,
agenda y estadísticas de cobro.

Esta web (HouseofRservasRoma) es la casa comercial del producto. Su éxito no es
que la visitante entienda el producto: es que deje sus datos y llegue la
solicitud. No hay autoservicio — el alta la monta el equipo a mano.

## Positioning

Está construido para operar en Cuba, y eso no es una adaptación sino el diseño:
funciona sobre WhatsApp en vez de email, cobra anticipos por transferencia en vez
de pasarelas de pago internacionales, soporta CUP y USD, y se instala como web
(PWA) sin depender de las tiendas de apps. Un competidor internacional no puede
copiar esa postura sin rehacer su producto.

El segundo diferenciador es la marca: la clienta ve el salón, no una app
genérica con el salón dentro. Logo, colores, imagen de fondo, nombre, mensajes y
servicios son del negocio.

## Operating Context

- **Alta manual, siempre por WhatsApp.** La visitante llena 4 datos (nombre del
  salón, WhatsApp, correo, Android o iOS), se guarda el lead y se abre WhatsApp
  con el texto armado. El equipo escribe en pocas horas y entrega la app en
  24–72 h. Esto es parte del producto, no una limitación temporal.
- **Dos puertas de entrada:** el formulario de `index.html` (`origen: 'landing'`)
  y la página corta `alta.html` (`origen: 'alta-corta'`).
- **El lead se guarda antes de WhatsApp.** Se inserta en la tabla Supabase
  `solicitudes_alta` con `keepalive`, sin esperar, porque el navegador bloquea
  `window.open` si pierde el gesto del usuario. Antes, si la salonera no le daba
  "enviar" en WhatsApp, el lead se perdía entero.
- **Conexión mala como norma.** Muchas saloneras navegan con datos caros y
  lentos. El peso de página y el funcionamiento offline vía service worker son
  requisitos reales, no un extra.
- **Ecosistema:** RservasRoma (reservas) · RomaFinanzas (costos, ganancia y
  margen por servicio) · RomaCrece (crecimiento en redes) · RomaHub (directorio
  público de la belleza en Cuba, `tusalon.github.io/RomaHub`).

## Capabilities and Constraints

Capacidades que la web vende y el producto cumple: reservas online 24/7, panel
administrativo (agenda, pendientes, completadas, canceladas, ausencias, cobro
real), profesionales con permisos, anticipos con liberación automática del turno
si no llega el pago, recordatorios para WhatsApp, PWA en Android e iOS más APK
opcional para Android, lista de espera, estadísticas por período y servicio, y
personalización completa de marca.

Restricciones de esta web, confirmadas y vinculantes:

- **Estática.** HTML/CSS/JS a mano, sin framework y sin build. Se publica en
  GitHub Pages (`tusalon.github.io/HouseofRservasRoma`). El único servicio
  externo es Supabase, y solo para insertar leads.
- **Sin backend propio.** La clave `anon` viaja en el cliente a propósito: RLS
  permite únicamente INSERT en `solicitudes_alta`. Leer y actualizar queda solo
  para `service_role`, que vive en el panel local. Cualquier función nueva que
  necesite leer datos no cabe en esta web.
- **El alta nunca es autoservicio.** No se añade registro con contraseña ni pago
  online en el flujo de alta.
- **Rendimiento como requisito**, por la conexión de las usuarias.

Sin decidir: el identificador visual `#e83387` es la marca del ecosistema, pero
no quedó declarado intocable. Si el contraste WCAG obliga a mover algo, hay
margen para ajustar los usos del rosa — no la identidad.

## Brand Commitments

- Nombre: **RservasRoma**. Ecosistema: **Roma** (RomaFinanzas, RomaCrece,
  RomaHub). Comunidad: "La Casa de la Comunidad".
- Identidad actual: rosa fucsia `#e83387` sobre blanco, tipografía Inter.
- Voz: humana, directa, de comunidad — no de vendedor. Habla en femenino cuando
  se dirige a la clienta y a la salonera, porque es quien mayoritariamente usa
  el producto. Nada de presión ni de urgencia inventada.
- Soporte y contacto siempre por WhatsApp (`15154650340`), unificado con RomaHub.

## Evidence on Hand

Medido el 18 de septiembre de 2026 sobre la tabla `negocios` de Supabase
(`zorhclhvykikaachfrmp`, vía PostgREST con la clave `anon`, que es pública y solo
deja leer lo que RLS expone). Reproducible: filtrar `configurado=eq.true` y
agrupar por `plan`, `es_tienda_externa` y `provincia`.

**Cuántos son y quién paga — pregunta cerrada:**

| `plan` | `es_tienda_externa` | negocios |
|---|---|---|
| emprendedor | no | 338 |
| lanzamiento | no | 3 |
| gratuito | sí | 29 |

- **341 negocios de reservas, los 341 en plan de pago.** No hay ni un negocio de
  reservas en plan gratuito.
- Los 29 `gratuito` coinciden exactamente con las 29 `es_tienda_externa`: son
  catálogos de tienda, no clientes de reservas. No se cuentan como salones.
- 437 filas en la tabla, 370 con `configurado=true` (las que RomaHub publica).
  Las 370 están en `romahub_estado = aprobada`.
- La web dice "+340", que es cierto y se queda corto a propósito: un número
  redondeado a la baja sigue siendo verdad cuando la tabla crece.

**Dónde están — pregunta cerrada:**

- **Las 15 provincias de Cuba, las 15**, más Isla de la Juventud. 46 municipios
  cubanos distintos; La Habana concentra 46 negocios.
- **Un solo negocio fuera de Cuba:** La Cubanita Nails, Úbeda (Jaén, España),
  en plan emprendedor.
- El esquema **no tiene columna de país**: solo `provincia` y `municipio`. La
  cobertura internacional no es medible con estos datos, y "varios países" se
  retiró de la web por eso. No se vuelve a afirmar sin una fuente.
- 235 de los 370 no declaran provincia, así que la cobertura se mide sobre los
  135 que sí. Eso prueba presencia, nunca ausencia: no se puede decir "en todos
  los municipios", sí "hay salones en las 15 provincias".

**Resto de la evidencia:**

- Los tres testimonios de la web (Yuliet M. · Exotic Nails, La Habana; Carla R. ·
  Nails Carla Salon; Leci N. · Leci's Nails) salen del mismo origen que
  `TESTIMONIOS_NEGOCIOS` de RomaHub, así que corresponden a negocios reales.
- 78 productos/cursos y 9 negocios con valoraciones verificadas en RomaHub.
- Capturas reales de una app configurada, en `assets/screenshots` (576×1280).
- Guía de inicio en PDF: `guia-inicio-rservasroma.pdf`.

Lo que sigue sin probar y no se debe afirmar:

- Sin benchmarks, sin premios, sin prensa, sin métricas de conversión ni de
  retención. No inventar ninguno.
- Sin dato de cuántos de los 341 llevan más de un mes pagando: la tabla
  `negocios` no guarda historial de suscripción visible con la clave `anon`.

## Product Principles

1. **Medir antes de afirmar.** Toda cifra de la web debe tener una consulta que
   la reproduzca (hoy: la tabla `negocios` vía PostgREST, ver Evidence on Hand).
   Una cifra sin fuente se baja; una cifra con fuente se redondea a la baja para
   que siga siendo verdad mañana.
2. **La conexión mala es el caso normal**, no el borde. Cada kilobyte que se
   añade tiene que ganarse su sitio.
3. **El alta es una conversación, no un checkout.** El formulario pide lo mínimo
   y el trabajo real lo hace una persona por WhatsApp.
4. **La marca de la clienta manda sobre la nuestra.** En el producto, el salón se
   ve a sí mismo; RservasRoma queda detrás.
5. **Un solo precio, sin letra pequeña.** 1.500 CUP al mes en Cuba con todo el
   ecosistema incluido, incluidos los proyectos que vengan. La estructura vieja
   de tres planes ($2 Base / $3 Plus / $4 Premium) queda como histórica y no se
   vuelve a publicar.

## Accessibility & Inclusion

Idioma único: español, con el registro de Cuba. La web se lee sobre todo en
móviles de gama baja con pantalla pequeña y datos limitados.

Requisito confirmado por auditoría pendiente: el contraste de texto debe cumplir
WCAG AA (4.5:1 en cuerpo, 3:1 en texto grande). El uso actual del rosa de marca
como color de texto no lo cumple.
