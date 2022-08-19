let html;
let darkModeToggle;

document.addEventListener("DOMContentLoaded", function(e) 
    {
        html = document.querySelector('html');
        darkModeToggle = document.querySelector('#dark-mode-toggle');

        darkModeToggle.addEventListener('click', toggleDarkMode);
        
        const darkMode = localStorage.getItem("darkMode");
        if (darkMode == "true") {
            setToDarkMode();
        } else {
            setToLightMode();
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
    localStorage.setItem("darkMode", "false");
}

const setToDarkMode = () => {
    html.classList.add('dark-mode');
    darkModeToggle.classList = 'fa fa-toggle-on';
    localStorage.setItem("darkMode", "true");
}