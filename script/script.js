var video = document.getElementById("background-video");
var btn = document.getElementById("btnVideo");
const backToTop = document.getElementById('backToTop');

function playAndPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause II";
    } else {
        video.pause();
        btn.innerHTML = "Play ▶";
    }
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const heroSection = document.getElementById('hero');

// Masquer le bouton dès le chargement (bien que le CSS le masque déjà)
document.addEventListener('DOMContentLoaded', function() {
    backToTop.style.display = 'none';
});

window.addEventListener('scroll', function() {
    const currentScroll = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Contrôle de la navbar
    if (currentScroll > lastScrollTop && currentScroll > heroHeight) {
        navbar.style.top = '-100px'; // Cache la navbar
    } else {
        navbar.style.top = '0'; // Affiche la navbar
    }
    lastScrollTop = currentScroll;

    // Affiche le bouton "Back to Top" uniquement lorsque l'utilisateur est hors de la section hero
    if (currentScroll > heroHeight) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
