$(function(){
    $('#header .bars').click(function(){
        $('#bars_pop').animate({right:0},500);
    })
 
    $('#bars_pop .close').click(function(){
     $('#bars_pop').animate({right:'-100%'},500);
    })

// 왼쪽 ul-li 부분//
    // $('#bars_pop >li .depth2_list').show();

    // $('#bars_pop .depth1_list > li').each(function(){
    //     $(this).click(function(){
    //         var sub = $(this).find('#bars_pop .depth2_list')
    //         $('#bars_pop .depth1_list > li').removeClass('link_on');
    //         $(this).addClass('link_on');
    //         $('#bars_pop .depth2_list').slideUp();
    //         $(sub).slideDown();
    //     })
    // })

    ////////3번째 depth///////

    $('#bars_pop .depth2 a').each(function(){
        $(this).mouseenter(function(){
            var href = $(this).attr('data-src');
            $('#bars_pop .bars_menu_depth3 > div').hide()
            $(href).show(); 
        })
        $('#bars_pop .bars_menu_depth3 > div').mouseleave(function(){
            $('#bars_pop .bars_menu_depth3 > div').hide(); 
        })
    })


 })