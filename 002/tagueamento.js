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
    console.log($(this).text());
    var element = document.createElement('span');
    element.style = 'position:absolute;top:100px;margin-left:1em';
    element.appendChild(document.createTextNode($(this).text()));
    $(this).before(element);
  });

})(window, document, jQuery);