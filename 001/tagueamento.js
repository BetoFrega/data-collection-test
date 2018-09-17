var arrayButtons = []; // array vazio

$(document).ready(function() {
   buttonClick();
   eachButtonInfo();
   console.log(arrayButtons);
});

function buttonClick() { // click no botão
   $('#botoes button').on('click', function(e) {
       var currentName = $(this).text();
       alert(currentName);
       console.log(currentName);
   });
}

function eachButtonInfo() { // informação de cada botão
   $('#botoes button').each(function(i, obj) {
       var currentName = $(obj).text();
       arrayButtons.push(currentName);
   });
}
