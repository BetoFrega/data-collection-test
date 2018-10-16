var lista = new Array();

/*
Pega o elemento com o ID botoes e seleciona todos elemento buttun dentro desse elemento e
adiciona o conteudo de texto na lista
*/
document.getElementById('botoes').querySelectorAll('button').forEach(function(item, i){
	lista.push(item.textContent);
});

console.log(lista);

/*
pega o elemento com id botoes e adiciona um event listener de click nele, se o target do 
evento for um elemento 'button' ele realiza a função.
*/
document.getElementById('botoes').addEventListener("click", function(event) {
	if (event.target.nodeName == "BUTTON")
		console.log(event.target.textContent);
});