const body = document.querySelector("body");
const dark_btn = document.getElementById("dark-btn");
const light_btn = document.getElementById("light-btn");
// localStorage
const mode_localStorage = localStorage.getItem("mode");
if (mode_localStorage) {
  body.classList.add("dark-mode");
  dark_btn.classList.toggle("hidden");
  light_btn.classList.toggle("hidden");
}
function modeToggle() {
  dark_btn.classList.toggle("hidden");
  light_btn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
}
dark_btn.addEventListener("click", () => {
  modeToggle();
  localStorage.setItem("mode", "dark-mode");
});
light_btn.addEventListener("click", () => {
  modeToggle();
  localStorage.setItem("mode", "");
});
