jQuery(function ($) {
  $.fn.extend({
    disableOnRemote: function(target,event,altContentAlt){
      var $el = $(this),
          value = $el.data('disable'),
          altContent = altContentAlt || $el.attr('data-disable-with');
      if( value === false ) {
        $el.off('.disableWithRemote');
        $el.removeAttr('disabled');
        altContent !== '' ? $el.html($el.data('content')) : null ;
        $el.data('disable', true);
      }else{
        $el.on('click.disableWithRemote',function(event){ event.preventDefault(); event.stopPropagation();});
        $el.attr('disabled',true);
        $el.data('disable',false);
        altContent !== '' ? $el.data('content',$el.html()).html(altContent) : null;
      }
    },
   bindDisableOnRemote: function(target,event){
    var $el = $(this);
    $el.on('ajax:beforeSend.bindDisableRemote', function(event){$(this).disableOnRemote()});
    $el.on('ajax:complete.bindDisableRemote', function(){$(this).disableOnRemote()});
     }
  });
});
