---
name: RservasRoma
description: La casa comercial de la app de reservas para salones de belleza de Cuba.
colors:
  esmalte: "#e83387"
  esmalte-cta: "#d4227a"
  esmalte-ink: "#c0166a"
  esmalte-on-dark: "#f472b6"
  ciruela: "#2d0a1f"
  ciruela-profunda: "#1a0a2e"
  tinta: "#111827"
  tinta-suave: "#374151"
  gris-apagado: "#6B7280"
  linea: "#E5E7EB"
  papel: "#FFFFFF"
  papel-suave: "#F9FAFB"
  gris-footer: "#9CA3AF"
  vidriera: "#fdf0f7"
  vidriera-hondo: "#f5d0e8"
  aviso-fondo: "#d1fae5"
  aviso-borde: "#6ee7b7"
  aviso-texto: "#065f46"
  verde-whatsapp: "#25D366"
  verde-exito: "#047857"
  rojo-error: "#b91c1c"
  ambar-estrella: "#f59e0b"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(40px, 6vw, 72px)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(26px, 3.5vw, 44px)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.4
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.1em"
rounded:
  xs: "6px"
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  "2xl": "24px"
  bisel: "28px"
  pill: "999px"
spacing:
  xs: "10px"
  sm: "12px"
  md: "20px"
  lg: "32px"
  xl: "48px"
  section: "80px"
  section-mobile: "44px"
components:
  button-primary:
    backgroundColor: "{colors.esmalte-cta}"
    textColor: "{colors.papel}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.esmalte-ink}"
    textColor: "{colors.papel}"
  button-primary-disabled:
    backgroundColor: "{colors.esmalte-cta}"
    textColor: "{colors.papel}"
  button-secondary:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.esmalte-ink}"
    rounded: "{rounded.md}"
    padding: "13px 24px"
  nav-cta:
    backgroundColor: "{colors.esmalte-cta}"
    textColor: "{colors.papel}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  input-field:
    backgroundColor: "{colors.papel-suave}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "13px 14px"
    height: "48px"
  card-feature:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "24px"
  chip-dato:
    backgroundColor: "{colors.papel-suave}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  whatsapp-float:
    backgroundColor: "{colors.verde-whatsapp}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
    height: "48px"
---

# Design System: RservasRoma

## Overview

**Creative North Star: "El Salón Recién Pintado"**

Paredes blancas, buena luz, un solo acento fucsia que se ve desde la puerta, y
todo en su sitio. El sistema es papel blanco de borde a borde, tipografía muy
pesada para la jerarquía, y un fucsia de esmalte que aparece poco y manda mucho.
La sensación que persigue no es "app moderna": es la de un local limpio donde se
sabe exactamente dónde está cada cosa, porque eso es lo que el producto le vende
a alguien que hoy lleva la agenda en la cabeza.

La densidad es generosa en escritorio y deliberadamente compacta en móvil, porque
ahí se lee de verdad: secciones de 80px pasan a 44px y las rejillas de tres o
cuatro columnas caen a dos en vez de apilarse en una tira infinita. El peso lo
carga la tipografía, no la decoración: Inter en 800 y 900 hace el trabajo que en
otros sistemas harían ilustraciones. El único adorno estructural es el halo
fucsia bajo los botones de acción, y está ahí para señalar dónde se toca.

El anti-referente confirmado es la plantilla de SaaS genérica: nada de texto con
degradado, nada de etiquetas pequeñas encima de los titulares, nada de tarjetas
iguales de icono-título-texto haciendo de estructura de página. El titular se
sostiene solo y el énfasis se da con peso, no con color líquido.

**Key Characteristics:**
- Papel blanco como base, nunca fondo gris ni tarjeta sobre tarjeta.
- Un solo acento cromático, en tres versiones según el trabajo que hace.
- Tipografía extrema (400 para cuerpo, 900 para display) como única jerarquía.
- Compactación agresiva en móvil sin quitar contenido.
- Todo control se toca con el dedo: 44px mínimo, 48px en campos.

## Colors

Un acento y un gris. La paleta es monocromática de propósito: el fucsia es lo
único saturado en toda la página, así que cualquier cosa que se pinte de fucsia
se lee como "esto importa".

### Primary
- **Fucsia de Esmalte** (`{colors.esmalte}`): la identidad del ecosistema Roma. Viste
  superficies, bordes y tintes — el borde de la tarjeta de precio, el `:hover` de
  las tarjetas, el 8% de tinte de fondo, el halo del CTA. **Nunca lleva texto
  blanco encima ni hace de texto:** en esos dos trabajos se queda en 4.0:1 y no
  pasa AA.
- **Fucsia de Acción** (`{colors.esmalte-cta}`): el mismo rosa un 6% más
  profundo, para toda superficie que lleve texto blanco encima. Botón primario,
  CTA del menú, iconos numerados, banda de urgencia. Da 4.87:1 con blanco.
- **Fucsia de Tinta** (`{colors.esmalte-ink}`): el rosa cuando hace de texto sobre
  claro. Etiquetas, `<em>` del titular, enlaces, el `+` del FAQ, anillo de foco.
  Da 5.89:1 sobre papel y 5.64:1 sobre papel suave.
- **Fucsia sobre Oscuro** (`{colors.esmalte-on-dark}`): sobre las bandas ciruela hay
  que aclarar, no oscurecer. Da 6.75:1 sobre ciruela; el fucsia base daría 4.47:1.

### Secondary
- **Ciruela** (`{colors.ciruela}`) y **Ciruela Profunda**
  (`{colors.ciruela-profunda}`): el degradado de las dos bandas de tensión — la
  del problema y la de urgencia. Son las únicas superficies oscuras del sitio y
  existen para cortar el blanco justo antes de pedir algo.

### Tertiary
- **Verde WhatsApp** (`{colors.verde-whatsapp}`): color prestado, no de marca. Se
  usa solo en el botón flotante y siempre con texto tinta encima, nunca blanco
  (blanco da 1.98:1). Es un código visual que la usuaria ya reconoce; por eso se
  respeta el verde exacto de WhatsApp.
- **Verde Éxito** (`{colors.verde-exito}`) y **Rojo Error**
  (`{colors.rojo-error}`): estados del formulario. 5.48:1 y 6.47:1 sobre papel.
- **Ámbar Estrella** (`{colors.ambar-estrella}`): las cinco estrellas de los
  testimonios. No se usa en ningún otro sitio.
- **Familia Aviso** (`{colors.aviso-fondo}` / `{colors.aviso-borde}` /
  `{colors.aviso-texto}`): el único verde propio de la marca, y existe para una
  sola cosa — el badge de "15 días gratis" sobre la tarjeta de precio. Texto
  sobre fondo da 6.78:1. No se reutiliza como color de éxito genérico.
- **Vidriera** (`{colors.vidriera}` → `{colors.vidriera-hondo}`): el degradado
  rosa muy claro del marco donde vive el mockup del teléfono. Es escenografía,
  no superficie de contenido: nada se escribe encima.

### Neutral
- **Tinta** (`{colors.tinta}`): todo el texto principal y el fondo del footer.
- **Tinta Suave** (`{colors.tinta-suave}`): el texto de los testimonios.
- **Gris Apagado** (`{colors.gris-apagado}`): párrafos secundarios, pies de foto,
  placeholders.
- **Gris Footer** (`{colors.gris-footer}`): el texto sobre el fondo Tinta del
  footer. Más claro que Gris Apagado porque ahí el fondo es oscuro (6.99:1).
- **Línea** (`{colors.linea}`): el único separador. Un pelo de 1px, nunca 2px de
  color.
- **Papel** (`{colors.papel}`) y **Papel Suave** (`{colors.papel-suave}`): el
  fondo y el relleno de campos y chips. La diferencia entre los dos es casi
  imperceptible a propósito: separa sin dibujar una caja.

### Named Rules

**La Regla de los Tres Trabajos.** El fucsia tiene tres tokens porque hace tres
trabajos con tres exigencias de contraste distintas: superficie decorativa
(`esmalte`), superficie con texto blanco (`esmalte-cta`) y texto sobre claro
(`esmalte-ink`). Usar el token equivocado no se ve mal — falla WCAG en silencio.
Antes de esta separación había 35 fallos de contraste, todos por este motivo.

**La Regla del Único Saturado.** El fucsia es el único color saturado de la
página. Si una pantalla nueva necesita un segundo color de acento, la respuesta
es casi siempre que no lo necesita: usa peso tipográfico o el tinte al 8%.

**La Regla del Verde Prestado.** El verde de WhatsApp no es de la marca y no se
extiende. No se usa para éxito, ni para "activo", ni para nada que no sea el
botón que abre WhatsApp.

## Typography

**Display Font:** Inter (con `ui-sans-serif, system-ui, -apple-system, sans-serif`)
**Body Font:** Inter — una sola familia para todo el sistema.

**Character:** Inter en sus extremos. El sistema no tiene una segunda familia
para contrastar; el contraste lo hace el salto de peso, de 400 a 900. Eso lo
vuelve barato de cargar — cinco pesos, un solo archivo de fuente — lo cual
importa porque la usuaria navega con datos caros. La página se carga con
`preconnect` + `<link>` en el `<head>`, nunca con `@import` desde el CSS: eso
ponía cuatro viajes en serie antes de pintar texto.

### Hierarchy
- **Display** (900, `clamp(40px, 6vw, 72px)`, 1.02, -0.025em): solo el h1 del
  hero. En móvil baja a `clamp(36px, 10vw, 52px)`.
- **Headline** (800, `clamp(26px, 3.5vw, 44px)`, 1.1, -0.02em): los h2 de
  sección. Son frases completas, no etiquetas.
- **Title** (700, 18px, 1.3): los h3 de tarjeta y los títulos del FAQ.
- **Body** (400–500, 15px, 1.6): párrafos de sección. El texto del hero sube a
  18px. La medida se limita con `max-width: 600px` en el hero.
- **Body MD** (400–500, 16px, 1.6): el escalón entre Body y Title. Apenas tres
  usos; antes de alcanzarlo, comprueba que Body no sirve.
- **Body SM** (400–500, 14px, 1.6): el tamaño más usado de todo el sistema —
  texto de tarjeta, enlaces de menú y footer, chips de dato, pies de foto.
  Cuando dudes entre Body y Body SM dentro de una tarjeta, es Body SM.
- **Label SM** (700, 13px, 1.4): etiquetas de campo, autoría de testimonio,
  numeración dentro de las baldosas de 40px.
- **Label** (800, 12px, 0.1em, mayúsculas): el subtítulo de marca y los chips de
  dato. Mayúsculas solo en cadenas cortas, nunca en una frase.

### Named Rules

**La Regla del Titular Solo.** Nada de etiquetas pequeñas encima de un titular.
Ni "Cómo funciona", ni "Empieza hoy", ni un chip de categoría. El h2 es una
frase completa que se explica sola; una etiqueta encima solo repite lo que el
menú ya dice.

**La Regla del Peso, no del Color.** El énfasis dentro de un titular se da con
`<em>` en Fucsia de Tinta, sin cursiva y sin degradado. El texto con degradado
está prohibido en este sistema.

**La Regla de los Ocho Roles.** Trabajo nuevo elige entre los ocho roles
declarados arriba y no inventa un tamaño intermedio; si de verdad hace falta uno
nuevo, se añade aquí primero y luego al CSS, nunca al revés.

Quedan dos tamaños fuera de la escala, los dos con un trabajo concreto y un solo
uso cada uno: **20px** en la cifra de la franja de pruebas del hero y **22px** en
el glifo `+` que abre cada pregunta del FAQ. Son excepciones conocidas, no deriva
por descubrir. Si aparece un tercero, es que la escala se está rompiendo otra vez.

## Layout

Contenedor de 1180px centrado, con 20px de aire laterales que no se negocian:
son el gutter mínimo en móvil. Las bandas destacadas (problema, urgencia, precio)
bajan a 1140px para quedar visiblemente encajadas dentro del ancho general.

El ritmo vertical es de 80px por sección en escritorio y **44px en móvil**. Esa
compactación es una decisión medida, no un descuido: la página completa en un
teléfono es larga y cada scroll de más es una salida. Las rejillas caen de 3–4
columnas a **2**, nunca a 1, por la misma razón — y con ellas bajan los paddings
internos (24px → 16px) y los gaps (20px → 10px).

Tres puntos de ruptura: 1024px (ajustes de rejilla), 900px (el hero pasa a una
columna) y 640px (el menú se vuelve desplegable y entra la compactación móvil).

La galería de capturas cambia de modelo en móvil: de rejilla apilada a **fila
deslizable con `scroll-snap`**, usando scroll nativo. No es un carrusel a mano y
no roba el scroll de la página.

### Named Rules

**La Regla de las Dos Columnas.** En móvil una rejilla cae a dos columnas, no a
una. Apilar en una sola columna dobla el alto de la sección y ese alto se paga en
abandono.

## Elevation & Depth

Levantado suave. Las superficies flotan apenas sobre el papel con sombra gris
neutra y ambiental — sin dirección marcada, como luz de local. El halo fucsia es
otra cosa y tiene un solo trabajo: **señalar dónde se toca.** Va bajo los botones
de acción y los iconos numerados, y en ningún otro sitio. Si el halo se
extendiera a las tarjetas, el rosa dejaría de indicar nada.

Ninguna sombra es plana ni de offset cero: todas llevan desplazamiento vertical
y difuminado generoso.

### Shadow Vocabulary
- **Reposo** (`box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)`):
  el borde apenas despegado de campos y botones secundarios.
- **Ambiental** (`box-shadow: 0 4px 24px rgba(0,0,0,0.08)`): tarjetas al pasar el
  cursor y el menú desplegable móvil.
- **Elevada** (`box-shadow: 0 12px 48px rgba(0,0,0,0.12)`): la tarjeta de precio y
  la tarjeta de alta. Lo más alto que sube algo en este sistema.
- **Halo de acción** (`box-shadow: 0 4px 20px var(--brand-glow)`): solo bajo
  botones primarios e iconos de acción. Crece a `0 8px 28px` en `:hover`.

### Named Rules

**La Regla del Halo Reservado.** El halo fucsia significa "esto se toca". No es
decoración y no se pone en tarjetas, bandas ni contenedores.

## Shapes

Esquinas suaves, y el radio crece con el tamaño de la superficie. Cada paso de la
escala tiene un trabajo:

| paso | valor | dónde |
|---|---|---|
| `xs` | 6px | la imagen dentro de una `<figure>` |
| `sm` | 10px | baldosas de 40px: el logo y los iconos numerados |
| `md` | 12px | **el por defecto** — botones, campos, tarjetas, chips |
| `lg` | 16px | superficies grandes: el formulario de alta, la tarjeta de testimonio |
| `xl` | 20px | bandas de tensión y tarjeta de precio |
| `2xl` | 24px | el marco vidriera del hero |
| `bisel` | 28px | el mockup del teléfono, y solo ahí |
| `pill` | 999px | lo que flota sobre el contenido: WhatsApp y el botón de pausa |

El paso `bisel` es una excepción física, no estilística: con su borde blanco de
8px imita el marco de un teléfono real. Bajarlo a 24px haría que el mockup se
viera mal. No se usa en nada más.

Los bordes son siempre de 1px en Línea. La excepción es la tarjeta de precio, que
lleva 2px en Fucsia de Esmalte porque es el único elemento que debe destacar por
contorno en toda la página.

### Named Rules

**La Regla del Pelo de 1px.** Un separador es una línea de 1px en Línea. Nada de
bordes de color de 3px o 4px a un lado de una tarjeta para dar énfasis; eso es de
otro sistema.

## Components

### Buttons
- **Shape:** esquinas suaves (12px), sin borde en el primario y 2px transparente
  en los demás para que no salten de tamaño al cambiar de variante.
- **Primary:** Fucsia de Acción con texto blanco, 13px 24px de relleno, halo de
  acción debajo. En `:hover` oscurece a Fucsia de Tinta y sube 2px.
- **Secondary:** papel con texto Fucsia de Tinta y borde Fucsia de Esmalte. En
  `:hover` se rellena con el tinte al 8%.
- **Disabled:** 65% de opacidad, cursor `progress`, sin transformación ni sombra.
  Los botones que envían **tienen** que entrar en este estado mientras trabajan:
  con conexión lenta parecen muertos y se tocan dos veces.
- **Focus:** anillo sólido de 3px en Fucsia de Tinta con 3px de separación, solo
  por teclado (`:focus-visible`). La transición nombra las propiedades que cambian
  — nunca `transition: all`, que animaba también el `outline-offset` y hacía
  entrar el anillo deslizándose.

### Cards / Containers
- **Corner Style:** 12px las tarjetas de contenido, 20–24px las bandas.
- **Background:** papel. Nunca tarjeta dentro de tarjeta.
- **Shadow Strategy:** planas en reposo; sombra Ambiental solo en `:hover`, junto
  con un borde que pasa a Fucsia de Esmalte y una subida de 2–3px.
- **Border:** 1px en Línea.
- **Internal Padding:** 24px en escritorio, 16px en móvil.

### Inputs / Fields
- **Style:** fondo Papel Suave, borde de 1px en Línea, 12px de radio, **48px de
  alto mínimo**.
- **Focus:** el fondo pasa a papel puro, el borde a Fucsia de Tinta y entra el
  anillo de 3px. Con ratón no aparece anillo, solo el cambio de borde.
- **Error / Success:** el mensaje de estado vive bajo el formulario en un
  `role="status"`, en Verde Éxito o Rojo Error. **El mensaje dice lo que de verdad
  pasó**, nunca un éxito optimista antes de saberlo.

### Navigation
- Cabecera pegada arriba con papel al 92% y `backdrop-filter: blur(20px)`, borde
  inferior de 1px. Enlaces de 14px en peso 600, color Tinta Suave, `:hover` a
  Fucsia de Tinta, **44px de alto de toque**. El CTA del menú es un botón lleno en
  Fucsia de Acción. Bajo 640px todo colapsa en un desplegable de papel con sombra
  Ambiental, con `aria-expanded` sincronizado.

### Chip de dato
Los bloques de la franja de pruebas: Papel Suave, 12px de radio, borde de 1px,
72px de alto mínimo, texto de 14px en peso 700. Al pasar el cursor el borde va a
Fucsia de Esmalte y el fondo al tinte del 8%. Se mueven en bucle horizontal
**con un botón de pausa obligatorio** — `:hover` no existe en un móvil.

### Botón flotante de WhatsApp
Píldora verde WhatsApp con texto Tinta, 48px de alto, abajo a la derecha. Sombra
verde con desplazamiento. Es el único elemento que usa un color ajeno a la marca,
y lo hace porque la usuaria reconoce ese verde antes de leer la palabra.

## Components

### Fuera del sistema: `alta.html`

La página corta de alta **no usa `styles.css` ni la tipografía del sistema**, y es
deliberado. Lleva sus estilos en un `<style>` en línea y la pila de fuentes del
sistema operativo, así que se pinta con **cero peticiones bloqueantes**. Es la
página que se manda por WhatsApp a alguien con datos contados: ahí la velocidad
gana a la coherencia tipográfica.

Lo único que sí comparte, y tiene que seguir compartiendo, es el contraste: su
botón usa el mismo Fucsia de Acción (4.87:1 con blanco) y no el Fucsia de Esmalte.
Cualquier detector que compare esta página contra DESIGN.md va a señalar sus
tamaños y su fuente. Es correcto que lo haga y es correcto ignorarlo.

## Do's and Don'ts

### Do:
- **Do** elegir el token de fucsia por el trabajo que hace: `esmalte-cta` bajo
  texto blanco, `esmalte-ink` como texto, `esmalte` para superficie y borde.
- **Do** dar 44px de alto a cualquier cosa que se toque, y 48px a los campos.
- **Do** compactar en móvil bajando paddings y pasando a dos columnas, sin quitar
  contenido.
- **Do** poner el estado deshabilitado y el mensaje real en todo lo que envíe
  datos: la conexión lenta es el caso normal, no el borde.
- **Do** envolver la animación en `@media (prefers-reduced-motion: no-preference)`
  con el estado visible como valor por defecto, para que quien pida menos
  movimiento vea el contenido y no una página en blanco.
- **Do** dar un control real a cualquier cosa que se mueva en bucle.

### Don't:
- **Don't** poner texto con degradado. El énfasis es peso y color sólido.
- **Don't** poner una etiqueta pequeña encima de un titular.
- **Don't** poner texto blanco sobre `esmalte`, ni sobre `verde-whatsapp`.
- **Don't** usar el halo fucsia en nada que no se toque.
- **Don't** anidar tarjetas, ni usar rejillas de icono-título-texto iguales como
  estructura de página.
- **Don't** meter un segundo color de acento. Si hace falta jerarquía, es peso.
- **Don't** escribir `transition: all`, ni quitar el `outline` sin poner un
  anillo sólido con 3:1 de contraste en su lugar.
- **Don't** cargar fuentes con `@import` desde el CSS, ni añadir pesos de Inter
  que el diseño no use.
- **Don't** publicar una cifra sin una consulta que la reproduzca.
