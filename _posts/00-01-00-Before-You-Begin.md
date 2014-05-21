---
anchor: important_coding_tip
---

# Important Coding Tip{#important_coding_tip_title}

## Do not do as they do
As you learn how to program in PHP you will find almost all instructional tutorials as of 2014 do you a grave injustice.  They teach you how to write dangerous, hackable, insecure PHP code.

Since I can't wave a magic wand and make all those tutorials fix themselves, I have decided to instead provide you with a simple way to not let them do this to you.

For any tutorial which ever tells you to get data submitted by a user by using the $_GET superglobal variable, you can perform a simple substitution:

If they say:
$exampleVariable = $_GET['exampleVariable'];

You should use:
$exampleVariable = $get('examplevariable);

This is a small change that looks similar visually, so it makes it easy for you to substitute.  Instead of getting the data from an array, you are getting the data using a function.

Now in addition to the above, you will ALSO need to create this function.  So at the top of any PHP file where you will be using this function, simple add the following 4 lines:


// FIXME: replace this with a more complete data sanitizing script
if isset($_GET) { unset($_GET); } // Force yourself not to use the global variable
$get = function($varName) {
  return filter_input(INPUT_GET, $varName, FILTER_SANITIZE_STRING); }


## What this does

// FIXME: replace this with a more complete data sanitizing script
This is a PHP comment, it is not executable code.  This is simply a notation to remind you in the future if you are using this file for a production website, to go back and replace this code with more appropriate and secure code.

if isset($_GET) { unset($_GET); } // Force yourself not to use the global variable
This line is to force you not use the $_GET array by deleting it.  That way if you cut and paste code from a tutorial, you won't accidentally introduce security issues if you forget to make the neccessary changes.


$get = function($varName) {
  return filter_input(INPUT_GET, $varName, FILTER_SANITIZE_STRING); }

These 2 lines create a function to remove any HTML tags from a query string variable and return it.  The function is a special PHP construct called a closure, which you can learn about later, which allows it to be refereneced by a variable.  The purpose of using this odd construct is that it allows you to reuse these 2 lines of code multiple times in a PHP application without having to worry about duplicate function names.

The filter_input is a PHP function which provides a create deal more security options then just the one I have used here.  It is up to you to learn about and use those options appropriately.  What I have included here is the bare minimum to provide some basic security AND to allow you to easily increase your security incremementally.  For example, instead of having to rewrite every single PHP program you write in the beginning, you merely need to search for all the FIXME strings and change filter_input(INPUT_GET, $varName, FILTER_SANITIZE_STRING) to something more appropriate for your specific needs.