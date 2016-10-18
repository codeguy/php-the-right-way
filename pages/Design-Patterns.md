---
title:  نماذج التصميم
layout: page
sitemap: true
---

# نماذج التصميم

هنالك العديد من الطرق لهيكلة الكود والمضروع في تطبيقك ويمكنك وضع أقل ما يمكنك من جهد في التفكير للهيكلة.
ولكن عادة ما يكون من الجيد اتباع نماذج تصميم معروفة لأنها ستجعل الكود أسهل للإدارة وأسهل فهماً للغير.

* [Architectural pattern on Wikipedia](https://en.wikipedia.org/wiki/Architectural_pattern)
* [Software design pattern on Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern)
* [Collection of implementation examples](http://designpatternsphp.readthedocs.io/en/latest/)

## المصنع Factory

واحدة من النماذج الأكثر استخداماً هو نموذج المصنع. هذا النموذج عبارة عن كلاس يقوم بإنشاء الكائنات التي تود استخدامها.
مثال بسيط لهذا النموذج:

{% highlight php %}
<?php
class Automobile
{
    private $vehicleMake;
    private $vehicleModel;

    public function __construct($make, $model)
    {
        $this->vehicleMake = $make;
        $this->vehicleModel = $model;
    }

    public function getMakeAndModel()
    {
        return $this->vehicleMake . ' ' . $this->vehicleModel;
    }
}

class AutomobileFactory
{
    public static function create($make, $model)
    {
        return new Automobile($make, $model);
    }
}

// have the factory create the Automobile object
$veyron = AutomobileFactory::create('Bugatti', 'Veyron');

print_r($veyron->getMakeAndModel()); // outputs "Bugatti Veyron"
{% endhighlight %}

هذا الكود يقوم باستخدام الكائن Automobile. هنالك فائدتان مرجوتان من بناء برمجيتك على هذا النحو. الأولى وهي انه عندما
تحتاج لتغيير أو إعادة تسمية أو استبدال كلاس Automobile لاحقاً يمكنك فعل هذا ببساطة بتعديل الكود الموجود في المصنع بدلاً
من تعديله في كل مكان يتم فيه استخدامه في المشروع.
الفائدة الثانية وهي عندما تقوم بإنشاء كائن يقوم بمهمة معقدة يمكن أن يقوم بكل العمل المعقد في المصنع بدلاً من تكراره
في كل مرة تنوي فيها انشاء كائن جديد.

استخدام هذا النموذج ليس دائماً ضرورياً أو خيار حكيم. المثال المستخدم هنا هو مثال بسيط يقوم فيه المصنع بإضافة تعقيد
غير ضروري. ولكن إذا كنت تقوم بإنشاء مشروع كبير أو معقد عندها قد يوفر لك حلاً للعديد من المشاكل التي قد تواجهك وتحلها
باستخدام المصنع.

* [Factory pattern on Wikipedia](https://en.wikipedia.org/wiki/Factory_pattern)

## الوحيد Singleton

عندما تقوم بتصميم تطبيق ويب عادة ما قد تحتاج بأن تنشئ بنائية تتيح الوصول فقط عن طريق نسخة واحدة من كلاس معين.
وهذه ما يقوم به النموذج الوحيد.

{% highlight php %}
<?php
class Singleton
{
    /**
     * @var Singleton The reference to *Singleton* instance of this class
     */
    private static $instance;
    
    /**
     * Returns the *Singleton* instance of this class.
     *
     * @return Singleton The *Singleton* instance.
     */
    public static function getInstance()
    {
        if (null === static::$instance) {
            static::$instance = new static();
        }
        
        return static::$instance;
    }

    /**
     * Protected constructor to prevent creating a new instance of the
     * *Singleton* via the `new` operator from outside of this class.
     */
    protected function __construct()
    {
    }

    /**
     * Private clone method to prevent cloning of the instance of the
     * *Singleton* instance.
     *
     * @return void
     */
    private function __clone()
    {
    }

    /**
     * Private unserialize method to prevent unserializing of the *Singleton*
     * instance.
     *
     * @return void
     */
    private function __wakeup()
    {
    }
}

class SingletonChild extends Singleton
{
}

$obj = Singleton::getInstance();
var_dump($obj === Singleton::getInstance());             // bool(true)

$anotherObj = SingletonChild::getInstance();
var_dump($anotherObj === Singleton::getInstance());      // bool(false)

var_dump($anotherObj === SingletonChild::getInstance()); // bool(true)
{% endhighlight %}

الكود أعلاه يقوم ببناء النموذج الوحيد باستخدام [متغير *ثابت*](http://php.net/language.variables.scope#language.variables.scope.static)
و استخدام عملية ثابتة `getInstance()`.
لاحظ الآتي:

* دالة الإنشاء [`__construct()`](http://php.net/language.oop5.decon#object.construct) معرفة بأنها محمية Protected
لمنع إنشاء كائنات جديدة خارج الكلاس عبر استخدام العبارة `new`.
* الدالة السحرية [`__clone()`](http://php.net/language.oop5.cloning#object.clone) معرفة بأنها خاصة Private لمنع 
استنساخ كائنات من الكلاس باستخدام العبارة [`clone`](http://php.net/language.oop5.cloning).
* الدالة السحرية [`__wakeup()`](http://php.net/language.oop5.magic#object.wakeup) معرفة أيضاً بانها خاصة Private لمنع
عملية فك الترميز unserializing لكائن الكلاس باستخدام الدالة العامة [`unserialize()`](http://php.net/function.unserialize)
يمكن إنشاء كائن جديد باستخدام [late static binding](http://php.net/language.oop5.late-static-bindings) في الدالة الثابتة
`getInstance()` بالكلمة الدلالية `static`. ويتيح للكلاسات الفرعية من الكلاس الفرعي كما في المثال.

نموذج الوحيد مفيد عندما نريد ان نتأكد بأن هنالك كائن واحد من كلاس معين في دورة حياة الطلب في تبيق الويب.
هذا عادة ما يحدث عندما نريد كائن عام ككائنات الضبط مثلاً أو المصادر المشتركة مثل صف العمليات.

يجب عليكن أن تتوخى الحذر في استخدام هذا النموذج، لأنه بطبيعته يقوم بتوفير نفسه بشكل عام في التطبيق ككل مما يقلل سهولة
اختباره. عادة ما يتم استخدام حقن التوابع (ويجب استخدامه) بدلا من كلاس الوحيد. استخدام حقن التوابع يعني أنه لا يتم تعريف
أي ربط ضروري بداخل تصميم التطبيق، لأن الكائن يقوم باستخدام مصادر عامة أو مشتركة لا تتطلب الضرور بمعرفة الكلاس المعرف.

* [النموذج الوحيد على ويكيبيديا Singleton](https://en.wikipedia.org/wiki/Singleton_pattern)

## الإستراتيجي Strategy

مع النموذج الإستراتيجي تقوم بتغليف مجموع أوامر ولوغريثمات سوياً مما يتيح للكلاس المستهلك المسؤول من إنشاء لوغاريثمية معينة
بدون معرفة محتوى وطريقة عمل التنفيذ الفعلي. هنالك عدة طرق لنموذج الإستراتيجي أبسطها:

الكود الأول نموذج يوضح عائلة اللوغريثمات، يمكن استخدام مصفوفة مرمزة وبضع JSON او مصفوفة:

{% highlight php %}
<?php

interface OutputInterface
{
    public function load();
}

class SerializedArrayOutput implements OutputInterface
{
    public function load()
    {
        return serialize($arrayOfData);
    }
}

class JsonStringOutput implements OutputInterface
{
    public function load()
    {
        return json_encode($arrayOfData);
    }
}

class ArrayOutput implements OutputInterface
{
    public function load()
    {
        return $arrayOfData;
    }
}
{% endhighlight %}

بتغليف اللوغاريثمية اعلاه انت تقوم بعمل كون واضح ونظيف يمكن المطورين الاخرين اضافة أنواع مخرجات بسهولة دون التأثير على
كود العميل.

سترى كيف يمكن إخراج كلاس يطبق واجهة OutputInterface هذا يفيد بشيئين أولهما أنه يتيح عقد مبسط يجب أن يقوم بإتباعه في
تطبيق المخرجات. ثانيهما أنه بتطبيق الواجهة سترى في الفاصل التالي أنه يمكن أن تقوم بإدراج [Type Hinting](http://php.net/language.oop5.typehinting)
للتأكد من العميل يقوم باستخدام هذه التصرفات من النوع الصحيح في هذه الحالة 'OutputInterface'. 

الكود التالي يوضح نداء كلاس العميل وكيف يمكن استخدام واحدة من اللوغريثمات والقيام بسلوك افضل في التنفيذ:

{% highlight php %}
<?php
class SomeClient
{
    private $output;

    public function setOutput(OutputInterface $outputType)
    {
        $this->output = $outputType;
    }

    public function loadOutput()
    {
        return $this->output->load();
    }
}
{% endhighlight %}

بنداء كلاس العميل أعلاس سيقوم الميز الخاصة والتي سيتم انسابها في وقت النتفيذ من النوع 'OutputInterface'
لحظة اسناد هذه الميزة سيتم استدعاء الدالة loadOutput() والتي ستقوم باستدعاء الدالة load() في الكلاس المنشأ من نوع
المخرج الذي تم اسناده.

{% highlight php %}
<?php
$client = new SomeClient();

// Want an array?
$client->setOutput(new ArrayOutput());
$data = $client->loadOutput();

// Want some JSON?
$client->setOutput(new JsonStringOutput());
$data = $client->loadOutput();

{% endhighlight %}

* [Strategy pattern on Wikipedia](http://en.wikipedia.org/wiki/Strategy_pattern)

## المتحكم الأمامي Front Controller

نموذج التحكم الأمامي هو عندما تريد أن يكون لديك مدخل واحدة لنقطة في تطبيقك مثلا (index.php) بدوره يقوم
بإدارة كل الطلبات. هذا الكون هو المسؤول من إدراج كل التوابع ومعالجة الطلبات وإرسال الرد إلى المتصفح.
المتحكم الأمامي مفيد لأنه يقوم بنمذجة الكود وإعطائه مكان مركزي للربط مع الكود الذي يجب أن يعمل في كل طلب مثل
تعقيم المدخلات.

* [Front Controller pattern on Wikipedia](https://en.wikipedia.org/wiki/Front_Controller_pattern)

## الموديل - العرض والتحكم Model-View-Controller

وأقربائه مثل HMVC و MVVM يتيحوا لك أن تقوم بتجزئة الكود إلى كائنات وعناصر منطقية تقوم بخدمة هدف محدد.
الموديل يقوم بتوفير الوصول للبيانات وفيه يتم استرجاع البيانات واسترجعها بصيغة يمكن التعامل معها عبر التطبيق.
المتحكم يقوم بإدارة الطلبات ومعالجة البيانات المسترجعة من الموديل وإدراج العرض ثم ارساله في الرد. والعرض يقوم
بعرض القوالب (Markup أو XML) والتي تقوم بارسال الرد للمتصفح.

يعد هذا من النماذج المعمارية الأكثر استخداماً وشهرة [PHP frameworks](https://github.com/codeguy/php-the-right-way/wiki/Frameworks).

تعرف المزيد عن هذا النموذج وأشباهه:

* [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93View%E2%80%93Controller)
* [HMVC](https://en.wikipedia.org/wiki/Hierarchical_model%E2%80%93view%E2%80%93controller)
* [MVVM](https://en.wikipedia.org/wiki/Model_View_ViewModel)
