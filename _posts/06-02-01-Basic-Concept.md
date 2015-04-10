---
title:   기본 개념
isChild: true
anchor:  basic_concept
---

## 기본 개념 {#basic_concept_title}

간단한 예제를 통해서 기본적인 개념을 보여드리겠습니다.

아래 코드를 보면 데이터베이스와 통신하기 위한 어댑터를 필요로 하는 `Database`라는 클래스가 있습니다. 생성자에서 어댑터
인스턴스를 생성하는 방식으로 되어 있어서 두 클래스는 서로 강한 의존 관계를 가지고 있습니다. 그래서 `Database` 클래스를
테스트하기도 어렵습니다.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct()
    {
        $this->adapter = new MySqlAdapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

아래와 같이 리팩터링하여 의존성 주입을 사용하도록 하면 의존 관계를 약화시킬 수 있습니다.

{% highlight php %}
<?php
namespace Database;

class Database
{
    protected $adapter;

    public function __construct(MySqlAdapter $adapter)
    {
        $this->adapter = $adapter;
    }
}

class MysqlAdapter {}
{% endhighlight %}

이제 `Database`는 내부에서 직접 의존 관계에 있는 클래스 인스턴스를 생성하지 않고, 외부에서 전달받게 되었습니다. 어댑터
인스턴스를 인자로 전달받는 메소드를 만들어서 해당 어댑터를 사용하도록 설정하는 방식을 적용하거나, `$adapter`
프로퍼티를 `public` 으로 만들어서 프로퍼티를 직접 설정하게 할 수도 있을 것입니다.
