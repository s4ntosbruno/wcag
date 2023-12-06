const sections = [
  "introducao",
  "nome-acessivel",
  "wcag",
  "principios",
  "diretrizes",
  "identificar-o-objetivo",
  "rotulo-no-nome",
  "idioma-da-pagina",
  "nome-funcao-valor",
  "links-e-extras",
];

window.onload = onInit();

function onInit() {
  setSection();
  checkPreviousButton();
  checkNextButton();
}

function showPreviousSection() {
  hideSection(getCurrentSection());
  showSection(getPreviousSection());
  checkPreviousButton();
  checkNextButton();
  saveSection();
}

function showNextSection() {
  hideSection(getCurrentSection());
  showSection(getNextSection());
  checkPreviousButton();
  checkNextButton();
  saveSection();
}

function getCurrentSection() {
  return document.getElementById(sections[currentSectionIndex]);
}

function getNextSection() {
  currentSectionIndex += 1;
  return getCurrentSection();
}

function getPreviousSection() {
  currentSectionIndex -= 1;
  return getCurrentSection();
}

function showSection(section) {
  section.classList.remove("hidden");
}

function hideSection(section) {
  section.classList.add("hidden");
}

function checkPreviousButton() {
  const previousBtn = document.getElementById("previous");
  previousBtn.disabled = currentSectionIndex === 0;
}

function checkNextButton() {
  const nextBtn = document.getElementById("next");
  nextBtn.disabled = currentSectionIndex === sections.length - 1;
}

function saveSection() {
  window.localStorage.setItem("currentSection", currentSectionIndex);
}

function setSection() {
  currentSectionIndex =
    Number(window.localStorage.getItem("currentSection")) || 0;
  showSection(getCurrentSection());
}

function changeDocumentLang(lang) {
  document.documentElement.setAttribute("lang", lang);
}
