---
title: 配置文件
anchorid: configuration_files
isChild: true
---

<h2 id="configuration_files">配置文件</h2>

在创建应用的配置文件时，请遵循下面的业界最佳实践：

- 配置文件保存在Web不能直接访问和上传的目录中。
- 如果配置文件只能放在文档根目录时，请使用`.php`作为文件名后缀，这样即使直接访问该配置文件，也不会输出配置信息。
- 配置文件内容应该加密，或者对文件设置访问权限。