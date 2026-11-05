/** Renderiza las categorías de habilidades desde js/data/skills.js. */

import { skillCategories, skillsMeta } from "../data/skills.js";
import { qs, escapeHtml, stagger } from "./dom.js";
import { icon } from "./icons.js";

const ACCENTS = ["#8b7bff", "#45e0c8", "#ffb86b", "#5fd99a", "#58c9ff", "#f08bd4"];

function levelLabel(level) {
  if (level >= 75) return "Avanzado";
  if (level >= 50) return "Intermedio";
  return "Básico";
}

function skillTemplate(skill) {
  const level = Math.max(0, Math.min(100, Number(skill.level) || 0));
  return `
    <li class="skill-item">
      <div class="skill-head">
        <span class="skill-name">${escapeHtml(skill.name)}</span>
        <span class="skill-level">${levelLabel(level)}</span>
      </div>
      <div class="skill-bar" role="progressbar" aria-label="${escapeHtml(skill.name)}"
        aria-valuenow="${level}" aria-valuemin="0" aria-valuemax="100" aria-valuetext="${levelLabel(level)}">
        <span class="skill-bar-fill" style="--level: ${level}%"></span>
      </div>
    </li>`;
}

function categoryTemplate(category, index) {
  const accent = ACCENTS[index % ACCENTS.length];
  return `
    <article class="skill-card" data-reveal style="--skill-accent: ${accent}; ${stagger(index, 80)}">
      <div class="skill-card-head">
        <span class="skill-icon">${icon(category.icon)}</span>
        <h3>${escapeHtml(category.title)}</h3>
      </div>
      <p class="skill-description">${escapeHtml(category.description)}</p>
      <ul class="skill-list">
        ${category.items.map(skillTemplate).join("")}
      </ul>
    </article>`;
}

export function initSkills() {
  const grid = qs("[data-skill-grid]");
  if (!grid) return;

  grid.innerHTML = skillCategories.map(categoryTemplate).join("");

  const note = qs("[data-skills-note]");
  if (note) note.hidden = !skillsMeta.provisional;
}
