// =====================================================
// MAYANK SHAKYA PORTFOLIO - JAVASCRIPT
// =====================================================
// =====================================================
// 1. CURRENT YEAR
// =====================================================
const currentYear = new Date().getFullYear();
const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.innerHTML =
        `&copy; ${currentYear} Mayank Shakya. All Rights Reserved.`;
}
// =====================================================
// 2. NAVBAR SCROLL EFFECT
// =====================================================
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow =
            "0 4px 25px rgba(0, 0, 0, 0.35)";
    } else {
        header.style.boxShadow = "none";
    }
});
// =====================================================
// 3. TYPING EFFECT
// =====================================================
const roles = [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Developer",
    "Software Developer"
];
const roleElement = document.querySelector("#home h2");
let roleIndex = 0;
let characterIndex = 0;
let deleting = false;
function typeRole() {

    if (!roleElement) {
        return;
    }
    const currentRole = roles[roleIndex];
    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;
        if (characterIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeRole, 1500);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;
        if (characterIndex === 0) {
            deleting = false;
            roleIndex++;
            if (roleIndex === roles.length) {
                roleIndex = 0;
            }
        }
    }
    const speed = deleting ? 60 : 100;

    setTimeout(typeRole, speed);
}
typeRole();
// =====================================================
// 4. CONTACT FORM VALIDATION
// =====================================================
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name =
            document.querySelector("#name").value.trim();
        const email =
            document.querySelector("#email").value.trim();
        const subject =
            document.querySelector("#subject").value.trim();
        const message =
            document.querySelector("#message").value.trim();
        // Name validation
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        // Email validation
        if (email === "") {
            alert("Please enter your email.");
            return;
        }
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // Subject validation
        if (subject === "") {
            alert("Please enter a subject.");
            return;
        }
        // Message validation
        if (message === "") {
            alert("Please enter your message.");
            return;
        }
        // Success
        alert(
            `Thank you ${name}! Your message has been submitted successfully.`
        );
        form.reset();
    });
}
// =====================================================
// 5. ACTIVE NAVBAR LINK
// =====================================================
const sections =
    document.querySelectorAll("section");
const navLinks =
    document.querySelectorAll("nav ul a");
window.addEventListener("scroll", function () {
    let currentSection = "";
    sections.forEach(function (section) {
        const sectionTop =
            section.offsetTop - 150;
        const sectionHeight =
            section.clientHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection =
                section.getAttribute("id");
        }
    });
    navLinks.forEach(function (link) {
        link.style.color = "#cbd5e1";
        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.style.color = "#38bdf8";
        }
    });
});
// =====================================================
// 6. SCROLL REVEAL ANIMATION
// =====================================================
const animatedElements =
    document.querySelectorAll(
        "section article, #about p, #skills > div"
    );
const observer =
    new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";
                }
            });
        },
        {
            threshold: 0.15
        }
    );
animatedElements.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform =
        "translateY(30px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
});
// =====================================================
// 7. SMOOTH NAVIGATION
// =====================================================
navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId =
            link.getAttribute("href");
        if (targetId.startsWith("#")) {
            const target =
                document.querySelector(targetId);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });

});
// =====================================================
// 8. PROFILE IMAGE ERROR HANDLING
// =====================================================
const profileImage =
    document.querySelector("#home img");
if (profileImage) {
    profileImage.addEventListener(
        "error",
        function () {
            console.log(
                "Profile image could not be loaded."
            );
        }
    );
}
// =====================================================
// 9. PAGE LOAD MESSAGE
// =====================================================
window.addEventListener("load", function () {
    console.log(
        "Mayank Shakya Portfolio Loaded Successfully 🚀"
    );
});