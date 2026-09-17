const root = document.documentElement;
const body = document.body;
const themeButton = document.getElementById("themeToggle");
const menuButton = document.getElementById("menuToggle");
const menu = document.getElementById("navContent");
const themeStorageKey = "portfolio-tailwind-theme";

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  body.style.setProperty(
    "background-color",
    isDark ? "#09090b" : "#fafaf9",
    "important",
  );
  body.style.setProperty("color", isDark ? "#f5f5f4" : "#1c1917", "important");
  localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");

  if (themeButton) {
    themeButton.innerHTML = isDark
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
    themeButton.setAttribute(
      "aria-label",
      isDark ? "Ativar tema claro" : "Ativar tema escuro",
    );
  }
}

applyTheme(localStorage.getItem(themeStorageKey) || "light");

if (themeButton) {
  themeButton.addEventListener("click", () => {
    applyTheme(root.classList.contains("dark") ? "light" : "dark");
  });
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden", isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Abrir menu" : "Fechar menu",
    );
  });
}

if (menu) {
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
