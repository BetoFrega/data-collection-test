$( document ).ready(function() {

	var arrayb = [];

	$('#botoes').find('button').each(function () {
    	var textob = $(this).text();

    	arrayb.push(textob);
   		$(this).on("click", function(){
   			console.log(textob);
 
		});

	})

	console.log(arrayb);

});
