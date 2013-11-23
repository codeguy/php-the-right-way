Vagrant.configure("2") do |config|
    config.vm.box = "precise32"
    config.vm.box_url = "http://files.vagrantup.com/precise32.box"
    config.vm.network :forwarded_port, guest: 4000, host: 4000
    config.vm.provision :shell, :inline => "sudo apt-get update && sudo apt-get -y install build-essential ruby-compass && sudo /opt/vagrant_ruby/bin/gem install jekyll rdiscount --no-ri --no-rdoc"
end