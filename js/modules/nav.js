/** Navegación: menú móvil, sección activa, progreso de lectura y botón "arriba". */

import { qs, qsa } from "./dom.js";

export function initNav() {
  const header = qs("[data-header]");
  const toggle = qs("[data-nav-toggle]");
  const nav = qs("[data-nav]");
  const links = qsa("[data-nav-link]");
  const progress = qs("[data-scroll-progress]");
  const toTop = qs("[data-to-top]");
  const sections = qsa("main section[id]");

  let ticking = false;

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("is-open", open);
    header?.classList.toggle("menu-open", open);
  }

  function setActive(id) {
    links.forEach((link) => {
      const active = link.dataset.navLink === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function updateOnScroll() {
    const scrollY = window.scrollY;
    const offset = (header?.offsetHeight || 0) + 100;

    // Sección activa: la última cuyo inicio ya ha pasado el umbral.
    let current = sections[0]?.id;
    sections.forEach((section) => {
      if (section.offsetTop <= scrollY + offset) current = section.id;
    });
    if (current) setActive(current);

    header?.classList.toggle("is-scrolled", scrollY > 8);

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(scrollY / max, 1) : 0;
    progress?.style.setProperty("--progress", ratio.toFixed(4));

    toTop?.classList.toggle("is-visible", scrollY > 560);
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateOnScroll);
  }

  toggle?.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav?.classList.contains("is-open")) return;
    if (nav.contains(event.target) || toggle?.contains(event.target)) return;
    setMenu(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav?.classList.contains("is-open")) {
      setMenu(false);
      toggle?.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) setMenu(false);
    requestUpdate();
  });

  window.addEventListener("scroll", requestUpdate, { passive: true });

  toTop?.addEventListener("click", () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  });

  setMenu(false);
  updateOnScroll();
}
