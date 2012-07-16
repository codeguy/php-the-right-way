# Dependency Management

There are a ton of PHP libraries, frameworks, and components to choose from. Your project will likely use several of them — these are project dependencies. Until recently, PHP did not have a good way to manage these project dependencies. Even if you managed them manually, you still had to worry about autoloaders. No more.

Currently there are two major package management systems for PHP - Composer and PEAR. Which one is right for you? The answer is both.

 * Use **Composer** when managing dependencies for a single project.
 * Use **PEAR** when managing dependencies for PHP as a whole on your system, and if you are using PEAR, you can use
   **Onion** packager when managing PEAR dependencies for a single project or on your system.

In general, Composer packages will be available only in the projects that you explicitly specify whereas a PEAR package
would be available to all of your PHP projects. While PEAR might sound like the easier approach at first glance, there
are advantages to using a project-by-project approach to your dependencies.

If you use PEAR and PEAR Channel to distribute your project, you can
use **Onion**, Onion is a dependency manager that can **bundle** PEAR pacakges 
into a single project, and by defining a short `package.ini`, you can easily 
install these dependencies.
