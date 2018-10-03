/*Criado um array com todos os textos dos botões*/
let array = new Array();
$('#botoes > button').each(function(){
	array[array.length] = this.innerText
});
/*Criado um array para identificar os botões que já foram clicados e os que não foram*/
let clicados = new Array();
for (let i = 0; i < array.length; i++) {
	clicados[i] = false;
}
/*Criado um array para armazenar a ordem dos cliques*/
let ordem = new Array();
/*Criado uma flag para identificar se todos foram clicados*/
let todos = true;
/*Criado uma string que irá receber a ordem dos itens clicados*/
let str = "Ordem dos itens clicados: ";
/*Quando um dos botões for clicado*/
$('#botoes > button').click(function(){
	/*Um split será aplicado ao texto do botão pegando o ultimo trecho após o segundo hífen*/
	let trecho = this.innerText.split('-')[0];
	/*O trecho será retornado*/
	console.log(trecho);
	/*O texto do botão será comparado para com os textos dos botões*/
	for (let i = 0; i <= array.length; i++) {
		if (array[i] === this.innerText) {
			/*Caso o texto seja encontrado uma flag de verdadeiro será colocado no array de itens clicados*/
			clicados[i] = true;
			/*O item será colocado no array de ordem de itens clicados*/
			ordem[ordem.length] = i;
		}
	}
	/*Aqui uma análise dos itens clicados será realizada, e caso todos estejam como true,
	a flag de identificação será colocada como false caso alguns dos itens não sejam true*/
	for (let j = 0; j < clicados.length; j++) {
		if(!clicados[j]){
			todos = false;
		}
	}
	/*Se a flag todos estiver como verdadeiro será impresso a ordem de itens clicados*/
	if (todos) {
		for (let k = 0; k < ordem.length; k++) {
			str += ordem[k] + 1;
			str += " ";
		};
		console.log(str);
	}
});