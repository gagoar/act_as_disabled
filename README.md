act_as_disabled
===============

jquery plugin to work with jquery-ujs in order to protect (disabled) `a remote: true` link to make only one request at the time per link.
protecting the application for innecesary request.

How it works?
============
you have 2 flavors:

you can make a link and only disable it when  requesting the remote resource:
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

2) in your manifest include the script(remember: this plugin works with jquery ) or call it as usual script in your html page

```` ruby
  *= require jquery_ujs
  *= require act_as_disabled

````

3) in the `layout` of  your application you can call a trigger/binding (this example is in haml markup)

```` haml
  :javascript
    $(function(){
      $('a[data-remote][data-disable-with], a[data-act-as-disabled]').bindDisableOnRemote();
    });
````

4) Enjoy the new functionality
