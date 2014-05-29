---
title: Izveštavanje o greškama 
isChild: true
---

## Izveštavanje o greškama {#error_reporting_title}

Evidentiranje grešaka može biti korisno u pronalaženju problematičnih tačaka u vašoj aplikaciji, ali isto tako može da otkrije informacije o strukturi vaše aplikacije spoljnom svetu. Da bi ste efektno zaštitili vašu aplikaciju od problema koji mogu nastati zbog sadržine tih poruka, morate da podesite vaš server zavisno od namene, tj. da li služi za razvoj aplikacije ili za uživo pokretanje aplikacije. 

### Razvoj

Da biste prikazali sve moguće greške tokom <strong>razvoja</strong>, podesite sledeće opcije u vašem `php.ini` fajlu:

    display_errors = On
    display_startup_errors = On
    error_reporting = -1
    log_errors = On

> Prosleđivanjem vrednosti `-1` će prikazati sve moguće greške, čak i kada se novi nivoi i konstante budu dodale u budućim PHP verzijama. `E_ALL` konstanta se isto tako ponaša od verzije 5.4
[php.net](http://php.net/manual/function.error-reporting.php)

`E_STRICT` nivo grešaka je ubačen u verziju 5.3.0 i nije deo `E_ALL`, međutim postao je deo `E_ALL` od verzije 5.4.0. Šta to znači? To znači da u verziji 5.3 morate koristiti ili `-1` ili `E_ALL | E_STRICT` ako želite da prikažete sve moguće greške. 

**Prikazivanje svih grešaka po verzijama**

* &lt; 5.3 `-1` or `E_ALL`
* &nbsp; 5.3 `-1` or `E_ALL | E_STRICT`
* &gt; 5.3 `-1` or `E_ALL`

### Produkcija

Da biste sakrili greške u vašem <strong>produkcionom</strong> okruženju, podesite vaš `php.ini` fajl na sledeći način:

    display_errors = Off
    display_startup_errors = Off
    error_reporting = E_ALL
    log_errors = On
	
Sa ovim podešavanjima, greške će i dalje biti evidentirane u zapisnik grešaka za _web_ server, ali neće biti prikazane korisniku. Za više informacija o ovim podešavanjima, vidite PHP uputstvo.

* [error_reporting](http://php.net/manual/errorfunc.configuration.php#ini.error-reporting)
* [display_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-errors)
* [display_startup_errors](http://php.net/manual/errorfunc.configuration.php#ini.display-startup-errors)
* [log_errors](http://php.net/manual/errorfunc.configuration.php#ini.log-errors)
