---
isChild: true
anchor: mac_setup
---

## Mac Setup  {#mac_setup_title}

OSX dolazi sa PHP paketom koji obicno malo zaostaje za zadnjim stablnim. Lion dolazi sa PHP 5.3.6,
Mountain Lion sa 5.3.10, and Mavericks sa 5.4.17.

Za update PHP-a na OSX-u mozete dobiti instalaciju preko brojnih Mac [package managers][mac-package-managers], with
[php-osx by Liip][php-osx-downloads] kao preporucenog.

Druga opcija je da [sami kompajlirate][mac-compile], u tom slucaju morate imati instaliran ili Xcode or
Apple-ovu zamenu ["Command Line Tools for Xcode"][apple-developer] download sa Apple-ovog Mac Developer Centra.

Za kompletan "all-in-one" package ukljucujuci PHP, Apache web server and MySQL bazu, i sve ovo sa lepim control
GUI-em, probajte [MAMP][mamp-downloads] or [XAMPP][xampp].

[mac-package-managers]: http://www.php.net/manual/en/install.macosx.packages.php
[mac-compile]: http://www.php.net/manual/en/install.macosx.compile.php
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
[apple-developer]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/index.html
[php-osx-downloads]: http://php-osx.liip.ch/
[xampp]: http://www.apachefriends.org/en/xampp.html
