document.addEventListener("DOMContentLoaded", () => {
    const toggleMenu = document.getElementById("toggle-menu");
    const navLinks = document.querySelector(".nav-links");

    // Close the menu if clicked outside
    document.addEventListener("click", (event) => {
        const isClickInside = navLinks.contains(event.target) || toggleMenu.contains(event.target);

        // If the click is outside the menu and the checkbox is checked, uncheck it
        if (!isClickInside && toggleMenu.checked) {
            toggleMenu.checked = false;
        }
    });
});
