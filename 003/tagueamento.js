/*
 *   Todos os botões vão possui dois atributo clicado e posicao. 
 *	 Atributo clicado: mostra seu estado atual sendo o estado inicial igual 0 e clicado igual 1.
 *	 Atributo posicao: marca a posicao dos respectivos botões.
 *   A variável count é apenas um contador que será incrementado após cada alteração no atributo 'clicado'.
 *   O array ordemClick armazena um historico dos clicks temporarialmente até que todos os botões sejam clicados.
 * 	 Contudo, quando count for igual a 5 vamos atribuir 0 para OrdemClick, attributo 'Clicado' e a ele mesmo
 */
var botoes = document.querySelectorAll("button");
var ordemClick = []; // Historico dos clicks
var count = 0;
for(var i = 0; i < botoes.length; i++) {

	botoes[i].setAttribute('clicado', 0); // Atributo criado para marcar se já foi clicado ou não
	botoes[i].setAttribute('posicao', (i + 1)); // Atributo criado para marcar a posição do botão
	botoes[i].addEventListener("click", function(){
		var position = this.textContent.lastIndexOf("-") + 1; // Posição do primeiro character do ultimo hífen (segundo hífen no nosso caso).
		console.log(this.textContent.substr(position)); // Retorne a última parte (depois do segundo hífen)
		

		 // Se o elemento ainda não foi clicado, alteramos o atributo 'clicado' e  incrementamos nosso contador.
		if( parseInt(this.getAttribute("clicado")) == 0) {
			this.setAttribute('clicado', 1);
			count++;
			
		}
		//Registramos a posição do elemento clicado no array 'ordemClick'
		ordemClick.push(parseInt(this.getAttribute("posicao")));
		// Se todos os botões já foram cliados, mostramos uma string com '-' para visualização das sequencias
		if(count >= 5) {
			console.log(ordemClick.join("-"));
			
			// Após o registro ser preenchido começamos tudo novamente
			ordemClick = [];
			for(var j = 0; j < botoes.length; j++) {
				botoes[j].setAttribute('clicado', 0);
			}
			count = 0;
		}
	});
}



