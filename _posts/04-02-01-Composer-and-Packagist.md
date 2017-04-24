---
title: Composer 与 Packagist
isChild: true
anchor:  composer_and_packagist
---

## Composer 与 Packagist {#composer_and_packagist_title}

Composer 是一个 **杰出** 的依赖管理器。在 `composer.json` 文件中列出你项目所需的依赖包，加上一点简单的命令，Composer 将会自动帮你下载并设置你的项目依赖。Composer 有点类似于 Node.js 世界里的 NPM，或者 Ruby 世界里的 Bundler。

现在已经有许多 PHP 第三方包已兼容 Composer，随时可以在你的项目中使用。这些「packages(包)」都已列在 [Packagist]，这是一个官方的 Composer 兼容包仓库。

> 为了提高国内 Composer 的使用体验，Laravel China 社区维护了 [Composer 中文镜像 /Packagist 中国全量镜像](https://laravel-china.org/composer) ，此镜像使用了又拍云的 CDN 加速，将会极大加速 Composer 依赖的下载速度。

### 如何安装 Composer

最安全的下载方法就是使用 [官方的教程](https://getcomposer.org/download/)。
此方法会验证安装器是否安全，是否被修改。

安装器安装 Composer 的应用范围为 *本地*，也就是在你当前项目文件夹。

我们推荐你 *全局* 安装，即把可执行文件复制到 `/usr/local/bin` 路径中：

{% highlight console %}
mv composer.phar /usr/local/bin/composer
{% endhighlight %}

**注意:** 以上命令如果失败，请尝试使用`sudo` 来增加权限。

*本地* 使用 Composer 的话，你可以运行 `php composer.phar` ，全局的话是：`composer`。

#### Windows环境下安装

对于Windows 的用户而言最简单的获取及执行方法就是使用 [ComposerSetup] 安装程序，它会执行一个全局安装并设置你的 `$PATH`，所以你在任意目录下在命令行中使用 `composer`。

### 如何手动安装 Composer

手动安装 Composer 是一个高端的技术。仅管如此还是有许多开发者有各种原因喜欢使用这种交互式的应用程序安装 Composer。在安装前请先确认你的 PHP 安装项目如下：

- 正在使用一个满足条件的 PHP 版本
- `.phar` 文件可以正确的被执行
- 相关的目录有足够的权限
- 相关有问题的扩展没有被载入
- 相关的 `php.ini` 设置已完成

由于手动安装没有执行这些检查，你必须自已衡量决定是否值得做这些事，以下是如何手动安装 Composer ：

{% highlight console %}
curl -s https://getcomposer.org/composer.phar -o $HOME/local/bin/composer
chmod +x $HOME/local/bin/composer
{% endhighlight %}

路径 `$HOME/local/bin` (或是你选择的路径) 应该在你的 `$PATH` 环境变量中。这将会影响 `composer` 这个命令是否可用.

当你遇到文档指出执行 Composer 的命令是 `php composer.phar install`时，你可以使用下面命令替代:

{% highlight console %}
composer install
{% endhighlight %}

本章节会假设你已经安装了全局的 Composer。

### 如何设置及安装依赖

Composer 会通过一个 `composer.json` 文件持续的追踪你的项目依赖。 如果你喜欢，你可以手动管理这个文件，或是使用 Composer 自己管理。`composer require` 这个指令会增加一个项目依赖，如果你还没有 `composer.json` 文件, 将会创建一个。这里有个例子为你的项目加入 [Twig] 依赖。

{% highlight console %}
composer require twig/twig:~1.8
{% endhighlight %}

另外 `composer init` 命令将会引导你创建一个完整的 `composer.json` 文件到你的项目之中。无论你使用哪种方式，一旦你创建了 `composer.json` 文件，你可以告诉 Composer 去下载及安装你的依赖到 `vendor/` 目录中。这命令也适用于你已经下载并已经提供了一个 `composer.json` 的项目：

{% highlight console %}
composer install
{% endhighlight %}

接下来，添加这一行到你应用的主要 PHP 文件中，这将会告诉 PHP 为你的项目依赖使用 Composer 的自动加载器。

{% highlight php %}
<?php
require 'vendor/autoload.php';
{% endhighlight %}

现在你可以使用你项目中的依赖，且它们会在需要时自动完成加载。

### 更新你的依赖

Composer 会建立一个 `composer.lock` 文件，在你第一次执行 `php composer install` 时，存放下载的每个依赖包精确的版本编号。假如你要分享你的项目给其他开发者，并且 `composer.lock` 文件也在你分享的文件之中的话。 当他们执行 `php composer.phar install` 这个命令时，他们将会得到与你一样的依赖版本。 当你要更新你的依赖时请执行 `php composer update`。请不要在部署代码的时候使用 `composer update`，只能使用 `composer install` 命令，否则你会发现你在生产环境中用的是不同的扩展包依赖版本。

当你需要灵活的定义你所需要的依赖版本时，这是最有用。 举例来说需要一个版本为 ~1.8 时，意味着 “任何大于 1.8.0 ，但小于 2.0.x-dev 的版本”。你也可以使用通配符 `*` 在 `1.8.*` 之中。现在Composer在`composer update` 时将升级你的所有依赖到你限制的最新版本。

### 更新通知

要接收关于新版本的更新通知。你可以注册 [VersionEye]，这个 web 服务可以监控你的 Github 及 BitBucket 帐号中的 `composer.json` 文件，并且当包有新更新时会发送邮件给你。

### 检查你的依赖安全问题

[Security Advisories Checker] 是一个 web 服务和一个命令行工具，二者都会仔细检查你的 `composer.lock` 文件，并且告诉你任何你需要更新的依赖。

### 处理 Composer 全局依赖

Composer 也可以处理全局依赖和他们的二进制文件。用法很直接，你所要做的就是在命令前加上`global`前缀。如果你想安装 PHPUnit 并使它全局可用，你可以运行下面的命令：

{% highlight console %}
composer global require phpunit/phpunit
{% endhighlight %}

这将会创建一个 `~/.composer` 目录存放全局依赖，要让已安装依赖的二进制命令随处可用，你需要添加 `~/.composer/vendor/bin` 目录到你的 `$PATH` 变量。

* [其他学习 Composer 相关资源][Learn about Composer]

[Packagist]: http://packagist.org/
[Twig]: http://twig.sensiolabs.org
[VersionEye]: https://www.versioneye.com/
[Security Advisories Checker]: https://security.sensiolabs.org/
[Learn about Composer]: http://getcomposer.org/doc/00-intro.md
[ComposerSetup]: https://getcomposer.org/Composer-Setup.exe
