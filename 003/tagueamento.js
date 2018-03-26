(function() {
	var TESTE_03 = {
		id 		: "#botoes",
		array  		: [],	
		qtdBotoes  	:0,	
		init   : function() {
			
			//Percorre os botões dentro da div
			$(TESTE_03.id).find('button').each(function(){
				
				//Caso o botão seja clicado, executa a função, passando o nome como parâmetro
				$(this).click(function(){
					TESTE_03.click_botao($(this).text());
				})
				
				//Conta o nº de botões
				TESTE_03.qtdBotoes++;
			})
			
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
			
			TESTE_03.add_array(ultima_parte);				
			
		},
		add_array : function(texto){
			
			// Valida para que o valor de cada botão, so seja capturado uma única vez
			if (TESTE_03.array.indexOf(texto) === -1) {			
				TESTE_03.array.push(ultima_parte);
			}
			
			/*
				Valida quando o array que armazena os dados capturados for igual ao numero de botões que podem ser clicados,
				ele exibe a string final, composta pelos elementos na ordem que foram clicados
			*/		
			if(TESTE_03.array.length == TESTE_03.qtdBotoes){
				TESTE_03.exibe_ordem();
			}
		},
		exibe_ordem : function(){
			//Exibe a string formada pelos "trechos" dos nomes de cada botão clicado
			console.log(TESTE_03.array.join('-'));
		}
	}

	TESTE_03.init();
})();	