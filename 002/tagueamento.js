$(document).ready(function() {
	var valores = $('#valores span');
	var botoes = $('#botoes a');
	var retorno = [];

	$.each(botoes, function(index,element) {
		$(botoes[index]).on('click', function() {
                    console.log($(valores[index]).text());
		});
	});
        $.each(valores, function(index,element) {
            retorno.push($(element).text());
	});
	console.log(retorno);
}); 
