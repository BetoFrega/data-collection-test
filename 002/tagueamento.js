(function($) {
$( document ).ready(function() {
	var spans;
    spans = $("#valores span").map(function(){return $(this).html();}).get();
	console.log(spans);
	
	$("#botoes a").click(function(){
		console.log($($("#valores span")[$(this).html()-1]).html())
	})
 
});
}(jQuery));