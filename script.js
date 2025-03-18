document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const themeStylesheet = document.getElementById("themeStylesheet");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
    }

    themeToggle.addEventListener("click", () => {
        const isLight = themeStylesheet.href.endsWith("light.css");
        const newTheme = isLight ? "dark.css" : "light.css";

        themeStylesheet.href = newTheme;
        localStorage.setItem("theme", newTheme);
    });
});