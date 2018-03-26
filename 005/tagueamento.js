var TESTE_05 = {
	id    : "valores",
	botoes : "botoes",
	array  : [],	
	init   : function() {	
		
		var divValores =  document.getElementById(TESTE_05.id);
		
		for(var a = 0; a < divValores.children.length; a++){
			TESTE_05.array.push(divValores.children[a].innerHTML);		
		}
		
		var divBotoes =  document.getElementById(TESTE_05.botoes);
		
		for(var a = 0; a < divBotoes.children.length; a++){		
			TESTE_05.click_botao(divBotoes, divValores, a);			
		}
		
		TESTE_05.exibe_valores();
	},
	click_botao : function(divBotoes, divValores, posicao) {	
			
		divBotoes.children[posicao].onclick = function(e){
			console.log(divValores.children[posicao].innerHTML);
		}
		
	},
	exibe_valores : function(){
		console.log(TESTE_05.array);
	}
}

TESTE_05.init();