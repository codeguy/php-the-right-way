---
isChild: true
title:   PDO 扩展
anchor:  pdo_extension
---

## PDO 扩展 {#pdo_extension_title}

[PDO] 是一个数据库连接抽象类库 &mdash; 自 5.1.0 版本起内置于 PHP 当中 &mdash; 它提供了一个通用的接口来与不同的数据库进行交互。比如你可以使用相同的简单代码来连接 MySQL 或是 SQLite：

{% highlight php %}
<?php
// PDO + MySQL
$pdo = new PDO('mysql:host=example.com;dbname=database', 'user', 'password');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);

// PDO + SQLite
$pdo = new PDO('sqlite:/path/db/foo.sqlite');
$statement = $pdo->query("SELECT some_field FROM some_table");
$row = $statement->fetch(PDO::FETCH_ASSOC);
echo htmlentities($row['some_field']);
{% endhighlight %}

PDO 并不会对 SQL 请求进行转换或者模拟实现并不存在的功能特性；它只是单纯地使用相同的 API 连接不同种类的数据库。

更重要的是，`PDO` 使你能够安全的插入外部输入(例如 ID)到你的 SQL 请求中而不必担心 SQL 注入的问题。这可以通过使用 PDO 语句和限定参数来实现。

我们来假设一个 PHP 脚本接收一个数字 ID 作为一个请求参数。这个 ID 应该被用来从数据库中取出一条用户记录。下面是一个`错误`的做法：

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$pdo->query("SELECT name FROM users WHERE id = " . $_GET['id']); // <-- NO!
{% endhighlight %}

这是一段糟糕的代码。你正在插入一个原始的请求参数到 SQL 请求中。这将让被黑客轻松地利用[SQL 注入]方式进行攻击。想一下如果黑客将一个构造的 `id` 参数通过像 `http://domain.com/?id=1%3BDELETE+FROM+users` 这样的 URL 传入。这将会使 `$_GET['id']` 变量的值被设为 `1;DELETE
FROM users` 然后被执行从而删除所有的 user 记录！因此，你应该使用 PDO 限制参数来过滤 ID 输入。

{% highlight php %}
<?php
$pdo = new PDO('sqlite:/path/db/users.db');
$stmt = $pdo->prepare('SELECT name FROM users WHERE id = :id');
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT); // <-- filter your data first (see [Data Filtering](#data_filtering)), especially important for INSERT, UPDATE, etc.
$stmt->bindParam(':id', $id, PDO::PARAM_INT); // <-- Automatically sanitized for SQL by PDO
$stmt->execute();
{% endhighlight %}

这是正确的代码。它在一条 PDO 语句中使用了一个限制参数。这将对外部 ID 输入在发送给数据库之前进行转义来防止潜在的 SQL 注入攻击。

对于写入操作，例如 INSERT 或者 UPDATE，进行[数据过滤](#data_filtering)并对其他内容进行清理（去除 HTML 标签，Javascript 等等）是尤其重要的。PDO 只会为 SQL 进行清理，并不会为你的应用做任何处理。

* [了解 PDO]

你也应该知道数据库连接有时会耗尽全部资源，如果连接没有被隐式地关闭的话，有可能会造成可用资源枯竭的情况。不过这通常在其他语言中更为常见一些。使用 PDO 你可以通过销毁（destroy）对象，也就是将值设为 NULL，来隐式地关闭这些连接，确保所有剩余的引用对象的连接都被删除。如果你没有亲自做这件事情，PHP 会在你的脚本结束的时候自动为你完成 —— 除非你使用的是持久链接。

* [了解 PDO 连接]


[pdo]: http://php.net/pdo
[SQL Injection]: http://wiki.hashphp.org/Validation
[了解 PDO]: http://php.net/book.pdo
[了解 PDO 连接]: http://php.net/pdo.connections