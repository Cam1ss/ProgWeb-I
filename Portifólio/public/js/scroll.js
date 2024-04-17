// Funçao para ir para outra pagina
function Contact () {
    window.location.href = "./rout/contact.html";
}

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

// CODIGO PARA BARRA DE PORCENTAGEM
document.addEventListener('DOMContentLoaded', function() {
    const skillSection = document.getElementById('mySkill');
    const skillBars = skillSection.querySelectorAll('.skill-bar');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const percentage = bar.querySelector('.percent').textContent.trim();
                    const span = bar.querySelector('span');
                    span.style.transition = 'none';  // Remover transição inicial para resetar imediatamente
                    span.style.width = '0';         // Resetar a largura
                    setTimeout(() => {              // Adicionar um pequeno delay para a transição ocorrer novamente
                        span.style.transition = 'width 3s'; // Reaplicar a transição
                        span.style.width = percentage;
                    }, 100);                        // Delay de 100ms
                });
            } else {
                // Resetar as barras quando não estão visíveis
                skillBars.forEach(bar => {
                    bar.querySelector('span').style.width = '0';
                });
            }
        });
    }, {
        threshold: 0.5  // Inicia a animação quando 50% da seção está visível
    });

    observer.observe(skillSection); // Começa a observar a seção
});

// CODIGO PARA INIAR ONDE PAROU
document.addEventListener('DOMContentLoaded', function() {
    // Função para armazenar a posição de rolagem atual no localStorage
    function salvarPosicaoScroll() {
        localStorage.setItem('posicaoScroll', window.pageYOffset.toString());
    }

    // Função para restaurar a posição de rolagem salva no localStorage
    function restaurarPosicaoScroll() {
        const posicaoScroll = localStorage.getItem('posicaoScroll');
        if (posicaoScroll !== null) {
            window.scrollTo(0, parseInt(posicaoScroll));
        }
    }

    // Restaura a posição de rolagem quando a página é carregada
    restaurarPosicaoScroll();

    // Adiciona um event listener para salvar a posição de rolagem quando a página é fechada ou recarregada
    window.addEventListener('beforeunload', salvarPosicaoScroll);
    window.addEventListener('unload', salvarPosicaoScroll);
});

ScrollReveal().reveal('aside', {
    origin: 'left',
    duration: 2000,
    distance: '20%',
});

ScrollReveal().reveal('article', {
    origin: 'right',
    duration: 2000,
    distance: '5%',
});

ScrollReveal().reveal('.skill-header', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%',
});

ScrollReveal().reveal('.skill-main', {
    origin: 'top',
    duration: 2000,
    distance: '20%',
});

ScrollReveal().reveal('.card', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%',
    interval: '300',
});