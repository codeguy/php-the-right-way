---
isChild: true
title:   데이터베이스와 상호작용 하기
anchor:  databases_interacting
---

## 데이터베이스와 상호작용 하기 {#databases_interacting_title}

개발자들이 PHP를 배우기 시작할 때, 아마 대부분 데이터베이스에 접근하는 코드와 프리젠테이션 로직을 아래에 보이는
코드처럼 뒤섞어 놓는 경우가 많을 겁니다.

{% highlight php %}
<ul>
<?php
foreach ($db->query('SELECT * FROM table') as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>";
}
?>
</ul>
{% endhighlight %}

이것은 어떤 측면으로 보아도 나쁜 코딩 습관입니다. 디버깅하기도 어렵고 테스트하기도 어렵고 읽기도 어렵습니다.
그리고, limit을 추가하지 않으면 많은 양의 항목을 출력하게 됩니다.

여러분이 [객체지향 프로그래밍](#object-oriented-programming)을 선호하는지, [함수형 프로그래밍](#functional-programming)
을 선호하는지에 따라 여러가지 방법이 있을 수 있겠지만, 코드를 서로 분리하는 데에는 어떤 기본 요인이 있을 겁니다.

가장 기본적인 단계를 살펴봅시다.

{% highlight php %}
<?php
function getAllFoos($db) {
    return $db->query('SELECT * FROM table');
}

$results = getAllFoos($db);
foreach ($results as $row) {
    echo "<li>".$row['field1']." - ".$row['field1']."</li>"; // BAD!!
}
{% endhighlight %}

이 코드는 훌륭한 출발점이라고 할 수 있겠습니다. 두 개의 함수를 서로 다른 파일로 분리시킨다면 깔끔하게 분리된 코드를
얻을 수 있겠죠.

데이터베이스에 접근하는 함수를 넣을 클래스를 하나 만들어서 함수를 메소드로 바꿔주면 이제 우리는 "모델(Model)"을 갖게
된 겁니다. 단순히 `.php` 파일 하나를 만들어서 프리젠테이션 로직을 넣으면 우리는 이제 "뷰(View)"를 갖게 됩니다. 거의
[MVC] 패턴 비슷하게 된거죠. [MVC]는 대부분의 [프레임워크들](#frameworks_title)에서 사용되고 있는 객체지향적 아키텍처
패턴입니다.

**foo.php**

{% highlight php %}
<?php
$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8mb4', 'username', 'password');

// 모델 클래스를 사용할 수 있게 포함시킨다.
include 'models/FooModel.php';

// 인스턴스를 만듭니다.
$fooModel = new FooModel($db);
// Foo의 리스트를 가져옵니다.
$fooList = $fooModel->getAllFoos();

// 뷰를 보여준다.
include 'views/foo-list.php';
{% endhighlight %}


**models/FooModel.php**

{% highlight php %}
<?php
class FooModel
{
    protected $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function getAllFoos() {
        return $this->db->query('SELECT * FROM table');
    }
}
{% endhighlight %}

**views/foo-list.php**

{% highlight php %}
<?php foreach ($fooList as $row): ?>
    <li><?= $row['field1'] ?> - <?= $row['field1'] ?></li>
<?php endforeach ?>
{% endhighlight %}

이런 방식은 조금 더 수동적이긴 하지만, 대부분의 현대적인 프레임워크들이 취하고 있는 접근법과 근본적으로 동일합니다. 데이터베이스 접근과
프리젠테이션을 모든 경우에 반드시 분리해야만 하는 것은 아니지만, 그 둘을 서로 많이 섞을수록 점점 문제가 발생하게 될
것입니다. 특히 [유닛 테스트](#unit-testing)를 하려는 경우에는 더 심각할 것입니다.

[PHPBridge]에는 비슷한 주제를 다룬 [Creating a Data Class]라는 훌륭한 자료가 있습니다. 이제 막 데이터베이스를 사용하는
개발을 하기 시작한 개발자들에게는 반드시 도움이 될 좋은 자료 입니다.

[MVC]: https://code.tutsplus.com/tutorials/mvc-for-noobs--net-10488
[PHPBridge]: https://phpbridge.org/docs/
[Creating a Data Class]: https://phpbridge.org/intro-to-php/creating_a_data_class
