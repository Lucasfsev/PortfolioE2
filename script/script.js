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
    window.scrollTo({top: 0, behavior: "smooth"});
});

let lastScrollTop = 0; // Dernière position du scroll
const navbarWrapper = document.querySelector(".navbar-wrapper"); // Sélectionner le conteneur parent de la navbar

// Écouter l'événement de défilement
window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY; // Position de défilement actuelle

    // Si on fait défiler vers le bas (currentScroll > lastScrollTop), on cache la navbar
    if (currentScroll > lastScrollTop) {
        navbarWrapper.classList.add("hidden"); // Ajouter la classe 'hidden' pour cacher la navbar
    } else {
        // Si on fait défiler vers le haut (currentScroll < lastScrollTop), on montre la navbar
        navbarWrapper.classList.remove("hidden"); // Retirer la classe 'hidden' pour afficher la navbar
    }

    // Mettre à jour la dernière position de défilement
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // On ne peut pas avoir un scroll négatif
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


window.onload = function () {
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

    // Sélectionne toutes les cartes de stage
    const cards = document.querySelectorAll('.stage-card');

    // Ajoute un effet de rebond lors du survol
    cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        // Applique un effet de rebond rapide
        card.style.transition = 'transform 0.1s ease-in-out';
        card.style.transform = 'scale(1.1)';

    });

    card.addEventListener('mouseout', () => {
    // Réinitialise la taille et le fond après le survol
    card.style.transition = 'transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out';
    card.style.transform = 'scale(1)';
});
});
// Mot de passe correct
const correctPassword = "Tabl3auE5P0rtF0l10";

document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupérer le mot de passe saisi
    const enteredPassword = document.getElementById('password').value;

    // Vérifier si le mot de passe est correct
    if (enteredPassword === correctPassword) {
        document.getElementById('errorMessage').style.display = 'none'; // Cacher le message d'erreur

        // Créer un lien temporaire et déclencher le téléchargement
        let link = document.createElement('a');
        link.href = '/assets/TableauDeSynthèseE5.xlsx'; // Chemin du fichier
        link.download = 'TableauDeSynthèseE5.xlsx'; // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Nettoyage du DOM
    } else {
        // Afficher le message d'erreur
        document.getElementById('errorMessage').style.display = 'block';
    }
});

