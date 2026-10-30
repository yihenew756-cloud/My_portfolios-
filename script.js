
/* ========================================
   YIHENEW - STUDENT PORTFOLIO
   JavaScript Functionality
======================================== */

// Select the navigation elements
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// ========================================
// MOBILE NAVIGATION MENU
// ========================================

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    // Toggle the mobile menu
    const isOpen = nav.classList.toggle("open");

    // Update accessibility attributes
    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Toggle navigation"
    );

    // Change the menu icon
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  // Close the menu after clicking a navigation link
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute(
        "aria-label",
        "Toggle navigation"
      );

      menuButton.textContent = "☰";
    });
  });

  // Close the menu when Escape is pressed
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      nav.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute(
        "aria-label",
        "Toggle navigation"
      );

      menuButton.textContent = "☰";
    }
  });
}

// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
