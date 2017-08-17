$(document).ready(function() {
	var botoes = [];

	$.each($('#botoes button'), function(key, value) {
		botoes.push($(value).text());
	});

	$('#botoes button').on('click', function() {
		console.log(($(this).text()));
	});

	console.log(botoes);
});