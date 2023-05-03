(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    $(function(){
        $('.team_list a').on('click', function(e){
            e.preventDefault();

            var PopupId = $(this).attr('data-tab');
            $('#'+PopupId).fadeIn();
        })

        $('.close_btn').on('click', function(){
            $(this).parents('.popup_wrap').fadeOut();


        })

    })
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
  

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Post carousel
    $(".post-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 50,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            36:{
                items:1
            },
            68:{
                items:2
            },
            92:{
                items:2
            }
        }
    });

    var videos = document.querySelectorAll(".video");
    for (var i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            176:{
                items:1
            },
            268:{
                items:2
            },
            392:{
                items:3
            }
        }
    });
    
})(jQuery);

