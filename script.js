// =========================
// Sky Storage - Main Script
// =========================

// -------------------------
// 1. Auto Highlight Nav Link
// -------------------------
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

    // default for homepage
    if (currentPage === "" && linkPage === "index.html") {
        link.classList.add("active");
    }
});

// -------------------------
// 2. Smooth Scrolling (if any # links are used)
// -------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// -------------------------
// 3. Contact Form Message
// -------------------------
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent = "Thank you! We got your message.";
        formMessage.style.color = "#16a34a";

        contactForm.reset();
    });
}
