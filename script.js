document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("darkmode-toggle");
    const themeStylesheet = document.getElementById("themeStylesheet");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        themeStylesheet.href = savedTheme;
    }

    themeToggle.addEventListener("click", () => {
        const isDark = themeStylesheet.href.split("/").pop() === "dark.css"; 
        const newTheme = isDark ? "light.css" : "dark.css";

        themeStylesheet.href = newTheme;
        localStorage.setItem("theme", newTheme);
    });

    const hamburger = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector("nav");

    if (hamburger && navLinksContainer) {
        hamburger.addEventListener("click", () => {
            navLinksContainer.classList.toggle("show");
        });
    } else {
        console.error("Hamburger menu or navigation container not found.");
    }
});
