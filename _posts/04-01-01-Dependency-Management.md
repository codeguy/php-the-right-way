---
isChild: false
title: Upravljanje zavisnostima
anchor: dependency_management
---

# Upravljanje zavisnostima (Dependency) {#dependency_management_title}

Postoji izbor između tone PHP biblioteka, frejmvorkova i komponenti. U vašem projektu koristićete najverovatnije
nekoliko njih — to su zavisnosti projekta. Do nedavno, PHP nije imao dobar način da upravlja ovim zavisnostima projekta.
Čak i ako ste njima upravljali ručno, i dalje ste morali da brinete o autoloaderima. Ne više.

Trenutno postoje dva glavna sistema upravljanja paketima za PHP - Composer i PEAR. Koji je pravi za vas? Odgovor je oba.

 * Koristite **Composer** kada upravljate zavisnostima za jedan projekat.
 * Koristite **PEAR** kada upravljate zavisnostima za PHP u celini na vašem sistemu.

U principu, Composer paketi će biti na raspolaganju samo u onim projektima za koje ste posebno naglasili, dok je PEAR
paket uvek na raspolaganju, za sve vaše PHP projekte. Iako se PEAR može učiniti kao lakši pristup na prvi pogled, pristup
"od projekta do projekta" za upravljanje zavisnostima ima svojih prednosti.
