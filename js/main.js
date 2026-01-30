import { getBooks, getCharacters, getHouses } from "./api/iceAndFireApi.js";
import { setActiveTab } from "./ui/tabs.js";
import { renderList } from "./ui/renderer.js";
import { getById } from "./utils/doms.js";
import {
  bookTemplate,
  characterTemplate,
  houseTemplate,
} from "./ui/templates.js";
    
/* event listeners + bootstrap */
getById("getBooksBtn").addEventListener("click", (e) => {
  setActiveTab(e.target);
  getBooks().then((books) => renderList("Books", books, bookTemplate));
});

getById("getCharactersBtn").addEventListener("click", (e) => {
  setActiveTab(e.target);
  getCharacters().then((characters) => renderList("Characters", characters, characterTemplate));
});

getById("getHousesBtn").addEventListener("click", (e) => {
  setActiveTab(e.target);
  getHouses().then((houses) => renderList("Houses", houses, houseTemplate));
});