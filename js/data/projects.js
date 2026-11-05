/**
 * ============================================================================
 *  REGISTRO DE PROYECTOS
 * ============================================================================
 *  Cada objeto de este array genera automáticamente una tarjeta, sus filtros
 *  y la vista detallada. No hace falta tocar el HTML ni el CSS para añadir,
 *  quitar o modificar un videojuego.
 *
 *  CAMPOS
 *  ---------------------------------------------------------------------------
 *  id              Identificador único en formato slug (sin espacios).
 *  title           Nombre del videojuego.
 *  summary         Descripción breve para la tarjeta (1-2 líneas).
 *  description     Array de párrafos para la ficha completa.
 *  engine          Motor principal. Genera automáticamente un filtro.
 *  genre           Género principal. Genera automáticamente un filtro.
 *  year            Año o periodo ("20XX" si aún es provisional).
 *  status          Estado del proyecto (prototipo, publicado, demo...).
 *  role            Tu rol en una línea.
 *  team            Contexto del equipo (opcional).
 *  technologies    Lenguajes, herramientas y software utilizados.
 *  responsibilities Array con tus responsabilidades concretas.
 *  mechanics       Array con las mecánicas o sistemas implementados.
 *  cover           Ruta a la portada (idealmente 1600×900).
 *  coverAlt        Texto alternativo de la portada.
 *  gallery         Array de { src, alt } para la galería (opcional).
 *  videos          Array de { title, embedUrl } con URLs embebibles (opcional).
 *  links.repo      URL del repositorio. Vacío = enlace pendiente.
 *  links.play      URL para jugar o descargar. Vacía = enlace pendiente.
 *  accent          Color de acento de la tarjeta en formato HEX.
 *  provisional     true → muestra la etiqueta "Provisional" en la tarjeta.
 * ============================================================================
 */

export const projects = [
  {
    id: "nebula-drift",
    title: "Nebula Drift",
    summary:
      "Plataformas 2D de precisión en una estación espacial abandonada, con dash, gravedad variable y checkpoints.",
    description: [
      "Nebula Drift es un prototipo de plataformas 2D ambientado en una estación orbital en desuso. El jugador atraviesa salas conectadas, combina el impulso del dash con zonas de gravedad reducida y administra la energía de su traje para superar cada tramo.",
      "El proyecto se centró en conseguir un control preciso y legible: tiempos de salto ajustados, feedback visual constante y niveles que enseñan cada mecánica sin necesidad de tutoriales.",
    ],
    engine: "Unity",
    genre: "Plataformas 2D",
    year: "20XX",
    status: "Prototipo",
    role: "Programación de gameplay y diseño de niveles",
    team: "Equipo de ejemplo · 3 personas",
    technologies: ["C#", "Unity", "Aseprite", "Git"],
    responsibilities: [
      "Programación del controlador del jugador y de las cámaras.",
      "Implementación de checkpoints, guardado de progreso y respawn.",
      "Diseño de las tres primeras salas y ajuste de dificultad.",
      "Integración de animaciones y efectos de partículas.",
    ],
    mechanics: [
      "Movimiento con aceleración, coyote time y salto variable.",
      "Dash con coste de energía y reutilización en el aire.",
      "Zonas de gravedad modificada y plataformas móviles.",
      "Sistema de checkpoints y reaparición rápida.",
    ],
    cover: "assets/images/projects/nebula-drift/cover.svg",
    coverAlt: "Portada provisional de Nebula Drift con un planeta y una figura flotando",
    gallery: [
      {
        src: "assets/images/projects/nebula-drift/screenshot-01.svg",
        alt: "Captura provisional de Nebula Drift mostrando una sala de plataformas",
      },
      {
        src: "assets/images/projects/nebula-drift/screenshot-02.svg",
        alt: "Captura provisional de Nebula Drift con el HUD y una zona de baja gravedad",
      },
    ],
    videos: [],
    links: { repo: "", play: "" },
    accent: "#8b7bff",
    provisional: true,
  },

  {
    id: "echoes-of-the-rift",
    title: "Echoes of the Rift",
    summary:
      "Acción en primera persona en un complejo industrial invadido por una grieta dimensional.",
    description: [
      "Echoes of the Rift es una demo de acción en primera persona construida en Unreal Engine 5. La grieta altera la geometría del complejo y obliga al jugador a alternar entre dos estados del escenario para avanzar y combatir.",
      "El trabajo se centró en la respuesta de las armas, la lectura de los enemigos y la comunicación del estado del mundo mediante iluminación, sonido y efectos visuales.",
    ],
    engine: "Unreal Engine 5",
    genre: "Acción / FPS",
    year: "20XX",
    status: "Demo técnica",
    role: "Programación de IA, armas y sistemas de interacción",
    team: "Equipo de ejemplo · 5 personas",
    technologies: ["Blueprints", "C++", "Unreal Engine 5", "Blender"],
    responsibilities: [
      "Programación de la IA de enemigos mediante máquinas de estados.",
      "Sistema de disparo, retroceso, daño y feedback de impacto.",
      "Lógica de interacción con puertas, terminales y la grieta.",
      "Optimización de iluminación y ajustes de rendimiento.",
    ],
    mechanics: [
      "Enemigos con estados de patrulla, alerta, persecución y ataque.",
      "Alternancia entre dos versiones del escenario.",
      "Sistema de daño por zonas y respuesta audiovisual.",
      "Interacción contextual con objetos del entorno.",
    ],
    cover: "assets/images/projects/echoes-of-the-rift/cover.svg",
    coverAlt: "Portada provisional de Echoes of the Rift con una grieta luminosa",
    gallery: [
      {
        src: "assets/images/projects/echoes-of-the-rift/screenshot-01.svg",
        alt: "Captura provisional de un pasillo industrial de Echoes of the Rift",
      },
      {
        src: "assets/images/projects/echoes-of-the-rift/screenshot-02.svg",
        alt: "Captura provisional del HUD y la vista de arma de Echoes of the Rift",
      },
    ],
    videos: [],
    links: { repo: "", play: "" },
    accent: "#ffb86b",
    provisional: true,
  },

  {
    id: "pixel-garden",
    title: "Pixel Garden",
    summary:
      "Puzle relajante de jardinería por turnos: rota el terreno, riega y consigue que cada planta florezca.",
    description: [
      "Pixel Garden es un puzle por turnos con estética pixel art. Cada nivel es una cuadrícula de parcelas que el jugador rota, conecta y riega con recursos limitados. El objetivo es hacer florecer todas las plantas antes de que se agoten los turnos.",
      "El diseño se apoyó en reglas simples y legibles, con una interfaz que muestra siempre las consecuencias de cada acción y una curva de dificultad progresiva.",
    ],
    engine: "Godot",
    genre: "Puzle",
    year: "20XX",
    status: "Prototipo jugable",
    role: "Diseño de niveles, programación y UI",
    team: "Equipo de ejemplo · 2 personas",
    technologies: ["GDScript", "Godot", "Aseprite", "Git"],
    responsibilities: [
      "Diseño del sistema de turnos, recursos y condiciones de victoria.",
      "Programación de la cuadrícula y de las reglas de crecimiento.",
      "Creación de la interfaz y del flujo de niveles.",
      "Balanceo de los diez primeros puzles.",
    ],
    mechanics: [
      "Cuadrícula interactiva con rotación de parcelas.",
      "Recursos limitados de agua y abono.",
      "Crecimiento de plantas por turnos y combinaciones.",
      "Deshacer movimientos y reinicio rápido del nivel.",
    ],
    cover: "assets/images/projects/pixel-garden/cover.svg",
    coverAlt: "Portada provisional de Pixel Garden con plantas pixeladas",
    gallery: [
      {
        src: "assets/images/projects/pixel-garden/screenshot-01.svg",
        alt: "Captura provisional del tablero de Pixel Garden",
      },
      {
        src: "assets/images/projects/pixel-garden/screenshot-02.svg",
        alt: "Captura provisional de la interfaz de recursos de Pixel Garden",
      },
    ],
    videos: [],
    links: { repo: "", play: "" },
    accent: "#5fd99a",
    provisional: true,
  },

  {
    id: "skybound-arena",
    title: "Skybound Arena",
    summary:
      "Arena multijugador por equipos sobre islas flotantes, con movimiento aéreo y captura de puntos.",
    description: [
      "Skybound Arena es un prototipo de arena multijugador por equipos en islas flotantes. Los jugadores se desplazan con un planeador, controlan puntos de captura y utilizan habilidades de impulso para desplazar a los rivales.",
      "La prioridad técnica fue mantener un movimiento predecible en red y una interfaz clara incluso con varios jugadores en pantalla.",
    ],
    engine: "Unity",
    genre: "Multijugador / Arena",
    year: "20XX",
    status: "Prototipo en red",
    role: "Programación de red, movimiento y HUD",
    team: "Equipo de ejemplo · 4 personas",
    technologies: ["C#", "Unity", "Netcode", "Blender"],
    responsibilities: [
      "Sincronización del movimiento y de las habilidades en red.",
      "Sistema de captura de puntos y marcador por equipos.",
      "HUD con estado de captura, temporizador y puntuación.",
      "Pruebas de latencia y ajuste de la predicción del cliente.",
    ],
    mechanics: [
      "Planeador con control de altura y aterrizaje.",
      "Habilidades de impulso con tiempo de reutilización.",
      "Captura de puntos por presencia de equipo.",
      "Reaparición en bases y marcador en tiempo real.",
    ],
    cover: "assets/images/projects/skybound-arena/cover.svg",
    coverAlt: "Portada provisional de Skybound Arena con islas flotantes",
    gallery: [
      {
        src: "assets/images/projects/skybound-arena/screenshot-01.svg",
        alt: "Captura provisional de una arena de Skybound Arena",
      },
      {
        src: "assets/images/projects/skybound-arena/screenshot-02.svg",
        alt: "Captura provisional del marcador de Skybound Arena",
      },
    ],
    videos: [],
    links: { repo: "", play: "" },
    accent: "#58c9ff",
    provisional: true,
  },
];

/** Devuelve un proyecto por su id o null si no existe. */
export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}
