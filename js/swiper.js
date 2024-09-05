const swiperPag = new Swiper('.swiper-pag', {

    direction: 'horizontal',
    loop: false,


    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },

    breakpoints: {
        1000: {
            slidesPerView: 3, 
            enabled: false,    
        },
        0: {
            slidesPerView: 1,  
            enabled: true,     
        },
    },
});


const swiperPagAbout = new Swiper('.swiper-pag-about', {
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


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

const swiperArrowTest = new Swiper('.swiper-arrowFacilities', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});