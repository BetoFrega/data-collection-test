(function(window, document, $) {
  'use strict';

  var btn = $('#botoes').find('button'),
      btnValue = [];

  btn.each(function() {
    btnValue.push($(this).text());
  });
  console.log(btnValue);

  btn.on('click', function() {
    console.log($(this).text());
  });
})(window, document, jQuery);
