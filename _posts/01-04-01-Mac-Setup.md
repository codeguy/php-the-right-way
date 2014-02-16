---
title: Mac 安装
anchorid: mac_setup
isChild: true
---

<h2 id="mac_setup">Mac 安装</h2>

OSX系统会预装PHP，只是版本比最新稳定版低一点。 目前Lion下是PHP 5.3.6，Mountain Lion下是5.3.10, Mavericks下是5.4.17.

要更新OSX中的PHP，你可以通过那些Mac[包管理器][mac-package-managers]来安装，推荐使用[php-osx by Liip][php-osx-downloads]。

另外一种方式是[自己编译][mac-compile]，不过要确认已经安装Xcode或["Command Line Tools for Xcode"][apple-developer]，它们可以
从Apple的Mac Developer Center下载。

如果想安装包含了PHP、Apache和MySQL的一键安装包，可以试试[MAMP][mamp-downloads]或[XAMPP][xampp]，里面包含了相应的图形管理工具。

[mac-package-managers]: http://www.php.net/manual/en/install.macosx.packages.php
[mac-compile]: http://www.php.net/manual/en/install.macosx.compile.php
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
[apple-developer]: https://developer.apple.com/downloads
[mamp-downloads]: http://www.mamp.info/en/downloads/index.html
[php-osx-downloads]: http://php-osx.liip.ch/
[xampp]: http://www.apachefriends.org/en/xampp.html
