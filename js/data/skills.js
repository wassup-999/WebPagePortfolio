/**
 * ============================================================================
 *  HABILIDADES
 * ============================================================================
 *  Cada categoría genera una tarjeta. Cada elemento genera una barra de nivel.
 *  `level` es un valor orientativo de 0 a 100 y se muestra como
 *  Básico / Intermedio / Avanzado. Añade, elimina o reordena libremente.
 * ============================================================================
 */

export const skillsMeta = {
  // true → muestra la nota que recuerda sustituir los niveles de ejemplo.
  provisional: true,
};

export const skillCategories = [
  {
    id: "engines",
    icon: "engine",
    title: "Motores de videojuegos",
    description: "Desarrollo, prototipado e integración de sistemas dentro del motor.",
    items: [
      { name: "Unity", level: 85 },
      { name: "Unreal Engine 5", level: 70 },
      { name: "Godot", level: 65 },
    ],
  },
  {
    id: "languages",
    icon: "code",
    title: "Lenguajes de programación",
    description: "Programación de gameplay, herramientas y lógica de sistemas.",
    items: [
      { name: "C#", level: 85 },
      { name: "C++", level: 70 },
      { name: "GDScript", level: 65 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    id: "tools",
    icon: "tools",
    title: "Herramientas de desarrollo",
    description: "Control de versiones, creación de contenido y depuración.",
    items: [
      { name: "Git / GitHub", level: 80 },
      { name: "Visual Studio", level: 80 },
      { name: "Blender", level: 55 },
      { name: "Aseprite", level: 60 },
    ],
  },
  {
    id: "design",
    icon: "design",
    title: "Diseño de videojuegos",
    description: "Mecánicas, niveles y comunicación de la experiencia.",
    items: [
      { name: "Diseño de mecánicas", level: 75 },
      { name: "Diseño de niveles", level: 70 },
      { name: "Game feel y feedback", level: 72 },
      { name: "Documentación de diseño", level: 68 },
    ],
  },
  {
    id: "production",
    icon: "layers",
    title: "Producción y colaboración",
    description: "Organización del trabajo y comunicación dentro de un equipo.",
    items: [
      { name: "Prototipado rápido", level: 78 },
      { name: "Pruebas y balanceo", level: 70 },
      { name: "Trello / Notion", level: 65 },
      { name: "Revisiones de código", level: 68 },
    ],
  },
  {
    id: "web",
    icon: "web",
    title: "Otras tecnologías",
    description: "Herramientas complementarias para publicar y presentar proyectos.",
    items: [
      { name: "HTML5 / CSS3", level: 70 },
      { name: "Diseño de interfaces", level: 65 },
      { name: "GitHub Pages", level: 70 },
      { name: "Accesibilidad web", level: 60 },
    ],
  },
];
