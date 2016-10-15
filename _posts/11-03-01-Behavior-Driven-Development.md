---
title: التطوير الموجه بالسلوك
isChild: true
anchor:  behavior_driven_development
---

## التطوير الموجه بالسلوك BDD {#behavior_driven_development_title}

Behavior Driven Development.
هنالك نوعان من هذا النمط:
SpecBDD و StoryBDD.
SpecBDD: يركز على السلوك التقني للكود.
StoryBDD: يركز على الخواص والتفاعلات الفعلية.
هنالك إطارا عمل لكلا النوعين.

باستخدام StoryBDD يمكن كتابة قصص مقروءة تقوم بوصف سلوك التطبيق. هذه القسس يمكن ان تقوم بتنفيذ إختبارات حقيقية للتطبيق.
إطار العمل المستخدم في تطبيقات PHP للنوع StoryBDD [Behat] وتم استيحائه من مشروع [Cucumber] في Ruby.

باستخدام SpecBDD يمكن كتابة مواصفات تصف كيف يجب أن يكون سلوك الكود الفعلي. فبدلاً من إختبار الدالة أو العملية، فأنت تقوم
بوصف سلوك الدالة أو العملية. يوجد في PHP إطار عمل [PHPSpec] لنفس الغرض. هذا الإطار تم استيحائه من مشروع [RSpec project][Rspec] في Ruby.

### روابط BDD

* [Behat] : StoryBDD إطار عمل اختباري للغة PHP  مستوحى من مشروع [Cucumber] في لغة Ruby;
* [PHPSpec] : SpecBDD إطار عمل إختباري للغة PHP مستوحى من مضروع [RSpec] في لغة Ruby;
* [Codeception] : هو إطار إختباري يقوم باستخدام مفاهيم التطوير الموجه بالسلوك BDD.


[Behat]: http://behat.org/
[Cucumber]: http://cukes.info/
[PHPSpec]: http://www.phpspec.net/
[RSpec]: http://rspec.info/
[Codeception]: http://codeception.com/
