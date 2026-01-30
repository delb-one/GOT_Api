export const bookTemplate = (book) => `
  <div class="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <h3 class="text-lg font-semibold mb-1">${book.name}</h3>
    <p class="text-sm text-slate-600">ISBN: ${book.isbn || "Unknown"}</p>
    <p class="text-sm text-slate-600">
      Authors: ${book.authors?.join(", ") || "Unknown"}
    </p>
  </div>
`;

export const characterTemplate = (character) => `
  <div class="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <h3 class="text-lg font-semibold">${character.name || "Unknown"}</h3>
    <p class="text-sm text-slate-600">Gender: ${character.gender || "Unknown"}</p>
    <p class="text-sm text-slate-600">Culture: ${character.culture || "Unknown"}</p>
  </div>
`;

export const houseTemplate = (house) => `
  <div class="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">
    <h3 class="text-lg font-semibold">${house.name}</h3>
    <p class="text-sm text-slate-600">Region: ${house.region || "Unknown"}</p>
    <p class="text-sm text-slate-600">
      Titles: ${house.titles?.filter(Boolean).join(", ") || "None"}
    </p>
  </div>
`;