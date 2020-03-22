
(function($) {
    "use strict"; // Start of use strict

    /*--/ Star Typed /--*/
    new TypeIt('.text-slider-items', {

        strings: ["Société De Conseil", "&", "De Développement Informatique"],
        typeSpeed: 2,
        cursor: false  
      }).go();
      


      // Add the fixed top after a scroll 
      $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var topbar_height = $('#topbar').height();
        if(scroll>topbar_height)
          $("#mainNav").css({"top": "0"});
        else 
          $("#mainNav").css({"top": "4vh"});
    });

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
      $('.js-scroll-trigger').click(function() {
          $('.navbar-collapse').collapse('hide');
      });

      // Collapse Navbar
      var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
     // Collapse now if page is not at top
    navbarCollapse();

})(jQuery); // End of use strict