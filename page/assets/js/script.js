const root = document.documentElement;
const themeButton = document.getElementById('themeToggle');
const menuButton = document.getElementById('menuToggle');
const menu = document.getElementById('navContent');

function applyTheme(theme) {
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (themeButton) {
        themeButton.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        themeButton.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
    }
}

applyTheme(localStorage.getItem('theme') || 'light');

if (themeButton) {
    themeButton.addEventListener('click', () => {
        applyTheme(root.classList.contains('dark') ? 'light' : 'dark');
    });
}

if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden', isOpen);
        menuButton.setAttribute('aria-expanded', String(!isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    });
}

if (menu) {
    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            if (menuButton) {
                menuButton.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

document.getElementById('year').textContent = new Date().getFullYear();