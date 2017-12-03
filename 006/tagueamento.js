(function(window, document) {
  'use strict';

  var btn = document.querySelectorAll('#botoes button'),
      sortBtnClicked = [],
      inArray        = function(searchString, array) {
        for(var i = 0, max = array.length ; i < max ; i += 1) {
          if(array[i] === searchString) {
            return true;
          }
        }
        return false;
      },
      /***
      * Verifica se todos os botões já foram clicados.
      * Caso sim, será exibido os valores dos botões na ordem clicada.
      ***/
      wereAllBtnClicked = function() {
        var totalBtn        = btn.length,
            totalbtnClicked = sortBtnClicked.length;

        if(totalBtn === totalbtnClicked) {
          console.log(sortBtnClicked.toString());
        }
      };
  /**
  * Exibe primeira parte do valor do botão clicado.
  * Também verifica se esse botão já foi clicado antes.
  * Se sim adiciona valor completo na variavel sortBtnClicked e chama função wereAllBtnClicked
  **/
  for(var i = 0, max = btn.length ; i < max ; i += 1) {
    btn[i].onclick = function() {
      var fullValue = this.textContent,
          value     = fullValue.split('-')[0];
      console.log(value);
      if(!inArray(fullValue, sortBtnClicked)) {
        sortBtnClicked.push(fullValue);
        wereAllBtnClicked();
      }
    }
  }
})(window, document);
