document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    const toggleMenu = document.getElementById('toggle-menu');
    const sideMenu = document.getElementById('side-menu');
    const brightnessRange = document.getElementById('brightnessRange');
    const textSizeRange = document.getElementById('textSizeRange');
    const darkModeToggle = document.getElementById('darkModeToggle');

    toggleMenu.addEventListener('click', () => {
        sideMenu.style.left = sideMenu.style.left === '0px' ? '-250px' : '0px';
    });

    brightnessRange.addEventListener('input', () => {
        document.body.style.filter = `brightness(${brightnessRange.value}%)`;
    });

    textSizeRange.addEventListener('input', () => {
        document.querySelectorAll('.book-page').forEach(page => {
            page.style.fontSize = `${textSizeRange.value}px`;
        });
    });

    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
