
var total = document.querySelectorAll('#botoes button').length;
var cont = 0;
var ordem = '';
var estado = [];


/* Ao clicar em um dos botões é retornado o texto deste botão após o segundo hífen.
 
   Quando todos os botôes forem clicados, é retornado a ordem que foram clicados 
   sendo essa ordem númerica de acordo com a posição de cada botão na página */

$('#botoes').find('button').each(function () {
    	var textob = $(this).text();
		estado.push(false);
    	
  
   		$(this).on("click", function(){
			var hifen = textob.split('-');
 			console.log(hifen[2]);
 			ordem += ($(this).index()) + ',';
			if(!estado[$(this).index()]){
				estado[$(this).index()] = true;
				cont++;
		 		if(cont==total){
		   			console.log(ordem);
		  		}
		  	}
		});


});
 
