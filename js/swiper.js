const swiperPag = new Swiper('.swiper-pag', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiperArrow = new Swiper('.swiper-arrow', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});