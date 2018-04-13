'use strict';
var totButton = document.getElementsByTagName('button')

//FUNÇÃO QUE MONTA O ARRAY COM O NOME DOS BOTÕES NO CARREGAMENTO DA PÁGINA
function btNames (arg) {
	var btArray = []
	for(var i = 0; i < arg.length; i++){
		btArray.push(arg[i].textContent)
	}
	return btArray;
}
/*
FUNÇÃO QUE VALIDA O CARREGAMENTO DA PÁGINA.
SUPORTE PARA TODAS AS VERSÕES DO CHROME, FIREFOX EDGE E IE10++
*/
var pgLoader = function(){
//FUNÇÃO QUE RETORNA O ARRAY COM O NOME DOS ELEMENTOS CARREGADOS NA PÁGINA.	
	var tButtons = document.getElementsByTagName('button');
	console.log(btNames(tButtons));

//FUNÇÃO QUE RETORNA O TEXTO DO ELEMENTO CLICADO
for (var i = 0; i < totButton.length; i++) {
        var btName = totButton[i];
    
        btName.addEventListener('click', function(arg) {
           console.log(this.innerText);
       })
  }
};

// SUPORTADO EM VERSÕES DO ACIMA DO IE8
// https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/onreadystatechange
if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)){
	pgLoader();
} else {
	document.addEventListener("DOMContentLoaded", pgLoader);
}



