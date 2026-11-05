/**
 * Iconos SVG en línea. Todos son decorativos: se marcan con aria-hidden.
 * Para añadir uno nuevo, registra una clave con su contenido SVG.
 */

const icons = {
  github: `
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  `,
  linkedin: `
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
  `,
  itch: `
    <path d="M3 7h18v2H3V7Zm2 4h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7Zm3 3v3h2v-3H8Zm6 0v3h2v-3h-2Z" />
  `,
  mail: `
    <path d="M3 6h18v12H3V6Zm2.4 2 6.6 4.7L18.6 8H5.4Z" />
  `,
  engine: `
    <path d="M7 8h10a4 4 0 0 1 4 4v4a3 3 0 0 1-5.3 1.9L14.8 16H9.2L8.3 18A3 3 0 0 1 3 16v-4a4 4 0 0 1 4-4Zm1 3H6v3h2v2h3v-2h2v-2H8v-1Zm8.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
  `,
  code: `
    <path d="M8.2 5.4 2.6 12l5.6 6.6 1.5-1.3L5.3 12l4.4-5.3-1.5-1.3Zm7.6 0-1.5 1.3 4.4 5.3-4.4 5.3 1.5 1.3 5.6-6.6-5.6-6.6ZM13.4 4l-3 16h2l2.9-16h-1.9Z" />
  `,
  tools: `
    <path d="M14.7 3.3a5 5 0 0 0-6.4 6.4L3 15l2.1 2.1 5.3-5.3a5 5 0 0 0 6.4-6.4l-3 3-2.1-2.1 3-3Z" />
  `,
  design: `
    <path d="M4 20h4L20 8l-4-4L4 16v4Zm2.8-2H7v-.8l9.9-9.9 1.8 1.8L7.8 18H6.8Z" />
  `,
  layers: `
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Zm0 10.8 6.6-3.3L21 12l-9 4.5L3 12l2.4-1.5 6.6 3.3Zm0 4 6.6-3.3L21 16l-9 4.5L3 16l2.4-1.5L12 17.8Z" />
  `,
  web: `
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-2.7a15.7 15.7 0 0 0-1.3-3.5A8.1 8.1 0 0 1 18.9 8ZM12 4.1c.8 1.1 1.5 2.5 1.9 3.9h-3.8c.4-1.4 1.1-2.8 1.9-3.9ZM4.3 14a8.2 8.2 0 0 1 0-4h3.1a17.6 17.6 0 0 0 0 4H4.3Zm.8 2h2.7c.3 1.3.8 2.5 1.3 3.5A8.1 8.1 0 0 1 5.1 16Zm2.7-8H5.1a8.1 8.1 0 0 1 4-3.5A15.7 15.7 0 0 0 7.8 8Zm4.2 12c-.8-1.1-1.5-2.5-1.9-3.9h3.8c-.4 1.4-1.1 2.8-1.9 3.9Zm2.3-5.9H9.7a15.7 15.7 0 0 1 0-4.2h4.6a15.7 15.7 0 0 1 0 4.2Zm.4 5.4c.5-1 1-2.2 1.3-3.5h2.7a8.1 8.1 0 0 1-4 3.5Zm1.6-5.5a17.6 17.6 0 0 0 0-4h3.1a8.2 8.2 0 0 1 0 4h-3.1Z" />
  `,
  arrow: `<path d="M5 12h14M13 6l6 6-6 6" />`,
  external: `<path d="M14 4h6v6M20 4 10 14M20 14v6H4V4h6" />`,
  close: `<path d="M6 6l12 12M18 6L6 18" />`,
  check: `<path d="m5 12 4 4L19 6" />`,
};

const FILLED = new Set(["github", "linkedin", "itch", "mail", "engine", "code", "tools", "design", "layers", "web"]);

export function icon(name, className = "icon") {
  const content = icons[name] ?? icons.code;
  const paint = FILLED.has(name)
    ? 'fill="currentColor" stroke="none"'
    : 'fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" focusable="false" ${paint}>${content}</svg>`;
}
