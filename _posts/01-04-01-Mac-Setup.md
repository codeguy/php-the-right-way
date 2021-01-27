---
title: ম্যাক ইনস্টল
isChild: true
anchor:  mac_setup
---

## ম্যাক ইনস্টল {#mac_setup_title}

ম্যাক ওএস পিএইচপি নিয়ে প্রিপেকেজড আসে তবে এটি সর্বশেষতম স্থিতিশীল রিলিজের পিছনে সাধারণত কিছুটা পিছনে থাকে। ম্যাক ওএস এ সর্বশেষতম পিএইচপি সংস্করণ ইনস্টল করার একাধিক উপায় রয়েছে। 

### হোমব্রিউয়ের মাধ্যমে পিএইচপি ইনস্টল করুন

[Homebrew] is a package manager for macOS that helps you easily install PHP and various extensions. The Homebrew core repository provides "formulae" for PHP 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, and PHP 8.0. Install the latest version with this command:

[হোমব্রিউ][Homebrew] হচ্ছে ম্যাক ওএস এর জন্য একটি প্যাকেজ ম্যানেজার যা আপনাকে পিএইচপি এবং বিভিন্ন এক্সটেনশানগুলি সহজেই ইনস্টল করতে সহায়তা করে। হোমব্রিউ কোর রিপোজিটরি পিএইচপি ৫.৬, ৭.০, ৭.১, ৭.২, ৭.৩, ৭.৪ এবং পিএইচপি ৮.০ এর জন্য "সূত্রগুলি" সরবরাহ করে। এই কমান্ড দিয়ে সর্বশেষতম সংস্করণ ইনস্টল করুন:

```
brew install php@8.0
```

You can switch between Homebrew PHP versions by modifying your `PATH` variable. Alternatively, you can use [brew-php-switcher][brew-php-switcher] to switch PHP versions automatically.

আপনি আপনার `PATH` ভ্যারিয়েবল সংশোধন করে হোমব্রিউ পিএইচপি সংস্করণগুলির মধ্যে স্যুইচ করতে পারেন। বিকল্পভাবে, পিএইচপি সংস্করণগুলি স্বয়ংক্রিয়ভাবে স্যুইচ করার জন্য আপনি [ব্রিউ-পিএইচপি-স্যুইচার][brew-php-switcher] ব্যবহার করতে পারেন।

## ম্যাকপোর্টস এর মাধ্যমে পিএইচপি ইনস্টল

The [MacPorts] Project is an open-source community initiative to design an
easy-to-use system for compiling, installing, and upgrading either
command-line, X11 or Aqua based open-source software on the OS X operating
system.

MacPorts supports pre-compiled binaries, so you don't need to recompile every
dependency from the source tarball files, it saves your life if you don't
have any package installed on your system.

[ম্যাকপোর্টস][MacPorts] প্রজেক্ট একটি ডিজাইন করার জন্য একটি ওপেন সোর্স সম্প্রদায় উদ্যোগ
কোনওটি সংকলন, ইনস্টল এবং আপগ্রেড করার জন্য সহজেই ব্যবহারযোগ্য সিস্টেম
ওএস এক্স অপারেটিং-এ কমান্ড-লাইন, এক্স 11 বা অ্যাকোয়া ভিত্তিক ওপেন-সোর্স সফ্টওয়্যার
পদ্ধতি.

ম্যাকপোর্টস প্রাক-সংকলিত বাইনারিগুলিকে সমর্থন করে, তাই আপনাকে প্রত্যেকটি পুনরায় সংকলনের প্রয়োজন হবে না
উত্স টার্বল ফাইলগুলি থেকে নির্ভরতা, যদি আপনি না করেন তবে এটি আপনার জীবন বাঁচায়
আপনার সিস্টেমে কোনও প্যাকেজ ইনস্টল করা আছে।

At this point, you can install `php54`, `php55`, `php56`, `php70`, `php71`, `php72`, `php73`, `php74` or `php80` using the `port install` command, for example:

    sudo port install php74
    sudo port install php80

And you can run `select` command to switch your active PHP:

    sudo port select --set php php80

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
[Homebrew PHP]: https://github.com/Homebrew/homebrew-php#installation
[MacPorts]: https://www.macports.org/install.php
[phpbrew]: https://github.com/phpbrew/phpbrew
[php-osx.liip.ch]: https://php-osx.liip.ch/
[mac-compile]: https://secure.php.net/install.macosx.compile
[xcode-gcc-substitution]: https://github.com/kennethreitz/osx-gcc-installer
["Command Line Tools for XCode"]: https://developer.apple.com/downloads
[apache]: https://httpd.apache.org/
[nginx]: https://www.nginx.com/
[mamp-downloads]: https://www.mamp.info/en/downloads/
[xampp]: https://www.apachefriends.org/index.html
[brew-php-switcher]: https://github.com/philcook/brew-php-switcher
