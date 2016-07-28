---
isChild: true
anchor:  mac_setup
---

## Mac Setup {#mac_setup_title}

OS X comes prepackaged with PHP but it is normally a little behind the latest stable. Mavericks has 5.4.17,
Yosemite has 5.5.9 and El Capitan has 5.5.29, but with PHP 7.0 out that is often not good enough.

There are multiple ways to install PHP on OS X.

### Install PHP via Homebrew

[Homebrew] is a powerful package manager for OS X, which can help you install PHP and various extensions easily.
[Homebrew PHP] is a repository that contains PHP-related "formulae" for Homebrew, and will let you install PHP.

At this point, you can install `php53`, `php54`, `php55`, `php56` or `php70` using the `brew install` command, and switch
between them by modifying your `PATH` variable. Alternatively you can use [brew-php-switcher][brew-php-switcher] which will switch automatically for you.

### Install PHP via Macports

The [MacPorts] Project is an open-source community initiative to design an
easy-to-use system for compiling, installing, and upgrading either
command-line, X11 or Aqua based open-source software on the OS X operating
system.

MacPorts supports pre-compiled binaries, so you don't need to recompile every
dependencies from the source tarball files, it saves your life if you don't
have any package installed on your system.

At this point, you can install `php54`, `php55`, `php56` or `php70` using the `port install` command, for example:

    sudo port install php56
    sudo port install php70

And you can run `select` command to switch your active php:

    sudo port select --set php php70

### Install PHP via phpbrew

[phpbrew] is a tool for installing and managing multiple PHP versions. This can be really useful if two different
applications/projects require different versions of PHP, and you are not using virtual machines.

### Install PHP via Liip's binary installer

Another popular option is [php-osx.liip.ch] which provides one liner installation methods for versions 5.3 through 7.0.
It doesn't overwrite the php binaries installed by Apple, but installs everything in a separate location (/usr/local/php5).

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
[MacPorts]: https://www.macports.org/install.php
[phpbrew]: https://github.com/phpbrew/phpbrew
[php-osx.liip.ch]: http://php-osx.liip.ch/
[mac-compile]: http://php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
["Command Line Tools for XCode"]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/
[xampp]: http://www.apachefriends.org/en/xampp.html
[brew-php-switcher]: https://github.com/philcook/brew-php-switcher
