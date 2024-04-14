//Função para Botão Voltar
const scrollAnima = document.querySelector('[data-anima="scroll"]');

const metadeWindow = window.innerHeight * 4.5

function animarSroll(){
    const topoItem = scrollAnima.getBoundingClientRect().top

    const itemVisivel = topoItem - metadeWindow < 0

    if(itemVisivel){
        scrollAnima.classList.add('show-button')
    } else {
        scrollAnima.classList.remove('show-button')
    }
}

window.addEventListener('scroll', animarSroll);

//Função para Botão de Menu
$(document).ready(function() {
    $('#mobie-btn').on('click', function () {
        $('.mobie-menu').toggleClass('actve');
    });
});