(function() {	
	var TESTE_02 = {
		id    : "#valores",
		botoes : "#botoes",
		array  : [],	
		init   : function() {
			
			$(TESTE_02.id).find('span').each(function(){
				TESTE_02.array.push($(this).text());
			})
			
			$(TESTE_02.botoes).find('a').each(function(){
				$(this).click(function(){
					TESTE_02.click_botao($(this).index());
				})
			})
			
			TESTE_02.exibe_valores();
		},
		click_botao : function(posicao) {		
			console.log($(TESTE_02.id + '> span').eq(posicao).text());
		},
		exibe_valores : function(){
			console.log(TESTE_02.array);
		}
	}

	TESTE_02.init();
})();