export function initThemeToggle(toggleEl, body) {
  toggleEl.addEventListener('change', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
    toggleEl.checked = false;
  }
}
