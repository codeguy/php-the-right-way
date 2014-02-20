---
isChild: true
---

## Configuration Files {#configuration_files_title}

When creating configuration files for your applications, best practices recommend that one of the following methods 
be followed:

- It is recommended that you store your configuration information where it cannot be accessed directly and pulled in 
via the file system.
- If you must store your configuration files in the document root, name the files with a `.php` extension. This 
ensures that, even if the script is accessed directly, it will not be output as plain text.
- Information in configuration files should be protected accordingly, either through encryption or group/user file 
system permissions