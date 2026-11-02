const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Zatvoriť menu" : "Otvoriť menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Otvoriť menu");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Jemné zobrazovanie sekcií pri posúvaní stránky.
const revealItems = document.querySelectorAll(
  ".section-heading, .project-card, .about-copy, .about-photo-wrap, .contact-section"
);
revealItems.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
