(function(window, document, $) {
  'use strict';

  var greenBox       = $('#valores').find('span'),
      greenBoxValues = [],
      btn            = $('#botoes').find('a');

  greenBox.each(function() {
    greenBoxValues.push($(this).text());
  });
  console.log(greenBoxValues);

  btn.on('click', function() {
    var position = $(this).text() - 1;
    console.log(greenBoxValues[position]);
  });

})(window, document, jQuery);
