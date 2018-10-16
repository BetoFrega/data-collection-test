var lista = new Array();

document.getElementById('produtos').querySelectorAll('a').forEach(function(item, i){
	lista.push(item.getAttribute('data-sku'));
});

console.log(lista);

document.getElementById('produtos').addEventListener("click", function(event) {
	if (event.target.nodeName == "A"){
		
		var produto = {nome: event.target.querySelectorAll('.name')[0].textContent, 
						preco: event.target.querySelectorAll('.price')[0].textContent, 
						sku: event.target.getAttribute('data-sku')};

		console.log(produto.nome);

		ga('send', {
			hitType: 'event',
			eventCategory: 'Catalogo',
			eventAction: 'Produtos',
			eventLabel: produto.nome,
			eventValue: produto.price
		});

	}
});