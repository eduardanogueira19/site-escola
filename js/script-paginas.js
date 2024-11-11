function acceptPolicy() {
    localStorage.setItem("policyAccepted", "true"); 
    document.getElementById("cookie-banner").style.display = "none";
}

window.onload = function() {
    if (!localStorage.getItem("policyAccepted")) {
      document.getElementById("cookie-banner").style.display = "flex";
    } else {
      document.getElementById("cookie-banner").style.display = "none";
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
function showSlides(index) {
    slides.forEach(slides => slides.classList.remove('active'));
    slides[index].classList.add('active');
}
function mudarSlide(direcao){
    currentSlide = (currentSlide + direcao + totalSlides) % totalSlides;
    showSlides(currentSlide);
}
setInterval(() =>
    mudarSlide(1), 7000);
showSlides(currentSlide);

let currentCarousel = 0;
function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel-inner');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemsVisible = Math.floor(carousel.clientWidth / document.querySelector('.carousel-item').clientWidth);
    currentCarousel += direction;
    if (currentCarousel < 0) {
       currentCarousel = 0;
    } else if (currentCarousel > totalItems - itemsVisible) {
        currentCarousel = totalItems - itemsVisible;
    }
    const offset = -currentCarousel * (document.querySelector('.carousel-item').clientWidth + 10);
    carousel.style.transform = `translateX(${offset}px)`;
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../imagens/close_white_36dp.svg";
    }
}