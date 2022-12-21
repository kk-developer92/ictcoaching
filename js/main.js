$(function() {
    $('.slider1').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        responsive:{
            1000:{
                items:3,
                center: true,
                nav: true,
                navText : ['<i class="fa fa-angle-left fa-6" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-6" aria-hidden="true"></i>'],
                margin: 65
            }
        }
    });
    $('.slider2').owlCarousel({
        items:1,
        loop:true,
        margin:20,
        animateOut: 'fadeOut',
        responsive:{
            1000:{
                nav: true,
                navText : ['<i class="fa fa-angle-left fa-6" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-6" aria-hidden="true"></i>'],
            }
        }
    });

    $('.fancybox-form').fancybox({
        scrollOutside : false,
        maxWidth: 490,
        padding: 0,
        loop : false,
        helpers : {
            overlay : {
                locked: true
            }
        }
    });

    $('.fancybox-img').fancybox({
        scrollOutside : false,
        maxWidth: 800,
        padding: 0,
        loop : false,
        helpers : {
            overlay : {
                locked: true
            }
        }
    });

    $('.fancybox-video').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        },
        padding: 0,
        scrolling: 'no'
    });
});

if (window.matchMedia('(max-width: 767px)').matches) {
    $('.owl-slider').owlCarousel({
        items:1
    });
}
