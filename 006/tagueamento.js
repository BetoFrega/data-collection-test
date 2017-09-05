 $(document).ready( function(){
	$("#botoes button").click(function () {
		/*procura botões que ja tenham sidos clicados, se o numero de botões encontrados
		for menor que o numero de botões existente, execueta o codigo para separar a 
		string e marca botão como clicado*/
		if($("#botoes button.clicado").length <= 4){
			//pega o texto do botão
			var $lbl = $(this).html();
    		//separa o ultimo bloco do texto
    		var $lbl2 = $lbl.split("-")[0];
			//retorna o ultimo bloco do texto
			console.log($lbl2);
			//salva o ultimo bloco do texto como attr Value, para retornar na string final
			$(this).attr("value", $lbl2);
			//marca botão como clicado				
			$(this).addClass("clicado");
		}
		else{
			//pega os values dos botoes clicados, concatena	
			var valores = $('.clicado').get().map(el => el.value).join(', ');
			//retorna todos os valores que foram clicados juntos
			console.log(valores);		
		}
	});

});