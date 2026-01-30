const tabs = document.querySelectorAll(".nav-tab");

export function setActiveTab(activeBtn) {
  tabs.forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
}
