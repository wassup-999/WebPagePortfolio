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
 *  Los textos marcados como pendientes son los únicos que falta completar.
 * ============================================================================
 */

export const site = {
  /**
   * true  → muestra la franja superior de aviso de plantilla.
   * false → la oculta (el sitio ya usa datos reales).
   */
  showDemoBanner: false,

  name: "Sebaztián Traviz Quispe Perez",
  initials: "ST", // Si se deja vacío, se calcula a partir de "name".
  role: "Programador de videojuegos",
  roleShort: "Game Programmer",

  seo: {
    title: "Sebaztián Traviz Quispe Perez — Portafolio de videojuegos",
    description:
      "Portafolio de programación de videojuegos: proyectos en Unity con C#, rol, mecánicas implementadas, tecnologías y contacto.",
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
    eyebrow: "Programación de videojuegos",
    role: "Programador de videojuegos · Unity · C#",
    description:
      "Mi objetivo es desarrollar y aprender nuevas técnicas de programación para crear o contribuir en proyectos innovadores y de todo tipo de género. Aquí reúno los videojuegos en los que he participado y explico mi contribución concreta en cada uno.",
    note: "Unity y C# como base · Repositorios públicos en GitHub",
    tech: ["Unity", "C#", "C++", "Unreal Engine", "OpenGL", "MySQL"],
    badges: [
      { label: "Unity · C#", tone: "violet" },
      { label: "Unreal Engine · Básico", tone: "amber" },
      { label: "C++ · OpenGL", tone: "teal" },
    ],
  },

  about: {
    photoLabel: "Retrato pendiente",
    paragraphs: [
      "Soy Sebaztián Traviz Quispe Perez, programador de videojuegos. Mi base principal es Unity con C#; también tengo conocimientos básicos de C++ y he utilizado OpenGL y MySQL. Mi objetivo es desarrollar y aprender nuevas técnicas de programación para crear o contribuir en proyectos innovadores y de todo tipo de género.",
      "En los proyectos en los que he participado me he centrado en programación de gameplay: movimiento y salto, interacción con el entorno, cámara, UI y organización de escenas. En este portafolio documento mi contribución concreta en cada juego, apoyándome en los repositorios públicos y en el historial de commits.",
      "También tengo nociones básicas de Unreal Engine y sigo ampliando mi formación. Este espacio irá creciendo con nuevos proyectos y materiales, como capturas de gameplay y vídeos.",
    ],
    highlights: [
      "Programación de gameplay en Unity con C#",
      "Movimiento, salto y control de cámara",
      "Interacción con el entorno y UI",
      "ScriptableObjects y organización de escenas",
    ],
    interests: [
      "Programación de gameplay",
      "Nuevas técnicas de programación",
      "Proyectos innovadores",
      "Distintos géneros",
      "Unity y C#",
      "Aprendizaje continuo",
    ],
    quote:
      "«Desarrollar y aprender nuevas técnicas de programación para así lograr crear o contribuir en proyectos innovadores y de todo tipo de género.» — Objetivo personal.",
  },

  contact: {
    intro:
      "Puedes ver mi código y mis proyectos en GitHub. Los demás canales se irán añadiendo cuando estén disponibles.",
    availability:
      "GitHub es el canal principal. LinkedIn, itch.io y el correo están pendientes de configurar.",
    links: [
      {
        id: "github",
        label: "GitHub",
        handle: "wassup-999",
        url: "https://github.com/wassup-999",
        icon: "github",
        hint: "Código y repositorios",
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        handle: "Por configurar",
        url: "",
        icon: "linkedin",
        hint: "Perfil profesional (pendiente)",
      },
      {
        id: "itch",
        label: "itch.io",
        handle: "Por configurar",
        url: "",
        icon: "itch",
        hint: "Demos y juegos publicados (pendiente)",
      },
      {
        id: "email",
        label: "Correo",
        handle: "Por configurar",
        url: "",
        icon: "mail",
        hint: "Contacto directo (pendiente)",
      },
    ],
  },

  footer: {
    meta: "Portafolio estático alojado en GitHub Pages.",
    legal: "© {year} {name}. Todos los derechos reservados.",
    built: "HTML · CSS · JavaScript, sin frameworks ni proceso de compilación.",
  },
};
