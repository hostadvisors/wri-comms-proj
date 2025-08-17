// Minimal theme toggle for Starlight theme scaffold
// Usage: include this script in a top-level layout or the Starlight header.

const THEME_KEY = 'starlight-theme';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  setTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) { setTheme(stored); return; }
  } catch (e) {}
  // prefer user's system setting
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

export { initTheme, toggleTheme };
