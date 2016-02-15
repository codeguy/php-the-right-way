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
before. It usually us done every time a new language or region needs support, and is updated when new interface pieces
are added, as they need to be available in all supported languages.
- **Pluralization** defines the rules needed between different languages to interoperate strings containing numbers and 
counters. For instance, in English when you have only one item, it's singular, and anything different from that is 
called plural; plural is this language is indicated by adding an S after some words, and sometimes changes parts of it.
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

However, the most classic way and often taken as reference for i18n and l10n is a [UNIX tool called `gettext`][gettext].
It dates back to 1995 and is still the most complete implementation for translating software. It is pretty easy to get
running, while it still sports powerful supporting tools. It's about Gettext we will be talking here. Also, to help you
not get messy over the command-line, we will be presenting a great GUI application that can be used to easily update
your l10n source files.

### Discussion on l10n keys
TODO: talk about static keys versus text keys, as in https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/#What_form_of_msgids_should_be_used

## Gettext

### Installation
TODO: You might need to install Gettext and the related PHP library by using your package manager, like `apt-get` or `yum`.

### Structure
TODO: Talk about POT/PO/MO files and Poedit. Explain details about plural forms, directory structures and domains.

### Sample implementation
TODO: Add sample code implementing i18n using gettext.

### Everyday usage
TODO: Explain what's the l10n routine for a project with existing i18n in place, using Poedit (and maybe command line as seen
in the LingoHub file).

#### Tips & Tricks
TODO: Talk about possible issue with caching.
TODO: Suggest creation of helper functions.

### References

* [Wikipedia: i18n and l10n](https://en.wikipedia.org/wiki/Internationalization_and_localization)
* [Wikipedia: Gettext](https://en.wikipedia.org/wiki/Gettext)
* [LingoHub: PHP internationalization with gettext tutorial](https://lingohub.com/blog/2013/07/php-internationalization-with-gettext-tutorial/)
* [PHP Manual: Gettext](http://br2.php.net/manual/en/book.gettext.php)


[gettext]: https://en.wikipedia.org/wiki/Gettext
