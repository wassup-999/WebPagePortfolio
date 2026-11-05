/** Punto de entrada: inicializa los módulos en el orden correcto. */

import { initSite } from "./modules/site.js";
import { initNav } from "./modules/nav.js";
import { initProjects } from "./modules/projects.js";
import { initSkills } from "./modules/skills.js";
import { initProjectDialog } from "./modules/project-dialog.js";
import { initReveal } from "./modules/reveal.js";

function boot() {
  initSite();          // contenido de config.js (header, hero, about, contacto...)
  initNav();            // comportamiento de la navegación
  initProjects();       // tarjetas y filtros
  initSkills();         // categorías de habilidades
  initProjectDialog();  // vista detallada + enlaces directos
  initReveal();         // animaciones de entrada del contenido ya renderizado
  document.documentElement.classList.add("is-ready");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
