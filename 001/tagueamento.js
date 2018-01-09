function returnArrayName(){

	var arrayBotoes = [];
	$('#botoes').find('button').each(function(index, el) {
		arrayBotoes.push($(this).text());
	});
	console.log(arrayBotoes)			
}

function getNameButton(){

	$('#botoes').find('button').click(function(event) {
		console.log($(this).text());
	});
}

$(document).ready(function() {
	getNameButton();
	returnArrayName();	
});
