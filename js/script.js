const body = document.querySelector('html');
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const cover = document.querySelector('.cover img');

toggleDarkMode.dark = false;
toggleDarkMode.addEventListener('click',() => {
    
    if (!toggleDarkMode.dark) {
        body.style.setProperty('--background-color','#222');
        body.style.setProperty('--text-color','#fff');
        cover.src = './images/code-light.png';
    }
    else {
        body.style.setProperty('--background-color','#fff');
        body.style.setProperty('--text-color','#37352f');
        cover.src = './images/code-dark.png';
    }
    toggleDarkMode.dark = !toggleDarkMode.dark;
})