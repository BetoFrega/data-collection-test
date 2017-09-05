 $(document).ready( function(){
	

	$("#produtos a").click(function () {

		var obj = new Object();
	
		obj.nome = $(this).find("p.name").text();
		obj.preco = $(this).find("p.price").text();
    	obj.sku = $(this).attr("data-sku");
    

    	console.log(obj);
		
	});

	
});