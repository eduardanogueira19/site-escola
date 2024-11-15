function acceptPolicy() {
    localStorage.setItem("policyAccepted", "true"); 
    document.getElementById("cookie-banner").style.display = "none";
}
window.onload = function() {
    if (!localStorage.getItem("policyAccepted")) { // Se não aceitou, exibe o banner
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
// Inicializa o índice se não existir
    if (!(carouselId in currentCarouselIndex)) {
        currentCarouselIndex[carouselId] = 0;
    }

    const carousel = document.querySelector(`#${carouselId} .carousel-inner`);
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;

    // Dimensões e cálculo de itens visíveis
    const itemWidth = carouselItems[0].clientWidth;
    const carouselWidth = carousel.clientWidth;
    const itemsVisible = Math.floor(carouselWidth / itemWidth);

    // Atualiza o índice do carrossel com base na direção
    currentCarouselIndex[carouselId] += direction;

    // Impede que o índice vá além dos limites do carrossel
    if (currentCarouselIndex[carouselId] < 0) {
        currentCarouselIndex[carouselId] = 0;
    } else if (currentCarouselIndex[carouselId] > totalItems - itemsVisible) {
        currentCarouselIndex[carouselId] = totalItems - itemsVisible;
    }

    // Define o offset para o carrossel
    let offset = -currentCarouselIndex[carouselId] * itemWidth;

    // Ajuste para evitar o corte da última imagem
    const extraMargin = carouselWidth % itemWidth; // Obtém a largura extra não utilizada
    if (currentCarouselIndex[carouselId] === totalItems - itemsVisible && extraMargin !== 0) {
        offset -= extraMargin; // Aplica o ajuste na última posição
    }

    // Aplica o deslocamento ao carrossel
    carousel.style.transform = `translateX(${offset}px)`;

    // Controle de visibilidade das setas
    const prevButton = document.querySelector(`#${carouselId} .prev`);
    const nextButton = document.querySelector(`#${carouselId} .next`);

    // Mostra ou esconde as setas com base na posição
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