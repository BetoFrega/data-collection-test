(function($) {
$( document ).ready(function() {
	var products_sku;
    products_sku = $("#produtos a").map(function(){return $(this).attr('data-sku');}).get();
	console.log(products_sku);
	
	$("#produtos a").click(function(){
		var product = {
			name:$( '.name', $( this ) ).text(), 
			price:$( '.name', $( this ) ).text(), 
			sku:$(this).attr('data-sku')};
			console.log(product);
	});
	
});
}(jQuery));