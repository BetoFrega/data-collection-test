var botoes = document.querySelectorAll('#botoes button');
var retorno = [];

for (var i = 0; i < btn.length; i++) {
	botoes [i].addEventListener('click', function() {
		console.log(this.innerText);
	});
}

botoes.forEach(function(element,index) {
	retorno.push(element.innerText);
});
console.log(retorno);
