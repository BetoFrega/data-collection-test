'use strict';
$(document).ready(function() {
	var btPage = $('#botoes button');
	var btNames = [];

	//FUNÇÃO QUE CRIA O ARRAY NO CARREGAMENTO DA PÁGINA
	function createArrayWithButtons(param) {
		var createdArray = [];
		for(var i = 0; i < btPage.length; i++){
			btNames.push(param.eq(i).text())
		}
		return btNames;
	}
	console.log(createArrayWithButtons(btPage));

	//FUNÇÃO QUE RETORNA O TEXTO DO ELEMENTO CLICADO
	$('#botoes button').on('click', function(){
		console.log($(this).text());
	})
});