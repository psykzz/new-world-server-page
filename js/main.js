const element = document.querySelector("#dm-toggle");

let prefersDarkMode =
  window.localStorage.getItem("prefers-dark-mode") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
  document.body.classList.add("dark");
}
element.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  prefersDarkMode = !prefersDarkMode;
  window.localStorage.setItem("prefers-dark-mode", prefersDarkMode);
});
