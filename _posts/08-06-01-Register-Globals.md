---
isChild: true
---

## Register Globals {#register_globals_title}

**PAŽNJA:** Od PHP verzije 5.4.0 `register_globals` opcija je uklonjena i ne može više biti korišćena. Ovo je samo uključeno kao upozorenje za sve koji su u procesu ažuriranja svojih starih aplikacija.

Kada uključeno, `register_globals` konfiguraciona opcija koja čini nekoliko tipova promenljivih (uključujući one iz `$_POST`, `$_GET` i `$_REQUEST`) dostupne u globalnom opsegu vaše aplikacije. Ovo lako može dovesti do sigurnosnih problema jer vaša aplikacija ne može da odredi odakle dolaze podaci.

Npr.: `$_GET['foo']` bi bila dostupna preko `$foo`, što može da prepiše promenljive koje nisu bile deklarisane. Ako koristite PHP < 5.4.0 __uverite se__ da je opcija `register_globals` podešena na __off__.

* [Register_globals u PHP uputstvu](http://www.php.net/manual/en/security.globals.php)