$(document).ready(function() {
   /* $("body").css("display", "none");
 
    $("body").fadeIn(500);
 
    $("a").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(500, redirectPage);      
    });
         
    function redirectPage() {
        window.location = linkLocation;
    }*/

    $('a').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
    });



    var $window = $(window); 
    var velocity = 0.4; 

    function update(){ var pos = $window.scrollTop(); 
        $('.js-background').each(function() 
            { var $element = $(this); 
                var height = $element.height(); 
                $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
            }); }; 
        $window.bind('scroll', update);



        var stickyNavTop = $('.nav').offset().top;  
          
        var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  
               
        if (scrollTop > stickyNavTop) {   
            $('.nav').addClass('sticky');

        } else {  
            $('.nav').removeClass('sticky'); 
        }  
        };  
          
        stickyNav();  
          
        $(window).scroll(function() {  
            stickyNav();  
        });  

        



});  


