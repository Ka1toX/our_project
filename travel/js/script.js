const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.exploring__arrow--next',
        prevEl: '.exploring__arrow--prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.addEventListener('click', documentActions)

function documentActions(e) {
    const targetElement = e.target

    if (targetElement.closest('.icon-menu')) {
        document.documentElement.toggleAttribute('data-menu-open')
    }
}