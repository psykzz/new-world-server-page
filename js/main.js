const element = document.querySelector('#dm-toggle');

let prefersDarkMode = window.localStorage.getItem('prefers-dark-mode');
if (prefersDarkMode === null) {
  prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
}
if (prefersDarkMode) {
  document.body.classList.add('dark');
} else {
  document.body.classList.remove('dark');
}
element.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  prefersDarkMode = !prefersDarkMode;
  window.localStorage.setItem('prefers-dark-mode', prefersDarkMode);
});
