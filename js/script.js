document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const mainNav = document.getElementById('main-nav');
    const navLinks = mainNav.querySelectorAll('ul li a');

    // Função para alternar a classe 'active' na navegação
    hamburgerButton.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (para experiência mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });

    // Fecha o menu se clicar fora dele (opcional)
    document.addEventListener('click', (event) => {
        if (!mainNav.contains(event.target) && !hamburgerButton.contains(event.target) && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
        }
    });
});