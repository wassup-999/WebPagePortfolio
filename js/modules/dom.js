/** Utilidades DOM compartidas por los módulos. */

export const qs = (selector, scope = document) => scope.querySelector(selector);
export const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/** Escapa texto para insertarlo con seguridad en plantillas HTML. */
export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/** Escapa una URL para usarla como atributo href/src. */
export function escapeUrl(value = "") {
  return escapeHtml(String(value).trim());
}

/** Devuelve true si la URL está configurada y es segura para enlazar. */
export function isConfiguredUrl(value = "") {
  return /^(https?:\/\/|mailto:|\/|\.\/|#)/i.test(String(value).trim());
}

/** Crea un elemento con clases y HTML opcionales. */
export function createElement(tag, className = "", html = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html) element.innerHTML = html;
  return element;
}

/** Aplica un retardo escalonado a las animaciones de entrada. */
export function stagger(index, step = 70) {
  return `--reveal-delay: ${index * step}ms`;
}

/** Añade una clase tras el siguiente repintado (para transiciones CSS). */
export function nextFrame(callback) {
  requestAnimationFrame(() => requestAnimationFrame(callback));
}
