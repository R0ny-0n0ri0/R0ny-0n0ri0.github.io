document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('ul li a');
    const body = document.body;

    // Função para abrir/fechar o menu e gerenciar o overlay
    hamburgerButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Impede que o clique no hamburguer propague e feche o menu imediatamente
        mainNav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });

    // Fecha o menu se clicar fora dele ou no overlay
    document.addEventListener('click', (event) => {
        // Se o menu está ativo
        if (mainNav.classList.contains('active')) {
            // E o clique NÃO foi dentro do menu (mainNav) E NÃO foi no botão do hamburguer
            // O overlay (::before) também está dentro de mainNav logicamente para o CSS,
            // então clicar no overlay fechará o menu.
            if (!mainNav.contains(event.target) && !hamburgerButton.contains(event.target)) {
                mainNav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        }
    });

    // Este evento previne que cliques dentro do menu fechem o menu
    mainNav.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});