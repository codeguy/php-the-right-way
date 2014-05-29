---
title: Uputstvo za pisanje koda
---

# Uputstvo za pisanje koda {#code_style_guide_title}

PHP zajednica je velika i raznovrsna, sastoji se od bezbroj biblioteka, _framework_-a i komponenti. Uobičajeno je za PHP
programere da izaberu nekoliko od tih komponenti i iskoriste ih u jednom projektu. Važno je da se PHP kod pridržava 
(što je bliže moguće) zajedničkom načinu izgleda koda, da bi olakšali programerima deljenje različitih biblioteke
u među projektima. 

The [_Framework Interop Group_][fig] je predložila i odobrila seriju predloga o izgledu koda, poznatu kao [PSR-0][psr0], 
[PSR-1][psr1] and [PSR-2][psr2]. Nemojte dozvoliti da vas imena zbunjuju, ove preporuke su samo skup pravila koje neki
projekti kao što su _Drupal_, _Zend_, _Symfony_, _CakePHP_, _phpBB_, _AWS SDK_, _FuelPHP_, _Lithium_ itd. počinju da 
poštuju. Možete ih poštovati u svojim projektima, ili možete da nastavite da koristite vaš stil.

Idealno trebalo bi da pišete PHP kod koji prati poznat standard. To bi mogla biti kombinacija PSR standarda, ili neki od
standarda koje su _PEAR_ ili _Zend_ objavili. To znači da će drugi programeri moći lako da čitaju i rade sa vašim kodom,
 isto tako će aplikacije koje implementiraju komponente drugih programera biti dosledne.

* [Pročitajte o PSR-0][psr0]
* [Pročitajte o PSR-1][psr1]
* [Pročitajte o PSR-2][psr2]
* [Pročitajte o _PEAR_ standardima][pear-cs]
* [Pročitajte o _Zend_ standardima][zend-cs]

Možete koristiti [PHP_CodeSniffer][phpcs] da proverite da li kod prati neke od ovih standarda, i/ili pluginove za tekst
editore, kao npr. [Sublime Text 2][st-cs] da bi ste dobili informacije o stilu koda u realnom vremenu.

Koristite [PHP Coding Standards Fixer][phpcsfixer] _Fabien Potencier_-a da automatski izmenite sintaksu koda tako da se 
povinuje datim standardima, i tako uštedite vreme koje bi ste potrošili kada biste ručno vršili izmene. 

Engleski ima prioritet za sva imena simbola i infrastrukture koda. Komentari mogu biti pisani u jeziku koji svi članovi
sadašnjeg tima mogu da razumeju, ali imajte na umu i buduće naslednike koda. 

[fig]: http://www.php-fig.org/
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[pear-cs]: http://pear.php.net/manual/en/standards.php
[zend-cs]: http://framework.zend.com/wiki/display/ZFDEV2/Coding+Standards
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[st-cs]: https://github.com/benmatselby/sublime-phpcs
[phpcsfixer]: http://cs.sensiolabs.org/
