(() => {
  const root = document.documentElement;
  const meta = document.getElementById("theme-color-meta");
  const buttons = Array.from(document.querySelectorAll("[data-set-theme]"));

  function applyTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    if (meta) {
      meta.setAttribute("content", next === "light" ? "#E2EDE5" : "#161917");
    }
    for (const btn of buttons) {
      const active = btn.getAttribute("data-set-theme") === next;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    }
  }

  const prefersLight = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(prefersLight ? "light" : "dark");

  for (const btn of buttons) {
    btn.addEventListener("click", () => {
      applyTheme(btn.getAttribute("data-set-theme"));
    });
  }
})();
