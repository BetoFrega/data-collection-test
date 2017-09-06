 function tag() {

	var i = 1
	$("#valores").find('span').each(function () {
		var array = [$(this).html()];
		$(this).addClass(i+"");
		console.log(array);	
		i = i + 1;
	});

	$("#botoes a").click(function () {
		var txt = $(this).html();
		console.log($("#valores").find('span.'+txt).html());
	});
}

$(document).ready( function(){
	setTimeout(tag, 100); 
});