---
isChild: true
---

## Filtriranje podataka {#data_filtering_title}

Apsolutno nikada ne verujte stranom inputu koji se ubacuje u vaš PHP kod. Uvek prečistite i validirajte strani input pre
nego što ga iskoristite u kodu. Funkcije `filter_var` i `filter_input` mogu prečistiti tekst i validirati format teksta
(npr email adrese).

Strani input može biti bilo šta: `$_GET` i `$_POST` podaci iz forme, neke vrednosti u superglobalnoj promenljivoj
`$_SERVER`, i telo HTTP zahteva preko `fopen('php://input', 'r')`. Zapamtite, strani input nije ograničen na podatke iz
forme koje je poslao korisnik. Uploadovani i preuzeti fajlovi, vrednosti iz sesije, podaci iz kolačića, i podaci iz web
servisa koje pruža treća strana su takođe strani input.

Iako se podaci sa strane mogu čuvati, kombinovati i može im se pristupiti kasnije, oni su ipak strani input. Svaki put
kad obradite, prikažete, spojite ili uključite podatke u vaš kod, zapitajte se da li su podaci pravilno filtrirani i da
li se u njih može imati poverenja.

Podaci se mogu raličito _filtrirati_ zavisno od njihove namene. Na primer, kada se nefiltrirani strani input prosledi
HTML stranici na prikaz, može izvršiti HTML i JavaScript na vašem sajtu! Ovo se naziva Cross-Site Scripting (XSS) i može
biti vrlo opasan napad. Jedan od načina da izbegnete XSS je da prečistite sve podatke koje je korisnik generisao pre
nego što ih prosledite stranici, tako što ćete ukloniti HTML tagove i zameniti ih sa `strip_tags` funkcijom ili escaping
karaktere koji imaju specijalno značenje sa odgovarajućim HTML entitetima uz pomoć `htmlentities` ili `htmlspecialchars`
funkcija.

Još jedan primer je prosleđivanje opcija koje se izvršavaju sa komandne linije. Ovo može biti vrlo opasno (i najčešće je
loša ideja), ali možete da upotrebite ugrađenu funkciju `escapeshellarg` da prečistite argumente izvršene komande.

Poslednji primer je prihvatanje stranog inputa radi izbora fajla koji će se učitati iz fajl sistema. Ovo se može
zloupotrebiti promenom imena fajla u putanju fajla. Morate da uklonite "/", "../", [nulte bitove][6], i druge karaktere
iz putanje fajla tako da ne može da učita skrivene ili osetljive fajlove i fajlove koji nisu javni.

* [Naučite o filtriranju podataka][1]
* [Naučite o `filter_var`][4]
* [Naučite o `filter_input`][5]
* [Naučite o rukovanju sa nultim bajtovima][6]

### Prečišćavanje

Prečišćavanje uklanja (ili escapes) ilegalne ili nebezbedne karaktere iz stranog inputa.

Na primer, trebalo bi da prečistite strani input pre uključivanja inputa u HTML ili njegovog ubacivanja u sirov SQL
upit. Kada koristite bound parametre sa [PDO](#databases), oni će prečistiti input za vas.

Ponekad je neophodno da dopustite neke sigurne HTML tagove u inputu kada ga uključujete u HTML stranicu. Ovo je vrlo
teško uraditi i mnogi to izbegavaju korišćenjem striktnijeg formatiranja kao što je Markdown ili BBCode, iako biblioteke
koje imaju belu listu kao što su [HTML Purifier][html-purifier] postoje baš iz ovog razloga.

[Pogledati filtere za prečišćavanje][2]

### Validacija

Validacija obezbeđuje da strani input bude ono što se očekuje. Na primer, može da vam bude potrebno da validirate email
adresu, telefonski broj, ili godište prilikom obrade slanja registracije.

[Vidi filtere za validaciju][3]

[1]: http://www.php.net/manual/en/book.filter.php
[2]: http://www.php.net/manual/en/filter.filters.sanitize.php
[3]: http://www.php.net/manual/en/filter.filters.validate.php
[4]: http://php.net/manual/en/function.filter-var.php
[5]: http://www.php.net/manual/en/function.filter-input.php
[6]: http://php.net/manual/en/security.filesystem.nullbytes.php
[html-purifier]: http://htmlpurifier.org/
