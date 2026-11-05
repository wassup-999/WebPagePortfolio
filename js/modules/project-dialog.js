/**
 * Vista detallada de un proyecto en un <dialog> nativo.
 * Se abre con el evento "project:open" y admite enlaces directos del tipo
 * #proyecto/<id>.
 */

import { getProjectById } from "../data/projects.js";
import { qs, qsa, escapeHtml, escapeUrl, isConfiguredUrl, nextFrame } from "./dom.js";
import { icon } from "./icons.js";

const HASH_PREFIX = "#proyecto/";

let dialog = null;
let content = null;
let closeButton = null;
let currentProject = null;
let opener = null;

function hashFor(id) {
  return `${HASH_PREFIX}${encodeURIComponent(id)}`;
}

function projectIdFromHash() {
  if (!window.location.hash.startsWith(HASH_PREFIX)) return null;
  const raw = window.location.hash.slice(HASH_PREFIX.length);
  if (!raw) return null;
  try {
    return decodeURIComponent(raw);
  } catch {
    return null;
  }
}

function galleryTemplate(project) {
  if (!project.gallery?.length) return "";

  const [first, ...rest] = project.gallery;
  const images = [first, ...rest];

  return `
    <section class="dialog-section">
      <h3>Galería</h3>
      ${project.galleryNote ? `<p class="dialog-team">${escapeHtml(project.galleryNote)}</p>` : ""}
      <figure class="gallery-main">
        <img data-gallery-main src="${escapeUrl(first.src)}" alt="${escapeHtml(first.alt)}"
          width="1600" height="900" loading="lazy" />
      </figure>
      <div class="gallery-thumbs" role="group" aria-label="Imágenes del proyecto">
        ${images
          .map(
            (image, index) => `
              <button class="gallery-thumb ${index === 0 ? "is-active" : ""}" type="button"
                data-gallery-src="${escapeUrl(image.src)}"
                data-gallery-alt="${escapeHtml(image.alt)}"
                aria-pressed="${index === 0}" aria-label="Ver imagen ${index + 1}">
                <img src="${escapeUrl(image.src)}" alt="" width="320" height="180" loading="lazy" />
              </button>`
          )
          .join("")}
      </div>
    </section>`;
}

function videosTemplate(project) {
  const videos = (project.videos || []).filter((video) => video.embedUrl);
  if (!videos.length) return "";

  return `
    <section class="dialog-section">
      <h3>Vídeos y demostraciones</h3>
      <div class="video-grid">
        ${videos
          .map(
            (video) => `
              <figure class="video-item">
                <div class="video-frame">
                  <iframe src="${escapeUrl(video.embedUrl)}" title="${escapeHtml(video.title)}"
                    loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
                <figcaption>${escapeHtml(video.title)}</figcaption>
              </figure>`
          )
          .join("")}
      </div>
    </section>`;
}

function actionsTemplate(project) {
  const repo = isConfiguredUrl(project.links?.repo) ? project.links.repo : "";
  const play = isConfiguredUrl(project.links?.play) ? project.links.play : "";

  if (!repo && !play) {
    return `
      <div class="dialog-pending">
        <span class="dialog-pending-label">Enlaces pendientes</span>
        <p>Este proyecto todavía no tiene repositorio ni enlace jugable.</p>
      </div>`;
  }

  return `
    <div class="dialog-actions">
      ${
        repo
          ? `<a class="btn btn-primary btn-block" href="${escapeUrl(repo)}" target="_blank" rel="noopener noreferrer">
               ${icon("github")} Ver repositorio
             </a>`
          : ""
      }
      ${
        play
          ? `<a class="btn btn-secondary btn-block" href="${escapeUrl(play)}" target="_blank" rel="noopener noreferrer">
               ${icon("external")} Jugar / descargar
             </a>`
          : ""
      }
    </div>`;
}

function detailTemplate(project) {
  const description = project.description
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");

  const responsibilities = project.responsibilities
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  const mechanics = project.mechanics
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
    <div class="dialog-hero">
      <img class="dialog-cover" src="${escapeUrl(project.cover)}"
        alt="${escapeHtml(project.coverAlt || "")}" width="1600" height="900" />
      <span class="dialog-hero-shade" aria-hidden="true"></span>
      <div class="dialog-hero-content">
        <div class="card-tags">
          <span class="tag tag-accent">${escapeHtml(project.engine)}</span>
          <span class="tag">${escapeHtml(project.genre)}</span>
          ${project.provisional ? '<span class="badge badge-provisional">Provisional</span>' : ""}
        </div>
        <h2 id="project-dialog-title">${escapeHtml(project.title)}</h2>
        <p class="dialog-summary">${escapeHtml(project.summary)}</p>
      </div>
    </div>

    <div class="dialog-body">
      <div class="dialog-main">
        <section class="dialog-section">
          <h3>Sobre el proyecto</h3>
          <div class="prose">${description}</div>
        </section>

        <section class="dialog-section">
          <h3>Mi rol y responsabilidades</h3>
          <p class="dialog-role">${escapeHtml(project.role)}</p>
          ${project.team ? `<p class="dialog-team">${escapeHtml(project.team)}</p>` : ""}
          <ul class="check-list">${responsibilities}</ul>
        </section>

        <section class="dialog-section">
          <h3>Mecánicas implementadas</h3>
          <ul class="mechanic-grid">
            ${project.mechanics
              .map(
                (item) => `
                  <li>
                    <span class="mechanic-icon">${icon("check")}</span>
                    <span>${escapeHtml(item)}</span>
                  </li>`
              )
              .join("")}
          </ul>
        </section>

        ${videosTemplate(project)}
        ${galleryTemplate(project)}
      </div>

      <aside class="dialog-aside" aria-label="Información del proyecto">
        ${actionsTemplate(project)}

        <dl class="meta-list">
          <div><dt>Motor</dt><dd>${escapeHtml(project.engine)}</dd></div>
          <div><dt>Género</dt><dd>${escapeHtml(project.genre)}</dd></div>
          <div><dt>Año</dt><dd>${escapeHtml(project.year)}</dd></div>
          <div><dt>Estado</dt><dd>${escapeHtml(project.status)}</dd></div>
          <div><dt>Rol</dt><dd>${escapeHtml(project.role)}</dd></div>
        </dl>

        <div class="dialog-tech">
          <h3>Tecnologías</h3>
          <ul class="tag-list">
            ${project.technologies.map((item) => `<li class="tag">${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>

        ${project.provisional ? '<p class="dialog-note">Ficha provisional. Completa los datos en js/data/projects.js.</p>' : ""}
      </aside>
    </div>`;
}

function openProject(id, { push = true, trigger = null } = {}) {
  const project = getProjectById(id);
  if (!project || !dialog) return;

  if (!dialog.open) {
    opener = trigger || (document.activeElement instanceof HTMLElement ? document.activeElement : null);
  }

  currentProject = project;
  content.innerHTML = detailTemplate(project);
  content.scrollTop = 0;

  if (!dialog.open) {
    dialog.showModal();
    document.documentElement.classList.add("dialog-open");
  }

  if (push && window.location.hash !== hashFor(id)) {
    history.pushState({ project: id }, "", hashFor(id));
  }

  closeButton?.focus({ preventScroll: true });
}

function closeProject({ updateHash = true, restoreFocus = true } = {}) {
  if (!dialog?.open) return;

  dialog.close();
  document.documentElement.classList.remove("dialog-open");
  currentProject = null;

  if (updateHash && window.location.hash.startsWith(HASH_PREFIX)) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  if (restoreFocus && opener?.isConnected) {
    opener.focus({ preventScroll: true });
  }
  opener = null;

  // Libera las imágenes y los iframes del proyecto cerrado.
  content.innerHTML = "";
}

function initGallery() {
  content.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-gallery-src]");
    if (!thumb) return;

    const main = qs("[data-gallery-main]", content);
    if (!main) return;

    qsa(".gallery-thumb", content).forEach((button) => {
      const active = button === thumb;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    main.classList.add("is-swapping");
    nextFrame(() => {
      main.src = thumb.dataset.gallerySrc;
      main.alt = thumb.dataset.galleryAlt || "";
      main.classList.remove("is-swapping");
    });
  });
}

export function initProjectDialog() {
  dialog = qs("[data-project-dialog]");
  content = qs("[data-dialog-content]");
  closeButton = qs("[data-dialog-close]");
  if (!dialog || !content) return;

  initGallery();

  closeButton?.addEventListener("click", () => closeProject());

  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeProject();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeProject();
  });

  document.addEventListener("project:open", (event) => {
    openProject(event.detail.id, { trigger: event.detail.trigger });
  });

  // Sincroniza el diálogo con la URL (atrás/adelante y edición manual del hash).
  const syncFromLocation = () => {
    const id = projectIdFromHash();
    if (!id) {
      if (dialog.open) closeProject({ updateHash: false });
      return;
    }
    if (dialog.open && currentProject?.id === id) return;
    openProject(id, { push: false });
  };

  window.addEventListener("popstate", syncFromLocation);
  window.addEventListener("hashchange", syncFromLocation);

  // Enlace directo: /#proyecto/<id>
  const initialId = projectIdFromHash();
  if (initialId) {
    if (getProjectById(initialId)) openProject(initialId, { push: false });
    else history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

export { openProject, closeProject };
