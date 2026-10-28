---
name: RservasRoma
description: La casa comercial de la app de reservas para salones de belleza de Cuba. SaaS limpio, fucsia como campo, maqueta de teléfono dibujada.
colors:
  brand: "#e83387"
  brand-cta: "#d4227a"
  brand-ink: "#c0166a"
  brand-tint: "#ffe4f1"
  brand-on-plum: "#ffc2de"
  ink: "#1b1020"
  ink-soft: "#4b3f52"
  muted: "#6a5d71"
  line: "#efdfe7"
  paper: "#ffffff"
  wash: "#fff6fa"
  plum: "#2a0c1f"
  plum-deep: "#1d0716"
  on-plum: "#f8ebf2"
  on-plum-muted: "#d6b8c8"
  ok-bg: "#d1fae5"
  ok-ink: "#065f46"
  miss-bg: "#fee2e2"
  miss-ink: "#991b1b"
  whatsapp: "#25d366"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6.6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Bricolage Grotesque, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  sm: "14px"
  md: "18px"
  lg: "20px"
  xl: "22px"
  tile: "28px"
  quote: "32px"
  price: "36px"
  phone: "44px"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 48px)"
  section: "clamp(64px, 9vw, 120px)"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.brand-cta}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.brand-ink}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "52px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.brand-ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  nav-cta:
    backgroundColor: "{colors.brand-cta}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
    height: "44px"
  input-field:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
    height: "52px"
  tile-bento:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
  tile-bento-plum:
    backgroundColor: "{colors.plum}"
    textColor: "{colors.on-plum}"
    rounded: "{rounded.tile}"
  mini-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "14px 16px"
  phone-mockup:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.phone}"
    width: "318px"
  status-done:
    backgroundColor: "{colors.ok-bg}"
    textColor: "{colors.ok-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
    height: "48px"
---

# Design System: RservasRoma

## Overview

**Creative North Star: "La Vitrina Fucsia"**

Una web de producto limpia, al nivel de acabado de Fresha y Booksy, que demuestra la reserva en vez de describirla: un teléfono dibujado en código, con un salón de ejemplo y datos inventados rotulados como ilustrativos, hace de prueba. No hay capturas de pantalla, y es a propósito (peso en conexión cara y una maqueta que se puede tocar). La usuaria eligió el estándar de la categoría («SaaS limpio») y este sistema lo ejecuta a fondo en lugar de intentar salirse de él.

Blanco con un tinte rosado, tinta ciruela casi negra y fucsia en superficies grandes. El fucsia no es un acento tímido: pinta campos enteros (los pasos y el cierre con el formulario), mientras una banda ciruela oscura corta el ritmo en el ecosistema y el pie. Los titulares van en Bricolage Grotesque, con carácter propio; el cuerpo en Inter. Radios amplios, sombras suaves con desplazamiento vertical, iconos de un solo trazo dibujados en SVG, sin emoji.

**Key Characteristics:**
- Fondo blanco y marfil alternados; ciruela en ecosistema y alta; rosa solo en lo que se pulsa y dorado como acento.
- Rosa en tres trabajos con tres exigencias de contraste, nunca intercambiables.
- Demostración dibujada: teléfono, tarjetas flotantes y mini-interfaces dentro de las baldosas bento.
- Esquinas generosas (14 a 44px) y píldoras para todo lo que se pulsa.
- Un solo momento de movimiento autorado, respetando `prefers-reduced-motion`.

## Colors

Ciruela profundo como base, rosa solo para actuar, dorado champagne como acento y marfil cálido en lugar del blanco rosado. Paleta contrastada con aliciasnailstudio.com (borgoña `#580F1A`, crema `#F7F3EE`, dorado `#C9A86A`, medida con REA el 28/10/2026): lo "premium" de ese sitio viene de una base oscura con un solo acento cálido, no de un rosa saturado a todo color.

### Primary
- **Fucsia de Superficie** (`{colors.brand}` `#e83387`): la identidad. Logo del ecosistema, brillo del bloque de alta y tintes. No lleva texto blanco ni hace de texto.
- **Frambuesa de Acción** (`{colors.brand-cta}` `#c41e6a`): toda superficie con texto blanco: botón primario y CTA del menú. 5.61:1 con blanco.
- **Frambuesa de Tinta** (`{colors.brand-ink}` `#a3135a`): el rosa como texto sobre claro, hover de botones, anillo de foco y `+` del FAQ. 7.5:1 sobre blanco.
- **Tinte** (`{colors.brand-tint}` `#fbe6ef`): selección, estado activo de la maqueta y mitad del degradado de la baldosa del enlace.

### Secondary
- **Ciruela** (`{colors.plum}` `#321024`) y **Ciruela Profunda** (`{colors.plum-deep}` `#200a17`): ecosistema, baldosa nocturna, fila destacada del problema, bloque de alta, logo de la maqueta, avatares, círculos de pasos y pie. Texto sobre ciruela: `{colors.on-plum}` y `{colors.on-plum-muted}` (9.2:1).
- **Dorado champagne** (`{colors.gold}` `#c9a86a`, `{colors.gold-soft}` `#e8d5a8`): iconos, enlaces y checks sobre ciruela (11.8:1), borde de la tarjeta de precio, subrayado de columnas, línea de pasos y botón claro del pie (degradado `--gold-grad`).
- **Dorado de tinta** (`{colors.gold-ink}` `#7a5516`) sobre **Fondo dorado** (`{colors.gold-bg}` `#f6ecd2`): badge «15 días gratis», estado pendiente e iconos de listas sobre claro.

### Tertiary
- **Estado**: `{colors.ok-bg}` / `{colors.ok-ink}` (hecho, anticipo recibido, éxito del formulario) y `{colors.miss-bg}` / `{colors.miss-ink}` (cita perdida, error). **Pendiente** es dorado.
- **WhatsApp** (`{colors.whatsapp}`): solo el botón flotante, con texto tinta, nunca blanco.

### Neutral
- **Tinta** `#231320`, **Tinta Suave** `#4d4048`, **Apagado** `#6b5d66`; **Línea** `#ebdfd8`; **Papel** blanco y **Marfil** (`{colors.wash}` `#faf5f1`) para secciones alternas, campos y citas. Los neutros tienen tinte cálido, no rosado.

### Named Rules
**La Regla de las Tres Frambuesas.** El rosa tiene tres tokens (superficie, acción con texto blanco, tinta sobre claro). El token equivocado no se ve mal; falla contraste en silencio.

**La Regla del Rosa que Actúa.** El rosa aparece donde se pulsa: botón primario, CTA del menú, enlaces, foco. Ya no hay campos a sangre en rosa; las dos conversiones (pasos y alta) se anuncian con marfil y ciruela, y el dorado hace de acento.

**La Regla del Dorado Escaso.** El dorado marca lo que vale (precio, checks, enlaces del ecosistema, números de pasos). Nunca como fondo de una sección ni como texto sobre blanco sin `gold-ink`.

**La Regla del Verde Prestado.** El verde de WhatsApp solo abre WhatsApp. El verde de estado solo comunica estado.

## Typography

**Display Font:** Bricolage Grotesque (500 a 800, con Inter y la pila del sistema)
**Body Font:** Inter (400 a 900, con la pila del sistema)

**Character:** Bricolage aporta voz a los titulares con ópticas cerradas y peso 700; Inter se queda neutra para leer y para los controles. Ambas se alojan en `assets/fonts` (woff2), sin pedir nada a Google al cargar.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 6.6vw, 5rem)`, 1.0, -0.035em): solo el h1 del hero.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.25rem)`, 1.06, -0.025em): h2 de sección, frases completas.
- **Title** (700, 1.25rem a 1.5rem, 1.25): h3 de baldosa, rubro, columna y ecosistema.
- **Quote** (600, `clamp(1.25rem, 2.2vw, 1.625rem)`, 1.3): testimonios, en Bricolage.
- **Lead** (400, `clamp(1.0625rem, 1.5vw, 1.25rem)`, 1.55, máx. 56ch): bajada del hero.
- **Body** (400, 1rem, 1.6) y **Body SM** (500 a 600, 0.9375rem): párrafos y controles.
- **Label** (700, 0.8125rem): estados, notas de ejemplo, etiquetas de campo y de maqueta.

### Named Rules
**La Regla del Titular Solo.** El h2 es una frase completa; no se pone nada encima de él.

**La Regla de las Cifras Planas.** Horas y precios usan `font-variant-numeric: tabular-nums`; el precio grande va en Bricolage a `clamp(3rem, 8vw, 4.5rem)`.

## Layout

Contenedor de 1200px con gutter fluido `clamp(20px, 5vw, 48px)`. Secciones con aire vertical `clamp(64px, 9vw, 120px)`; alternan blanco y marfil, con la banda ciruela del ecosistema y el bloque de alta (ciruela con brillo rosa) como cortes. Las cabeceras de sección se limitan a 760px.

Hero en dos columnas (1.05fr y 0.95fr) con el teléfono a la derecha. El bento usa 12 columnas con baldosas de 7+5 y 5+7. Las listas de rubros, ecosistema y citas van en dos columnas; las funciones y los pasos en tres. El FAQ lleva la cabecera pegada (`sticky`) junto a la lista.

Puntos de ruptura: 960px (todo a una columna, las tarjetas flotantes dejan de ser absolutas y pasan a fluir bajo el teléfono), 760px (menú desplegable, rubros, citas y pasos a una columna) y 480px (pie a una columna, acciones del formulario apiladas). Todo control táctil mide 44px o más.

## Elevation & Depth

Híbrido: planos tonales (blanco, `wash`, tinte, ciruela) hacen la mayor parte del trabajo y la sombra suave separa lo que flota. Todas las sombras son tintadas de ciruela y tienen desplazamiento vertical.

### Shadow Vocabulary
- **Suave** (`box-shadow: 0 1px 2px rgba(42,12,31,0.06), 0 12px 32px -12px rgba(42,12,31,0.18)`): baldosas, mini-tarjetas, píldoras. Variable `--shadow-soft`.
- **Elevada** (`box-shadow: 0 2px 4px rgba(42,12,31,0.06), 0 28px 60px -20px rgba(42,12,31,0.35)`): teléfono, tarjetas flotantes, tarjeta de precio y de alta. Variable `--shadow-lift`.
- **Halo de botón** (`box-shadow: 0 1px 2px rgba(42,12,31,0.15), 0 14px 28px -12px rgba(212,34,122,0.65)`): bajo el botón primario y la fila destacada del problema; crece en hover.

### Named Rules
**La Regla del Halo Rosa.** Solo el botón primario y la fila destacada proyectan sombra rosa. Las baldosas y tarjetas proyectan ciruela.

## Shapes

Esquinas amplias que crecen con la superficie. Lo que se pulsa es píldora (999px).

| radio | dónde |
|---|---|
| 14px | campos, botones de servicio y día de la maqueta, logo de la app |
| 18px | tarjetas flotantes y filas del feed |
| 20px | mini-tarjetas |
| 22px | fila destacada del problema |
| 28px | baldosas bento |
| 32px | citas y tarjeta del formulario |
| 36px | tarjeta de precio |
| 44px / 40px | teléfono grande / pequeño (con marco de 9px / 8px en tinta) |
| 999px | botones, nav, chips, estados, badge, avatar, flotantes |

Bordes de 1px en `line`; la tarjeta de precio lleva 2px en `brand`. El escenario tras el teléfono es una mancha orgánica de tinte (`border-radius` de 44% 56% 48% 52% / 38% 42% 58% 62%).

## Components

### Buttons
- **Shape:** píldora, 52px de alto mínimo (44px en `small`), peso 700.
- **Primary:** Fucsia de Acción con texto blanco y halo. Hover: pasa a Fucsia de Tinta y sube 2px. Active: vuelve a 0.
- **Ghost:** blanco con borde de línea; en hover el borde pasa a `brand-cta` y el texto a `brand-ink`.
- **Light:** blanco con texto fucsia, para usarse sobre un campo fucsia.
- **Disabled:** 60% de opacidad, cursor `wait`, sin transformación.
- **Focus:** anillo de 3px en `brand-ink` con 3px de separación (`:focus-visible`).

### Bento tiles
Baldosas de 28px con una mini-interfaz dentro (enlace compartible, feed nocturno, flujo de anticipo, agenda). Una en tinte rosa sin sombra, una en ciruela, dos en blanco con sombra suave. La mini-interfaz usa mini-tarjetas blancas de 20px. Cada baldosa lleva datos inventados y la sección lo declara con una nota.

### Phone mockup
Teléfono dibujado en HTML con marco de 9px en tinta, muesca, y una reserva interactiva (servicio, día, hora, confirmar) con estados `aria-pressed`. Dos tarjetas flotantes (recordatorio y anticipo) lo acompañan. Rotulado «Ejemplo ilustrativo con datos inventados». Un teléfono pequeño repite el patrón con la agenda en la sección de funciones.

### Inputs / Fields
- **Style:** fondo `wash`, borde de 1.5px en `line`, 14px de radio, 52px de alto mínimo.
- **Focus:** fondo blanco, borde `brand-cta` y anillo de 3px en tinte. La elección de plataforma son dos opciones tipo botón que pasan a tinte al marcarse.
- **Status:** el mensaje vive bajo el formulario, en `ok-ink` o `miss-ink`.

### Navigation
Cabecera pegada, blanca al 96% con borde inferior de 1px. Enlaces píldora de 44px; el CTA es una píldora llena en Fucsia de Acción. Bajo 760px se vuelve un desplegable con botón «Menú».

### Steps and Signup fields
Los pasos van sobre marfil: círculos ciruela con número dorado y anillo champagne, unidos por una línea punteada dorada. El alta es ciruela con un brillo rosa arriba a la derecha; la copia va en blanco con checks dorados y el formulario en una tarjeta blanca de 32px.

### Icons
Un sprite SVG de trazo único (`currentColor`, trazo 1.9 a 2.2, extremos redondeados), usado con `<use>` a 18, 20 o 24px. Sin emoji ni fuentes de iconos.

### Motion
Patrón tomado de aliciasnailstudio.com, en el rosa propio. Todo bajo `prefers-reduced-motion: no-preference` con el estado final visible por defecto (la cabecera pone `<html class="anim">` solo si la visitante no pidió menos movimiento; sin esa clase nada se oculta).
- **Entrada del hero:** titular, texto, botones y cifras suben en cascada (`float-in`, 1s, 0.12s entre uno y otro); teléfono y tarjetas flotantes entran a 0.5s y 0.85s y luego flotan (`bob`). El óvalo de fondo respira (`morph`, 14s).
- **Aparición al hacer scroll:** `app.js` marca los bloques con `.reveal` y un `--i` por hermano (tope 5, 90ms) y les da `.is-in` con un `IntersectionObserver`. Dentro de cada baldosa, el chat nocturno, la agenda y «Pago confirmado» entran en secuencia; la línea de los pasos se dibuja (`draw`).
- **Cifras:** «+350» y «+80» suben desde 0 (1.4s). El texto final ya está en el HTML.
- **Maqueta del hero:** se reserva sola una vez (día, hora, Reservar) al verse; se detiene si la visitante la toca.
- **Detalles que llaman a pulsar:** brillo que cruza los botones primarios al pasar el cursor, anillo en el botón de WhatsApp, pulso del sello «15 días gratis», elevación de baldosas y citas, barra de lectura (solo donde hay `animation-timeline: scroll()`).
Las transiciones de estado duran 0.2 a 0.35s y bajo `reduce` se reducen a 0.01ms. Curva única: `cubic-bezier(0.22, 1, 0.36, 1)`.

### Fuera del sistema: `alta.html`
La página corta de alta no usa `styles.css`: lleva su propio `<style>` en línea y comparte con la landing solo `app.js`. Detectores que la comparen contra este documento señalarán su tipografía y tamaños; es esperado.

## Do's and Don'ts

### Do:
- **Do** elegir el fucsia por su trabajo: `brand-cta` bajo texto blanco, `brand-ink` como texto, `brand` para tintes y bordes.
- **Do** demostrar el producto con maquetas dibujadas y rotular todo dato inventado como ilustrativo.
- **Do** dar 44px de alto de toque como mínimo y 52px a botones y campos.
- **Do** tintar toda sombra con ciruela (`rgba(42,12,31,…)`) y darle desplazamiento vertical.
- **Do** declarar la animación dentro de `prefers-reduced-motion: no-preference` con el estado final visible por defecto.
- **Do** dibujar los iconos como trazo único en el sprite SVG.

### Don't:
- **Don't** usar capturas de pantalla ni rasters nuevos: la demostración es código.
- **Don't** poner texto blanco sobre `brand` ni sobre `whatsapp`.
- **Don't** usar emoji ni fuentes de iconos.
- **Don't** apilar rejillas de tarjetas iguales con icono como estructura de página; las baldosas varían en tamaño, color y contenido.
- **Don't** cargar fuentes desde terceros: Bricolage e Inter se sirven locales.
- **Don't** añadir una tercera banda fucsia ni un segundo color de acento.
