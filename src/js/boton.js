// Navegacion de secciones con boton
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Quitamos la clase activa de TODOS los botones (Inactivos para Light y Dark)
            navLinks.forEach(item => {
                item.className = "nav-link w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 hover:text-zinc-800 dark:hover:text-zinc-200 border-l-4 border-transparent transition-all";
            });

            // Agregamos la clase activa SOLO al botón presionado (Con soporte Light y Dark)
            link.className = "nav-link w-full flex items-center space-x-3 px-3 py-2.5 rounded-r-lg text-sm font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white border-l-4 border-yellow-500 transition-all shadow-sm";
        });
    });
});

// Boton para hacer y aplicar la clase dark al html
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const htmlElement = document.documentElement;

    //  Revisar si el usuario ya tenía una preferencia guardada o usar el tema oscuro por defecto
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        htmlElement.classList.remove("dark");
    } else {
        htmlElement.classList.add("dark"); // Por defecto inicia en dark
    }

    // Evento al dar clic en el botón de cambio de tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            if (htmlElement.classList.contains("dark")) {
                htmlElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            } else {
                htmlElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});