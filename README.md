act_as_disabled
===============

jquery plugin to work with jquery-ujs in order to protect (disabled) a remote: true link to make more than 1 request at the time.

How it works?
============
you have 2 flavors:
you can make a link only disabled when its requesting the remote resource:
```` ruby
  link_to 'this link', some_path, class: 'some-class btn', data: {act_as_disabled: true} , remote: true

````

or

you can make a link with message (could be html not only an string) disabled when its requesting the remote resource:
```` ruby
  link_to 'this link', some_path, class: 'some-class btn', data: {disable_with: 'processing...'}, remote: true

````
Installation
============

1) put the script in vendor/assets/javascript/ (in your rails project or any other place where you can use it)

2) in your manifest include the script(rmember this plugin works with jquery or call it as usual script in your html)
```` ruby
  *= require jquery
  *= require act_as_disabled

````

3) in the layout you can call a trigger.(this example is with haml)
```` haml
  :javascript
    $(function(){
      $('a[data-remote].[data-disable-with], a[data-act-as-disabled]').bindDisableOnRemote();
    });
````
4) Enjoy the new functionality
