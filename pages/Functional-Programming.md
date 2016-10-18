---
title:  البرمجة الوظيفية في PHP
layout: page
sitemap: true
---

# البرمجة الوظيفية في PHP


تقوم PHP بدعم دوال عالية مما يعني ان الدوال التي يمكن اسناده الى متغير. كل من الدوال المعرفة من قبل المستخدم والدوال
المدمة يمكن ان يتم مرجعيتها باستخدام دوال وندائها بشكل تلقائي. الدوال يمكن تمريرها كقيم الى دولا والدوال يمكن ان ترجع
دوال (خاصية تسمى دوال ذات ترتيب أعلى).

العودية وهي خاصية تتيح للدالة نداء نفسها ، وهي مدعومة من اللغة ولكن الكثير من كود PHP يقوم بالتركيز على التكرارات.

الدوال المجهولة (بالدعم بالأطار المغلق) تم عرضها منذ PHP 5.3 (2009).

في PHP 5.4 تم إدراج الإمكانية لإنساب وربط الأطر الى مدى العناصر وقد تم تطوير دعم الدوال القابلة للنداء حت تتمكن من استخدام
بشكل معاكس مع الدوال المجهولة في أغلب الحالات.

الإستخدام المشهور للدوال الأعلى ترتيب وهو تطبيقها في نموذج الإستراتيجي. الدالة المدمجة `array_filter()` تطلب كل من
كمدخل مصفوفة بيانات ودالة (استراتيجية او دالة للنداء) تستخدم كدالة فلترة لكل عنصر على المصفوفة.

{% highlight php %}
<?php
$input = array(1, 2, 3, 4, 5, 6);

// Creates a new anonymous function and assigns it to a variable
$filter_even = function($item) {
    return ($item % 2) == 0;
};

// Built-in array_filter accepts both the data and the function
$output = array_filter($input, $filter_even);

// The function doesn't need to be assigned to a variable. This is valid too:
$output = array_filter($input, function($item) {
    return ($item % 2) == 0;
});

print_r($output);
{% endhighlight %}

الإطار المغلق هي دوال لا اسمية تقوم بالوصول للتمغيرات بادراجها من خارج المدى بدون استخدام اي متغيرات عامة. نظرياً
الإطار المغلق هو دالة لديها مدخلات مغلقة او ثابتة بالبيئة التي هي فيها. يمكن أن يكون الاطار حول مدى متغير محكوم بطريقة محكمة.

في المثال التالي سنقوم باستخدام الإطار المغلق بتعريف الدالة لإرجاع دالة فيلتر للدالة `array_filter()`:

{% highlight php %}
<?php
/**
 * Creates an anonymous filter function accepting items > $min
 *
 * Returns a single filter out of a family of "greater than n" filters
 */
function criteria_greater_than($min)
{
    return function($item) use ($min) {
        return $item > $min;
    };
}

$input = array(1, 2, 3, 4, 5, 6);

// Use array_filter on a input with a selected filter function
$output = array_filter($input, criteria_greater_than(3));

print_r($output); // items > 3
{% endhighlight %}

كل دالة ترشيح من هذه العائلة تقوم باستقبال عناصر أكبر من أقل قيمة. الفلتر الواحد يقوم بارجاع 
`criteria_greater_than` دالة لا اسمية `$min` قيمة مغلقة بالقيمة في المدى المعطى كقيمة عندما تم استدعاء
`criteria_greater_than`.

يتم استخدام الربط المسبق بصورة افتراضية تقوم بادراج `$min` المتغير في الدالة المنشئة. لإنشاء دوال لا اسمية بربط لاحق
يجب استخدام المرجع عند الإدرج. تصور مكتبة ترشيح المدخلات او قوالب موجودن في دالة لا اسمية لقبض المتغيرات في مدى معين
والوصل اليهم لاحقاً عن تنفيذ الدالة اللا اسمية.

* [قراءة المزيد عن الدوال المجهولة][anonymous-functions]
* [المزيد من التفاصيل عن الدوال اللا أسمية][closures-rfc]
* [قراءة المزيد عن الاستدعاء الدايناميكي للدوال باستخدام `call_user_func_array()`][call-user-func-array]


[anonymous-functions]: http://php.net/functions.anonymous
[closures-rfc]: https://wiki.php.net/rfc/closures
[call-user-func-array]: http://php.net/function.call-user-func-array
