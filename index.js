const BASE_URL = "https://anapioficeandfire.com/api/";
const outputEl = document.getElementById("output");

/* ==========================
   Generic API fetch
========================== */
async function fetchFromApi(endpoint) {
  try {
    outputEl.innerHTML = "<p>Loading...</p>";

    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error("API error");

    return await res.json();
  } catch (err) {
    outputEl.innerHTML = `<p class="text-red-500">Error loading data</p>`;
    console.error(err);
    return [];
  }
}

/* ==========================
   Generic renderer
========================== */
function renderList(title, items, templateFn) {
  if (!items.length) {
    outputEl.innerHTML = `<h2>${title}</h2><p>No data found</p>`;
    return;
  }

  const html = `
    <h2>${title}</h2>
    ${items.map(templateFn).join("")}
  `;

  outputEl.innerHTML = html;
}

/* ==========================
   Templates
========================== */
const bookTemplate = (book) => `
  <div class="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <h3 class="text-lg font-semibold mb-1">${book.name}</h3>
    <p class="text-sm text-slate-600">ISBN: ${book.isbn || "Unknown"}</p>
    <p class="text-sm text-slate-600">
      Authors: ${book.authors?.join(", ") || "Unknown"}
    </p>
  </div>
`;

const characterTemplate = (character) => `
  <div class="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <h3 class="text-lg font-semibold">${character.name || "Unknown"}</h3>
    <p class="text-sm text-slate-600">Gender: ${character.gender || "Unknown"}</p>
    <p class="text-sm text-slate-600">Culture: ${character.culture || "Unknown"}</p>
  </div>
`;

const houseTemplate = (house) => `
  <div class="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <h3 class="text-lg font-semibold">${house.name}</h3>
    <p class="text-sm text-slate-600">Region: ${house.region || "Unknown"}</p>
    <p class="text-sm text-slate-600">
      Titles: ${house.titles?.filter(Boolean).join(", ") || "None"}
    </p>
  </div>
`;

/* ==========================
   Render functions
========================== */
async function renderBooks() {
  const books = await fetchFromApi("books");
  renderList("Books", books, bookTemplate);
}

async function renderCharacters() {
  const characters = await fetchFromApi("characters");
  renderList("Characters", characters, characterTemplate);
}

async function renderHouses() {
  const houses = await fetchFromApi("houses");
  renderList("Houses", houses, houseTemplate);
}

/* ==========================
   Events
========================== */
document.getElementById("getBooksBtn")
  .addEventListener("click", renderBooks);

document.getElementById("getCharactersBtn")
  .addEventListener("click", renderCharacters);

document.getElementById("getHousesBtn")
  .addEventListener("click", renderHouses);
