let html;
let darkModeToggle;

document.addEventListener("DOMContentLoaded", function(e) 
    {
        html = document.querySelector('html');
        darkModeToggle = document.querySelector('#dark-mode-toggle');

        darkModeToggle.addEventListener('click', toggleDarkMode);
        
        const lightMode = localStorage.getItem("lightMode");
        if (lightMode == "true") {
            setToLightMode();
        } else {
            setToDarkMode();
        }

    }
)

const toggleDarkMode = () => {
    html.classList.toggle('dark-mode');
    html.classList.contains('dark-mode') ? setToDarkMode() : setToLightMode();
}

const setToLightMode = () => {
    html.classList.remove('dark-mode');
    darkModeToggle.classList = 'fa fa-toggle-off';
    localStorage.setItem("lightMode", "true");
}

const setToDarkMode = () => {
    html.classList.add('dark-mode');
    darkModeToggle.classList = 'fa fa-toggle-on';
    localStorage.setItem("lightMode", "false");
}