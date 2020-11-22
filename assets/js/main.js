(function ($) {
	"use strict";

    
    
    jQuery(document).ready(function($){

       
        $(".toggle-btn").click(function(){
            $(".toggle-btn").toggleClass("style")
        }) 
        
    // Owl-carousel
    $(".customer-brend").owlCarousel({
        items:6,
        loop:true,
        nav:true,
        navText:['<i class="far fa-angle-left"></i>','<i class="far fa-angle-right"></i>'],
        responsive : { 
            0 : {
                items:1,
                nav:false,
                autoplay:true
            }, 
            480 : {
                items:3,
                nav:false,
                autoplay:true
            }, 
            576 : {
                items:5,
                nav:false,
                autoplay:true
            },  
            768 : {
                items:6
            }
        }
    });
    // niceSelect
    $(document).ready(function() {
        $('select').niceSelect();
      });
//    // aos js
//    AOS.init();
//
    });
 
}(jQuery));	