$(function(){
    App.TopPop.init();

var App = new Object();

App.TopPop = function () {
    var self;
    return {
        init: function () {
            self = this;

            // popup close
            $('.btn-pop-close').on('click', function() {
                if($('#do-not-open').is(':checked')) {
                    self.setCookie('todayCookie', 'done', 1);
                }
                $('.top-pop-wrap').slideUp();
            });

            // Do not open today.
            self.getCookie();
        },
        setCookie: function(name, value, expiredays) {
            var todayDate = new Date();
            todayDate.setDate(todayDate.getDate() + expiredays);
            document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
        },
        getCookie: function() {
            var cookiedata = document.cookie;
            if (cookiedata.indexOf('todayCookie=done') < 0 ){
                $('.top-pop-wrap').show();
            } else {
                $('.top-pop-wrap').hide();
            }
        }

    }
}();
})
