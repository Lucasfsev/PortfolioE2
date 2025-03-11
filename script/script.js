var video = document.getElementById("background-video");

var btn = document.getElementById("btnVideo");



function playAndPause () {

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

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (currentScroll > lastScrollTop && currentScroll > heroHeight) {
        navbar.style.top = '-100px'; // Cache la navbar
    } else {
        navbar.style.top = '0'; // Affiche la navbar
    }

    lastScrollTop = currentScroll;
});
