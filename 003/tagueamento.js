(function(window, document, $) {
  'use strict';

  var btn               = $('#botoes').find('button'),
      sortBtnClicked    = [],


      wereAllBtnClicked = function() {
        var totalBtn = btn.length,
            totalbtnClicked = sortBtnClicked.length;

        if(totalBtn === totalbtnClicked) {
          console.log(sortBtnClicked.toString());
        }
      };
  
  
  btn.on('click', function() {
      var fullValue = $(this).text(),
          value     = fullValue.split('-')[2];
      console.log(value);
      if($.inArray(fullValue, sortBtnClicked) < 0) {
        sortBtnClicked.push(fullValue);
        wereAllBtnClicked();
      }
  });

})(window, document, jQuery);