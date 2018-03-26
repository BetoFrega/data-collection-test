var TESTE_06 = {
	id 		: "botoes",
	array  		: [],	
	qtdBotoes  	:0,	
	init   : function() {
		
		//Percorre os botões dentro da div
		var divBotoes =  document.getElementById(TESTE_06.id);
		
		for(var a = 0; a < divBotoes.children.length; a++){
		
			//Caso o botão seja clicado, executa a função, passando o nome como parâmetro
			divBotoes.children[a].onclick = function(e){
				TESTE_06.click_botao(e.target.innerText);
			}
					
			//Conta o nº de botões
			TESTE_06.qtdBotoes++;		
		}
				
	},
	click_botao : function(nome) {	
		/* 
			Recebendo o nome como parâmetro, ele quebra a string e seleciona a ultima parte para ser exibida,
			além disso, passa o trecho capturado para um função que irá armazena-lá em um array, para construir a string final		
		*/
		partes = nome.split('-');
		ultima_parte = partes[partes.length-1];				
		
		//Exibindo a parte capturada
		console.log(ultima_parte);	
		
		TESTE_06.add_array(ultima_parte);				
		
	},
	add_array : function(texto){
		
		// Valida para que o valor de cada botão, so seja capturado uma única vez
		if (TESTE_06.array.indexOf(texto) === -1) {			
			TESTE_06.array.push(ultima_parte);
		}
		
		/*
			Valida quando o array que armazena os dados capturados for igual ao numero de botões que podem ser clicados,
			ele exibe a string final, composta pelos elementos na ordem que foram clicados
		*/		
		if(TESTE_06.array.length == TESTE_06.qtdBotoes){
			TESTE_06.exibe_ordem();
		}
	},
	exibe_ordem : function(){
		//Exibe a string formada pelos "trechos" dos nomes de cada botão clicado
		console.log(TESTE_06.array.join('-'));
	}
}

TESTE_06.init();