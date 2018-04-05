---
isChild: true
anchor:  vagrant
---

## Vagrant 简介 {#vagrant_title}

[Vagrant] 可以让你使用单一的配置信息来部署一套虚拟环境, 最后打包为一个所谓的 box (就是已经部署好环境的虚拟机器). 你可以手动来安装和配置 box, 也可以使用自动部署工具, 如 [Puppet] 或者 [Chef] .

自动部署工具可以让你快速部署一套一模一样的环境, 避免了一大堆的手动的命令输入, 并且允许你随时删除和重建一个全新的 box, 虚拟机的管理变得更加简单. 

Vagrant 还可以在虚拟机和主机上分享文件夹, 意味着你可以在主机里面编辑代码, 然后在虚拟机里面运行.

### 需要更多的帮助?

下面是一些其他的软件, 可以帮助你更好的使用 Vagrant: 

- [Rove][Rove]: 使用 Chef 自动化安装一些常用的软件, PHP 包含在内.
- [Puphpet][Puphpet]: 简单的 Web 图形界面用来生成部署 PHP 环境的 Puppet 脚本, 此项目不仅可以用在开发上, 也可以在生产环境中使用.
- [Protobox][Protobox]: 是一个基于 vagrant 的一个层, 还有 Web 图形界面, 允许你使用一个 YAML 文件来安装和配置虚拟机里面的软件.
- [Phansible][Phansible]: 提供了一个简单的 Web 图形界面, 用来创建 Ansible 自动化部署脚本, 专门为 PHP 项目定制.

[Vagrant]: http://vagrantup.com/
[Puppet]: http://www.puppetlabs.com/
[Chef]: https://www.chef.io/
[Rove]: http://rove.io/
[Puphpet]: https://puphpet.com/
[Protobox]: http://getprotobox.com/
[Phansible]: http://phansible.com/
