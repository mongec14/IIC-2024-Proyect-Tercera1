console.log("Hamburger Icon Cargado");

(function () {
    const MAIN_OBJ = {
        init: function () {
            this.eventhandlers();
        },
        eventhandlers: function () {
            const hamburgerIcon = document.querySelector('.hamburger-icon');
            const menuContainer = document.querySelector('.menu-container');

            if (hamburgerIcon && menuContainer) {
                hamburgerIcon.addEventListener('click', function () {
                    console.log('Hamburger icon clicked');
                    menuContainer.classList.toggle('menu-open');
                });
            } else {
                console.error('No se encontraron los elementos necesarios para el menú hamburguesa.');
            }
        }
    };

    MAIN_OBJ.init();
})();

