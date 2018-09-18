/*
 *   Todos os botões vão possui dois atributo clicado e posicao. 
 *	 Atributo clicado: mostra seu estado atual sendo o estado inicial igual 0 e clicado igual 1.
 *	 Atributo posicao: marca a posicao dos respectivos botões.
 *   O array ordemClick armazena um historico dos clicks temporarialmente até o final do seu preenchimento.
 *   Contudo, assim que preenchido ele deve retorna uma string e reseta o atributo clicado assim como a si mesmo.
 */
var botoes = document.querySelectorAll("button");
var ordemClick = []; // Historico dos clicks
for(var i = 0; i < botoes.length; i++) {

	botoes[i].setAttribute('clicado', 0); // Atributo criado para marcar se já foi clicado ou não
	botoes[i].setAttribute('posicao', (i + 1)); // Atributo criado para marcar a posição do botão
	botoes[i].addEventListener("click", function(){
		var position = this.textContent.lastIndexOf("-") + 1; // Posição do primeiro character do ultimo hífen (segundo hífen no nosso caso).
		console.log(this.textContent.substr(position)); // Retorne a última parte (depois do segundo hífen)
		

		 // Se o elemento ainda não foi clicado, alteramos o atributo clicado e registramos sua posição no historico
		if( parseInt(this.getAttribute("clicado")) == 0) {
			this.setAttribute('clicado', 1);
			ordemClick.push(parseInt(this.getAttribute("posicao")));
		}

		// Se todos os botões já foram cliados, mostramos uma string com '-' para visualização das sequencias
		if(ordemClick.length > 4) {
			console.log(ordemClick.join("-"));
			
			// Após o registro ser preenchido começamos tudo novamente
			ordemClick = [];
			for(var j = 0; j < botoes.length; j++) {
				botoes[j].setAttribute('clicado', 0);
			}
		}
	});
}




