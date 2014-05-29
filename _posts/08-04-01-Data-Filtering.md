---
title: Filtriranje podataka
isChild: true
---

## Filtriranje podataka {#data_filtering_title}

Nemojte nikad imati poverenja u tuđi unos ubačen u vaš PHP kod. Uvek očisitite i overite tuđi unos pre nego što ga iskoristite u kodu. Funkcije `filter_var` i `filter_input` mogu da očiste tekst i overe tekstualne formate (npr. imejl adrese).

Strani unos može biti svašta: `$_GET` i `$_POST` unešeni podaci iz forme, neke od vrednosti u `$_SERVER` globalnoj promenljivoj, i telo HTTP zahteva preko `fopen('php://input', 'r')`. Zapamtite, strani unos nije ograničen na samo podatke iz forme koju je korisnik popunio i poslao. Poslati i preuzeti fajlovi, vrednosti sesija, podaci iz kolačića, kao i svi podaci od drugih internet servisa, su takođe strani unos.

Dok strani podaci mogu biti sačuvani, kombinovani i možete im pristupiti kasnije, to je i dalje strani unos. Svaki put kada obrađujete, prikazujete, spajate, ili uključujete podatke u vaš kod, zapitajte se da li su podaci propisno filtrirani i da li im se može verovati.

Podaci mogu biti "filtrirani" drugačije zavisno od njihove svrhe. Npr., kada se nefiltrirani strani unos stavi u HTML stranu, on može da izvrši HTML i Javascript na vašem sajtu! To je znano pod imenom "_Cross-Site Scripting_" (XSS) i može biti veoma opasan napad. Jedan od načina da izbegnete XSS je da pročistite sve korisnički generisane podatke pre nego što ih prikažete, tako što će te izbrisati sve HTML tagove sa `strip_tags` funkcijom ili "eskejpovanjem" karaktera sa specijalnim značenjem, prebacivanjem istih u odgovarajuće HTML entitete sa `htmlentities` ili `htmlspecialchars` funkcijama.

Još jedan primer je dodavanje opcija za izvršavanje na komandnoj liniji. Ovo može biti ekstremno opasno (i uglavnom je veoma loša ideja), ali možete iskoristiti ugrađenu `escapeshellarg` funkciju koja čisti izvršene argumente komande.

Poslednji primer je prihvatanje stranog unosa da biste odredili koji fajl da učitate sa fajl sistema. Ovo može biti eksploatisano menjanjem imena fajla u putanju do fajla. Morate da uklonite "/", "/..", [null bytes][6], ili bilo koje druge karaktere iz putanje do fajla, tako da nemože da učita skrivene, privatne i osetljive fajlove.

* [Naučite o filtriranju podataka][1]
* [Naučite o `filter_var`][4]
* [Naučite o `filter_input`][5]
* [Naučite o rukovanju sa "null bytes"][6]

### Čišćenje podataka 

Čišćenje uklanja (ili "eskejpuje") ilegalne ili nebezbedne karaktere iz stranog unosa.

Npr., treba da očistite tuđ unos pre nego što uključite unos u HTML ili ga unesete u svežem obliku u SQL upit. Kada koristite vezane parametre sa [PDO-om](#databases), on će očistiti unos za vas.

Ponekad je potrebno da dozvolite neke bezbedne HTML tagove u unosu kada ga uključujete u HTML stranu. Ovo je veoma teško uraditi i mnogi izbegavaju da se bave tim problemom, tako što koriste druge više ograničene formate kao Markdown ili BBcode, mada biblioteke koje koriste metode bele liste postoje sa tim razlogom [vidi HTML Purifier][html-purifier].

[Vidi filteri za čišćenje][2]

### Provera ispravnosti podataka

Provera ispravnosti podataka osigurava da stran unos bude upravo ono što očekujete. Npr., možda želite da proverite imejl adresu, telefonski broj, ili godine kada obrađujete registracionu formu. 

[Vidi filteri za proveru][3]

[1]: http://www.php.net/manual/en/book.filter.php
[2]: http://www.php.net/manual/en/filter.filters.sanitize.php
[3]: http://www.php.net/manual/en/filter.filters.validate.php
[4]: http://php.net/manual/en/function.filter-var.php
[5]: http://www.php.net/manual/en/function.filter-input.php
[6]: http://php.net/manual/en/security.filesystem.nullbytes.php
[html-purifier]: http://htmlpurifier.org/
