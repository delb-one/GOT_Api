const outputEl = document.getElementById("output");

export function showLoading() {
  outputEl.innerHTML = `<p class="text-center">Loading...</p>`;
}

export function showError() {
  outputEl.innerHTML = `
    <p class="text-center text-red-500">
      Error loading data
    </p>
  `;
}

export function renderList(title, items, templateFn) {
  const html = `
    <h2 class="col-span-full text-2xl font-bold mb-4">${title}</h2>
    ${items.map(templateFn).join("")}
  `;
  outputEl.innerHTML = html;
}
