$(function(){
     //depth1 ->depth2(div)열기
     $('.gnb a').each(function(){
    // var anchor = $(this).find('.gnb a');
    $(this).mouseenter(function(){//this:네비들
         var href = $(this).attr('data-src');
         $('.panels').show() //배경 흰색div 열기
         $('.nav_hover').hide() //depth2 네비묶은거 숨기기(열린거 다 지우기(초기값설정))
         $(href).show(); //data-src 열기 (depth2네비 열기)
         $('.gnb a').removeClass('on');//네비 초록색및 줄글 클래스 on 지우기(초기값)
         $(this).addClass('on');//여기서 this :마우스오버한 하나의 네비글씨/여기다 클래스 on
        })
        $('#header').mouseleave( function(){//
         $('.nav_hover').hide() ////depth2 네비묶은거 숨기기
         $('.panels').hide() //배경흰색 숨기기
         $('.gnb a').removeClass('on'); ////네비 초록색및 줄글 클래스 on 지우기
       // $(href).hide()
        })
     })

    $('.menu_product a').each(function(){
        $(this).mouseenter(function(){
            var href = $(this).attr('data-src');
            $('.menu_depth3 > div').hide()
            $(href).show(); 
        })
        $('.menu_depth3 > div').mouseleave(function(){
            $('.menu_depth3 > div').hide(); 
        })
    })

})