function checkForClickButton(){
	$('#botao').find('button').click(function(event) {
		checkForMessage();		
	});
}


function checkForMessage()
{
	var $mensagem = $('#mensagem');
	if ($mensagem.text().length > 0) {
		console.log($mensagem.text());
	}        
	else{
		setTimeout(checkForMessage, 500);
	}
}


$(document).ready(function() {
	checkForClickButton();
});