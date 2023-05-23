---
isChild: true
anchor:  linux_setup
---

## Linux Setup {#linux_setup_title}

Most GNU/Linux distributions come with PHP available from the official repositories, but those packages usually are a little behind the current stable version. There are multiple ways to get newer PHP versions on such distributions. On Ubuntu and Debian-based GNU/Linux distributions, for instance, the best alternatives for native packages are provided and maintened by [Ondřej Surý][Ondrej Sury Blog], through his Personal Package Archive (PPA) on Ubuntu and DPA/bikeshed on Debian. Find instructions for each of these below. All that said, you can always use containers, compile the PHP Source code, etc.

### Ubuntu-based distributions

For Ubuntu distributions, the [PPA by Ondřej Surý][Ondrej Sury PPA] provides supported PHP versions along with many PECL extensions. To add this PPA to your system, perform the following steps in your terminal:

1. First, add the PPA to your system's software sources using the command:

   ```bash
   sudo add-apt-repository ppa:ondrej/php
   ```

2. After adding the PPA, update your system's package list:

   ```bash
   sudo apt update
   ```

This will ensure that your system can access and install the latest PHP packages available in the PPA.

#### Debian-based distributions

For Debian-based distributions, Ondřej Surý also provides a [bikeshed][bikeshed] (Debian equivalent of a PPA). To add the bikeshed to your system and update it, follow these steps:

1. Ensure that you have root access. If not, you might need to use `sudo` for the following commands.

2. Update your system's package list:

   ```bash
   sudo apt-get update
   ```

3. Install `lsb-release`, `ca-certificates`, and `curl`:

   ```bash
   sudo apt-get -y install lsb-release ca-certificates curl
   ```

4. Download the signing key for the repository:

   ```bash
   sudo curl -sSLo /usr/share/keyrings/deb.sury.org-php.gpg https://packages.sury.org/php/apt.gpg
   ```

5. Add the repository to your system's software sources:

   ```bash
   sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/deb.sury.org-php.gpg] https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list'
   ```

6. Finally, update your system's package list again:

   ```bash
   sudo apt-get update
   ```

With these steps, your system will be able to install the latest PHP packages from the bikeshed.

[Ondrej Sury Blog]: https://deb.sury.org/
[Ondrej Sury PPA]: https://launchpad.net/~ondrej/+archive/ubuntu/php
[bikeshed]: https://packages.sury.org/php/
