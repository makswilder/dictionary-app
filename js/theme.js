export function initThemeToggle(toggleEl, body) {
  toggleEl.addEventListener('change', () => {
    if (toggleEl.checked) {
      body.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  });

  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    body.classList.add('light');
    toggleEl.checked = false;
  }
}