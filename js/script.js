$('#carousal').owlCarousel({
    loop:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:1500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        }
    }
})