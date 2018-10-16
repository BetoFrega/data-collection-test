var lista = new Array();

document.getElementById('valores').querySelectorAll('span').forEach(function(item, i){
	lista.push(item.textContent);
});

console.log(lista);

document.getElementById('botoes').addEventListener("click", function(event) {
	if (event.target.nodeName == "A")
		console.log(lista[parseInt(event.target.textContent)-1]);
});