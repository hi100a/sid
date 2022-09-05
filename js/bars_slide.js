$(function(){
    $('#header .nav .icon .bars').click(function(){
     $('#header .bars_click').show();
    })
 
    $('#header .search_click .big_close').click(function(){
     $('#header .search_click').hide()
    })

// 왼쪽 ul-li 부분//
$('#header .bars_click .depth1_list > li.link_on').show();

    $('#header .bars_click .depth1').each(function(){
        $(this).click(function(){
            var sub = $(this).find('#header .bars_click .depth2_list')
            $('#header .bars_click .depth1').removeClass('link_on');
            $(this).addClass('link_on');
            $('#header .bars_click .depth2_list').slideUp();
            $(sub).slideDown();
        })
    })

 })