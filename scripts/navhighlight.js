(function ($) {
	$(window).scroll(function() {
		//console.log("They see me scrollin, they hatin");

		//clear highlighting
		$('a').removeClass("active");

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
						$('a[href="#'+e.id+'"]').addClass("active");
					} else {
						console.log("Start skipping test with "+e.id);
						return false;
					}
				}
		});
	});
})(jQuery);
