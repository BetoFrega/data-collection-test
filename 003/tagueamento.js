(function(window, document, $) {
  'use strict';

  var btn               = $('#botoes').find('button'),
      sortBtnClicked    = [],
      /***
      * Verifica se todos os botões já foram clicados.
      * Caso sim, será exibido os valores dos botões na ordem clicada.
      ***/
      wereAllBtnClicked = function() {
        var totalBtn = btn.length,
            totalbtnClicked = sortBtnClicked.length;

        if(totalBtn === totalbtnClicked) {
          console.log(sortBtnClicked.toString());
        }
      };
  /**
  * Exibe última parte do valor do botão clicado.
  * Também verifica se esse botão já foi clicado antes.
  * Se sim adiciona valor completo na variavel sortBtnClicked e chama função wereAllBtnClicked
  **/
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
