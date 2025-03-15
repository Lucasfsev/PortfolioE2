var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");
const backToTop = document.getElementById('backToTop');

function playAndPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "II";
    } else {
        video.pause();
        btn.innerHTML = "▶";
    }
}

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        // L'utilisateur fait défiler vers le bas
        navbar.classList.add("hidden");
    } else {
        // L'utilisateur fait défiler vers le haut
        navbar.classList.remove("hidden");
    }

    lastScrollTop = currentScroll;
});


// Fonction pour vérifier si un élément est visible dans la fenêtre du navigateur
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour appliquer l'animation lorsqu'un élément devient visible
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.section-fade-in');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('fadeIn');
        }
    });
}

// Lancer la fonction lors du défilement
window.addEventListener('scroll', handleScrollAnimation);

// Initialiser l'animation sur les éléments déjà visibles lors du chargement
handleScrollAnimation();


window.onload = function() {
    var email = "lucas.alleaume" + "@" + "iia-formation.fr";
    document.getElementById("email-link").href = "mailto:" + email;
    document.getElementById("email-text").textContent = email;
};


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".item");
    const inputs = document.querySelectorAll("input[name='position']");

    function updateCarousel(index) {
        items.forEach((item, i) => {
            const offset = i - index;
            item.style.transform = `translateX(${offset * 320}px) scale(${1 - Math.abs(offset) * 0.1})`;
            item.style.opacity = Math.abs(offset) > 2 ? "0" : "1";
            item.style.zIndex = 10 - Math.abs(offset);
        });
    }

    inputs.forEach((input, index) => {
        input.addEventListener("change", () => updateCarousel(index));
    });

    let currentIndex = 0;
    function autoSlide() {
        currentIndex = (currentIndex + 1) % inputs.length;
        inputs[currentIndex].checked = true;
        updateCarousel(currentIndex);
    }

    setInterval(autoSlide, 3000); // Fait défiler toutes les 3 secondes
    updateCarousel(0); // Initialise la position
});


document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (window.scrollY > 100) { // Change dès qu'on scrolle de 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();
});


