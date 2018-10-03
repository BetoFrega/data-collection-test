let array = new Array;
$('#produtos > a').each(function(){
	array[array.length] = this.getAttribute('data-sku');
});
console.log(array);
$('#produtos').find('a').click(function () {
	let produto = new Object();
	produto.sku = this.getAttribute('data-sku');
	produto.name = this.children[0].innerText;
	produto.price = this.children[2].innerText;
	console.log(produto);
});