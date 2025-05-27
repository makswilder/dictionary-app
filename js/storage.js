export function saveToHistory(word) {
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  if (!history.includes(word)) {
    history.unshift(word);
    if (history.length > 20) history.pop();
    localStorage.setItem('history', JSON.stringify(history));
  }
}