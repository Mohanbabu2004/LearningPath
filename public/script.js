document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });
    }
});

function toggleMenu() {
    const menu = document.getElementById("mobileMenu") || document.getElementById("navLinks");
    if (menu) {
        menu.classList.toggle("active");
        menu.classList.toggle("open");
    }
}

async function checkBackend() {
    try {
        const response = await fetch("/api/status");
        const data = await response.json();
        document.body.dataset.backend = data.success ? "online" : "offline";
    } catch (error) {
        document.body.dataset.backend = "offline";
    }
}

checkBackend();