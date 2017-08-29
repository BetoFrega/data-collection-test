var valores = document.querySelectorAll('#valores span');
var botoes  = document.querySelectorAll('#botoes a');
var retorno = [];

for (var i = 0; i < botoes .length; i++) {
	botoes [i].addEventListener('click', function() {
		var val = this.innerText;
		console.log(valores[val-1].innerText);
	});
}

valores.forEach(function(element,index) {
	retorno.push(element.innerText);
});
console.log(retorno);
