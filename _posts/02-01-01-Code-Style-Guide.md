# Code Style Guide  {#code_style_guide_title}

PHP zajednica je velika i raznovrsna, i sastoji se od nebrojenih biblioteka, frameworkova i komponenti. Uobičajeno je da PHP developeri izaberu nekoliko i iskombinuju ih u jedan projekat. Bitno je da se PHP kod pridržava (što je bliže moguće) uobičajenom načinu kodiranja da bi se developerima olakšalo kombinovanje i uklapanje različitih bibliteka u svoje projekte.

[Framework Interop Group][fig] (ranije poznata kao 'PHP Standards Group') je predložila i odobrila niz preporuka za stilove, poznatije kao [PSR-0][psr0], [PSR-1][psr1] i [PSR-2][psr2]. Ne dozvolite da vas čudna imena zbune, ove preporuke su samo set pravila kojih neki projekti kao što su Drupal, Zend, CakePHP, phpBB, AWS SDK, FuelPHP,
Lithium, itd počinju da se pridržavaju. Možete ih koristiti za vaše lične projekte, ili nastaviti u vašem ličnom stilu.

Idealno bi bilo da pišete PHP kod koji je u skladu sa jednim ili više pomenutih standarda da bi drugi developeri mogli lako da čitaju i rade sa vašim kodom, a aplikacije koje implementiraju komponente bile konzistentne čak i pri radu sa dosta third-party koda. Prvih par preporuka su nadskup prethodnim preporukama.

* [Pročitajte o PSR-0][psr0]
* [Pročitajte o PSR-1][psr1]
* [Pročitajte o PSR-2][psr2]

Možete da koristite [PHP_CodeSniffer][phpcs] da proverite da li vam je kod u skladu sa ovim preporukama.
Koristite Fabien Potencier's [PHP Coding Standards Fixer][phpcsfixer] da automatski modifikujete sintaksu vašeg koda tako da odgovara ovim standardima, i tako izbegnete ručno ispravljanje svakog problema.

Engleski jezik se preporučuje za sva imena simbola i infrastrukturu koda. Komentari mogu biti napisani u bilo kom jeziku koji poznaju sve sadašnje i buduće osobe koje će možda raditi na kodu.

[fig]: http://www.php-fig.org/
[psr0]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md
[psr1]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md
[psr2]: https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md
[phpcs]: http://pear.php.net/package/PHP_CodeSniffer/
[phpcs-psr]: https://github.com/klaussilveira/phpcs-psr
[phpcsfixer]: http://cs.sensiolabs.org/

