(function ($) {
    // Attach FastClick
    var attachFastClick = Origami.fastclick;
    attachFastClick(document.body);

    // Mobile TOC menu
    var $window = $(window),
        $nav = $('.site-navigation');
    $nav.click(function (e) {
        var $target = $(e.target);
        if ($target.is($nav) && $window.width() <= 375) {
            $nav.toggleClass('open');
        }
        if ($target.is('a')) {
            $nav.removeClass('open');
        }
    });
})(jQuery);
