document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.dropdown > a');
    const menus = document.querySelectorAll('.dropdown');
    
    // Abre/fecha o menu ao clicar
    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            
            // Fecha outros menus abertos
            menus.forEach(menu => {
                if (menu !== link.parentElement) {
                    menu.classList.remove('open');
                }
            });
            
            // Alterna o menu atual
            link.parentElement.classList.toggle('open');
        });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', e => {
        if (!e.target.closest('.dropdown')) {
            menus.forEach(menu => menu.classList.remove('open'));
        }
    });

    // Evita que o menu feche ao clicar dentro dele
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', e => e.stopPropagation());
    });
});
