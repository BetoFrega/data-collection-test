$( document ).ready(function() {
	var order = [];
	var btval;
	$("#botoes button").click(function(){
		btval = $(this).html().split("-")[2];
		console.log(btval);
		$(this).attr("disabled","disabled");
		order.push(btval)
		if(order.length == 5){
			console.log(order);
		}
	});
});