export function initFontSelector(fontDropdown, body) {
  const toggle = fontDropdown.querySelector('#fontToggle');
  const options = fontDropdown.querySelector('#fontOptions');

  toggle.addEventListener('click', () => {
    options.classList.toggle('hidden');
  });

  options.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const font = li.dataset.font;
      body.style.fontFamily = font;
      toggle.textContent = li.textContent;
      options.classList.add('hidden');
      localStorage.setItem('font', font);
    });
  });

  const savedFont = localStorage.getItem('font');
  if (savedFont) {
    body.style.fontFamily = savedFont;
    const activeOption = options.querySelector(`[data-font="${savedFont}"]`);
    if (activeOption) toggle.textContent = activeOption.textContent;
  }

  document.addEventListener('click', e => {
    if (!fontDropdown.contains(e.target)) {
      options.classList.add('hidden');
    }
  });
}