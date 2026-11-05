/** Tarjetas de proyecto y filtros generados a partir de js/data/projects.js. */

import { projects } from "../data/projects.js";
import { qs, qsa, escapeHtml, escapeUrl, stagger } from "./dom.js";
import { icon } from "./icons.js";

const state = { engine: "", genre: "" };

const ALL = "";

function uniqueValues(key) {
  return [...new Set(projects.map((project) => project[key]).filter(Boolean))];
}

function buildFilterGroup(key) {
  const group = qs(`[data-filter="${key}"]`);
  if (!group) return;

  const values = uniqueValues(key);
  const options = [ALL, ...values];

  group.innerHTML = options
    .map((value) => {
      const count = value === ALL ? projects.length : projects.filter((p) => p[key] === value).length;
      const label = value === ALL ? "Todos" : value;
      return `
        <button class="chip" type="button" data-filter-key="${key}"
          data-filter-value="${escapeHtml(value)}" aria-pressed="false">
          ${escapeHtml(label)}
          <span class="chip-count" aria-hidden="true">${count}</span>
        </button>`;
    })
    .join("");
}

function matchesFilters(project) {
  const byEngine = !state.engine || project.engine === state.engine;
  const byGenre = !state.genre || project.genre === state.genre;
  return byEngine && byGenre;
}

function cardTemplate(project, index) {
  const tech = project.technologies.slice(0, 4);
  const extra = project.technologies.length - tech.length;

  return `
    <article class="project-card" data-project-card data-project-id="${escapeHtml(project.id)}"
      tabindex="0" role="button"
      style="--card-accent: ${escapeHtml(project.accent || "#8b7bff")}; ${stagger(index, 80)}">
      <div class="card-media">
        <img src="${escapeUrl(project.cover)}" alt="${escapeHtml(project.coverAlt || "")}"
          width="1600" height="900" loading="lazy" decoding="async" />
        <span class="card-shade" aria-hidden="true"></span>
        ${project.provisional ? '<span class="badge badge-provisional">Provisional</span>' : ""}
        <span class="card-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      </div>

      <div class="card-body">
        <div class="card-tags">
          <span class="tag tag-accent">${escapeHtml(project.engine)}</span>
          <span class="tag">${escapeHtml(project.genre)}</span>
        </div>

        <h3 class="card-title">${escapeHtml(project.title)}</h3>
        <p class="card-summary">${escapeHtml(project.summary)}</p>

        <ul class="tech-list" aria-label="Tecnologías utilizadas">
          ${tech.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          ${extra > 0 ? `<li>+${extra}</li>` : ""}
        </ul>

        <div class="card-footer">
          <div class="card-meta">
            <span class="card-role">${escapeHtml(project.role)}</span>
            <span class="card-period">${escapeHtml(project.status)} · ${escapeHtml(project.year)}</span>
          </div>
          <span class="card-cta">
            Ficha
            ${icon("arrow", "icon icon-sm")}
          </span>
        </div>
      </div>
    </article>`;
}

function updateCount(visible) {
  const counter = qs("[data-result-count]");
  const reset = qs("[data-filter-reset]");
  if (!counter) return;

  const total = projects.length;
  const hasFilters = Boolean(state.engine || state.genre);
  if (!hasFilters) {
    counter.textContent = `${total} ${total === 1 ? "proyecto" : "proyectos"}`;
  } else {
    const parts = [];
    if (state.engine) parts.push(`motor: ${state.engine}`);
    if (state.genre) parts.push(`género: ${state.genre}`);
    counter.textContent = `${visible} de ${total} ${total === 1 ? "proyecto" : "proyectos"} · ${parts.join(" · ")}`;
  }

  if (reset) reset.hidden = !hasFilters;
}

function renderGrid() {
  const grid = qs("[data-project-grid]");
  const empty = qs("[data-empty]");
  if (!grid) return;

  const visible = projects.filter(matchesFilters);
  grid.innerHTML = visible.map(cardTemplate).join("");
  updateCount(visible.length);

  if (empty) empty.hidden = visible.length > 0;

  qsa("[data-project-card]", grid).forEach((card) => {
    const open = () => {
      document.dispatchEvent(
        new CustomEvent("project:open", {
          detail: { id: card.dataset.projectId, trigger: card },
        })
      );
    };

    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function updateChips() {
  qsa("[data-filter-key]").forEach((chip) => {
    const key = chip.dataset.filterKey;
    const value = chip.dataset.filterValue;
    const active = state[key] === value;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", String(active));
  });
}

function setFilter(key, value) {
  state[key] = value;
  updateChips();
  renderGrid();
}

function resetFilters() {
  state.engine = ALL;
  state.genre = ALL;
  updateChips();
  renderGrid();
}

export function initProjects() {
  buildFilterGroup("engine");
  buildFilterGroup("genre");

  qsa("[data-filter-key]").forEach((chip) => {
    chip.addEventListener("click", () => {
      setFilter(chip.dataset.filterKey, chip.dataset.filterValue);
    });
  });

  qs("[data-filter-reset]")?.addEventListener("click", resetFilters);
  qs("[data-empty-reset]")?.addEventListener("click", resetFilters);

  renderGrid();
  updateChips();
}
