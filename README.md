# Portafolio de desarrollo de videojuegos

Sitio estático, oscuro y responsive para presentar proyectos de desarrollo de videojuegos. Está
construido únicamente con **HTML5, CSS3 y JavaScript nativo** (módulos ES), sin frameworks, sin
proceso de compilación y sin backend. Funciona directamente en **GitHub Pages**.

> **Contenido provisional.** Los textos, proyectos, habilidades, imágenes y enlaces incluidos son
> ejemplos. Antes de publicar, sustituye todo por tu información real y revisa la lista de
> [personalización](#personalización-antes-de-publicar).

---

## Índice

1. [Vista general](#vista-general)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Vista previa local](#vista-previa-local)
4. [Personalización antes de publicar](#personalización-antes-de-publicar)
5. [Añadir o editar proyectos](#añadir-o-editar-proyectos)
6. [Imágenes, galería y vídeos](#imágenes-galería-y-vídeos)
7. [Filtros](#filtros)
8. [Habilidades](#habilidades)
9. [Contacto y enlaces](#contacto-y-enlaces)
10. [Colores, tipografía y estilos](#colores-tipografía-y-estilos)
11. [Añadir secciones o funciones](#añadir-secciones-o-funciones)
12. [Publicar en GitHub Pages](#publicar-en-github-pages)
13. [Actualizar el sitio publicado](#actualizar-el-sitio-publicado)
14. [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)
15. [Solución de problemas](#solución-de-problemas)

---

## Vista general

- **Inicio:** presentación, stack habitual y accesos rápidos.
- **Proyectos:** tarjetas generadas desde datos, filtros por motor y género, contador de resultados
  y estado vacío.
- **Detalle de proyecto:** descripción completa, rol y responsabilidades, mecánicas, tecnologías,
  galería con miniaturas, vídeos opcionales y enlaces a repositorio / demo.
- **Habilidades:** categorías con barras de nivel orientativas.
- **Sobre mí:** retrato, enfoque de trabajo, intereses y cita.
- **Contacto:** tarjetas de GitHub, LinkedIn, itch.io y correo; los enlaces sin configurar se
  muestran como «Pendiente».
- **Extras:** navegación fija, scroll suave, sección activa, barra de progreso, botón «volver
  arriba», animaciones de entrada, enlaces directos a proyectos (`#proyecto/<id>`) y pie de página.

La página completa se genera en el navegador a partir de tres fuentes de datos:

| Archivo | Contenido |
| --- | --- |
| `js/config.js` | Datos personales, navegación, hero, «Sobre mí», contacto, pie y SEO. |
| `js/data/projects.js` | Registro de proyectos y esquema de cada ficha. |
| `js/data/skills.js` | Categorías y niveles de habilidades. |

---

## Estructura del proyecto

```text
WebPagePortolio/
├── index.html                     Estructura semántica y puntos de montaje
├── README.md                      Esta documentación
├── .nojekyll                      Evita el procesado de Jekyll en GitHub Pages
│
├── css/
│   ├── base.css                   Variables, reset, tipografía y utilidades
│   ├── layout.css                 Header, hero, secciones, about, contacto y footer
│   ├── components.css             Botones, chips, tarjetas, skills, modal y galería
│   ├── animations.css             Entradas, flotación, diálogo y reduced-motion
│   └── responsive.css             Breakpoints, menú móvil e impresión
│
├── js/
│   ├── main.js                    Punto de entrada; inicializa los módulos
│   ├── config.js                  Configuración personal y textos del sitio
│   ├── data/
│   │   ├── projects.js            Proyectos + getProjectById()
│   │   └── skills.js              Categorías de habilidades
│   └── modules/
│       ├── dom.js                 Utilidades DOM, escape de HTML y URLs
│       ├── icons.js               Registro de iconos SVG en línea
│       ├── site.js                Renderiza todo el contenido de config.js
│       ├── nav.js                 Menú móvil, sección activa, progreso y to-top
│       ├── reveal.js              Animaciones con IntersectionObserver
│       ├── projects.js            Tarjetas, filtros y estado vacío
│       ├── project-dialog.js      Ficha detallada, galería, historial y hash
│       └── skills.js              Renderizado de habilidades
│
└── assets/
    ├── icons/
    │   └── favicon.svg
    └── images/
        ├── hero-illustration.svg
        ├── avatar-placeholder.svg
        ├── og-cover.png           Imagen para compartir en redes (1200×630)
        └── projects/
            ├── nebula-drift/
            │   ├── cover.svg
            │   ├── screenshot-01.svg
            │   └── screenshot-02.svg
            ├── echoes-of-the-rift/
            ├── pixel-garden/
            └── skybound-arena/
```

**Responsabilidades y reglas de diseño**

- `index.html` solo contiene estructura y contenedores vacíos. No dupliques contenido personal en
  el HTML: se sobrescribe o se genera desde JavaScript.
- Los módulos de `js/modules/` no contienen datos personales ni de proyectos.
- Para añadir un juego solo se edita `js/data/projects.js` (y se añaden sus imágenes).
- Los estilos están separados por responsabilidad y se cargan en este orden: base → layout →
  components → animations → responsive.
- La ficha de proyecto se comunica con las tarjetas mediante el evento `project:open`, de modo que
  la lógica del modal está desacoplada del renderizado de tarjetas.

---

## Vista previa local

El sitio usa **módulos ES** (`<script type="module">`). Por seguridad, los navegadores no cargan
módulos desde `file://`, así que **no abras `index.html` con doble clic**: verás la estructura sin
el contenido generado.

Usa un servidor HTTP local. Por ejemplo, con Python (incluido en muchos sistemas):

```powershell
cd C:\Users\Alumno\Documents\WebPagePortolio
python -m http.server 8000
```

Después abre <http://localhost:8000>. Para detener el servidor, pulsa `Ctrl+C`.

Alternativas:

- **VS Code + Live Server:** clic derecho en `index.html` → *Open with Live Server*.
- **Node.js:** `npx serve .` o `npx http-server .`.
- **PHP:** `php -S localhost:8000`.

En GitHub Pages no hace falta servidor propio: Pages sirve los archivos por HTTP y los módulos
funcionan con normalidad.

---

## Personalización antes de publicar

### 1. Datos personales y textos

Edita `js/config.js`:

- `showDemoBanner`: ponlo en `false` cuando el contenido sea real.
- `name`, `initials`, `role`, `roleShort`: nombre, iniciales y rol.
- `seo.title`, `seo.description`, `seo.ogImage`: título, descripción e imagen para buscadores y
  redes sociales.
- `nav`: orden y etiquetas del menú. Cada `id` debe coincidir con el `id` de una sección de
  `index.html`.
- `hero`: subtítulo, descripción, nota, tecnologías y badges flotantes.
- `about`: párrafos, enfoque, intereses y cita.
- `contact`: introducción, disponibilidad y enlaces.
- `footer`: textos del pie. `{year}` y `{name}` se sustituyen automáticamente.

### 2. Imágenes

Sustituye los SVG de ejemplo por tus propias imágenes. Puedes mantener los nombres de archivo para
no tocar las rutas, o actualizar las rutas en `js/data/projects.js` y `js/config.js`.

- Retrato: `assets/images/avatar-placeholder.svg` (recomendado 600×700).
- Ilustración del hero: `assets/images/hero-illustration.svg` (cuadrada).
- Portadas y capturas: `assets/images/projects/<slug>/` (recomendado 1600×900).
- Imagen social: `assets/images/og-cover.png` (1200×630).

Formatos recomendados: `.webp` o `.jpg` para fotografías y capturas; `.svg` para logotipos e
ilustraciones vectoriales. Comprime las imágenes antes de subirlas.

### 3. Proyectos y habilidades

Sustituye los cuatro proyectos de ejemplo en `js/data/projects.js` y los niveles de
`js/data/skills.js`. Cambia `provisional: true` por `false` (o elimina la propiedad) cuando los
datos sean reales.

### 4. Enlaces

Rellena `links.repo` y `links.play` de cada proyecto, y las `url` de `contact.links`. Los enlaces
vacíos se muestran como pendientes y no son clicables. Usa URLs absolutas:

```js
links: {
  repo: "https://github.com/tu-usuario/tu-repo",
  play: "https://tu-estudio.itch.io/tu-juego",
}
```

### 5. Limpieza final

- Pon `site.showDemoBanner` en `false`.
- Revisa que no queden textos «de ejemplo», «provisional» ni «20XX».
- Comprueba todos los enlaces en una ventana privada.
- Actualiza este README si cambias la estructura.

---

## Añadir o editar proyectos

Todo el contenido de un proyecto vive en `js/data/projects.js`. Añade un objeto al array
`projects`; la tarjeta, los filtros y la ficha se generan automáticamente.

### Esquema completo

```js
{
  id: "mi-juego",                    // único, sin espacios; se usa en #proyecto/mi-juego
  title: "Mi Juego",
  summary: "Una línea para la tarjeta.",
  description: [                     // párrafos de la ficha
    "Primer párrafo.",
    "Segundo párrafo.",
  ],
  engine: "Unity",                   // genera el filtro de motor
  genre: "Plataformas 2D",           // genera el filtro de género
  year: "2026",
  status: "Publicado",
  role: "Programación de gameplay",
  team: "Equipo de 3 personas",      // opcional
  technologies: ["C#", "Unity", "Git"],
  responsibilities: [
    "Controlador del jugador.",
    "Sistema de checkpoints.",
  ],
  mechanics: [
    "Salto variable y coyote time.",
    "Dash con coste de energía.",
  ],
  cover: "assets/images/projects/mi-juego/cover.webp",
  coverAlt: "Descripción de la portada",
  gallery: [                          // opcional
    { src: "assets/images/projects/mi-juego/01.webp", alt: "Captura 1" },
    { src: "assets/images/projects/mi-juego/02.webp", alt: "Captura 2" },
  ],
  videos: [                           // opcional; usa URLs embebibles
    { title: "Gameplay", embedUrl: "https://www.youtube.com/embed/VIDEO_ID" },
  ],
  links: {
    repo: "https://github.com/tu-usuario/mi-juego",
    play: "https://tu-estudio.itch.io/mi-juego",
  },
  accent: "#8b7bff",                 // color de acento de la tarjeta
  provisional: false,                // true muestra la etiqueta "Provisional"
}
```

### Reglas y recomendaciones

- `id` debe ser único y estable: se usa en la URL y en `getProjectById()`.
- `engine` y `genre` crean chips automáticamente. Usa exactamente los mismos textos para agrupar
  proyectos.
- `summary` se recorta a dos líneas en la tarjeta; `description` se muestra completo en la ficha.
- `technologies` muestra las cuatro primeras en la tarjeta; el resto aparece como `+N` y en la
  ficha completa.
- `links.repo` y `links.play` pueden quedar vacíos: la ficha mostrará «Enlaces pendientes».
- `accent` admite cualquier color HEX válido. Se usa en hover, borde y foco.
- Para quitar un proyecto, elimina su objeto. Los filtros se recalculan solos.
- Para reordenar, cambia el orden del array: las tarjetas se numeran en ese orden.

### Enlaces directos

Cada ficha tiene una URL propia:

```text
https://tu-usuario.github.io/tu-repo/#proyecto/mi-juego
```

Al abrirla se abre el modal correspondiente. El botón Atrás del navegador cierra la ficha y
restaura el foco en la tarjeta. Si el `id` no existe, la URL se limpia automáticamente.

---

## Imágenes, galería y vídeos

### Portada y capturas

- Portada (`cover`): 1600×900 px, formato horizontal 16:9.
- Capturas (`gallery`): también 16:9; se muestran en la galería y como miniaturas.
- Escribe siempre `alt` descriptivo. No uses «imagen» o «captura» sin contexto.
- Las imágenes se cargan con `loading="lazy"` salvo la ilustración del hero, que tiene prioridad.

### Vídeos

El campo `videos` está preparado pero vacío en los ejemplos. Usa la URL de inserción, no la de la
página del vídeo:

```js
videos: [
  {
    title: "Gameplay comentado",
    embedUrl: "https://www.youtube.com/embed/ID_DEL_VIDEO",
  },
  {
    title: "Tráiler",
    embedUrl: "https://player.vimeo.com/video/ID_DEL_VIDEO",
  },
],
```

Si un vídeo no tiene `embedUrl`, se ignora. Los iframes se cargan con `loading="lazy"` y solo se
crean al abrir la ficha, por lo que no afectan a la carga inicial.

### Imagen para redes sociales

`assets/images/og-cover.png` se usa en `og:image` y `twitter:image`. El sitio calcula la URL
absoluta en tiempo de ejecución. Para que las vistas previas funcionen en todos los rastreadores
(que pueden no ejecutar JavaScript), tras publicar puedes escribir la URL absoluta directamente en
`index.html`:

```html
<meta property="og:image" content="https://tu-usuario.github.io/tu-repo/assets/images/og-cover.png" />
```

---

## Filtros

Los filtros se generan a partir de los valores únicos de `engine` y `genre`:

- Cada grupo incluye «Todos» y el número de proyectos.
- Los filtros de motor y género se combinan (AND).
- El contador anuncia el resultado y los filtros activos.
- Si no hay coincidencias, aparece un estado vacío con un botón para limpiar.
- Para añadir un motor o género nuevo, basta con escribir ese valor en un proyecto.

No hay una lista fija de filtros que mantener. Si en el futuro quieres filtrar por otra propiedad
(por ejemplo, `year` o `status`), añade una fila en `index.html` con
`data-filter="year"`, replica la lógica de `buildFilterGroup` y amplía `matchesFilters` en
`js/modules/projects.js`.

---

## Habilidades

Edita `js/data/skills.js`:

```js
export const skillCategories = [
  {
    id: "engines",
    icon: "engine",                  // clave del registro de iconos
    title: "Motores de videojuegos",
    description: "Texto breve de la categoría.",
    items: [
      { name: "Unity", level: 85 },  // level: 0–100
      { name: "Godot", level: 65 },
    ],
  },
];
```

- `level` se limita a 0–100 y se etiqueta como Básico (<50), Intermedio (50–74) o Avanzado (≥75).
- `skillsMeta.provisional` controla la nota que avisa de que los niveles son de ejemplo.
- Iconos disponibles: `engine`, `code`, `tools`, `design`, `layers`, `web`. Para añadir uno nuevo,
  registra su SVG en `js/modules/icons.js`.
- Los niveles son orientativos. Ajusta los umbrales en `levelLabel()` si prefieres otra escala.

---

## Contacto y enlaces

Edita `site.contact.links` en `js/config.js`:

```js
{
  id: "github",
  label: "GitHub",
  handle: "tu-usuario",
  url: "https://github.com/tu-usuario",
  icon: "github",
  hint: "Código y repositorios",
}
```

- `url` vacía → tarjeta no clicable con estado «Pendiente».
- `mailto:` funciona para el correo: `mailto:tu-correo@ejemplo.com`.
- Los enlaces `http(s)` se abren en una pestaña nueva con `rel="noopener noreferrer"`.
- Iconos disponibles: `github`, `linkedin`, `itch`, `mail`.
- Puedes añadir o quitar tarjetas; el grid se adapta.

---

## Colores, tipografía y estilos

Las variables globales están en `css/base.css`:

```css
:root {
  --bg: #07080d;
  --surface: #10131c;
  --text: #f4f5fa;
  --muted: #a8aec1;
  --accent: #8b7bff;
  --teal: #45e0c8;
  --amber: #ffb86b;
  --container: 1200px;
  --radius: 16px;
  --font-sans: "Segoe UI", system-ui, sans-serif;
}
```

- Cambia `--accent`, `--teal` y `--amber` para ajustar la identidad visual.
- Los acentos por proyecto se definen en el campo `accent` de cada proyecto.
- La tipografía usa la pila del sistema: no hay fuentes externas ni peticiones adicionales.
- Los breakpoints principales están en `css/responsive.css`: 1120, 1024, 920, 720, 560 y 380 px.
- El modo oscuro es el único tema, pero puedes añadir variables para un tema claro y aplicarlas con
  `[data-theme="light"]`.

---

## Añadir secciones o funciones

### Nueva sección

1. Añade la sección en `index.html` con un `id` único, por ejemplo:

   ```html
   <section id="jams" class="section" aria-labelledby="jams-title">
     <div class="container">
       <header class="section-head" data-reveal>
         <p class="section-index">05 — Game jams</p>
         <h2 id="jams-title">Participaciones en jams</h2>
       </header>
       <div data-jams></div>
     </div>
   </section>
   ```

2. Añade el enlace en `site.nav` de `js/config.js`:

   ```js
   { id: "jams", label: "Jams" }
   ```

3. Crea los datos en `js/data/` y un módulo de renderizado en `js/modules/`, o reutiliza
   `site.js` si el contenido cabe en `config.js`.
4. Impórtalo y ejecútalo en `main.js` antes de `initReveal()`.

La navegación, el scroll suave y la sección activa se calculan a partir de `main section[id]`, así
que la nueva sección se integra sin cambios adicionales.

### Nueva función

- **Añadir un icono:** registra el SVG en `js/modules/icons.js` y añádelo a `FILLED` si es un icono
  relleno (marcas) en lugar de un trazo.
- **Nuevo campo de proyecto:** añádelo al objeto de datos y úsalo en
  `js/modules/project-dialog.js` (ficha) o `js/modules/projects.js` (tarjeta).
- **Nuevo filtro:** sigue el apartado [Filtros](#filtros).
- **Nuevo idioma:** los textos están en español; para internacionalizar, extrae las cadenas a un
  objeto de traducciones y vuelve a renderizar los módulos al cambiar de idioma.

---

## Publicar en GitHub Pages

Requisitos: una cuenta de GitHub y Git instalado. Estos pasos crean un repositorio nuevo y publican
la rama `main` en la raíz del sitio.

### 1. Crear el repositorio

Crea un repositorio vacío en GitHub (sin README, sin `.gitignore`) llamado, por ejemplo,
`WebPagePortolio`.

### 2. Subir el proyecto

Desde la carpeta del proyecto:

```powershell
git init
git add .
git commit -m "Portafolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

Si ya existe un repositorio local, omite `git init` y usa `git remote add` solo si aún no hay
`origin`.

> **Estado de este repositorio:** ya tiene Git inicializado, la rama `main` y `origin` apuntando a
> `https://github.com/wassup-999/WebPagePortolio.git`. Los archivos del sitio todavía están sin
> confirmar. En este equipo `git` no está en el `PATH`, pero GitHub Desktop incluye una instalación
> utilizable; también puedes hacer el commit y el push desde la interfaz de GitHub Desktop.

### 3. Activar GitHub Pages

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment → Source**, elige **Deploy from a branch**.
3. Selecciona la rama **main** y la carpeta **/(root)**.
4. Pulsa **Save**.
5. Espera uno o dos minutos. La URL aparecerá en la misma página:

   ```text
   https://TU-USUARIO.github.io/TU-REPO/
   ```

   Para este repositorio, la URL sería `https://wassup-999.github.io/WebPagePortolio/`.

### 4. Comprobar

- Abre la URL en una ventana privada.
- Navega a `#proyecto/nebula-drift` o al detalle de cualquier proyecto.
- Comprueba que las imágenes y el favicon cargan (rutas relativas).
- Revisa la consola del navegador: no debe haber errores 404.
- Si usas un dominio propio, configúralo en **Settings → Pages → Custom domain** y añade el archivo
  `CNAME` que GitHub indique.

> El archivo `.nojekyll` ya está incluido para que GitHub Pages no procese el sitio con Jekyll.
> No lo elimines.

---

## Actualizar el sitio publicado

1. Edita `js/config.js`, `js/data/projects.js`, `js/data/skills.js` o los archivos de `assets/`.
2. Prueba en local con un servidor HTTP.
3. Publica los cambios:

   ```powershell
   git add .
   git commit -m "Actualiza proyectos y datos"
   git push
   ```

4. GitHub Pages vuelve a construir el sitio automáticamente. Puede tardar uno o dos minutos.
5. Si no ves los cambios, fuerza la recarga con `Ctrl+F5` o espera a que caduque la caché.

No es necesario compilar, generar `dist/` ni ejecutar ningún script de build.

---

## Accesibilidad y rendimiento

El sitio incluye:

- Enlace «Saltar al contenido» y navegación con teclado.
- Tarjetas accesibles con `Enter` y `Espacio`.
- `<dialog>` nativo con cierre por `Esc`, foco atrapado y restauración del foco al cerrar.
- `aria-pressed` en filtros, `aria-live` en el contador y etiquetas `aria-label` en controles.
- Imágenes con `alt`, iconos decorativos con `aria-hidden` y contraste revisado.
- Respeto por `prefers-reduced-motion`: las animaciones se desactivan y el scroll deja de ser
  suave.
- Sin fuentes externas, sin librerías y sin peticiones de red más allá de las imágenes.

Recomendaciones al personalizar:

- No elimines los textos alternativos; descríbelos con precisión.
- Mantén el contraste del texto pequeño (los colores actuales están ajustados para cumplirlo).
- Si añades vídeos, incluye títulos claros y considera subtítulos.
- Prueba con teclado: `Tab`, `Enter`, `Espacio`, `Esc` y el botón Atrás del navegador.
- Ejecuta una auditoría con Lighthouse antes de publicar.

---

## Solución de problemas

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| La página se ve vacía o sin proyectos al abrirla con doble clic | Los módulos ES no funcionan en `file://` | Usa un servidor HTTP local (ver [Vista previa local](#vista-previa-local)). |
| Error 404 en GitHub Pages | Pages no está activado o la rama/carpeta no es correcta | Revisa **Settings → Pages** y espera a la publicación. |
| Las imágenes no cargan tras publicar | Ruta absoluta con `/` o nombre con mayúsculas distinto | Usa rutas relativas y respeta mayúsculas/minúsculas de Linux. |
| Un proyecto no abre en su enlace directo | `id` duplicado o inexistente | Usa un `id` único y compruébalo en `js/data/projects.js`. |
| Los filtros no muestran un valor nuevo | El valor está escrito de forma distinta | Usa exactamente el mismo texto en todos los proyectos. |
| Los cambios no aparecen | Caché del navegador o de GitHub Pages | `Ctrl+F5`, ventana privada y espera uno o dos minutos. |
| El modal no se cierra con `Esc` | Navegador muy antiguo sin soporte de `<dialog>` | Usa un navegador actual; el botón de cerrar sigue funcionando. |
| Los vídeos no se ven | Se usó la URL de la página en lugar de la de inserción | Usa `.../embed/ID` (YouTube) o `/video/ID` (Vimeo). |
| Los enlaces de contacto no son clicables | `url` vacía | Rellena la URL en `site.contact.links`. |

---

## Créditos y licencia

- Diseño y código: plantilla original para este portafolio.
- Iconos: SVG propios inspirados en formas geométricas y marcas reconocibles.
- Imágenes: ilustraciones SVG de ejemplo creadas para la plantilla; sustitúyelas por material
  propio antes de publicar.
- No se incluyen fuentes, librerías ni recursos de terceros que requieran atribución.

Añade aquí tu licencia preferida (por ejemplo, MIT para el código y «Todos los derechos
reservados» para el contenido) cuando publiques el repositorio.
