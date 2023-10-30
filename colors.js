const root = document.querySelector(":root");

const primaryColors = ["#f00", "#0f0", "#00f", "#f0f", "#0ff", "#ff0", "#fff"];
const secundaryColors = [
  "#ffdfdf",
  "#dfffdf",
  "#dfdfff",
  "#ffdfff",
  "#dfffff",
  "#ffffdf",
  '#ffffff'
];
const tertiaryColors = ["#100", "#010", "#001", "#101", "#011", "#110", "#111"];

window.onload = setColors();

function setColors() {
  changeColors(window.localStorage.getItem("color") || 0);
}

function changeColors(i) {
  root.style.setProperty("--primary-color", primaryColors[i]);
  root.style.setProperty("--secundary-color", secundaryColors[i]);
  root.style.setProperty("--tertiary-color", tertiaryColors[i]);
  saveColors(i);
}

function saveColors(i) {
  window.localStorage.setItem("color", i);
}