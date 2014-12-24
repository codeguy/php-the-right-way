---
isChild: true
anchor:  mac_setup
---

## Mac Setup {#mac_setup_title}

OS X comes prepackaged with PHP but it is normally a little behind the latest stable. Mountain Lion has 5.3.10,
Mavericks has 5.4.17 and Yosemite has 5.5.9, but with PHP 5.6 out that is often not good enough.

There are multiple ways to install PHP on OS X.

### Install PHP via Homebrew

[Homebrew] is a powerful package manager for OS X, which can help you install PHP and various extensions easily.
[Homebrew PHP] is a repository that contains PHP-related "formulae" for Homebrew, and will let you install PHP.

At this point, you can install `php53`, `php54`, `php55` or `php56` using the `brew install` command, and switch
between them by modifying your `PATH` variable.

### Install PHP via phpbrew

[phpbrew] is a tool for installing and managing multiple PHP versions. This can be really useful if two different
applications/projects require different versions of PHP, and you are not using virtual machines.

### Compile from Source

Another option that gives you control over the version of PHP you install, is to [compile it yourself][mac-compile].
In that case be sure to have installed either [Xcode][xcode-gcc-substitution] or Apple's substitute
["Command Line Tools for XCode"] downloadable from Apple's Mac Developer Center.

### All-in-One Installers

The solutions listed above mainly handle PHP itself, and do not supply things like Apache, Nginx or a SQL server.
"All-in-one" solutions such as [MAMP][mamp-downloads] and [XAMPP][xampp] will install these other bits of software for
you and tie them all together, but ease of setup comes with a trade-off of flexibility.


[Homebrew]: http://brew.sh/
[Homebrew PHP]: https://github.com/Homebrew/homebrew-php#installation
[phpbrew]: https://github.com/phpbrew/phpbrew
[mac-compile]: http://php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
["Command Line Tools for XCode"]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/
[xampp]: http://www.apachefriends.org/en/xampp.html
