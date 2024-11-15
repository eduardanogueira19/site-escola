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

const currentCarouselIndex = {};
function moveCarousel(carouselId, direction) {

    if (!(carouselId in currentCarouselIndex)) {
        currentCarouselIndex[carouselId] = 0;
    }

    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    const itemWidth = carouselItems[0].clientWidth;
    const carouselWidth = carousel.clientWidth;
    const itemsVisible = Math.floor(carouselWidth / itemWidth);

    currentCarouselIndex[carouselId] += direction;

    if (currentCarouselIndex[carouselId] < 0) {
        currentCarouselIndex[carouselId] = 0;
    } else if (currentCarouselIndex[carouselId] > totalItems - itemsVisible) {
        currentCarouselIndex[carouselId] = totalItems - itemsVisible;
    }

    let offset = -currentCarouselIndex[carouselId] * itemWidth;

    const extraMargin = carouselWidth % itemWidth;
    if (currentCarouselIndex[carouselId] === totalItems - itemsVisible && extraMargin !== 0) {
        offset -= extraMargin; 
    }

    carousel.style.transform = `translateX(${offset}px)`;

    const prevButton = document.querySelector(`#${carouselId} .prev`);
    const nextButton = document.querySelector(`#${carouselId} .next`);

    prevButton.style.display = currentCarouselIndex[carouselId] === 0 ? 'none' : 'block';
    nextButton.style.display = currentCarouselIndex[carouselId] === totalItems - itemsVisible ? 'none' : 'block';
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imagens/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imagens/close_white_36dp.svg";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const submenuToggle = document.querySelector('.submenu-toggle');
    const submenuList = submenuToggle.nextElementSibling;
    submenuList.style.display = 'none';
    submenuToggle.addEventListener('click', function(event) {
        event.preventDefault();
        if (submenuList.style.display === 'none') {
            submenuList.style.display = 'flex'; 
        } else {
            submenuList.style.display = 'none';
        }
    });
});