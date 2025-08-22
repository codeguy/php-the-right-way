---
title:   Sicherheit von Webanwendungen
isChild: true
anchor:  web_application_security
---

## Sicherheit von Webanwendungen {#web_application_security_title}

Für jeden PHP-Entwickler ist es sehr wichtig , die [Grundlagen der Sicherheit von Webanwendungen][4] zu erlernen, die sich in eine Handvoll allgemeiner Themen unterteilen lassen:

Code-Daten-Trennung.
Wenn Daten als Code ausgeführt werden, kommt es zu SQL-Injection, Cross-Site-Scripting, lokaler/Remote-Dateieinbindung usw.
Wenn Code als Daten gedruckt wird, kommt es zu Informationslecks (Offenlegung des Quellcodes oder im Fall von C-Programmen genügend Informationen, um ASLR zu umgehen ).

1. Code-data separation. (Trennung von Quellcode und Daten)
   * Wenn Daten als Code ausgeführt werden, kommt es zu SQL-Injection, Cross-Site-Scripting, lokaler/Remote-Dateieinbindung usw.
   * Wenn Code als Daten angezeigt wird, kommt es zu Informationslecks (Offenlegung des Quellcodes oder im Fall von C-Programmen genügend Informationen, um [ASLR][5] zu umgehen).
3. Anwendungslogik.
   * Fehlende Authentifizierungs- oder Autorisierungskontrollen.
   * Eingabevalidierung.
4. Operating environment. (Betriebsumgebung)
   * PHP-Versionen.
   * Bibliotheken von Drittanbietern. (Third party libraries)
   * Das Betriebssystem.
5. Schwächen der Kryptografie. (Cryptography weaknesses)
   * [Schwache Zufallszahlen (Weak random numbers)][6].
   * [Angriffe mit asugewähltem Chiffretext (Chosen-ciphertext attacks)][7].
   * [Informationslecks über Seitenkanäle (Side-channel information leaks)][8].

Es gibt Kriminelle, die Deine Webanwendung ausnutzen wollen. Treffe daher unbedingt die notwendigen Vorkehrungen, 
um die Sicherheit Deiner Webanwendung zu erhöhen. Glücklicherweise haben die Experten von [The Open Web Application Security Project][1]  eine umfassende Liste bekannter Sicherheitsprobleme und Schutzmaßnahmen zusammengestellt.
Diese Lektüre ist Pflichtlektüre für sicherheitsbewusste Entwickler. [Survive The Deep End: PHP Security][3] von Padraic Brady ist ein weiterer guter Leitfaden zur Sicherheit von Webanwendungen für PHP.

* [Lese den OWASP-Sicherheitsleitfaden][2]


[1]: https://www.owasp.org/
[2]: https://www.owasp.org/index.php/Guide_Table_of_Contents
[3]: https://phpsecurity.readthedocs.io/en/latest/index.html
[4]: https://paragonie.com/blog/2015/08/gentle-introduction-application-security
[5]: https://www.techtarget.com/searchsecurity/definition/address-space-layout-randomization-ASLR
[6]: https://paragonie.com/blog/2016/01/on-design-and-implementation-stealth-backdoor-for-web-applications
[7]: https://paragonie.com/blog/2015/05/using-encryption-and-authentication-correctly
[8]: https://blog.ircmaxell.com/2014/11/its-all-about-time.html
