---
title:   Upravljanje zavisnostima
---

# Upravljanje zavisnostima {#dependency_management_title}

Postoji veliki izbor PHP biblioteka, _framework_-a i komponenti. Vaš projekat će verovatno koristiti neke od njih - 
to su zavisnosti projekta. Do skoro, PHP nije imao dobar način da upravlja tim zavisnostima. Čak iako ste ih ručno 
kontrolisali, i dalje ste morali da brinete o _autoloading_-u. Ne više.

Trenutno postoje dva velika paket menadžer sistema z PHP - _Composer_ i PEAR. Koji je bi trebalo da koristite? 
Odgovor je oba.

 * Koristite **_Composer_** kada upravljate zavisnostima za jedan projekat.
 * Koristite **PEAR** kada upravljate zavisnostima za PHP globalno za ceo sistem.

U glavnom, _Composer_ paketi će biti dostupni samo u projektima u kojima ih vi eksplicitno navedete, dok će PEAR paketi
biti distupni svim vašim PHP projektima. Na prvi pogled možda vam se PEAR pristup čini lakšim, ipak postoji prednost 
kada se paketi koriste na nivou projekata uz pomoć _composer_-a.
