---
isChild: true
---

## Register Globals {#register_globals_title}

**NAPOMENA:** Od verzije 5.4.0 podešavanje `register_globals` je uklonjeno i više se ne može koristiti. Ovo je samo
ubačeno kao upozorenje svima u procesu nadogradnje legacy application.

Kada je uključeno, `register_globals` konfiguracijsko podešavanje omogućava da nekoliko tipova promenljivih bude na
raspolaganju u globalnom opsegu aplikacije (uključujući one koje potiču od `$_POST`, `$_GET` i `$_REQUEST`). Ovo može
lako dovesti do bezbednosnih problema jer aplikacija ne može sa sigurnošću znati odakle joj dolaze podaci.

Na primer: `$_GET['foo']` bi bilo raspoloživo preko `$foo`, što može poništiti promenljive koje nisu deklarisane.
Ako koristite verziju PHP < 5.4.0 __postarajte se__ da je `register_globals` __off__.

* [Register_globals u PHP manual](http://www.php.net/manual/en/security.globals.php)
