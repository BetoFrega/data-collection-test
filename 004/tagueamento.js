let array = new Array;
let elementos = Array.prototype.slice.call(document.querySelectorAll("#botoes > button"));
for (let i = 0; i < elementos.length; i++) {
	array[array.length] = elementos[i].innerText;
}
console.log(array);
for (let i = 0; i < array.length; i++) {
	elementos[i].addEventListener("mousedown", function(){
		console.log(this.innerText);
	});
}