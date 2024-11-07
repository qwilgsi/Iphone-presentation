window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll("nav ul li a");
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) { 
            link.classList.add("active");
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("nav-scrolled", window.scrollY > 50);
});

const photos = document.querySelectorAll(".photo-gallery img");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("appear", entry.isIntersecting);
    });
}, { threshold: 0.5 });

photos.forEach(photo => {
    observer.observe(photo);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Пожалуйста, заполните все поля.");
    }
});