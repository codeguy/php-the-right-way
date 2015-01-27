---
isChild: true
anchor:  vagrant
---

## Vagrant {#vagrant_title}

[Vagrant] helps you build your virtual boxes on top of the known virtual environments and will configure these
environments based on a single configuration file. These boxes can be set up manually, or you can use "provisioning"
software such as [Puppet] or [Chef] to do this for you. Provisioning the base box is a great way to ensure that
multiple boxes are set up in an identical fashion and removes the need for you to maintain complicated "set up"
command lists. You can also "destroy" your base box and recreate it without many manual steps, making it easy to create
a "fresh" installation.

Vagrant creates folders for sharing your code between your host and your virtual machine, which means that you can
create and edit your files on your host machine and then run the code inside your virtual machine.

### A little help

If you need a little help to start using Vagrant there are some services that might be useful:

- [Rove][Rove]: service that allows you to pre-generate typical Vagrant builds, PHP among the options. The provisioning is
made with Chef.
- [Puphpet][Puphpet]: simple GUI to set up virtual machines for PHP development. **Heavily focused in PHP**. Besides local VMs,
it can be used to deploy to cloud services as well. The provisioning is made with Puppet.
- [Protobox][Protobox]: is a layer on top of vagrant and a web GUI to setup virtual machines for web development. A single YAML
document controls everything that is installed on the virtual machine.
- [Phansible][Phansible]: provides an easy to use interface that helps you generate Ansible Playbooks for PHP based projects.


[Vagrant]: http://vagrantup.com/
[Puppet]: http://www.puppetlabs.com/
[Chef]: http://www.opscode.com/
[Rove]: http://rove.io/
[Puphpet]: https://puphpet.com/
[Protobox]: http://getprotobox.com/
[Phansible]: http://phansible.com/
