$(document).ready(function() {
	$('#botao button').on('click', function() {
		var interval = setInterval(function() {
			if ($('#mensagem div').length > 0) {
				console.log($('#mensagem').text());
				clearInterval(interval);
			}
		}, 1000);
	});
});