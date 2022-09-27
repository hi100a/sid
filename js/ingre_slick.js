$(function(){
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    // centerMode: true,
    focusOnSelect: true,
    autoplay : true,
    autoplaySpeed : 2000,
    pauseOnHover : true,
  });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay : true,
        autoplaySpeed : 2000,
        pauseOnHover : true,
        asNavFor: '.slider-nav'
        
      });

})

