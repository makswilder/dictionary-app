export function saveToHistory(word) {
  let history = JSON.parse(localStorage.getItem('history')) || [];
  if (!history.includes(word)) {
    history.unshift(word);
    if (history.length > 10) history.pop();
    localStorage.setItem('history', JSON.stringify(history));
  }
}

export function getHistory() {
  return JSON.parse(localStorage.getItem('history')) || [];
}
