---
isChild: true
title: Konfiguracioni fajlovi
anchor: configuration_files
---

## Konfiguracioni fajlovi {#configuration_files_title}

Kada pravite konfiguracione fajlove za vašu aplikaciju, dobra praksa preporučuje da poštujete jednu od ovih metoda:

- Preporučuje se da čuvate informacije o konfiguraciji tamo gde im se ne može direktno pristupiti i prevući pomoću fajl
sistema.
- Ako morate da čuvate konfiguracione fajlove u korenom direktorijumu dokumenata, preimenujte fajlove sa `.php`
ekstenzijom. To će obezbediti da, čak i ako se skripti pristupi direktno, neće biti prikazana kao običan tekst.
- Informacije o konfiguracionim fajlovima bi trebalo da se adekvatno zaštite, ili ekripcijom ili pomoću sistemskih
dozvola pristupa fajlovima od strane korisnika ili grupe korisnika
