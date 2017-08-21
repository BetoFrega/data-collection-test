$(document).ready(function() {
    var botoes = [];
    $.each($('#botoes button'), function(index, element) {  
        botoes.push($(element).text());  
    });  

    $('#botoes button').on('click', function() {  
        console.log(($(this).text()));  
    });  
    
 	  console.log(botoes);
    
});
