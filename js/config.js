/**
 * ============================================================================
 *  CONFIGURACIÓN GENERAL DEL PORTAFOLIO
 * ============================================================================
 *  Este es el único archivo necesario para cambiar los datos personales,
 *  la navegación, el hero, la sección "Sobre mí", el contacto y el pie de página.
 *
 *  Los proyectos viven en  js/data/projects.js
 *  Las habilidades viven en  js/data/skills.js
 *
 *  Los textos marcados como provisionales son contenido de ejemplo:
 *  sustitúyelos por tu información real antes de publicar.
 * ============================================================================
 */

export const site = {
  /**
   * true  → muestra la franja superior que avisa de que el contenido es de ejemplo.
   * false → oculta la franja (hazlo cuando el portafolio tenga tus datos reales).
   */
  showDemoBanner: true,

  name: "Tu Nombre",
  initials: "", // Si se deja vacío, se calcula a partir de "name".
  role: "Desarrollador de videojuegos",
  roleShort: "Game Developer",

  seo: {
    title: "Tu Nombre — Portafolio de desarrollo de videojuegos",
    description:
      "Portafolio personal de desarrollo de videojuegos: proyectos, roles, mecánicas implementadas, tecnologías y contacto.",
    ogImage: "assets/images/og-cover.png",
  },

  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "proyectos", label: "Proyectos" },
    { id: "habilidades", label: "Habilidades" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "contacto", label: "Contacto" },
  ],

  hero: {
    eyebrow: "Desarrollo de videojuegos",
    role: "Diseño y programo experiencias jugables",
    description:
      "Me interesa crear videojuegos con mecánicas claras, buen rendimiento y una experiencia cuidada. Aquí reúno los proyectos en los que he participado y lo que aporté en cada uno. Texto de ejemplo: personalízalo con tu propia presentación.",
    note: "Contenido de ejemplo · Sustituye los textos en js/config.js",
    tech: ["Unity", "Unreal Engine", "Godot", "C#", "C++"],
    badges: [
      { label: "Unity · C#", tone: "violet" },
      { label: "Unreal · Blueprints", tone: "amber" },
      { label: "Godot · GDScript", tone: "teal" },
    ],
  },

  about: {
    photoLabel: "Foto provisional",
    paragraphs: [
      "Soy un desarrollador de videojuegos interesado en crear experiencias claras, divertidas y técnicamente cuidadas. Me gusta trabajar en el punto donde el diseño de mecánicas se encuentra con la programación, cuidando tanto el comportamiento del juego como la sensación que transmite al jugador.",
      "A lo largo de distintos proyectos he asumido tareas de programación de gameplay, diseño de niveles, interfaces y optimización. Este portafolio recoge esos trabajos y detalla mi contribución concreta en cada uno. Este texto es provisional: sustitúyelo por tu trayectoria real.",
    ],
    highlights: [
      "Programación de mecánicas y sistemas de gameplay",
      "Prototipado rápido y iteración con el equipo",
      "Diseño de niveles y experiencia de usuario",
      "Optimización, herramientas internas y rendimiento",
    ],
    interests: [
      "Game feel",
      "Narrativa interactiva",
      "Sistemas emergentes",
      "Multijugador",
      "Herramientas internas",
      "Accesibilidad",
    ],
    quote:
      "«Un buen juego se entiende en los primeros segundos y se sigue descubriendo horas después.» — Texto de ejemplo.",
  },

  contact: {
    intro:
      "¿Tienes un proyecto en marcha, una propuesta o simplemente quieres comentar algo? Puedes encontrarme en las siguientes plataformas. Configura tus enlaces reales en js/config.js.",
    availability:
      "Los enlaces marcados como «Pendiente» son de ejemplo y se activan al rellenar su URL en js/config.js.",
    links: [
      {
        id: "github",
        label: "GitHub",
        handle: "tu-usuario",
        url: "", // Ejemplo: "https://github.com/tu-usuario"
        icon: "github",
        hint: "Código y repositorios",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        handle: "tu-perfil",
        url: "", // Ejemplo: "https://www.linkedin.com/in/tu-perfil"
        icon: "linkedin",
        hint: "Perfil profesional",
      },
      {
        id: "itch",
        label: "itch.io",
        handle: "tu-estudio",
        url: "", // Ejemplo: "https://tu-estudio.itch.io"
        icon: "itch",
        hint: "Demos y juegos publicados",
      },
      {
        id: "email",
        label: "Correo",
        handle: "tu-correo@ejemplo.com",
        url: "", // Ejemplo: "mailto:tu-correo@ejemplo.com"
        icon: "mail",
        hint: "Contacto directo",
      },
    ],
  },

  footer: {
    meta: "Portafolio estático alojado en GitHub Pages.",
    legal: "© {year} {name}. Todos los derechos reservados.",
    built: "HTML · CSS · JavaScript, sin frameworks ni proceso de compilación.",
  },
};
