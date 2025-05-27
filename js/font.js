export function initFontSelector(fontToggle, body) {
  const fontDropdown = document.getElementById('fontDropdown');
  const fontOptions = document.getElementById('fontOptions');

  fontToggle.addEventListener('click', () => {
    fontOptions.classList.toggle('hidden');
  });

  fontOptions.querySelectorAll('li').forEach(option => {
    option.addEventListener('click', () => {
      const selectedFont = option.dataset.font;
      body.style.fontFamily = selectedFont;
      fontToggle.textContent = option.textContent;
      fontOptions.classList.add('hidden');
      localStorage.setItem('font', selectedFont);
    });
  });

  document.addEventListener('click', (e) => {
    if (!fontDropdown.contains(e.target)) {
      fontOptions.classList.add('hidden');
    }
  });

  const savedFont = localStorage.getItem('font');
  if (savedFont) {
    body.style.fontFamily = savedFont;
    const selected = [...fontOptions.children].find(li => li.dataset.font === savedFont);
    if (selected) fontToggle.textContent = selected.textContent;
  }
}