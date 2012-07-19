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
	$(window).scroll(function() {
		//console.log("They see me scrollin, they hatin");

		//clear highlighting
		$('.site-navigation a').removeClass("active");

		//calc current viewport
		var viewTop = $(window).scrollTop();
		var viewBottom = viewTop + $(window).height();

		//for all h1 and h2 elements, check if they are visible
		//performance tweak: stop each() after the first element is found to be behind view
		$('h1, h2').each(function(i,e) {
				//get element position;
				var eTop = $(e).offset().top;
				var eBottom = eTop + $(e).height();
				if (eTop >= viewTop) {
					if (eBottom <= viewBottom) {
						$('.site-navigation a[href="/#'+e.id+'"]').addClass("active");
					} else {
						//console.log("Start skipping test with "+e.id);
						return false;
					}
				}
		});
	});
})(jQuery);
