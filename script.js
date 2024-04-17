$(document).ready(() => {

    // START OWLCAROUSEL
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        },
        autoplay:true,
        autoplayTimeout:5000
    });
    // END OWLCAROUSEL

    // START STOP CONTEXTMENU
    // $(document).on({
    //     "contextmenu": function (e) {
    //         // Stop the context menu
    //         e.preventDefault();
    //     }
    // });
    // END STOP CONTEXTMENU

});