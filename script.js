document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle"); // Corrected ID
    const themeStylesheet = document.getElementById("themeStylesheet");

    // Check localStorage for a saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
    }

    themeToggle.addEventListener("click", () => {
        // Determine current theme correctly
        const isLight = themeStylesheet.href.endsWith("light.css");
        const newTheme = isLight ? "dark.css" : "light.css";

        themeStylesheet.href = newTheme;
        localStorage.setItem("theme", newTheme);
    });
});