import { fetchWordData } from './api.js';
import { renderWord, playAudio } from './dom.js';
import { initSuggestions } from './suggestions.js';
import { initFontSelector } from './font.js';
import { initThemeToggle } from './theme.js';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');

const fontToggle = document.getElementById('fontToggle');
const themeToggle = document.getElementById('theme-toggle');

initFontSelector(fontToggle, document.body);
initThemeToggle(themeToggle, document.body);

searchBtn.addEventListener('click', () => searchWord(searchInput.value.trim()));
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') searchWord(searchInput.value.trim());
});

function searchWord(word) {
  if (!word) return;
  resultContainer.innerHTML = `<p>Loading...</p>`;
  fetchWordData(word)
    .then(data => renderWord(data, resultContainer))
    .catch(err => {
      resultContainer.innerHTML = `<p class="error">❌ ${err.message}</p>`;
    });
}

initSuggestions(searchInput, (word) => {
  searchInput.value = word;
  searchWord(word);
});

window.playAudio = playAudio;