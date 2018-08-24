
$( document ).ready(function() {
	var arrayprod = [];

	$('#produtos').find('a').each(function () {
		var textoprod = $(this).attr('data-sku');
		arrayprod.push(textoprod);

	$(this).on("click", function(){

   			var produto = new Object();
   			produto.nome = $(this).children('.name').text();
   			produto.preco = $(this).children('.price').text();
   			produto.sku = textoprod;
   			console.log(produto);
		});	
	});

	console.log(arrayprod);
});
