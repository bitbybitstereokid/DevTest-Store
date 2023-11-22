const initializeSlider = (sliderElement) => {
    const pagination = sliderElement.querySelector('.custom-slider__pagination');
    const sliderAutoplay = +sliderElement.dataset.autoplay;
    const sliderView = +sliderElement.dataset.view;
    const sliderBetween = +sliderElement.dataset.between;
    const sliderArrows = sliderElement.dataset.arrows;

    const sliderObj = {
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            576: {
                slidesPerView: 2,
                spaceBetween: sliderBetween
            },
            991: {
                slidesPerView: 3,
                spaceBetween: sliderBetween
            },
            1400: {
                slidesPerView: sliderView,
                spaceBetween: sliderBetween
            },
        },
        pagination: {
            el: pagination,
            clickable: true
        }
    };

    if (sliderAutoplay !== 0) {
        sliderObj.autoplay = {delay: sliderAutoplay * 1000};
    }

    if (sliderArrows){
        sliderObj.navigation =  { nextEl: ".custom-button-next", prevEl: ".custom-button-prev"}
    }

    return new Swiper(sliderElement, sliderObj);
};

const initializeAllSliders = () => {
    const sliders = document.querySelectorAll('.custom-slider');
    sliders.forEach(initializeSlider);
};

window.addEventListener('DOMContentLoaded', initializeAllSliders);
