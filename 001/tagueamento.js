(function() {
	var TESTE_01 = {
		id    : "#botoes",	
		array  : [],	
		init   : function() {
			
			$(TESTE_01.id).find('button').each(function(){
				TESTE_01.array.push($(this).text());			
				
				$(this).click(function(){
					TESTE_01.click_botao($(this).text());
				})
			})
			
			TESTE_01.exibe_nomes();
		},
		click_botao : function(nome) {
			console.log(nome);
		},
		exibe_nomes : function(){
			console.log(TESTE_01.array);
		}
	}

	TESTE_01.init();
})();