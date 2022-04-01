function toggleDark() {
  html.style.setProperty("--background-color", "#222");
  html.style.setProperty("--text-color", "#fff");
}

function toggleLight() {
  html.style.setProperty("--background-color", "#fff");
  html.style.setProperty("--text-color", "#37352f");
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
