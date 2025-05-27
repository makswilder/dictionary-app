const fontDropdown = document.getElementById('fontDropdown');
const fontToggle = document.getElementById('fontToggle');
const fontOptions = document.getElementById('fontOptions');

fontToggle.addEventListener('click', () => {
  fontOptions.classList.toggle('hidden');
  fontToggle.classList.toggle('active'); 
});

fontOptions.querySelectorAll('li').forEach(option => {
  option.addEventListener('click', () => {
    const selectedFont = option.dataset.font;
    document.body.style.fontFamily = selectedFont;
    fontToggle.textContent = option.textContent;
    fontToggle.classList.remove('active'); 
    fontOptions.classList.add('hidden');
  });
});

document.addEventListener('click', (e) => {
  if (!fontDropdown.contains(e.target)) {
    fontOptions.classList.add('hidden');
    fontToggle.classList.remove('active'); 
  }
});