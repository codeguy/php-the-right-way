---
title:   Working with UTF-8
isChild: true
anchor:  php_and_utf8
---

## Working with UTF-8 {#php_and_utf8_title}

_This section was originally written by [Alex Cabal](https://alexcabal.com/) over at
[PHP Best Practices](https://phpbestpractices.org/#utf-8) and has been used as the basis for our own UTF-8 advice_.

### There's no one-liner. Be careful, detailed, and consistent.

Right now PHP does not support Unicode at a low level. There are ways to ensure that UTF-8 strings are processed OK,
but it's not easy, and it requires digging in to almost all levels of the web app, from HTML to SQL to PHP. We'll aim
for a brief, practical summary.

### UTF-8 at the PHP level

The basic string operations, like concatenating two strings and assigning strings to variables, don't need anything
special for UTF-8. However, most string functions, like `strpos()` and `strlen()`, do need special consideration. These
functions often have an `mb_*` counterpart: for example, `mb_strpos()` and `mb_strlen()`. These `mb_*` strings are made
available to you via the [Multibyte String Extension], and are specifically designed to operate on Unicode strings.

You must use the `mb_*` functions whenever you operate on a Unicode string. For example, if you use `substr()` on a
UTF-8 string, there's a good chance the result will include some garbled half-characters. The correct function to use
would be the multibyte counterpart, `mb_substr()`.

The hard part is remembering to use the `mb_*` functions at all times. If you forget even just once, your Unicode
string has a chance of being garbled during further processing.

Not all string functions have an `mb_*` counterpart. If there isn't one for what you want to do, then you might be out
of luck.

You should use the `mb_internal_encoding()` function at the top of every PHP script you write (or at the top of your
global include script), and the `mb_http_output()` function right after it if your script is outputting to a browser.
Explicitly defining the encoding of your strings in every script will save you a lot of headaches down the road.

Additionally, many PHP functions that operate on strings have an optional parameter letting you specify the character
encoding. You should always explicitly indicate UTF-8 when given the option. For example, `htmlentities()` has an
option for character encoding, and you should always specify UTF-8 if dealing with such strings. Note that as of PHP 5.4.0, UTF-8 is the default encoding for `htmlentities()` and `htmlspecialchars()`.

Finally, If you are building a distributed application and cannot be certain that the `mbstring` extension will be
enabled, then consider using the [symfony/polyfill-mbstring] Composer package. This will use `mbstring` if it is available, and
fall back to non UTF-8 functions if not.

[Multibyte String Extension]: https://www.php.net/book.mbstring
[symfony/polyfill-mbstring]: https://packagist.org/packages/symfony/polyfill-mbstring

### UTF-8 at the Database level

If your PHP script accesses MySQL, there's a chance your strings could be stored as non-UTF-8 strings in the database
even if you follow all of the precautions above.

To make sure your strings go from PHP to MySQL as UTF-8, make sure your database and tables are all set to the
`utf8mb4` character set and collation, and that you use the `utf8mb4` character set in the PDO connection string. See
example code below. This is _critically important_.

Note that you must use the `utf8mb4` character set for complete UTF-8 support, not the `utf8` character set! See
Further Reading for why.

### UTF-8 at the browser level

Use the `mb_http_output()` function to ensure that your PHP script outputs UTF-8 strings to your browser.

The browser will then need to be told by the HTTP response that this page should be considered as UTF-8. Today, it is common to set the character set in the HTTP response header like this:

{% highlight php %}
<?php
header('Content-Type: text/html; charset=UTF-8')
{% endhighlight %}

The historic approach to doing that was to include the [charset `<meta>` tag](http://htmlpurifier.org/docs/enduser-utf8.html) in your page's `<head>` tag.

{% highlight php %}
<?php
// Tell PHP that we're using UTF-8 strings until the end of the script
mb_internal_encoding('UTF-8');
$utf_set = ini_set('default_charset', 'utf-8');
if (!$utf_set) {
    throw new Exception('could not set default_charset to utf-8, please ensure it\'s set on your system!');
}

// Tell PHP that we'll be outputting UTF-8 to the browser
mb_http_output('UTF-8');
 
// Our UTF-8 test string
$string = 'Êl síla erin lû e-govaned vîn.';

// Transform the string in some way with a multibyte function
// Note how we cut the string at a non-Ascii character for demonstration purposes
$string = mb_substr($string, 0, 15);

// Connect to a database to store the transformed string
// See the PDO example in this document for more information
// Note the `charset=utf8mb4` in the Data Source Name (DSN)
$link = new PDO(
    'mysql:host=your-hostname;dbname=your-db;charset=utf8mb4',
    'your-username',
    'your-password',
    array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false
    )
);

// Store our transformed string as UTF-8 in our database
// Your DB and tables are in the utf8mb4 character set and collation, right?
$handle = $link->prepare('insert into ElvishSentences (Id, Body, Priority) values (default, :body, :priority)');
$handle->bindParam(':body', $string, PDO::PARAM_STR);
$priority = 45;
$handle->bindParam(':priority', $priority, PDO::PARAM_INT); // explicitly tell pdo to expect an int
$handle->execute();

// Retrieve the string we just stored to prove it was stored correctly
$handle = $link->prepare('select * from ElvishSentences where Id = :id');
$id = 7;
$handle->bindParam(':id', $id, PDO::PARAM_INT);
$handle->execute();

// Store the result into an object that we'll output later in our HTML
// This object won't kill your memory because it fetches the data Just-In-Time to
$result = $handle->fetchAll(\PDO::FETCH_OBJ);

// An example wrapper to allow you to escape data to html
function escape_to_html($dirty){
    echo htmlspecialchars($dirty, ENT_QUOTES, 'UTF-8');
}

header('Content-Type: text/html; charset=UTF-8'); // Unnecessary if your default_charset is set to utf-8 already
?><!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>UTF-8 test page</title>
    </head>
    <body>
        <?php
        foreach($result as $row){
            escape_to_html($row->Body);  // This should correctly output our transformed UTF-8 string to the browser
        }
        ?>
    </body>
</html>
{% endhighlight %}

### Further reading

* [PHP Manual: String Operations](https://www.php.net/language.operators.string)
* [PHP Manual: String Functions](https://www.php.net/ref.strings)
    * [`strpos()`](https://www.php.net/function.strpos)
    * [`strlen()`](https://www.php.net/function.strlen)
    * [`substr()`](https://www.php.net/function.substr)
* [PHP Manual: Multibyte String Functions](https://www.php.net/ref.mbstring)
    * [`mb_strpos()`](https://www.php.net/function.mb-strpos)
    * [`mb_strlen()`](https://www.php.net/function.mb-strlen)
    * [`mb_substr()`](https://www.php.net/function.mb-substr)
    * [`mb_internal_encoding()`](https://www.php.net/function.mb-internal-encoding)
    * [`mb_http_output()`](https://www.php.net/function.mb-http-output)
    * [`htmlentities()`](https://www.php.net/function.htmlentities)
    * [`htmlspecialchars()`](https://www.php.net/function.htmlspecialchars)
* [Stack Overflow: What factors make PHP Unicode-incompatible?](https://stackoverflow.com/questions/571694/what-factors-make-php-unicode-incompatible)
* [Stack Overflow: Best practices in PHP and MySQL with international strings](https://stackoverflow.com/questions/140728/best-practices-in-php-and-mysql-with-international-strings)
* [How to support full Unicode in MySQL databases](https://mathiasbynens.be/notes/mysql-utf8mb4)
* [Bringing Unicode to PHP with Portable UTF-8](https://www.sitepoint.com/bringing-unicode-to-php-with-portable-utf8/)
* [Stack Overflow: DOMDocument loadHTML does not encode UTF-8 correctly](https://stackoverflow.com/questions/8218230/php-domdocument-loadhtml-not-encoding-utf-8-correctly)
