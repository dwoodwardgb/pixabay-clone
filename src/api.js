const API_KEY = "4272121-59134f1078e603a1211a874d6";

export function search(term) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    term
  )}`;
  return fetch(URL).then((r) => r.json());
}

export function getImage(id) {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&id=${id}`;
  return fetch(URL).then((r) => r.json());
}
