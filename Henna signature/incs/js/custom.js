var $docwidth = 0;

$(document).ready(function () {
    $docwidth = $(window).width();
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css('min-height', minheight);
    }
    SetResizeContent();
    $('#rotate').rotaterator({fadeSpeed: 1000, pauseSpeed: 300});

    // remove code when you upload
    var $buythemediv = '<div class="buy-theme xs-display-none"><a href="https://1.envato.market/PgXnQ" target="_blank"><span>Purchase Theme</span></a></div><div class="quick-question xs-display-none"><a href="mailto:info@themezaa.com?subject=Sturlly Quick Question"><span>Quick Question?</span></a></div>';
    jQuery('body').append($buythemediv);

});

/* =================================
 Anchor Link
 ==================================== */

$('.inner-link').smoothScroll({
    speed: 900,
    offset: 0
});

/* =================================
 Text Animation
 ==================================== */
(function ($) {
    $.fn.extend({
        rotaterator: function (options) {

            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 100,
                child: null
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                var o = options;
                var obj = $(this);
                var items = $(obj.children(), obj);
                items.each(function () {
                    $(this).hide();
                })
                if (!o.child) {
                    var next = $(obj).children(':first');
                } else {
                    var next = o.child;
                }
                $(next).fadeIn(o.fadeSpeed, function () {
                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function () {
                        var next = $(this).next();
                        if (next.length == 0) {
                            next = $(obj).children(':first');
                        }
                        $(obj).rotaterator({child: next, fadeSpeed: o.fadeSpeed, pauseSpeed: o.pauseSpeed});
                    })
                });
            });
        }
    });
})(jQuery);

$(window).resize(function () {
    if ($docwidth != $(window).width())
    {
        location.href = 'http://themezaa.com/html/sturlly';
    }


});