---
title: بناء ونشر التطبيقات
isChild: true
anchor:  building_and_deploying_your_application
---

## بناء ونشر التطبيقات {#building_and_deploying_your_application_title}

إذا وجدت نفسك تقوم بتغيير مخططات قاعدة البيانات يدوياً أو تشغيل الإختبارات يدوياً قبل تحديث الملفات (يدوياً) فعليك التفكير مرة اخرى.
في كل مرة تقوم فيها بتحديث تطبيقك إلى نسخة أحدث يدوياً، هنالك فرصة لحدوث خطأ. سواء كنت تتعامل مع وسيلة سهلة للتحديث و أو عملية
بناء شاملة أو حتى خطة تكامل مستمرة Continues Integration. عندها [البناء التقائي][buildautomation] هو صديقك!

من بين المهام التي قد تحتاج أن تكون بصورة تلقائية:

* إدارة التوابع
* تجميع وتصغير ملفات الميديا "Assets" كالصور وملفات css و js مثلا.
* تشغيل الإختبارات
* إنشاء التوثيق
* انشاء الحزم
* النشر


### أدوات النشر

يمكن وصف أدوات النشر بأنها مجموعة من الأوامر الكتابية تقوم بإدارة مهام نشر البرنامج. أدوات التطوير لا تعتبر جزء من البرنامج فهي تمثل البرنامج من الخارج فقط.

هنالك العديد من الأدوات المتوفر ومفتوحة المصدر تساعدك للبناء والنشر التلقائي. بعضها كتب بلغة PHP وبعضها لا. وهذا ليس سبب يدعوك لعدم استخدامها، إذا كانت تناسب ما تقوم به. بعض الأمثلة:

[Phing] تمكنك من التحكم في عملية تحزيم وإختبار ونشر تطبيقك في إطار استخدام ملف XML. Phing (وهو مبني على [Apache Ant]) يتيح مجموعة مهام عادة ما تستخدم لتنصيب أو تحديث تطبيقات الويب ويمكن تمديدها للمزيد من المهام. وتكتب بلغة PHP. فهي أداة فعالة وثابتة وموجودة منذ مدة طويلة، ولكن يمكن النظر لهذه الأداة بأنها قديمة بعض الشيء بسبب الطريقة التي تتعامل بها مع ملفات الضبط XML.

[Capistrano] وهو نظام يخص *المطورين المتوسطين - المتقدمين* لتنفيذ أوامر في بنائية متكررة واحدة منها أو أكثر في أجهزة عن بعد. تم ضبطه لمشر تطبيقات Ruby on Rails، ولكن يمكن بنجاح نشر تطبيقات وأنظمة PHP باستخدامه. الإستخدام الناجح لـ Capistrano يعتمد على خلفية عمل باستخدام Ruby و Rake. نشر ديف جاردنرز مقالة بعنوان [PHP Deployment with Capistrano][phpdeploy_capistrano] فهي بداية جيدة لمطوري PHP المهتمين باستخدام Capistrano.

[Rocketeer] إستمدت فلسفتها من إطار عمل لارافيل Laravel. يهدف لأن يكون سريع وسهل الإستخدام مع إفتراضيات ذكية. يقوم بالعمل على عدة سيرفرات عدة منصات و نشر كلي وجزئي يمكن تنفيذهم على التوازي. كل شيء في هذه الأداة يمكن أن يتم تحويله أو تمديده وكل شيء مكتوب بلغة PHP.

[Deployer] وهي أداة نشر كتبت بلغة PHP فهي بسيطة وعملية. تقوم بتنفيذ مهام على التوازي والنشر الجزئي مع التنسيق ما بين السيرفرات. وصفات لمهام مكررة لأطر عمل مثل Symfony و Laravel و Zend Framework و Yii. مقالة يونس رفيع [Easy Deployment of PHP Applications with Deployer][phpdeploy_deployer] تعتبر درس ممتاز لنشر التطبيقات باستخدام هذه الأداة.

[Magallanes] وهي أداة أخرى مكتوبة بلغة PHP مع ضبط بسيط في ملفات YAML. تدعم بيئات وسيرفرات متعددة و النشر الجزئية ومدمج معها بعض المهام المضمنة والتي تتيح لك النفوذ مع أدوات وأطر عمل مشهورة.

#### المزيد من القراءة

* [Automate your project with Apache Ant][apache_ant_tutorial]
* [Expert PHP Deployments][expert_php_deployments] - كتاب مجاني يشرح عملية النشر باستخدام Capistrano و Phing و Vagrant.
* [Deploying PHP Applications][deploying_php_applications] - كتاب مدفوع من أفضل الممارسات والأدوات لنشر تطبيقات PHP.

### تموين السيرفر

إدارة وضبط السيرفر هي مهمة شاقة خصوصاً عندما تكون موجهة على عدة سيرفرات. هنالك أدوات تتعامل مع هذا الوضع وأتمتتة البنية التحتية للتأكد من أنه لديك سيرفرات تم ضبطها بطريقة مثلى. عادة ما تتكامل مع استضافات سحابية مثل Amazon Web Service و Heroku و DigitalOcean وغيرها. لإدارة الوحدات التي تقوم بتنسيق التطبيق بشكل أبسط.

[Ansible] وهي أداة لإدارة البنية التحتية باستخدام ملفات YAML. من السهل البدء بالاستخدام وإدارة وتنسيق تطبيقات كبيرة ومعقدة. هنالك API لإدارة الوحدات السحابية باستخدام بضع أدوات.

[Puppet] وهي أداة تستخدم ملفات ولغة خاصة بها لإدارة وضبط السيرفرات. يمكن استخدامها في Master/Client وايضا يمكن استخدامها في طور "master-less". في طور master/client يقوم Client باقتراع الماستر المركزي لطلب ضبط جديد في وحدات زمنية متفرقة لتحديث نفسها إذا لزم الأمر. وفي طور master-less يتم إرسال التحديثات إلى النقاط. 

[Chef] وهو إطار عمل قوي مبني على Ruby يمكن من بناء بيئة السيرفر بالكامل أو صناديق افتراضية وترتبط بشكل جيد باستخدام خدمة في Amazon Web Services تسمى OpsWorks.

#### المزيد من القراءة:

* [An Ansible Tutorial][an_ansible_tutorial]
* [Ansible for DevOps][ansible_for_devops] - كتاب مدفوع لكل شيء باستخدام Ansible
* [Ansible for AWS][ansible_for_aws] - كتاب مدفوع لربط Ansible مع Amazon Web Services
* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2][chef_vagrant_and_ec2]
* [Chef Cookbook which installs and configures PHP and the PEAR package management system][Chef_cookbook]
* [Chef video tutorial series][Chef_tutorial]

### الربط المستمر Continuous Integration

> الربط المستمر هو ممارة في تطوير البرامج حين يكون هنالك أعضاء فريق يقومون بربط أعمالهم بشكل متواصل، عادة ما يكون كل
> شخص بالربط على الأقل مرة في اليوم - مما يعني العديد من الربط في خلال اليوم الواحد. العديد من الفرق ترى أن استخدام هذه
> الممارسة يؤدي إلى خفض فعلي لمشاكل الربط وتتيح للفرق أن تقوم بتطوير برامج متماسكة بسرعة.

*-- مارتين فولر*

هنالك طرق مختلفة لتطبيق الربط المستمر في PHP. يعد [Travis CI] من أفضلهم فهو يقوم بتحقيق الربط المتواصل بشكل حتى للمشاري الصغيرة.
وهو عبارة عن خدمة مستضافة لمجتمع المصدر المفتوح. وترتبط مع GitHub وتوفر دعم من الدرجة الأولى للعديد من اللغات من ضمنها PHP.

#### المزيد من القراءة:

* [Continuous Integration with Jenkins][Jenkins]
* [Continuous Integration with PHPCI][PHPCI]
* [Continuous Integration with Teamcity][Teamcity]


[buildautomation]: http://en.wikipedia.org/wiki/Build_automation
[Phing]: http://www.phing.info/
[Apache Ant]: http://ant.apache.org/
[Capistrano]: https://github.com/capistrano/capistrano/wiki
[phpdeploy_capistrano]: http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/
[phpdeploy_deployer]: http://www.sitepoint.com/deploying-php-applications-with-deployer/
[Chef]: https://www.chef.io/
[chef_vagrant_and_ec2]: http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/
[Chef_cookbook]: https://github.com/chef-cookbooks/php
[Chef_tutorial]: https://www.youtube.com/playlist?list=PL11cZfNdwNyPnZA9D1MbVqldGuOWqbumZ
[apache_ant_tutorial]: http://net.tutsplus.com/tutorials/other/automate-your-projects-with-apache-ant/
[Travis CI]: https://travis-ci.org/
[Jenkins]: http://jenkins-ci.org/
[PHPCI]: http://www.phptesting.org/
[Teamcity]: http://www.jetbrains.com/teamcity/
[Deployer]: http://deployer.org/
[Rocketeer]: http://rocketeer.autopergamene.eu/
[Magallanes]: http://magephp.com/
[expert_php_deployments]: http://viccherubini.com/assets/Expert-PHP-Deployments.pdf
[deploying_php_applications]: http://www.deployingphpapplications.com
[Ansible]: https://www.ansible.com/
[Puppet]: https://puppet.com/
[ansible_for_devops]: https://leanpub.com/ansible-for-devops
[ansible_for_aws]: https://leanpub.com/ansible-for-aws
[an_ansible_tutorial]: https://serversforhackers.com/an-ansible-tutorial