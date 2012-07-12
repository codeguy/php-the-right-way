---
isChild: true
---

## Null Bytes

A null byte `\0` denotes the end of a string in [C](http://en.wikipedia.org/wiki/C_(programming_language)). As PHP uses C for all it's 
filesystem related operations it means a filesystem path could be [null byte poisoned][2].

To prevent this it is important to remove any null bytes from filesystem paths, _especially_ if they come from user input:

	$filepath = str_replace(chr(0), '', $_FILE['tmp_name']);

[See Null Byte Related Issues][1]
[See Null Byte Poisoning][2]

[1]: http://php.net/manual/en/security.filesystem.nullbytes.php
[2]: http://www.madirish.net/?article=436