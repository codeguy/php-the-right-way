---
anchor: code_style_guide
---

# Code Style Guide {#code_style_guide_title}

The PHP community is large and diverse, composed of innumerable libraries, frameworks, and components. It is common for
PHP developers to choose several of these and combine them into a single project. It is important that PHP code adheres
(as close as possible) to a common code style to make it easy for developers to mix and match various libraries for
their projects.

The [Framework Interop Group][fig] has proposed and approved a series of style recommendations. Not all of them relate
to code-style, but those that do are [PSR-1][psr1], [PSR-12][psr12], [PSR-4][psr4] and [PER Coding Style][per-cs]. These
recommendations are merely a set of rules that many projects like Drupal, Zend, Symfony, Laravel, CakePHP, phpBB, AWS SDK,
FuelPHP, Lithium, etc. are adopting. You can use them for your own projects, or continue to use your own
personal style.

Ideally, you should write PHP code that adheres to a known standard. This could be any combination of PSRs, or one
of the coding standards made by PEAR or Zend. This means other developers can easily read and work with your code, and
applications that implement the components can have consistency even when working with lots of third-party code.

* [Read about PSR-1][psr1]
* [Read about PSR-12][psr12]
* [Read about PSR-4][psr4]
* [Read about PER Coding Style][per-cs]
* [Read about PEAR Coding Standards][pear-cs]
* [Read about Symfony Coding Standards][symfony-cs]

You can use [PHP_CodeSniffer][phpcs] to check code against any one of these recommendations, and plugins for text
editors like [Sublime Text][st-cs] to be given real-time feedback.

You can fix the code layout automatically by using one of the following tools:

- One is the [PHP Coding Standards Fixer][phpcsfixer] which has a very well tested codebase.
- Also, the [PHP Code Beautifier and Fixer][phpcbf] tool which is included with PHP_CodeSniffer can be used to adjust your code accordingly.

And you can run phpcs manually from shell:

    phpcs -sw --standard=PSR1 file.php

It will show errors and describe how to fix them.
It can also be helpful to include this command in a git hook.
That way, branches which contain violations against the chosen standard cannot enter the repository until those
violations have been fixed.

If you have PHP_CodeSniffer, then you can fix the code layout problems reported by it, automatically, with the
[PHP Code Beautifier and Fixer][phpcbf].

    phpcbf -w --standard=PSR1 file.php

Another option is to use the [PHP Coding Standards Fixer][phpcsfixer].
It will show what kind of errors the code structure had before it fixed them.

    php-cs-fixer fix -v --rules=@PSR1 file.php

English is preferred for all symbol names and code infrastructure. Comments may be written in any language easily
readable by all current and future parties who may be working on the codebase.

Finally, a good supplementary resource for writing clean PHP code is [Clean Code PHP][cleancode].

[fig]: https://www.php-fig.org/
[psr1]: https://www.php-fig.org/psr/psr-1/
[psr12]: https://www.php-fig.org/psr/psr-12/
[psr4]: https://www.php-fig.org/psr/psr-4/
[per-cs]: https://www.php-fig.org/per/coding-style/
[pear-cs]: https://pear.php.net/manual/en/standards.php
[symfony-cs]: https://symfony.com/doc/current/contributing/code/standards.html
[phpcs]: https://github.com/squizlabs/PHP_CodeSniffer
[phpcbf]: https://github.com/squizlabs/PHP_CodeSniffer/wiki/Fixing-Errors-Automatically
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: https://cs.symfony.com/
[cleancode]: https://github.com/jupeter/clean-code-php
