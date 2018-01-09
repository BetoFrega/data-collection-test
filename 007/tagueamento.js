function returnSkusOfProductsList(){

	var arrayBotoes = [];
	$('#produtos').find('a').each(function(index, el) {
		arrayBotoes.push($(this).data('sku'));
	});
	console.log(arrayBotoes)			
}

function getInfoProduct(){

	produto = {};
	$('#produtos').find('a').click(function(event) {
		produto['sku'] = $(this).data('sku');
		produto['nome'] = $(this).find('.name').text();
		produto['preco'] = $(this).find('.price').text();
		console.log(produto);
	});
}

$(document).ready(function() {
	returnSkusOfProductsList();
	getInfoProduct();	
});
