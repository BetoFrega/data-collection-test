'use strict';
/*
O SCRIPT ABAIXO MONITORA O EVENTO DOMNodeInserted PARA O SELETOR ESPECIFICADO NA ESTRUTURA HTML.
LOGO, TODAS AS VEZES QUE É INSERIDO UM NODE NOVO NO DOM, HÁ O RETORNO DA FUNÇÃO.
ESSA SOLUÇÃO FOI BASEADA NA DOCUMENTAÇÃO E ARTIGO:
https://developer.mozilla.org/pt-BR/docs/Web/Guide/Events/Mutation_events#Lista_de_mutation_events
https://gabrieleromanato.name/jquery-how-to-use-the-domnodeinserted-event-and-why-its-important
*/
jQuery(document).on('DOMNodeInserted', '#mensagem div', function(e) {
   console.log($(this).text())
});