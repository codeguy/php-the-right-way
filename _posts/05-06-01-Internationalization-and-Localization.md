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
without refactorings. This action is usually done once - preferably, at the beginning of the project, or else you will
probably need some huge changes in the source!
- **Localization** happens when you adapt the interface (mainly) by translating contents, based on the i18n work done
before. It usually is done every time a new language or region needs support and is updated when new interface pieces
are added, as they need to be available in all supported languages.
- **Pluralization** defines the rules required between distinct languages to interoperate strings containing numbers and 
counters. For instance, in English when you have only one item, it is singular, and anything different from that is 
called plural; plural in this language is indicated by adding an S after some words, and sometimes changes parts of it.
In other languages, such as Russian or Serbian, there are two plural forms in addition to the singular - you may even
find languages with a total of four, five or six forms, such as Slovenian, Irish or Arabic.

## Common ways to implement
The easiest way to internationalize PHP software is by using array files and using those strings in templates, such as
`<h1><?=$TRANS['title_about_page']?></h1>`. This way is, however, hardly recommended for serious projects, as it poses
some maintenance issues along the road - some might appear in the very beginning, such as pluralization. So, please,
don't try this if your project will contain more than a couple of pages.

The most classic way and often taken as reference for i18n and l10n is a [Unix tool called `gettext`][gettext]. It dates
back to 1995 and is still a complete implementation for translating software. It is easy enough to get running, while
still sporting powerful supporting tools. It is about Gettext we will be talking here. Also, to help you not get messy
over the command-line, we will be presenting a great GUI application that can be used to easily update your l10n source.

### Other tools

There are common libraries used that support Gettext and other implementations of i18n. Some of them may seem easier to
install or sport additional features or i18n file formats. In this document, we focus on the tools provided with the
PHP core, but here we list others for completion:

- [aura/intl][aura-intl]: Provides internationalization (I18N) tools, specifically package-oriented per-locale message
translation. It uses array formats for messages. Does not provide a message extractor, but does provide advanced
message formatting via the `intl` extension (including pluralized messages).
- [php-gettext/Gettext][php-gettext]: Gettext support with an OO interface; includes improved helper functions, powerful
extractors for several file formats (some of them not supported natively by the `gettext` command), and can also export
to other formats besides `.mo/.po` files. Can be useful if you need to integrate your translation files into other
parts of the system, like a JavaScript interface.
- [symfony/translation][symfony]: supports a lot of different formats, but recommends using verbose XLIFF's. Doesn't
include helper functions nor a built-in extractor, but supports placeholders using `strtr()` internally.
- [laminas/laminas-i18n][laminas]: supports array and INI files, or Gettext formats. Implements a caching layer to save you from
reading the filesystem every time. It also includes view helpers, and locale-aware input filters and validators.
However, it has no message extractor.

Other frameworks also include i18n modules, but those are not available outside of their codebases:

- [Laravel] supports basic array files, has no automatic extractor but includes a `@lang` helper for template files.
- [Yii] supports array, Gettext, and database-based translation, and includes a messages extractor. It is backed by the
[`Intl`][intl] extension, available since PHP 5.3, and based on the [ICU project]; this enables Yii to run powerful
replacements, like spelling out numbers, formatting dates, times, intervals, currency, and ordinals.

If you decide to go for one of the libraries that provide no extractors, you may want to use the gettext formats, so
you can use the original gettext toolchain (including Poedit) as described in the rest of the chapter.

## Gettext

### Installation
You might need to install Gettext and the related PHP library by using your package manager, like `apt-get` or `yum`.
After installed, enable it by adding `extension=gettext.so` (Linux/Unix) or `extension=php_gettext.dll` (Windows) to
your `php.ini`.

Here we will also be using [Poedit] to create translation files. You will probably find it in your system's package
manager; it is available for Unix, Mac, and Windows, and can be [downloaded for free on their website][poedit_download]
as well.

### Structure

#### Types of files
There are three files you usually deal with while working with gettext. The main ones are PO (Portable Object) and
MO (Machine Object) files, the first being a list of readable "translated objects" and the second, the corresponding
binary to be interpreted by gettext when doing localization. There's also a POT (Template) file, which simply contains
all existing keys from your source files, and can be used as a guide to generate and update all PO files. Those template
files are not mandatory: depending on the tool you are using to do l10n, you can go just fine with only PO/MO files.
You will always have one pair of PO/MO files per language and region, but only one POT per domain.

### Domains
There are some cases, in big projects, where you might need to separate translations when the same words convey 
different meaning given a context. In those cases, you split them into different _domains_. They are, basically, named
groups of POT/PO/MO files, where the filename is the said _translation domain_. Small and medium-sized projects usually,
for simplicity, use only one domain; its name is arbitrary, but we will be using "main" for our code samples.
In [Symfony] projects, for example, domains are used to separate the translation for validation messages.

#### Locale code
A locale is simply a code that identifies one version of a language. It is defined following the [ISO 639-1][639-1] and 
[ISO 3166-1 alpha-2][3166-1] specs: two lower-case letters for the language, optionally followed by an underline and two
upper-case letters identifying the country or regional code. For [rare languages][rare], three letters are used.

For some speakers, the country part may seem redundant. In fact, some languages have dialects in different
countries, such as Austrian German (`de_AT`) or Brazilian Portuguese (`pt_BR`). The second part is used to distinguish
between those dialects - when it is not present, it is taken as a "generic" or "hybrid" version of the language.

### Directory structure
To use Gettext, we will need to adhere to a specific structure of folders. First, you will need to select an arbitrary
root for your l10n files in your source repository. Inside it, you will have a folder for each needed locale, and a
fixed `LC_MESSAGES` folder that will contain all your PO/MO pairs. Example:

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
this trouble once again. When creating a new `.po` file, you will have to declare the [plural rules][plural] for that
language, and translated pieces that are plural-sensitive will have a different form for each of those rules. When
calling Gettext in code, you will have to specify the number related to the sentence, and it will work out the correct
form to use - even using string substitution if needed.

Plural rules include the number of plurals available and a boolean test with `n` that would define in which rule the
given number falls (starting the count with 0). For example:

- Japanese: `nplurals=1; plural=0` - only one rule
- English: `nplurals=2; plural=(n != 1);` - two rules, first if N is one, second rule otherwise
- Brazilian Portuguese: `nplurals=2; plural=(n > 1);` - two rules, second if N is bigger than one, first otherwise

Now that you understood the basis of how plural rules works - and if you didn't, please look at a deeper explanation
on the [LingoHub tutorial][lingohub_plurals] -, you might want to copy the ones you need from a [list][plural] instead
of writing them by hand.

When calling out Gettext to do localization on sentences with counters, you will have to provide it the
related number as well. Gettext will work out what rule should be in effect and use the correct localized version.
You will need to include in the `.po` file a different sentence for each plural rule defined.

### Sample implementation
After all that theory, let's get a little practical. Here's an excerpt of a `.po` file - don't mind with its format,
but with the overall content instead; you will learn how to edit it easily later:

{% highlight po %}
msgid ""
msgstr ""
"Language: pt_BR\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Plural-Forms: nplurals=2; plural=(n > 1);\n"

msgid "We are now translating some strings"
msgstr "Nós estamos traduzindo algumas strings agora"

msgid "Hello %1$s! Your last visit was on %2$s"
msgstr "Olá %1$s! Sua última visita foi em %2$s"

msgid "Only one unread message"
msgid_plural "%d unread messages"
msgstr[0] "Só uma mensagem não lida"
msgstr[1] "%d mensagens não lidas"
{% endhighlight %}

The first section works like a header, having the `msgid` and `msgstr` especially empty. It describes the file encoding,
plural forms and other things that are less relevant.
The second section translates a simple string from English to
Brazilian Portuguese, and the third does the same, but leveraging string replacement from [`sprintf`][sprintf] so the
translation may contain the user name and visit date.
The last section is a sample of pluralization forms, displaying
the singular and plural version as `msgid` in English and their corresponding translations as `msgstr` 0 and 1
(following the number given by the plural rule). There, string replacement is used as well so the number can be seen
directly in the sentence, by using `%d`. The plural forms always have two `msgid` (singular and plural), so it is
advised not to use a complex language as the source of translation.

### Discussion on l10n keys
As you might have noticed, we are using as source ID the actual sentence in English. That `msgid` is the same used
throughout all your `.po` files, meaning other languages will have the same format and the same `msgid` fields but
translated `msgstr` lines.

Talking about translation keys, there are two main "schools" here:

1. _`msgid` as a real sentence_.
    The main advantages are:
    - if there are pieces of the software untranslated in any given language, the key displayed will still maintain some
    meaning. Example: if you happen to translate by heart from English to Spanish but need help to translate to French,
    you might publish the new page with missing French sentences, and parts of the website would be displayed in English
    instead;
    - it is much easier for the translator to understand what's going on and do a proper translation based on the
    `msgid`;
    - it gives you "free" l10n for one language - the source one;
    - The only disadvantage: if you need to change the actual text, you would need to replace the same `msgid`
    across several language files.

2. _`msgid` as a unique, structured key_.
It would describe the sentence role in the application in a structured way, including the template or part where the
string is located instead of its content.
    - it is a great way to have the code organized, separating the text content from the template logic.
    - however, that could bring problems to the translator that would miss the context. A source language file would be
    needed as a basis for other translations. Example: the developer would ideally have an `en.po` file, that
    translators would read to understand what to write in `fr.po` for instance.
    - missing translations would display meaningless keys on screen (`top_menu.welcome` instead of `Hello there, User!`
    on the said untranslated French page). That is good it as would force translation to be complete before publishing -
    however, bad as translation issues would be remarkably awful in the interface. Some libraries, though, include an
    option to specify a given language as "fallback", having a similar behavior as the other approach.

The [Gettext manual][manual] favors the first approach as, in general, it is easier for translators and users in
case of trouble. That is how we will be working here as well. However, the [Symfony documentation][symfony-keys] favors
keyword-based translation, to allow for independent changes of all translations without affecting templates as well.

### Everyday usage
In a typical application, you would use some Gettext functions while writing static text in your pages. Those sentences
would then appear in `.po` files, get translated, compiled into `.mo` files and then, used by Gettext when rendering
the actual interface. Given that, let's tie together what we have discussed so far in a step-by-step example:

#### 1. A sample template file, including some different gettext calls
{% highlight php %}
<?php include 'i18n_setup.php' ?>
<div id="header">
    <h1><?=sprintf(gettext('Welcome, %s!'), $name)?></h1>
    <!-- code indented this way only for legibility -->
    <?php if ($unread): ?>
        <h2><?=sprintf(
            ngettext('Only one unread message',
                     '%d unread messages',
                     $unread),
            $unread)?>
        </h2>
    <?php endif ?>
</div>

<h1><?=gettext('Introduction')?></h1>
<p><?=gettext('We\'re now translating some strings')?></p>
{% endhighlight %}

- [`gettext()`][func] simply translates a `msgid` into its corresponding `msgstr` for a given language. There's also
the shorthand function `_()` that works the same way;
- [`ngettext()`][n_func] does the same but with plural rules;
- There are also [`dgettext()`][d_func] and [`dngettext()`][dn_func], that allow you to override the domain for a single
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
   return in_array($locale, ['en_US', 'en', 'pt_BR', 'pt', 'es_ES', 'es']);
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
    // default: look for the languages the browser says the user accepts
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
One of the great advantages Gettext has over custom framework i18n packages is its extensive and powerful file format.
"Oh man, that’s quite hard to understand and edit by hand, a simple array would be easier!" Make no mistake,
applications like [Poedit] are here to help - _a lot_. You can get the program from [their website][poedit_download],
it’s free and available for all platforms. It’s a pretty easy tool to get used to, and a very powerful one at the same
time - using all features Gettext has available. This guide is based on PoEdit 1.8.

In the first run, you should select “File > New...” from the menu. You’ll be asked straight ahead for the language:
here you can select/filter the language you want to translate to, or use that format we mentioned before, such as
`en_US` or `pt_BR`.

Now, save the file - using that directory structure we mentioned as well. Then you should click “Extract from sources”,
and here you’ll configure various settings for the extraction and translation tasks. You’ll be able to find all those
later through “Catalog > Properties”:

- Source paths: here you must include all folders from the project where `gettext()` (and siblings) are called - this
is usually your templates/views folder(s). This is the only mandatory setting;
- Translation properties:
    - Project name and version, Team and Team’s email address: useful information that goes in the .po file header;
    - Plural forms: here go those rules we mentioned before - there’s a link in there with samples as well. You can
    leave it with the default option most of the time, as PoEdit already includes a handy database of plural rules for
    many languages.
    - Charsets: UTF-8, preferably;
    - Source code charset: set here the charset used by your codebase - probably UTF-8 as well, right?
- Source keywords: The underlying software knows how `gettext()` and similar function calls look like in several
programming languages, but you might as well create your own translation functions. It will be here you’ll add those
other methods. This will be discussed later in the “Tips” section.

After setting those points it will run a scan through your source files to find all the localization calls. After every
scan PoEdit will display a summary of what was found and what was removed from the source files. New entries will fed
empty into the translation table, and you’ll start typing in the localized versions of those strings. Save it and a .mo
file will be (re)compiled into the same folder and ta-dah: your project is internationalized.

#### 4. Translating strings
As you may have noticed before, there are two main types of localized strings: simple ones and those with plural
forms. The first ones have simply two boxes: source and localized string. The source string cannot be modified as
Gettext/Poedit do not include the powers to alter your source files - you should change the source itself and rescan
the files. Tip: you may right-click a translation line and it will hint you with the source files and lines where that
string is being used.
On the other hand, plural form strings include two boxes to show the two source strings, and tabs so you can configure
the different final forms.

Whenever you change your sources and need to update the translations, just hit Refresh and Poedit will rescan the code,
removing non-existent entries, merging the ones that changed and adding new ones. It may also try to guess some
translations, based on other ones you did. Those guesses and the changed entries will receive a "Fuzzy" marker,
indicating it needs review, appearing golden in the list. It is also useful if you have a translation team and someone
tries to write something they are not sure about: just mark Fuzzy, and someone else will review later.

Finally, it is advised to leave "View > Untranslated entries first" marked, as it will help you _a lot_ to not forget
any entry. From that menu, you can also open parts of the UI that allow you to leave contextual information for
translators if needed.

### Tips & Tricks

#### Possible caching issues
If you are running PHP as a module on Apache (`mod_php`), you might face issues with the `.mo` file being cached. It
happens the first time it is read, and then, to update it, you might need to restart the server. On Nginx and PHP5 it
usually takes only a couple of page refreshes to refresh the translation cache, and on PHP7 it is rarely needed.

#### Additional helper functions
As preferred by many people, it is easier to use `_()` instead of `gettext()`. Many custom i18n libraries from
frameworks use something similar to `t()` as well, to make translated code shorter. However, that is the only function
that sports a shortcut. You might want to add in your project some others, such as `__()` or `_n()` for `ngettext()`,
or maybe a fancy `_r()` that would join `gettext()` and `sprintf()` calls. Other libraries, such as
[php-gettext's Gettext][php-gettext] also provide helper functions like these.

In those cases, you'll need to instruct the Gettext utility on how to extract the strings from those new functions.
Don't be afraid; it is very easy. It is just a field in the `.po` file, or a Settings screen on Poedit. In the editor,
that option is inside "Catalog > Properties > Source keywords". Remember: Gettext already knows the default functions
for many languages, so don’t be afraid if that list seems empty. You need to include there the specifications of those
new functions, following [a specific format][func_format]:

- if you create something like `t()` that simply returns the translation for a string, you can specify it as `t`.
Gettext will know the only function argument is the string to be translated;
- if the function has more than one argument, you can specify in which one the first string is - and if needed, the
plural form as well. For instance, if we call our function like this: `__('one user', '%d users', $number)`, the
specification would be `__:1,2`, meaning the first form is the first argument, and the second form is the second
argument. If your number comes as the first argument instead, the spec would be `__:2,3`, indicating the first form is
the second argument, and so on.

After including those new rules in the `.po` file, a new scan will bring in your new strings just as easy as before.

### References

* [Wikipedia: i18n and l10n](https://en.wikipedia.org/wiki/Internationalization_and_localization)
* [Wikipedia: Gettext](https://en.wikipedia.org/wiki/Gettext)
* [LingoHub: PHP internationalization with gettext tutorial][lingohub]
* [PHP Manual: Gettext](https://www.php.net/manual/book.gettext.php)
* [Gettext Manual][manual]

[Poedit]: https://poedit.net
[poedit_download]: https://poedit.net/download
[lingohub]: https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/
[lingohub_plurals]: https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/#Plurals
[plural]: https://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html
[gettext]: https://en.wikipedia.org/wiki/Gettext
[manual]: https://www.gnu.org/software/gettext/manual/gettext.html
[639-1]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
[3166-1]: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[rare]: https://www.gnu.org/software/gettext/manual/gettext.html#Rare-Language-Codes
[func_format]: https://www.gnu.org/software/gettext/manual/gettext.html#Language-specific-options
[aura-intl]: https://github.com/auraphp/Aura.Intl
[php-gettext]: https://github.com/php-gettext/Gettext
[symfony]: https://symfony.com/components/Translation
[laminas]: https://docs.laminas.dev/laminas-i18n/
[laravel]: https://laravel.com/docs/master/localization
[yii]: https://www.yiiframework.com/doc/guide/2.0/en/tutorial-i18n
[intl]: https://www.php.net/manual/intro.intl.php
[ICU project]: https://icu.unicode.org/
[symfony-keys]: https://symfony.com/doc/current/translation.html#using-real-or-keyword-messages

[sprintf]: https://www.php.net/manual/function.sprintf.php
[func]: https://www.php.net/manual/function.gettext.php
[n_func]: https://www.php.net/manual/function.ngettext.php
[d_func]: https://www.php.net/manual/function.dgettext.php
[dn_func]: https://www.php.net/manual/function.dngettext.php
