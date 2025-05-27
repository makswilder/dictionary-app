export function initSuggestions(inputEl, callback) {
  const suggestionBox = document.getElementById('suggestion-box');

  inputEl.addEventListener('input', async () => {
    const word = inputEl.value.trim();

    if (word.length < 2) {
      suggestionBox.classList.add('hidden');
      suggestionBox.innerHTML = '';
      return;
    }

    const suggestions = await fetchSuggestions(word);
    if (suggestions.length > 0) {
      renderSuggestions(suggestions, suggestionBox, callback);
    } else {
      suggestionBox.classList.add('hidden');
    }
  });

  inputEl.addEventListener('blur', () => {
    setTimeout(() => suggestionBox.classList.add('hidden'), 200);
  });

  inputEl.addEventListener('focus', () => {
    if (suggestionBox.children.length > 0) {
      suggestionBox.classList.remove('hidden');
    }
  });
}

async function fetchSuggestions(query) {
  try {
    const res = await fetch(`https://api.datamuse.com/sug?s=${query}&max=6`);
    const data = await res.json();
    return data.map(item => item.word);
  } catch (err) {
    console.error('Suggestion fetch failed:', err);
    return [];
  }
}

function renderSuggestions(words, container, callback) {
  container.innerHTML = '';
  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    li.addEventListener('click', () => {
      callback(word);
      container.classList.add('hidden');
    });
    container.appendChild(li);
  });
  container.classList.remove('hidden');
}