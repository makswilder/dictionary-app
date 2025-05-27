import { fetchWordData } from './api.js';
import { renderWord, playAudio } from './dom.js';
import { initThemeToggle } from './theme.js';
import { initFontSelector } from './font.js';
import { saveToHistory } from './storage.js';

const input = document.getElementById('search-input');
const button = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');

button.addEventListener('click', handleSearch);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

function handleSearch() {
  const word = input.value.trim();
  if (!word) return;

  resultContainer.innerHTML = `<p>Loading...</p>`;

  fetchWordData(word)
    .then(data => {
      renderWord(data, resultContainer);
      saveToHistory(word);
    })
    .catch(err => {
      resultContainer.innerHTML = `<p class="error">❌ ${err.message}</p>`;
    });
}

initThemeToggle(document.getElementById('theme-toggle'), document.body);
initFontSelector(document.getElementById('fontDropdown'), document.body);

window.playAudio = playAudio;