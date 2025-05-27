export function initThemeToggle(toggle, body) {
  toggle.addEventListener('change', () => {
    body.classList.toggle('light', !toggle.checked);
    localStorage.setItem('theme', toggle.checked ? 'dark' : 'light');
  });

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light');
    toggle.checked = false;
  }
}