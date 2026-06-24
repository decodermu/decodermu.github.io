/* ============================================================
   main.js — multi-page interactions
   i18n switching · active nav · reveal · counters · per-page render
   ============================================================ */
(function () {
  "use strict";

  const I18N = window.I18N;
  const STORAGE_KEY = "junximu-lang";
  const SUPPORTED = ["en", "zh"];

  /* ---------- Language ---------- */
  function detectLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    if (location.hash === "#zh") return "zh";
    return "en";
  }

  let currentLang = detectLang();

  function applyLang(lang) {
    currentLang = lang;
    const dict = I18N[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    // text via [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = dict[key];
      if (val == null) return;
      el.innerHTML = val;
    });

    // language toggle label
    const label = document.getElementById("langLabel");
    if (label) label.textContent = dict["nav.lang"];

    // per-page dynamic content
    const page = document.body.getAttribute("data-page");
    if (page === "research") renderPubs(dict["_pubs"] || []);
    if (page === "software") renderProjects(dict["_projects"] || [], dict);
    if (page === "cooking") renderRecipes(dict["_recipes"] || [], dict);

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function t(key) { return (I18N[currentLang] || I18N.en)[key] || key; }

  /* ---------- Renderers ---------- */
  function renderPubs(pubs) {
    const list = document.getElementById("pubList");
    if (!list) return;
    list.innerHTML = pubs.map((p) => `
      <article class="pub-item reveal visible">
        <div class="pub-num">${p.n}</div>
        <div class="pub-body">
          <div class="pub-authors">${p.authors}</div>
          <div class="pub-title"><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a></div>
        </div>
        <span class="pub-venue">${p.venue}</span>
      </article>`).join("");
  }

  function renderProjects(projects, dict) {
    const grid = document.getElementById("projectGrid");
    if (!grid) return;
    if (!projects.length) {
      grid.innerHTML = `
        <div class="empty-state reveal visible">
          <div class="empty-icon">⌨</div>
          <h3>${dict["sw.proj.empty.t"]}</h3>
          <p>${dict["sw.proj.empty.d"]}</p>
        </div>`;
      return;
    }
    grid.innerHTML = projects.map((p) => {
      const link = p.url
        ? '<a class="card-link" href="' + p.url + '" target="_blank" rel="noopener">' + dict["sw.proj.more"] + "</a>"
        : '<span class="card-soon">' + dict["sw.proj.soon"] + "</span>";
      const icon = p.icon ? '<div class="proj-icon">' + p.icon + "</div>" : "";
      const stack = (p.stack || []).map((s) => '<span class="chip">' + s + "</span>").join("");
      return (
        '<article class="project-card reveal visible">' +
        '<div class="card-top">' + icon + '<span class="tag">' + dict["sw.proj.tag"] + "</span></div>" +
        "<h3>" + p.title + "</h3>" +
        "<p>" + p.desc + "</p>" +
        '<div class="chips">' + stack + "</div>" +
        link +
        "</article>"
      );
    }).join("");
  }

  function renderRecipes(recipes, dict) {
    const grid = document.getElementById("recipeGrid");
    if (!grid) return;
    if (!recipes.length) {
      grid.innerHTML =
        '<div class="empty-state reveal visible">' +
        '<div class="empty-icon">🍳</div>' +
        "<h3>" + dict["ck.recipe.empty.t"] + "</h3>" +
        "<p>" + dict["ck.recipe.empty.d"] + "</p>" +
        "</div>";
      return;
    }
    grid.innerHTML = recipes.map((r) => {
      const imgStyle = r.img ? ' style="background-image:url(' + r.img + ')"' : "";
      const emoji = r.img ? "" : '<span class="recipe-emoji">' + (r.emoji || "🍽") + "</span>";
      const meta =
        (r.time ? "<span><b>" + r.time + "</b> " + dict["ck.recipe.time"] + "</span>" : "") +
        (r.serves ? "<span><b>" + r.serves + "</b> " + dict["ck.recipe.serves"] + "</span>" : "");
      const link = r.url
        ? '<a class="card-link" href="' + r.url + '">' + dict["ck.recipe.view"] + "</a>"
        : '<span class="card-soon">' + dict["ck.recipe.soon"] + "</span>";
      return (
        '<article class="recipe-card reveal visible">' +
        '<div class="recipe-img"' + imgStyle + ">" + emoji + "</div>" +
        '<div class="recipe-body">' +
        "<h3>" + r.title + "</h3>" +
        "<p>" + r.desc + "</p>" +
        '<div class="recipe-meta">' + meta + "</div>" +
        link +
        "</div></article>"
      );
    }).join("");
  }

  /* ---------- Language toggle ---------- */
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(currentLang === "en" ? "zh" : "en");
    });
  }

  /* ---------- Nav: scrolled + active + mobile ---------- */
  const nav = document.getElementById("nav");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });
  }

  // mark active nav link by current filename
  const currentFile = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    const href = a.getAttribute("href");
    const isActive =
      (currentFile === "" || currentFile === "index.html") ? (href === "index.html" || href === "./" || href === "/")
      : href === currentFile;
    if (isActive) a.classList.add("active");
    a.addEventListener("click", () => {
      if (menuToggle) menuToggle.classList.remove("open");
      if (navLinks) navLinks.classList.remove("open");
    });
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Stat counter ---------- */
  const counters = document.querySelectorAll(".stat-num[data-count]");
  if (counters.length) {
    const cIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) { cur = target; clearInterval(timer); }
            el.textContent = cur + suffix;
          }, 28);
          cIo.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cIo.observe(c));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme: auto day/night + manual toggle ----------
     Priority: manual (localStorage 'junximu-theme') > time-of-day > light.
     The inline <head> script already applied the initial theme before paint;
     here we wire the toggle button and re-evaluate the auto rule over time. */
  const THEME_KEY = "junximu-theme";
  const root = document.documentElement;

  function isNight() {
    // 18:00–05:59 = night(dark). Anything readable from Date is fine; on failure -> light.
    try {
      const h = new Date().getHours();
      return h < 6 || h >= 18;
    } catch (e) {
      return false;
    }
  }
  function autoTheme() { return isNight() ? "dark" : "light"; }
  function effectiveTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return autoTheme();
  }
  function applyTheme(theme) {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
  }

  // reflect whatever the inline script set (or correct it)
  applyTheme(effectiveTheme());

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const cur = effectiveTheme();
      const next = cur === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // re-check the auto rule every few minutes (covers sitting on the page across dusk/dawn)
  setInterval(() => {
    if (localStorage.getItem(THEME_KEY)) return; // user picked manually -> respect it
    applyTheme(autoTheme());
  }, 5 * 60 * 1000);

  /* ---------- init ---------- */
  applyLang(currentLang);
})();
