---
title: Vagrant
anchorid: vagrant
isChild: true
---

<h2 id="vagrant">Vagrant</h2>

如果你在开发应用和发布应用的时候采用了不同的环境，那么在正式使用时，应用可能出现许多奇怪的BUG。如果你是在开发团队里工作，那么保证各位的开发环境和所有的库文件都是最新的并且处在同一版本，会是件更麻烦的事。
如果你在Windows平台开发并准备部署到Linux（或其他非Windows的平台）上，或者你是在开发团队里工作，那你应该考虑用个虚拟机。这虽然听起来挺麻烦，但是 [Vagrant][vagrant]这个程序可以辅助你用几步就创建一个简单的虚拟机。 接下来，你可以手动配置这些基础的环境，或者你可以找个部署软件来替你完成这些事情，比如说[Puppet][puppet]或[Chef][chef]。部署个基础环境，能很好地保证大家的开发环境建立的方式都大致相似，而且还能省去你维护那些复杂的“安装命令”列表的麻烦。 你也可以轻易地毁掉现有的基础环境后再做一个新的出来，这样你就能有一个全新的环境。

[Vagrant][vagrant]会创建一些共享文件夹，用来给你在主机和虚拟机之间共享代码用。也就是说，你可以在主机上写好程序，然后在虚拟机中运行。

### 小助手

如果你想获取一些Vagrant的使用帮助的话，可以参考下面的三个服务：

- [Rove][rove]: 通过Chef来提供常用的Vagrant构建，其中包含了PHP选项。
- [Puphpet][puphpet]: 简单的图形界面来设置虚拟机的PHP开发环境，**专注于PHP开发**，不仅可以配置本地的虚拟机，还可以部署到云服务上，它的底层是通过Puppet实现。
- [Protobox][protobox]: 构建在Vagrant上的服务层，提供Web界面设置虚拟机的Web开发环境，通过单个YAML文档控制虚拟机的所有配置。

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
[rove]: http://rove.io/
[puphpet]: https://puphpet.com/
[protobox]: http://getprotobox.com/
