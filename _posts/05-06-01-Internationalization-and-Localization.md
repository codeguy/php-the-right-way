---
title:   Internationalization and Localization
isChild: true
anchor:  i18n_l10n
---

## Internationalization (i18n) and Localization (l10n) {#i18n_l10n_title}

_Disclaimer for newcomers: i18n and l10n are numeronyms, a kind of abbreviation where numbers are used to shorten
words - in our case, internationalization becomes i18n and localization, l10n._

First of all, we need to define those two similar concepts and other related things:

- **Internationalization** is when you organize your code so it can be adapted to different languages or regions
without refactors. This is usually done once - preferably, in the beginning of the project, or else you'll probably
need some huge changes in the source!
- **Localization** happens when you adapt the interface (mainly) by translating contents, based on the i18n work done
before. It usually is done every time a new language or region needs support, and is updated when new interface pieces
are added, as they need to be available in all supported languages.
- **Pluralization** defines the rules needed between different languages to interoperate strings containing numbers and 
counters. For instance, in English when you have only one item, it's singular, and anything different from that is 
called plural; plural in this language is indicated by adding an S after some words, and sometimes changes parts of it.
In other languages such as Russian or Serbian there are two plural forms plus the singular one - you may even find
languages with a total of four, five or six forms, such as Slovenian, Irish or Arabic.

## Common ways to implement
The easiest way to internationalize PHP software is by using array files and using those strings in templates, such as
`<h1><?=$TRANS['title_about_page']?></h1>`. This is, however, hardly a recommended way for serious projects, as it poses
some maintenance issues along the road - some might appear in the very beginning, such as pluralization. So, please,
don't try this if your project will contain more than a couple of pages.

Some frameworks will sport their own i18n packages. Those usually are a more powerful version of the above approach,
but including features needed for real localization, such as plural forms and string replacement. You're free to use
those if you feel like, but you might find bothering to edit array source files, having to deal with pure code issues
(such as string scaping and so on). The main pro here is integration with the environment you're using - the framework
is called _full-stack_ for a reason, right?

However, the most classic way and often taken as reference for i18n and l10n is a [Unix tool called `gettext`][gettext].
It dates back to 1995 and is still the most complete implementation for translating software. It is pretty easy to get
running, while it still sports powerful supporting tools. It's about Gettext we will be talking here. Also, to help you
not get messy over the command-line, we will be presenting a great GUI application that can be used to easily update
your l10n source files.

## Gettext

### Installation
You might need to install Gettext and the related PHP library by using your package manager, like `apt-get` or `yum`.
After installed, enable it by adding `extension=gettext.so` (Linux/Unix) or `extension=php_gettext.dll` (Windows) to
your `php.ini`.

Here we will also be using [Poedit] to create translation files. You will probably find it in your system's package
manager; it's available for Unix, Mac and Windows, and can be [downloaded for free in their website][poedit_download]
as well.

### Structure

#### Types of files
There are three files you usually deal with while working with gettext. The main ones are PO (Portable Object) and
MO (Machine Object) files, the first being a list of readable "translated objects" and the second, the corresponding
binary to be interpreted by gettext when doing localization. There's also a POT (Template) file, that simply contains
all existing keys from your source files, and can be used as a guide to generate and update all PO files. Those template
files are not mandatory: depending on the tool you're using to do l10n, you can go just fine with only PO/MO files.
You'll always have one pair of PO/MO files per language and region, but only one POT per domain.

### Domains
There are some cases, in big projects, where you might need to separate translations when the same words convey 
different meaning given a context. In those cases you split them into different _domains_. They're basically named
groups of POT/PO/MO files, where the filename is the said _translation domain_. Small and medium-sized projects usually,
for simplicity, use only one domain; its name is arbitrary, but we will be using "main" for our code samples.

#### Locale code
A locale is simple code that identifies a version of a language. It's defined following [ISO 639-1][639-1] and 
[ISO 3166-1 alpha-2][3166-1] specs: two lower-case letters for the language, optionally followed by an underline and two
upper-case letters identifying the country or regional code. For [rare languages][rare], three letters are used.

For some speakers, the country part may seem redundant; but in fact, some languages have dialects in different
countries, such as Austrian German (`de_AT`) or Brazilian Portuguese (`pt_BR`). The second part is used to distinguish
between those dialects - when it's not present, it's taken as a "generic" or "hybrid" version of the language.

### Directory structure
To use Gettext, we will need to adhere to a specific structure of folders. First, you'll need to select an arbitrary
root for your l10n files in your source repository. Inside it you'll have a folder for each needed locale, and a fixed
`LC_MESSAGES` folder that will contain all your PO/MO pairs. Example:

{% highlight console %}
<project root>
 ├─ src/
 ├─ templates/
 └─ locales/
    ├─ forum.pot
    ├─ site.pot
    ├─ de/
    │  └─ LC_MESSAGES/
    │     ├─ forum.mo
    │     ├─ forum.po
    │     ├─ site.mo
    │     └─ site.po
    ├─ es_ES/
    │  └─ LC_MESSAGES/
    │     └─ ...
    ├─ fr/
    │  └─ ...
    ├─ pt_BR/
    │  └─ ...
    └─ pt_PT/
       └─ ...
{% endhighlight %}

### Plural forms
As we said in the introduction, different languages might sport different plural rules. However, gettext saves us from
this trouble once again. When creating a new .po file, you'll have to declare the [plural rules][plural] for that
language, and translated pieces that are plural-sensitive will have a different form for each of those rules. When
calling Gettext in code, you'll have to specify the number related to the sentence, and it will work out the correct
form to use - even using string substitution if needed.

Plural rules include the number of plurals available and a boolean test with `n` that would define in which rule the
given number falls (starting the count with 0). For example:

- Japanese: `nplurals=1; plural=0` - only one rule
- English: `nplurals=2; plural=(n != 1);` - two rules, first if N is one, second rule otherwise
- Brazilian Portuguese: `nplurals=2; plural=(n > 1);` - two rules, second if N is bigger than one, first otherwise

Now that you understood the basis of how plural rules works - and if you didn't, please look at a deeper explanation
on the [LingoHub tutorial](lingohub) -, you might want to copy the ones you need from a [list][plural] instead of
writing them by hand.

When calling out Gettext to do the localization of sentences that include counters, you'll have to pass to it the
related number as well. Gettext will work out what rule should be in effect and use the correct localized version.
You will need to include in the .po file a different sentence for each plural rule present in the language file.

### Sample implementation
After all that theory, let's get a little practical. Here's an excerpt of a .po file - don't mind with its format,
but instead the overall content, you'll learn how to edit it easily later:

{% highlight po %}
msgid ""
msgstr ""
"Language: pt_BR\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Plural-Forms: nplurals=2; plural=(n > 1);\n"

msgid "We're now translating some strings"
msgstr "Nós estamos traduzindo algumas strings agora"

msgid "Hello %1$s! Your last visit was on %2$s"
msgstr "Olá %1$s! Sua última visita foi em %2$s"

msgid "Only one unread message"
msgid_plural "%d unread messages"
msgstr[0] "Só uma mensagem não lida"
msgstr[1] "%d mensagens não lidas"
{% endhighlight %}

The first section works like a header, having the `msgid` and `msgstr` specially empty. It describes the file encoding,
plural forms and other things that are less relevant. The second section translates a simple string from English to
Brazilian Portuguese, and the third does the same, but leveraging string replacement from [`sprintf`](sprintf) so the
translation may contain the user name and visit date. The last section is a sample of pluralization forms, displaying
the singular and plural version as `msgid` in English and their corresponding translations as `msgstr` 0 and 1
(following the number given by the plural rule). There, string replacement is used as well so the number can be seen
directly in the sentence, by using `%d`. The plural forms always have two `msgid` (singular and plural), so it's
advised to not use a complex language as source of translation.

### Discussion on l10n keys
As you might have noticed, we're using as source ID the actual sentence in English. That `msgid` is the same used
throughout all your `.po` files, meaning other languages will have the same format and the same `msgid` fields, but
translated `msgstr` lines.

Talking about translation keys, there are two main "schools" here:

1. `msgid` as a real sentence. The main advantage here is that, if there's pieces of the software untranslated in any
given language, it will be displaying in a meaningful-ish way. If you happen to translate by heart from English to
Spanish but needs help to translate to French, you might publish the new page with missing French sentences, and parts
of the website would be displayed in English instead. Another point is that it's much easier for the translator to
understand what's going on and make a proper translation based on the `msgid`. It also gives you "free" l10n for a
language - the source one. However, if you need to change the actual text, you would need to replace the same `msgid`
across several language files.
2. `msgid` as a unique, structured key. It would describe the sentence role in the application in a structured way,
including the template or part where the string is located instead of its content. It's a great way to have the code
organized, but would bring problems to the translator that would miss the context. A source translation file would be
needed as a basis for other translations - so the developer would ideally have an `en.po` file, that translators would
then read to understand what to write in `fr.po` for instance. This is also both good and bad, as missing translations
would display meaningless keys on screen (`TOP_MENU_WELCOME` instead of `Hello there, User!` on the given French
untranslated page), forcing translation to be complete before publishing - while translation errors would be really
awful in the interface.

The [Gettext manual][manual] favors the first approach, as in general it's easier for translators and users in
case of trouble. That's how we will be working here as well.

### Everyday usage
In a common application, you would use some Gettext functions while writing static text in your pages. Those sentences
would then appear in `.po` files, get translated, compiled into `.mo` files and then, used by Gettext when rendering
the actual interface. Given that, let's tie together what we have discussed so far in a a step-by-step example:

#### 1. A sample template file, including some different gettext calls
{% highlight php %}
<?php include 'i18n_setup.php' ?>
<div id="header">
    <h1><?=sprintf(gettext('Welcome, %s!'), $name)?></h1>
    <!-- code indented this way only for legibility here -->
    <?php if ($unread): ?>
        <h2><?=sprintf(
            ngettext('Only one unread message',
                     '%d unread messages',
                     $unread),
            $unread)?>
        </h2>
    <? endif ?>
</div>

<h1><?=gettext('Introduction')?></h1>
<p><?=gettext('We\'re now translating some strings')?></p>
{% endhighlight %}

- [`gettext()`][func] simply translates a `msgid` into it's corresponding `msgstr` for a given language. There's also
the shorthand function `_()` that works the same way;
- [`ngettext()`][n_func] does the same but with plural rules;
- there's also [`dgettext()`][d_func] and [`dngettext()`][dn_func], that allows you to override the domain for a single
call. More on domain configuration in the next example.

#### 2. A sample setup file (`i18n_setup.php` as used above), selecting the correct locale and configuring Gettext
{% highlight php %}
<?php
/**
 * Verifies if the given $locale is supported in the project
 * @param string $locale
 * @return bool
 */
function valid($locale) {
   return in_array($locale, ['en_US', 'en', 'pt_BR', 'pt', 'es_ES', 'es');
}

//setting the source/default locale, for informational purposes
$lang = 'en_US';

if (isset($_GET['lang']) && valid($_GET['lang'])) {
    // the locale can be changed through the query-string
    $lang = $_GET['lang'];    //you should sanitize this!
    setcookie('lang', $lang); //it's stored in a cookie so it can be reused
} elseif (isset($_COOKIE['lang']) && valid($_COOKIE['lang'])) {
    // if the cookie is present instead, let's just keep it
    $lang = $_COOKIE['lang']; //you should sanitize this!
} elseif (isset($_SERVER['HTTP_ACCEPT_LANGUAGE'])) {
    // default resort: look for the languages the browser says the user accepts
    $langs = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
    array_walk($langs, function (&$lang) { $lang = strtr(strtok($lang, ';'), ['-' => '_']); });
    foreach ($langs as $browser_lang) {
        if (valid($browser_lang)) {
            $lang = $browser_lang;
            break;
        }
    }
}

// here we define the global system locale given the found language
putenv("LANG=$lang");

// this might be useful for date functions (LC_TIME) or money formatting (LC_MONETARY), for instance
setlocale(LC_ALL, $lang);

// this will make Gettext look for ../locales/<lang>/LC_MESSAGES/main.mo
bindtextdomain('main', '../locales');

// indicates in what encoding the file should be read
bind_textdomain_codeset('main', 'UTF-8');

// if your application has additional domains, as cited before, you should bind them here as well
bindtextdomain('forum', '../locales');
bind_textdomain_codeset('forum', 'UTF-8');

// here we indicate the default domain the gettext() calls will respond to
textdomain('main');

// this would look for the string in forum.mo instead of main.mo
// echo dgettext('forum', 'Welcome back!');
?>
{% endhighlight %}

#### 3. Preparing translation for the first run
> TODO: explain how to install Poedit and how to setup it

#### 4. Translating strings
> TODO: overall view on how to use Poedit for translation

### Tips & Tricks
> TODO: Talk about possible issue with caching.
> TODO: Suggest creation of helper functions.

### References

* [Wikipedia: i18n and l10n](https://en.wikipedia.org/wiki/Internationalization_and_localization)
* [Wikipedia: Gettext](https://en.wikipedia.org/wiki/Gettext)
* [LingoHub: PHP internationalization with gettext tutorial](lingohub)
* [PHP Manual: Gettext](http://php.net/manual/en/book.gettext.php)
* [Gettext Manual][manual]

[Poedit]: https://poedit.net/
[poedit_download]: https://poedit.net/download
[lingohub]: https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/#Plurals
[plural]: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
[gettext]: https://en.wikipedia.org/wiki/Gettext
[manual]: (http://www.gnu.org/software/gettext/manual/gettext.html)
[639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[3166-1]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[rare]: http://www.gnu.org/software/gettext/manual/gettext.html#Rare-Language-Codes

[sprintf]: http://php.net/manual/en/function.sprintf.php
[func]: http://php.net/manual/en/function.gettext.php
[n_func]: http://php.net/manual/en/function.ngettext.php
[d_func]: http://php.net/manual/en/function.dgettext.php
[dn_func]: http://php.net/manual/en/function.dngettext.php
