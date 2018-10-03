let array = new Array;
let elementos = Array.prototype.slice.call(document.querySelectorAll("#valores > span"));
for (let i = 0; i < elementos.length; i++) {
	array[array.length] = elementos[i].innerText;
}
console.log(array);
let botoes = Array.prototype.slice.call(document.querySelectorAll("#botoes > a"));
for (let i = 0; i < botoes.length; i++) {
	botoes[i].addEventListener("mousedown", function(){
		console.log(array[this.innerText - 1]);
	});
}