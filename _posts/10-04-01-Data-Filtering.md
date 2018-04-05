---
isChild: true
anchor:  data_filtering
title: 数据过滤
---

## 数据过滤 {#data_filtering_title}

永远不要信任外部输入。请在使用外部输入前进行过滤和验证。`filter_var()` 和 `filter_input()` 函数可以过滤文本并对格式进行校验（例如 email 地址）。

外部输入可以是任何东西：`$_GET` 和 `$_POST` 等表单输入数据，`$_SERVER` 超全局变量中的某些值，还有通过 `fopen('php://input', 'r')` 得到的 HTTP 请求体。记住，外部输入的定义并不局限于用户通过表单提交的数据。上传和下载的文档，session 值，cookie 数据，还有来自第三方 web 服务的数据，这些都是外部输入。

虽然外部输入可以被存储、组合并在以后继续使用，但它依旧是外部输入。每次你处理、输出、连结或在代码中包含时，请提醒自己检查数据是否已经安全地完成了过滤。

数据可以根据不同的目的进行不同的 _过滤_ 。比如，当原始的外部输入被传入到了 HTML 页面的输出当中，它可以在你的站点上执行 HTML 和 JavaScript 脚本！这属于跨站脚本攻击（XSS），是一种很有杀伤力的攻击方式。一种避免 XSS 攻击的方法是在输出到页面前对所有用户生成的数据进行清理，使用 `strip_tags()` 函数来去除 HTML 标签或者使用 `htmlentities()` 或是 `htmlspecialchars()` 函数来对特殊字符分别进行转义从而得到各自的 HTML 实体。

另一个例子是传入能够在命令行中执行的选项。这是非常危险的（同时也是一个不好的做法），但是你可以使用自带的 `escapeshellarg()` 函数来过滤执行命令的参数。

最后的一个例子是接受外部输入来从文件系统中加载文件。这可以通过将文件名修改为文件路径来进行利用。你需要过滤掉`"/"`, `"../"`, [null 字符][6]或者其他文件路径的字符来确保不会去加载隐藏、私有或者敏感的文件。

* [学习更多数据过滤][1]
* [学习更多 `filter_var`][4]
* [学习更多 `filter_input`][5]
* [学习更多 null 字符问题][6]

### 数据清理

数据清理是指删除（或转义）外部输入中的非法和不安全的字符。

例如，你需要在将外部输入包含在 HTML 中或者插入到原始的 SQL 请求之前对它进行过滤。当你使用 [PDO](#databases) 中的限制参数功能时，它会自动为你完成过滤的工作。

有些时候你可能需要允许一些安全的 HTML 标签输入进来并被包含在输出的 HTML 页面中，但这实现起来并不容易。尽管有一些像 [HTML Purifier][html-purifier] 的白名单类库为了这个原因而出现，实际上更多的人通过使用其他更加严格的格式限制方式例如使用 Markdown 或 BBCode 来避免出现问题。

[查看 Sanitization Filters][2]

### 反序列化 Unserialization

使用 `unserialize()` 从用户或者其他不可信的渠道中提取数据是非常危险的事情。这样做会触发恶意实例化对象（包含用户定义的属性），**即使对象没用被使用**，也会触发运行对象的析构函数。所以你应该避免从不可信渠道反序列化数据。

如果你必须这样做，请你使用 PHP 7 的 [`allowed_classes`][unserialize] 选项来限制反序列化的对象类型。

### 有效性验证

验证是来确保外部输入的是你所想要的内容。比如，你也许需要在处理注册申请时验证 email 地址、手机号码或者年龄等信息的有效性。

[查看 Validation Filters][3]


[1]: http://php.net/book.filter
[2]: http://php.net/filter.filters.sanitize
[3]: http://php.net/filter.filters.validate
[4]: http://php.net/function.filter-var
[5]: http://php.net/function.filter-input
[6]: http://php.net/security.filesystem.nullbytes
[html-purifier]: http://htmlpurifier.org/
[unserialize]: https://secure.php.net/manual/en/function.unserialize.php
