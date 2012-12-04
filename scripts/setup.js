(function ($) {
    // Load contributors
    var $contributors = $('#contributors');
    if ( $contributors.length ) {
        var fail = function () {
            $contributors.html('<p>This project would not be possible without the help of <a href="https://github.com/codeguy/php-the-right-way/graphs/contributors">our amazing contributors</a> on GitHub.</p>');
        };
        $.ajax({
            cache: false,
            dataType: 'jsonp',
            timeout: 3000,
            type: 'GET',
            url: 'https://api.github.com/repos/codeguy/php-the-right-way/contributors'
        }).done(function (data) {
            if ( data.data && data.data.length ) {
                var $ul = $('<ul></ul>'), dataLength = data.data.length;
                for ( var i = 0; i < dataLength; i++ ) {
                    $ul.append(['<li><a href="https://github.com/', data.data[i].login, '" target="_blank">', data.data[i].login, '</a></li>'].join(''));
                }
                $contributors.html($ul);
            } else {
                fail();
            }
        }).fail(fail);
    }
})(jQuery);

(function ($) {
    //Add current view's highlighting to the navigation
    
    /** helper for highlighting */
    function highlightNav(navLinks,id)
    {
        navLinks.filter('[href="/#'+id+'"]').addClass("active");
    }

    $(window).scroll(function() {
        //console.log("They see me scrollin, they hatin");

        //clear highlighting
        var navLinks = $('.site-navigation a');
        navLinks.removeClass("active");

        //calc current viewport
        var viewTop = $(window).scrollTop();
        var viewBottom = viewTop + $(window).height();

        //for all h1 and h2 elements, check if they are visible
        //performance tweak: stop each() after the first element is found to be behind view
        var previous = "";
        var foundOne = false;
        var fallback = "";
        $('h1, h2').each(function(i,e) {
            //get element position;
            var eTop = $(e).offset().top;
            var eBottom = eTop + $(e).height();
            var id=e.id;
            id = id.replace("_title", "");

            if (eTop >= viewTop) {
                //if we are passed the view and no heading was highlighted yet, store previous one as fallback
                if (! foundOne) {
                    fallback=previous;
                }
                if (eBottom <= viewBottom) {
                    highlightNav(navLinks, id);
                    foundOne = true;
                } else {
                    return false; //break the each(), the rest is below
                }
            }
            previous=id;
        });
        //no h1/h2 is in the viewport, so highlight the last one above
        if (! foundOne) {
            highlightNav(navLinks, fallback);
        }
    });
})(jQuery);

