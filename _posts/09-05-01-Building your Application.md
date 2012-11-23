---
isChild: true
---

## Building and Deploying your Application {#build_title}

If you find yourself doing manual database schema changes or running your tests manually before updating your files (manually), 
think twice! With every additional manual task needed to deploy a new version of your app, the chances for potentially 
fatal mistakes increase. Whether you're dealing with a simple update, a comprehensive build process or even a continuous 
integration strategy, build tools are your friend.

### Phing - Deployment with XML and PHP

[Phing](http://www.phing.info/) is the easiest way to get started with automated deployment in the PHP world. With Phing you can control your packaging, deployment or testing process from within a simple 
XML build file. Phing provides a rich set of tasks usually needed to install or update a web app and can be extended 
with additional custom tasks, written in PHP.

Example of a Phing script (build.xml):

{% highlight xml %}

    <?xml version="1.0" encoding="UTF-8"?>
    <project name="my-project" default="update">
        <!-- Prompt for environment and load respective buld properties. -->
        <propertyprompt propertyName="environment" defaultValue="development"
                        promptText="What's the target environment (development, production)?" useExistingValue="true" />
    
        <property file="build/properties/${environment}.properties" />
        
        <!-- snip -->
    
        <target name="update">
            <phingcall target="svn-update" />
            <phingcall target="update-dependencies" />
            <phingcall target="make-configuration" />
            <phingcall target="migrate-database" />
        </target>
    
        <target name="svn-update">
            <trycatch property="error">
                <try>
                    <svnupdate todir="." />
                </try>
                <catch>
                    <echo message="Svn update failed: ${error}" />
                </catch>
            </trycatch>
        </target>
    
        <target name="update-dependencies">
            <exec command="php composer.phar self-update" />
            <exec command="php composer.phar update" />
        </target>
        
        <!-- snip -->
    
    </project>

{% endhighlight %}

### Capistrano - The powerful Ruby alternative

[Capistrano](https://github.com/capistrano/capistrano/wiki) is a system for *intermediate-to-advanced programmers* to execute commands in a structured, repeatable way on one or more remote machines.

It is pre-configured for deploying Ruby on Rails applications, however people are **successfully deploying PHP systems** with it. Successful use of Capistrano depends on a working knowledge of Ruby and Rake.

Dave Gardner's blog post [PHP Deployment with Capistrano](http://www.davegardner.me.uk/blog/2012/02/13/php-deployment-with-capistrano/) is a good starting point for PHP developers interested in Capistrano.

###Chef - Ruby based system integration framework

[Chef](http://www.opscode.com/chef/) is more than a deployment framework, it is a very powerful Ruby based system integration framework that doesn't just deploy your app but can build your whole server environment or virtual boxes.

Chef resources for PHP developers:

* [Three part blog series about deploying a LAMP application with Chef, Vagrant, and EC2](http://www.jasongrimes.org/2012/06/managing-lamp-environments-with-chef-vagrant-and-ec2-1-of-3/)
* [Chef Cookbook which installs and configures PHP 5.3 and the PEAR package management system](https://github.com/opscode-cookbooks/php)

### Continuous Integration

> Continuous Integration is a software development practice where members of a team integrate their work frequently, 
usually each person integrates at least daily — leading to multiple integrations per day. Many teams find that this 
approach leads to significantly reduced integration problems and allows a team to develop cohesive software more rapidly.

*Martin Fowler*

There are different ways to implement continuous integration for PHP. Recently [Travis CI](https://travis-ci.org/) has done a great job of making continuous integration a reality even for small projects. Travis CI is a hosted continuous integration service for the open source community. It is integrated with GitHub and offers first class support for many languages including PHP. 

Example of a Travis CI build script:

{% highlight yml %}

    language: php
    
    # list any PHP version you want to test against
    php:
      # aliased to a recent 5.3.x version
      - 5.3
      # aliased to a recent 5.4.x version
      - 5.4
    
    # optionally specify a list of environments, for example to test different RDBMS
    env:
      - DB=mysql
      - DB=pgsql
    
    # execute any number of scripts before the test run, custom env's are available as variables
    before_script:
      - if [[ "$DB" == "pgsql" ]]; then psql -c "DROP DATABASE IF EXISTS hello_world_test;" -U postgres; fi
      - if [[ "$DB" == "pgsql" ]]; then psql -c "create database hello_world_test;" -U postgres; fi
      - if [[ "$DB" == "mysql" ]]; then mysql -e "create database IF NOT EXISTS hello_world_test;" -uroot; fi
    
    script: phpunit --configuration phpunit_$DB.xml --coverage-text

{% endhighlight %}

Further reading:

* [Continuous Integration with Jenkins](http://jenkins-ci.org/)
* [Continuous Integration with Teamcity](http://www.jetbrains.com/teamcity/)