const body = document.querySelector("html");
const toggleDarkMode = document.getElementById("toggle-dark-mode");
const toggleMoon = document.querySelector(".toggle-moon");
const darkCover = document.getElementById("dark-cover");
const lightCover = document.getElementById("light-cover");
const moon = document.querySelector(".fa-moon");
// const sun = document.querySelector(".fa-sun");

toggleDarkMode.dark = false;
// sun.style.setProperty("opacity", 0);

toggleDarkMode.addEventListener("click", () => {
  if (!toggleDarkMode.dark) {
    body.style.setProperty("--background-color", "#222");
    body.style.setProperty("--text-color", "#fff");

    darkCover.style.setProperty("opacity", 0);
    lightCover.style.setProperty("opacity", 1);

    // sun.style.setProperty("opacity", 1);
    // moon.style.setProperty("opacity", 0);
    

  } else {
    body.style.setProperty("--background-color", "#fff");
    body.style.setProperty("--text-color", "#37352f");

    darkCover.style.setProperty("opacity", 1);
    lightCover.style.setProperty("opacity", 0);

    // sun.style.setProperty("opacity", 0);
    // moon.style.setProperty("opacity", 1);
  }
  
  setTimeout(() => {
      moon.classList.toggle('fa-moon');
      moon.classList.toggle('fa-sun');
  }, 200);

  toggleMoon.classList.add('active');

  setTimeout(() =>{
    toggleMoon.classList.remove('active');
  }, 400);

  toggleDarkMode.dark = !toggleDarkMode.dark;
});
