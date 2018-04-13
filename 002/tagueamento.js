'use strict';
$(document).ready(function() {
	var btPage = $('#valores span');
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

	//FUNÇÃO QUE RETORNA O VALOR DO BOTÃO VERDE ACIMA DOS BOTÕES NUMERADOS
	$('#botoes a').on('click', function(){
		console.log($('#valores span').eq($(this).text()-1).text());
	})
});