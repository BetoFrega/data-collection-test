'use strict';
var totValues = document.getElementsByTagName('span');
var btArray = Array.prototype.slice.call(totValues)
var btNames = [];

/*
FUNÇÃO QUE VALIDA O CARREGAMENTO DA PÁGINA.
SUPORTE PARA TODAS AS VERSÕES DO CHROME, FIREFOX EDGE E IE10++
*/
var pgLoader = function(){

	//FUNÇÃO DE RETORNO DO ARRAY COM OS TEXTOS DOS BOTÕES VERDES NO CARREGAMENTO DA PÁGINA
	function greenButtons() {
		var nmButtons = []
		for(var i = 0; i < totValues.length; i++){
			nmButtons.push(totValues[i].textContent)
		}
		return nmButtons;
	}
	console.log(greenButtons());

//RETORNA O VALOR DO BOTÃO EM VERDE ACIMA DO BOTÃO.
  for (var i = 0; i < totValues.length; i++) {

      totValues[i].addEventListener('click', function(arg) {
          console.log(totValues[btArray.indexOf(this)].innerText);
      })

      
  }

};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)){
	pgLoader();
} else {
	document.addEventListener("DOMContentLoaded", pgLoader);
}



