var arrayValues = []; // array vazio

$(document).ready(function() {
   buttonClick();
   eachSpanInfo();
   console.log(arrayValues);
});

function buttonClick() { // click no botão
   $('#botoes a').on('click', function(e) {
       var currentNumber = parseInt($(this).text()) - 1;
       var currentValueSpan = $('#valores span').eq(currentNumber).text();
       alert(currentValueSpan);
       console.log(currentValueSpan);
   });
}

function eachSpanInfo() { // informação de cada span
   $('#valores span').each(function(i, obj) {
       var currentName = $(obj).text();
       arrayValues.push(currentName);
   });
}
