export function renderWord(wordData, container) {
  const { word, phonetics, meanings } = wordData;

  const audio =
    phonetics.find(p => p.audio && p.audio.includes('us.mp3'))?.audio ||
    phonetics.find(p => p.audio && p.audio.includes('https://ssl.gstatic.com/dictionary/'))?.audio ||
    phonetics.find(p => p.audio)?.audio || '';

  const phonetic = phonetics.find(p => p.text)?.text || '';

  let html = `
    <div class="header-row">
      <div>
        <h2 class="main-word">${word}</h2>
        <p class="phonetic">${phonetic}</p>
      </div>
      ${audio ? `
        <button class="play-button" onclick="playAudio('${audio}')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      ` : ''}
    </div>
  `;

  meanings.forEach(meaning => {
    html += `
      <div class="meaning-section">
        <div class="part-of-speech-line">
          <span class="part-of-speech">${meaning.partOfSpeech}</span>
          <hr class="divider" />
        </div>
        <p class="meaning-label">Meaning</p>
        <ul>
          ${meaning.definitions.map(def => `<li>${def.definition}</li>`).join('')}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
}

export function playAudio(src) {
  const audio = new Audio(src);

  const btn = document.querySelector('.play-button');
  if (btn) {
    btn.classList.add('playing');
    audio.addEventListener('ended', () => {
      btn.classList.remove('playing');
    });
  }

  audio.play();
}
