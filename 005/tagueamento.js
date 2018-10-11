(function(){
	var array = new Array;
	var elementos = Array.prototype.slice.call(document.querySelectorAll("#valores > span"));
	for (var i = 0; i < elementos.length; i++) {
		array[array.length] = elementos[i].innerText;
	}
	console.log(array);
	var botoes = Array.prototype.slice.call(document.querySelectorAll("#botoes > a"));
	for (var i = 0; i < botoes.length; i++) {
		botoes[i].addEventListener("mousedown", function(){
			console.log(array[this.innerText - 1]);
		});
	}
})();