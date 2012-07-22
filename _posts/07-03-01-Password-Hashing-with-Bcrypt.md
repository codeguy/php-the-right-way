---
isChild: true
---

## 使用Bcrypt做密码哈希

一个存在用户登录的PHP应用，用户名和密码(哈希后的)会保存在数据库中，用于将来登录时进行身份验证。因而对存储在数据库中的
密码进行正确的_哈希_非常重要。如果密码没有哈希，那么数据库被黑或者非法访问时，所有的用户帐号都将泄漏。

**使用Bcrypt做密码哈希**，Bcrypt非常简单，并可以确保数据库被攻击后，无法反向工程恢复密码的明文。

下面是几个PHP的Bcrypt库：

* [Read "How to Safely Store a Password" by Coda Hale][3]
* [Use Bcrypt with PHPass][4]

[3]: http://codahale.com/how-to-safely-store-a-password/
[4]: http://www.openwall.com/phpass/
