$(document).ready(function() {
	buttons = $('#botoes button');
	strCount = '';
	strShow = false;

	$(buttons).on('click', function() {
		$(this).addClass('counted');
		strCount += this.innerText+', ';

		if (buttons.length == $('.counted').length && strShow == false) {
			strShow = true;
			strCount = strCount.slice(0, -2);
			console.log(strCount);
		}

		var text = this.innerText.split('-')[2];
		console.log(text);
	});
});


// Todos os botões da página foram armazenados na variável buttons, e em cada um destes botões será adicionado um listener de cliques para que eles recebam a classe "counted" após o primeiro evento.
// A variável strCount, na sequência, armazena numa string os valores de todos os botões já clicados. Além disso, em cada clique de botão, o valor do elemento clicado é capturado, parseado
// e devolvido ao console.
// 
// Na primeira vez em a quantidade de botões "counted" seja equivalente ao total de botões, a string strCount será tratada para retirar da última vírgula e em seguida será retornada ao console.