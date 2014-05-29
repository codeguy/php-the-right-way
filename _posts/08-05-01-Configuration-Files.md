---
title: Konfiguracioni fajlovi
isChild: true
---

## Konfiguracioni fajlovi {#configuration_files_title}

Kada kreirate konfiguracione fajlove za vašu aplikaciju, preporuka je da pratite jedan od sledećih metoda:

- Preporučuje se da čuvate vaše konfiguracione podatke gde im se ne može pristupiti direktno i da se dođe do njih preko fajl sistema.
- Ako morate da čuvate vaše konfig. fajlove u korenu dokumenta, imenujte fajlove sa `.php` ektenzijom. Ovim se osigurava da čak iako se skripti pristupi direktno, neće biti poslata kao običan tekst.
- Podaci u konfig. fajlovima trebaju biti zaštićeni, ili uz pomoć enkripcije ili uz pomoć korisnika/grupe fajl sistem dozvola.