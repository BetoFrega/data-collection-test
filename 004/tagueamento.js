var TESTE_04 = {
	id    : "botoes",	
	array  : [],	
	init   : function() {
		
		var div =  document.getElementById(TESTE_04.id);
		
		for(var a = 0; a < div.children.length; a++){
			TESTE_04.array.push(div.children[a].innerHTML);			
			TESTE_04.click_botao(div.children[a]);			
		}
		
		TESTE_04.exibe_nomes();
	},
	click_botao : function(elemento) {
		elemento.onclick = function(e){
			console.log(e.target.innerText);
		}
	},
	exibe_nomes : function(){
		console.log(TESTE_04.array);
	}
}

TESTE_04.init();