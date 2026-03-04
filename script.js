// ===== NAVBAR SCROLL EFFECT =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 50
        ? "0 5px 20px rgba(0,0,0,0.3)"
        : "none";
});

// ===== SCROLL REVEAL ANIMATION =====
const sections = document.querySelectorAll("section");

const reveal = () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

window.addEventListener("scroll", reveal);

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// ===== BACK TO TOP BUTTON =====
const backBtn = document.getElementById("backToTop");
if (backBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) backBtn.classList.add('visible');
        else backBtn.classList.remove('visible');
    });

    backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        backBtn.blur();
    });
}

// ===== TYPEWRITER EFFECT =====
const nameSpan = document.querySelector(".hero-content span");
if (nameSpan) {
    const text = nameSpan.innerText;
    nameSpan.innerText = "";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            nameSpan.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 90);
        }
    }
    window.addEventListener("load", typeWriter);
}
tsParticles.load("particles", {
    background: {
        color: "#0a0a0f"
    },
    particles: {
        number: { value: 80 },
        color: { value: "#a855f7" },
        links: {
            enable: true,
            color: "#a855f7",
            opacity: 0.4
        },
        move: {
            enable: true,
            speed: 1.2
        },
        size: {
            value: { min: 1, max: 4 }
        }
    }
});
// ===== LOADER =====
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        loader.style.transition = "0.5s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }
});
// ===== PARALLAX FOTO =====
const heroImage = document.querySelector(".hero-image img");
if (heroImage) {
    window.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        heroImage.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// ===== NAV TOGGLE (mobile) =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('primary-navigation');
if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('open');
    });
}