---
title: Nastavenie pre Windows
isChild: true
anchor: windows_setup
---

## Nastavenie pre Windows {#windows_setup_title}

Binárne súbory pre systém Windows môžete stiahnúť zo stránky [windows.php.net/download][php-downloads]. Po rozbalení PHP
je doporučené nasmerovať premennú [PATH][windows-path] do koreňovej zložky PHP (miesto, kde sa nachádza php.exe),
čo umožní spustenie PHP z ľubovoľného miesta.

Od verzie PHP 5.4 môžete pre učenie a vývoj na lokálnom systéme použiť vstavaný web server. Toto vás na začiatok odľahčí
od konfigurácie iného web servera. Ak si prajete využiť riešenie “všetko v jednom” s plnehodnotným web serverom
a databázou, potom môžete využiť jedno z nasledujúcich riešení [Web Platform Installer][wpi], [XAMPP][xampp], [EasyPHP][easyphp], [OpenServer][openserver], alebo [WAMP][wamp]. Každé z týchto riešení vám umožní jednoduché a rýchle
nastavenie vývojového rozhrania na systéme Windows. Pri použití týchto nástrojov môžu byť v prostredí oproti
produkčnému serveru malé rozdiely, na čo si treba dávať pozor. Taktiež treba dávať pozor na rozdiely v prostredí ak
vyvíjate na systéme Windows a softvér bude produkovaný na systéme Linux.

Ak potrebujete, aby vaše produkčné prostredie bežalo na systéme Windows, potom IIS7 vám poskytne najstabilnejšie
riešenie s najlepším výkonom. Pre jednoduché manažovanie a nastavenie PHP môžete použiť [phpmanager][phpmanager], čo je
grafická nadstavba pre IIS7. IIS7 prichádza s FastCGI, ktoré je vbudované a pripravené na použitie. Je potrebné len
nastaviť PHP ako obslužný program (handler). Podporu a dodatočné zdroje nájdete
vo [vyhradenej oblasti na iis.net][php-iis] pre PHP.

Spúšťanie vašich aplikácií v rôznych prostrediach pre vývoj a produkciu vedie všeobecne k rôznym chybám, ktoré sa
vyskytujú pri spustení aplikácie v produkčnom prostredí. Ak robíte vývoj na systéme Windows a softvér produkujete na
systéme Linux (alebo všeobecne inom ako Windows), potom by ste mali zvážiť použitie
[virtuálneho servera](/#virtualization_title).

Chris Tankersley má veľmi užitočný blog o tom, ako robiť vývoj na systéme Windows -
[PHP development using Windows][windows-tools].

[easyphp]: http://www.easyphp.org/
[phpmanager]: http://phpmanager.codeplex.com/
[openserver]: http://open-server.ru/
[wamp]: http://www.wampserver.com/en/
[php-downloads]: http://windows.php.net/download/
[php-iis]: http://php.iis.net/
[windows-path]: http://www.windows-commandline.com/set-path-command-line/
[windows-tools]: http://ctankersley.com/2015/07/01/developing-on-windows/
[wpi]: http://www.microsoft.com/web/downloads/platform.aspx
[xampp]: http://www.apachefriends.org/en/xampp.html
