$(document).ready( function(){

		$("#botao button").click(function () {
			setTimeout(function () {
				console.log($("#mensagem").text());
			}, Math.random() * 4000 + 1000)
		});

});