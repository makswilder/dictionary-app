export async function fetchWordData(word) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (!res.ok) throw new Error('Word not found');
  const data = await res.json();
  return data[0];
}
