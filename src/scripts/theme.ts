export const THEMES = ["dark", "light", "clear", "bloom"] as const;
export type Theme = (typeof THEMES)[number];

export function getStoredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  return (THEMES as readonly string[]).includes(stored ?? "") ? (stored as Theme) : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}
