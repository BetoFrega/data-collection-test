$(document).ready(function(){
	/*Criado um array com todos os textos dos botões*/
	var array = new Array();
	$('#botoes > button').each(function(){
		array.push(this.innerText);
	});
	/*Criado um array para identificar os botões que já foram clicados e os que não foram*/
	var clicados = new Array();
	for (var i = 0; i < array.length; i++) {
		clicados[i] = false;
	}
	
	/*Criado um array para armazenar a ordem dos cliques*/
	var ordem = new Array();
	/*Quando um dos botões for clicado*/
	$('#botoes > button').click(function(){
		/*Um split será aplicado ao texto do botão pegando o ultimo trecho após o segundo hífen*/
		var trecho = this.innerText.split('-')[0];
		/*O trecho será retornado*/
		console.log(trecho);
		/*O texto do botão será comparado para com os textos dos botões*/
		for (var i = 0; i <= array.length; i++) {
			if (array[i] === this.innerText) {
				/*Caso o texto seja encontrado uma flag de verdadeiro será colocado no array de itens clicados*/
				clicados[i] = 1;
				/*O item será colocado no array de ordem de itens clicados*/
				ordem.push(i);
			}
		}
		/*Criado uma flag para identificar se todos foram clicados*/
		var resultado = 5;
		/*Aqui uma análise dos itens clicados será realizada, e caso resultado estejam como true,
		a flag de identificação será colocada como false caso alguns dos itens não sejam true*/
		for (var j = 0; j < clicados.length; j++) {
			if(!clicados[j]){
				resultado -= 1;
			}
		}
		/*Se a flag resultado estiver como verdadeiro será impresso a ordem de itens clicados*/
		if (resultado >= 5) {
			/*Criado uma string que irá receber a ordem dos itens clicados*/
			var str = "Ordem dos itens clicados: ";
			for (var k = 0; k < ordem.length; k++) {
				str += ordem[k] + 1;
				str += " ";
			};
			console.log(str);
		}
	});
});