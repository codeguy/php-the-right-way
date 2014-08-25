---
isChild: true
title: Izveštaji o greškama
anchor: error_reporting
---

## Izveštaji o greškama (Error Reporting) {#error_reporting_title}

Logovanje grešaka može biti korisno prilikom traženja problematičnih mesta u vašoj aplikaciji, ali istovremeno može
izložiti informacije o strukturi aplikacije spoljnjem svetu. Da biste efikasno zaštitili aplikaciju od problema koje
može izazvati javno prikazivanje ovih poruka, morate podesiti server različito za razvoj i za produkciju (uživo).

### Razvoj

Da biste prikazali svaku moguću grešku prilikom <strong>razvoja</strong>, podesite sledeće vrednosti u vašem `php.ini`:

    display_errors = On
    display_startup_errors = On
    error_reporting = -1
    log_errors = On

> Prosleđivanje vrednosti `-1` će prikazati svaku moguću grešku, čak i kada budu dodati novi nivoi i konstante u budućim
verzijama PHP. Konstanta `E_ALL` se takođe ponaša na ovaj način od verzije 5.4. -
[php.net](http://php.net/manual/function.error-reporting.php)

Konstanta nivoa greške `E_STRICT` je uvedena od verzije 5.3.0 i nije deo `E_ALL`, ali je postala deo `E_ALL` u veziji
5.4.0. Šta to konkretno znači?
Pod uslovom prikazivanja svake moguće greške u verziji 5.3 to znači da morate da koristite ili `-1` ili
`E_ALL | E_STRICT`.

**Prijavljivanje svake moguće greške po verzijama PHP**

* &lt; 5.3 `-1` ili `E_ALL`
* &nbsp; 5.3 `-1` ili `E_ALL | E_STRICT`
* &gt; 5.3 `-1` ili `E_ALL`

### Produkcija

Da biste sakrili greške u vašoj <strong>produkcionom</strong> okruženju, podesite `php.ini` ovako:

    display_errors = Off
    display_startup_errors = Off
    error_reporting = E_ALL
    log_errors = On

Sa ovim podešavanjima u produkciji, greške će se i dalje upisivati u log fajl sa greškama na serveru, ali se neće
prikazivati korisniku. Za više informacija o ovim podešavanjima, pogledajte PHP manual:

* [error_reporting](http://php.net/manual/errorfunc.configuration.php#ini.error-reporting)
* [display_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-errors)
* [display_startup_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-startup-errors)
* [log_errors](http://php.net/manual/errorfunc.configuration.php#ini.log-errors)
