function toggleDark() {
  html.style.setProperty("--background-color", "#222");
  html.style.setProperty("--text-color", "#fff");

  darkCover.style.setProperty("opacity", 0);
  lightCover.style.setProperty("opacity", 1);
}

function toggleLight() {
  html.style.setProperty("--background-color", "#fff");
  html.style.setProperty("--text-color", "#37352f");

  darkCover.style.setProperty("opacity", 1);
  lightCover.style.setProperty("opacity", 0);
}

function toggleIcon() {
  setTimeout(() => {
    moon.classList.toggle('fa-moon');
    moon.classList.toggle('fa-sun');
}, 200);
}

function setActive() {
  toggleMoon.classList.add('active');

  setTimeout(() =>{
    toggleMoon.classList.remove('active');
  }, 400);
}

const html = document.querySelector("html");
const toggleDarkBtn = document.getElementById("toggle-dark-mode");
const toggleMoon = document.querySelector(".toggle-moon");
const darkCover = document.getElementById("dark-cover");
const lightCover = document.getElementById("light-cover");
const moon = document.querySelector(".fa-moon");

toggleDarkBtn.dark = false;


toggleDarkBtn.addEventListener("click", () => {
  if (!toggleDarkBtn.dark) {
    toggleDark();
  } else {
    toggleLight();
  }
  
  toggleIcon();

  setActive();

  toggleDarkBtn.dark = !toggleDarkBtn.dark;
});
