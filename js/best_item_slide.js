$(function(){
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 3,

        arrows: true,
        dots :true,
        // autoplay : true,
        autoplaySpeed : 3500,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              infinite: true,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 520,
            settings: {
              arrows: false,
              infinite: true,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
})