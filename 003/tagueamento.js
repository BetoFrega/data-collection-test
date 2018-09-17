var arrayClickedButtons = [], // array vazio
   totalButtons;

$(document).ready(function() {
   totalButtons = $('#botoes button').length; // pega a quantidade de botoes
   buttonClick();
});

function buttonClick() { // click no botão
   $('#botoes button').on('click', function(e) {
       var currentValue = $(this).text();
       if(!$(this).hasClass('already-clicked')) { // se não tiver sido clicado
           var indexArray = arrayClickedButtons.length + 1;
           arrayClickedButtons.push('| ' + indexArray + 'º ' + currentValue);
       }

       if(arrayClickedButtons.length == totalButtons) { // todos os botões já foram clicados
           alert('Todos os botões já foram clicados! Verifique a ordem no console');
           var orderClicked = '';
           for (var i = 0; i < arrayClickedButtons.length; i++) {
               orderClicked += arrayClickedButtons[i] + ' ';
           }
           console.log(orderClicked);
       }

       $(this).addClass('already-clicked'); // adiciona classe de que já foi clicado
       var currentEndValue = $(this).text().split('-')[2];
       alert(currentEndValue);
       console.log(currentEndValue);
   });
}
