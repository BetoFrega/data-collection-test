$( document ).ready(function() {

	var arrayb = [];

	$('#valores').find('span').each(function () {
		var textob = $(this).text();
		arrayb.push(textob);
   		
	})

	console.log(arrayb);
	
	for (var i = 0; i < document.querySelectorAll('#botoes a').length ; i++){
		var bt = document.querySelectorAll('#botoes a')[i];
		bt.addEventListener("click", retornat);
		bt.index = i;
    }
         

});

function retornat (evt){
	var i = evt.target.index;
	console.log($('#valores span')[i].innerText);
}
