(function($) {
$( document ).ready(function() {
	var buttons;
    buttons = $("#botoes button").map(function(){return $(this).html();}).get();
	console.log(buttons);
	
	$("#botoes button").click(function(){
		console.log($(this).html())
	})
 
});
}(jQuery));