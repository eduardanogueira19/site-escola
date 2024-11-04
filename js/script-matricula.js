function enviarParaWhatsApp() {
    const nome_responsavel = document.getElementById('nome_responsavel').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const nome_aluno = document.getElementById('nome_aluno').value;
    const data_nascimento = document.getElementById('data_nascimento').value;
    const curso = document.getElementById('curso').value;

    // Formatar data para dd/mm/yyyy
    const dataFormatada = new Date(data_nascimento).toLocaleDateString('pt-BR');

    // Número de telefone de destino no WhatsApp (incluindo o código do país e da cidade)
    const numeroWhatsApp = '5513991290916';

    // Mensagem que será enviada
    const mensagem = `Olá! Gostaria de realizar uma matrícula com os seguintes dados:
    - *Nome do Responsável:*\n     ${nome_responsavel}
    - *E-mail:*\n      ${email}
    - *Telefone:*\n       ${telefone}
    - *Nome do Aluno:*\n      ${nome_aluno}
    - *Data de Nascimento:*\n     ${dataFormatada}
    - *Curso Desejado:*\n      ${curso}`;

    // URL de envio para o WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(urlWhatsApp, '_blank');
}


// Função abre e fecha menu em telas menores
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