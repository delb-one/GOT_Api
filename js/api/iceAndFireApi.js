const BASE_URL = "https://anapioficeandfire.com/api/";

export async function fetchFromApi(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const getBooks = () => fetchFromApi("books");
export const getCharacters = () => fetchFromApi("characters");
export const getHouses = () => fetchFromApi("houses");
