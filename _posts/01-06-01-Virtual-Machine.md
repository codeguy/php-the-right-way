---
isChild: true
---

## Virtual Machine

Running your application on different environment in development and production (like developing on Windows
and deploying to GNU/Linux) can lead to bugs popping up when you go live. Other times you may need PHP extensions,
a web server, database or a message queue system not availabile on your development platform.

To get around this problem you can set up a Virtual Machine, configured to reflect the production environment, and
use it during the development.

You can do this manually, but as a number of different machines grows you will have hard time to track changes and
replicate set ups. For this reason there are tools that can help you describe and automate Virtual Machines
provisioning. With [Vagrant][vagrant] you can set up simple wrappers, then using [Puppet][puppet] or [Chef][chef]
for complete set up.

[vagrant]: http://vagrantup.com/
[puppet]: http://www.puppetlabs.com/
[chef]: http://www.opscode.com/
