(function(window, document, $) {
  'use strict';

  $('#mensagem').bind('DOMSubtreeModified', function() {
    var msg = $(this).text().trim();
    if(!$(this).find('img').length && msg != '') {
      console.log(msg);
    }
  });

})(window, document, jQuery);
