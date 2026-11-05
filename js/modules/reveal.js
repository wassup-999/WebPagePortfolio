/** Animaciones de entrada con IntersectionObserver. */

import { qsa } from "./dom.js";

let observer = null;

function revealAll(elements) {
  elements.forEach((element) => element.classList.add("is-visible"));
}

function getObserver() {
  if (observer || !("IntersectionObserver" in window)) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  return observer;
}

/** Observa los elementos [data-reveal] que todavía no se han mostrado. */
export function initReveal(scope = document) {
  const elements = qsa("[data-reveal]:not(.is-visible)", scope);
  if (!elements.length) return;

  const io = getObserver();
  if (!io) {
    revealAll(elements);
    return;
  }

  elements.forEach((element) => io.observe(element));
}
