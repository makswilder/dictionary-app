import { fetchWordData } from './api.js';
import { initThemeToggle } from './theme.js';
import { saveToHistory } from './storage.js';
import { renderWord, playAudio } from './dom.js';
import './font.js';

const body = document.body;
const toggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.getElementById('result-container');

initThemeToggle(toggle, body);

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') handleSearch();
});

async function handleSearch() {
  const word = searchInput.value.trim();
  if (!word) return;

  resultContainer.innerHTML = `<p>Loading...</p>`;
  try {
    const data = await fetchWordData(word);
    renderWord(data, resultContainer);
    saveToHistory(word);
  } catch (err) {
    resultContainer.innerHTML = `<p class="error">❌ ${err.message}</p>`;
  }
}

window.playAudio = playAudio;
