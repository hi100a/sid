$(function(){

    var slide;
    slide = setInterval(function(){$('#notice_slide .container>p:first-child').animate({'margin-top':'-60px'},1800,function(){
        $('#notice_slide .container').append($('#notice_slide .container>p:first-child'));
        $('#notice_slide .container>p:last-child').css({'margin-top':0});
    })//append

    },2000);
})//end