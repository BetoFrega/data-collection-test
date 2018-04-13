'use strict';
var btClicked = [];
var btTotal = document.querySelectorAll('button');
var btTotalArray = Array.prototype.slice.call(btTotal).map(function(arg){ 
	return arg.innerText;
}); 

function btValClick () {
//FUNÇÃO QUE MONTA O OBJETO NA ORDEM DE CLIQUE 
	var btName = btTotalArray.every(function (arg) {
		return (btClicked.indexOf(arg) >= 0);
	});

	if (btName) {
		console.log(btClicked.toString());
	}
}

for (var i = 0; i < btTotal.length; i++) {
	var button = btTotal[i];
//FUNÇÃO QUE RETORNA O TEXTO DO ELEMENTO CLICADO
	button.addEventListener('click', function(event) {
		console.log(this.innerText.split('-')[0]);
		btClicked.push(this.innerText);

		btValClick();
	})
}

/*
INICIALMENTE FOI CRIADA A FUNÇÃO QUE RETORNA A PRIMEIRA PARTE DO TEXTO DO BOTÃO NO CLIQUE DO USUÁRIO,
DEPOIS FOI CRIADA A FUNÇÃO QUE ATUALIZA A VARIAVEL DE RETORNO DO VALOR FINAL QUE É APRESENTADO APÓS O CLIQUE NO ÚLTIMO BOTÃO.

*/