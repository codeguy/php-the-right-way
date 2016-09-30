---
title: النمذجة البرمجية
isChild: true
anchor:  programming_paradigms
---

## النمذجة البرمجية {#programming_paradigms_title}

PHP هي لغة مرنة ومتغيرة حيث انها تدعم عدة أساليب برمجية. فقد تطورت بشكل ملحوظ عبر السنين الماضية واضافت البرمجة كائنية
التوجه أو ما تعرف (Object Oriented) في إصدارة PHP 5.0 عام (2004) وأضافت الدوال غير المقرونة بإسم (anonymous functions)
ونطاق التسمية (namespaces) في الإصدارة PHP 5.3 عام (2009) وأضافت السمات (traits) في إصدارة PHP 5.4 عام (2012).

### البرمجة كائنية التوجه (الشيئية) OOP

تحتوي PHP على خواص البرمجة الكائنية بشكل كامل وذلك يشمل الكائنات (class) والكائنات المجردة (abstract class) والمنافذ 
(interface) والوراثة (inheritance) والبنائيات (constructor) والاستنساخ (clone) والإستثناء (exception) والمزيد...

* [قراءة المزيد عن البرمجة الشيئية OOP PHP][oop]
* [قراءة المزيد عن السمات Traits][traits]

### البرمجة الوظيفية

تدعم PHP دوال كائنات المستوى الأول، بمعنى انه يمكن لدالة ان تسند الى متغير. كل من دوال المستخدم والدوال المدمجة مع اللغة
يمكن احالتها باستخدام متغيرات ومناداتها بصورة حيوية ومجهولة. يمكن تمرير الدوال كقيم الى دوال اخرى (خاصية تسمى _higher-order Functions_)
والدوال نفسها بإمكانها إرجاع دوال اخرى!

الإستدعاء (recursion) الذاتي، وهي خاصية تتيح للدالة ان تنادي نفسها، وهي مدعومة من قبل اللغة ولكن معظم البرمجيات تعتمد على التكرارات.

الدوال المجهولة أو اللا إسمية (anonymous functions) خاصية موجودة منذ الإصدارة PHP 5.3 (2009).

أضافت PHP 5.4 إمكانية اسناد دوال وكائنات مغلقة او لا اسمية لنطاق الكائن وقد تم التطوير للإستدعاءات حتى يمكن استخدامها
مع كل الدوال في اي حال.

* أكمل القراء عن [البرمجة الظيفية في PHP Functional Programming in PHP](/pages/Functional-Programming.html)
* [قراءة المزيد عن الدوال اللا اسمية Anonymous Functions][anonymous-functions]
* [قراءة المزيد عن الكائنات اللا اسمية Closure class][closure-class]
* [قراءة المزيد عن الدوال والكائنات المغلقة أو الل اسمية Closures RFC][closures-rfc]
* [قراءة المزيد عن الدوال القابلة للإستدعاء Callables][callables]
* [قراءة المزيد عن استدعاء الدوال بصورة مجهولة باستخدام الدالة `call_user_func_array()`][call-user-func-array]

### البرمجة التحويلية

تدعم PHP ايضاً عدة اشكال من اشكال البرمجة التحويلية Meta programming عبر عدة وسائل مثل واجهة برمجة تطبيقات الإنعكاس (reflection API)
والدوال السحرية (Magic Methods). هنالك عدة دوال سحري مثل `__get()`، `__set()`، `__clone()`، `__toString()`، `__invoke()`
وغيرها والتي تتيح للمطور ان يربطها بتصرفات الكائنات. يقول مطوري لغة Ruby ان لغة PHP تفتقر الى الدالة `method_missing`، ولكنها موجودة
وتتمثل في كل من `__call()` و `__callStatic()`.

* [قراءة المزيد عن الدوال السحرية Magic Methods][magic-methods]
* [قراءة المزيد عن دوال الإنعكاس Reflection][reflection]
* [قراءة المزيد عن التحميل الإضافي Overloading][overloading]


[oop]: http://php.net/language.oop5
[traits]: http://php.net/language.oop5.traits
[anonymous-functions]: http://php.net/functions.anonymous
[closure-class]: http://php.net/class.closure
[closures-rfc]: https://wiki.php.net/rfc/closures
[callables]: http://php.net/language.types.callable
[call-user-func-array]: http://php.net/function.call-user-func-array
[magic-methods]: http://php.net/language.oop5.magic
[reflection]: http://php.net/intro.reflection
[overloading]: http://php.net/language.oop5.overloading

