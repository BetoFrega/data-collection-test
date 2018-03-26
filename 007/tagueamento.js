var TESTE_07 = {
	id    : "#produtos",	
	array  : [],	
	init   : function() {
		
		$(TESTE_07.id).find('a').each(function(){
			TESTE_07.array.push($(this).data('sku'));			
			
			$(this).click(function(){
				TESTE_07.click_botao($(this));
			})
		})
		
		TESTE_07.exibe_sku();
	},
	click_botao : function(elemento) {		
		console.log(TESTE_07.monta_objeto(elemento));
	},
	monta_objeto: function (elemento){
		var produto = {};			
			produto.nome = elemento.find('.name').text();
			produto.preco = elemento.find('.price').text();
			produto.sku = elemento.data('sku');
			
		return produto;		
	},
	exibe_sku : function(){
		console.log(TESTE_07.array);
	}
}

TESTE_07.init();