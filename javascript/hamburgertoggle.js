
const hamburgerBtn = document.getElementById("hamburger-btn");
const navmenu = document.getElementById("navmenu");

// Toggle menu visibility on small screens
hamburgerBtn.addEventListener("click", function () {
  navmenu.classList.toggle("show");
});

const dropdownToggle = document.getElementById("selectedLanguage");
const dropdownMenu = document.getElementById("languageDropdown");
const flag = document.getElementById("flag");
const language = document.getElementById("language");

// Toggle dropdown visibility
dropdownToggle.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

// Change language when an option is selected
dropdownMenu.addEventListener("click", function (e) {
  if (
    e.target.tagName === "LI" ||
    e.target.parentElement.tagName === "LI"
  ) {
    const listItem =
      e.target.tagName === "LI" ? e.target : e.target.parentElement;
    const newFlag = listItem.getAttribute("data-flag");
    const newLang = listItem.getAttribute("data-lang");
    flag.src = newFlag;
    flag.alt = newLang;
    language.textContent = newLang;
    dropdownMenu.classList.remove("show");
  }
});

// Close the dropdown when clicking outside
window.addEventListener("click", function (e) {
  if (
    !dropdownToggle.contains(e.target) &&
    !dropdownMenu.contains(e.target)
  ) {
    dropdownMenu.classList.remove("show");
  }
});
