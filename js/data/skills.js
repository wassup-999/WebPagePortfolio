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
  // true → muestra la nota que recuerda que los niveles son orientativos.
  showNote: true,
};

export const skillCategories = [
  {
    id: "engines",
    icon: "engine",
    title: "Motores de videojuegos",
    description: "Desarrollo e integración de sistemas dentro del motor.",
    items: [
      { name: "Unity", level: 82 },
      { name: "Unreal Engine", level: 32 },
    ],
  },
  {
    id: "languages",
    icon: "code",
    title: "Lenguajes de programación",
    description: "Programación de gameplay y lógica de sistemas.",
    items: [
      { name: "C#", level: 85 },
      { name: "C++", level: 38 },
    ],
  },
  {
    id: "tools",
    icon: "tools",
    title: "Herramientas y tecnologías",
    description: "Control de versiones, entornos de desarrollo y tecnologías complementarias.",
    items: [
      { name: "Visual Studio", level: 72 },
      { name: "Git / GitHub", level: 65 },
      { name: "MySQL", level: 45 },
      { name: "OpenGL", level: 38 },
    ],
  },
  {
    id: "development",
    icon: "design",
    title: "Desarrollo de videojuegos",
    description: "Sistemas de gameplay y organización del trabajo dentro del proyecto.",
    items: [
      { name: "Programación de gameplay", level: 75 },
      { name: "Organización de escenas", level: 70 },
      { name: "ScriptableObjects", level: 68 },
      { name: "Interacción y UI", level: 65 },
    ],
  },
];
