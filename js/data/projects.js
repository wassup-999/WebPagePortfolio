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
 *  year            Año o periodo del proyecto.
 *  status          Estado del proyecto (proyecto final, en desarrollo...).
 *  role            Tu rol en una línea.
 *  team            Contexto del equipo (opcional).
 *  technologies    Lenguajes, herramientas y software utilizados.
 *  responsibilities Array con tus responsabilidades concretas.
 *  mechanics       Array con las mecánicas o sistemas del proyecto.
 *  cover           Ruta a la portada (idealmente 1600×900).
 *  coverAlt        Texto alternativo de la portada.
 *  gallery         Array de { src, alt } para la galería (opcional).
 *  galleryNote     Nota bajo el título de la galería (opcional).
 *  videos          Array de { title, embedUrl } con URLs embebibles (opcional).
 *  links.repo      URL del repositorio. Vacío = enlace pendiente.
 *  links.play      URL para jugar o descargar. Vacía = enlace pendiente.
 *  accent          Color de acento de la tarjeta en formato HEX.
 *  provisional     true → muestra la etiqueta "Provisional" en la tarjeta.
 * ============================================================================
 */

export const projects = [
  {
    id: "the-angels-of-the-road",
    title: "The Angels of the Road",
    summary:
      "Proyecto final 2D en Unity: avance automático, saltos sobre tablones y objetos interactivos.",
    description: [
      "The Angels of the Road —cuyo repositorio mantiene el nombre TheAngelOfTheRoad— es un proyecto final desarrollado en Unity con C#. El personaje avanza automáticamente por un escenario 2D y el jugador debe superar obstáculos con saltos, mientras los tablones y los objetos del entorno condicionan el ritmo de la partida.",
      "El repositorio incluye un menú principal, una escena de gameplay, generación de tablones, objetos arrastrables y destructibles, y una barra de despertar que reacciona al daño. Mi trabajo se centró en el movimiento y el salto del jugador, la detección de superficies, la segunda mecánica del proyecto y la organización de datos y escenas.",
      "La ficha enlaza al repositorio público para consultar el código, los scripts y los recursos del proyecto.",
    ],
    engine: "Unity",
    genre: "Plataformas 2D",
    year: "2025",
    status: "Proyecto final",
    role: "Programador de gameplay e interacción",
    team: "Proyecto final colaborativo · repositorio de sowTecsup",
    technologies: ["Unity", "C#", "URP 2D", "ScriptableObjects", "Git"],
    responsibilities: [
      "Programación del movimiento automático y del salto del jugador.",
      "Detección de tablones y superficies con BoxCastAll/Raycast para habilitar el salto.",
      "Implementación y ajuste de la segunda mecánica del proyecto.",
      "Datos del jugador configurables mediante ScriptableObjects.",
      "Gestión del GameManager y organización de escenas.",
    ],
    mechanics: [
      "Avance automático del personaje en un escenario 2D.",
      "Salto activado al detectar tablones con BoxCastAll.",
      "Generación de tablones con el ratón a través del GameManager.",
      "Barra de despertar que disminuye al recibir daño.",
      "Datos de jugador configurables con ScriptableObjects.",
    ],
    cover: "assets/images/projects/the-angels-of-the-road/cover.webp",
    coverAlt: "Portada de The Angels of the Road con arte oficial del proyecto",
    gallery: [
      {
        src: "assets/images/projects/the-angels-of-the-road/gallery-01.webp",
        alt: "Arte promocional pixel art de The Angels of the Road",
      },
      {
        src: "assets/images/projects/the-angels-of-the-road/gallery-02.webp",
        alt: "Detalle del arte oficial de The Angels of the Road",
      },
    ],
    galleryNote: "Arte oficial del repositorio del proyecto; no son capturas de gameplay.",
    videos: [],
    links: {
      repo: "https://github.com/sowTecsup/TheAngelOfTheRoad",
      play: "",
    },
    accent: "#45e0c8",
    provisional: false,
  },

  {
    id: "ecos-de-tinta",
    title: "Ecos de Tinta",
    summary:
      "Juego de acción beat 'em up en Unity 6 con combate, enemigos y cámara Cinemachine.",
    description: [
      "Ecos de Tinta es un juego de acción 2D/2.5D desarrollado en Unity 6 con C#. La propuesta combina combate cuerpo a cuerpo, enemigos y escenarios con una dirección artística inspirada en la tinta.",
      "El proyecto utiliza Cinemachine para la cámara, el Input System para los controles y URP para el renderizado. Incluye sistemas de combate, enemigos, habilidades y gestión de escenas, desarrollados por el equipo del proyecto.",
      "Mi participación se centró en el controlador de movimiento del jugador, la cámara beat 'em up y la organización de escenas y scripts. Esta ficha separa esas aportaciones del resto de sistemas del juego para no atribuirme trabajo que no realicé.",
    ],
    engine: "Unity",
    genre: "Beat 'em up 2.5D",
    year: "2026",
    status: "En desarrollo",
    role: "Programador de movimiento y cámara",
    team: "Proyecto colaborativo · repositorio de HaxBv",
    technologies: ["Unity 6", "C#", "Cinemachine", "Input System", "URP", "Git"],
    responsibilities: [
      "Programación del controlador de movimiento del jugador.",
      "Implementación de la cámara beat 'em up con Cinemachine.",
      "Organización de escenas y estructura de scripts.",
      "Colaboración en la escena principal del proyecto.",
    ],
    mechanics: [
      "Movimiento con CharacterController: desplazamiento, salto, gravedad y sprint.",
      "Cámara beat 'em up con seguimiento, bloqueo de ejes y límites de nivel.",
      "Entrada mediante el Input System de Unity.",
      "Orientación visual del personaje y eventos de velocidad y salto para animación.",
    ],
    cover: "assets/images/projects/ecos-de-tinta/cover.webp",
    coverAlt: "Portada de Ecos de Tinta con el logotipo y arte oficial del proyecto",
    gallery: [
      {
        src: "assets/images/projects/ecos-de-tinta/gallery-01.webp",
        alt: "Escenario oficial de Ecos de Tinta",
      },
      {
        src: "assets/images/projects/ecos-de-tinta/gallery-02.webp",
        alt: "Selección de personajes del arte oficial de Ecos de Tinta",
      },
    ],
    galleryNote: "Arte oficial del repositorio del proyecto; no son capturas de gameplay.",
    videos: [],
    links: {
      repo: "https://github.com/HaxBv/EcosDeTinta",
      play: "",
    },
    accent: "#f08bd4",
    provisional: false,
  },
];

/** Devuelve un proyecto por su id o null si no existe. */
export function getProjectById(id) {
  return projects.find((project) => project.id === id) ?? null;
}
