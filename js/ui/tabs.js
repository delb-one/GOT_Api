import { qsa } from "../utils/doms.js";
const tabs = qsa(".tab-btn");

export function setActiveTab(activeBtn) {
  tabs.forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}
