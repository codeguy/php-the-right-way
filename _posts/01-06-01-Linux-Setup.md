---
isChild: true
anchor:  linux_setup
---

## Linux Setup {#linux_setup_title}

Die meisten GNU/Linux-Distributionen enthalten PHP aus den offiziellen Repositorien, diese Pakete liegen jedoch meist etwas hinter der aktuellen stabilen Version zurück. Es gibt mehrere Möglichkeiten, neuere PHP-Versionen für solche Distributionen zu erhalten.

### Ubuntu-basierte Distributionen

Für Ubuntu und Debian-basierte GNU/Linux-Distributionen werden die besten Alternativen für native Pakete beispielsweise von [Ondřej Surý][Ondrej Sury Blog] bereitgestellt und gepflegt. Dies geschieht über sein Personal Package Archive (PPA) für Ubuntu und DPA/bikeshed für Debian. Anweisungen dazu finden Sie unten.

Für Ubuntu-Distributionen bietet das [PPA von Ondřej Surý][Ondrej Sury PPA] unterstützte PHP-Versionen sowie zahlreiche PECL-Erweiterungen. Um dieses PPA zu Ihrem System hinzuzufügen, führen Sie die folgenden Schritte in Ihrem Terminal aus:

1. Fügen Sie zunächst das PPA mit dem folgenden Befehl zu den Softwarequellen Ihres Systems hinzu:

   ```bash
   sudo add-apt-repository ppa:ondrej/php
   ```

2. Aktualisieren Sie nach dem Hinzufügen des PPA die Paketliste Ihres Systems:

   ```bash
   sudo apt update
   ```

Dadurch wird sichergestellt, dass Ihr System auf die neuesten im PPA verfügbaren PHP-Pakete zugreifen und diese installieren kann.

### Debian-basierte Distributionen

Für Debian-basierte Distributionen stellt Ondřej Surý auch einen [bikeshed][bikeshed] (Debian-Äquivalent eines PPA) zur Verfügung. Um den Bikeshed Deinem System hinzuzufügen und zu aktualisieren, gehe wie folgt vor:

1. Stelle sicher, dass Sie Root-Zugriff haben. Andernfalls müssen Sie möglicherweise `sudo` für die folgenden Befehle verwenden.

2. Aktualisiere die Paketliste Ihres Systems:

   ```bash
   sudo apt-get update
   ```

3. Installiere `lsb-release`, `ca-certificates`, und `curl`:

   ```bash
   sudo apt-get -y install lsb-release ca-certificates curl
   ```

4. Lade den Signaturschlüssel für das Repository herunter:

   ```bash
   sudo curl -sSLo /usr/share/keyrings/deb.sury.org-php.gpg https://packages.sury.org/php/apt.gpg
   ```

5. Füge das Repository zu den Softwarequellen Deines Systems hinzu:

   ```bash
   sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/deb.sury.org-php.gpg] https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
   ```

6. Aktualisiere abschließend die Paketliste Deines Systems erneut:

   ```bash
   sudo apt-get update
   ```

Mit diesen Schritten kann Ihr System die neuesten PHP-Pakete aus dem Bikeshed installieren.

### RPM-basierte Distributionen

Auf RPM-basierten Distributionen (CentOS, Fedora, RHEL usw.) kannst Du [Remi's RPM repository][remi-repo] verwenden , um die neueste PHP-Version zu installieren oder mehrere PHP-Versionen gleichzeitig verfügbar zu haben.

Zum Konfigurieren Ihrer RPM-basierten Distribution steht ein [Konfigurationsassistent][remi-wizard] zur Verfügung.

Abgesehen davon kannst Du immer Container verwenden oder den PHP-Quellcode von Grund auf neu kompilieren.

[Ondrej Sury Blog]: https://deb.sury.org/
[Ondrej Sury PPA]: https://launchpad.net/~ondrej/+archive/ubuntu/php
[bikeshed]: https://packages.sury.org/php/
[remi-repo]: https://rpms.remirepo.net/
[remi-wizard]: https://rpms.remirepo.net/wizard/
