(() => {
  "use strict";
  const data = window.PORTFOLIO || {};
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const escapeHTML = (value = "") => String(value).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
  const safeUrl = value => {
    try {
      const url = new URL(value, window.location.href);
      return ["http:", "https:", "mailto:", "tel:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  };

  $("#hero-name").textContent = (data.name || "Zaryab Arif").toUpperCase();
  $("#hero-location").textContent = `Based in ${data.location || "Pakistan"}`;
  $("#hero-city").textContent = data.location || "Pakistan";
  $("#hero-pitch").textContent = data.pitch || "";
  $("#about-copy").textContent = data.about || "";
  $("#year").textContent = new Date().getFullYear();

  const skillsGrid = $("#skills-grid");
  skillsGrid.innerHTML = (data.skills || []).map((group, i) => `
    <article class="skill-card reveal" style="--card-index:${i}">
      <div class="skill-card-top"><span class="skill-icon">${escapeHTML(group.icon)}</span><span class="skill-index">0${i + 1}</span></div>
      <h3>${escapeHTML(group.title)}</h3>
      <div class="skill-tags">${group.items.map(item => `<span>${escapeHTML(item)}</span>`).join("")}</div>
    </article>`).join("");

  const projectsGrid = $("#projects-grid");
  projectsGrid.innerHTML = (data.projects || []).map(project => {
    const links = [
      project.liveUrl ? `<a href="${escapeHTML(safeUrl(project.liveUrl))}" target="_blank" rel="noopener noreferrer">Live preview ↗</a>` : "",
      project.githubUrl ? `<a href="${escapeHTML(safeUrl(project.githubUrl))}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : ""
    ].filter(Boolean).join("");
    return `<article class="project-card reveal">
      <div class="project-visual project-visual-${escapeHTML(project.id)}">
        <span class="project-number">${escapeHTML(project.number)}</span>
        <span class="project-category">${escapeHTML(project.category)}</span>
        <div class="project-visual-mark" aria-hidden="true">${project.id === "booksy" ? "▣" : project.id === "fyp" ? "✳" : project.id === "laravel-bookvault" ? "{ }" : "⌘"}</div>
        <span class="visual-caption">${escapeHTML(project.stack.slice(0, 3).join(" · "))}</span>
      </div>
      <div class="project-content">
        <div class="project-title-row"><h3>${escapeHTML(project.title)}</h3><span class="project-role">${escapeHTML(project.role)}</span></div>
        <p>${escapeHTML(project.description)}</p>
        <details class="project-details"><summary>More about this project</summary><p>${escapeHTML(project.details)}</p></details>
        <div class="project-tags">${project.stack.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
        <div class="project-links">${links || `<span class="link-placeholder">${escapeHTML(project.linkLabel || "Public link to be added")}</span>`}</div>
      </div>
    </article>`;
  }).join("");

  $("#timeline").innerHTML = (data.experience || []).map((item, i) => `
    <article class="timeline-item reveal"><span class="timeline-marker"></span><div class="timeline-content">
      <div class="timeline-top"><span class="timeline-number">0${i + 1}</span><span class="timeline-type">${escapeHTML(item.type)}</span></div>
      <h3>${escapeHTML(item.role)}</h3><h4>${escapeHTML(item.organization)}</h4><p>${escapeHTML(item.description)}</p>
    </div></article>`).join("");

  $("#services-grid").innerHTML = (data.services || []).map((item, i) => `
    <article class="service-card reveal"><span class="service-icon">${escapeHTML(item.icon)}</span><span class="service-number">0${i + 1}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p></article>`).join("");

  if (data.contact?.whatsapp) $("#teaching-cta").href = `https://wa.me/${encodeURIComponent(data.contact.whatsapp)}`;
  const form = $("#contact-form");
  if (data.formspreeEndpoint && !data.formspreeEndpoint.includes("YOUR_FORMSPREE_ID")) {
    form.action = data.formspreeEndpoint;
    $("#form-status").textContent = "Your message will be sent securely through Formspree.";
    form.addEventListener("submit", async event => {
      event.preventDefault();
      const button = $(".form-submit", form);
      const status = $("#form-status");
      button.disabled = true; button.textContent = "Sending…";
      try {
        const response = await fetch(form.action, {
          method: "POST", body: new FormData(form), headers: { "Accept": "application/json" }
        });
        if (!response.ok) throw new Error("Message could not be sent.");
        status.textContent = "Thanks! Your message has been sent.";
        form.reset();
      } catch {
        status.textContent = "Sorry, the message could not be sent. Please email me directly.";
      } finally {
        button.disabled = false; button.innerHTML = 'Send Message <span>↗</span>';
      }
    });
  }

// Theme preference — Dark mode by default
const themeButton = $(".theme-toggle");
const savedTheme = localStorage.getItem("za-theme");

// Use saved preference if available; otherwise start in dark mode.
document.documentElement.dataset.theme =
  savedTheme === "light" ? "light" : "dark";

const updateThemeLabel = () => {
  const dark = document.documentElement.dataset.theme === "dark";

  themeButton.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );

  themeButton.setAttribute(
    "title",
    dark ? "Switch to light mode" : "Switch to dark mode"
  );
};

updateThemeLabel();

themeButton.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark"
      ? "light"
      : "dark";

  document.documentElement.dataset.theme = next;
  localStorage.setItem("za-theme", next);

  updateThemeLabel();
});

  // Mobile navigation
  const menuButton = $(".menu-toggle"), navLinks = $("#nav-links");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("is-open"); menuButton.setAttribute("aria-expanded", "false");
  }));

  // Scroll reveal with reduced-motion fallback
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));

  // Update active navigation section
  const sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.querySelectorAll("a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => sectionObserver.observe(section));
  }
})();
