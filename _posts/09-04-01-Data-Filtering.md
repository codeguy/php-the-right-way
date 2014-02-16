---
title: 数据过滤
anchorid: data_filtering
isChild: true
---

<h2 id="data_filtering">数据过滤</h2>

永远不要在PHP代码中信任外部输入，在使用之前一定要先过滤和验证，`filter_var`和`filter_input`函数可以帮助过滤文本和
验证文本格式(如邮箱地址)。

外部输入可以是：`$_GET`和`$_POST`表单输入数据、`$_SERVER`超级变量中的某些值和通过`fopen('php://input', 'r')`获取的
HTTP请求体。要记住外部输入不仅仅是用户提交的表单数据，还包括上传和下载的文件、session变量、cookie数据和第三方Web服务提供的
数据等。

当外部数据被存储合并之后，下次读取时，它们仍然算是外部输入，每次在代码中处理的时候，需要问自己是否已经正确过滤，是否可以
信任它们。

数据需要根据不同用处，进行不同的_过滤_，如果把未经过滤的数据输出到HTML页面，它可以在你的网站里执行HTML和JavaScript！即通常
说的跨站脚本攻击(XSS)。避免XSS的一个策略就是使用`strip_tags`函数过滤外部输入的所有HTML标签，或者使用`htmlentities`/
`htmlspecialchars`转义其中的HTML实体。

另外一个例子是传给命令行命令的选项，这可能非常危险(通常不是一个好主意)，不过你可以用内置的`escapeshellarg`函数过滤命令行的
参数。

最后一个例子是根据外部输入来从文件系统中加载文件的操作，可以通过修改路径中的文件名实施攻击。你需要过滤输入中的"/", "../",
[null bytes][6], 或其他特殊字符，以防止加载不能公开的包含敏感数据的文件。

* [学习更多数据过滤][1]
* [了解更多`filter_var`][4]
* [了解更多`filter_input`][5]
* [学习更多null字节处理][6]

### 数据清洗

数据清洗就是删除或转义外部输入中的非法或不安全字符。比如把外部数据输出到HTML或插入到SQL语句之前，需要先清洗外部输入。
当你通过[PDO](#databases)绑定数据时，它会替你转义输入数据。

有时候需要允许外部数据包含安全的HTML标签，并输出到HTML页面中。这个比较难处理，可以考虑使用其他更严格的格式，如
或BBCode，实在不能的话，可以使用[HTML Purifier][html-purifier]库来进行数据清洗。

[了解更多数据清洗过滤器][2]

### 数据验证

数据验证外部输入就是你预期的，如你在处理注册表单时，需要验证email地址、电话号码和年龄等数据

[了解更多数据验证过滤器][3]

[1]: http://www.php.net/manual/en/book.filter.php
[2]: http://www.php.net/manual/en/filter.filters.sanitize.php
[3]: http://www.php.net/manual/en/filter.filters.validate.php
[4]: http://php.net/manual/en/function.filter-var.php
[5]: http://www.php.net/manual/en/function.filter-input.php
[6]: http://php.net/manual/en/security.filesystem.nullbytes.php
[html-purifier]: http://htmlpurifier.org/
