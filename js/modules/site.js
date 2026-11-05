/** Rellena con js/config.js todo el contenido personal de la página. */

import { site } from "../config.js";
import { qs, qsa, escapeHtml, isConfiguredUrl, stagger } from "./dom.js";
import { icon } from "./icons.js";

function computeInitials(name) {
  const words = String(name).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "TN";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function setText(selector, value) {
  qsa(selector).forEach((element) => {
    element.textContent = value;
  });
}

function applySeo() {
  const title = site.seo?.title || `${site.name} — ${site.role}`;
  const description = site.seo?.description || "";

  const ogImage = site.seo?.ogImage
    ? new URL(site.seo.ogImage, window.location.href).href
    : "";
  const pageUrl = window.location.href.split("#")[0];

  document.title = title;
  qs('meta[name="description"]')?.setAttribute("content", description);
  qs('meta[property="og:title"]')?.setAttribute("content", title);
  qs('meta[property="og:description"]')?.setAttribute("content", description);
  qs('meta[property="og:image"]')?.setAttribute("content", ogImage);
  qs('meta[property="og:url"]')?.setAttribute("content", pageUrl);
  qs('meta[name="twitter:title"]')?.setAttribute("content", title);
  qs('meta[name="twitter:description"]')?.setAttribute("content", description);
  qs('meta[name="twitter:image"]')?.setAttribute("content", ogImage);
}

function renderDemoBanner() {
  const banner = qs("[data-demo-banner]");
  if (!banner) return;
  banner.hidden = !site.showDemoBanner;
}

function renderBrand() {
  const initials = site.initials?.trim() || computeInitials(site.name);
  setText('[data-site="initials"]', initials);
  setText('[data-site="name"]', site.name);
  setText('[data-site="role"]', site.role);
  setText('[data-site="roleShort"]', site.roleShort);
}

function renderNav() {
  const list = qs("[data-nav-list]");
  if (!list) return;

  list.innerHTML = site.nav
    .map(
      (item, index) => `
        <li>
          <a class="nav-link" href="#${escapeHtml(item.id)}" data-nav-link="${escapeHtml(item.id)}">
            <span class="nav-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            <span>${escapeHtml(item.label)}</span>
          </a>
        </li>`
    )
    .join("");
}

function renderHero() {
  setText('[data-hero="eyebrow"]', site.hero.eyebrow);
  setText('[data-hero="role"]', site.hero.role);
  setText('[data-hero="description"]', site.hero.description);
  setText('[data-hero="note"]', site.hero.note);

  const tech = qs("[data-hero-tech]");
  if (tech) {
    tech.innerHTML = site.hero.tech
      .map((item) => `<li class="pill">${escapeHtml(item)}</li>`)
      .join("");
  }

  const badges = qs("[data-hero-badges]");
  if (badges) {
    badges.innerHTML = site.hero.badges
      .map(
        (badge, index) => `
          <li class="hero-badge hero-badge-${escapeHtml(badge.tone || "violet")}"
              style="--badge-delay: ${index * 800}ms">
            <span class="hero-badge-dot" aria-hidden="true"></span>
            ${escapeHtml(badge.label)}
          </li>`
      )
      .join("");
  }
}

function renderAbout() {
  const body = qs("[data-about-body]");
  if (body) {
    body.innerHTML = site.about.paragraphs
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }

  const highlights = qs("[data-about-highlights]");
  if (highlights) {
    highlights.innerHTML = site.about.highlights
      .map(
        (item, index) => `
          <li style="${stagger(index, 60)}">
            <span class="focus-number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
            ${escapeHtml(item)}
          </li>`
      )
      .join("");
  }

  const interests = qs("[data-about-interests]");
  if (interests) {
    interests.innerHTML = site.about.interests
      .map((item) => `<li class="tag">${escapeHtml(item)}</li>`)
      .join("");
  }

  setText('[data-about="photoLabel"]', site.about.photoLabel);
  const quote = qs('[data-about="quote"]');
  if (quote) quote.textContent = site.about.quote;
}

function renderContact() {
  setText('[data-contact="intro"]', site.contact.intro);

  const availability = qs('[data-contact="availability"]');
  if (availability) {
    availability.textContent = site.contact.availability || "";
    availability.hidden = !site.contact.availability;
  }

  const grid = qs("[data-contact-links]");
  if (!grid) return;

  grid.innerHTML = site.contact.links
    .map((link) => {
      const configured = isConfiguredUrl(link.url);
      const content = `
        <span class="contact-icon">${icon(link.icon)}</span>
        <span class="contact-info">
          <span class="contact-label">${escapeHtml(link.label)}</span>
          <span class="contact-handle">${escapeHtml(link.handle)}</span>
          <span class="contact-hint">${escapeHtml(link.hint)}</span>
        </span>
        <span class="contact-tail">
          ${
            configured
              ? `<span class="contact-arrow" aria-hidden="true">${icon("arrow")}</span>`
              : `<span class="contact-status">Pendiente</span>`
          }
        </span>`;

      if (!configured) {
        return `<div class="contact-card is-pending" aria-disabled="true">${content}</div>`;
      }

      const external = /^https?:\/\//i.test(link.url.trim());
      return `
        <a class="contact-card" href="${escapeHtml(link.url)}"
          ${external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
          ${content}
        </a>`;
    })
    .join("");
}

function renderFooter() {
  const year = new Date().getFullYear();
  setText('[data-footer="meta"]', site.footer.meta);
  setText(
    '[data-footer="legal"]',
    site.footer.legal.replaceAll("{year}", String(year)).replaceAll("{name}", site.name)
  );
  setText('[data-footer="built"]', site.footer.built);
}

/** Punto de entrada del contenido configurable. */
export function initSite() {
  applySeo();
  renderDemoBanner();
  renderBrand();
  renderNav();
  renderHero();
  renderAbout();
  renderContact();
  renderFooter();
}
