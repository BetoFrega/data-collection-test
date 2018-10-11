(function(){
	var array = new Array;
	var elementos = Array.prototype.slice.call(document.querySelectorAll("#botoes > button"));
	for (var i = 0; i < elementos.length; i++) {
		array[array.length] = elementos[i].innerText;
	}
	console.log(array);
	for (var i = 0; i < array.length; i++) {
		elementos[i].addEventListener("click", function(){
			console.log(this.innerText);
		});
	}
})();