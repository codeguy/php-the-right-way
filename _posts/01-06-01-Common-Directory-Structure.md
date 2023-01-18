---
title:   Common Directory Structure
isChild: true
anchor:  common_directory_structure
---

## Common Directory structure {#common_directory_structure_title}

A common question among those starting out with writing programs for the web is, "where do I put my stuff?" Over the years, this answer has consistently been "where the `DocumentRoot` is." Although this answer is not complete, it's a great place to start.

For security reasons, configuration files should not be accessible by a site's visitors; therefore, public scripts are kept in a public directory and private configurations and data are kept outside of that directory.

For each team, CMS, or framework one works in, a standard directory structure is used by each of those entities. However, if one is starting a project alone, knowing which filesystem structure to use can be daunting.

[Paul M. Jones] has done some fantastic research into common practices of tens of thousands of github projects in the realm of PHP. He has compiled a standard file and directory structure, the [Standard PHP Package Skeleton], based on this research. In this directory structure, `DocumentRoot` should point to `public/`, unit tests should be in the `tests/` directory, and third party libraries, as installed by [composer], belong in the `vendor/` directory. For other files and directories, abiding by the [Standard PHP Package Skeleton] will make the most sense to contributors of a project.

[Paul M. Jones]: https://paul-m-jones.com/
[Standard PHP Package Skeleton]: https://github.com/php-pds/skeleton
[Composer]: /#composer_and_packagist
