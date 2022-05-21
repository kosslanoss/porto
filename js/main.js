$(function(){
  

  $('.feedback__slider').slick({
    arrows: false,
  });
  
  $('.menu__btn, .menu a').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });


  $(function(){
   
    var menu = $('.header');
   
    $(document).scroll(function() {  
        if ($(document).scrollTop() >20) {
         menu.css("background-color", "#869FE9")
         menu.css("padding", "5px 0");
        }
        else {
         menu.css("background-color", "transparent")
         menu.css("padding-top", "8vh");
        }
        if (window.innerWidth < 992) { 
          menu.css("padding", "5px 0");    
        }  
    });
  });

  



  $(".menu a,.header__icon").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  var mixer = mixitup('.portfolio__content');
  
});