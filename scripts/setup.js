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
