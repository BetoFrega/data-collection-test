'use strict';

(function() {
    /*
        Para retornar a última parte do botão clicado bastou
        escutar o evento de click de todos os botões para que quando
        ele fosse clicado, fosse separado o texto pelo caractere '-'
        e retornado a última parte dele.

        Para retornar a lista dos botões clicados foi necessário 
        no evento de click, adicionado acima, cadastrar o botão 
        clicado numa lista (listClickedButton) e a cada click comparar se 
        todos os botões da lista de botões (listButton) estão nela.
    */

    var listButton = document.querySelectorAll('button');
    var listButtonArray = Array.prototype.slice.call(listButton).map(function(item){ 
        return item.innerText;
    }); 
    var listClickedButton = [];

    function checkComplete () {
        var complete = listButtonArray.every(function (item) {
        return (listClickedButton.indexOf(item) >= 0);
        });

        if (complete) {
            console.log(listClickedButton.toString());
        }
    }

    for (var x = 0; x < listButton.length; x++) {
        var button = listButton[x];

        button.addEventListener('click', function(event) {
            console.log(this.innerText.split('-').pop());
            listClickedButton.push(this.innerText);

            checkComplete();
        })
    }
})();