
(function($) {
    "use strict"; // Start of use strict
    // Init aos animation 
 


    /*--/ Star Typed /--*/
    // new TypeIt('.text-slider-items', {

    //     strings: ["Société De Conseil", "&", "De Développement Informatique"],
    //     typeSpeed: 2,
    //     cursor: false  
    //   }).go();
      
      // Check the window on resize to fix the navbar in top 
      // $(window).on('resize', function(){
      //   var win = $(this); //this = window
      //   if (win.width() <= 800) {
      //     $("#mainNav").css({"top": "0"});
      //   }
      //   else 
      //     if ($(window).scrollTop()> $('#topbar').height()/6)
      //         $("#mainNav").css({"top": "0vh"});
      //     else
      //         $("#mainNav").css({"top": "5vh"});
      // });
      // Add the fixed top after a scroll 
    //   $(window).scroll(function (event) {
    //     var scroll = $(window).scrollTop();
    //     var topbar_height = $('#topbar').height()/6;
    //     if(scroll>topbar_height)
    //       $("#mainNav").css({"top": "0"});
    //     else 
    //       $("#mainNav").css({"top": "5vh"});
        
    // });

      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

      // Closes responsive menu when a scroll trigger link is clicked
    //   $('.js-scroll-trigger').click(function() {
    //       $('.navbar-collapse').collapse('hide');
    //   });

    //   // Collapse Navbar
    //   var navbarCollapse = function() {
    //     if ($("#mainNav").offset().top > 100) {
    //         $("#mainNav").addClass("navbar-shrink");
    //     } else {
    //         $("#mainNav").removeClass("navbar-shrink");
    //     }
    // };
    //  // Collapse now if page is not at top
    // navbarCollapse();
    AOS.init();
    
  // Counter up 
  function counter_up(){
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  }
  // triger the counter up function it has nothing to do with fixed top 
  counter_up();

  // Partners Carousel 
  $(".partners-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 5
      }
    }
  });


})(jQuery); // End of use strict