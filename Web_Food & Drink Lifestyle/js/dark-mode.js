// Dark Mode functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('theme-btn');
    const darkModeCSS = document.getElementById('dark-mode-css');
    
    // Check saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    
    // Theme toggle button
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
        updateThemeButton();
    }
});

function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    const darkModeCSS = document.getElementById('dark-mode-css');
    if (darkModeCSS) darkModeCSS.disabled = false;
    localStorage.setItem('theme', 'dark');
    updateThemeButton();
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    const darkModeCSS = document.getElementById('dark-mode-css');
    if (darkModeCSS) darkModeCSS.disabled = true;
    localStorage.setItem('theme', 'light');
    updateThemeButton();
}

function updateThemeButton() {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    const icon = themeBtn.querySelector('i');
    const text = themeBtn.querySelector('span');
    
    if (isDarkMode) {
        icon.className = 'fas fa-sun';
        text.textContent = 'Light Mode';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Dark Mode';
    }
    
}