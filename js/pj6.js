/*global $, alert, console*/

$(function () {
    
    "use strict";
    
    // trigger nice scroll
    $("html").niceScroll();
    
});

$(function () {
    
    "use strict";
    
    $('.header').height($(window).height());
    
});

$(function () {
    
    'use strict';
    
    $('.header .arrow i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    $(".show-more").click(function () {
        
        $(".hidden").fadeIn();
        $(".show").fadeOut();
            
                          
    });
    
});

$(function () {
    
    'use strict';
    var leftArrow = $('.testim .fa-chevron-left'),
    
        rightArrow = $('.testim .fa-chevron-right');
    
    
    function checkClients() {
        
        $('.clint:first').hasClass('active') ? leftArrow.fadeOut() : rightArrow.fadeIn();
        $('.clint:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
        
    }
    checkClients();
    
    $('.testim i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testim .active').fadeOut(1000, function () {
                
                $(this).removeClass('active').next('.clint').addClass('active').fadeIn();
                
                
                checkClients();
            });
            
        } else {
            $('.testim .active').fadeOut(1000, function () {
                
                $(this).removeClass('active').prev('.clint').addClass('active').fadeIn();
                
                
                checkClients();
            });
        
        }
        
    });
});







































