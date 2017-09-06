$(document).ready( function(){
	$("#botoes").find('button').each(function () {
		var array = [$(this).html()];

		console.log(array);

		$(this).click( function(){
			console.log($(this).html());
		});
	});
});