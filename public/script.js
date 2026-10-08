function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    menu.classList.toggle("active");
}

function toggleSettingsMenu() {
    const submenu = document.getElementById("settingsSubmenu");
    const settingsButton = document.querySelector(".settings-toggle");
    const isOpen = submenu.classList.toggle("open");
    settingsButton.setAttribute("aria-expanded", isOpen);
}

function addBackButton() {
    const currentPath = window.location.pathname.replace(/\/+$/, "");
    if (currentPath === "" || currentPath === "/index.html" || document.querySelector(".back-button")) {
        return;
    }

    const homeUrl = new URL("../home.html", window.location.href).href;
    const backButton = document.createElement("button");
    backButton.className = "back-button";
    backButton.type = "button";
    backButton.innerHTML = "<span aria-hidden=\"true\">←</span><b>Back</b>";
    backButton.setAttribute("aria-label", "Go back to the previous page");
    backButton.addEventListener("click", () => {
        const previousPage = document.referrer ? new URL(document.referrer) : null;
        const hasSameSitePreviousPage = previousPage && previousPage.origin === window.location.origin;

        if (window.history.length > 1 && hasSameSitePreviousPage) {
            window.history.back();
        } else {
            window.location.assign(homeUrl);
        }
    });
    document.body.appendChild(backButton);
}

addBackButton();

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

document.querySelectorAll(".feature-card, .inspiration-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${y * -3}deg) rotateY(${x * 3}deg) translateY(-5px)`;
    });

    card.addEventListener("pointerleave", () => {
        card.style.transform = "";
    });
});