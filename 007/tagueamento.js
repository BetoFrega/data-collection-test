(function(p){
	var products = [];
	Array.prototype.forEach.call(p,function(el, i){
		var info = {
			'nome': el.querySelector('.name').innerHTML,
			'preco': el.querySelector('.price').innerHTML,
			'sku': el.getAttribute("data-sku")
		};
		
		el.addEventListener('click',function(){
			console.log(info);
		},false)

		products.push(info.sku);
	});

	window.onload = function(){
		console.log(products);
	};
})(document.getElementById('produtos').children);