# Portafolio de videojuegos — Sebaztián Traviz Quispe Perez

Portafolio estático, oscuro y responsive para presentar proyectos de desarrollo de videojuegos.
Está construido únicamente con **HTML5, CSS3 y JavaScript nativo** (módulos ES), sin frameworks,
sin proceso de compilación y sin backend. Funciona directamente en **GitHub Pages**.

- **URL de publicación:** <https://wassup-999.github.io/WebPagePortfolio/>
- **Repositorio:** <https://github.com/wassup-999/WebPagePortfolio>
- **Autor:** Sebaztián Traviz Quispe Perez (`wassup-999`)
- **Rol:** programador de videojuegos · Unity · C#

---

## Índice

1. [Estado actual](#estado-actual)
2. [Vista general](#vista-general)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Datos y responsabilidades](#datos-y-responsabilidades)
5. [Vista previa local](#vista-previa-local)
6. [Publicar en GitHub Pages](#publicar-en-github-pages)
7. [Actualizar el sitio publicado](#actualizar-el-sitio-publicado)
8. [Añadir o editar proyectos](#añadir-o-editar-proyectos)
9. [Habilidades](#habilidades)
10. [Contacto y enlaces](#contacto-y-enlaces)
11. [Imágenes, galería y vídeos](#imágenes-galería-y-vídeos)
12. [Filtros](#filtros)
13. [Colores, tipografía y estilos](#colores-tipografía-y-estilos)
14. [Añadir secciones o funciones](#añadir-secciones-o-funciones)
15. [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)
16. [Contenido pendiente y notas de veracidad](#contenido-pendiente-y-notas-de-veracidad)
17. [Solución de problemas](#solución-de-problemas)
18. [Créditos](#créditos)

---

## Estado actual

El sitio ya utiliza los datos reales del autor y los dos proyectos públicos en los que ha
participado:

| Proyecto | Motor | Género | Año | Enlace |
| --- | --- | --- | --- | --- |
| The Angels of the Road | Unity | Plataformas 2D | 2025 | [sowTecsup/TheAngelOfTheRoad](https://github.com/sowTecsup/TheAngelOfTheRoad) |
| Ecos de Tinta | Unity | Beat 'em up 2.5D | 2026 | [HaxBv/EcosDeTinta](https://github.com/HaxBv/EcosDeTinta) |

> **Sobre el enlace de TheAngelOfTheRoad:** la URL indicada originalmente
> (`https://github.com/ChemsLGDesu/TheAngelOfTheRoad.git`) devuelve 404. El repositorio público
> actual es `https://github.com/sowTecsup/TheAngelOfTheRoad`, que es el que se muestra en la ficha.
> El título visible es **The Angels of the Road**, según el arte oficial del proyecto.

La franja de aviso de plantilla está desactivada (`showDemoBanner: false`). Las fichas de proyecto
están marcadas como reales (`provisional: false`).

---

## Vista general

- **Inicio:** presentación, objetivo personal, stack habitual y accesos rápidos.
- **Proyectos:** tarjetas generadas desde datos, filtros por motor y género, contador de resultados
  y estado vacío.
- **Detalle de proyecto:** descripción completa, rol y responsabilidades, mecánicas y sistemas,
  tecnologías, galería con miniaturas, nota sobre las imágenes, vídeos opcionales y enlace al
  repositorio o a la demo.
- **Habilidades:** categorías con barras de nivel orientativas.
- **Sobre mí:** retrato pendiente, enfoque de trabajo, intereses y objetivo personal.
- **Contacto:** GitHub configurado; LinkedIn, itch.io y correo quedan como «Pendiente».
- **Extras:** navegación fija, scroll suave, sección activa, barra de progreso, botón «volver
  arriba», animaciones de entrada, enlaces directos a proyectos (`#proyecto/<id>`) y pie de página.

La página se genera en el navegador a partir de tres fuentes de datos:

| Archivo | Contenido |
| --- | --- |
| `js/config.js` | Datos personales, navegación, hero, «Sobre mí», contacto, pie y SEO. |
| `js/data/projects.js` | Registro de proyectos y esquema de cada ficha. |
| `js/data/skills.js` | Categorías y niveles de habilidades. |

---

## Estructura del proyecto

```text
WebPagePortfolio/
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
            ├── the-angels-of-the-road/
            │   ├── cover.webp
            │   ├── gallery-01.webp
            │   └── gallery-02.webp
            └── ecos-de-tinta/
                ├── cover.webp
                ├── gallery-01.webp
                └── gallery-02.webp
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

## Datos y responsabilidades

- **`js/config.js`**: nombre, iniciales, rol, SEO, navegación, hero, «Sobre mí», contacto y pie.
- **`js/data/projects.js`**: array `projects`; cada objeto genera una tarjeta, sus filtros y la
  ficha. `getProjectById()` resuelve los enlaces directos.
- **`js/data/skills.js`**: `skillCategories` y `skillsMeta.showNote`.
- **`js/modules/site.js`**: pinta todo lo anterior en el HTML y actualiza metadatos SEO.
- **`js/modules/projects.js`**: tarjetas, filtros derivados y estado vacío.
- **`js/modules/project-dialog.js`**: `<dialog>` nativo, galería, historial, foco y hash.
- **`js/modules/skills.js`**: tarjetas de habilidades y barras de nivel.
- **`js/modules/nav.js`**: menú móvil, scroll suave, sección activa y progreso.
- **`js/modules/reveal.js`**: animaciones de entrada con `IntersectionObserver`.
- **`js/modules/dom.js`** e **`icons.js`**: utilidades y registro de iconos SVG.

---

## Vista previa local

El sitio usa **módulos ES** (`<script type="module">`). Por seguridad, los navegadores no cargan
módulos desde `file://`, así que **no abras `index.html` con doble clic**: verás la estructura sin
el contenido generado.

Usa un servidor HTTP local. Por ejemplo, con Python:

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

## Publicar en GitHub Pages

El repositorio ya existe: `wassup-999/WebPagePortfolio`. Si partes de otro equipo o de una copia,
estos son los pasos completos.

### 1. Revisar el remoto

```powershell
git remote -v
```

Debe apuntar a:

```text
https://github.com/wassup-999/WebPagePortfolio.git
```

Si conserva el nombre antiguo con la errata `WebPagePortolio`, corrígelo:

```powershell
git remote set-url origin https://github.com/wassup-999/WebPagePortfolio.git
```

> En este equipo `git` no está en el `PATH`. Puedes usar **GitHub Desktop** o invocar la instalación
> que incluye, por ejemplo:
> `C:\Users\Alumno\AppData\Local\GitHubDesktop\app-3.6.10\resources\app\git\cmd\git.exe`.
> La versión puede cambiar; si actualizas GitHub Desktop, localiza de nuevo `git.exe`.

### 2. Subir los archivos

```powershell
git add .
git commit -m "Portafolio con proyectos reales"
git push -u origin main
```

Si el repositorio ya tenía commits y la rama `main` existe, basta con `git push`.

### 3. Activar GitHub Pages

1. Abre **Settings → Pages** en el repositorio.
2. En **Build and deployment → Source**, elige **Deploy from a branch**.
3. Selecciona la rama **main** y la carpeta **/(root)**.
4. Pulsa **Save**.
5. Espera uno o dos minutos. La URL aparecerá en la misma página:

   ```text
   https://wassup-999.github.io/WebPagePortfolio/
   ```

### 4. Comprobar

- Abre la URL en una ventana privada.
- Navega a `#proyecto/the-angels-of-the-road` y `#proyecto/ecos-de-tinta`.
- Comprueba que las imágenes y el favicon cargan (rutas relativas).
- Revisa la consola del navegador: no debe haber errores 404.
- Si usas un dominio propio, configúralo en **Settings → Pages → Custom domain** y añade el archivo
  `CNAME` que GitHub indique.

> El archivo `.nojekyll` ya está incluido para que GitHub Pages no procese el sitio con Jekyll.
> No lo elimines.

### 5. Si la publicación falla

GitHub Pages ejecuta el flujo **Actions → pages build and deployment**. Si el paso
**Deploy to GitHub Pages** falla:

1. Abre la pestaña **Actions** del repositorio y entra en la ejecución fallida.
2. Pulsa **Re-run all jobs**. Los fallos de despliegue suelen ser transitorios.
3. Comprueba que en **Settings → Pages → Source** está seleccionada la rama `main` y la carpeta
   `/(root)`.
4. Espera a que la ejecución termine en verde y recarga la URL con `Ctrl+F5`.

Mientras la última ejecución esté en rojo, GitHub Pages sigue mostrando la publicación anterior
(o la página por defecto si nunca se publicó correctamente).

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
    { src: "assets/images/projects/mi-juego/01.webp", alt: "Imagen 1" },
    { src: "assets/images/projects/mi-juego/02.webp", alt: "Imagen 2" },
  ],
  galleryNote: "Arte oficial del proyecto; no son capturas de gameplay.", // opcional
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
- `galleryNote` sirve para aclarar el origen de las imágenes (arte oficial, capturas, renders...).
- `accent` admite cualquier color HEX válido. Se usa en hover, borde y foco.
- Para quitar un proyecto, elimina su objeto. Los filtros se recalculan solos.
- Para reordenar, cambia el orden del array: las tarjetas se numeran en ese orden.

### Enlaces directos

Cada ficha tiene una URL propia:

```text
https://wassup-999.github.io/WebPagePortfolio/#proyecto/mi-juego
```

Al abrirla se abre el modal correspondiente. El botón Atrás del navegador cierra la ficha y
restaura el foco en la tarjeta. Si el `id` no existe, la URL se limpia automáticamente.

---

## Habilidades

Edita `js/data/skills.js`:

```js
export const skillsMeta = {
  showNote: true, // muestra la nota de que los niveles son orientativos
};

export const skillCategories = [
  {
    id: "engines",
    icon: "engine",                  // clave del registro de iconos
    title: "Motores de videojuegos",
    description: "Texto breve de la categoría.",
    items: [
      { name: "Unity", level: 82 },  // level: 0–100
      { name: "Unreal Engine", level: 32 },
    ],
  },
];
```

- `level` se limita a 0–100 y se etiqueta como Básico (<50), Intermedio (50–74) o Avanzado (≥75).
- `skillsMeta.showNote` controla la nota que recuerda que los niveles son orientativos.
- Iconos disponibles: `engine`, `code`, `tools`, `design`, `layers`, `web`. Para añadir uno nuevo,
  registra su SVG en `js/modules/icons.js`.
- Los niveles son una valoración personal. Ajusta los umbrales en `levelLabel()` si prefieres otra
  escala.

---

## Contacto y enlaces

Edita `site.contact.links` en `js/config.js`:

```js
{
  id: "github",
  label: "GitHub",
  handle: "wassup-999",
  url: "https://github.com/wassup-999",
  icon: "github",
  hint: "Código y repositorios",
}
```

- `url` vacía → tarjeta no clicable con estado «Pendiente».
- `mailto:` funciona para el correo: `mailto:tu-correo@ejemplo.com`.
- Los enlaces `http(s)` se abren en una pestaña nueva con `rel="noopener noreferrer"`.
- Iconos disponibles: `github`, `linkedin`, `itch`, `mail`.
- Puedes añadir o quitar tarjetas; el grid se adapta.

Actualmente solo GitHub está configurado. Para activar LinkedIn, itch.io o el correo, rellena sus
`url` y cambia `handle` por el dato real.

---

## Imágenes, galería y vídeos

### Portada e imágenes

- Portada (`cover`): 1600×900 px, formato horizontal 16:9.
- Galería (`gallery`): también 16:9; se muestran en la galería y como miniaturas.
- Escribe siempre `alt` descriptivo. No uses «imagen» o «captura» sin contexto.
- Las imágenes se cargan con `loading="lazy"` salvo la ilustración del hero, que tiene prioridad.
- Las imágenes actuales de los proyectos son **arte oficial de los repositorios**, adaptado a
  portada y galería. No son capturas de gameplay. La ficha lo indica con `galleryNote`.

### Sustituir el retrato

El retrato sigue siendo un marcador de posición:

- Archivo actual: `assets/images/avatar-placeholder.svg` (600×700).
- Sustitúyelo por una fotografía o ilustración propia.
- Mantén el nombre si no quieres tocar rutas, o actualiza `index.html` y `photoLabel` en
  `js/config.js`.
- Cambia `photoLabel` de «Retrato pendiente» al texto que corresponda cuando uses una imagen real.

### Añadir capturas reales

Cuando tengas capturas de gameplay:

1. Guárdalas en `assets/images/projects/<slug>/` en formato `.webp` o `.jpg`.
2. Añádelas al array `gallery` con un `alt` que describa la escena.
3. Ajusta o elimina `galleryNote` si todas las imágenes pasan a ser capturas reales.

### Vídeos

El campo `videos` está preparado y vacío en los proyectos actuales. Usa la URL de inserción, no la
de la página del vídeo:

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

`assets/images/og-cover.png` se usa en `og:image` y `twitter:image`. En `index.html` ya se indica la
URL absoluta del sitio publicado:

```html
<meta property="og:image" content="https://wassup-999.github.io/WebPagePortfolio/assets/images/og-cover.png" />
```

Si cambias de usuario, repositorio o dominio, actualiza también `og:url`, `canonical` y las URLs de
Twitter en `index.html`. El módulo `site.js` vuelve a calcularlas en tiempo de ejecución para la
página actual.

---

## Filtros

Los filtros se generan a partir de los valores únicos de `engine` y `genre`:

- Cada grupo incluye «Todos» y el número de proyectos.
- Los filtros de motor y género se combinan (AND).
- El contador anuncia el resultado y los filtros activos.
- Si no hay coincidencias, aparece un estado vacío con un botón para limpiar.
- Para añadir un motor o género nuevo, basta con escribir ese valor en un proyecto.

No hay una lista fija de filtros que mantener. Si en el futuro quieres filtrar por otra propiedad
(por ejemplo, `year` o `status`), añade una fila en `index.html` con `data-filter="year"`, replica
la lógica de `buildFilterGroup` y amplía `matchesFilters` en `js/modules/projects.js`.

Con los dos proyectos actuales, el filtro de motor solo muestra «Unity»; el de género muestra
«Plataformas 2D» y «Beat 'em up 2.5D». Se ampliará automáticamente al añadir proyectos.

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

## Contenido pendiente y notas de veracidad

Contenido que todavía falta y que **no se ha inventado**:

- **Retrato del autor:** se mantiene el marcador `avatar-placeholder.svg` y la etiqueta «Retrato
  pendiente».
- **Capturas de gameplay:** las imágenes actuales son arte oficial de los repositorios, no capturas
  del juego en ejecución.
- **Vídeos:** no hay vídeos publicados; el campo está preparado.
- **Enlaces jugables:** ninguno de los dos proyectos tiene una demo o descarga pública enlazada.
- **Redes:** LinkedIn, itch.io y correo están sin configurar y se muestran como «Pendiente».

Notas sobre los datos:

- **The Angels of the Road** se apoya en el repositorio `sowTecsup/TheAngelOfTheRoad` y en los
  commits de `wassup-999` (movimiento y salto, `BoxCastAll`/Raycast, segunda mecánica,
  ScriptableObjects, `GameManager` y organización de escenas).
- **Ecos de Tinta** se apoya en `HaxBv/EcosDeTinta`; las aportaciones de `wassup-999` documentadas
  son el movimiento del jugador, la cámara y la organización de escenas y scripts. Los sistemas de
  combate, enemigos, habilidades y jefes pertenecen al equipo del proyecto y no se atribuyen al
  autor de este portafolio.
- La ortografía del nombre se mantiene tal como la proporcionó el autor: **Sebaztián Traviz Quispe
  Perez**. Si se desea añadir o quitar tildes, edita `name` en `js/config.js` y el texto visible de
  `index.html` (los metadatos se regeneran desde `config.js`).

---

## Solución de problemas

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| La página se ve vacía o sin proyectos al abrirla con doble clic | Los módulos ES no funcionan en `file://` | Usa un servidor HTTP local (ver [Vista previa local](#vista-previa-local)). |
| Error 404 en GitHub Pages | Pages no está activado o la rama/carpeta no es correcta | Revisa **Settings → Pages** y espera a la publicación. |
| Sigue apareciendo la página por defecto de Jekyll | Los archivos del sitio aún no están en la rama publicada | Haz commit y push de `index.html` y las carpetas `css/`, `js/` y `assets/`; luego revisa **Settings → Pages**. |
| El workflow de Pages falla en «Deploy to GitHub Pages» | Fallo transitorio del despliegue | Abre **Actions**, entra en la ejecución y usa **Re-run all jobs** (ver [Publicar en GitHub Pages](#publicar-en-github-pages)). |
| Las imágenes no cargan tras publicar | Ruta absoluta con `/` o nombre con mayúsculas distinto | Usa rutas relativas y respeta mayúsculas/minúsculas de Linux. |
| Un proyecto no abre en su enlace directo | `id` duplicado o inexistente | Usa un `id` único y compruébalo en `js/data/projects.js`. |
| Los filtros no muestran un valor nuevo | El valor está escrito de forma distinta | Usa exactamente el mismo texto en todos los proyectos. |
| Los cambios no aparecen | Caché del navegador o de GitHub Pages | `Ctrl+F5`, ventana privada y espera uno o dos minutos. |
| El modal no se cierra con `Esc` | Navegador muy antiguo sin soporte de `<dialog>` | Usa un navegador actual; el botón de cerrar sigue funcionando. |
| Los vídeos no se ven | Se usó la URL de la página en lugar de la de inserción | Usa `.../embed/ID` (YouTube) o `/video/ID` (Vimeo). |
| Los enlaces de contacto no son clicables | `url` vacía | Rellena la URL en `site.contact.links`. |

---

## Créditos

- **Diseño y código:** plantilla original adaptada para este portafolio.
- **Iconos:** SVG propios inspirados en formas geométricas.
- **Ilustración del hero y favicon:** recursos SVG creados para el sitio.
- **Portadas y galerías de proyectos:** arte oficial de los repositorios
  [`sowTecsup/TheAngelOfTheRoad`](https://github.com/sowTecsup/TheAngelOfTheRoad) y
  [`HaxBv/EcosDeTinta`](https://github.com/HaxBv/EcosDeTinta), adaptado a 16:9 y etiquetado en la
  ficha como arte del proyecto. No son capturas de gameplay.
- **Retrato:** marcador de posición pendiente de sustituir.
- No se incluyen fuentes, librerías ni recursos de terceros que requieran atribución.

Añade aquí tu licencia preferida (por ejemplo, MIT para el código y «Todos los derechos
reservados» para el contenido) cuando publiques el repositorio.
