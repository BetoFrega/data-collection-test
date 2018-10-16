var lista = new Array();

document.getElementById('botoes').addEventListener("click", function(event) {
	if (event.target.nodeName == "BUTTON"){
		var part = event.target.textContent.split('-');
		lista.push(part[0]);
		console.log(lista);
	}
});