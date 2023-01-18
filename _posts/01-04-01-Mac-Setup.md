---
isChild: true
anchor:  mac_setup
---

## Mac Setup {#mac_setup_title}

macOS comes prepackaged with PHP but it is normally a little behind the latest stable release. There are multiple ways to install the latest PHP version on macOS.

### Install PHP via Homebrew

[Homebrew] is a package manager for macOS that helps you easily install PHP and various extensions. The Homebrew core repository provides "formulae" for PHP 7.4, 8.0, 8.1 and PHP 8.2. Install the latest version with this command:

```
brew install php@8.2
```

You can switch between Homebrew PHP versions by modifying your `PATH` variable. Alternatively, you can use [brew-php-switcher][brew-php-switcher] to switch PHP versions automatically.

You can also switch between PHP versions manually by unlinking and linking the wanted version:

```
brew unlink php
brew link --overwrite php@8.1
```

```
brew unlink php
brew link --overwrite php@8.2
```

### Install PHP via Macports

The [MacPorts] Project is an open-source community initiative to design an
easy-to-use system for compiling, installing, and upgrading either
command-line, X11 or Aqua based open-source software on the OS X operating
system.

MacPorts supports pre-compiled binaries, so you don't need to recompile every
dependency from the source tarball files, it saves your life if you don't
have any package installed on your system.

At this point, you can install `php54`, `php55`, `php56`, `php70`, `php71`, `php72`, `php73`, `php74`, `php80`, `php81`  or `php82` using the `port install` command, for example:

    sudo port install php74
    sudo port install php82

And you can run `select` command to switch your active PHP:

    sudo port select --set php php82

### Install PHP via phpbrew

[phpbrew] is a tool for installing and managing multiple PHP versions. This can be really useful if two different
applications/projects require different versions of PHP, and you are not using virtual machines.

### Install PHP via Liip's binary installer

Another popular option is [php-osx.liip.ch] which provides one liner installation methods for versions 5.3 through 7.3.
It doesn't overwrite the PHP binaries installed by Apple, but installs everything in a separate location (/usr/local/php5).

### Compile from Source

Another option that gives you control over the version of PHP you install, is to [compile it yourself][mac-compile].
In that case be sure to have installed either [Xcode][xcode-gcc-substitution] or Apple's substitute
["Command Line Tools for XCode"] downloadable from Apple's Mac Developer Center.

### All-in-One Installers

The solutions listed above mainly handle PHP itself, and do not supply things like [Apache][apache], [Nginx][nginx] or a SQL server.
"All-in-one" solutions such as [MAMP][mamp-downloads] and [XAMPP][xampp] will install these other bits of software for
you and tie them all together, but ease of setup comes with a trade-off of flexibility.

[Homebrew]: https://brew.sh/
[MacPorts]: https://www.macports.org/install.php
[phpbrew]: https://github.com/phpbrew/phpbrew
[php-osx.liip.ch]: https://web.archive.org/web/20220505163210/https://php-osx.liip.ch/
[mac-compile]: https://www.php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
["Command Line Tools for XCode"]: https://developer.apple.com/downloads
[apache]: https://httpd.apache.org/
[nginx]: https://www.nginx.com/
[mamp-downloads]: https://www.mamp.info/en/downloads/
[xampp]: https://www.apachefriends.org/
[brew-php-switcher]: https://github.com/philcook/brew-php-switcher
