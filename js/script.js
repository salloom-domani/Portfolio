const body = document.querySelector('html');
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const darkCover = document.getElementById('dark-cover');
const lightCover = document.getElementById('light-cover');

toggleDarkMode.dark = false;
toggleDarkMode.addEventListener('click',() => {
    
    if (!toggleDarkMode.dark) {
        body.style.setProperty('--background-color','#222');
        body.style.setProperty('--text-color','#fff');
        darkCover.style.setProperty('opacity',0);
        lightCover.style.setProperty('opacity',1);
    }
    else {
        body.style.setProperty('--background-color','#fff');
        body.style.setProperty('--text-color','#37352f');
        darkCover.style.setProperty('opacity',1);
        lightCover.style.setProperty('opacity',0);
    }
    toggleDarkMode.dark = !toggleDarkMode.dark;
})