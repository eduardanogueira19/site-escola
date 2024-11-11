
// Função para aceitar a política de privacidade
function acceptPolicy() {
    localStorage.setItem("policyAccepted", "true"); 
    document.getElementById("cookie-banner").style.display = "none"; // Esconde o banner
}
  
  // Verifica se o usuário já aceitou a política de privacidade
  window.onload = function() {
    if (!localStorage.getItem("policyAccepted")) { // Se não aceitou, exibe o banner
      document.getElementById("cookie-banner").style.display = "flex";
    } else {
      document.getElementById("cookie-banner").style.display = "none"; // Oculta se já aceitou
    }
}

//Função troca imagens da capa
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

//trocar slide automaticamente a cada 7 segundos
setInterval(() =>
    mudarSlide(1), 7000);
//iniciar com o primeiro slide ativo
showSlides(currentSlide);

//Move carrossel
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

// Função abre e fecha menu em telas menores
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

//função abre e fecha submenu ensino
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