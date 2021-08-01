$(function () {
    $('.destinations-slider').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        autoplay:false,
        autoplayTimeout:2500,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        mouseDrag: false,
        margin: 10,
        stagePadding: 50,
        //<svg class="svg-icon align-middle"><use xlink:href="#arrow-left-1"> </use></svg> 
        //<svg class="svg-icon align-middle"><use xlink:href="#arrow-right-1"> </use></svg>
        navText: ['<i class="fas fa-arrow-left"></i> <span class="align-middle">Prev</span>', '<span class="align-middle">Next</span> <i class="fas fa-arrow-right"></i>'],
        responsive: {
            551: {
                items: 2
            },
            991: {
                items: 3
            },
            1200: {
                items: 4,
                stagePadding: 80,
            },
            1700: {
                items: 5,
                stagePadding: 80,
            }
        }
    });
  });