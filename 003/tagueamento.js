
var total = document.querySelectorAll('#botoes button').length;
var cont = 0;
var ordem = [];



$('#botoes').find('button').each(function () {
    	var textob = $(this).text();

  
   		$(this).on("click", function(){
		var hifen = textob.split('-');
 		console.log(hifen[2]);
		ordem.push($(this).text());
		cont++;
		 if(cont==total){
		   console.log('teste');
		  }
		});



});
 
