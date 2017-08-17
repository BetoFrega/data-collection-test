window.onload = function() {
	buttons = document.querySelectorAll('#botoes button');
	strCount = '',
	strShow = false;

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function() {
			this.setAttribute('class','counted');
			strCount += this.innerText+', ';

			var text = this.innerText.split('-')[0];
			console.log(text);

			if (buttons.length == document.querySelectorAll('.counted').length && strShow == false) {
				strShow = true;
				strCount = strCount.slice(0, -2);
				console.log(strCount);
			}
		});
	}
}

// Todos os botões da página foram armazenados na variável buttons, e em cada um destes botões foi adicionado um listener de cliques
// para que eles recebessem a classe "counted" após o primeiro evento.

// A variável strCount, na sequência, armazenou numa string os valores de todos os botões já clicados. Na primeira vez em a quantidade
// de botões "counted" seja equivalente ao total de botões, a string strCount será tratada para retirar da última vírgula e em seguida
// será retornada ao console.

// Além disso, cada clique de botão captura o primeiro trecho de seu respectivo valor (tudo o houver antes do primeiro hífen) e retorna num console.log.